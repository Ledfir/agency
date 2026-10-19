import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Send, Loader2, Check, Mail, Phone, MapPin } from 'lucide-react';
import Reveal from './Reveal';
import ParticlesBackground from '@/components/ui/particles';

const services = [
  { value: 'diseno_web', label: 'Diseño Web' },
  { value: 'hosting', label: 'Hosting' },
  { value: 'redes_sociales', label: 'Redes Sociales' },
  { value: 'branding', label: 'Branding' },
  { value: 'invitaciones_digitales', label: 'Invitaciones Digitales' },
  { value: 'otro', label: 'Otro / No estoy seguro' }
];

const initial = { name: '', email: '', phone: '', service: 'diseno_web', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const templateParams = {
      nombre: form.name,
      correo: form.email,
      telefono: form.phone || 'No proporcionado',
      servicio: form.service,
      mensaje: form.message
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams
      );
      setStatus('success');
      setForm(initial);
      setTimeout(() => setStatus('idle'), 6000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="relative py-28 sm:py-36 bg-foreground text-background overflow-hidden">
      <ParticlesBackground id="contact-particles" className="pointer-events-none" />
      <div className="absolute inset-0 -z-0 opacity-[0.04] grain" />
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 relative">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.25em] text-accent font-medium">Seed to Bloom</div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl leading-tight font-medium text-balance">
              Cuéntanos tu proyecto. <span className="italic text-accent">Lo hacemos florecer.</span>
            </h2>
            <p className="mt-5 text-background/70 leading-relaxed">
              Respondemos en menos de 24 horas. La primera consulta es siempre sin costo.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 space-y-4">
            <a href="mailto:hola@floresmarketing.com.mx" className="flex items-center gap-3 text-background/80 hover:text-accent transition-colors">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-background/20">
                <Mail className="h-4 w-4" />
              </span>
              hola@floresmarketing.com.mx
            </a>
            <a href="tel:+528123687903" className="flex items-center gap-3 text-background/80 hover:text-accent transition-colors">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-background/20">
                <Phone className="h-4 w-4" />
              </span>
              +52 81 2368 7903
            </a>
            <div className="flex items-center gap-3 text-background/80">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-background/20">
                <MapPin className="h-4 w-4" />
              </span>
              CDMX, México · Atendemos a todo el país
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.15}>
            {status === 'success' ? (
              <div className="rounded-3xl border border-background/15 p-10 sm:p-14 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="mt-6 font-display text-3xl font-medium">¡Mensaje enviado!</h3>
                <p className="mt-3 text-background/70 max-w-md mx-auto">
                  Gracias por escribirnos. Un especialista de Flores Marketing te contactará muy pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="rounded-3xl border border-background/15 p-8 sm:p-10 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="Nombre *">
                    <input
                      required
                      value={form.name}
                      onChange={update('name')}
                      placeholder="Tu nombre"
                      className="w-full bg-transparent border-0 border-b border-background/20 focus:border-accent px-0 py-3 text-background placeholder:text-background/40 focus:outline-none transition-colors"
                    />
                  </Field>
                  <Field label="Email *">
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      placeholder="tucorreo@ejemplo.com"
                      className="w-full bg-transparent border-0 border-b border-background/20 focus:border-accent px-0 py-3 text-background placeholder:text-background/40 focus:outline-none transition-colors"
                    />
                  </Field>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="Teléfono">
                    <input
                      value={form.phone}
                      onChange={update('phone')}
                      placeholder="Opcional"
                      className="w-full bg-transparent border-0 border-b border-background/20 focus:border-accent px-0 py-3 text-background placeholder:text-background/40 focus:outline-none transition-colors"
                    />
                  </Field>
                  <Field label="Servicio de interés">
                    <select
                      value={form.service}
                      onChange={update('service')}
                      className="w-full bg-transparent border-0 border-b border-background/20 focus:border-accent px-0 py-3 text-background focus:outline-none transition-colors"
                    >
                      {services.map((s) => (
                        <option key={s.value} value={s.value} className="bg-foreground text-background">
                          {s.label}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field label="Cuéntanos sobre tu proyecto *">
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={update('message')}
                    placeholder="¿Qué necesitas? ¿Para cuándo?"
                    className="w-full bg-transparent border-0 border-b border-background/20 focus:border-accent px-0 py-3 text-background placeholder:text-background/40 focus:outline-none transition-colors resize-none"
                  />
                </Field>

                {status === 'error' && (
                  <p className="text-sm text-accent">
                    Ocurrió un error. Escríbenos a hola@floresmarketing.com.mx
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="group inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-3.5 text-sm font-medium hover:bg-background hover:text-foreground transition-colors disabled:opacity-60"
                >
                  {status === 'loading' ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  )}
                  Enviar mensaje
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-white">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}