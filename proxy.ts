import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Known OG / SEO crawlers to always allow
const BOT_USER_AGENTS = [
  "facebookexternalhit",
  "Twitterbot",
  "WhatsApp",
  "LinkedInBot",
  "Slackbot",
  "TelegramBot",
  "Discordbot",
  "googlebot",
  "bingbot",
  "Applebot",
  "Pinterest",
  "Embedly",
];

function isCrawler(req: NextRequest): boolean {
  const ua = req.headers.get("user-agent") ?? "";
  return BOT_USER_AGENTS.some((bot) =>
    ua.toLowerCase().includes(bot.toLowerCase()),
  );
}

// Static assets & internal Next.js paths — always skip
function isStaticAsset(pathname: string): boolean {
  return (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/check") ||
    pathname.startsWith("/blocked") ||
    /\.(jpg|jpeg|png|svg|ico|webp|gif|css|js|woff2?)$/i.test(pathname)
  );
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Always allow static assets & Next internals
  if (isStaticAsset(pathname)) {
    return NextResponse.next();
  }

  // Always allow OG crawlers & search engine bots
  if (isCrawler(req)) {
    return NextResponse.next();
  }

  // Check captcha cookie for real users
  const hasCaptcha = req.cookies.get("captcha_passed");
  if (!hasCaptcha) {
    return NextResponse.redirect(new URL("/check", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|check|blocked).*)"],
};
