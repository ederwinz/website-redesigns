import type { Metadata } from "next";

import { contactIntro, socialLinks } from "@/lib/content";
import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "contact — Henry Pan",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 sm:px-10 sm:py-20">
      <Reveal>
        <h1 className="font-display text-3xl uppercase tracking-wide sm:text-4xl">
          Contact
        </h1>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="mt-6 max-w-md text-base leading-relaxed text-ink-700">
          {contactIntro}
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <ContactForm />
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-16 border-t border-border pt-8">
          <p className="font-label text-xs uppercase text-muted-foreground">
            Or reach me elsewhere
          </p>
          <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {socialLinks.map((link) => (
              <div key={link.label}>
                <dt className="font-label text-xs uppercase text-muted-foreground">
                  {link.label}
                </dt>
                <dd className="mt-1">
                  <a
                    href={link.href}
                    target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={
                      link.href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="text-base text-foreground underline decoration-muted-foreground underline-offset-2 hover:decoration-foreground"
                  >
                    {link.handle}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </div>
  );
}
