import { sitio } from "@/config/sitio"

/**
 * Aviso al pie de todas las páginas: es un sitio de muestra y lo diseñó
 * Maximiliano Michasevich (link a su portfolio).
 */
export function Credito() {
  return (
    <aside
      aria-label="Sobre este sitio"
      className="bg-neutral-950 px-5 pt-5 pb-20 text-center text-sm leading-relaxed text-neutral-300"
    >
      <p>
        <strong className="text-white">Proyecto de muestra:</strong>{" "}
        {sitio.nombre} es un negocio ficticio, creado para mostrar un sitio de
        ejemplo.{" "}
        <a
          href={sitio.portfolio}
          className="font-semibold whitespace-nowrap text-white underline underline-offset-4 hover:text-neutral-200"
        >
          Diseñado por Maximiliano Michasevich
        </a>
      </p>
    </aside>
  )
}
