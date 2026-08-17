---
# shared components/snippets/pages live at the presentaciones/ root
addons:
  - .
theme: seriph
favicon: /favicon.ico
background: https://cover.divisioncero.com
title: Curso de Respuesta a Incidentes
titleTemplate: "%s · CyberAcademy DivisionCero"
info: |
  ## Curso de Respuesta a Incidentes
  Playbooks de respuesta a incidentes

  Basado en  [**CyberAcademy / DivisionCero**](https://sli.dev).
author: "[Peter Vargas](https://petervargas.com)"
keywords: ciberseguridad, seguridad informática
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
fonts:
  sans: "Inter"
  weights: "400,500,600,800"
themeConfig:
  primary: "hsl(167 56% 47%)"
watermark: true
htmlAttrs:
  lang: es
  dir: ltr
seoMeta:
  ogTitle: Curso de Respuesta a Incidentes
  ogDescription: Playbooks de respuesta a incidentes
  ogImage: https://cover.sli.dev
  twitterCard: summary_large_image
  twitterTitle: Curso de Respuesta a Incidentes
  twitterDescription: Playbooks de respuesta a incidentes
  twitterImage: https://cover.sli.dev
download: true
exportFilename: adr-respuesta-a-incidentes-cyberacademy-divisioncero
browserExporter: true
pwa: true
monaco: false
twoslash: false
# enable Comark Syntax: https://comark.dev/syntax/markdown
comark: true
duration: 45min
---

# Curso de Respuesta a Incidentes {.font-extrabold .tracking-tight}

Playbooks de respuesta a incidentes

<LightOrDark>
  <template #dark>
    <img src="/images/logo-divisioncero-dark.webp" class="mt-6 mx-auto h-6" />
  </template>
  <template #light>
    <img src="/images/logo-divisioncero-light.webp" class="mt-6 mx-auto h-6" />
  </template>
</LightOrDark>

<div mt-4 op70>
#GanasDeAprender
</div>

<div class="abs-br m-6 text-xl">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="slidev-icon-btn">
    <carbon:edit />
  </button>
  <a href="https://divisioncero.com" target="_blank" title="DivisionCero" class="slidev-icon-btn">
    <carbon:earth-filled />
  </a>
  <a href="https://github.com/PetterVargas/cyberacademy" target="_blank" class="slidev-icon-btn">
    <carbon:logo-github />
  </a>
</div>

<!--
Bienvenida al curso de respuesta a incidentes. Contenido de referencia (dummy) construido sobre la estructura estándar de CyberAcademy.
-->

---
layout: intro
transition: fade
---

# Agenda del curso

<div grid grid-cols-5 gap-4 mt-8>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-shield-check-bold text-3xl text-emerald-500 />
    <div mt-2 font-semibold text-sm>Módulo 1</div>
    <div text-xs op70>Fundamentos de la Respuesta a Incidentes</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-bug-bold text-3xl text-red-500 />
    <div mt-2 font-semibold text-sm>Módulo 2</div>
    <div text-xs op70>Preparación y Detección</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-key-bold text-3xl text-amber-500 />
    <div mt-2 font-semibold text-sm>Módulo 3</div>
    <div text-xs op70>Contención, Erradicación y Recuperación</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-globe-bold text-3xl text-sky-500 />
    <div mt-2 font-semibold text-sm>Módulo 4</div>
    <div text-xs op70>Comunicación y Coordinación</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-siren-bold text-3xl text-violet-500 />
    <div mt-2 font-semibold text-sm>Módulo 5</div>
    <div text-xs op70>Lecciones Aprendidas y Mejora Continua</div>
  </div>
</div>

<v-clicks>

## Don ROI {.mt-8}

- Aplicar los fundamentos de fundamentos de la respuesta a incidentes en el día a día.
- Regulaciones y frameworks de ciberseguridad exigen esta capacitación.
- Fortalecer la postura de seguridad del equipo y la organización.

</v-clicks>

<!--
Recorrido rápido por los módulos del curso — contenido dummy de referencia.
-->

---
layout: center
class: text-center
transition: fade-out
---

# Una imagen vale más que mil palabras 🎨🖌️

<!--
Representación gráfica del recorrido de este curso dentro de su learning path.
-->

---
layout: section
transition: slide-left
---

# Módulo 1

## Fundamentos de la Respuesta a Incidentes

<!--
Continuamos con el módulo 1, fundamentos de la respuesta a incidentes.
-->

---
transition: slide-up
---

# Fundamentos de la Respuesta a Incidentes

<ph-shield-check-bold text-4xl text-emerald-500 mb-4 />

Conceptos y controles clave relacionados con **fundamentos de la respuesta a incidentes**.

<v-clicks>

- Conceptos clave de fundamentos de la respuesta a incidentes.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para fundamentos de la respuesta a incidentes — desarrollar con el material real del curso.
-->

---
layout: section
transition: slide-right
---

# Módulo 2

## Preparación y Detección

<!--
Continuamos con el módulo 2, preparación y detección.
-->

---
transition: slide-up
---

# Preparación y Detección

<ph-bug-bold text-4xl text-red-500 mb-4 />

Conceptos y controles clave relacionados con **preparación y detección**.

<v-clicks>

- Conceptos clave de preparación y detección.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para preparación y detección — desarrollar con el material real del curso.
-->

---
layout: section
transition: slide-up
---

# Módulo 3

## Contención, Erradicación y Recuperación

<!--
Continuamos con el módulo 3, contención, erradicación y recuperación.
-->

---
transition: slide-up
---

# Contención, Erradicación y Recuperación

<ph-key-bold text-4xl text-amber-500 mb-4 />

Conceptos y controles clave relacionados con **contención, erradicación y recuperación**.

<v-clicks>

- Conceptos clave de contención, erradicación y recuperación.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para contención, erradicación y recuperación — desarrollar con el material real del curso.
-->

---
layout: section
transition: slide-down
---

# Módulo 4

## Comunicación y Coordinación

<!--
Continuamos con el módulo 4, comunicación y coordinación.
-->

---
transition: slide-up
---

# Comunicación y Coordinación

<ph-globe-bold text-4xl text-sky-500 mb-4 />

Conceptos y controles clave relacionados con **comunicación y coordinación**.

<v-clicks>

- Conceptos clave de comunicación y coordinación.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para comunicación y coordinación — desarrollar con el material real del curso.
-->

---
layout: section
transition: fade
---

# Módulo 5

## Lecciones Aprendidas y Mejora Continua

<!--
Continuamos con el módulo 5, lecciones aprendidas y mejora continua.
-->

---
transition: slide-up
---

# Lecciones Aprendidas y Mejora Continua

<ph-siren-bold text-4xl text-violet-500 mb-4 />

Conceptos y controles clave relacionados con **lecciones aprendidas y mejora continua**.

<v-clicks>

- Conceptos clave de lecciones aprendidas y mejora continua.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para lecciones aprendidas y mejora continua — desarrollar con el material real del curso.
-->

---
transition: slide-down
---

# Lo que recorrimos

<div grid grid-cols-2 gap-x-8 gap-y-2 text-sm mt-6>

<v-clicks>

- ✅ Fundamentos de la Respuesta a Incidentes
- ✅ Preparación y Detección
- ✅ Contención, Erradicación y Recuperación
- ✅ Comunicación y Coordinación
- ✅ Lecciones Aprendidas y Mejora Continua

</v-clicks>

</div>

<!--
Recorrido completo del curso — contenido dummy de referencia.
-->

---
layout: center
class: text-center
---

# Evaluación y Certificación

<ph-certificate-bold text-5xl text-amber-500 my-4 mx-auto />

Certifica lo aprendido en la plataforma de DivisionCero

<div mt-6 flex gap-4 justify-center text-sm>
  <a href="https://app.divisioncero.com/home/examenes" target="_blank" border="~ main rounded" px-4 py-2>Presentar evaluación →</a>
  <a href="https://app.divisioncero.com/home/certificaciones" target="_blank" border="~ main rounded" px-4 py-2>Ver mis certificados →</a>
</div>

---
layout: mil-gracias
class: text-center
---

# ¡Mil gracias! 🤘🏽

No olvides mantener activo el modo **#GanasDeAprender**

<!--
Mil gracias y no olvides mantener activo el modo #GanasDeAprender
-->
