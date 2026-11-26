"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Clock, Loader2, Mail, MapPin, Send, type LucideIcon } from "lucide-react";
import { useState } from "react";
import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

// Web3Forms access keys are designed to be public (they only allow sending to your inbox).
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "5f3fc6e9-73b9-4ec2-9766-af112428453b";

type Status = { kind: "idle" | "sending" | "success" | "error"; message?: string };

const details: { icon: LucideIcon; label: string; value: string }[] = [
  { icon: Mail, label: "Email", value: profile.email },
  { icon: MapPin, label: "Location", value: profile.location },
  { icon: Clock, label: "Availability", value: profile.availability },
];

const inputClass =
  "w-full rounded-xl border border-line bg-fg/[0.03] px-4 py-3 text-sm text-fg placeholder:text-fg-3 transition-all focus:border-brand focus:bg-brand/5 focus:shadow-[0_0_0_3px_rgb(220_38_38/0.1)] focus:outline-none";

export function Contact() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    setStatus({ kind: "sending" });

    // Web3Forms emails the message to the inbox tied to this access key.
    let ok = false;
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          ...data,
          subject: `Portfolio: ${data.subject}`,
          from_name: "Kenneth Abejuela Portfolio",
          replyto: data.email,
        }),
      });
      const json = (await res.json()) as { success?: boolean };
      ok = json.success === true;
    } catch {
      ok = false;
    }

    if (ok) {
      form.reset();
      setStatus({ kind: "success", message: "Message sent! I'll get back to you soon." });
    } else {
      setStatus({ kind: "error", message: `Something went wrong. Email me directly at ${profile.email}` });
    }
  }

  const sending = status.kind === "sending";

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          label="Get In Touch"
          title="Let's work together"
          subtitle="Have a project in mind? Let's create something amazing."
        />
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h3 className="mb-4 text-2xl font-bold tracking-tight">Let&apos;s discuss your project</h3>
            <p className="mb-10 leading-7 text-fg-2">
              I&apos;m always open to discussing new projects, creative ideas, book design work, or opportunities to be
              part of your vision.
            </p>
            <ul className="space-y-3">
              {details.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-center gap-4 rounded-xl px-4 py-3 transition-colors hover:bg-fg/[0.03]">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand/15 bg-brand/[0.08] text-brand">
                    <Icon size={19} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{label}</p>
                    {label === "Email" ? (
                      <a href={`mailto:${value}`} className="text-sm break-all text-fg-2 hover:text-brand">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-fg-2">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="rounded-[20px] border border-line bg-card p-6 backdrop-blur-md sm:p-8">
              <div className="space-y-5">
                <Field id="name" label="Your Name">
                  <input id="name" name="name" required maxLength={100} placeholder="Full name" className={inputClass} />
                </Field>
                <Field id="email" label="Email Address">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={200}
                    placeholder="name@example.com"
                    className={inputClass}
                  />
                </Field>
                <Field id="subject" label="Subject">
                  <input
                    id="subject"
                    name="subject"
                    required
                    maxLength={200}
                    placeholder="Project Inquiry"
                    className={inputClass}
                  />
                </Field>
                <Field id="message" label="Message">
                  <textarea
                    id="message"
                    name="message"
                    required
                    maxLength={4000}
                    placeholder="Tell me about your project..."
                    className={`${inputClass} min-h-32 resize-y`}
                  />
                </Field>
              </div>

              <button
                type="submit"
                disabled={sending}
                className="bg-gradient-brand mt-6 flex w-full items-center justify-center gap-2 rounded-xl px-7 py-3 text-sm font-semibold text-white shadow-[0_4px_20px_rgb(220_38_38/0.35)] transition-all duration-300 enabled:hover:-translate-y-0.5 enabled:hover:shadow-[0_8px_30px_rgb(220_38_38/0.45)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                {sending ? "Sending..." : "Send Message"}
              </button>

              <AnimatePresence>
                {(status.kind === "success" || status.kind === "error") && (
                  <motion.p
                    role="status"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`mt-4 rounded-xl border px-4 py-3 text-sm font-medium ${
                      status.kind === "success"
                        ? "border-green-500/20 bg-green-500/[0.08] text-green-500"
                        : "border-red-500/20 bg-red-500/[0.08] text-red-500"
                    }`}
                  >
                    {status.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-fg-2">
        {label}
      </label>
      {children}
    </div>
  );
}
