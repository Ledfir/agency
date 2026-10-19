import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, ArrowUp } from 'lucide-react';

const LOGO = 'https://media.base44.com/images/public/6ac3e6e12aec4ab16e688f59/1a0b9a9bb_floresmarketing.png';

const cols = [
  {
    title: 'Servicios',
    links: [
      { label: 'Diseño Web', href: '/#servicios' },
      { label: 'Hosting', href: '/#servicios' },
      { label: 'Redes Sociales', href: '/#servicios' },
      { label: 'Branding', href: '/#servicios' }
    ]
  },
  {
    title: 'Agencia',
    links: [
      { label: 'Trabajo', href: '/#trabajo' },
      { label: 'Proceso', href: '/#proceso' },
      { label: 'Contacto', href: '/#contacto' }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-6">
            <Link to="/" className="inline-flex items-center">
              <img src={LOGO} alt="Flores Marketing" className="h-20 w-auto" />
            </Link>
            <p className="mt-5 max-w-sm text-foreground/60 leading-relaxed">
              Agencia de marketing digital en México. Cultivamos marcas que florecen en internet.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-foreground hover:text-background transition-colors"
                  aria-label="Red social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="md:col-span-3">
              <div className="text-xs uppercase tracking-widest text-foreground/40">{c.title}</div>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.href} className="text-foreground/70 hover:text-accent transition-colors text-sm">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/50">
            © {new Date().getFullYear()} Flores Marketing · floresmarketing.com.mx
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors"
          >
            Volver arriba
            <ArrowUp className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}