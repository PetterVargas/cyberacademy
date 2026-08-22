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
Hola equipo, buen día, bienvenidos a su curso que hemos construido para cualquier persona como inicio en el maravilloso mundo de la Ciberseguridad, no necesitas ningún conocimiento previo, solamente estar en modo #GanasDeAprender y ser consciente que la Ciberseguridad es un trabajo de todos, por trivial que consideremos la situación, podemos proteger a muchos.

Nuevamente bienvenidos.
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
Este curso tiene cinco módulos en los que en cada uno se busca lograr que sea aplicable a la realidad de las personas y las compañías.

Primero, fundamentos de Ciberseguridad, lograremos lo básico en ciberseguridad.

Segundo, amenazas y actores maliciosos, conoceremos que atacantes están constantemente buscando el error de nuestra parte.

Tercero, contraseñas e identidad digital, vamos a empezar a aprovisionarnos con herramientas porque no podemos llegar al campo de batalla de una forma tan ingenua.

Cuarto, navegación y comunicación segura, en este viaje necesitamos observar para identificar anomalías digitales y en este módulo nos encargaremos de ello.

Quinto, cultura de Ciberseguridad y reporte de incidentes, lo he dicho y lo voy a decir infinidad de veces, la ciberseguridad es una co-creación de un entorno, y la cultura es vital; para un trabajo colaborativo, reportar se convierte en un hábito necesario.

Don ROI

En nuestros cursos vamos a mencionar constantemente a Don ROI, porque buscamos justo que nuestro contenido tenga un retorno de inversión.

El retorno de inversión para este curso es bastante:

- [X] Navegar en el ciberespacio siendo conscientes de los riesgos.
- [X] Regulaciones y frameworks de ciberseguridad exigen esta capacitación.
- [X] Sabías que en algunos países de nuestro entorno, si una entidad gubernamental te va a sancionar por temas de protección de datos y se muestra evidencia de la capacitación de los colaboradores en ciberseguridad, puede existir una disminución de la sanción.
- [X] Proteger a nuestros seres queridos, que más que esto.
- [X] Y muchas más... Pero, el tiempo no da.
-->

---
layout: center
class: text-center
transition: fade-out
---

# Una imagen vale más que mil palabras 🎨🖌️

<!--
Una imagen vale más que mil palabras.

Este curso pertenece a la learning path de CyberUsuario mostramos esta imagen como una representación gráfica de lo que estamos abarcando, y justo este curso es el paso inicial.

Es necesario en otro escritorio tener listo el archivo. Draw del Dominio de Learning Path CyberUsuario
-->

---
layout: section
transition: slide-left
---

# Módulo 1

## Fundamentos de Ciberseguridad

<!--
El primer módulo del curso, fundamentos de Ciberseguridad.
-->

---
layout: center
class: text-center
transition: slide-right
---

*¿Qué es la Ciberseguridad?*

# `coherencia + confianza = ciberseguridad`

<!--
Equipo siempre para explicar qué es la Ciberseguridad, me encanta esta fórmula coherencia + confianza = Ciberseguridad, se ve bastante pragmática; pero, sin esas dos variables iniciales no se logra el objetivo; si no somos coherentes en lo que definimos y en los acuerdos que llegamos, independiente del contexto, nos faltaría una parte que es esencial.

También, la confianza es necesaria ganársela tanto de nuestros colaboradores, como de nuestros líderes, de nuestros hijos y seres queridos, de nuestros clientes que depositan sus datos en nuestros productos, escenarios varios y es vital para la Ciberseguridad.

Cuando se tiene un contexto propicio para estas dos variables, el terreno está un poco más abonado para trabajar todos en el bien común.
-->

---
transition: slide-up
---

# ¿Qué es la Ciberseguridad?

<ph-shield-check-bold text-4xl text-emerald-500 mb-4 />

<p class="text-center text-2xl leading-relaxed">
El conjunto de <strong>prácticas, tecnologías y procesos</strong> diseñados para proteger sistemas informáticos, redes, dispositivos y datos frente a ataques, accesos no autorizados, daños o robos de información.
</p>

