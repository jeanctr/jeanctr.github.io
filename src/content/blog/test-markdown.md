---
title: "Explorando las Nuevas Funciones"
description: "Una demostración de cómo se integran los bloques de código y las imágenes en el nuevo diseño del portafolio."
pubDate: 2026-04-01
tags: ["tecnología", "astro", "demo"]
draft: false
---

¡Bienvenidos a la nueva era del blog! Ahora tenemos soporte completo para **resaltado de sintaxis** y **gestión de imágenes**.

## Código Profesional

Gracias a **Shiki** y el tema **Dracula Soft**, ahora puedes compartir fragmentos de código que se ven geniales y son fáciles de leer:

```typescript
// Ejemplo de configuración de Astro
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jeanctr.github.io',
  markdown: {
    shikiConfig: {
      theme: 'dracula-soft',
    },
  },
});
```

También podemos mostrar Python, que es vital para tus proyectos de automatización:

```python
def calcular_eficiencia(potencia_util, potencia_total):
    """Calcula la eficiencia energética."""
    try:
        eficiencia = (potencia_util / potencia_total) * 100
        return f"{eficiencia:.2f}%"
    except ZeroDivisionError:
        return "0%"

print(calcular_eficiencia(85, 100)) # Resultado: 85.00%
```

## Imágenes Optimizadas

Las imágenes ahora tienen un diseño minimalista con bordes redondeados y una sombra sutil para darlas profundidad:

![Concepto de Ingeniería Eléctrica](../../assets/blog/sample-image.png)
*Ilustración minimalista de conceptos eléctricos.*

---

> [!TIP]
> Recuerda que puedes usar **Componentes Astro** dentro de tus archivos MDX si decides cambiar la extensión en el futuro.

¡Espero que disfrutes escribiendo con esta nueva configuración!
