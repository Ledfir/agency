const IMG = {
  sistema: '/images/proyectos/sistema.png',
  sistema_login: '/images/proyectos/sistema-2.png',
  sistema_module: '/images/proyectos/sistema-3.png',
  entregax: '/images/proyectos/entregax.png',
  entregax_servicios: '/images/proyectos/entregax-2.png',
  entregax_nosotros: '/images/proyectos/entregax-3.png',
  jpmetalmecanica: '/images/proyectos/jpmetalmecanica.png',
  jpmetalmecanica_servicios: '/images/proyectos/jpmetalmecanica-2.png',
  jpmetalmecanica_contacto: '/images/proyectos/jpmetalmecanica-3.png',
  raiya: '/images/proyectos/raiya.png',
  raiya_catalogo: '/images/proyectos/raiya-2.png',
  raiya_multilenguaje: '/images/proyectos/raiya-3.png',
  minikin: '/images/proyectos/minikin.png',
  minikin_catalogo: '/images/proyectos/minikin-2.png',
  minikin_agregar: '/images/proyectos/minikin-3.png',
  rnr: '/images/proyectos/rnr.png',
  rnr_catalogo: '/images/proyectos/rnr-2.png',
  rnr_multidivisa: '/images/proyectos/rnr-3.png',
};