<v-click>

## ¿Por qué importa?

Cuando falla, podemos perder **empresas, empleos y hasta afectar a las personas** que dependen de esos sistemas — el riesgo no siempre se puede cuantificar en dinero.

</v-click>

<!--
Ya siendo un poco más formales, a nivel de término, la ciberseguridad es el conjunto de prácticas, tecnologías y procesos diseñados para proteger sistemas informáticos, redes, dispositivos y datos frente a ataques, accesos no autorizados, daños o robos de información.

Cerremos esto con estas preguntas, ¿Por qué importa? ¿Cuánto perdemos si no la implementamos? podemos perder empresas, afectar a personas, empleos y tristemente hasta familiares, porque hay riesgos que pueden afectar la salud mental de muchos de nosotros; así que cuantitativamente saber las pérdidos en algunos escenarios, es invaluable.
-->

---
transition: slide-down
---

# La Tríada CIA

Las tres propiedades que toda medida de seguridad busca proteger.

<div grid grid-cols-3 gap-4 mt-8>
  <div v-click.fade.right.scale border="~ main rounded" p-5>
    <ph-eye-closed-bold text-3xl text-sky-500 />
    <div mt-2 font-semibold>Confidencialidad</div>
    <div text-sm op70 mt-1>Solo las personas autorizadas pueden acceder a la información.</div>
  </div>
  <div v-click.fade.right.scale border="~ main rounded" p-5>
    <ph-check-circle-bold text-3xl text-emerald-500 />
    <div mt-2 font-semibold>Integridad</div>
    <div text-sm op70 mt-1>Los datos no son alterados o manipulados sin permiso.</div>
  </div>
  <div v-click.fade.right.scale border="~ main rounded" p-5>
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

Confidencialidad: que solo las personas autorizadas puedan acceder a la información; ejemplificando un poco, muchas personas trabajan en un banco; pero, sólo algunas específicas pueden ingresar al lugar donde se guarda el dinero en efectivo.

Integridad: que los datos no sean alterados o manipulados sin permiso. Solo imagina que ingreses a tu aplicación bancaria y que el saldo sea diferente al que tienes en tu cuenta, sin ninguna manipulación de tu parte o desde tu cuenta, allí hubo una alteración de la integridad.

Disponibilidad: que los sistemas y datos estén accesibles cuando se necesiten. La típica frase, no tenemos sistema, o está fallando el sistema, cada indisponibilidad del servicio afecta la seguridad de la información.

Equipo, más de memorizar un tema de definición, me interesa en este espacio que identifiquemos cuándo se afecta alguna o algunas de las palabras de la CIA.

Hemos desarrollado una herramienta práctica para realizar ejercicios sobre estas tres palabras claves; está disponible en la url o qr que ven en pantalla.

Es necesario en otro escritorio tener lista la herramienta. Herramienta Tríada CIA realizar tres ejemplos.
-->

---
transition: view-transition
---

# Panorama actual de amenazas digitales

Con la adopción acelerada de IA, el número de vulnerabilidades encontradas a nivel de industria **sigue en aumento**. La capacidad de remediación debe crecer al mismo ritmo que el apetito de riesgo se reduce.

### 📊 Aumento de CVEs publicados — Últimos 3 años {.mt-6}

<div class="flex items-end gap-6 mt-4 mx-auto w-fit">
  <div flex flex-col items-center gap-2>
    <div bg-sky-500 rounded-t w-16 h-16 />
    <div text-sm font-semibold>2022</div>
    <div text-xs op70>25,081</div>
    <div text-xs op50>— (base)</div>
  </div>
  <div flex flex-col items-center gap-2>
    <div bg-sky-500 rounded-t w-16 h-19 />
    <div text-sm font-semibold>2023</div>
    <div text-xs op70>28,902</div>
    <div text-xs text-emerald-500>+15.2%</div>
  </div>
  <div flex flex-col items-center gap-2>
    <div bg-amber-500 rounded-t w-16 h-26 />
    <div text-sm font-semibold>2024</div>
    <div text-xs op70>40,009</div>
    <div text-xs text-amber-500>+38.5%</div>
  </div>
  <div flex flex-col items-center gap-2>
    <div bg-red-500 rounded-t w-16 h-32 />
    <div text-sm font-semibold>2025</div>
    <div text-xs op70>48,185</div>
    <div text-xs text-red-500>+20.6%</div>
  </div>
