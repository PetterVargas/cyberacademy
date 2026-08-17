---
# shared components/snippets/pages live at the presentaciones/ root
addons:
  - .
theme: seriph
favicon: /favicon.ico
background: https://cover.divisioncero.com
title: Curso de Ciberseguridad en Equipos de Colaboradores
titleTemplate: "%s · CyberAcademy DivisionCero"
info: |
  ## Curso de Ciberseguridad en Equipos de Colaboradores
  EDR y protección de dispositivos

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
  ogTitle: Curso de Ciberseguridad en Equipos de Colaboradores
  ogDescription: EDR y protección de dispositivos
  ogImage: https://cover.sli.dev
  twitterCard: summary_large_image
  twitterTitle: Curso de Ciberseguridad en Equipos de Colaboradores
  twitterDescription: EDR y protección de dispositivos
  twitterImage: https://cover.sli.dev
download: true
exportFilename: cip-ciberseguridad-en-equipos-de-colaboradores-cyberacademy-divisioncero
browserExporter: true
pwa: true
monaco: false
twoslash: false
# enable Comark Syntax: https://comark.dev/syntax/markdown
comark: true
duration: 45min
---

# Curso de Ciberseguridad en Equipos de Colaboradores {.font-extrabold .tracking-tight}

EDR y protección de dispositivos

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
Bienvenida al curso de ciberseguridad en equipos de colaboradores. Contenido de referencia (dummy) construido sobre la estructura estándar de CyberAcademy.
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
    <div text-xs op70>Seguridad del Puesto de Trabajo</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-bug-bold text-3xl text-red-500 />
    <div mt-2 font-semibold text-sm>Módulo 2</div>
    <div text-xs op70>Protección contra Amenazas en el Endpoint</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-key-bold text-3xl text-amber-500 />
    <div mt-2 font-semibold text-sm>Módulo 3</div>
    <div text-xs op70>Gestión de Dispositivos Corporativos y BYOD</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-globe-bold text-3xl text-sky-500 />
    <div mt-2 font-semibold text-sm>Módulo 4</div>
    <div text-xs op70>Cifrado y Protección de Datos en el Endpoint</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-siren-bold text-3xl text-violet-500 />
    <div mt-2 font-semibold text-sm>Módulo 5</div>
    <div text-xs op70>Gestión del Ciclo de Vida del Equipo</div>
  </div>
</div>

<v-clicks>

## Don ROI {.mt-8}

- Aplicar los fundamentos de seguridad del puesto de trabajo en el día a día.
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

## Seguridad del Puesto de Trabajo

<!--
Continuamos con el módulo 1, seguridad del puesto de trabajo.
-->

---
transition: slide-up
---

# Seguridad del Puesto de Trabajo

<ph-shield-check-bold text-4xl text-emerald-500 mb-4 />

Conceptos y controles clave relacionados con **seguridad del puesto de trabajo**.

<v-clicks>

- Conceptos clave de seguridad del puesto de trabajo.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para seguridad del puesto de trabajo — desarrollar con el material real del curso.
-->

---
layout: section
transition: slide-right
---

# Módulo 2

## Protección contra Amenazas en el Endpoint

<!--
Continuamos con el módulo 2, protección contra amenazas en el endpoint.
-->

---
transition: slide-up
---

# Protección contra Amenazas en el Endpoint

<ph-bug-bold text-4xl text-red-500 mb-4 />

Conceptos y controles clave relacionados con **protección contra amenazas en el endpoint**.

<v-clicks>

- Conceptos clave de protección contra amenazas en el endpoint.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para protección contra amenazas en el endpoint — desarrollar con el material real del curso.
-->

---
layout: section
transition: slide-up
---

# Módulo 3

## Gestión de Dispositivos Corporativos y BYOD

<!--
Continuamos con el módulo 3, gestión de dispositivos corporativos y byod.
-->

---
transition: slide-up
---

# Gestión de Dispositivos Corporativos y BYOD

<ph-key-bold text-4xl text-amber-500 mb-4 />

Conceptos y controles clave relacionados con **gestión de dispositivos corporativos y byod**.

<v-clicks>

- Conceptos clave de gestión de dispositivos corporativos y byod.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para gestión de dispositivos corporativos y byod — desarrollar con el material real del curso.
-->

---
layout: section
transition: slide-down
---

# Módulo 4

## Cifrado y Protección de Datos en el Endpoint

<!--
Continuamos con el módulo 4, cifrado y protección de datos en el endpoint.
-->

---
transition: slide-up
---

# Cifrado y Protección de Datos en el Endpoint

<ph-globe-bold text-4xl text-sky-500 mb-4 />

Conceptos y controles clave relacionados con **cifrado y protección de datos en el endpoint**.

<v-clicks>

- Conceptos clave de cifrado y protección de datos en el endpoint.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para cifrado y protección de datos en el endpoint — desarrollar con el material real del curso.
-->

---
layout: section
transition: fade
---

# Módulo 5

## Gestión del Ciclo de Vida del Equipo

<!--
Continuamos con el módulo 5, gestión del ciclo de vida del equipo.
-->

---
transition: slide-up
---

# Gestión del Ciclo de Vida del Equipo

<ph-siren-bold text-4xl text-violet-500 mb-4 />

Conceptos y controles clave relacionados con **gestión del ciclo de vida del equipo**.

<v-clicks>

- Conceptos clave de gestión del ciclo de vida del equipo.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para gestión del ciclo de vida del equipo — desarrollar con el material real del curso.
-->

---
transition: slide-down
---

# Lo que recorrimos

<div grid grid-cols-2 gap-x-8 gap-y-2 text-sm mt-6>

<v-clicks>

- ✅ Seguridad del Puesto de Trabajo
- ✅ Protección contra Amenazas en el Endpoint
- ✅ Gestión de Dispositivos Corporativos y BYOD
- ✅ Cifrado y Protección de Datos en el Endpoint
- ✅ Gestión del Ciclo de Vida del Equipo

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
