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
import { PHONE_NUMBER } from "@/constants";
import { z } from "zod";

const requestQuoteSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(80, "Name is too long."),
  email: z.email("Enter a valid email address."),
  phone: z
    .string()
    .trim()
    .regex(/^[+]?[0-9\s\-()]{8,20}$/, "Enter a valid phone number."),
  message: z
    .string()
    .trim()
    .min(10, "Requirement must be at least 10 characters.")
    .max(1000, "Requirement is too long."),
});

type RequestQuoteFormValues = z.infer<typeof requestQuoteSchema>;
type RequestQuoteErrors = Partial<Record<keyof RequestQuoteFormValues, string>>;

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
  const [formValues, setFormValues] = useState<RequestQuoteFormValues>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<RequestQuoteErrors>({});

  // 👇 runs when dialog opens
  const handleOpenChange = async (isOpen: boolean) => {
    setOpen(isOpen);

    if (isOpen) {
      await loadRecaptcha(); // 🚀 load only when needed
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const parsed = requestQuoteSchema.safeParse(formValues);
    if (!parsed.success) {
      const nextErrors: RequestQuoteErrors = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0] as keyof RequestQuoteFormValues;
        if (!nextErrors[field]) {
          nextErrors[field] = issue.message;
        }
      }
      setErrors(nextErrors);
      toast.error("Please fill all fields correctly before submitting.");
      return;
    }

    setErrors({});
    const { name, email, phone, message } = parsed.data;

    const text = `Hello, I want a quote:

Name: ${name}
Email: ${email}
Phone: ${phone}

Requirement:
${message}`;

    const encoded = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encoded}`;

    window.open(whatsappUrl, "_blank");
    setOpen(false);
    setFormValues({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange =
    (field: keyof RequestQuoteFormValues) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.target.value;
      setFormValues((prev) => ({ ...prev, [field]: value }));

      if (errors[field]) {
        const partial = requestQuoteSchema.shape[field].safeParse(value);
        setErrors((prev) => ({
          ...prev,
          [field]: partial.success ? undefined : partial.error.issues[0]?.message,
        }));
      }
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
              value={formValues.name}
              onChange={handleChange("name")}
              className={`w-full border rounded-lg px-4 py-2 ${
                errors.name ? "border-red-500" : "border-slate-200"
              }`}
            />
            {errors.name && (
              <p className="text-sm text-red-600 -mt-2">{errors.name}</p>
            )}

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formValues.email}
              onChange={handleChange("email")}
              className={`w-full border rounded-lg px-4 py-2 ${
                errors.email ? "border-red-500" : "border-slate-200"
              }`}
            />
            {errors.email && (
              <p className="text-sm text-red-600 -mt-2">{errors.email}</p>
            )}

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formValues.phone}
              onChange={handleChange("phone")}
              className={`w-full border rounded-lg px-4 py-2 ${
                errors.phone ? "border-red-500" : "border-slate-200"
              }`}
            />
            {errors.phone && (
              <p className="text-sm text-red-600 -mt-2">{errors.phone}</p>
            )}

            <textarea
              name="message"
              placeholder="Describe your requirement..."
              rows={4}
              value={formValues.message}
              onChange={handleChange("message")}
              className={`w-full border rounded-lg px-4 py-2 ${
                errors.message ? "border-red-500" : "border-slate-200"
              }`}
            />
            {errors.message && (
              <p className="text-sm text-red-600 -mt-2">{errors.message}</p>
            )}

            <Button type="submit">Submit Request</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
