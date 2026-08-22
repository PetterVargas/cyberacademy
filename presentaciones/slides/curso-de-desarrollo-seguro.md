---
# shared components/snippets/pages live at the presentaciones/ root
addons:
  - .
theme: seriph
favicon: /favicon.ico
background: https://cover.divisioncero.com
title: Curso de Desarrollo Seguro
titleTemplate: "%s · CyberAcademy DivisionCero"
info: |
  ## Curso de Desarrollo Seguro
  Buenas prácticas de programación segura

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
  ogTitle: Curso de Desarrollo Seguro
  ogDescription: Buenas prácticas de programación segura
  ogImage: https://cover.sli.dev
  twitterCard: summary_large_image
  twitterTitle: Curso de Desarrollo Seguro
  twitterDescription: Buenas prácticas de programación segura
  twitterImage: https://cover.sli.dev
download: true
exportFilename: curso-de-desarrollo-seguro-cyberacademy-divisioncero
browserExporter: true
pwa: true
monaco: false
twoslash: false
# enable Comark Syntax: https://comark.dev/syntax/markdown
comark: true
duration: 45min
---

# Curso de Desarrollo Seguro {.font-extrabold .tracking-tight}

Buenas prácticas de programación segura

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
Bienvenida al curso de desarrollo seguro. Contenido de referencia (dummy) construido sobre la estructura estándar de CyberAcademy.
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
    <div text-xs op70>Fundamentos de Desarrollo Seguro</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-bug-bold text-3xl text-red-500 />
    <div mt-2 font-semibold text-sm>Módulo 2</div>
    <div text-xs op70>Seguridad en el Diseño y Codificación</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-key-bold text-3xl text-amber-500 />
    <div mt-2 font-semibold text-sm>Módulo 3</div>
    <div text-xs op70>Pruebas de Seguridad</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-globe-bold text-3xl text-sky-500 />
    <div mt-2 font-semibold text-sm>Módulo 4</div>
    <div text-xs op70>Seguridad en Integración y Despliegue</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-siren-bold text-3xl text-violet-500 />
    <div mt-2 font-semibold text-sm>Módulo 5</div>
    <div text-xs op70>Mantenimiento y Respuesta</div>
  </div>
</div>

<v-clicks>

## Don ROI {.mt-8}

- Aplicar los fundamentos de fundamentos de desarrollo seguro en el día a día.
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

## Fundamentos de Desarrollo Seguro

<!--
Continuamos con el módulo 1, fundamentos de desarrollo seguro.
-->

---
transition: slide-up
---

# Fundamentos de Desarrollo Seguro

<ph-shield-check-bold text-4xl text-emerald-500 mb-4 />

Conceptos y controles clave relacionados con **fundamentos de desarrollo seguro**.

<v-clicks>

- Conceptos clave de fundamentos de desarrollo seguro.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para fundamentos de desarrollo seguro — desarrollar con el material real del curso.
-->

---
layout: section
transition: slide-right
---

# Módulo 2

## Seguridad en el Diseño y Codificación

<!--
Continuamos con el módulo 2, seguridad en el diseño y codificación.
-->

---
transition: slide-up
---

# Seguridad en el Diseño y Codificación

<ph-bug-bold text-4xl text-red-500 mb-4 />

Conceptos y controles clave relacionados con **seguridad en el diseño y codificación**.

<v-clicks>

- Conceptos clave de seguridad en el diseño y codificación.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para seguridad en el diseño y codificación — desarrollar con el material real del curso.
-->

---
layout: section
transition: slide-up
---

# Módulo 3

## Pruebas de Seguridad

<!--
Continuamos con el módulo 3, pruebas de seguridad.
-->

---
transition: slide-up
---

# Pruebas de Seguridad

<ph-key-bold text-4xl text-amber-500 mb-4 />

Conceptos y controles clave relacionados con **pruebas de seguridad**.

<v-clicks>

- Conceptos clave de pruebas de seguridad.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para pruebas de seguridad — desarrollar con el material real del curso.
-->

---
layout: section
transition: slide-down
---

# Módulo 4

## Seguridad en Integración y Despliegue

<!--
Continuamos con el módulo 4, seguridad en integración y despliegue.
-->

---
transition: slide-up
---

# Seguridad en Integración y Despliegue

<ph-globe-bold text-4xl text-sky-500 mb-4 />

Conceptos y controles clave relacionados con **seguridad en integración y despliegue**.

<v-clicks>

- Conceptos clave de seguridad en integración y despliegue.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para seguridad en integración y despliegue — desarrollar con el material real del curso.
-->

---
layout: section
transition: fade
---

# Módulo 5

## Mantenimiento y Respuesta

<!--
Continuamos con el módulo 5, mantenimiento y respuesta.
-->

---
transition: slide-up
---

# Mantenimiento y Respuesta

<ph-siren-bold text-4xl text-violet-500 mb-4 />

Conceptos y controles clave relacionados con **mantenimiento y respuesta**.

<v-clicks>

- Conceptos clave de mantenimiento y respuesta.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para mantenimiento y respuesta — desarrollar con el material real del curso.
-->

---
transition: slide-down
---

# Lo que recorrimos

<div grid grid-cols-2 gap-x-8 gap-y-2 text-sm mt-6>

<v-clicks>

- ✅ Fundamentos de Desarrollo Seguro
- ✅ Seguridad en el Diseño y Codificación
- ✅ Pruebas de Seguridad
- ✅ Seguridad en Integración y Despliegue
- ✅ Mantenimiento y Respuesta

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
