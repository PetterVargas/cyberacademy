---
# shared components/snippets/pages live at the presentaciones/ root
addons:
  - .
theme: seriph
favicon: /favicon.ico
background: https://cover.divisioncero.com
title: Curso de Ciberseguridad en Infraestructura en Nube
titleTemplate: "%s · CyberAcademy DivisionCero"
info: |
  ## Curso de Ciberseguridad en Infraestructura en Nube
  Controles de seguridad en la nube

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
  ogTitle: Curso de Ciberseguridad en Infraestructura en Nube
  ogDescription: Controles de seguridad en la nube
  ogImage: https://cover.sli.dev
  twitterCard: summary_large_image
  twitterTitle: Curso de Ciberseguridad en Infraestructura en Nube
  twitterDescription: Controles de seguridad en la nube
  twitterImage: https://cover.sli.dev
download: true
exportFilename: cif-ciberseguridad-en-infraestructura-en-nube-cyberacademy-divisioncero
browserExporter: true
pwa: true
monaco: false
twoslash: false
# enable Comark Syntax: https://comark.dev/syntax/markdown
comark: true
duration: 45min
---

# Curso de Ciberseguridad en Infraestructura en Nube {.font-extrabold .tracking-tight}

Controles de seguridad en la nube

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
Bienvenida al curso de ciberseguridad en infraestructura en nube. Contenido de referencia (dummy) construido sobre la estructura estándar de CyberAcademy.
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
    <div text-xs op70>Fundamentos de Seguridad en la Nube</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-bug-bold text-3xl text-red-500 />
    <div mt-2 font-semibold text-sm>Módulo 2</div>
    <div text-xs op70>Gestión de Identidad y Acceso en la Nube</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-key-bold text-3xl text-amber-500 />
    <div mt-2 font-semibold text-sm>Módulo 3</div>
    <div text-xs op70>Seguridad de Redes y Configuración</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-globe-bold text-3xl text-sky-500 />
    <div mt-2 font-semibold text-sm>Módulo 4</div>
    <div text-xs op70>Monitoreo y Detección en Entornos Cloud</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-siren-bold text-3xl text-violet-500 />
    <div mt-2 font-semibold text-sm>Módulo 5</div>
    <div text-xs op70>Cumplimiento y Gobierno de la Nube</div>
  </div>
</div>

<v-clicks>

## Don ROI {.mt-8}

- Aplicar los fundamentos de fundamentos de seguridad en la nube en el día a día.
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

## Fundamentos de Seguridad en la Nube

<!--
Continuamos con el módulo 1, fundamentos de seguridad en la nube.
-->

---
transition: slide-up
---

# Fundamentos de Seguridad en la Nube

<ph-shield-check-bold text-4xl text-emerald-500 mb-4 />

Conceptos y controles clave relacionados con **fundamentos de seguridad en la nube**.

<v-clicks>

- Conceptos clave de fundamentos de seguridad en la nube.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para fundamentos de seguridad en la nube — desarrollar con el material real del curso.
-->

---
layout: section
transition: slide-right
---

# Módulo 2

## Gestión de Identidad y Acceso en la Nube

<!--
Continuamos con el módulo 2, gestión de identidad y acceso en la nube.
-->

---
transition: slide-up
---

# Gestión de Identidad y Acceso en la Nube

<ph-bug-bold text-4xl text-red-500 mb-4 />

Conceptos y controles clave relacionados con **gestión de identidad y acceso en la nube**.

<v-clicks>

- Conceptos clave de gestión de identidad y acceso en la nube.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para gestión de identidad y acceso en la nube — desarrollar con el material real del curso.
-->

---
layout: section
transition: slide-up
---

# Módulo 3

## Seguridad de Redes y Configuración

<!--
Continuamos con el módulo 3, seguridad de redes y configuración.
-->

---
transition: slide-up
---

# Seguridad de Redes y Configuración

<ph-key-bold text-4xl text-amber-500 mb-4 />

Conceptos y controles clave relacionados con **seguridad de redes y configuración**.

<v-clicks>

- Conceptos clave de seguridad de redes y configuración.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para seguridad de redes y configuración — desarrollar con el material real del curso.
-->

---
layout: section
transition: slide-down
---

# Módulo 4

## Monitoreo y Detección en Entornos Cloud

<!--
Continuamos con el módulo 4, monitoreo y detección en entornos cloud.
-->

---
transition: slide-up
---

# Monitoreo y Detección en Entornos Cloud

<ph-globe-bold text-4xl text-sky-500 mb-4 />

Conceptos y controles clave relacionados con **monitoreo y detección en entornos cloud**.

<v-clicks>

- Conceptos clave de monitoreo y detección en entornos cloud.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para monitoreo y detección en entornos cloud — desarrollar con el material real del curso.
-->

---
layout: section
transition: fade
---

# Módulo 5

## Cumplimiento y Gobierno de la Nube

<!--
Continuamos con el módulo 5, cumplimiento y gobierno de la nube.
-->

---
transition: slide-up
---

# Cumplimiento y Gobierno de la Nube

<ph-siren-bold text-4xl text-violet-500 mb-4 />

Conceptos y controles clave relacionados con **cumplimiento y gobierno de la nube**.

<v-clicks>

- Conceptos clave de cumplimiento y gobierno de la nube.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para cumplimiento y gobierno de la nube — desarrollar con el material real del curso.
-->

---
transition: slide-down
---

# Lo que recorrimos

<div grid grid-cols-2 gap-x-8 gap-y-2 text-sm mt-6>

<v-clicks>

- ✅ Fundamentos de Seguridad en la Nube
- ✅ Gestión de Identidad y Acceso en la Nube
- ✅ Seguridad de Redes y Configuración
- ✅ Monitoreo y Detección en Entornos Cloud
- ✅ Cumplimiento y Gobierno de la Nube

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
