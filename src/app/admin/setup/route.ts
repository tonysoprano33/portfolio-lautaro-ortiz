import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { OWNER_COOKIE_NAME, OWNER_SECRET } from '@/lib/analytics-auth';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const password = searchParams.get('pass');
  
  // Solo si la contraseña es correcta, le damos la llave
  // Puse 'admin123' por defecto, pero podés cambiarla acá
  if (password !== 'lautaro_admin') {
    return new NextResponse('Not Found', { status: 404 });
  }

  const cookieStore = await cookies();
  
  cookieStore.set(OWNER_COOKIE_NAME, OWNER_SECRET, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
  });

  const url = req.nextUrl.clone();
  url.pathname = '/admin/stats';
  return NextResponse.redirect(url);
}
