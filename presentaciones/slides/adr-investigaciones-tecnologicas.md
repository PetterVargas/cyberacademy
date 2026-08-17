---
# shared components/snippets/pages live at the presentaciones/ root
addons:
  - .
theme: seriph
favicon: /favicon.ico
background: https://cover.divisioncero.com
title: Curso de Investigaciones Tecnológicas
titleTemplate: "%s · CyberAcademy DivisionCero"
info: |
  ## Curso de Investigaciones Tecnológicas
  Investigación digital de incidentes

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
  ogTitle: Curso de Investigaciones Tecnológicas
  ogDescription: Investigación digital de incidentes
  ogImage: https://cover.sli.dev
  twitterCard: summary_large_image
  twitterTitle: Curso de Investigaciones Tecnológicas
  twitterDescription: Investigación digital de incidentes
  twitterImage: https://cover.sli.dev
download: true
exportFilename: adr-investigaciones-tecnologicas-cyberacademy-divisioncero
browserExporter: true
pwa: true
monaco: false
twoslash: false
# enable Comark Syntax: https://comark.dev/syntax/markdown
comark: true
duration: 52min
---

# Curso de Investigaciones Tecnológicas {.font-extrabold .tracking-tight}

Investigación digital de incidentes

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
Bienvenida al curso de investigaciones tecnológicas. Contenido de referencia (dummy) construido sobre la estructura estándar de CyberAcademy.
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
    <div text-xs op70>Fundamentos de la Investigación Tecnológica</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-bug-bold text-3xl text-red-500 />
    <div mt-2 font-semibold text-sm>Módulo 2</div>
    <div text-xs op70>Metodología de Investigación</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-key-bold text-3xl text-amber-500 />
    <div mt-2 font-semibold text-sm>Módulo 3</div>
    <div text-xs op70>Rastreo Informático</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-globe-bold text-3xl text-sky-500 />
    <div mt-2 font-semibold text-sm>Módulo 4</div>
    <div text-xs op70>Recolección y Preservación de Evidencia Digital</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-siren-bold text-3xl text-violet-500 />
    <div mt-2 font-semibold text-sm>Módulo 5</div>
    <div text-xs op70>Análisis de Evidencia</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-lock-key-bold text-3xl text-cyan-500 />
    <div mt-2 font-semibold text-sm>Módulo 6</div>
    <div text-xs op70>Reporte y Cierre de la Investigación</div>
  </div>
</div>

<v-clicks>

## Don ROI {.mt-8}

- Aplicar los fundamentos de fundamentos de la investigación tecnológica en el día a día.
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

## Fundamentos de la Investigación Tecnológica

<!--
Continuamos con el módulo 1, fundamentos de la investigación tecnológica.
-->

---
transition: slide-up
---

# Fundamentos de la Investigación Tecnológica

<ph-shield-check-bold text-4xl text-emerald-500 mb-4 />

Conceptos y controles clave relacionados con **fundamentos de la investigación tecnológica**.

<v-clicks>

- Conceptos clave de fundamentos de la investigación tecnológica.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para fundamentos de la investigación tecnológica — desarrollar con el material real del curso.
-->

---
layout: section
transition: slide-right
---

# Módulo 2

## Metodología de Investigación

<!--
Continuamos con el módulo 2, metodología de investigación.
-->

---
transition: slide-up
---

# Metodología de Investigación

<ph-bug-bold text-4xl text-red-500 mb-4 />

Conceptos y controles clave relacionados con **metodología de investigación**.

<v-clicks>

- Conceptos clave de metodología de investigación.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para metodología de investigación — desarrollar con el material real del curso.
-->

---
layout: section
transition: slide-up
---

# Módulo 3

## Rastreo Informático

<!--
Continuamos con el módulo 3, rastreo informático.
-->

---
transition: slide-up
---

# Rastreo Informático

<ph-key-bold text-4xl text-amber-500 mb-4 />

Conceptos y controles clave relacionados con **rastreo informático**.

<v-clicks>

- Conceptos clave de rastreo informático.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para rastreo informático — desarrollar con el material real del curso.
-->

---
layout: section
transition: slide-down
---

# Módulo 4

## Recolección y Preservación de Evidencia Digital

<!--
Continuamos con el módulo 4, recolección y preservación de evidencia digital.
-->

---
transition: slide-up
---

# Recolección y Preservación de Evidencia Digital

<ph-globe-bold text-4xl text-sky-500 mb-4 />

Conceptos y controles clave relacionados con **recolección y preservación de evidencia digital**.

<v-clicks>

- Conceptos clave de recolección y preservación de evidencia digital.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para recolección y preservación de evidencia digital — desarrollar con el material real del curso.
-->

---
layout: section
transition: fade
---

# Módulo 5

## Análisis de Evidencia

<!--
Continuamos con el módulo 5, análisis de evidencia.
-->

---
transition: slide-up
---

# Análisis de Evidencia

<ph-siren-bold text-4xl text-violet-500 mb-4 />

Conceptos y controles clave relacionados con **análisis de evidencia**.

<v-clicks>

- Conceptos clave de análisis de evidencia.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para análisis de evidencia — desarrollar con el material real del curso.
-->

---
layout: section
transition: slide-left
---

# Módulo 6

## Reporte y Cierre de la Investigación

<!--
Continuamos con el módulo 6, reporte y cierre de la investigación.
-->

---
transition: slide-up
---

# Reporte y Cierre de la Investigación

<ph-lock-key-bold text-4xl text-cyan-500 mb-4 />

Conceptos y controles clave relacionados con **reporte y cierre de la investigación**.

<v-clicks>

- Conceptos clave de reporte y cierre de la investigación.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para reporte y cierre de la investigación — desarrollar con el material real del curso.
-->

---
transition: slide-down
---

# Lo que recorrimos

<div grid grid-cols-2 gap-x-8 gap-y-2 text-sm mt-6>

<v-clicks>

- ✅ Fundamentos de la Investigación Tecnológica
- ✅ Metodología de Investigación
- ✅ Rastreo Informático
- ✅ Recolección y Preservación de Evidencia Digital
- ✅ Análisis de Evidencia
- ✅ Reporte y Cierre de la Investigación

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
