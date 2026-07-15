import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@vercel/kv';
import { isOwner } from '@/lib/analytics-auth';

function isKvConfigured() {
  return Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}

export async function POST(req: NextRequest) {
  try {
    if (!isKvConfigured()) {
      return NextResponse.json({ skipped: true, reason: 'kv_not_configured' });
    }

    const isOwnerUser = await isOwner();
    if (isOwnerUser) {
      console.log('Tracking skipped: user is owner');
      return NextResponse.json({ skipped: true });
    }
    
    const body = await req.json();
    const { type, sessionId } = body;
    const ip = req.headers.get('x-forwarded-for') || 'anonymous';
    const country = req.headers.get('x-vercel-ip-country') || 'unknown';
    
    console.log(`Tracking event: ${type} from ${country} (IP: ${ip})`);

    if (type === 'init') {
      await kv.incr('stats:total_views');
      await kv.sadd('stats:unique_ips', Buffer.from(ip).toString('base64').slice(0, 10));
      await kv.hincrby('stats:countries', country, 1);
      
      await kv.hset('session:' + sessionId, { 
        startTime: Date.now(), 
        country, 
        lastHeartbeat: Date.now() 
      });
      await kv.expire('session:' + sessionId, 86400);
      console.log('Visit recorded in KV');
    }
    
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('TRACKING ERROR LOG:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
