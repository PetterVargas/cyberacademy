---
# shared components/snippets/pages live at the presentaciones/ root
addons:
  - .
theme: seriph
favicon: /favicon.ico
background: https://cover.divisioncero.com
title: Curso de Ciberseguridad en el Trabajo Remoto y Dispositivos Móviles
titleTemplate: "%s · CyberAcademy DivisionCero"
info: |
  ## Curso de Ciberseguridad en el Trabajo Remoto y Dispositivos Móviles
  VPN, seguridad en el hogar y protección de teléfonos y tablets

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
  ogTitle: Curso de Ciberseguridad en el Trabajo Remoto y Dispositivos Móviles
  ogDescription: VPN, seguridad en el hogar y protección de teléfonos y tablets
  ogImage: https://cover.sli.dev
  twitterCard: summary_large_image
  twitterTitle: Curso de Ciberseguridad en el Trabajo Remoto y Dispositivos Móviles
  twitterDescription: VPN, seguridad en el hogar y protección de teléfonos y tablets
  twitterImage: https://cover.sli.dev
download: true
exportFilename: curso-de-ciberseguridad-en-el-trabajo-remoto-y-dispositivos-moviles-cyberacademy-divisioncero
browserExporter: true
pwa: true
monaco: false
twoslash: false
# enable Comark Syntax: https://comark.dev/syntax/markdown
comark: true
duration: 80min
---

# Curso de Ciberseguridad en el Trabajo Remoto y Dispositivos Móviles {.font-extrabold .tracking-tight}

VPN, seguridad en el hogar y protección de teléfonos y tablets

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
Bienvenida al curso de ciberseguridad en el trabajo remoto y dispositivos móviles. Contenido de referencia (dummy) construido sobre la estructura estándar de CyberAcademy.
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
    <div text-xs op70>Fundamentos del Trabajo Remoto Seguro</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-bug-bold text-3xl text-red-500 />
    <div mt-2 font-semibold text-sm>Módulo 2</div>
    <div text-xs op70>Seguridad en el Hogar y la Red</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-key-bold text-3xl text-amber-500 />
    <div mt-2 font-semibold text-sm>Módulo 3</div>
    <div text-xs op70>Dispositivos y Accesos</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-globe-bold text-3xl text-sky-500 />
    <div mt-2 font-semibold text-sm>Módulo 4</div>
    <div text-xs op70>Espacios de Trabajo y Videollamadas</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-siren-bold text-3xl text-violet-500 />
    <div mt-2 font-semibold text-sm>Módulo 5</div>
    <div text-xs op70>Colaboración Segura a Distancia</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-lock-key-bold text-3xl text-cyan-500 />
    <div mt-2 font-semibold text-sm>Módulo 6</div>
    <div text-xs op70>Fundamentos de Seguridad Móvil</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-target-bold text-3xl text-pink-500 />
    <div mt-2 font-semibold text-sm>Módulo 7</div>
    <div text-xs op70>Aplicaciones y Permisos</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-warning-circle-bold text-3xl text-orange-500 />
    <div mt-2 font-semibold text-sm>Módulo 8</div>
    <div text-xs op70>Conectividad y Redes</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-shield-check-bold text-3xl text-emerald-500 />
    <div mt-2 font-semibold text-sm>Módulo 9</div>
    <div text-xs op70>Protección de Datos en el Dispositivo</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-bug-bold text-3xl text-red-500 />
    <div mt-2 font-semibold text-sm>Módulo 10</div>
    <div text-xs op70>Uso Responsable y Privacidad</div>
  </div>
</div>

<v-clicks>

## Don ROI {.mt-8}

- Aplicar los fundamentos de fundamentos del trabajo remoto seguro en el día a día.
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

## Fundamentos del Trabajo Remoto Seguro

<!--
Continuamos con el módulo 1, fundamentos del trabajo remoto seguro.
-->

---
transition: slide-up
---

# Fundamentos del Trabajo Remoto Seguro

<ph-shield-check-bold text-4xl text-emerald-500 mb-4 />

Conceptos y controles clave relacionados con **fundamentos del trabajo remoto seguro**.

<v-clicks>

- Conceptos clave de fundamentos del trabajo remoto seguro.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para fundamentos del trabajo remoto seguro — desarrollar con el material real del curso.
-->

---
layout: section
transition: slide-right
---

# Módulo 2

## Seguridad en el Hogar y la Red

<!--
Continuamos con el módulo 2, seguridad en el hogar y la red.
-->

---
transition: slide-up
---

# Seguridad en el Hogar y la Red

<ph-bug-bold text-4xl text-red-500 mb-4 />

Conceptos y controles clave relacionados con **seguridad en el hogar y la red**.

<v-clicks>

- Conceptos clave de seguridad en el hogar y la red.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para seguridad en el hogar y la red — desarrollar con el material real del curso.
-->

---
layout: section
transition: slide-up
---

# Módulo 3

## Dispositivos y Accesos

<!--
Continuamos con el módulo 3, dispositivos y accesos.
-->

