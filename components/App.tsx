"use client";
import { useEffect, useState } from "react";
import { content } from "@/content";
import Countdown from "./Countdown";
import Confetti from "./Confetti";
import GitLog from "./GitLog";
import TimeCapsule from "./TimeCapsule";

const UNLOCK = new Date(content.unlockAt).getTime();

export default function App() {
  const [now, setNow] = useState<number | null>(null);
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    // ?preview=1 skips the countdown so you can test the reveal
    setPreview(new URLSearchParams(window.location.search).has("preview"));
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  if (now === null) return <main className="center" />; // avoids hydration flash

  const unlocked = preview || now >= UNLOCK;
  if (!unlocked) return <Countdown remaining={UNLOCK - now} />;

  return (
    <>
      <Confetti />
      <main className="reveal">
        <header className="hero">
          <p className="mono dim">$ git push origin main --force-with-love</p>
          <h1 className="title">
            {content.heroTitle}
            <br />
            <span className="name">{content.herName}</span>
          </h1>
          {content.age !== null && <p className="age">Version {content.age}.0 is live</p>}
          <p className="sub">{content.heroSubtitle}</p>
          {content.audio && <audio controls src={content.audio} className="audio" />}
          <a href="#letter" className="down">↓</a>
        </header>

        <section className="block" id="letter">
          <h2>README.md</h2>
          <div className="letter">
            {content.letter.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p className="sign">With all my love,<br />{content.yourName}</p>
          </div>
        </section>

        <GitLog />

        {content.photos.length > 0 && (
          <section className="block">
            <h2>assets/photos/</h2>
            <div className="photos">
              {content.photos.map((p, i) => (
                <figure key={i}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.src} alt={p.caption} loading="lazy" />
                  <figcaption>{p.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        <TimeCapsule now={now} />

        <footer className="foot mono dim">
          <p>exit code 0 · no bugs found · made with ♥ by {content.yourName}</p>
        </footer>
      </main>
    </>
  );
}
