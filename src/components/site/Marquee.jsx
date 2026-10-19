const items = [
  'Diseño Web', 'Hosting', 'Redes Sociales', 'Branding',
  'SEO', 'E-commerce', 'Paid Media', 'Contenido',
  'Identidad de Marca', 'Community', 'Analytics', 'Email Marketing'
];

export default function Marquee() {
  return (
    <div className="relative border-y border-border bg-foreground text-background py-6 overflow-hidden">
      <div className="flex w-max animate-marquee">
        {[...items, ...items].map((it, i) => (
          <span key={i} className="flex items-center gap-6 px-6 font-display text-2xl sm:text-3xl font-medium whitespace-nowrap">
            {it}
            <span className="text-accent">✿</span>
          </span>
        ))}
      </div>
    </div>
  );
}