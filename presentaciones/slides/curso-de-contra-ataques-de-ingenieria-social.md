---
# shared components/snippets/pages live at the presentaciones/ root
addons:
  - .
theme: seriph
favicon: /favicon.ico
background: https://cover.divisioncero.com
title: Curso contra Ataques de Ingeniería Social
titleTemplate: "%s · CyberAcademy DivisionCero"
info: |
  ## Curso contra Ataques de Ingeniería Social
  Cómo detectar phishing y manipulación

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
  ogTitle: Curso contra Ataques de Ingeniería Social
  ogDescription: Cómo detectar phishing y manipulación
  ogImage: https://cover.sli.dev
  twitterCard: summary_large_image
  twitterTitle: Curso contra Ataques de Ingeniería Social
  twitterDescription: Cómo detectar phishing y manipulación
  twitterImage: https://cover.sli.dev
download: true
exportFilename: curso-de-contra-ataques-de-ingenieria-social-cyberacademy-divisioncero
browserExporter: true
pwa: true
monaco: false
twoslash: false
# enable Comark Syntax: https://comark.dev/syntax/markdown
comark: true
duration: 45min
---

# Curso contra Ataques de Ingeniería Social {.font-extrabold .tracking-tight}

Cómo detectar phishing y manipulación

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
Bienvenida al curso contra ataques de ingeniería social. Contenido de referencia (dummy) construido sobre la estructura estándar de CyberAcademy.
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
    <div text-xs op70>Fundamentos de la Ingeniería Social</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-bug-bold text-3xl text-red-500 />
    <div mt-2 font-semibold text-sm>Módulo 2</div>
    <div text-xs op70>Phishing y sus Variantes</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-key-bold text-3xl text-amber-500 />
    <div mt-2 font-semibold text-sm>Módulo 3</div>
    <div text-xs op70>Técnicas de Manipulación Presencial y Digital</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-globe-bold text-3xl text-sky-500 />
    <div mt-2 font-semibold text-sm>Módulo 4</div>
    <div text-xs op70>Señales de Alerta y Verificación</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-siren-bold text-3xl text-violet-500 />
    <div mt-2 font-semibold text-sm>Módulo 5</div>
    <div text-xs op70>Respuesta ante un Ataque de Ingeniería Social</div>
  </div>
</div>

<v-clicks>

## Don ROI {.mt-8}

- Aplicar los fundamentos de fundamentos de la ingeniería social en el día a día.
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

## Fundamentos de la Ingeniería Social

<!--
Continuamos con el módulo 1, fundamentos de la ingeniería social.
-->

---
transition: slide-up
---

# Fundamentos de la Ingeniería Social

<ph-shield-check-bold text-4xl text-emerald-500 mb-4 />

Conceptos y controles clave relacionados con **fundamentos de la ingeniería social**.

<v-clicks>

- Conceptos clave de fundamentos de la ingeniería social.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para fundamentos de la ingeniería social — desarrollar con el material real del curso.
-->

---
layout: section
transition: slide-right
---

# Módulo 2

## Phishing y sus Variantes

<!--
Continuamos con el módulo 2, phishing y sus variantes.
-->

---
transition: slide-up
---

# Phishing y sus Variantes

<ph-bug-bold text-4xl text-red-500 mb-4 />

Conceptos y controles clave relacionados con **phishing y sus variantes**.

<v-clicks>

- Conceptos clave de phishing y sus variantes.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para phishing y sus variantes — desarrollar con el material real del curso.
-->

---
layout: section
transition: slide-up
---

# Módulo 3

## Técnicas de Manipulación Presencial y Digital

<!--
Continuamos con el módulo 3, técnicas de manipulación presencial y digital.
-->

---
transition: slide-up
---

# Técnicas de Manipulación Presencial y Digital

<ph-key-bold text-4xl text-amber-500 mb-4 />

Conceptos y controles clave relacionados con **técnicas de manipulación presencial y digital**.

<v-clicks>

- Conceptos clave de técnicas de manipulación presencial y digital.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para técnicas de manipulación presencial y digital — desarrollar con el material real del curso.
-->

---
layout: section
transition: slide-down
---

# Módulo 4

## Señales de Alerta y Verificación

<!--
Continuamos con el módulo 4, señales de alerta y verificación.
-->

---
transition: slide-up
---

# Señales de Alerta y Verificación

<ph-globe-bold text-4xl text-sky-500 mb-4 />

Conceptos y controles clave relacionados con **señales de alerta y verificación**.

<v-clicks>

- Conceptos clave de señales de alerta y verificación.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para señales de alerta y verificación — desarrollar con el material real del curso.
-->

---
layout: section
transition: fade
---

# Módulo 5

## Respuesta ante un Ataque de Ingeniería Social

<!--
Continuamos con el módulo 5, respuesta ante un ataque de ingeniería social.
-->

---
transition: slide-up
---

# Respuesta ante un Ataque de Ingeniería Social

<ph-siren-bold text-4xl text-violet-500 mb-4 />

Conceptos y controles clave relacionados con **respuesta ante un ataque de ingeniería social**.

<v-clicks>

- Conceptos clave de respuesta ante un ataque de ingeniería social.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para respuesta ante un ataque de ingeniería social — desarrollar con el material real del curso.
-->

---
transition: slide-down
---

# Lo que recorrimos

<div grid grid-cols-2 gap-x-8 gap-y-2 text-sm mt-6>

<v-clicks>

- ✅ Fundamentos de la Ingeniería Social
- ✅ Phishing y sus Variantes
- ✅ Técnicas de Manipulación Presencial y Digital
- ✅ Señales de Alerta y Verificación
- ✅ Respuesta ante un Ataque de Ingeniería Social

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