</div>

<div text-center font-semibold text-amber-500 mt-4>
Incremento acumulado 2022 → 2025: +92.1% — casi el doble en tres años.
</div>

<div text-center text-xs op50 mt-4>
Fuente: CVE.org / MITRE Corporation — Fuente primaria oficial de CVEs — <a href="https://cve.org" target="_blank">cve.org</a>
</div>

<!--
El Panorama actual de amenazas digitales

Con la adopción acelerada de la IA, el número de vulnerabilidades encontradas a nivel de industria **sigue en aumento**. La capacidad de remediación debe crecer al mismo ritmo que el apetito de riesgo se reduce.

A nivel mundial con los cambios relacionados a inteligencia artificial, el panorama no es el más positivo; muestra de ello, el aumento de CVEs que son Vulnerabilidades y Exposiciones Comunes, básicamente el código que identifica mundialmente una vulnerabilidades, su incremento acumulado da casi el doble en tres años.

Y esto solo teniendo las vulnerabilidades conocidas y que surten el proceso de publicación; muchas aún no las conocemos y son totalmente dañinas en este momento, sin conocer la cura aún.
-->

---
layout: section
---

# Módulo 2

## Amenazas y Actores Maliciosos

<!--
Continuamos con el módulo 2, amenazas y actores maliciosos.
-->

---

# Top 10 amenazas para el usuario final

<div grid grid-cols-5 gap-3 mt-6>
  <div v-click.fade.right.scale border="~ main rounded" p-3 relative>
    <div abs-tr mr-2 mt-1 text-xs op40 font-mono>01</div>
    <ph-fish-bold text-xl text-sky-500 />
    <div mt-2 font-semibold text-sm>Phishing</div>
    <div text-xs op70 mt-1>Correos o mensajes falsos que buscan robar tus credenciales.</div>
  </div>
  <div v-click.fade.right.scale border="~ main rounded" p-3 relative>
    <div abs-tr mr-2 mt-1 text-xs op40 font-mono>02</div>
    <ph-lock-key-bold text-xl text-red-500 />
    <div mt-2 font-semibold text-sm>Ransomware</div>
    <div text-xs op70 mt-1>Cifra tus archivos y exige un pago para "liberarlos".</div>
  </div>
  <div v-click.fade.right.scale border="~ main rounded" p-3 relative>
    <div abs-tr mr-2 mt-1 text-xs op40 font-mono>03</div>
    <ph-bug-bold text-xl text-amber-500 />
    <div mt-2 font-semibold text-sm>Malware</div>
    <div text-xs op70 mt-1>Software malicioso que infecta y daña tus dispositivos.</div>
  </div>
  <div v-click.fade.right.scale border="~ main rounded" p-3 relative>
    <div abs-tr mr-2 mt-1 text-xs op40 font-mono>04</div>
    <ph-mask-happy-bold text-xl text-violet-500 />
    <div mt-2 font-semibold text-sm>Ingeniería social</div>
    <div text-xs op70 mt-1>Manipulación psicológica para que actúes sin pensar.</div>
  </div>
  <div v-click.fade.right.scale border="~ main rounded" p-3 relative>
    <div abs-tr mr-2 mt-1 text-xs op40 font-mono>05</div>
    <ph-key-bold text-xl text-emerald-500 />
    <div mt-2 font-semibold text-sm>Contraseñas débiles</div>
    <div text-xs op70 mt-1>Reutilizadas o fáciles de adivinar; abren muchas puertas.</div>
  </div>
  <div v-click.fade.right.scale border="~ main rounded" p-3 relative>
    <div abs-tr mr-2 mt-1 text-xs op40 font-mono>06</div>
    <ph-wifi-slash-bold text-xl text-sky-500 />
    <div mt-2 font-semibold text-sm>Wi-Fi público inseguro</div>
    <div text-xs op70 mt-1>Permite interceptar tu tráfico en redes abiertas.</div>
  </div>
  <div v-click.fade.right.scale border="~ main rounded" p-3 relative>
    <div abs-tr mr-2 mt-1 text-xs op40 font-mono>07</div>
    <ph-device-mobile-bold text-xl text-red-500 />
    <div mt-2 font-semibold text-sm>Smishing y vishing</div>
    <div text-xs op70 mt-1>Estafas por SMS o llamadas telefónicas.</div>
  </div>
  <div v-click.fade.right.scale border="~ main rounded" p-3 relative>
    <div abs-tr mr-2 mt-1 text-xs op40 font-mono>08</div>
    <ph-identification-card-bold text-xl text-amber-500 />
    <div mt-2 font-semibold text-sm>Robo de identidad</div>
    <div text-xs op70 mt-1>Uso indebido de tus datos personales para cometer fraude.</div>
  </div>
  <div v-click.fade.right.scale border="~ main rounded" p-3 relative>
    <div abs-tr mr-2 mt-1 text-xs op40 font-mono>09</div>
    <ph-warning-circle-bold text-xl text-violet-500 />
    <div mt-2 font-semibold text-sm>Software desactualizado</div>
    <div text-xs op70 mt-1>Vulnerabilidades conocidas sin parchear, fáciles de explotar.</div>
  </div>
  <div v-click.fade.right.scale border="~ main rounded" p-3 relative>
    <div abs-tr mr-2 mt-1 text-xs op40 font-mono>10</div>
    <ph-chat-centered-dots-bold text-xl text-emerald-500 />
    <div mt-2 font-semibold text-sm>Fraude en redes sociales</div>
    <div text-xs op70 mt-1>Perfiles falsos, sorteos y enlaces fraudulentos.</div>
  </div>
