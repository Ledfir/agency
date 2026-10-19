# 🌸 Flores Marketing - Agencia Digital

Sitio web profesional de Flores Marketing, una agencia especializada en **marketing digital, desarrollo web, hosting, redes sociales y branding** para marcas que quieren florecer en lo digital.

> **Hacemos que tu marca florezca en lo digital** 🌿

---

## 📋 Descripción del Proyecto

Flores Marketing es una agencia digital que ofrece soluciones integrales para empresas que buscan crecer en internet. Este repositorio contiene el código fuente de su sitio web corporativo, desarrollado con tecnologías modernas y enfocado en rendimiento, diseño y experiencia de usuario.

### ¿Qué ofrecemos?

- **Diseño Web** - Sitios y plataformas que cargan rápido, se ven impecables y convierten visitantes en clientes
- **Hosting** - Infraestructura segura y monitoreada con 99.9% de uptime
- **Redes Sociales** - Estrategia de contenido y community management con resultados medibles
- **Branding** - Identidad de marca con raíces profundas: logo, paleta, tipografía y voz
- **Invitaciones Digitales** - Invitaciones interactivas y personalizadas para eventos corporativos

---

## 🚀 Características Técnicas

### Stack Tecnológico

- **React 18** - Interfaz dinámica y eficiente
- **Vite** - Build ultrarrápido y dev server optimizado
- **Tailwind CSS** - Diseño responsivo y moderno
- **Framer Motion** - Animaciones fluidas y atractivas
- **GSAP** - Animaciones avanzadas y timeline
- **EmailJS** - Sistema de formularios de contacto automatizado
- **Lucide React** - Iconografía consistente
- **JavaScript moderno** - ES6+ con soporte total

### Características del Sitio

✨ **Experiencia Visual Premium**
- Animaciones suaves y elegantes
- Parallax scrolling
- Transiciones fluidas
- Diseño responsivo (mobile, tablet, desktop)

⚡ **Rendimiento**
- Optimización de imágenes
- Code splitting automático
- Lazy loading
- Caché eficiente

📱 **Funcionalidades**
- Formulario de contacto con EmailJS
- Carrusel de proyectos
- Timeline interactivo del proceso
- Portafolio de casos de éxito
- Información de servicios

---

## 📁 Estructura del Proyecto

```
agency/
├── src/
│   ├── components/
│   │   ├── site/
│   │   │   ├── Hero.jsx              # Sección hero con carrusel
│   │   │   ├── Services.jsx          # Servicios ofrecidos (5 servicios)
│   │   │   ├── Process.jsx           # Timeline del proceso
│   │   │   ├── Projects.jsx          # Portafolio (6 proyectos)
│   │   │   ├── Contact.jsx           # Formulario de contacto con EmailJS
│   │   │   └── Reveal.jsx            # Componente de animación
│   │   ├── ui/
│   │   │   ├── image.jsx             # Componente de imagen optimizado
│   │   │   └── particles.jsx         # Fondo de partículas animadas
│   │   └── ...
│   ├── data/
│   │   ├── services.js               # Datos de los 5 servicios
│   │   └── projects.js               # Datos de los 6 proyectos
│   ├── styles/
│   │   └── globals.css               # Estilos globales
│   ├── App.jsx                       # Componente raíz
│   └── main.jsx                      # Punto de entrada
├── public/
│   ├── images/
│   │   ├── hero-*.png                # Imágenes del carrusel hero
│   │   ├── proyectos/                # Imágenes de proyectos
│   │   └── fondo-time-line.png       # Fondo del timeline
│   └── ...
├── index.html                        # HTML principal
├── vite.config.js                    # Configuración de Vite
├── tailwind.config.js                # Configuración de Tailwind
├── postcss.config.js                 # Configuración de PostCSS
├── jsconfig.json                     # Path aliases
├── package.json                      # Dependencias
└── .env.example                      # Variables de entorno ejemplo
```

---

## 🔧 Instalación y Configuración

### Requisitos previos

- Node.js 16.x o superior
- npm 8.x o superior

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone <URL_DEL_REPOSITORIO>
cd agency
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
```bash
cp .env.example .env.local
```

