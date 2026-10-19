import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const LOGO = 'https://media.base44.com/images/public/6ac3e6e12aec4ab16e688f59/1a0b9a9bb_floresmarketing.png';

const links = [
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Trabajo', href: '/#trabajo' },
  { label: 'Proceso', href: '/#proceso' },
  { label: 'Contacto', href: '/#contacto' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border/60 py-4' : 'py-6 bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={LOGO} alt="Flores Marketing" className="h-14 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="text-sm text-foreground/70 hover:text-foreground transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-accent hover:after:w-full after:transition-all after:duration-300"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <Link
          to="/#contacto"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          Cotizar proyecto
        </Link>

        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menú"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden mx-6 mt-4 rounded-2xl border border-border bg-card p-6 shadow-xl">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-foreground/80 hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium"
            >
              Cotizar proyecto
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}