</div>

<!--
Muy aburrida, corrección.

Este es un resumen de las diez amenazas más conocidas que enfrenta cualquier usuario final hoy en día, muchas de las cuales profundizaremos en los siguientes módulos.

Phishing: Correos o mensajes falsos que buscan robar tus credenciales.

Ransomware: Cifra tus archivos y exige un pago para "liberarlos". Una extorsión cibernética.

Malware: Software malicioso que infecta y daña tus dispositivos; en algunos casos con fines adicionales de robo de información.

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

<img src="/images/modalidad-delictiva-phishing.webp" class="absolute right-10 top-1/2 -translate-y-1/2 max-h-[80%] rounded shadow-lg border main" />

<!--
Acá podemos ver gráficamente un ejemplo de phishing. Busca obtener credenciales. Patrones para identificar varios, pero nuestro criterio es vital.

¿Cuáles identificas?
-->

---

<div class="abs-tl m-10 text-left max-w-120">

# Ransomware

Cifra tus archivos y exige un pago para "liberarlos".

</div>

<img src="/images/modalidad-delictiva-ransomware.webp" class="absolute right-10 top-1/2 -translate-y-1/2 max-h-[80%] rounded shadow-lg border main" />

<!--
El Ransomware puede ser considerado el ataque que más acabado compañías en el mundo, todos los datos de la operación cifrados, y para acceder debes pagar una cantidad de dinero exorbitante.
-->

---

<div class="abs-tl m-10 text-left max-w-120">

# Malware

Software malicioso que infecta y daña tus dispositivos.

</div>

<img src="/images/modalidad-delictiva-malware.webp" class="absolute right-10 top-1/2 -translate-y-1/2 max-h-[80%] rounded shadow-lg border main" />

