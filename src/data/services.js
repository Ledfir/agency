import { Monitor, Server, Share2, Palette, Mail } from 'lucide-react';

const IMAGES = {
  diseno_web:
    '/images/services/service-1.png',
  hosting:
    '/images/services/service-2.png',
  redes_sociales:
    '/images/services/service-3.png',
  branding:
    '/images/services/service-4.png',
  invitaciones_digitales:
    '/images/services/service-5.png'
};

export const services = [
  {
    icon: Monitor,
    name: 'Diseño Web',
    tag: '01',
    image: IMAGES.diseno_web,
    description:
      'Sitios y plataformas que cargan rápido, se ven impecables y convierten visitantes en clientes. Diseñados a medida, no con plantillas.',
    points: ['Diseño UX/UI a medida', 'Desarrollo responsivo', 'Optimización de velocidad', 'E-commerce']
  },
  {
    icon: Server,
    name: 'Hosting',
    tag: '02',
    image: IMAGES.hosting,
    description:
      'Infraestructura segura y monitoreada para que tu sitio nunca se caiga. SSL, copias de seguridad y soporte humano cuando lo necesitas.',
    points: ['Servidores SSD NVMe', 'SSL y backups diarios', '99.9% de uptime', 'Soporte en español']
  },
  {
    icon: Share2,
    name: 'Redes Sociales',
    tag: '03',
    image: IMAGES.redes_sociales,
    description:
      'Estrategia de contenido y comunidad que hace crecer tu audiencia con propósito. Cada publicación trabaja por tu marca.',
    points: ['Estrategia de contenido', 'Community management', 'Paid social (Meta, TikTok)', 'Reportes mensuales']
  },
  {
    icon: Palette,
    name: 'Branding',
    tag: '04',
    image: IMAGES.branding,
    description:
      'Identidad de marca con raíces profundas: logo, paleta, tipografía y voz. Una marca que se reconoce en cualquier canal.',
    points: ['Identidad visual', 'Manual de marca', 'Sistemas de diseño', 'Naming y storytelling']
  },
  {
    icon: Mail,
    name: 'Invitaciones Digitales',
    tag: '05',
    image: IMAGES.invitaciones_digitales,
    description:
      'Invitaciones interactivas y personalizadas que dejan impresión. Desde eventos corporativos hasta celebraciones especiales, diseñadas para sorprender.',
    points: ['Diseño personalizado', 'Invitaciones interactivas', 'Respuestas automatizadas', 'Seguimiento de asistentes']
  }
];