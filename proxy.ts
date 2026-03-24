import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(req: NextRequest) {
  const hasCaptcha = req.cookies.get("captcha_passed");

  const url = req.nextUrl;

  if (url.pathname.startsWith("/check") || url.pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  if (!hasCaptcha) {
    return NextResponse.redirect(new URL("/check", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
