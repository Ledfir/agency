import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Image } from '@/components/ui/image';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects as cases } from '@/data/projects';

export default function Portfolio() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.case-card').forEach((card) => {
        const img = card.querySelector('.case-img');
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 85%', once: true }
        });
        if (img) {
          gsap.to(img, {
            yPercent: -12,
            ease: 'none',
            scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: true }
          });
        }
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="trabajo" ref={ref} className="relative py-28 sm:py-36 bg-card/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-[0.25em] text-accent font-medium">The Arboretum</div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl leading-tight font-medium text-balance">
              Casos que ya <span className="italic">florecieron</span>
            </h2>
          </div>
          <p className="text-foreground/60 max-w-sm">
            Resultados reales para marcas reales. Cada proyecto, un cultivo con métricas medibles.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {cases.map((c) => (
            <Link
              key={c.slug}
              to={`/proyecto/${c.slug}`}
              className={`case-card group relative block ${c.span}`}
            >
              <div className="relative aspect-[16/11] rounded-3xl overflow-hidden bg-muted">
                <div className="case-img absolute inset-0 scale-110">
                  <Image src={c.image} alt={c.title} fittingType="fill" className="h-full w-full" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
                <div className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-background/90 text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 text-background">
                  <div className="text-xs uppercase tracking-widest opacity-80">{c.category}</div>
                  <div className="mt-1 flex items-end justify-between gap-4">
                    <h3 className="font-display text-2xl sm:text-3xl font-medium">{c.title}</h3>
                    <span className="text-sm font-medium text-accent-foreground bg-accent/90 rounded-full px-3 py-1 whitespace-nowrap">
                      {c.result}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}