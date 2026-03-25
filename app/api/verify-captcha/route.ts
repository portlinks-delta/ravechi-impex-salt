import { rateLimit } from "@/lib/rateLimit";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { token } = await req.json();

  if (!token) {
    return NextResponse.json({ success: false });
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0] ||
    req.headers.get("x-real-ip") ||
    req.headers.get("cf-connecting-ip") ||
    req.headers.get("true-client-ip") ||
    "0.0.0.0";

  const { success } = rateLimit(ip);
  if (!success)
    return NextResponse.json({ success: false, error: "Rate limit exceeded" });

  const secret = process.env.SECRET_KEY;

  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `secret=${secret}&response=${token}`,
  });

  const data = await res.json();
  console.log(data);
  // data.score = 0.1;
  if (!data.success || data.score < 0.5) {
    return NextResponse.json({ success: false, score: data.score });
  }

  const response = NextResponse.json({
    success: true,
    score: data.score,
  });

  response.cookies.set("captcha_passed", "true", {
    path: "/",
    httpOnly: true,
  });

  return response;
}
