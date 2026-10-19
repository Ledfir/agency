import { useState } from 'react';
import { Image } from '@/components/ui/image';
import { ArrowUpRight, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { services } from '@/data/services';

export default function Services() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section id="servicios" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-14">
          <div className="text-xs uppercase tracking-[0.25em] text-accent font-medium">Pollination Points</div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl leading-tight font-medium text-balance">
            Cinco servicios, <span className="italic">un solo ecosistema</span> de marca
          </h2>
          <p className="mt-5 text-foreground/65 text-lg">
            Cada servicio se alimenta de los demás. Así tu marca crece en conjunto, no a pedazos.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 flex flex-col gap-3">
            {services.map((s, i) => {
              const Icon = s.icon;
              const isActive = i === active;
              return (
                <button
                  key={s.tag}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  style={{ animationDelay: `${i * 80}ms` }}
                  className={cn(
                    'group relative w-full overflow-hidden rounded-2xl border p-5 sm:p-6 text-left transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards duration-700',
                    isActive
                      ? 'border-accent/50 bg-card shadow-lg shadow-accent/10'
                      : 'border-border bg-background hover:border-accent/30 hover:bg-card'
                  )}
                >
                  <span
                    className={cn(
                      'absolute inset-y-0 left-0 w-1 bg-accent transition-transform duration-500 origin-top',
                      isActive ? 'scale-y-100' : 'scale-y-0'
                    )}
                  />

                  <div className="flex items-center gap-4">
                    <div
                      className={cn(
                        'flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors duration-300',
                        isActive
                          ? 'bg-accent text-accent-foreground'
                          : 'bg-foreground text-background'
                      )}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="text-[11px] uppercase tracking-widest text-foreground/40">
                        {s.tag}
                      </div>
                      <h3 className="font-display text-xl sm:text-2xl font-medium leading-tight">
                        {s.name}
                      </h3>
                    </div>

                    <ArrowUpRight
                      className={cn(
                        'h-5 w-5 shrink-0 transition-all duration-300',
                        isActive
                          ? 'text-accent opacity-100'
                          : 'text-foreground/30 opacity-0 group-hover:opacity-100'
                      )}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-7 lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-[2rem] border border-border bg-card">
              <div key={current.tag} className="animate-in fade-in duration-500">
                <div className="relative aspect-[16/10] bg-muted">
                  <Image
                    src={current.image}
                    alt={current.name}
                    fittingType="fill"
                    className="h-full w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 text-background">
                    <div className="text-xs uppercase tracking-[0.25em] opacity-75">
                      Servicio {current.tag}
                    </div>
                    <h3 className="mt-2 font-display text-3xl sm:text-4xl font-medium">
                      {current.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <p className="text-foreground/70 leading-relaxed text-lg">{current.description}</p>

                  <ul className="mt-7 grid sm:grid-cols-2 gap-3">
                    {current.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-center gap-3 rounded-xl bg-muted/60 px-4 py-3 text-sm text-foreground/75"
                      >
                        <Check className="h-4 w-4 shrink-0 text-accent" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contacto"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Quiero este servicio
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}