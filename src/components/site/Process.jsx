import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const steps = [
  {
    name: 'Descubrir',
    text: 'Entendemos tu negocio, tu audiencia y tu competencia. La semilla de toda estrategia.'
  },
  {
    name: 'Diseñar',
    text: 'Damos forma a la identidad, el sitio y el contenido. Arquitectura visual con intención.'
  },
  {
    name: 'Cultivar',
    text: 'Lanzamos, optimizamos y alimentamos con datos. El crecimiento no es azar, es método.'
  },
  {
    name: 'Florecer',
    text: 'Medimos resultados, escalamos lo que funciona y podamos lo que no. Tu marca perdura.'
  }
];

function Sprout({ magenta }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="h-6 w-6 overflow-visible">
      <path
        d="M10 16V8m0 4C6 12 4 9 4 6c3 0 6 1 6 5m0-1c0-3 2-5 6-5 0 3-2 6-6 6"
        fill="none"
        stroke={magenta ? '#E6007E' : '#1F6F5C'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Process() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="proceso"
      className="relative border-y border-[#e5dfd9] bg-[#F7F5F2] py-24 text-[#3B2A3E] sm:py-32"
      style={{
        backgroundImage: "url('/images/fondo-time-line.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <style>{`@keyframes process-draw{from{transform:scaleY(0)}to{transform:scaleY(1)}}@keyframes process-bloom{from{opacity:.45;transform:scale(.65)}to{opacity:1;transform:scale(1)}}`}</style>

      <div className="mx-auto max-w-3xl px-6">
        <header className="flex items-center justify-between gap-6 border-b border-[#e6e0db] pb-6">
          <div className="text-[11px] uppercase tracking-[0.22em] text-[#1F6F5C]">Seed to Bloom</div>
          <h2 className="text-right font-display text-2xl font-medium leading-[1.05] tracking-[-0.045em] sm:text-3xl">
            Un proceso que <em className="font-normal italic">crece contigo</em>
          </h2>
        </header>

        <div ref={ref} className="relative mt-10 sm:mt-14">
          <div
            className={cn(
              'absolute inset-y-0 left-5 w-[2px] -translate-x-1/2 origin-top bg-[#cbd8ce] lg:left-1/2',
              inView ? 'animate-[process-draw_1.2s_cubic-bezier(.2,.8,.2,1)_both]' : 'scale-y-0'
            )}
          />

          <ol>
            {steps.map((s, i) => {
              const magenta = i === 1;
              const left = i % 2 === 0;
              return (
                <li
                  key={s.name}
                  className="relative grid grid-cols-[40px_1fr] items-center gap-4 lg:min-h-[132px] lg:grid-cols-[1fr_40px_1fr] lg:gap-0"
                >
                  <div
                    className={cn(
                      'relative z-[1] col-start-1 row-start-1 flex h-10 w-10 items-center justify-center rounded-full border bg-[#F7F5F2] lg:col-start-2',
                      magenta ? 'border-[#E6007E]' : 'border-[#9bb6a8]',
                      inView
                        ? 'animate-[process-bloom_.55s_cubic-bezier(.2,.8,.2,1)_both]'
                        : 'scale-[.65] opacity-0'
                    )}
                    style={{ animationDelay: `${i * 0.16}s` }}
                  >
                    <Sprout magenta={magenta} />
                  </div>

                  <div
                    className={cn(
                      'row-start-1 max-w-[318px]',
                      left
                        ? 'col-start-2 lg:col-start-1 lg:justify-self-end lg:pr-3 lg:text-right'
                        : 'col-start-2 lg:col-start-3 lg:justify-self-start lg:pl-3 lg:text-left'
                    )}
                  >
                    <span
                      className={cn(
                        'mb-1 block text-[10px] leading-[1.15] tracking-[0.19em]',
                        magenta ? 'text-[#E6007E]' : 'text-[#1F6F5C]'
                      )}
                    >
                      0{i + 1}
                    </span>
                    <h3 className="mb-1.5 font-display text-xl font-semibold leading-[1.05] tracking-[-0.025em]">
                      {s.name}
                    </h3>
                    <p className="text-sm leading-[1.35] text-[#665c66]">{s.text}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}