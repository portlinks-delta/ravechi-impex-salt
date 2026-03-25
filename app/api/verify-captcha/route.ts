import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { token } = await req.json();

  if (!token) {
    return NextResponse.json({ success: false });
  }

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
