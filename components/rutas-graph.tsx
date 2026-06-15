'use client';
import { GraphView, type Graph } from '@/components/graph-view';

const graph: Graph = {
  nodes: [
    // Rutas centrales
    { id: 'rutas', url: '/overview/rutas', text: 'CyberAcademy', description: 'Dos rutas de aprendizaje en ciberseguridad' },
    { id: 'cyberusuario', url: '/overview/cyberusuario', text: 'CyberUsuario', description: 'Cursos para colaboradores y usuarios finales' },
    { id: 'cyberguardianes', url: '/overview/cyberguardianes', text: 'CyberGuardián', description: 'Cursos para responsables de ciberseguridad' },

    // CyberUsuario — Fundamentos
    { id: 'cu-intro', url: '/overview/cyberusuario', text: 'Introducción a la Ciberseguridad', description: 'Qué es, por qué importa y cómo protegerte en el trabajo' },
    { id: 'cu-passwords', url: '/overview/cyberusuario', text: 'Gestión de Contraseñas', description: 'Contraseñas seguras, gestores y autenticación en dos pasos' },
    { id: 'cu-phishing', url: '/overview/cyberusuario', text: 'Reconociendo el Phishing', description: 'Cómo identificar correos, mensajes y sitios fraudulentos' },

    // CyberUsuario — Dispositivos
    { id: 'cu-devices', url: '/overview/cyberusuario', text: 'Uso Seguro de Dispositivos', description: 'Actualizaciones, bloqueo de pantalla y antivirus' },
    { id: 'cu-remote', url: '/overview/cyberusuario', text: 'Trabajo Remoto Seguro', description: 'VPN, redes WiFi públicas y buenas prácticas desde casa' },
    { id: 'cu-mobile', url: '/overview/cyberusuario', text: 'Seguridad en Móviles', description: 'Apps, permisos y protección de tu teléfono corporativo' },

    // CyberUsuario — Datos y Respuesta
    { id: 'cu-data', url: '/overview/cyberusuario', text: 'Manejo de Información', description: 'Clasificación de datos y cómo compartirlos de forma segura' },
    { id: 'cu-privacy', url: '/overview/cyberusuario', text: 'Privacidad Digital', description: 'Huella digital, redes sociales y protección de datos personales' },
    { id: 'cu-social', url: '/overview/cyberusuario', text: 'Ingeniería Social', description: 'Manipulación psicológica: cómo detectarla y rechazarla' },
    { id: 'cu-incident', url: '/overview/cyberusuario', text: 'Qué Hacer ante un Incidente', description: 'Pasos a seguir si sospechas que fuiste víctima de un ataque' },
    { id: 'cu-report', url: '/overview/cyberusuario', text: 'Reporte de Eventos', description: 'Cómo y a quién reportar incidentes en tu organización' },

    // CyberGuardián — Gobierno
    { id: 'cg-gov', url: '/overview/cyberguardianes', text: 'Gobierno de Ciberseguridad', description: 'Marcos de referencia, roles y responsabilidades del CISO' },
    { id: 'cg-risk', url: '/overview/cyberguardianes', text: 'Gestión de Riesgos', description: 'Metodologías de análisis, evaluación y tratamiento del riesgo' },
    { id: 'cg-compliance', url: '/overview/cyberguardianes', text: 'Cumplimiento Normativo', description: 'ISO 27001, NIST CSF, GDPR y regulaciones locales de LatAm' },

    // CyberGuardián — Dominios técnicos
    { id: 'cg-cor', url: '/overview/cyberguardianes', text: 'COR — Coherencia Org.', description: 'Gobernanza, estructura y cultura de seguridad' },
    { id: 'cg-cip', url: '/overview/cyberguardianes', text: 'CIP — Identidad', description: 'IAM, PAM, EDR y gestión de dispositivos' },
    { id: 'cg-cif', url: '/overview/cyberguardianes', text: 'CIF — Infraestructura', description: 'Segmentación de red, firewall, cloud security y hardening' },
    { id: 'cg-cap', url: '/overview/cyberguardianes', text: 'CAP — Aplicaciones', description: 'SSDLC, OWASP, pruebas de seguridad y DevSecOps' },

    // CyberGuardián — Operaciones
    { id: 'cg-soc', url: '/overview/cyberguardianes', text: 'SOC y Detección (ADR)', description: 'SIEM, alertas, triaje y gestión de incidentes' },
    { id: 'cg-ir', url: '/overview/cyberguardianes', text: 'Respuesta a Incidentes', description: 'Playbooks, contención, erradicación y lecciones aprendidas' },
    { id: 'cg-ti', url: '/overview/cyberguardianes', text: 'Threat Intelligence', description: 'Fuentes de inteligencia, IoC e integración operativa' },

    // CyberGuardián — Continuidad y Avanzado
    { id: 'cg-ccn', url: '/overview/cyberguardianes', text: 'CCN — Continuidad', description: 'BCP, DRP y gestión de crisis cibernéticas' },
    { id: 'cg-dia', url: '/overview/cyberguardianes', text: 'DIA — Datos e IA', description: 'Clasificación, DLP, privacidad y riesgos de IA' },
    { id: 'cg-thp', url: '/overview/cyberguardianes', text: 'THP — Talento', description: 'Capacitación, onboarding seguro y gestión de terceros' },
    { id: 'cg-redteam', url: '/overview/cyberguardianes', text: 'Red Team & Pentesting', description: 'Metodologías de ataque ético y evaluación de controles' },
    { id: 'cg-zt', url: '/overview/cyberguardianes', text: 'Zero Trust', description: 'Principios, diseño e implementación de Zero Trust' },
    { id: 'cg-cloud', url: '/overview/cyberguardianes', text: 'Seguridad en la Nube', description: 'AWS, Azure, GCP: controles, postura y monitoreo' },
  ],
  links: [
    // Centro → ramas principales
    { source: 'rutas', target: 'cyberusuario' },
    { source: 'rutas', target: 'cyberguardianes' },

    // CyberUsuario → cursos
    { source: 'cyberusuario', target: 'cu-intro' },
    { source: 'cyberusuario', target: 'cu-passwords' },
    { source: 'cyberusuario', target: 'cu-phishing' },
    { source: 'cyberusuario', target: 'cu-devices' },
    { source: 'cyberusuario', target: 'cu-remote' },
    { source: 'cyberusuario', target: 'cu-mobile' },
    { source: 'cyberusuario', target: 'cu-data' },
    { source: 'cyberusuario', target: 'cu-privacy' },
    { source: 'cyberusuario', target: 'cu-social' },
    { source: 'cyberusuario', target: 'cu-incident' },
    { source: 'cyberusuario', target: 'cu-report' },

    // CyberGuardián → cursos
    { source: 'cyberguardianes', target: 'cg-gov' },
    { source: 'cyberguardianes', target: 'cg-risk' },
    { source: 'cyberguardianes', target: 'cg-compliance' },
    { source: 'cyberguardianes', target: 'cg-cor' },
    { source: 'cyberguardianes', target: 'cg-cip' },
    { source: 'cyberguardianes', target: 'cg-cif' },
    { source: 'cyberguardianes', target: 'cg-cap' },
    { source: 'cyberguardianes', target: 'cg-soc' },
    { source: 'cyberguardianes', target: 'cg-ir' },
    { source: 'cyberguardianes', target: 'cg-ti' },
    { source: 'cyberguardianes', target: 'cg-ccn' },
    { source: 'cyberguardianes', target: 'cg-dia' },
    { source: 'cyberguardianes', target: 'cg-thp' },
    { source: 'cyberguardianes', target: 'cg-redteam' },
    { source: 'cyberguardianes', target: 'cg-zt' },
    { source: 'cyberguardianes', target: 'cg-cloud' },

    // Vínculos cruzados entre cursos relacionados
    { source: 'cu-phishing', target: 'cu-social' },
    { source: 'cu-incident', target: 'cu-report' },
    { source: 'cu-devices', target: 'cu-remote' },
    { source: 'cg-gov', target: 'cg-risk' },
    { source: 'cg-risk', target: 'cg-compliance' },
    { source: 'cg-soc', target: 'cg-ir' },
    { source: 'cg-ir', target: 'cg-ti' },
    { source: 'cg-cor', target: 'cg-cip' },
    { source: 'cg-cif', target: 'cg-cloud' },
    { source: 'cg-cap', target: 'cg-redteam' },
    { source: 'cg-zt', target: 'cg-cif' },
    { source: 'cu-incident', target: 'cg-ir' },
    { source: 'cu-phishing', target: 'cg-soc' },
  ],
};

export function RutasGraph() {
  return <GraphView graph={graph} />;
}
