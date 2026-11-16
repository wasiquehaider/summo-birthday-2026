"use client";
import { useState } from "react";
import { content } from "@/content";

function fmt(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Karachi",
  });
}

export default function TimeCapsule({ now }: { now: number }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="block">
      <h2>time_capsule/</h2>
      <p className="dim">Sealed letters. Each one opens by itself on its date. Come back every birthday.</p>
      <div className="capsules">
        {content.capsules.map((c, i) => {
          const unlocked = now >= new Date(c.unlockAt).getTime();
          const days = Math.ceil((new Date(c.unlockAt).getTime() - now) / 86400000);
          return (
            <div className={`capsule ${unlocked ? "open" : "locked"}`} key={i}>
              <button
                className="capsule-head"
                disabled={!unlocked}
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{unlocked ? "🔓" : "🔒"}</span>
                <span className="ctitle">{c.title}</span>
                <span className="cwhen mono">
                  {unlocked ? "tap to read" : `opens ${fmt(c.unlockAt)} · in ${days} days`}
                </span>
              </button>
              {unlocked && open === i && <div className="capsule-body">{c.body}</div>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