<!--
Instalemos aplicaciones a lo loco, sin precaución y solo porque funcionan, no todo lo "gratis" entre comillas, es gratis, solo instalemos lo necesario y desde el sitio oficial del aplicativo o la tienda de aplicaciones oficial.
-->

---

<div class="abs-tl m-10 text-left max-w-120">

# Ingeniería social

Manipulación psicológica para que actúes sin pensar.

</div>

<div class="absolute inset-0 flex items-center justify-center px-16">

<p class="text-center font-bold w-full max-w-4xl mx-auto" style="font-size: 2.67rem; line-height: 1.15;">
¿Si te llega un correo con imágenes adjuntas de la infidelidad de tu novio/novia lo abrirías?
</p>

</div>

<!--
Esta pregunta me encanta para definir ingeniería social, ¿Si te llega un correo con imágenes adjuntas de la infidelidad de tu pareja lo abrirías?

En varios lugares que he dado conferencias y es un lugar público con varias personas, somos bastante decentes en decir, yo no lo abriría; pero, en un momento estando solos, con bastante trabajos y cosas al tiempo, muy probablemente sí daríamos clic.

En una de mis vidas pasadas, atendí varios incidentes de fraude financiero porque la persona secretaria o contadora que dio clic, que en nuestro contexto, las pequeñas y las medianas empresas esta persona no solo realiza temas administrativos y contables; sino también, acceden a las cuentas bancarias de las compañías, y preciso, no eran fotos de infidelidad; sino, malware de control remoto y captura de información bancarias, para posteriormente realizar transacciones fraudulentas por parte de los ciberdelincuentes.
-->

---

<div class="abs-tl m-10 text-left max-w-120">

# Wi-Fi público inseguro

Permite interceptar tu tráfico en redes abiertas.

</div>

<img src="/images/modalidad-delictiva-wifi_mitm.webp" class="absolute right-10 top-1/2 -translate-y-1/2 max-h-[80%] rounded shadow-lg border main" />

<!--
Wi-Fi público y gratuito, ¿lo mejor, cierto? Eso pensamos y más cuando trabajamos remoto.

No quiero irme por temas técnicos, pero existen técnicas que permiten a un atacante capturar información tuya, mientras navegas.
-->

---

<div class="abs-tl m-10 text-left max-w-120">

# Smishing y vishing

Estafas por SMS o llamadas telefónicas.

</div>

<div class="absolute right-10 top-1/2 -translate-y-1/2 h-[80%] flex gap-4 items-center">
  <img src="/images/modalidad-delictiva-smishing.webp" class="h-full rounded shadow-lg border main" />
  <img src="/images/modalidad-delictiva-vishing.webp" class="h-full rounded shadow-lg border main" />
</div>

<!--
Los estafadores buscan cualquier canal para conseguir víctimas, y aún les es efectivo enviar mensajes de texto y llamadas telefónicas, estas dos modalidades tienen el mismo propósito, lo único que las diferencia es el canal, smishing para sms y vishing para llamadas telefónicas.
-->

---

<div class="abs-tl m-10 text-left max-w-120">

# Robo de identidad

Uso indebido de tus datos personales para cometer fraude.

</div>

<img src="/images/modalidad-delictiva-whatsapp_robo.webp" class="absolute right-32 top-1/2 -translate-y-1/2 max-h-[80%] rounded shadow-lg border main" />

<!--
Te llaman de soporte técnico de alguno de los productos que tienes, tu servicio de internet, tu suscripción de streaming, el atacante previamente te hizo una investigación previa, en esta suplantación en busca de abro comillas "ayudarte" cierro comillas, con una mejora en el servicio.

En el proceso de validación del soporte te envían un código, el atacante solicita ese código, pero no se para el soporte; sino para instalar tu whatsapp en otro dispositivo, y después de tomar control de él, contactan a tus conocidos con otro tipo de fraudes, robo de información y varios escenarios fraudulentos.

Por ello, activa la verificación en dos pasos disponible en tu cuenta de whatsapp.

Adicionalmente, introduce un correo electrónico de respaldo para poder recuperar tu cuenta si olvidas el PIN.
-->

