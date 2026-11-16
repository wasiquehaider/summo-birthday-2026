import { content } from "@/content";

function hash(s: string) {
  // short deterministic fake commit hash
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0).toString(16).padStart(7, "0").slice(0, 7);
}

export default function GitLog() {
  return (
    <section className="block">
      <h2>git log --oneline --graph</h2>
      <div className="terminal">
        {content.commits.map((c, i) => (
          <div className="commit" key={i} style={{ animationDelay: `${i * 0.12}s` }}>
            <span className="graph">*</span>
            <span className="hash">{hash(c.date + c.message)}</span>
            <span className={`ctype ${c.type === "BREAKING CHANGE" ? "break" : ""}`}>{c.type}:</span>
            <span className="cmsg">{c.message}</span>
            <span className="cdate">{c.date}</span>
          </div>
        ))}
        <div className="commit">
          <span className="graph dim">|</span>
          <span className="dim">(HEAD -&gt; main, origin/main) and the story keeps going...</span>
        </div>
      </div>
    </section>
  );
}
