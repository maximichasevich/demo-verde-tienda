# Verde Tienda · Tienda online de plantas

> **Proyecto de demostración.** Verde Tienda es un negocio ficticio. Hice este sitio
> como ejemplo de mi trabajo de diseño y desarrollo web. Conocé más en
> [michasevich.com](https://michasevich.com).

Sitio completo pensado para jóvenes de 20 a 35 años que compran desde el celular, muchos principiantes con plantas. Funciona como una página real: se puede
navegar, armar pedidos y guardar datos, pero no cobra nada ni envía
información a ningún servidor.

**Versión publicada:** [verdetienda.michasevich.com](https://verdetienda.michasevich.com)

## Tecnologías

- [Next.js 16](https://nextjs.org) con App Router
- React 19 y TypeScript
- Tailwind CSS 4 y componentes de Radix, y Motion para animaciones
- Efectos 3D hechos con CSS, sin librerías pesadas
- `localStorage` para guardar el carrito, los datos y los pedidos en el navegador del visitante
- Publicado en [Netlify](https://www.netlify.com)

## Estilo

E-commerce juvenil: bloques de color, stickers con borde de tinta y formas orgánicas. Fuentes Bricolage Grotesque y Figtree.

## Funcionalidades principales

- **Maceta 3D configurable:** planta, tamaño, maceta y color, con "Probala en tu casa".
- **Buscador** con sugerencias, mega menú, catálogo con filtros, comparador y favoritos.
- **Ficha de producto** con galería, reseñas, preguntas, stock y "Avisame".
- **Carrito** con cupones y compra en 4 pasos con Mercado Pago simulado y opción de regalo.
- **Mi cuenta:** datos, direcciones, seguimiento de pedidos, recordatorios de riego y club de puntos.
- **Quiz** "¿Qué planta va con vos?", medidor de luz, guía de cuidados y suscripción mensual.

## Cómo correrlo en local

Necesitás [Node.js](https://nodejs.org) 20.9 o más nuevo. Recomiendo la versión 22.

```bash
git clone https://github.com/maximichasevich/demo-verde-tienda.git
cd demo-verde-tienda
npm install
npm run dev        # http://localhost:3000
```

No hace falta configurar nada. Otros comandos:

```bash
npm run build && npm start   # versión optimizada
npm run lint                 # revisión de código
npm run typecheck            # revisión de tipos
```

## Configuración

`config/sitio.ts` tiene el nombre del negocio, la dirección de esta demo, la
del portfolio y el WhatsApp del botón "¿Querés una página así?". Las
direcciones también se pueden definir con las variables de `.env.example`.

## Estructura

```
app/layout.tsx          Base del sitio: fuentes, estilos globales y botón de WhatsApp
app/(sitio)/            Diseño, estilos y páginas de la demo
components/demos/       Secciones, componentes, aviso "Demo" y créditos de fotos
config/                 Nombre y direcciones
public/demos/           Fotos
```

## Créditos

Las fotos son de [Wikimedia Commons](https://commons.wikimedia.org) con
licencias libres. Cada foto muestra su autor y licencia dentro del sitio.

## Autor

Diseñado y desarrollado por Maximiliano Michasevich.
[michasevich.com](https://michasevich.com) · contacto@michasevich.com

---

## English

**Verde Tienda is a demo project for a fictional business.** A mobile-first online plant shop for young first-time plant owners. It was built by
Maximiliano Michasevich, a web designer and developer based in Montevideo,
Uruguay, as a portfolio sample. See more at [michasevich.com](https://michasevich.com).

- **Live demo:** [verdetienda.michasevich.com](https://verdetienda.michasevich.com)
- **Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Netlify.
- **Highlights:** configurable 3D pot, search with suggestions, filters and favorites, product pages with reviews, cart with coupons, a simulated 4-step Mercado Pago checkout and a customer account.
- **Run locally:** `npm install`, then `npm run dev`.
