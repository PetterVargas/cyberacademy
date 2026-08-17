---
# shared components/snippets/pages live at the presentaciones/ root
addons:
  - .
theme: seriph
favicon: /favicon.ico
background: https://cover.divisioncero.com
title: Curso de Cumplimiento Normativo Continuo
titleTemplate: "%s · CyberAcademy DivisionCero"
info: |
  ## Curso de Cumplimiento Normativo Continuo
  ISO 27001, NIST CSF y GDPR

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
  ogTitle: Curso de Cumplimiento Normativo Continuo
  ogDescription: ISO 27001, NIST CSF y GDPR
  ogImage: https://cover.sli.dev
  twitterCard: summary_large_image
  twitterTitle: Curso de Cumplimiento Normativo Continuo
  twitterDescription: ISO 27001, NIST CSF y GDPR
  twitterImage: https://cover.sli.dev
download: true
exportFilename: cor-cumplimiento-normativo-continuo-cyberacademy-divisioncero
browserExporter: true
pwa: true
monaco: false
twoslash: false
# enable Comark Syntax: https://comark.dev/syntax/markdown
comark: true
duration: 45min
---

# Curso de Cumplimiento Normativo Continuo {.font-extrabold .tracking-tight}

ISO 27001, NIST CSF y GDPR

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
Bienvenida al curso de cumplimiento normativo continuo. Contenido de referencia (dummy) construido sobre la estructura estándar de CyberAcademy.
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
    <div text-xs op70>Fundamentos del Cumplimiento Normativo</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-bug-bold text-3xl text-red-500 />
    <div mt-2 font-semibold text-sm>Módulo 2</div>
    <div text-xs op70>Mapeo y Gestión de Requisitos</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-key-bold text-3xl text-amber-500 />
    <div mt-2 font-semibold text-sm>Módulo 3</div>
    <div text-xs op70>Monitoreo Continuo del Cumplimiento</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-globe-bold text-3xl text-sky-500 />
    <div mt-2 font-semibold text-sm>Módulo 4</div>
    <div text-xs op70>Gestión de Auditorías y Evaluaciones</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-siren-bold text-3xl text-violet-500 />
    <div mt-2 font-semibold text-sm>Módulo 5</div>
    <div text-xs op70>Cultura y Mejora del Programa de Cumplimiento</div>
  </div>
</div>

<v-clicks>

## Don ROI {.mt-8}

- Aplicar los fundamentos de fundamentos del cumplimiento normativo en el día a día.
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

## Fundamentos del Cumplimiento Normativo

<!--
Continuamos con el módulo 1, fundamentos del cumplimiento normativo.
-->

---
transition: slide-up
---

# Fundamentos del Cumplimiento Normativo

<ph-shield-check-bold text-4xl text-emerald-500 mb-4 />

Conceptos y controles clave relacionados con **fundamentos del cumplimiento normativo**.

<v-clicks>

- Conceptos clave de fundamentos del cumplimiento normativo.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para fundamentos del cumplimiento normativo — desarrollar con el material real del curso.
-->

---
layout: section
transition: slide-right
---

# Módulo 2

## Mapeo y Gestión de Requisitos

<!--
Continuamos con el módulo 2, mapeo y gestión de requisitos.
-->

---
transition: slide-up
---

# Mapeo y Gestión de Requisitos

<ph-bug-bold text-4xl text-red-500 mb-4 />

Conceptos y controles clave relacionados con **mapeo y gestión de requisitos**.

<v-clicks>

- Conceptos clave de mapeo y gestión de requisitos.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para mapeo y gestión de requisitos — desarrollar con el material real del curso.
-->

---
layout: section
transition: slide-up
---

# Módulo 3

## Monitoreo Continuo del Cumplimiento

<!--
Continuamos con el módulo 3, monitoreo continuo del cumplimiento.
-->

---
transition: slide-up
---

# Monitoreo Continuo del Cumplimiento

<ph-key-bold text-4xl text-amber-500 mb-4 />

Conceptos y controles clave relacionados con **monitoreo continuo del cumplimiento**.

<v-clicks>

- Conceptos clave de monitoreo continuo del cumplimiento.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para monitoreo continuo del cumplimiento — desarrollar con el material real del curso.
-->

---
layout: section
transition: slide-down
---

# Módulo 4

## Gestión de Auditorías y Evaluaciones

<!--
Continuamos con el módulo 4, gestión de auditorías y evaluaciones.
-->

---
transition: slide-up
---

# Gestión de Auditorías y Evaluaciones

<ph-globe-bold text-4xl text-sky-500 mb-4 />

Conceptos y controles clave relacionados con **gestión de auditorías y evaluaciones**.

<v-clicks>

- Conceptos clave de gestión de auditorías y evaluaciones.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para gestión de auditorías y evaluaciones — desarrollar con el material real del curso.
-->

---
layout: section
transition: fade
---

# Módulo 5

## Cultura y Mejora del Programa de Cumplimiento

<!--
Continuamos con el módulo 5, cultura y mejora del programa de cumplimiento.
-->

---
transition: slide-up
---

# Cultura y Mejora del Programa de Cumplimiento

<ph-siren-bold text-4xl text-violet-500 mb-4 />

Conceptos y controles clave relacionados con **cultura y mejora del programa de cumplimiento**.

<v-clicks>

- Conceptos clave de cultura y mejora del programa de cumplimiento.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para cultura y mejora del programa de cumplimiento — desarrollar con el material real del curso.
-->

---
transition: slide-down
---

# Lo que recorrimos

<div grid grid-cols-2 gap-x-8 gap-y-2 text-sm mt-6>

<v-clicks>

- ✅ Fundamentos del Cumplimiento Normativo
- ✅ Mapeo y Gestión de Requisitos
- ✅ Monitoreo Continuo del Cumplimiento
- ✅ Gestión de Auditorías y Evaluaciones
- ✅ Cultura y Mejora del Programa de Cumplimiento

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
