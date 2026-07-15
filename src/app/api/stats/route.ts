import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';
import { isOwner } from '@/lib/analytics-auth';

export async function GET() {
  if (!(await isOwner())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  
  try {
    // Usamos comandos individuales para diagnosticar qué falla
    let totalViews = 0;
    try { totalViews = await kv.get('stats:total_views') || 0; } catch(e) { console.error('KV Error total_views:', e); }
    
    let uniqueIps = 0;
    try { uniqueIps = await kv.scard('stats:unique_ips') || 0; } catch(e) { console.error('KV Error unique_ips:', e); }
    
    let countries = {};
    try { countries = await kv.hgetall('stats:countries') || {}; } catch(e) { console.error('KV Error countries:', e); }
    
    let devices = {};
    try { devices = await kv.hgetall('stats:devices') || {}; } catch(e) { console.error('KV Error devices:', e); }
    
    let sessions = [];
    try {
      const sessionKeys = await kv.keys('session:*') || [];
      for (const key of sessionKeys.slice(0, 10)) {
        const data = await kv.hgetall(key);
        if (data) sessions.push({ id: key.toString().split(':')[1], ...data });
      }
    } catch(e) { console.error('KV Error sessions:', e); }

    return NextResponse.json({ totalViews, uniqueIps, countries, devices, sessions });
  } catch (error: any) {
    console.error('Global Stats API Error:', error);
    return NextResponse.json({ error: 'Stats error', details: error.message }, { status: 500 });
  }
}
