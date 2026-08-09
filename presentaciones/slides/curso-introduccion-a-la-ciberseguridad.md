---
# shared components/snippets/pages live at the presentaciones/ root
addons:
  - .
theme: seriph
favicon: /favicon.ico
background: https://cover.divisioncero.com
title: Curso de Introducción a la Ciberseguridad
titleTemplate: "%s · CyberAcademy DivisionCero"
info: |
  ## Curso de Introducción a la Ciberseguridad
  Fundamentos, amenazas, identidad digital, navegación segura y cultura de ciberseguridad.

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
  ogTitle: Curso de Introducción a la Ciberseguridad
  ogDescription: Fundamentos, amenazas, identidad digital, navegación segura y
    cultura de ciberseguridad.
  ogImage: https://cover.sli.dev
  twitterCard: summary_large_image
  twitterTitle: Curso de Introducción a la Ciberseguridad
  twitterDescription: Fundamentos, amenazas, identidad digital, navegación segura
    y cultura de ciberseguridad.
  twitterImage: https://cover.sli.dev
download: true
exportFilename: curso-introduccion-a-la-ciberseguridad-cyberacademy-divisioncero
browserExporter: true
pwa: true
monaco: false
twoslash: false
# enable Comark Syntax: https://comark.dev/syntax/markdown
comark: true
duration: 45min
---

# Curso de Introducción a la Ciberseguridad {.font-extrabold .tracking-tight}

Primeros pasos en el maravilloso mundo de la Ciberseguridad

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
Hola equipo, buen día, bienvenidos a este curso que hemos construido para cualquier persona como primer paso para iniciar en el maravillo mundo de la Ciberseguridad, no necesitas ningún conocimiento previo, solamente estar en modo #GanasdeAprender y ser consciente que la Ciberseguridad es un trabajo de todos, por trivial que consideremos la situación, podemos proteger a muchos.
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
    <div text-xs op70>Fundamentos de Ciberseguridad</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-bug-bold text-3xl text-red-500 />
    <div mt-2 font-semibold text-sm>Módulo 2</div>
    <div text-xs op70>Amenazas y Actores Maliciosos</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-key-bold text-3xl text-amber-500 />
    <div mt-2 font-semibold text-sm>Módulo 3</div>
    <div text-xs op70>Contraseñas e Identidad Digital</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-globe-bold text-3xl text-sky-500 />
    <div mt-2 font-semibold text-sm>Módulo 4</div>
    <div text-xs op70>Navegación y Comunicación Segura</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-siren-bold text-3xl text-violet-500 />
    <div mt-2 font-semibold text-sm>Módulo 5</div>
    <div text-xs op70>Cultura de Ciberseguridad</div>
  </div>
</div>

<v-clicks>

## Don ROI {.mt-8}

- Navegar en el ciberespacio siendo conscientes de los riesgos.
- Regulaciones y frameworks de ciberseguridad exigen esta capacitación.
- Proteger a nuestros seres queridos.

</v-clicks>

<!--
Este curso tiene cinco módulos en los que en cada uno se buscar lograr que sea aplicable a la realidad de las personas y las compañías.

Primero, fundamentos de Ciberseguridad, lograremos lo básico en ciberseguridad.

Segundo, amanazas y actores maliciosos, conoceremos que atacantes están constantemente buscando el error de nuestra parte.

Tercero, contraseñas e identidad digital, vamos a empezar a aprovisionarnos con herramientas porque no podemos llegar al campo de batalla de una forma tan ingenua.

Cuarto, navegación y comunicación segura, en este viaje necesitamos observar para identificar anomalías digitales y en este módulo nos encargaremos de ello.

Quinto, cultura de Ciberseguridad y reporte de incidentes, lo he dicho y lo voy a decir infinidad de veces, la ciberseguridad es una co-creación de un entorno, y la cultura es vital; para un trabajo colaborativo y reportar se convierte un acto de condescendencia necesario.

El retorno de inversión es bastante:

- [X] Navegar en el ciberespacio siendo conscientes de los riesgos.
- [X] Regulaciones y frameworks de ciberseguridad exigen esta capacitación.
- [X] Proteger a nuestros seres queridos.
- [X] Muchas más; pero, el tiempo no da.
-->

---
layout: center
class: text-center
transition: fade-out
---

# Una imagen vale más que mil palabras 🎨🖌️

<!--
Una imagen vale más que mil palabras.

Es necesario en otro escritorio tener listo el archivo. Draw del Dominio de Learning Path CyberUsuario
-->

---
layout: section
transition: slide-left
---

