---
# shared components/snippets/pages live at the presentaciones/ root
addons:
  - .
theme: seriph
favicon: /favicon.ico
background: https://cover.divisioncero.com
title: Curso DevOps y AppSec
titleTemplate: "%s · CyberAcademy DivisionCero"
info: |
  ## Curso DevOps y AppSec
  Seguridad en pipelines de CI/CD

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
  ogTitle: Curso DevOps y AppSec
  ogDescription: Seguridad en pipelines de CI/CD
  ogImage: https://cover.sli.dev
  twitterCard: summary_large_image
  twitterTitle: Curso DevOps y AppSec
  twitterDescription: Seguridad en pipelines de CI/CD
  twitterImage: https://cover.sli.dev
download: true
exportFilename: cap-devops-y-appsec-cyberacademy-divisioncero
browserExporter: true
pwa: true
monaco: false
twoslash: false
# enable Comark Syntax: https://comark.dev/syntax/markdown
comark: true
duration: 45min
---

# Curso DevOps y AppSec {.font-extrabold .tracking-tight}

Seguridad en pipelines de CI/CD

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
Bienvenida al curso devops y appsec. Contenido de referencia (dummy) construido sobre la estructura estándar de CyberAcademy.
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
    <div text-xs op70>Fundamentos de AppSec y DevSecOps</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-bug-bold text-3xl text-red-500 />
    <div mt-2 font-semibold text-sm>Módulo 2</div>
    <div text-xs op70>Seguridad en el Código</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-key-bold text-3xl text-amber-500 />
    <div mt-2 font-semibold text-sm>Módulo 3</div>
    <div text-xs op70>Seguridad en el Pipeline CI/CD</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-globe-bold text-3xl text-sky-500 />
    <div mt-2 font-semibold text-sm>Módulo 4</div>
    <div text-xs op70>Pruebas Dinámicas y de Seguridad</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-siren-bold text-3xl text-violet-500 />
    <div mt-2 font-semibold text-sm>Módulo 5</div>
    <div text-xs op70>Cultura y Gobierno de AppSec</div>
  </div>
</div>

<v-clicks>

## Don ROI {.mt-8}

- Aplicar los fundamentos de fundamentos de appsec y devsecops en el día a día.
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

## Fundamentos de AppSec y DevSecOps

<!--
Continuamos con el módulo 1, fundamentos de appsec y devsecops.
-->

---
transition: slide-up
---

# Fundamentos de AppSec y DevSecOps

<ph-shield-check-bold text-4xl text-emerald-500 mb-4 />

Conceptos y controles clave relacionados con **fundamentos de appsec y devsecops**.

<v-clicks>

- Conceptos clave de fundamentos de appsec y devsecops.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para fundamentos de appsec y devsecops — desarrollar con el material real del curso.
-->

---
layout: section
transition: slide-right
---

# Módulo 2

## Seguridad en el Código

<!--
Continuamos con el módulo 2, seguridad en el código.
-->

---
transition: slide-up
---

# Seguridad en el Código

<ph-bug-bold text-4xl text-red-500 mb-4 />

Conceptos y controles clave relacionados con **seguridad en el código**.

<v-clicks>

- Conceptos clave de seguridad en el código.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para seguridad en el código — desarrollar con el material real del curso.
-->

---
layout: section
transition: slide-up
---

# Módulo 3

## Seguridad en el Pipeline CI/CD

<!--
Continuamos con el módulo 3, seguridad en el pipeline ci/cd.
-->

---
transition: slide-up
---

# Seguridad en el Pipeline CI/CD

<ph-key-bold text-4xl text-amber-500 mb-4 />

Conceptos y controles clave relacionados con **seguridad en el pipeline ci/cd**.

<v-clicks>

- Conceptos clave de seguridad en el pipeline ci/cd.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para seguridad en el pipeline ci/cd — desarrollar con el material real del curso.
-->

---
layout: section
transition: slide-down
---

# Módulo 4

## Pruebas Dinámicas y de Seguridad

<!--
Continuamos con el módulo 4, pruebas dinámicas y de seguridad.
-->

---
transition: slide-up
---

# Pruebas Dinámicas y de Seguridad

<ph-globe-bold text-4xl text-sky-500 mb-4 />

Conceptos y controles clave relacionados con **pruebas dinámicas y de seguridad**.

<v-clicks>

- Conceptos clave de pruebas dinámicas y de seguridad.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para pruebas dinámicas y de seguridad — desarrollar con el material real del curso.
-->

---
layout: section
transition: fade
---

# Módulo 5

## Cultura y Gobierno de AppSec

<!--
Continuamos con el módulo 5, cultura y gobierno de appsec.
-->

---
transition: slide-up
---

# Cultura y Gobierno de AppSec

<ph-siren-bold text-4xl text-violet-500 mb-4 />

Conceptos y controles clave relacionados con **cultura y gobierno de appsec**.

<v-clicks>

- Conceptos clave de cultura y gobierno de appsec.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para cultura y gobierno de appsec — desarrollar con el material real del curso.
-->

---
transition: slide-down
---

# Lo que recorrimos

<div grid grid-cols-2 gap-x-8 gap-y-2 text-sm mt-6>

<v-clicks>

- ✅ Fundamentos de AppSec y DevSecOps
- ✅ Seguridad en el Código
- ✅ Seguridad en el Pipeline CI/CD
- ✅ Pruebas Dinámicas y de Seguridad
- ✅ Cultura y Gobierno de AppSec

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