---

<div class="abs-tl m-10 text-left max-w-120">

# Software desactualizado

Vulnerabilidades conocidas sin parchear, fáciles de explotar.

</div>

<img src="/images/modalidad-delictiva-software_desactualizado.webp" class="absolute right-10 top-1/2 -translate-y-1/2 max-h-[80%] rounded shadow-lg border main" />

<!--
Existen ataques más sofisticados, que no necesariamente tenemos que dar clic, en nuestro día a día utilizamos herramientas que pueden estar desactualizadas, y una desactualización no solo implica afectación en la funcionalidad; sino, una mayor probabilidad de que ese software tenga vulnerabilidades.

La actualización es necesaria y debe ser constante; porque solo imagina que durante años no realicemos un aseo a nuestra casa, un aseo a nuestros baños; de forma analógica las bacterias y enfermedades llegarían.

Así, que dejemos el sistema quieto solo porque funciona, no es la decisión más sensata; y más como vimos anteriormente donde con IA los atacantes buscan vulnerabilidades por donde quieran. Esa limpieza constante en nuestros sistemas es tan necesaria como la de nuestra casa.
-->

---

<div class="abs-tl m-10 text-left max-w-120">

# Fraude en redes sociales

Perfiles falsos, sorteos y enlaces fraudulentos.

</div>

<img src="/images/modalidad-delictiva-fraude_rrss.webp" class="absolute right-10 top-1/2 -translate-y-1/2 max-h-[80%] rounded shadow-lg border main" />

<!--
¿Quién no ha tenido un familiar, amigo o conocido que lo estafaron por internet?

Para un atacante es la modalidad que menos conocimientos técnicos requiere, por eso es tan masiva y ha afectado a tantas personas.

Tipos de engaños muchos, mi recomendación principal es piensa antes de dar clic o transferir cuando el producto, servicio o propuesta sea con una ganancia tan absurdamente grande.
-->

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

Los cibercriminales, que su principal objetivo es económico, buscan que la información que obtienen o la afectación que genera se vea representada en términos económicos.

Los Hacktivista, que por motivaciones ideológicas o políticas transgreden la confidencialidad, integridad y/o disponibilidad de empresas públicas, privadas y de personas.

El último, el más peligroso y el más complejo de detectar, el insider, puede ser una persona que trabaja contigo todos los días, un proveedor, alguien que está dentro de nuestro entorno. Me encantaría decirte que vivimos en un paraíso; pero no lo es, la realidad es que tristemente hay personas que por intereses personales, resentimientos, emociones, afectan nuestro entorno con malas intenciones.
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

Esta herramienta permite generar contraseñas con los criterios y longitud que deseemos, entre mayores criterios y mayor longitud mucho mejor, acá podemos identificar criterios en seguridad de las contraseñas, permiten dificultar el descubrimiento de la contraseña y la no recordación.

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

Antes de iniciar es importante aclarar que las contraseñas ingresadas, no quedan almacenadas en el servidor ni en la herramienta, todo el procesamiento se da en tu navegador.

Ya después de la lavada de manos de Poncio Pilatos, ingresemos la famosa contraseña 123456, acá podemos observar el tiempo que se tardaría un atacante en conocerla.

Un ejemplo palpable de la importancia de implementar criterios en seguridad en contraseña como lo vimos en la sesión anterior.

Es necesario en otro escritorio tener listo la herramienta Analizador de Contraseñas.
-->

---

# Un no negociable: la Autenticación Multifactor (MFA)

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
Sin MFA, tu contraseña es la única barrera entre un atacante y tu cuenta — si se filtra, no queda nada más que lo detenga.
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

# Uso de Gestor de Contraseñas

<!--
Explicación de instalación y funcionamiento de un gestor de contraseñas.
-->

---
layout: center
class: text-center
---

# Uso de Aplicaciones de Multifactor (MFA)

<!--
Explicación de instalación y funcionamiento de aplicaciones de Multifactor (MFA), como Google Authenticator y Microsoft Authenticator.
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