---
transition: slide-up
---

# Dispositivos y Accesos

<ph-key-bold text-4xl text-amber-500 mb-4 />

Conceptos y controles clave relacionados con **dispositivos y accesos**.

<v-clicks>

- Conceptos clave de dispositivos y accesos.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para dispositivos y accesos — desarrollar con el material real del curso.
-->

---
layout: section
transition: slide-down
---

# Módulo 4

## Espacios de Trabajo y Videollamadas

<!--
Continuamos con el módulo 4, espacios de trabajo y videollamadas.
-->

---
transition: slide-up
---

# Espacios de Trabajo y Videollamadas

<ph-globe-bold text-4xl text-sky-500 mb-4 />

Conceptos y controles clave relacionados con **espacios de trabajo y videollamadas**.

<v-clicks>

- Conceptos clave de espacios de trabajo y videollamadas.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para espacios de trabajo y videollamadas — desarrollar con el material real del curso.
-->

---
layout: section
transition: fade
---

# Módulo 5

## Colaboración Segura a Distancia

<!--
Continuamos con el módulo 5, colaboración segura a distancia.
-->

---
transition: slide-up
---

# Colaboración Segura a Distancia

<ph-siren-bold text-4xl text-violet-500 mb-4 />

Conceptos y controles clave relacionados con **colaboración segura a distancia**.

<v-clicks>

- Conceptos clave de colaboración segura a distancia.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para colaboración segura a distancia — desarrollar con el material real del curso.
-->

---
layout: section
transition: slide-left
---

# Módulo 6

## Fundamentos de Seguridad Móvil

<!--
Continuamos con el módulo 6, fundamentos de seguridad móvil.
-->

---
transition: slide-up
---

# Fundamentos de Seguridad Móvil

<ph-lock-key-bold text-4xl text-cyan-500 mb-4 />

Conceptos y controles clave relacionados con **fundamentos de seguridad móvil**.

<v-clicks>

- Conceptos clave de fundamentos de seguridad móvil.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para fundamentos de seguridad móvil — desarrollar con el material real del curso.
-->

---
layout: section
transition: slide-right
---

# Módulo 7

## Aplicaciones y Permisos

<!--
Continuamos con el módulo 7, aplicaciones y permisos.
-->

---
transition: slide-up
---

# Aplicaciones y Permisos

<ph-target-bold text-4xl text-pink-500 mb-4 />

Conceptos y controles clave relacionados con **aplicaciones y permisos**.

<v-clicks>

- Conceptos clave de aplicaciones y permisos.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para aplicaciones y permisos — desarrollar con el material real del curso.
-->

---
layout: section
transition: slide-up
---

# Módulo 8

## Conectividad y Redes

<!--
Continuamos con el módulo 8, conectividad y redes.
-->

---
transition: slide-up
---

# Conectividad y Redes

<ph-warning-circle-bold text-4xl text-orange-500 mb-4 />

Conceptos y controles clave relacionados con **conectividad y redes**.

<v-clicks>

- Conceptos clave de conectividad y redes.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para conectividad y redes — desarrollar con el material real del curso.
-->

---
layout: section
transition: slide-down
---

# Módulo 9

## Protección de Datos en el Dispositivo

<!--
Continuamos con el módulo 9, protección de datos en el dispositivo.
-->

---
transition: slide-up
---

# Protección de Datos en el Dispositivo

<ph-shield-check-bold text-4xl text-emerald-500 mb-4 />

Conceptos y controles clave relacionados con **protección de datos en el dispositivo**.

<v-clicks>

- Conceptos clave de protección de datos en el dispositivo.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para protección de datos en el dispositivo — desarrollar con el material real del curso.
-->

---
layout: section
transition: fade
---

# Módulo 10

## Uso Responsable y Privacidad

<!--
Continuamos con el módulo 10, uso responsable y privacidad.
-->

---
transition: slide-up
---

# Uso Responsable y Privacidad

<ph-bug-bold text-4xl text-red-500 mb-4 />

Conceptos y controles clave relacionados con **uso responsable y privacidad**.

<v-clicks>

- Conceptos clave de uso responsable y privacidad.
- Buenas prácticas recomendadas.
- Errores comunes a evitar.

</v-clicks>

<!--
Contenido de referencia (dummy) para uso responsable y privacidad — desarrollar con el material real del curso.
-->

---
transition: slide-down
---

# Lo que recorrimos

<div grid grid-cols-2 gap-x-8 gap-y-2 text-sm mt-6>

<v-clicks>

- ✅ Fundamentos del Trabajo Remoto Seguro
- ✅ Seguridad en el Hogar y la Red
- ✅ Dispositivos y Accesos
- ✅ Espacios de Trabajo y Videollamadas
- ✅ Colaboración Segura a Distancia
- ✅ Fundamentos de Seguridad Móvil
- ✅ Aplicaciones y Permisos
- ✅ Conectividad y Redes
- ✅ Protección de Datos en el Dispositivo
- ✅ Uso Responsable y Privacidad

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
