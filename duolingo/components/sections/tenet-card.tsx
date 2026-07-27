import type { Tenet } from "@/lib/types";

export function TenetCard({ tenet }: { tenet: Tenet }) {
  return (
    <div className="marginalia-notch flex flex-col gap-3 border border-border bg-card p-6 shadow-relief-sm">
      <span className="font-display text-3xl text-bronze-600">{tenet.greekLetter}</span>
      <h3 className="font-display text-lg tracking-wide uppercase">{tenet.title}</h3>
      <p className="font-body text-sm text-verdigris-600 italic">{tenet.maxim}</p>
      <p className="font-body text-sm text-muted-foreground">{tenet.body}</p>
    </div>
  );
}
