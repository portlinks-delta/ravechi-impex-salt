import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(req: NextRequest) {
  const hasCaptcha = req.cookies.get("captcha_passed");
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/check") ||
    pathname.startsWith("/blocked") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  if (!hasCaptcha) {
    return NextResponse.redirect(new URL("/check", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|check|blocked).*)"],
};
