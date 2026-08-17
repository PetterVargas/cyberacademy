---
# shared components/snippets/pages live at the presentaciones/ root
addons:
  - .
theme: seriph
favicon: /favicon.ico
background: https://cover.divisioncero.com
title: Curso de Gobierno en Ciberseguridad
titleTemplate: "%s · CyberAcademy DivisionCero"
info: |
  ## Curso de Gobierno en Ciberseguridad
  Roles y responsabilidades del CISO

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
  ogTitle: Curso de Gobierno en Ciberseguridad
  ogDescription: Roles y responsabilidades del CISO
  ogImage: https://cover.sli.dev
  twitterCard: summary_large_image
  twitterTitle: Curso de Gobierno en Ciberseguridad
  twitterDescription: Roles y responsabilidades del CISO
  twitterImage: https://cover.sli.dev
download: true
exportFilename: cor-gobierno-en-ciberseguridad-cyberacademy-divisioncero
browserExporter: true
pwa: true
monaco: false
twoslash: false
# enable Comark Syntax: https://comark.dev/syntax/markdown
comark: true
duration: 45min
---

# Curso de Gobierno en Ciberseguridad {.font-extrabold .tracking-tight}

Roles y responsabilidades del CISO

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
Bienvenida al curso de gobierno en ciberseguridad. Contenido de referencia (dummy) construido sobre la estructura estándar de CyberAcademy.
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
    <div text-xs op70>Fundamentos del Gobierno de Ciberseguridad</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-bug-bold text-3xl text-red-500 />
    <div mt-2 font-semibold text-sm>Módulo 2</div>
    <div text-xs op70>Diseño de la Estrategia de Ciberseguridad</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-key-bold text-3xl text-amber-500 />
    <div mt-2 font-semibold text-sm>Módulo 3</div>
    <div text-xs op70>Políticas y Marco Normativo Interno</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-globe-bold text-3xl text-sky-500 />
    <div mt-2 font-semibold text-sm>Módulo 4</div>
    <div text-xs op70>Gestión del Presupuesto y Recursos</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-siren-bold text-3xl text-violet-500 />
    <div mt-2 font-semibold text-sm>Módulo 5</div>
    <div text-xs op70>Medición y Reporte del Gobierno</div>
  </div>
</div>

<v-clicks>

## Don ROI {.mt-8}

- Aplicar los fundamentos de fundamentos del gobierno de ciberseguridad en el día a día.
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

## Fundamentos del Gobierno de Ciberseguridad

<!--
Continuamos con el módulo 1, fundamentos del gobierno de ciberseguridad.
-->

---
transition: slide-up
---

# Fundamentos del Gobierno de Ciberseguridad

<ph-shield-check-bold text-4xl text-emerald-500 mb-4 />

Conceptos y controles clave relacionados con **fundamentos del gobierno de ciberseguridad**.

<v-clicks>

- Conceptos clave de fundamentos del gobierno de ciberseguridad.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para fundamentos del gobierno de ciberseguridad — desarrollar con el material real del curso.
-->

---
layout: section
transition: slide-right
---

# Módulo 2

## Diseño de la Estrategia de Ciberseguridad

<!--
Continuamos con el módulo 2, diseño de la estrategia de ciberseguridad.
-->

---
transition: slide-up
---

# Diseño de la Estrategia de Ciberseguridad

<ph-bug-bold text-4xl text-red-500 mb-4 />

Conceptos y controles clave relacionados con **diseño de la estrategia de ciberseguridad**.

<v-clicks>

- Conceptos clave de diseño de la estrategia de ciberseguridad.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para diseño de la estrategia de ciberseguridad — desarrollar con el material real del curso.
-->

---
layout: section
transition: slide-up
---

# Módulo 3

## Políticas y Marco Normativo Interno

<!--
Continuamos con el módulo 3, políticas y marco normativo interno.
-->

---
transition: slide-up
---

# Políticas y Marco Normativo Interno

<ph-key-bold text-4xl text-amber-500 mb-4 />

Conceptos y controles clave relacionados con **políticas y marco normativo interno**.

<v-clicks>

- Conceptos clave de políticas y marco normativo interno.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para políticas y marco normativo interno — desarrollar con el material real del curso.
-->

---
layout: section
transition: slide-down
---

# Módulo 4

## Gestión del Presupuesto y Recursos

<!--
Continuamos con el módulo 4, gestión del presupuesto y recursos.
-->

---
transition: slide-up
---

# Gestión del Presupuesto y Recursos

<ph-globe-bold text-4xl text-sky-500 mb-4 />

Conceptos y controles clave relacionados con **gestión del presupuesto y recursos**.

<v-clicks>

- Conceptos clave de gestión del presupuesto y recursos.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para gestión del presupuesto y recursos — desarrollar con el material real del curso.
-->

---
layout: section
transition: fade
---

# Módulo 5

## Medición y Reporte del Gobierno

<!--
Continuamos con el módulo 5, medición y reporte del gobierno.
-->

---
transition: slide-up
---

# Medición y Reporte del Gobierno

<ph-siren-bold text-4xl text-violet-500 mb-4 />

Conceptos y controles clave relacionados con **medición y reporte del gobierno**.

<v-clicks>

- Conceptos clave de medición y reporte del gobierno.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para medición y reporte del gobierno — desarrollar con el material real del curso.
-->

---
transition: slide-down
---

# Lo que recorrimos

<div grid grid-cols-2 gap-x-8 gap-y-2 text-sm mt-6>

<v-clicks>

- ✅ Fundamentos del Gobierno de Ciberseguridad
- ✅ Diseño de la Estrategia de Ciberseguridad
- ✅ Políticas y Marco Normativo Interno
- ✅ Gestión del Presupuesto y Recursos
- ✅ Medición y Reporte del Gobierno

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
