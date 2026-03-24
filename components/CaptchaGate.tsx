"use client";

import { useEffect } from "react";

export default function BotCheck() {
  useEffect(() => {
    const runCaptcha = async () => {
      const script = document.createElement("script");
      script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}`;
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        window.grecaptcha.ready(async () => {
          const token = await window.grecaptcha.execute(
            process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY!,
            { action: "homepage" },
          );

          const res = await fetch("/api/verify-captcha", {
            method: "POST",
            body: JSON.stringify({ token }),
          });

          const data = await res.json();

          if (!data.success) {
            window.location.href = "/blocked";
          }
        });
      };
    };

    runCaptcha();
  }, []);

  return null;
}
