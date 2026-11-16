"use client";
import { content } from "@/content";

function parts(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000));
  return {
    d: Math.floor(s / 86400),
    h: Math.floor((s % 86400) / 3600),
    m: Math.floor((s % 3600) / 60),
    s: s % 60,
  };
}

export default function Countdown({ remaining }: { remaining: number }) {
  const p = parts(remaining);
  const pad = (n: number) => String(n).padStart(2, "0");
  const cells: [string, string][] = [
    [p.d > 0 ? String(p.d) : "0", "days"],
    [pad(p.h), "hours"],
    [pad(p.m), "minutes"],
    [pad(p.s), "seconds"],
  ];

  return (
    <main className="center">
      <p className="mono dim">$ ./deploy --target=love --at=midnight</p>
      <h1 className="teaser">{content.teaser}</h1>
      <div className="count" role="timer" aria-live="off">
        {cells.map(([v, l]) => (
          <div className="cell" key={l}>
            <span className="num">{v}</span>
            <span className="lbl">{l}</span>
          </div>
        ))}
      </div>
      <p className="mono dim small">build in progress... do not refresh (you can, it is fine)</p>
    </main>
  );
}
