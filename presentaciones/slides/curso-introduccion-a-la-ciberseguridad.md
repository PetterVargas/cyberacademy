---
# shared components/snippets/pages live at the presentaciones/ root
addons:
  - .
theme: seriph
background: https://cover.sli.dev
title: Curso de Introducción a la Ciberseguridad
titleTemplate: "%s · CyberAcademy DivisionCero"
info: |
  ## Curso de Introducción a la Ciberseguridad
  Fundamentos, amenazas, identidad digital, navegación segura y cultura de ciberseguridad.

  Basado en el curso de **CyberAcademy / DivisionCero**.
author: Peter Vargas
keywords: ciberseguridad, seguridad informática
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
fonts:
  sans: "Inter"
  weights: "400,500,600,800"
htmlAttrs:
  lang: es
  dir: ltr
seoMeta:
  ogTitle: Curso de Introducción a la Ciberseguridad
  ogDescription: Fundamentos, amenazas, identidad digital, navegación segura y cultura de ciberseguridad.
  ogImage: https://cover.sli.dev
  twitterCard: summary_large_image
  twitterTitle: Curso de Introducción a la Ciberseguridad
  twitterDescription: Fundamentos, amenazas, identidad digital, navegación segura y cultura de ciberseguridad.
  twitterImage: https://cover.sli.dev
download: true
exportFilename: curso-introduccion-a-la-ciberseguridad
browserExporter: true
pwa: true
monaco: false
twoslash: false
---

# Curso de Introducción a la Ciberseguridad

Primeros pasos en el maravilloso mundo de la Ciberseguridad

<div mt-4 op70>
#GanasDeAprender
</div>

<div class="abs-br m-6 text-sm op50">
CyberAcademy · DivisionCero
</div>

---
layout: intro
---

# Bienvenido/a

<v-clicks>

- No necesitas **ningún conocimiento previo**, solo #GanasDeAprender
- La ciberseguridad es un **trabajo de todos**
- Por trivial que parezca una acción, **puede proteger a muchas personas**

</v-clicks>

---
layout: center
class: text-center
---

# `coherencia + confianza = ciberseguridad`

<div mt-8 text-lg op80 max-w-180 mx-auto>
Coherencia entre lo que establecemos y la realidad — personal, profesional o corporativa.
Confianza: el resultado esencial que le debemos a quienes dependen de nosotros.
</div>

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

---
layout: section
---

# Módulo 1

## Fundamentos de Ciberseguridad

---

# ¿Qué es la Ciberseguridad?

<ph-shield-check-bold text-4xl text-emerald-500 mb-4 />

El conjunto de **prácticas, tecnologías y procesos** diseñados para proteger sistemas informáticos, redes, dispositivos y datos frente a ataques, accesos no autorizados, daños o robos de información.

<v-click>

## ¿Por qué importa?

Cuando falla, podemos perder **empresas, empleos y hasta afectar a las personas** que dependen de esos sistemas — el riesgo no siempre se puede cuantificar en dinero.

</v-click>

---

# Panorama actual de amenazas digitales

Con la adopción acelerada de IA, el número de vulnerabilidades encontradas a nivel de industria **sigue en aumento**. La capacidad de remediación debe crecer al mismo ritmo que el apetito de riesgo se reduce.

<div flex items-end gap-6 h-50 mt-10 mx-auto w-fit>
  <div v-click flex flex-col items-center gap-2>
    <div bg-sky-500 rounded-t w-14 h-20 />
    <div text-sm op70>2021</div>
  </div>
  <div v-click flex flex-col items-center gap-2>
    <div bg-sky-500 rounded-t w-14 h-28 />
    <div text-sm op70>2022</div>
  </div>
  <div v-click flex flex-col items-center gap-2>
    <div bg-sky-500 rounded-t w-14 h-36 />
    <div text-sm op70>2023</div>
  </div>
  <div v-click flex flex-col items-center gap-2>
    <div bg-amber-500 rounded-t w-14 h-44 />
    <div text-sm op70>2024</div>
  </div>
  <div v-click flex flex-col items-center gap-2>
    <div bg-red-500 rounded-t w-14 h-50 />
    <div text-sm op70>2025</div>
  </div>
</div>

<div text-center text-xs op50 mt-4>Tendencia ilustrativa de vulnerabilidades reportadas por año</div>

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

---
layout: center
---

# Ejercicio rápido

¿Qué componente de la CIA se ve afectado?

<div text-left max-w-160 mx-auto mt-6>

<v-clicks>

- Un ataque de **ransomware** cifra tus archivos y no puedes trabajar → <span text-violet-500 font-semibold>Disponibilidad</span>
- Alguien **filtra** la base de datos de clientes en un foro → <span text-sky-500 font-semibold>Confidencialidad</span>
- Un atacante **modifica** el monto de una transferencia bancaria → <span text-emerald-500 font-semibold>Integridad</span>

</v-clicks>

</div>

---
layout: section
---

# Módulo 2

## Amenazas y Actores Maliciosos

---

# Tipos de Malware

