import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const authPaths = ['/sell'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('token');

  if (authPaths.some((p) => pathname.startsWith(p))) {
    if (token) return NextResponse.next();
    else return NextResponse.redirect(new URL('/', request.url));
  } else {
    return NextResponse.next();
  }
}