- Verifica el **candado y el protocolo HTTPS**
- Pasa el cursor sobre el enlace antes de hacer clic — ¿el dominio coincide con lo esperado?
- Desconfía de **acortadores de URL** en mensajes no solicitados
- Escribe la dirección directamente si tienes dudas, en vez de seguir el enlace

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

- Verifica el **remitente real**, no solo el nombre mostrado
- Desconfía de adjuntos y enlaces que no esperabas
- No compartas credenciales ni datos sensibles por correo
- Activa MFA en tu cuenta de correo — es la puerta a todas las demás

## 🛠️ Herramienta Correos Seguros vs. No Seguros {.mt-8}

<div class="flex items-center justify-between pr-12 mt-10">

[https://herramientas.divisioncero.com/identificador-correos-seguros](https://herramientas.divisioncero.com/identificador-correos-seguros)

<img src="/images/qr-code-herramienta-identificador-correos-seguros.webp" class="w-36" />

</div>

<!--
Uso seguro del correo electrónico, y equipo, antes de hablar de las protecciones mi mejor sugerencia es realizar una configuración previa de tu correo, con reglas que detecten que si es temas publicitarios, contactos en frío, si te llega un mensaje de alguien o alguna empresa que no te has registrado reporta como spam, porque en la mayoría de los casos son tantos correos y tantos mensajes que damos ese clic por la masividad de los mensajes.

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

<div text-center mt-8 text-sm op70>
Tú → 🔒 VPN cifrada 🔒 → Wi-Fi público → Internet
</div>

<!--
¡Qué bueno trabajar remoto desde mi cafetería favorita, cierto?

Habitualmente, cuando voy a estos sitios, trato en lo posible de conectarme desde mis propios datos; pero hay escenarios que es necesario, ya sea por la ubicación o señal de internet.

Soy precavido en ese escenario, porque conectándome a una red pública o hasta la de mi hogar, un atacante puede conectar a la red y capturar el tráfico de los equipos que están conectado a la red, conocer el sitio que visito y hasta obtener los accesos a los servicios que uso.

En esto, la mejor protección es contar con una VPN que es una red virtual privada, que cifra el tráfico desde nuestro dispositivo hasta el sitio que visito, así un atacante que captura el tráfico no va a poder leer la información que capturó.

Trata en lo posible en navegar por VPN en estos sitios públicos, por tus datos, los de tu empresa o familia y por tu privacidad.
-->

---
layout: section
---

# Módulo 5

## Cultura de Ciberseguridad y Reporte de Incidentes

<!--
Huy equipo, llegamos al último módulo de este curso, Cultura de Ciberseguridad y Reporte de Incidentes.

La Cultura es la esencia de nuestro entorno y construirla no es un trabajo trivial, requiere de tiempo y procesos, ya que somos como humano el principal vector de ataque usado por los ciberdelincuentes.
-->

---
transition: fade-out
---

# Políticas de seguridad de la organización

<ph-building-bold text-4xl text-violet-500 mb-4 />

Cuando la compañía crece en clientes, colaboradores y proveedores, las políticas ayudan a resolver dudas y dinamizar la cultura de la organización.

- Política de Seguridad de la Información
- Política de Gestión de Accesos
- Política de Gestión de Concienciación
- Términos y Condiciones para Colaboradores
- Política de Gestión de Incidentes

<div mt-6 op70 text-sm>
Documentos del SGX (Sistema de Gestión) en <a href="https://kudo.divisioncero.com/sgx/politicas-y-procedimientos" target="_blank">Kudo</a>, nuestro framework de Ciberseguridad — consúltalos si tu compañía ya los tiene, o úsalos como punto de partida si no.
</div>

<!--
Equipo en algunos contextos este apartado de política suena a algo arcaico o innecesario, pero toman relevancia cuando la compañía crece en clientes, en colaboradores, proveedores; son tantas las interpretaciones y dudas que esto nos ayuda a dinamizar la cultura de la organización.

En una organización que busca procesos y la mejora continua, hemos desarrollado Kudo, es un framework de Ciberseguridad que permite disminuir la curva de aprendizaje de las compañías en materia de Ciberseguridad, este framework tiene varias verticales y una de ellas son los documentos del SGX, el Sistema de Gestión que integra distintos dominios, como Calidad, Seguridad de la Información, Riesgos, Continuidad, Inteligencia Artificial, entre otros...

https://kudo.divisioncero.com/
https://kudo.divisioncero.com/sgx
https://kudo.divisioncero.com/sgx/politicas-y-procedimientos

En políticas y procedimientos y con ocasión al curso que estamos realizando estos documentos pueden ser de gran ayuda:

- Política de Seguridad de la Información
- Política de Gestión de Accesos.
- Política de Gestión de Concienciación.
- Términos y Condiciones para Colaboradores.
- Política de Gestión de Incidentes,

Si llegas a una compañía estos son necesarios que los consultes si la compañía cuenta con alguno de ellos; sino, esta propuesta puede ser un gran comienzo.

Es necesario en otro escritorio tener listo kudo mostrar el framework, sgx y luego las políticas y procedimientos.
-->

---
transition: slide-up
---

# Cómo reportar un incidente o sospecha

<ph-siren-bold text-4xl text-red-500 mb-4 />

Toda organización debería tener un canal claro para reportar. **Ante la duda, reporta.**

<div grid grid-cols-4 gap-4 mt-8>
  <div border="~ main rounded" p-4 text-center>
    <ph-chat-centered-dots-bold text-2xl mx-auto />
    <div mt-2 text-sm>Chat interno</div>
  </div>
  <div border="~ main rounded" p-4 text-center>
    <ph-envelope-bold text-2xl mx-auto />
    <div mt-2 text-sm>Correo</div>
  </div>
  <div border="~ main rounded" p-4 text-center>
    <ph-headset-bold text-2xl mx-auto />
    <div mt-2 text-sm>Mesa de servicio</div>
  </div>
  <div border="~ main rounded" p-4 text-center>
    <ph-users-four-bold text-2xl mx-auto />
    <div mt-2 text-sm>Tu líder o equipo de seguridad</div>
  </div>
</div>

<!--
Conocer cómo reportar un incidente de seguridad es importante; en el contexto empresarial, hacerlo en el menor tiempo posible.

No importa el canal, lo importante es conocerlo y reportar cualquier generación de duda.

Puede ser un chat interno, correo, mesa de servicio o tu líder o equipo de seguridad.
-->

---
layout: statement
transition: slide-down
---

# Responsabilidad compartida en la Ciberseguridad

Entre todos nos protegemos.
<br>
Cada contribución construye un entorno más seguro.

<!--
No me cansaré de decirlo la Ciberseguridad es de todos, no solo del equipo de seguridad, todos hacemos parte de ella, ten presente esto.
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

<div mt-8 flex items-center justify-center gap-4>
  <div text-sm op70 max-w-xs text-left>Suscribiéndote y siguiéndonos en nuestras redes sociales nos apoyas a seguir creando contenido de Ciberseguridad.</div>
  <img src="/images/qr-code-suscribirse-canal-youtube.webp" class="w-24" />
</div>

<!--
Toda la academia de CyberAcademy el contenido es abierto y queremos que continúe así, estamos buscando que sea autosostenible, y en estos momentos no lo es, así que tu apoyo es esencial.

Suscribiendote en nuestro canal de Youtube nos ayudaría bastante.

También, en nuestra plataforma puedes comprar una suscripción para presentar exámenes y generar el certificado del curso.

Nuevamente muchas gracias por apoyar nuestro trabajo.
-->

---
transition: slide-down
---

# Lo que recorrimos

<div grid grid-cols-2 gap-x-8 gap-y-2 text-sm mt-6>

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

</div>

<!--
Este viaje aprendimos bastante. Cada check fue creado con amor y un propósito de realizar las cosas correctas, espero le hubiese gustado.
-->

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
