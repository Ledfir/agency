import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Image } from '@/components/ui/image';
import { ArrowRight, Star } from 'lucide-react';

const HEADLINE = ['Hacemos', 'que', 'tu', 'marca', 'florezca', 'en', 'lo', 'digital'];

const slides = [
  {
    image: '/images/hero-1.png',
    alt: 'Flor metálica translúcida sobre fondo oscuro',
    label: 'Disponibilidad',
    status: 'Aceptando proyectos 2026',
    dot: 'bg-accent'
  },
  {
    image: '/images/hero-2.png',
    alt: 'Hoja con interfaz holográfica proyectada',
    label: 'Calidad sobre cantidad',
    status: '✓ Máximo 3 proyectos por mes',
    dot: 'bg-secondary'
  },
  {
    image: '/images/hero-3.png',
    alt: 'Red de nodos luminosos entrelazados',
    label: 'Respuesta',
    status: 'En menos de 24 horas',
    dot: 'bg-primary'
  }
];

export default function Hero() {
  const root = useRef(null);
  const cardRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!cardRef.current) return;
    const anim = gsap.fromTo(
      cardRef.current,
      { y: 14, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
    );
    return () => anim.kill();
  }, [index]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.hero-eyebrow', { y: 20, opacity: 0, duration: 0.7 })
        .from('.hero-word', { yPercent: 120, opacity: 0, duration: 1, stagger: 0.08 }, '-=0.3')
        .from('.hero-sub', { y: 24, opacity: 0, duration: 0.9 }, '-=0.5')
        .from('.hero-cta', { y: 20, opacity: 0, duration: 0.7, stagger: 0.1 }, '-=0.5')
        .from('.hero-image', { scale: 1.12, opacity: 0, duration: 1.6, ease: 'power2.out' }, 0.2)
        .from('.hero-stat', { y: 16, opacity: 0, duration: 0.6, stagger: 0.12 }, '-=0.6');

      gsap.to('.hero-image', {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true }
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="inicio" ref={root} className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 grain opacity-60" />
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 relative z-10">
          <div className="hero-eyebrow inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-foreground/60">
            <Star className="h-3 w-3 fill-accent text-accent" />
            Marketing digital y desarrollo web
          </div>

          <h1 className="mt-8 font-display text-[2.75rem] sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight font-medium text-balance">
            {HEADLINE.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.25em]">
                <span className="hero-word inline-block">
                  {w === 'florezca' ? (
                    <span className="italic text-accent">{w}</span>
                  ) : (
                    w
                  )}
                </span>
              </span>
            ))}
          </h1>

          <p className="hero-sub mt-8 max-w-xl text-lg text-foreground/70 leading-relaxed">
            Diseño web, hosting, redes sociales y branding cultivados con precisión botánica.
            No lanzamos campañas: hacemos crecer marcas que perduran.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contacto"
              className="hero-cta group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Iniciar proyecto
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#servicios"
              className="hero-cta inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium hover:border-foreground/40 transition-colors"
            >
              Ver servicios
            </a>
          </div>

          <div className="mt-14 flex flex-wrap gap-10">
            <div className="hero-stat">
              <div className="font-display text-3xl font-medium">+120</div>
              <div className="text-sm text-foreground/60 mt-1">Marcas cultivadas</div>
            </div>
            <div className="hero-stat">
              <div className="font-display text-3xl font-medium">8 años</div>
              <div className="text-sm text-foreground/60 mt-1">Floreciendo en digital</div>
            </div>
            <div className="hero-stat">
              <div className="font-display text-3xl font-medium">98%</div>
              <div className="text-sm text-foreground/60 mt-1">Retención de clientes</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="hero-image relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
            <div
              className="absolute inset-0 transition-transform [transition-duration:1100ms] [transition-timing-function:cubic-bezier(0.77,0,0.175,1)]"
              style={{ transform: `translateY(-${index * 100}%)` }}
            >
              {slides.map((s, i) => (
                <div key={i} className="relative h-full w-full">
                  <Image src={s.image} alt={s.alt} fittingType="fill" className="h-full w-full" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden sm:block rounded-2xl bg-card border border-border px-5 py-4 shadow-xl animate-float">
            <div ref={cardRef}>
              <div className="text-xs uppercase tracking-widest text-foreground/50">
                {slides[index].label}
              </div>
              <div className="mt-1 flex items-center gap-2 text-sm font-medium">
                <span className={`h-2 w-2 rounded-full ${slides[index].dot} animate-pulse`} />
                {slides[index].status}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}