import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";
import { isOwner } from "@/lib/analytics-auth";

function isKvConfigured() {
  return Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}

export async function POST(req: NextRequest) {
  try {
    if (!isKvConfigured()) {
      return NextResponse.json({ skipped: true, reason: "kv_not_configured" });
    }

    if (await isOwner()) return NextResponse.json({ skipped: true });
    const { sessionId } = await req.json();
    await kv.hset("session:" + sessionId, { lastHeartbeat: Date.now() });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Heartbeat error" }, { status: 500 });
  }
}
