import { ImageResponse } from "next/og"

// Image metadata
export const alt = "Ayush Bhandari - AI Solutions Architect"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

// Image generation
export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 64,
        background: "linear-gradient(to right, #1e40af, #4f46e5)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        padding: 40,
      }}
    >
      <div style={{ fontSize: 96, fontWeight: "bold", marginBottom: 20 }}>Ayush Bhandari</div>
      <div style={{ fontSize: 36, opacity: 0.9 }}>AI Solutions Architect & Machine Learning Engineer</div>
    </div>,
    {
      ...size,
    },
  )
}

