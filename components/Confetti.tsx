"use client";
import { useEffect, useRef } from "react";

const COLORS = ["#ff6b9d", "#ffd166", "#06d6a0", "#8ecae6", "#c77dff", "#ffffff"];

export default function Confetti({ duration = 9000 }: { duration?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    const pieces = Array.from({ length: 220 }, () => ({
      x: Math.random() * w,
      y: -20 - Math.random() * h,
      r: 4 + Math.random() * 6,
      c: COLORS[Math.floor(Math.random() * COLORS.length)],
      vx: -1 + Math.random() * 2,
      vy: 2 + Math.random() * 3,
      rot: Math.random() * Math.PI,
      vr: -0.1 + Math.random() * 0.2,
    }));

    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      const fading = t - start > duration;
      let alive = 0;
      for (const p of pieces) {
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;
        if (p.y > h + 20) {
          if (fading) continue;
          p.y = -20;
          p.x = Math.random() * w;
        }
        alive++;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.c;
        ctx.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * 1.6);
        ctx.restore();
      }
      if (alive > 0) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [duration]);

  return <canvas ref={ref} className="confetti" aria-hidden />;
}
