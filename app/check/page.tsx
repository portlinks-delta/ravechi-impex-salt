"use client";

import { useEffect } from "react";

export default function CheckPage() {
  useEffect(() => {
    const run = async () => {
      const script = document.createElement("script");
      script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}`;
      script.async = true;

      script.onload = () => {
        window.grecaptcha.ready(async () => {
          const token = await window.grecaptcha.execute(
            process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY!,
            { action: "entry" },
          );

          const res = await fetch("/api/verify-captcha", {
            method: "POST",
            body: JSON.stringify({ token }),
          });

          const data = await res.json();

          if (data.success) {
            document.cookie = "captcha_passed=true; path=/";

            window.location.href = "/";
          } else {
            window.location.href = "/blocked";
          }
        });
      };

      document.body.appendChild(script);
    };

    run();
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      Checking your browser...
    </div>
  );
}
