"use client";

import { useState, type FormEvent } from "react";
import { toast } from "sonner";

import { contactTopics } from "@/lib/content";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    toast.success("Message sent — Henry will get back to you soon.");
    setName("");
    setEmail("");
    setTopic("");
    setMessage("");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">
      <Field label="Your name">
        <input
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-full border-b border-border bg-transparent py-2 text-base focus:outline-none focus:border-foreground"
        />
      </Field>

      <Field label="Your email">
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full border-b border-border bg-transparent py-2 text-base focus:outline-none focus:border-foreground"
        />
      </Field>

      <Field label="What's this about?">
        <select
          required
          value={topic}
          onChange={(event) => setTopic(event.target.value)}
          className="w-full border-b border-border bg-transparent py-2 text-base focus:outline-none focus:border-foreground"
        >
          <option value="" disabled>
            Choose one
          </option>
          {contactTopics.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Your message">
        <textarea
          required
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="w-full resize-none border-b border-border bg-transparent py-2 text-base focus:outline-none focus:border-foreground"
        />
      </Field>

      <Button type="submit" size="lg" className="w-fit">
        Send message
      </Button>
    </form>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="font-label text-xs uppercase text-muted-foreground">
        {label}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