<div grid grid-cols-2 gap-4 mt-6>
  <div v-click border="~ main rounded" p-4>
    <ph-virus-bold text-2xl text-red-500 />
    <div mt-2 font-semibold>Virus</div>
    <div text-sm op70 mt-1>Se adjunta a archivos legítimos y se propaga cuando se ejecutan.</div>
  </div>
  <div v-click border="~ main rounded" p-4>
    <ph-lock-key-bold text-2xl text-amber-500 />
    <div mt-2 font-semibold>Ransomware</div>
    <div text-sm op70 mt-1>Cifra tus archivos y exige un pago para "liberarlos".</div>
  </div>
  <div v-click border="~ main rounded" p-4>
    <ph-eye-bold text-2xl text-sky-500 />
    <div mt-2 font-semibold>Spyware</div>
    <div text-sm op70 mt-1>Se instala en silencio para espiar tu actividad y robar datos.</div>
  </div>
  <div v-click border="~ main rounded" p-4>
    <ph-mask-happy-bold text-2xl text-violet-500 />
    <div mt-2 font-semibold>Troyano</div>
    <div text-sm op70 mt-1>Se disfraza de software legítimo para abrir una puerta trasera.</div>
  </div>
</div>

---

# Phishing y otras técnicas de engaño

<ph-fish-bold text-4xl text-sky-500 mb-4 />

La ingeniería social explota la **confianza y la urgencia**, no las vulnerabilidades técnicas.

## Señales de alerta

<v-clicks>

- Remitente o dominio que **casi** coincide con el real
- Sentido de **urgencia** ("tu cuenta será bloqueada en 24h")
- Enlaces o adjuntos **inesperados**
- Solicitud de **credenciales o datos financieros**
- Errores de ortografía o diseño poco cuidado

</v-clicks>

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

---
layout: section
---

# Módulo 3

## Contraseñas e Identidad Digital

---

# Buenas prácticas para contraseñas seguras

<ph-password-bold text-4xl text-amber-500 mb-4 />

<v-clicks>

- **Longitud** sobre complejidad: usa frases largas y fáciles de recordar
- **Única por servicio** — nunca reutilices la misma contraseña
- **Rotación** solo cuando hay sospecha de compromiso, no por calendario
- Combínala siempre con **autenticación multifactor**

</v-clicks>

---
layout: two-cols
---

# Gestores de contraseñas

<ph-database-bold text-4xl text-sky-500 mb-4 />

Guardan y generan contraseñas únicas y robustas por ti, para que solo tengas que recordar **una maestra**.

<v-click>

Opciones habituales que verás en el curso:

</v-click>

::right::

<div mt-12 v-click>

- **KeePass** — local y de código abierto
- **LastPass** — en la nube
- **1Password** — gestión de identidades

</div>

---

# Autenticación Multifactor (MFA)

<ph-fingerprint-bold text-4xl text-violet-500 mb-4 />

Agrega una **segunda capa de verificación** además de la contraseña: un código temporal, una notificación push o una llave física.

<v-click>

<div mt-6 border="~ main rounded" p-4 max-w-160>
<ph-device-mobile-bold inline-block mr-2 />
Aunque un atacante robe tu contraseña, <b>no podrá entrar sin el segundo factor</b> — que normalmente solo tú posees.
</div>

</v-click>

<v-click>

<div mt-4 text-sm op70>Prefiere una app de autenticación (TOTP) sobre SMS cuando sea posible.</div>

</v-click>

---
layout: section
---

# Módulo 4

## Navegación y Comunicación Segura

---

# Identificar sitios web y enlaces seguros

<ph-browser-bold text-4xl text-sky-500 mb-4 />

<v-clicks>

- Verifica el **candado y el protocolo HTTPS**
- Pasa el cursor sobre el enlace antes de hacer clic — ¿el dominio coincide con lo esperado?
- Desconfía de **acortadores de URL** en mensajes no solicitados
- Escribe la dirección directamente si tienes dudas, en vez de seguir el enlace

</v-clicks>

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

---

# Uso seguro del correo electrónico

<ph-envelope-bold text-4xl text-sky-500 mb-4 />

<v-clicks>

- Verifica el **remitente real**, no solo el nombre mostrado
- Desconfía de adjuntos y enlaces que no esperabas
- No compartas credenciales ni datos sensibles por correo
- Activa MFA en tu cuenta de correo — es la puerta a todas las demás

</v-clicks>

---
layout: section
---

# Módulo 5

## Cultura de Ciberseguridad y Reporte de Incidentes

---

# Políticas de seguridad de la organización

<ph-building-bold text-4xl text-violet-500 mb-4 />

<v-clicks>

- **Política de concientización** — mantiene a todo el equipo alerta y capacitado
- **Política de gestión de accesos** — criterios de contraseñas, rotación y MFA

</v-clicks>

<div v-click mt-6 op70 text-sm>
Cada política existe para sostener, en la práctica, todo lo visto en este curso.
</div>

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
---

# Responsabilidad compartida en la seguridad

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

# Lo que recorrimos

<div grid grid-cols-2 gap-x-8 gap-y-2 text-sm mt-6>

<v-clicks>

- ✅ Panorama actual de amenazas digitales
- ✅ Qué es la Ciberseguridad y por qué importa
- ✅ Tríada CIA
- ✅ Perfiles de atacantes
- ✅ Phishing y técnicas de engaño
- ✅ Tipos de malware
- ✅ Buenas prácticas de contraseñas
- ✅ Autenticación Multifactor (MFA)
- ✅ Gestores de contraseñas
- ✅ Sitios web y enlaces seguros
- ✅ Wi-Fi público y VPN
- ✅ Correo electrónico seguro
- ✅ Cómo reportar un incidente
- ✅ Políticas de seguridad
- ✅ Responsabilidad compartida

</v-clicks>

</div>

---
layout: end
class: text-center
---

# ¡Mil gracias por acompañarnos! 🤘🏽

<div mt-4 op70>
Conoce cómo apoyar los proyectos sin costo — <b>Juntos somos más</b>
</div>

<div mt-10 text-sm op50>
CyberAcademy · DivisionCero
</div>
