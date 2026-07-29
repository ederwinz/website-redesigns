"use client";

import { useState, type FormEvent } from "react";
import { ArrowRightIcon } from "lucide-react";
import { toast } from "sonner";

import { cn } from "@/lib/utils";

export function NewsletterForm({ className }: { className?: string }) {
  const [email, setEmail] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) return;
    toast.success("You're on the list.");
    setEmail("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "flex items-center gap-3 border-b border-border pb-2",
        className
      )}
    >
      <input
        type="email"
        required
        placeholder="your@email.com"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="shrink-0 text-foreground transition-opacity hover:opacity-60"
      >
        <ArrowRightIcon className="size-4" />
      </button>
    </form>
  );
}
