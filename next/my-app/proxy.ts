import { type NextRequest, NextResponse } from 'next/server';

export function proxy(req: NextRequest) {
  const didLogin = req.cookies.has('nextjs');
  // if (!didLogin) redirect('/');
  if (!didLogin) return NextResponse.json({ msg: 'Need Login' });
  return NextResponse.next();
}

export const config = {
  // matcher: ['/photos', 'api/books/:path*'],
  matcher: [
    '/admin',
    // '/((?!login|regist|_next/static|_next/image|auth|favicon.ico|robots.txt|images|api/books|api/auth|$).*)',
    // '/api/:path*',
    // '/posts/:postId*/edit',
  ],
};
