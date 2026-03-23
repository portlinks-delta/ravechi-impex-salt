declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (
        siteKey: string,
        options: { action: string },
      ) => Promise<string>;
    };
  }
}

export const getRecaptchaToken = async () => {
  if ((window as any).grecaptcha) {
    console.error("reCAPTCHA not loaded");
    return null;
  }

  return new Promise<string>((resolve) => {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY!, {
          action: "visit", // can be login/contact/visit
        })
        .then((token: string) => resolve(token));
    });
  });
};

export {};