# Módulo 1

## Fundamentos de Ciberseguridad

---
layout: center
class: text-center
transition: slide-right
---

*¿Qué es la Ciberseguridad?*

# `coherencia + confianza = ciberseguridad`

<!--
Equipo siempre para explicar qué es la Ciberseguridad, me encanta esta fórmula coherencia + confianza = Ciberseguridad, se ve bastante pragmática; pero, sin esas dos variables inciales no se logra el objetivo; si no somos coherentes en lo que definimos y en los acuerdos que llegamos, independiente del contexto, nos faltaría una parte que es esencial.

También, la confianza es necesaria garársela tanto de nuestros colaboradores, como de nuestros líderes, de nuestros hijos y seres queridos, de nuestros clientes que depositan sus datos en nuestros productos, escenarios varios y es necesaria para la Ciberseguridad.

Cuando se tiene un contexto propicio para estas dos variables, el terreno está un poco más abonado para trabajar todos en el bien común.
-->

---
transition: slide-up
---

# ¿Qué es la Ciberseguridad?

<ph-shield-check-bold text-4xl text-emerald-500 mb-4 />

El conjunto de **prácticas, tecnologías y procesos** diseñados para proteger sistemas informáticos, redes, dispositivos y datos frente a ataques, accesos no autorizados, daños o robos de información.

<v-click>

## ¿Por qué importa?

Cuando falla, podemos perder **empresas, empleos y hasta afectar a las personas** que dependen de esos sistemas — el riesgo no siempre se puede cuantificar en dinero.

</v-click>

<!--
Ya siendo un poco más formales, a nivel de término, la ciberseguridad es el conjunto de prácticas, tecnologías y procesos diseñados para proteger sistemas informáticos, redes, dispositivos y datos frente a ataques, accesos no autorizados, daños o robos de información.

Cerremos esto con una pregunta, ¿Por qué importa? ¿Cuánto perdemos si no la implementamos? podemos perder empresas, afectar a personas, empleos y tristemente hasta familiares, porque hay riesgos que pueden afectar la salud mental de muchos de nosotros; así que cuantitativamente saber las pérdidos en algunos escenarios es invaluable.
-->

---
transition: slide-down
---

# La Tríada CIA

Las tres propiedades que toda medida de seguridad busca proteger.

<div grid grid-cols-3 gap-4 mt-8>
  <div v-click border="~ main rounded" p-5>
    <ph-eye-closed-bold text-3xl text-sky-500 />
    <div mt-2 font-semibold>Confidencialidad</div>
    <div text-sm op70 mt-1>Solo las personas autorizadas pueden acceder a la información.</div>
  </div>
  <div v-click border="~ main rounded" p-5>
    <ph-check-circle-bold text-3xl text-emerald-500 />
    <div mt-2 font-semibold>Integridad</div>
    <div text-sm op70 mt-1>Los datos no son alterados o manipulados sin permiso.</div>
  </div>
  <div v-click border="~ main rounded" p-5>
    <ph-network-bold text-3xl text-violet-500 />
    <div mt-2 font-semibold>Disponibilidad</div>
    <div text-sm op70 mt-1>Los sistemas y datos están accesibles cuando se necesitan.</div>
  </div>
</div>

## Herramienta Tríada CIA {.mt-8}

<div class="flex items-center justify-between pr-12">