export const projects = [
  {
    slug: 'sistema-entregax',
    title: 'Sistema EntregaX',
    category: 'Logística · Full-stack',
    result: 'Sistema interno de gestión logística',
    year: '2023',
    client: 'Entregax Paqueteria',
    image: IMG.sistema,
    span: 'lg:col-span-7',
    intro:
      'Una empresa de logística que necesitaba un sistema interno eficiente para gestionar sus operaciones y mejorar la experiencia del cliente.',
    challenge:
      'El sistema interno de la empresa era fragmentado y poco intuitivo, lo que generaba errores en la gestión de envíos y retrasos en la atención al cliente.',
    solution:
      'Desarrollamos un sistema interno de gestión logística con una interfaz intuitiva, integración con el inventario y seguimiento en tiempo real de los envíos, optimizando la eficiencia operativa.',
    scope: [
      'Análisis de flujos operativos',
      'Diseño UX/UI del sistema interno',
      'Desarrollo backend con integración de datos',
      'Dashboard de seguimiento en tiempo real',
      'API y automatización de procesos'
    ],
    technologies: ['React', 'Tailwind CSS', 'Vite', 'Figma', 'DB diagram', 'Codeigniter 4'],
    metrics: [
      { value: '+85%', label: 'Eficiencia operativa' },
      { value: '-42%', label: 'Errores en envíos' },
      { value: '4.2s', label: 'Tiempo de procesamiento por paquete' }
    ],
    gallery: [
      { image: IMG.sistema, caption: 'Portada del sitio con la nueva identidad aplicada.' },
      { image: IMG.sistema_login, caption: 'Pantalla de login del sistema interno.' },
      { image: IMG.sistema_module, caption: 'Módulo de gestión de envíos dentro del sistema`.' }
    ]
  },
  {
    slug: 'entregax',
    title: 'Entregax Paqueteria',
    category: 'Logística · E-commerce',
    result: '+320% en cotizaciones',
    year: '2024',
    client: 'Entregax · Envíos internacionales',
    image: IMG.entregax,
    span: 'lg:col-span-5',
    intro:
      'Una empresa de envíos internacionales China-México que necesitaba un sitio moderno para captar clientes y permitir cotizaciones en línea de forma sencilla.',
    challenge:
      'Su antiguo sitio estaba desactualizado, era lento de navegar y los clientes no podían obtener cotizaciones en tiempo real. Perdían oportunidades de venta porque el proceso era tedioso.',
    solution:
      'Desarrollamos un sitio completo con formulario de cotización interactivo, cálculo automático de costos y seguimiento de envíos integrado. Mantuvimos simplicidad y velocidad para garantizar una experiencia fluida en dispositivos móviles.',
    scope: [
      'Diseño responsivo y UX para cotizaciones',
      'Sistema de cálculo automático de precios',
      'Integración de seguimiento de envíos',
      'Formularios dinámicos con validación',
      'Dashboard para la gestión de cotizaciones'
    ],
    technologies: ['CodeIgniter 4', 'Bootstrap', 'jQuery', 'MySQL', 'PHP', 'Google Maps API'],
    metrics: [
      { value: '+320%', label: 'Cotizaciones en línea' },
      { value: '2.3s', label: 'Tiempo de carga' },
      { value: '+87%', label: 'Tasa de conversión' }
    ],
    gallery: [
      { image: IMG.entregax, caption: 'Página principal del sitio.' },
      { image: IMG.entregax_servicios, caption: 'Sección de servicios ofrecidos por la empresa.' },
      { image: IMG.entregax_nosotros, caption: 'Sección "Sobre nosotros" de la empresa.' }
    ]
  },
  {
    slug: 'jp-metalmecanica',
    title: 'JP Metalmecánica',
    category: 'Industrial · Institucional',
    result: '+250% leads calificados',
    year: '2023',
    client: 'JP Metalmecánica · Manufactura',
    image: IMG.jpmetalmecanica,
    span: 'lg:col-span-5',
    intro:
      'Una empresa de precisión en piezas metalúrgicas que necesitaba un sitio moderno para captar clientes del sector privado y demostrar su experiencia técnica.',
    challenge:
      'Su antiguo sitio no reflejaba la calidad de su trabajo, no tenía catálogo de productos digital y los clientes potenciales no podían conocer sus capacidades técnicas fácilmente. Las cotizaciones se hacían por correo, generando demoras.',
    solution:
      'Desarrollamos un sitio institucional con catálogo interactivo de piezas, galería de proyectos ejecutados, especificaciones técnicas detalladas y un formulario de cotización integrado. Implementamos animaciones que demuestran el nivel de precisión de la empresa.',
    scope: [
      'Diseño institucional con enfoque técnico',
      'Catálogo de productos interactivo',
      'Galería de proyectos y especificaciones',
      'Descarga de catálogos técnicos en PDF',
      'Sistema de contacto con categorización'
    ],
    technologies: ['CodeIgniter 4', 'Bootstrap', 'jQuery', 'MySQL', 'CSS/JS Animations', 'Google Maps'],
    metrics: [
      { value: '+250%', label: 'Leads calificados por mes' },
      { value: '1.8s', label: 'Tiempo de carga' },
      { value: '+94%', label: 'Tasa de cotización completada' }
    ],
    gallery: [
      { image: IMG.jpmetalmecanica, caption: 'Página principal con portafolio de proyectos.' },
      { image: IMG.jpmetalmecanica_servicios, caption: 'Catálogo interactivo de servicios metalúrgicos.' },
      { image: IMG.jpmetalmecanica_contacto, caption: 'Formulario de contacto y especificaciones técnicas.' }
    ]
  },
  {
    slug: 'raiya',
    title: 'Raiya',
    category: 'Industrial · E-commerce',
    result: '+180% en consultas de renta',
    year: '2024',
    client: 'Raiya · Equipos industriales',
    image: IMG.raiya,
    span: 'lg:col-span-7',
    intro:
      'Una empresa especializada en renta y venta de montacargas que necesitaba un sitio moderno para captar clientes empresariales y facilitar cotizaciones en línea.',
    challenge:
      'Su presencia digital era obsoleta, no reflejaba el catálogo completo de equipos disponibles y los clientes potenciales no podían comparar opciones de renta vs compra. Los leads llegaban lentamente y sin información previa.',
    solution:
      'Desarrollamos un sitio de alto rendimiento con catálogo detallado de montacargas, comparador de equipos, calculadora de costos de renta, y un sistema de cotización integrado. Optimizamos para mobile ya que muchos clientes visitan desde obra.',
    scope: [
      'Diseño responsivo enfocado en B2B',
      'Catálogo de equipos con especificaciones',
      'Comparador de opciones renta/compra',
      'Calculadora de costos automática',
      'Sistema de cotización y seguimiento'
    ],
    technologies: ['CodeIgniter 4', 'Tailwind CSS', 'jQuery', 'MySQL', 'Google Maps API', 'SendGrid'],
    metrics: [
      { value: '+180%', label: 'Consultas de renta por mes' },
      { value: '+65%', label: 'Cotizaciones completadas' },
      { value: '1.4s', label: 'Tiempo de carga en mobile' }
    ],
    gallery: [
      { image: IMG.raiya, caption: 'Página principal con catálogo de montacargas.' },
      { image: IMG.raiya_catalogo, caption: 'Comparador de equipos y opciones de renta/compra.' },
      { image: IMG.raiya_multilenguaje, caption: 'Sistema multilenguaje para clientes internacionales.' }
    ]
  },
  {
    slug: 'minikin',
    title: 'Minikin',
    category: 'Retail · E-commerce',
    result: '+220% en ventas online',
    year: '2024',
    client: 'Minikin · Mobiliario infantil',
    image: IMG.minikin,
    span: 'lg:col-span-5',
    intro:
      'Una tienda de mobiliario infantil con presencia física que buscaba expandir sus ventas al canal digital con una experiencia de compra intuitiva.',
    challenge:
      'No tenían presencia e-commerce y perdían ventas en línea. Los clientes potenciales no podían ver el catálogo completo de productos ni hacer compras desde casa. Necesitaban captar ese mercado creciente.',
    solution:
      'Desarrollamos un e-commerce en WooCommerce con diseño moderno y amigable para padres e hijos. Incluimos galerías de productos 360°, recomendaciones personalizadas, programa de lealtad y múltiples opciones de pago.',
    scope: [
      'Diseño responsivo y accesible',
      'Tienda WooCommerce funcional',
      'Galerías de productos con zoom 360°',
      'Sistema de recomendaciones personalizadas',
      'Programa de lealtad y membresía'
    ],
    technologies: ['WordPress', 'WooCommerce', 'Elementor', 'PHP', 'MySQL', 'Stripe', 'PayPal'],
    metrics: [
      { value: '+220%', label: 'Ventas en línea' },
      { value: '3.8%', label: 'Tasa de conversión' },
      { value: '+85%', label: 'Retención de clientes' }
    ],
    gallery: [
      { image: IMG.minikin, caption: 'Página principal con destacados de temporada.' },
      { image: IMG.minikin_catalogo, caption: 'Catálogo de productos con diseño minimalista.' },
      { image: IMG.minikin_agregar, caption: 'Proceso de agregar productos al carrito.' }
    ]
  },
  {
    slug: 'rnr-refrigeracion',
    title: 'RNR Refrigeración',
    category: 'Retail · E-commerce',
    result: '+310% en consultas de servicio',
    year: '2024',
    client: 'RNR Refrigeración · HVAC',
    image: IMG.rnr,
    span: 'lg:col-span-7',
    intro:
      'Una empresa de venta y mantenimiento de equipos de refrigeración que necesitaba un e-commerce robusto para captar clientes B2B y simplificar su proceso de compra y cotización de servicios.',
    challenge:
      'El catálogo de equipos era complejo y los clientes no sabían cómo comparar opciones. Además, necesitaban integrar un módulo de solicitud de servicios de mantenimiento. Los procesos manuales generaban errores y demoras.',
    solution:
      'Desarrollamos un e-commerce en WooCommerce con plugins personalizados para manejar equipos con especificaciones técnicas complejas, un cotizador automático para servicios y un sistema de seguimiento de ordenes. Implementamos integraciones con proveedores y CRM.',
    scope: [
      'E-commerce WooCommerce avanzado',
      'Plugins personalizados para especificaciones técnicas',
      'Cotizador automático de servicios de mantenimiento',
      'Sistema de seguimiento de órdenes en tiempo real',
      'Integración con proveedores y CRM'
    ],
    technologies: ['WordPress', 'WooCommerce', 'PHP Custom Plugins', 'MySQL', 'REST API', 'Zapier'],
    metrics: [
      { value: '+310%', label: 'Consultas de servicio mensuales' },
      { value: '+156%', label: 'Órdenes en línea' },
      { value: '4.2%', label: 'Tasa de conversión B2B' }
    ],
    gallery: [
      { image: IMG.rnr, caption: 'Página principal con catálogo de equipos refrigeración.' },
      { image: IMG.rnr_catalogo, caption: 'Catálogo con especificaciones técnicas avanzadas.' },
      { image: IMG.rnr_multidivisa, caption: 'Catálogo con opción de precios en múltiples divisas.' }
    ]
  }
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);