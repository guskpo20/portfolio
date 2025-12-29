# Estrategia de Contenido del Blog

Este documento organiza la visión, categorías y estructura técnica del blog, basado en los objetivos de posicionamiento y las ideas de `NextSteps.md`.

## 1. Misión del Blog
Posicionarte como experto en **Desarrollo de Emails** y **Desarrollo Web** en Uruguay y la región, ofreciendo contenido práctico, educativo y estratégico para PYMEs, emprendedores y otros desarrolladores.

## 2. Sistema de Etiquetas (Tags)
Para mantener el contenido organizado y fácil de navegar, proponemos el siguiente sistema de tags inicial. Estas etiquetas cubren los temas principales mencionados en `NextSteps.md`.

### Etiquetas Principales (Categorías)
Estas serán las grandes áreas temáticas del blog:

*   **`Email Marketing`**: Todo lo relacionado con estrategias, métricas (open rates, clicks), automatización y entregabilidad.
*   **`Email Development`**: Aspectos técnicos, HTML para emails, compatibilidad, dark mode, y maquetación.
*   **`Web Development`**: Desarrollo de sitios web, landing pages, performance y SEO técnico.
*   **`Design`**: Diseño UI/UX tanto para webs como para emails, tendencias visuales y buenas prácticas.
*   **`Strategy`**: Marketing digital, embudos de venta, copywriting y conversión.
*   **`Career`**: "Manual de supervivencia", consejos laborales, freelancing y reflexiones personales.
*   **`News`**: Novedades del sector, resúmenes de noticias (TavoNews) y actualizaciones de tecnología.

### Etiquetas Secundarias (Opcionales / Específicas)
Para temas más puntuales que pueden cruzar varias categorías:
*   `Tools`: Herramientas recomendadas, software, recursos gratuitos.
*   `Tutorial`: Guías paso a paso o "How-to".
*   `Case Study`: Análisis de casos reales, antes y después.
*   `Resource`: Checklists, plantillas descargables.

## 3. Pilares de Contenido (Ideas de Posts)

### A. Email Marketing & Dev
*   "Por qué muchos emails nunca se abren — y 5 errores comunes."
*   "HTML para Emails en 2025: Lo que necesitás saber."
*   "Automatización vs envío manual: guía para PYMEs."
*   "Checklist de entregabilidad: Evita la carpeta de Spam."

### B. Web & Landing Pages
*   "Landing page vs Web completa: ¿Qué necesita tu negocio?"
*   "7 elementos clave de una landing page que convierte."
*   "SEO Básico para emprendedores: Estructura tu web correctamente."

### C. Estrategia & Negocios
*   "Cómo crear un embudo simple: Landing + Email de bienvenida."
*   "Herramientas low-cost para empezar tu marketing digital desde Uruguay."
*   "Freelance vs Agencia: Ventajas de contratar un desarrollador independiente."

### D. TavoNews & Reflexiones
*   "Resumen de noticias de desarrollo del mes."
*   "Cómo comunicarse con un desarrollador: Guía para clientes."
*   "Mi experiencia: De 1% a 5% de conversión en newsletters."

## 4. Implementación Técnica (Próximos Pasos)
1.  **Actualizar Schema**: Modificar `src/content/config.ts` para incluir un array de `tags` en el frontmatter.
2.  **Actualizar Posts**: Agregar tags a los archivos `.mdx` existentes.
3.  **Filtrado (Futuro)**: Crear páginas dinámicas `/blog/tag/[tag]` para ver posts por categoría.
4.  **UI**: Mostrar los tags en las tarjetas de los posts y en la cabecera del post individual.
