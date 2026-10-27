import { ImageResponse } from "next/og"

import { sitio } from "@/config/sitio"

/** Imagen al compartir el link: nombre de la demo y aviso de muestra. */
export const alt = `${sitio.nombre} · proyecto de muestra de Maximiliano Michasevich`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const acento = "#3FD68C"

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 80,
        background: "#0b0b0c",
        color: "#f5f5f4",
        fontFamily: "sans-serif",
        borderBottom: `14px solid ${acento}`,
      }}
    >
      <div style={{ display: "flex", fontSize: 28, color: acento }}>
        Proyecto de muestra · negocio ficticio
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 24,
          fontSize: 110,
          fontWeight: 800,
          letterSpacing: -4,
        }}
      >
        {sitio.nombre}
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 40,
          fontSize: 32,
          color: "rgba(245,245,244,0.75)",
        }}
      >
        Diseñado por Maximiliano Michasevich · michasevich.com
      </div>
    </div>,
    size
  )
}
