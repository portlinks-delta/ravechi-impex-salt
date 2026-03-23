"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

const loadRecaptcha = () => {
  return new Promise<void>((resolve) => {
    if (window.grecaptcha) return resolve();

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}`;
    script.async = true;
    script.onload = () => resolve();

    document.body.appendChild(script);
  });
};

export default function RequestQuote() {
  const [open, setOpen] = useState(false);

  // 👇 runs when dialog opens
  const handleOpenChange = async (isOpen: boolean) => {
    setOpen(isOpen);

    if (isOpen) {
      await loadRecaptcha(); // 🚀 load only when needed
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!window.grecaptcha) {
      toast.error("reCAPTCHA not loaded");
      return;
    }

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    const token = await new Promise<string>((resolve) => {
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY!, {
            action: "contact",
          })
          .then(resolve);
      });
    });

    if (!token) {
      toast.error("Captcha failed");
      return;
    }

    const text = `Hello, I want a quote:

Name: ${name}
Email: ${email}
Phone: ${phone}

Requirement:
${message}`;

    const encoded = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/+918200450219?text=${encoded}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="text-center w-full md:w-auto">
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogTrigger
          render={
            <Button size="lg" className="cursor-pointer w-full">
              Request a Quote <ArrowRight />
            </Button>
          }
        />
        <DialogContent className="sm:max-w-lg rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl">Product Requirement</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full border border-slate-200 rounded-lg px-4 py-2"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full border border-slate-200 rounded-lg px-4 py-2"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="w-full border border-slate-200 rounded-lg px-4 py-2"
            />

            <textarea
              name="message"
              placeholder="Describe your requirement..."
              rows={4}
              className="w-full border border-slate-200 rounded-lg px-4 py-2"
            />

            <Button type="submit">Submit Request</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
