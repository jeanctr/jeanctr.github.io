# Migración de index.html a Astro 6

Migrar tu portafolio estático (`index.html`) a un proyecto Astro 6 con Content Collections para posts y proyectos en Markdown, Tailwind CSS v4, y componentes Astro.

## User Review Required

> [!IMPORTANT]
> **Site URL**: Estoy usando `https://jeanctr.com` como `site` en la config de Astro. ¿Es correcto o usas otro dominio?

> [!IMPORTANT]
> **Posts (blog)**: Tu `index.html` actual no tiene sección de blog. ¿Querés que agregue una sección/página de blog en el index, o por ahora solo configuro la collection y las páginas `/blog` y `/blog/[slug]`?

## Proposed Changes

La migración se hace en **4 fases incrementales**. Cada fase deja el sitio funcional.

---

### Fase 1 — Dependencias y configuración base

#### [MODIFY] [package.json](file:///d:/code/website/package.json)
- Agregar `tailwindcss` y `@tailwindcss/vite` como dependencias
- Agregar scripts `dev`, `build`, `preview`, `check`

#### [MODIFY] [astro.config.ts](file:///d:/code/website/astro.config.ts)
- Importar `@tailwindcss/vite` y agregarlo como plugin de Vite
- Configurar `site` y `output: 'static'`

#### [MODIFY] [tsconfig.json](file:///d:/code/website/tsconfig.json)
- Ya existe, solo verificar que extiende `astro/tsconfigs/strict`

---

### Fase 2 — Tailwind CSS con los tokens de tu diseño

#### [NEW] [src/styles/global.css](file:///d:/code/website/src/styles/global.css)
- Importar Tailwind con `@import "tailwindcss"`
- Definir tu tema via `@theme` con tus custom tokens:
  - Colores: `--color-bg`, `--color-surface`, `--color-border`, `--color-text`, `--color-muted`, `--color-green`, etc.
  - Fuente: JetBrains Mono via Google Fonts
- Base styles: reset, scroll-behavior, font-smoothing
- Animación `pulse` para el dot de disponibilidad
- Estilos para prose/markdown content (tipografía de posts)

---

### Fase 3 — Layout y componentes Astro

#### [MODIFY] [src/layouts/Layout.astro](file:///d:/code/website/src/layouts/Layout.astro)
- Layout base HTML con `<head>`, meta tags SEO, import de `global.css`, Google Fonts
- Props tipadas: `title`, `description`
- Slot para contenido

#### [NEW] [src/components/Nav.astro](file:///d:/code/website/src/components/Nav.astro)
- Barra fija con logo + links a secciones
- Clases Tailwind replicando el estilo actual

#### [NEW] [src/components/Hero.astro](file:///d:/code/website/src/components/Hero.astro)
- Sección hero con nombre, subtítulo, dot de disponibilidad, CTAs

#### [NEW] [src/components/About.astro](file:///d:/code/website/src/components/About.astro)
- Texto "sobre mí" + info grid (experiencia, especialidad, etc.)

#### [NEW] [src/components/Skills.astro](file:///d:/code/website/src/components/Skills.astro)
- Lista de habilidades con hover effects

#### [NEW] [src/components/ProjectCard.astro](file:///d:/code/website/src/components/ProjectCard.astro)
- Card reutilizable para cada proyecto (recibe props de la collection)

#### [NEW] [src/components/Contact.astro](file:///d:/code/website/src/components/Contact.astro)
- Links de contacto (email, LinkedIn, GitHub)

#### [NEW] [src/components/Footer.astro](file:///d:/code/website/src/components/Footer.astro)
- Footer con copyright

#### [NEW] [src/components/FadeIn.astro](file:///d:/code/website/src/components/FadeIn.astro)
- Wrapper con la lógica del `IntersectionObserver` como `<script>` de Astro
- Reemplaza la clase `.fade` + el script global

#### [MODIFY] [src/pages/index.astro](file:///d:/code/website/src/pages/index.astro)
- Importar Layout + todos los componentes
- Renderizar las secciones usando datos de Content Collections para proyectos

---

### Fase 4 — Content Collections (proyectos + posts)

#### [NEW] [src/content.config.ts](file:///d:/code/website/src/content.config.ts)
- Definir collection `projects` con schema: `title`, `description`, `tags`, `order`
- Definir collection `blog` con schema: `title`, `description`, `pubDate`, `tags`, `draft`
- Usar `glob` loader para ambas

#### [NEW] [src/content/projects/red-electrica-mt.md](file:///d:/code/website/src/content/projects/red-electrica-mt.md)
#### [NEW] [src/content/projects/instalacion-bt-edificio.md](file:///d:/code/website/src/content/projects/instalacion-bt-edificio.md)
#### [NEW] [src/content/projects/automatizacion-reportes.md](file:///d:/code/website/src/content/projects/automatizacion-reportes.md)
#### [NEW] [src/content/projects/subestacion-distribucion.md](file:///d:/code/website/src/content/projects/subestacion-distribucion.md)
#### [NEW] [src/content/projects/dashboard-monitoreo.md](file:///d:/code/website/src/content/projects/dashboard-monitoreo.md)
- Cada proyecto migrado como archivo `.md` con frontmatter tipado

#### [NEW] [src/content/blog/primer-post.md](file:///d:/code/website/src/content/blog/primer-post.md)
- Un post de ejemplo para que veas cómo funciona

#### [NEW] [src/pages/blog/index.astro](file:///d:/code/website/src/pages/blog/index.astro)
- Listado de posts ordenados por fecha

#### [NEW] [src/pages/blog/[...slug].astro](file:///d:/code/website/src/pages/blog/%5B...slug%5D.astro)
- Página dinámica que renderiza cada post Markdown

---

## Estructura final del proyecto

```
website/
├── astro.config.ts
├── tsconfig.json
├── package.json
├── public/
│   └── favicon.svg
├── src/
│   ├── content.config.ts          # Schemas de collections
│   ├── styles/
│   │   └── global.css              # Tailwind + tema custom
│   ├── layouts/
│   │   └── Layout.astro            # Layout base
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Skills.astro
│   │   ├── ProjectCard.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   └── FadeIn.astro
│   ├── content/
│   │   ├── projects/               # Proyectos en Markdown
│   │   │   ├── red-electrica-mt.md
│   │   │   └── ...
│   │   └── blog/                   # Posts en Markdown
│   │       └── primer-post.md
│   └── pages/
│       ├── index.astro             # Home (portafolio)
│       └── blog/
│           ├── index.astro         # Listado de posts
│           └── [...slug].astro     # Post individual
```

## Open Questions

> [!IMPORTANT]
> 1. **¿El dominio `jeanctr.com` es correcto?**
> 2. **¿Querés una sección de blog visible en el index, o solo las páginas `/blog`?**
> 3. **¿Querés que los proyectos también tengan una página individual (`/projects/slug`) o solo se muestran en el index?**

## Verification Plan

### Automated Tests
- `bun run build` — verificar que compila sin errores
- Abrir en browser `localhost:4321` y confirmar visualmente que se ve igual al `index.html` original

### Manual Verification
- Comparar el sitio Astro vs el `index.html` original visualmente
- Verificar que los posts en Markdown renderizan correctamente en `/blog/[slug]`
- Verificar responsive en mobile (560px breakpoint)
