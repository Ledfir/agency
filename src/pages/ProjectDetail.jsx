import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';
import WhatsAppButton from '@/components/site/WhatsAppButton';
import Reveal from '@/components/site/Reveal';
import { getProject, projects } from '@/data/projects';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);

  if (!project) return <Navigate to="/" replace />;

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <div className="relative bg-background">
      <Navbar />
      <main className="pt-36 pb-24">
        <section className="mx-auto max-w-7xl px-6">
          <Link
            to="/#trabajo"
            className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-accent transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al portafolio
          </Link>

          <div className="mt-8 grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <div className="text-xs uppercase tracking-[0.25em] text-accent font-medium">
                {project.category}
              </div>
              <h1 className="mt-4 font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] font-medium text-balance">
                {project.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-foreground/70 leading-relaxed">
                {project.intro}
              </p>
            </div>
            <div className="lg:col-span-4">
              <div className="rounded-3xl border border-border bg-card p-6">
                <div className="text-xs uppercase tracking-widest text-foreground/40">
                  Resultado destacado
                </div>
                <div className="mt-2 font-display text-3xl font-medium text-accent">
                  {project.result}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid sm:grid-cols-3 gap-8 border-t border-border pt-8">
            <Meta label="Cliente" value={project.client} />
            <Meta label="Año" value={project.year} />
            <Meta label="Servicios" value={project.scope.join(' · ')} />
          </div>
        </section>

        <section className="mt-16 mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden bg-muted shadow-2xl">
              <Image
                src={project.image}
                alt={project.title}
                fittingType="fill"
                className="h-full w-full"
              />
            </div>
          </Reveal>
        </section>

        <section className="mt-24 mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
          <Reveal>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-accent font-medium">
                El reto
              </div>
              <p className="mt-4 text-lg text-foreground/70 leading-relaxed">{project.challenge}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-accent font-medium">
                La solución
              </div>
              <p className="mt-4 text-lg text-foreground/70 leading-relaxed">{project.solution}</p>
            </div>
          </Reveal>
        </section>

        <section className="mt-24 mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl font-medium">
              Galería del proyecto
            </h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {project.gallery.map((g, i) => (
              <Reveal key={i} delay={i * 0.08} className={i === 0 ? 'md:col-span-2' : ''}>
                <figure className="group">
                  <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-muted">
                    <Image
                      src={g.image}
                      alt={g.caption}
                      fittingType="fill"
                      className="h-full w-full transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="mt-4 text-sm text-foreground/60">{g.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mt-24 mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
          <Reveal>
            <div className="h-full rounded-3xl border border-border bg-card p-8 sm:p-10">
              <div className="text-xs uppercase tracking-[0.25em] text-accent font-medium">
                Qué realizamos
              </div>
              <ul className="mt-6 space-y-4">
                {project.scope.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-foreground/80">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-border bg-card p-8 sm:p-10">
              <div className="text-xs uppercase tracking-[0.25em] text-accent font-medium">
                Tecnologías usadas
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground/70"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
                {project.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="font-display text-2xl font-medium text-foreground">
                      {m.value}
                    </div>
                    <div className="mt-1 text-xs text-foreground/50 leading-snug">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section className="mt-24 mx-auto max-w-7xl px-6">
          <div className="rounded-[2rem] bg-foreground text-background p-10 sm:p-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div>
              <h3 className="font-display text-3xl sm:text-4xl font-medium">
                ¿Quieres resultados así?
              </h3>
              <p className="mt-3 max-w-md text-background/70">
                Cuéntanos tu proyecto y te mostramos cómo lo haríamos florecer.
              </p>
            </div>
            <Link
              to="/#contacto"
              className="group inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-3.5 text-sm font-medium hover:bg-background hover:text-foreground transition-colors"
            >
              Iniciar proyecto
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

        <section className="mt-24 mx-auto max-w-7xl px-6">
          <h2 className="font-display text-3xl sm:text-4xl font-medium">Otros proyectos</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {others.map((o) => (
              <Link key={o.slug} to={`/proyecto/${o.slug}`} className="group block">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-muted">
                  <Image
                    src={o.image}
                    alt={o.title}
                    fittingType="fill"
                    className="h-full w-full transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-5 text-background">
                    <div className="text-[11px] uppercase tracking-widest opacity-80">
                      {o.category}
                    </div>
                    <h3 className="mt-1 font-display text-xl font-medium">{o.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function Meta({ label, value }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-widest text-foreground/40">{label}</div>
      <div className="mt-2 text-sm text-foreground/80 leading-relaxed">{value}</div>
    </div>
  );
}