[https://herramientas.divisioncero.com/triada-cia](https://herramientas.divisioncero.com/triada-cia)

<img src="/images/qr-code-herramienta-triada-cia.webp" class="w-36" />

</div>

<!--
Equipo las tres palabras más mencionadas en el contexto de Seguridad de la Información, conocidas como la CIA:

Confidencialidad, Integridad y Disponibilidad.

Confidencialidad: que solo las personas autorizadas puedan acceder a la información.
Integridad: que los datos no sean alterados o manipulados sin permiso.
Disponibilidad: que los sistemas y datos estén accesibles cuando se necesiten.

Equipo más de memorizar un tema de definición me interesa en este espacio que identifiquemos cuándo se afecta alguna o algunas de las palabras de la CIA.

Hemos desarrollado una herramienta práctica para realizar ejercicios sobre estas tres palabras claves; está disponible en la url o qr que ven en pantalla.he

Es necesario en otro escritorio tener lista la herramienta. Herramienta Tríada CIA realizar tres ejemplos.
-->

---
transition: view-transition
---

# Panorama actual de amenazas digitales

Con la adopción acelerada de IA, el número de vulnerabilidades encontradas a nivel de industria **sigue en aumento**. La capacidad de remediación debe crecer al mismo ritmo que el apetito de riesgo se reduce.

### 📊 Aumento de CVEs publicados — Últimos 3 años {.mt-6}

<div class="flex items-end gap-6 mt-4 mx-auto w-fit">
  <div v-click flex flex-col items-center gap-2>
    <div bg-sky-500 rounded-t w-16 h-16 />
    <div text-sm font-semibold>2022</div>
    <div text-xs op70>25,081</div>
    <div text-xs op50>— (base)</div>
  </div>
  <div v-click flex flex-col items-center gap-2>
    <div bg-sky-500 rounded-t w-16 h-19 />
    <div text-sm font-semibold>2023</div>
    <div text-xs op70>28,902</div>
    <div text-xs text-emerald-500>+15.2%</div>
  </div>
  <div v-click flex flex-col items-center gap-2>
    <div bg-amber-500 rounded-t w-16 h-26 />
    <div text-sm font-semibold>2024</div>
    <div text-xs op70>40,009</div>
    <div text-xs text-amber-500>+38.5%</div>
  </div>
  <div v-click flex flex-col items-center gap-2>
    <div bg-red-500 rounded-t w-16 h-32 />
    <div text-sm font-semibold>2025</div>
    <div text-xs op70>48,185</div>
    <div text-xs text-red-500>+20.6%</div>
  </div>
</div>

<div v-click text-center font-semibold text-amber-500 mt-4>
Incremento acumulado 2022 → 2025: +92.1% — casi el doble en tres años.
</div>

<div text-center text-xs op50 mt-4>
Fuente: CVE.org / MITRE Corporation — Fuente primaria oficial de CVEs — <a href="https://cve.org" target="_blank">cve.org</a>
</div>

<!--
El Panorama actual de amenazas digitales

Con la adopción acelerada de IA, el número de vulnerabilidades encontradas a nivel de industria **sigue en aumento**. La capacidad de remediación debe crecer al mismo ritmo que el apetito de riesgo se reduce.

A nivel mundial con los cambios relacionados a inteligencia artificial, el panorama no es el más positivo; muestra de ello, el aumento de CVEs que son Vulnerabilidades y Exposiciones Comunes, básicamente el código el código que identifica mundialmente una vulnerabilidades, su incremento acumulado da casi el doble en tres año.

Y esto solo teniendo las vulnerabilidades conocidas y que surten el proceso de publicación; muchas aún no las conocemos y son totalmente funcionales en este momento.
-->

---
layout: section
---

# Módulo 2

## Amenazas y Actores Maliciosos

---

# Top 10 amenazas para el usuario final

<div grid grid-cols-5 gap-3 mt-6>
  <div v-click border="~ main rounded" p-3 relative>
    <div abs-tr mr-2 mt-1 text-xs op40 font-mono>01</div>
    <ph-fish-bold text-xl text-sky-500 />
    <div mt-2 font-semibold text-sm>Phishing</div>
    <div text-xs op70 mt-1>Correos o mensajes falsos que buscan robar tus credenciales.</div>
  </div>
  <div v-click border="~ main rounded" p-3 relative>
    <div abs-tr mr-2 mt-1 text-xs op40 font-mono>02</div>
    <ph-lock-key-bold text-xl text-red-500 />
    <div mt-2 font-semibold text-sm>Ransomware</div>
    <div text-xs op70 mt-1>Cifra tus archivos y exige un pago para "liberarlos".</div>
  </div>
  <div v-click border="~ main rounded" p-3 relative>
    <div abs-tr mr-2 mt-1 text-xs op40 font-mono>03</div>
    <ph-bug-bold text-xl text-amber-500 />
    <div mt-2 font-semibold text-sm>Malware</div>
    <div text-xs op70 mt-1>Software malicioso que infecta y daña tus dispositivos.</div>
  </div>
  <div v-click border="~ main rounded" p-3 relative>
    <div abs-tr mr-2 mt-1 text-xs op40 font-mono>04</div>
    <ph-mask-happy-bold text-xl text-violet-500 />
    <div mt-2 font-semibold text-sm>Ingeniería social</div>
    <div text-xs op70 mt-1>Manipulación psicológica para que actúes sin pensar.</div>
  </div>
  <div v-click border="~ main rounded" p-3 relative>
    <div abs-tr mr-2 mt-1 text-xs op40 font-mono>05</div>
    <ph-key-bold text-xl text-emerald-500 />
    <div mt-2 font-semibold text-sm>Contraseñas débiles</div>
    <div text-xs op70 mt-1>Reutilizadas o fáciles de adivinar; abren muchas puertas.</div>
  </div>
  <div v-click border="~ main rounded" p-3 relative>
    <div abs-tr mr-2 mt-1 text-xs op40 font-mono>06</div>
    <ph-wifi-slash-bold text-xl text-sky-500 />
    <div mt-2 font-semibold text-sm>Wi-Fi público inseguro</div>
    <div text-xs op70 mt-1>Permite interceptar tu tráfico en redes abiertas.</div>
  </div>
  <div v-click border="~ main rounded" p-3 relative>
    <div abs-tr mr-2 mt-1 text-xs op40 font-mono>07</div>
    <ph-device-mobile-bold text-xl text-red-500 />
    <div mt-2 font-semibold text-sm>Smishing y vishing</div>
    <div text-xs op70 mt-1>Estafas por SMS o llamadas telefónicas.</div>
  </div>
  <div v-click border="~ main rounded" p-3 relative>
    <div abs-tr mr-2 mt-1 text-xs op40 font-mono>08</div>
    <ph-identification-card-bold text-xl text-amber-500 />
    <div mt-2 font-semibold text-sm>Robo de identidad</div>
    <div text-xs op70 mt-1>Uso indebido de tus datos personales para cometer fraude.</div>
  </div>
  <div v-click border="~ main rounded" p-3 relative>
    <div abs-tr mr-2 mt-1 text-xs op40 font-mono>09</div>
    <ph-warning-circle-bold text-xl text-violet-500 />
    <div mt-2 font-semibold text-sm>Software desactualizado</div>
    <div text-xs op70 mt-1>Vulnerabilidades conocidas sin parchear, fáciles de explotar.</div>
  </div>
  <div v-click border="~ main rounded" p-3 relative>
    <div abs-tr mr-2 mt-1 text-xs op40 font-mono>10</div>
    <ph-chat-centered-dots-bold text-xl text-emerald-500 />
    <div mt-2 font-semibold text-sm>Fraude en redes sociales</div>
    <div text-xs op70 mt-1>Perfiles falsos, sorteos y enlaces fraudulentos.</div>
  </div>
</div>

<!--
Este es un resumen de las diez amenazas más conocidas que enfrenta cualquier usuario final hoy en día, muchas de las cuales profundizaremos en los siguientes módulos.

Phishing: Correos o mensajes falsos que buscan robar tus credenciales.

Ransomware:Cifra tus archivos y exige un pago para "liberarlos".

Malware:Software malicioso que infecta y daña tus dispositivos.

Ingeniería socia: Manipulación psicológica para que actúes sin pensar.

Contraseñas débiles: Reutilizadas o fáciles de adivinar; abren muchas puertas.

Wi-Fi público inseguro: Permite interceptar tu tráfico en redes abiertas.

Smishing y vishing: Estafas por SMS o llamadas telefónicas.

Robo de identidad: Uso indebido de tus datos personales para cometer fraude.

Software desactualizado: Vulnerabilidades conocidas sin parchear, fáciles de explotar.

Fraude en redes sociales: Perfiles falsos, sorteos y enlaces fraudulentos.
-->

---

<div class="abs-tl m-10 text-left max-w-120">

# Phishing

Correos o mensajes falsos que buscan robar tus credenciales.

</div>

---

<div class="abs-tl m-10 text-left max-w-120">

# Ransomware

Cifra tus archivos y exige un pago para "liberarlos".

</div>

---

<div class="abs-tl m-10 text-left max-w-120">

# Malware

Software malicioso que infecta y daña tus dispositivos.

</div>

---

<div class="abs-tl m-10 text-left max-w-120">

# Ingeniería social

Manipulación psicológica para que actúes sin pensar.

</div>

---

<div class="abs-tl m-10 text-left max-w-120">

# Contraseñas débiles

Reutilizadas o fáciles de adivinar; abren muchas puertas.

</div>

---

<div class="abs-tl m-10 text-left max-w-120">

# Wi-Fi público inseguro

Permite interceptar tu tráfico en redes abiertas.

</div>

---

<div class="abs-tl m-10 text-left max-w-120">

# Smishing y vishing

Estafas por SMS o llamadas telefónicas.

</div>

---

<div class="abs-tl m-10 text-left max-w-120">

# Robo de identidad

Uso indebido de tus datos personales para cometer fraude.

</div>

---

<div class="abs-tl m-10 text-left max-w-120">

# Software desactualizado

Vulnerabilidades conocidas sin parchear, fáciles de explotar.

</div>

---

<div class="abs-tl m-10 text-left max-w-120">

# Fraude en redes sociales

Perfiles falsos, sorteos y enlaces fraudulentos.

</div>

---

# Perfiles de atacantes

<div grid grid-cols-3 gap-4 mt-8>
  <div v-click border="~ main rounded" p-5 text-center>
    <ph-target-bold text-3xl text-red-500 mx-auto />
    <div mt-2 font-semibold>Cibercriminales</div>
    <div text-sm op70 mt-1>Motivación económica: fraude, robo de datos, extorsión.</div>
  </div>
  <div v-click border="~ main rounded" p-5 text-center>
    <ph-warning-circle-bold text-3xl text-amber-500 mx-auto />
    <div mt-2 font-semibold>Hacktivistas</div>
    <div text-sm op70 mt-1>Motivación ideológica o política: protesta y exposición pública.</div>
  </div>
  <div v-click border="~ main rounded" p-5 text-center>
    <ph-user-focus-bold text-3xl text-violet-500 mx-auto />
    <div mt-2 font-semibold>Insiders</div>
    <div text-sm op70 mt-1>Ya tienen acceso: empleados, contratistas o socios.</div>
  </div>
</div>

<!--
Los perfiles del atacante son tres:

Los cibercriminales, que su principal objetivo es ecómico, buscan que la información que obtienen o la afectación que genera se vea representada en términos económicos.

Los Hacktivista, que por motivaciones ideológicas o políticas trasgreden la confidencialidad, integridad y/o dispobilidad de empresas públicas, privadas y de personas.

El último, el más peligroso y el más complejo de detectar, el insider, puede ser una persona que trabaja contigo todos los días, un proveedor, alguién que está dentro de nuestro entorno. Me encantaría decirte que vivimos en un paraiso; pero no lo es, la realidad es que tristemente hay personas que por intereses personales, resentimientos, emociones, afectan nuestro entorno con malas intensiones.
-->

---
layout: section
---

# Módulo 3

## Contraseñas e Identidad Digital

<!--
Hemos llegado hasta el módulo tres de contraseñas e identidad digital.
-->

---
layout: center
class: text-center
transition: fade-out
---

# Una herramienta vale más que mil palabras 🛠️

## Herramienta Generador de Contraseñas {.mt-8}

<div class="flex items-center justify-between pr-12 mt-10">

[https://herramientas.divisioncero.com/generador-contrasenas](https://herramientas.divisioncero.com/generador-contrasenas)

<img src="/images/qr-code-herramienta-generador-contrasenas.webp" class="w-36" />

</div>

<!--
Una herramienta vale más que mil palabras.

Generador de contraseña, vamos a la herramienta.

Esta herramienta permite generar contraseñas con los criterios y longitud que deseemos, entre mayores criterios y mayor longitud mucho mejor, acá podemos identificar criterios en seguridad de las contraseñas, permiten dificultar el descrubrimiento de la contraseña y la no recordación.

Esta herramienta es una de las que está en mis favoritos, porque para cada sistema que me solicita una contraseña la utilizo, y luego la almaceno en el gestor de contraseña, tema que veremos más adelante.

Es necesario en otro escritorio tener listo la herramienta Generador de Contraseñas.
-->

---
layout: center
class: text-center
transition: fade-out
---

# Una herramienta vale más que mil palabras 🛠️

## Herramienta Analizador de Contraseñas {.mt-8}

<div class="flex items-center justify-between pr-12 mt-10">

[https://herramientas.divisioncero.com/analizador-contrasenas](https://herramientas.divisioncero.com/analizador-contrasenas)

<img src="/images/qr-code-herramienta-analizador-contrasenas.webp" class="w-36" />

</div>

<!--
Otra herramienta relacionada con contraseña; pero esta, es para identificar cuánto tiempo tardaría un atacante en identificar la contraseña que usamos.

Vamos a la herramienta.

Antes de iniciar es importante aclarar que las contraseñas ingresadas, no quedan almacenadas en el servidor ni en la herramienta, todo el procesador se da en tu navegador.

Ya después de la lavada de manos de poncio pilatos, ingresemos la famosa contraseña 123456, acá podemos observar el tiempo que se tardaría un atacante en conocerla.

Un ejemplo palpable de la importancia de implementar criterios en seguridad en contraseña como lo vimos en la sesión anterior.

Es necesario en otro escritorio tener listo la herramienta Analizador de Contraseñas.
-->

---

# Un no negociable, el Multi-Factor Authentication

<div class="flex items-start justify-center gap-4 mt-16">

<div v-click="1" flex="~ col" items-center gap-2 w-32>
  <div v-motion :initial="{ scale: 0, opacity: 0 }" :enter="{ scale: 1, opacity: 1, transition: { duration: 400 } }" text-5xl>
    <ph-key-bold class="text-sky-500" />
  </div>
  <div text-xs text-center font-semibold>Contraseña</div>
</div>

<div v-click="2" text-3xl op40 mt-3>→</div>

<div v-click="2" flex="~ col" items-center gap-2 w-32>
  <div v-motion :initial="{ scale: 0, opacity: 0 }" :enter="{ scale: 1.15, opacity: 1, transition: { duration: 400 } }" text-5xl class="animate-pulse">
    <ph-check-circle-bold class="text-emerald-500" />
  </div>
  <div text-xs text-center font-semibold>Contraseña válida</div>
</div>

<div v-click="3" text-3xl op40 mt-3>→</div>

<div v-click="3" flex="~ col" items-center gap-2 w-32>
  <div v-motion :initial="{ scale: 0, opacity: 0 }" :enter="{ scale: 1, opacity: 1, transition: { duration: 400 } }" text-5xl>
    <ph-device-mobile-bold class="text-amber-500" />
  </div>
  <div text-xs text-center font-semibold>Código enviado a un receptor de confianza</div>
</div>

<div v-click="4" text-3xl op40 mt-3>→</div>

<div v-click="4" flex="~ col" items-center gap-2 w-32>
  <div v-motion :initial="{ scale: 0, opacity: 0 }" :enter="{ scale: 1, opacity: 1, transition: { duration: 400 } }" text-5xl>
    <ph-fingerprint-bold class="text-violet-500" />
  </div>
  <div text-xs text-center font-semibold>Confirmación biométrica adicional</div>
</div>

</div>

<div v-click="4" text-center font-semibold text-amber-500 mt-10>
Sin MFA, una contraseña filtrada es la única barrera entre un atacante y tu cuenta.
</div>

<!--
El multi factor de autenticación no es negociable, veamos el flujo: primero ingresas tu contraseña, el sistema la valida, luego se envía un código a un dispositivo o receptor de confianza, y en algunos casos se suma una confirmación biométrica adicional — como huella o rostro.

Entre más capas, más difícil se lo ponemos a un atacante, incluso si ya tiene tu contraseña.

No queda de maś cambiar periódicamente las contraseñas.
-->

---
layout: center
class: text-center
---

# Uso de KeePass

Gestor de contraseñas instalado, gratuito y validado por el mercado.

<!--
Explicación de instalación y funcionamiento de KeePass.
-->

---
layout: center
class: text-center
---

# Uso de LastPass

Gestor de contraseñas con capa gratuita en web, con enfoque en accesos administrativos críticos.

<!--
Explicación de instalación y funcionamiento de LastPass.
-->

---
layout: center
class: text-center
---

# Uso de Google Authenticator

Agrega una **segunda capa de verificación** además de la contraseña: un código temporal, una notificación push o una llave física.

<!--
Explicación de instalación y funcionamiento de Google Authenticator.
-->

---
layout: center
class: text-center
---

# Uso de Microsoft Authenticator

Agrega una **segunda capa de verificación** además de la contraseña: un código temporal, una notificación push o una llave física.

<!--
Explicación de instalación y funcionamiento de Microsoft Authenticator.
-->

---
layout: section
---

# Módulo 4

## Navegación y Comunicación Segura

<!--
Módulo 4 sobre Navegación y Comunicación Segura.

El penúltimo módulo del curso se enfoca en lo que realizamos principalmente con la tecnología y es navegar por intener; buscamos que esta actividad constante sea los más segura posible.
-->

---

# Identificar sitios web y enlaces seguros

<ph-browser-bold text-4xl text-sky-500 mb-4 />

<v-clicks>

- Verifica el **candado y el protocolo HTTPS**
- Pasa el cursor sobre el enlace antes de hacer clic — ¿el dominio coincide con lo esperado?
- Desconfía de **acortadores de URL** en mensajes no solicitados
- Escribe la dirección directamente si tienes dudas, en vez de seguir el enlace

</v-clicks>

## 🛠️ Herramienta ¿Es seguro este sitio? {.mt-8}

<div class="flex items-center justify-between pr-12 mt-10">

[https://herramientas.divisioncero.com/verificar-sitio-seguro](https://herramientas.divisioncero.com/verificar-sitio-seguro)

<img src="/images/qr-code-herramienta-verificar-sitio-seguro.webp" class="w-36" />

</div>

<!--
Equipo como conocedor en temas de Ciberseguridad, cada vez es más complejo identificar estos sitios o enlaces, estas medidas el paso inicial de revisión.

- Verifica el **candado y el protocolo HTTPS**
- Pasa el cursor sobre el enlace antes de hacer clic — ¿el dominio coincide con lo esperado?
- Desconfía de **acortadores de URL** en mensajes no solicitados
- Escribe la dirección directamente si tienes dudas, en vez de seguir el enlace.

La sofisticación de los atacantes, implementan mecanismos como si fue un sitio totalmente seguro; por ello, desarrollamos una herramienta que de manera práctica muestras escenarios para identificar sitio seguros e inseguro.

Vamos a la herramienta.

Se muestra tres ejercicios.

Es necesario en otro escritorio tener listo la herramienta ¿Es Seguro Este Sitio?
-->

---

# Uso seguro del correo electrónico

<ph-envelope-bold text-4xl text-sky-500 mb-4 />

<v-clicks>

- Verifica el **remitente real**, no solo el nombre mostrado
- Desconfía de adjuntos y enlaces que no esperabas
- No compartas credenciales ni datos sensibles por correo
- Activa MFA en tu cuenta de correo — es la puerta a todas las demás

</v-clicks>

## 🛠️ Herramienta Correos Seguros vs. No Seguros {.mt-8}

<div class="flex items-center justify-between pr-12 mt-10">

[https://herramientas.divisioncero.com/identificador-correos-seguros](https://herramientas.divisioncero.com/identificador-correos-seguros)

<img src="/images/qr-code-herramienta-identificador-correos-seguros.webp" class="w-36" />

</div>

<!--
Uso seguro del correo electrónico, y equipo, antes de hablas de las protecciones mi mejor sugerencia es realizar una configuración previa de tu correo, con reglas que detecten que si es temas publicitarios, contactos en frio, si te llega un mensaje de alguien o alguna empresa que no te has registrado reporta como spam, porque en la mayoría de los casos son tansos correos y tantos mensajes que damos ese clic por la masividad de los mensajes.

Como recomendaciones generales te tenemos:

- Verifica el **remitente real**, no solo el nombre mostrado
- Desconfía de adjuntos y enlaces que no esperabas
- No compartas credenciales ni datos sensibles por correo
- Activa MFA en tu cuenta de correo — es la puerta a todas las demás

Vamos a la herramienta.

Se muestra tres ejercicios.

Es necesario en otro escritorio tener listo la herramienta Correos Seguros vs. No Seguros
-->

---

# Redes Wi-Fi públicas y VPN

<div grid grid-cols-2 gap-8 mt-6 items-center>
<div>

<ph-wifi-slash-bold text-4xl text-red-500 mb-4 />

En una red pública sin cifrar, un atacante puede colocarse **"en el medio"** de tu conexión y leer o modificar el tráfico.

</div>
<div>

<ph-network-slash-bold text-4xl text-violet-500 mb-4 />

Una **VPN** cifra tu tráfico de extremo a extremo, incluso en redes que no controlas ni confías.

</div>
</div>

<div v-click text-center mt-8 text-sm op70>
Tú → 🔒 VPN cifrada 🔒 → Wi-Fi público → Internet
</div>

<!--
Que bueno trabajar remoto desde mi cafetería favorita, cierto?

Yo habitualmente que voy a estos sitios trato en lo posible de conectarme desde mis propios datos; pero hay escenarios que es necesario, ya sea por la ubicación o señal de internet.

Soy precabido en ese escenario, porque conectandome a una red pública o hasta la de mi hogar, un atacante puede conectar a la red y capturar el tráfico de los equipos que están conectado a la red, conocer sitio que visito y hasta obtener los accesos a servicio que uso.

En esto, la mejor protección es contar con una VPN que es una red virtual privada, que cifra el tráfico desde nuestro dispositivo hasta el sitio que visito, así un atacante captura el tráfico no va a poder leer la información que capturó.

Trata en lo posible en navegar por VPN en estos sitios públicos, por tus datos, los de tu empresa o familia y por tu privacidad.
-->

---
layout: section
---

# Módulo 5

## Cultura de Ciberseguridad y Reporte de Incidentes

<!--
Huy equipo, llegamos al úlitmo módulo de este curso, Cultura de Ciberseguridad y Reporte de Incidentes.

La Cultura es la esencia de nuestro entorno y construirla no es un trabajo trivial, requiere de tiempo y procesos, ya que somos como humano el principal vector de ataque usado por los ciberdelincuentes.
-->

---
transition: fade-out                                          
---

# Políticas de seguridad de la organización

<ph-building-bold text-4xl text-violet-500 mb-4 />

Cuando la compañía crece en clientes, colaboradores y proveedores, las políticas ayudan a resolver dudas y dinamizar la cultura de la organización.

<v-clicks>

- Política de Seguridad de la Información
- Política de Gestión de Accesos
- Política de Gestión de Concienciación
- Términos y Condiciones para Colaboradores
- Política de Gestión de Incidentes

</v-clicks>

<div v-click mt-6 op70 text-sm>
Documentos del SGX (Sistema de Gestión) en <a href="https://kudo.divisioncero.com/sgx/politicas-y-procedimientos" target="_blank">Kudo</a>, nuestro framework de Ciberseguridad — consúltalos si tu compañía ya los tiene, o úsalos como punto de partida si no.
</div>

<!--
Equipo en algunos contextos este apartado de política suena a algo arcaico o innecesario, pero toman relevancia cuando la compañía crece en clientes, en colaboradores, proveedores; son tantas las intepretaciones y dudas que esto nos ayuda a dinamizar la cultura de la organización.

En una organización que busca procesos y la mejora continua, hemos desarrollado Kudo, es un framework de Ciberseguridad que permite disminuir la curva de aprendizaje de las compañías en materia de Ciberseguridad, este framework tiene varias verticales y una de ella son los documentos del SGX que es el Sistema de Gestión que aplica para varios sistema de gestión, como Calidad, Seguridad de la Información, Riesgos, Continuidad, Inteligencia Artficial, entre otros...

https://kudo.divisioncero.com/
https://kudo.divisioncero.com/sgx
https://kudo.divisioncero.com/sgx/politicas-y-procedimientos

En políticas y procedimientos y con ocasión al curso que estamos realizando estos documentos pueden ser de gran ayuda:

- Política de Seguridad de la Información
- Política de Gestión de Accesos.
- Política de Gestión de Concienciación.
- Términos y Condiciones para Colaboradores.
- Política de Gestión de Incidentes,

Si llegas a una compañías estos son necesarios que los consultes si la compañía cuenta con alguno de ellos; sino, esta propuesta puede ser un gran comienzo.

Es necesario en otro escritorio tener listo kudo mostrar el framework, sgx y luego las políticas y procedimientos.
-->

---
transition: slide-up
---

# Cómo reportar un incidente o sospecha

<ph-siren-bold text-4xl text-red-500 mb-4 />

Toda organización debería tener un canal claro para reportar. **Ante la duda, reporta.**

<div grid grid-cols-4 gap-4 mt-8>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-chat-centered-dots-bold text-2xl mx-auto />
    <div mt-2 text-sm>Chat interno</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-envelope-bold text-2xl mx-auto />
    <div mt-2 text-sm>Correo</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-headset-bold text-2xl mx-auto />
    <div mt-2 text-sm>Mesa de servicio</div>
  </div>
  <div v-click border="~ main rounded" p-4 text-center>
    <ph-users-four-bold text-2xl mx-auto />
    <div mt-2 text-sm>Tu líder o equipo de seguridad</div>
  </div>
</div>

---
layout: statement
transition: slide-down
---

# Responsabilidad compartida en la Ciberseguridad

Entre todos nos protegemos.
<br>
Cada contribución construye un entorno más seguro.

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
transition: slide-down
---

# Lo que recorrimos

<div grid grid-cols-2 gap-x-8 gap-y-2 text-sm mt-6>

<v-clicks>

- ✅ Panorama actual de amenazas digitales
- ✅ Qué es la Ciberseguridad, por qué importa y tríada CIA
- ✅ Top 10 amenazas para el usuario final
- ✅ Phishing, ingeniería social, smishing, vishing ransomware y malware
- ✅ Robo de identidad, software desactualizado y fraude en redes sociales
- ✅ Perfiles de atacantes
- ✅ Contraseñas seguras (generador y analizador)
- ✅ Autenticación Multifactor (MFA)
- ✅ Gestores de contraseñas y apps de autenticación
- ✅ Sitios web y enlaces seguros
- ✅ Correo electrónico seguro
- ✅ Wi-Fi público y VPN
- ✅ Políticas de seguridad
- ✅ Cómo reportar un incidente
- ✅ Responsabilidad compartida

</v-clicks>

</div>

---
layout: intro
class: text-center
background: https://cover.sli.dev
---

# ¡Mil gracias! 🤘🏽
