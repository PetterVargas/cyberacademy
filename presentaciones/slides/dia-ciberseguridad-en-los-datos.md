---
# shared components/snippets/pages live at the presentaciones/ root
addons:
  - .
theme: seriph
favicon: /favicon.ico
background: https://cover.divisioncero.com
title: Curso de Ciberseguridad en los Datos
titleTemplate: "%s · CyberAcademy DivisionCero"
info: |
  ## Curso de Ciberseguridad en los Datos
  Clasificación, DLP y protección de datos

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
  ogTitle: Curso de Ciberseguridad en los Datos
  ogDescription: Clasificación, DLP y protección de datos
  ogImage: https://cover.sli.dev
  twitterCard: summary_large_image
  twitterTitle: Curso de Ciberseguridad en los Datos
  twitterDescription: Clasificación, DLP y protección de datos
  twitterImage: https://cover.sli.dev
download: true
exportFilename: dia-ciberseguridad-en-los-datos-cyberacademy-divisioncero
browserExporter: true
pwa: true
monaco: false
twoslash: false
# enable Comark Syntax: https://comark.dev/syntax/markdown
comark: true
duration: 45min
---

# Curso de Ciberseguridad en los Datos {.font-extrabold .tracking-tight}

Clasificación, DLP y protección de datos

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
Bienvenida al curso de ciberseguridad en los datos. Contenido de referencia (dummy) construido sobre la estructura estándar de CyberAcademy.
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
    <div text-xs op70>Fundamentos de la Seguridad de Datos</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-bug-bold text-3xl text-red-500 />
    <div mt-2 font-semibold text-sm>Módulo 2</div>
    <div text-xs op70>Protección de Datos en Reposo y en Tránsito</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-key-bold text-3xl text-amber-500 />
    <div mt-2 font-semibold text-sm>Módulo 3</div>
    <div text-xs op70>Control de Acceso a los Datos</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-globe-bold text-3xl text-sky-500 />
    <div mt-2 font-semibold text-sm>Módulo 4</div>
    <div text-xs op70>Prevención de Fuga de Información (DLP)</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-siren-bold text-3xl text-violet-500 />
    <div mt-2 font-semibold text-sm>Módulo 5</div>
    <div text-xs op70>Gobierno de Datos</div>
  </div>
</div>

<v-clicks>

## Don ROI {.mt-8}

- Aplicar los fundamentos de fundamentos de la seguridad de datos en el día a día.
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

## Fundamentos de la Seguridad de Datos

<!--
Continuamos con el módulo 1, fundamentos de la seguridad de datos.
-->

---
transition: slide-up
---

# Fundamentos de la Seguridad de Datos

<ph-shield-check-bold text-4xl text-emerald-500 mb-4 />

Conceptos y controles clave relacionados con **fundamentos de la seguridad de datos**.

<v-clicks>

- Conceptos clave de fundamentos de la seguridad de datos.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para fundamentos de la seguridad de datos — desarrollar con el material real del curso.
-->

---
layout: section
transition: slide-right
---

# Módulo 2

## Protección de Datos en Reposo y en Tránsito

<!--
Continuamos con el módulo 2, protección de datos en reposo y en tránsito.
-->

---
transition: slide-up
---

# Protección de Datos en Reposo y en Tránsito

<ph-bug-bold text-4xl text-red-500 mb-4 />

Conceptos y controles clave relacionados con **protección de datos en reposo y en tránsito**.

<v-clicks>

- Conceptos clave de protección de datos en reposo y en tránsito.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para protección de datos en reposo y en tránsito — desarrollar con el material real del curso.
-->

---
layout: section
transition: slide-up
---

# Módulo 3

## Control de Acceso a los Datos

<!--
Continuamos con el módulo 3, control de acceso a los datos.
-->

---
transition: slide-up
---

# Control de Acceso a los Datos

<ph-key-bold text-4xl text-amber-500 mb-4 />

Conceptos y controles clave relacionados con **control de acceso a los datos**.

<v-clicks>

- Conceptos clave de control de acceso a los datos.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para control de acceso a los datos — desarrollar con el material real del curso.
-->

---
layout: section
transition: slide-down
---

# Módulo 4

## Prevención de Fuga de Información (DLP)

<!--
Continuamos con el módulo 4, prevención de fuga de información (dlp).
-->

---
transition: slide-up
---

# Prevención de Fuga de Información (DLP)

<ph-globe-bold text-4xl text-sky-500 mb-4 />

Conceptos y controles clave relacionados con **prevención de fuga de información (dlp)**.

<v-clicks>

- Conceptos clave de prevención de fuga de información (dlp).
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para prevención de fuga de información (dlp) — desarrollar con el material real del curso.
-->

---
layout: section
transition: fade
---

# Módulo 5

## Gobierno de Datos

<!--
Continuamos con el módulo 5, gobierno de datos.
-->

---
transition: slide-up
---

# Gobierno de Datos

<ph-siren-bold text-4xl text-violet-500 mb-4 />

Conceptos y controles clave relacionados con **gobierno de datos**.

<v-clicks>

- Conceptos clave de gobierno de datos.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para gobierno de datos — desarrollar con el material real del curso.
-->

---
transition: slide-down
---

# Lo que recorrimos

<div grid grid-cols-2 gap-x-8 gap-y-2 text-sm mt-6>

<v-clicks>

- ✅ Fundamentos de la Seguridad de Datos
- ✅ Protección de Datos en Reposo y en Tránsito
- ✅ Control de Acceso a los Datos
- ✅ Prevención de Fuga de Información (DLP)
- ✅ Gobierno de Datos

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
