---
# shared components/snippets/pages live at the presentaciones/ root
addons:
  - .
theme: seriph
favicon: /favicon.ico
background: https://cover.divisioncero.com
title: Curso de Auditoría de Ciberseguridad
titleTemplate: "%s · CyberAcademy DivisionCero"
info: |
  ## Curso de Auditoría de Ciberseguridad
  Planificación y ejecución de auditorías

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
  ogTitle: Curso de Auditoría de Ciberseguridad
  ogDescription: Planificación y ejecución de auditorías
  ogImage: https://cover.sli.dev
  twitterCard: summary_large_image
  twitterTitle: Curso de Auditoría de Ciberseguridad
  twitterDescription: Planificación y ejecución de auditorías
  twitterImage: https://cover.sli.dev
download: true
exportFilename: cor-auditoria-de-ciberseguridad-cyberacademy-divisioncero
browserExporter: true
pwa: true
monaco: false
twoslash: false
# enable Comark Syntax: https://comark.dev/syntax/markdown
comark: true
duration: 45min
---

# Curso de Auditoría de Ciberseguridad {.font-extrabold .tracking-tight}

Planificación y ejecución de auditorías

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
Bienvenida al curso de auditoría de ciberseguridad. Contenido de referencia (dummy) construido sobre la estructura estándar de CyberAcademy.
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
    <div text-xs op70>Fundamentos de la Auditoría de Ciberseguridad</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-bug-bold text-3xl text-red-500 />
    <div mt-2 font-semibold text-sm>Módulo 2</div>
    <div text-xs op70>Planificación de la Auditoría</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-key-bold text-3xl text-amber-500 />
    <div mt-2 font-semibold text-sm>Módulo 3</div>
    <div text-xs op70>Ejecución de la Auditoría</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-globe-bold text-3xl text-sky-500 />
    <div mt-2 font-semibold text-sm>Módulo 4</div>
    <div text-xs op70>Reporte de Hallazgos</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-siren-bold text-3xl text-violet-500 />
    <div mt-2 font-semibold text-sm>Módulo 5</div>
    <div text-xs op70>Seguimiento y Mejora Continua</div>
  </div>
</div>

<v-clicks>

## Don ROI {.mt-8}

- Aplicar los fundamentos de fundamentos de la auditoría de ciberseguridad en el día a día.
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

## Fundamentos de la Auditoría de Ciberseguridad

<!--
Continuamos con el módulo 1, fundamentos de la auditoría de ciberseguridad.
-->

---
transition: slide-up
---

# Fundamentos de la Auditoría de Ciberseguridad

<ph-shield-check-bold text-4xl text-emerald-500 mb-4 />

Conceptos y controles clave relacionados con **fundamentos de la auditoría de ciberseguridad**.

<v-clicks>

- Conceptos clave de fundamentos de la auditoría de ciberseguridad.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para fundamentos de la auditoría de ciberseguridad — desarrollar con el material real del curso.
-->

---
layout: section
transition: slide-right
---

# Módulo 2

## Planificación de la Auditoría

<!--
Continuamos con el módulo 2, planificación de la auditoría.
-->

---
transition: slide-up
---

# Planificación de la Auditoría

<ph-bug-bold text-4xl text-red-500 mb-4 />

Conceptos y controles clave relacionados con **planificación de la auditoría**.

<v-clicks>

- Conceptos clave de planificación de la auditoría.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para planificación de la auditoría — desarrollar con el material real del curso.
-->

---
layout: section
transition: slide-up
---

# Módulo 3

## Ejecución de la Auditoría

<!--
Continuamos con el módulo 3, ejecución de la auditoría.
-->

---
transition: slide-up
---

# Ejecución de la Auditoría

<ph-key-bold text-4xl text-amber-500 mb-4 />

Conceptos y controles clave relacionados con **ejecución de la auditoría**.

<v-clicks>

- Conceptos clave de ejecución de la auditoría.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para ejecución de la auditoría — desarrollar con el material real del curso.
-->

---
layout: section
transition: slide-down
---

# Módulo 4

## Reporte de Hallazgos

<!--
Continuamos con el módulo 4, reporte de hallazgos.
-->

---
transition: slide-up
---

# Reporte de Hallazgos

<ph-globe-bold text-4xl text-sky-500 mb-4 />

Conceptos y controles clave relacionados con **reporte de hallazgos**.

<v-clicks>

- Conceptos clave de reporte de hallazgos.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para reporte de hallazgos — desarrollar con el material real del curso.
-->

---
layout: section
transition: fade
---

# Módulo 5

## Seguimiento y Mejora Continua

<!--
Continuamos con el módulo 5, seguimiento y mejora continua.
-->

---
transition: slide-up
---

# Seguimiento y Mejora Continua

<ph-siren-bold text-4xl text-violet-500 mb-4 />

Conceptos y controles clave relacionados con **seguimiento y mejora continua**.

<v-clicks>

- Conceptos clave de seguimiento y mejora continua.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para seguimiento y mejora continua — desarrollar con el material real del curso.
-->

---
transition: slide-down
---

# Lo que recorrimos

<div grid grid-cols-2 gap-x-8 gap-y-2 text-sm mt-6>

<v-clicks>

- ✅ Fundamentos de la Auditoría de Ciberseguridad
- ✅ Planificación de la Auditoría
- ✅ Ejecución de la Auditoría
- ✅ Reporte de Hallazgos
- ✅ Seguimiento y Mejora Continua

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
