---
# shared components/snippets/pages live at the presentaciones/ root
addons:
  - .
theme: seriph
favicon: /favicon.ico
background: https://cover.divisioncero.com
title: Curso de Ciberseguridad en APIs
titleTemplate: "%s · CyberAcademy DivisionCero"
info: |
  ## Curso de Ciberseguridad en APIs
  Diseño y protección segura de APIs

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
  ogTitle: Curso de Ciberseguridad en APIs
  ogDescription: Diseño y protección segura de APIs
  ogImage: https://cover.sli.dev
  twitterCard: summary_large_image
  twitterTitle: Curso de Ciberseguridad en APIs
  twitterDescription: Diseño y protección segura de APIs
  twitterImage: https://cover.sli.dev
download: true
exportFilename: cap-ciberseguridad-en-apis-cyberacademy-divisioncero
browserExporter: true
pwa: true
monaco: false
twoslash: false
# enable Comark Syntax: https://comark.dev/syntax/markdown
comark: true
duration: 45min
---

# Curso de Ciberseguridad en APIs {.font-extrabold .tracking-tight}

Diseño y protección segura de APIs

<img src="/images/logo-dark-divisioncero.png" class="mt-6 mx-auto h-6" />

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
Bienvenida al curso de ciberseguridad en apis. Contenido de referencia (dummy) construido sobre la estructura estándar de CyberAcademy.
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
    <div text-xs op70>Fundamentos de Seguridad en APIs</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-bug-bold text-3xl text-red-500 />
    <div mt-2 font-semibold text-sm>Módulo 2</div>
    <div text-xs op70>Autenticación y Autorización en APIs</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-key-bold text-3xl text-amber-500 />
    <div mt-2 font-semibold text-sm>Módulo 3</div>
    <div text-xs op70>Protección de Datos en Tránsito y en Uso</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-globe-bold text-3xl text-sky-500 />
    <div mt-2 font-semibold text-sm>Módulo 4</div>
    <div text-xs op70>Gestión y Monitoreo de APIs</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-siren-bold text-3xl text-violet-500 />
    <div mt-2 font-semibold text-sm>Módulo 5</div>
    <div text-xs op70>Gobierno del Ciclo de Vida de las APIs</div>
  </div>
</div>

<v-clicks>

## Don ROI {.mt-8}

- Aplicar los fundamentos de fundamentos de seguridad en apis en el día a día.
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

## Fundamentos de Seguridad en APIs

<!--
Continuamos con el módulo 1, fundamentos de seguridad en apis.
-->

---
transition: slide-up
---

# Fundamentos de Seguridad en APIs

<ph-shield-check-bold text-4xl text-emerald-500 mb-4 />

Conceptos y controles clave relacionados con **fundamentos de seguridad en apis**.

<v-clicks>

- Conceptos clave de fundamentos de seguridad en apis.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para fundamentos de seguridad en apis — desarrollar con el material real del curso.
-->

---
layout: section
transition: slide-right
---

# Módulo 2

## Autenticación y Autorización en APIs

<!--
Continuamos con el módulo 2, autenticación y autorización en apis.
-->

---
transition: slide-up
---

# Autenticación y Autorización en APIs

<ph-bug-bold text-4xl text-red-500 mb-4 />

Conceptos y controles clave relacionados con **autenticación y autorización en apis**.

<v-clicks>

- Conceptos clave de autenticación y autorización en apis.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para autenticación y autorización en apis — desarrollar con el material real del curso.
-->

---
layout: section
transition: slide-up
---

# Módulo 3

## Protección de Datos en Tránsito y en Uso

<!--
Continuamos con el módulo 3, protección de datos en tránsito y en uso.
-->

---
transition: slide-up
---

# Protección de Datos en Tránsito y en Uso

<ph-key-bold text-4xl text-amber-500 mb-4 />

Conceptos y controles clave relacionados con **protección de datos en tránsito y en uso**.

<v-clicks>

- Conceptos clave de protección de datos en tránsito y en uso.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para protección de datos en tránsito y en uso — desarrollar con el material real del curso.
-->

---
layout: section
transition: slide-down
---

# Módulo 4

## Gestión y Monitoreo de APIs

<!--
Continuamos con el módulo 4, gestión y monitoreo de apis.
-->

---
transition: slide-up
---

# Gestión y Monitoreo de APIs

<ph-globe-bold text-4xl text-sky-500 mb-4 />

Conceptos y controles clave relacionados con **gestión y monitoreo de apis**.

<v-clicks>

- Conceptos clave de gestión y monitoreo de apis.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para gestión y monitoreo de apis — desarrollar con el material real del curso.
-->

---
layout: section
transition: fade
---

# Módulo 5

## Gobierno del Ciclo de Vida de las APIs

<!--
Continuamos con el módulo 5, gobierno del ciclo de vida de las apis.
-->

---
transition: slide-up
---

# Gobierno del Ciclo de Vida de las APIs

<ph-siren-bold text-4xl text-violet-500 mb-4 />

Conceptos y controles clave relacionados con **gobierno del ciclo de vida de las apis**.

<v-clicks>

- Conceptos clave de gobierno del ciclo de vida de las apis.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para gobierno del ciclo de vida de las apis — desarrollar con el material real del curso.
-->

---
transition: slide-down
---

# Lo que recorrimos

<div grid grid-cols-2 gap-x-8 gap-y-2 text-sm mt-6>

<v-clicks>

- ✅ Fundamentos de Seguridad en APIs
- ✅ Autenticación y Autorización en APIs
- ✅ Protección de Datos en Tránsito y en Uso
- ✅ Gestión y Monitoreo de APIs
- ✅ Gobierno del Ciclo de Vida de las APIs

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

<img src="/images/logo-dark-divisioncero.png" class="mt-6 mx-auto h-6" />

<!--
Mil gracias y no olvides mantener activo el modo #GanasDeAprender
-->
