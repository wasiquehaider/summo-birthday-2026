import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Something is coming";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1a0006, #7a0019)",
          color: "#fff",
          fontFamily: "monospace",
        }}
      >
        <div style={{ fontSize: 120 }}>♥</div>
        <div style={{ fontSize: 64, marginTop: 20 }}>Something is compiling...</div>
        <div style={{ fontSize: 30, marginTop: 24, color: "#ffb3c0" }}>
          Ready at midnight
        </div>
      </div>
    ),
    size
  );
}