Edita `.env.local` con tus credenciales:
```env
VITE_EMAILJS_SERVICE_ID=service_xxx
VITE_EMAILJS_TEMPLATE_ID=template_xxx
VITE_EMAILJS_PUBLIC_KEY=public_key_xxx
```

4. **Iniciar servidor de desarrollo**
```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

---

## 💻 Scripts Disponibles

```bash
# Desarrollo
npm run dev              # Inicia servidor de desarrollo

# Build
npm run build            # Genera build para producción
npm run preview          # Previsualiza build localmente

# Análisis
npm run lint             # Ejecuta ESLint
npm run type-check       # Verifica tipos (si aplica)
```

---

## 📦 Dependencias Principales

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "vite": "^5.4.1",
  "tailwindcss": "^3.4.1",
  "framer-motion": "^10.16.4",
  "gsap": "^3.12.2",
  "@emailjs/browser": "^4.4.1",
  "lucide-react": "^0.263.1"
}
```

Ver `package.json` para la lista completa.

---

## 🎯 Proyectos Destacados

El sitio muestra 6 casos de éxito:

1. **Sistema EntregaX** - Sistema interno de gestión logística
2. **Entregax Paqueteria** - E-commerce de envíos internacionales (CodeIgniter 4)
3. **JP Metalmecánica** - Sitio institucional con catálogo técnico
4. **Raiya** - E-commerce B2B de renta de montacargas
5. **Minikin** - E-commerce de mobiliario infantil (WooCommerce)
6. **RNR Refrigeración** - E-commerce de equipos de refrigeración

---

## 📧 Sistema de Contacto

El formulario de contacto utiliza **EmailJS** para enviar mensajes directamente sin servidor backend:

- **Validación en cliente** con campos requeridos
- **Feedback visual** - Estados: cargando, éxito, error
- **Template personalizado** con datos del cliente
- **Integración automática** sin necesidad de backend

---

## 🚀 Deployment

### Neubox (Hosting Actual)

1. **Generar build**
```bash
npm run build
```

2. **Subir contenido de `dist/` a `public_html/` en Neubox**
   - Usar FTP/SFTP o cPanel File Manager
   - Copiar archivos directamente a `public_html/` (no en subcarpeta)

3. **Purgar caché** (si aplica Cloudflare)

### Alternativas

**Vercel** (recomendado para React/Vite)
```bash
npm install -g vercel
vercel
```

**Netlify**
- Conectar repositorio
- Build command: `npm run build`
- Publish directory: `dist`

---

## 🔐 Seguridad

- ⚠️ **Nunca commits secretos o API keys en el repositorio**
- Use `.env.local` para variables sensibles (ignorado por git)
- Revise dependencias regularmente: `npm audit`
- Las credenciales de EmailJS están protegidas en variables de entorno

---

## 📝 Convenciones de Código

- **Nomenclatura de componentes**: PascalCase (`Hero.jsx`)
- **Nombres de variables**: camelCase (`heroText`)
- **Archivos de datos**: snake_case (`services.js`)
- **Clases de Tailwind**: Utilizar utility-first
- **Comentarios**: Sólo cuando sea necesario aclarar lógica compleja

---

## 👨‍💻 Cómo Contribuir

1. Crear una rama para tu feature: `git checkout -b feature/nueva-seccion`
2. Hacer cambios y commit: `git commit -m "Agregar nueva sección"`
3. Push a la rama: `git push origin feature/nueva-seccion`
4. Abrir un Pull Request

---

## 📞 Contacto

**Flores Marketing**
- 📧 hola@floresmarketing.com.mx
- 📱 +52 81 2368 7903
- 🌐 www.aflores.com.mx
- 📍 CDMX, México

---

## 📄 Licencia

Proyecto privado © 2024 Flores Marketing. Todos los derechos reservados.

---

## 🙌 Créditos

Desarrollado con ❤️ para marcas que quieren florecer en lo digital.

*"Hacemos que tu marca florezca en lo digital"* 🌸
