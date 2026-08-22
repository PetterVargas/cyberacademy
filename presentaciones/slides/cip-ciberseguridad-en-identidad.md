---
# shared components/snippets/pages live at the presentaciones/ root
addons:
  - .
theme: seriph
favicon: /favicon.ico
background: https://cover.divisioncero.com
title: Curso de Ciberseguridad en Identidad
titleTemplate: "%s · CyberAcademy DivisionCero"
info: |
  ## Curso de Ciberseguridad en Identidad
  IAM, PAM y gestión de identidades

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
  ogTitle: Curso de Ciberseguridad en Identidad
  ogDescription: IAM, PAM y gestión de identidades
  ogImage: https://cover.sli.dev
  twitterCard: summary_large_image
  twitterTitle: Curso de Ciberseguridad en Identidad
  twitterDescription: IAM, PAM y gestión de identidades
  twitterImage: https://cover.sli.dev
download: true
exportFilename: cip-ciberseguridad-en-identidad-cyberacademy-divisioncero
browserExporter: true
pwa: true
monaco: false
twoslash: false
# enable Comark Syntax: https://comark.dev/syntax/markdown
comark: true
duration: 45min
---

# Curso de Ciberseguridad en Identidad {.font-extrabold .tracking-tight}

IAM, PAM y gestión de identidades

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
Bienvenida al curso de ciberseguridad en identidad. Contenido de referencia (dummy) construido sobre la estructura estándar de CyberAcademy.
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
    <div text-xs op70>Fundamentos de la Gestión de Identidad</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-bug-bold text-3xl text-red-500 />
    <div mt-2 font-semibold text-sm>Módulo 2</div>
    <div text-xs op70>Autenticación Robusta</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-key-bold text-3xl text-amber-500 />
    <div mt-2 font-semibold text-sm>Módulo 3</div>
    <div text-xs op70>Gestión de Accesos Privilegiados</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-globe-bold text-3xl text-sky-500 />
    <div mt-2 font-semibold text-sm>Módulo 4</div>
    <div text-xs op70>Gobierno de Identidad</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-siren-bold text-3xl text-violet-500 />
    <div mt-2 font-semibold text-sm>Módulo 5</div>
    <div text-xs op70>Identidad en Entornos Modernos</div>
  </div>
</div>

<v-clicks>

## Don ROI {.mt-8}

- Aplicar los fundamentos de fundamentos de la gestión de identidad en el día a día.
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

## Fundamentos de la Gestión de Identidad

<!--
Continuamos con el módulo 1, fundamentos de la gestión de identidad.
-->

---
transition: slide-up
---

# Fundamentos de la Gestión de Identidad

<ph-shield-check-bold text-4xl text-emerald-500 mb-4 />

Conceptos y controles clave relacionados con **fundamentos de la gestión de identidad**.

<v-clicks>

- Conceptos clave de fundamentos de la gestión de identidad.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para fundamentos de la gestión de identidad — desarrollar con el material real del curso.
-->

---
layout: section
transition: slide-right
---

# Módulo 2

## Autenticación Robusta

<!--
Continuamos con el módulo 2, autenticación robusta.
-->

---
transition: slide-up
---

# Autenticación Robusta

<ph-bug-bold text-4xl text-red-500 mb-4 />

Conceptos y controles clave relacionados con **autenticación robusta**.

<v-clicks>

- Conceptos clave de autenticación robusta.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para autenticación robusta — desarrollar con el material real del curso.
-->

---
layout: section
transition: slide-up
---

# Módulo 3

## Gestión de Accesos Privilegiados

<!--
Continuamos con el módulo 3, gestión de accesos privilegiados.
-->

---
transition: slide-up
---

# Gestión de Accesos Privilegiados

<ph-key-bold text-4xl text-amber-500 mb-4 />

Conceptos y controles clave relacionados con **gestión de accesos privilegiados**.

<v-clicks>

- Conceptos clave de gestión de accesos privilegiados.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para gestión de accesos privilegiados — desarrollar con el material real del curso.
-->

---
layout: section
transition: slide-down
---

# Módulo 4

## Gobierno de Identidad

<!--
Continuamos con el módulo 4, gobierno de identidad.
-->

---
transition: slide-up
---

# Gobierno de Identidad

<ph-globe-bold text-4xl text-sky-500 mb-4 />

Conceptos y controles clave relacionados con **gobierno de identidad**.

<v-clicks>

- Conceptos clave de gobierno de identidad.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para gobierno de identidad — desarrollar con el material real del curso.
-->

---
layout: section
transition: fade
---

# Módulo 5

## Identidad en Entornos Modernos

<!--
Continuamos con el módulo 5, identidad en entornos modernos.
-->

---
transition: slide-up
---

# Identidad en Entornos Modernos

<ph-siren-bold text-4xl text-violet-500 mb-4 />

Conceptos y controles clave relacionados con **identidad en entornos modernos**.

<v-clicks>

- Conceptos clave de identidad en entornos modernos.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para identidad en entornos modernos — desarrollar con el material real del curso.
-->

---
transition: slide-down
---

# Lo que recorrimos

<div grid grid-cols-2 gap-x-8 gap-y-2 text-sm mt-6>

<v-clicks>

- ✅ Fundamentos de la Gestión de Identidad
- ✅ Autenticación Robusta
- ✅ Gestión de Accesos Privilegiados
- ✅ Gobierno de Identidad
- ✅ Identidad en Entornos Modernos

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
