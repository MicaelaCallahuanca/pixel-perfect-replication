//Eliminar o agregar otra sección, se puso como comentario en index

const Architecture = () => {
  const pages = [
    { num: "01", title: "Home / Landing principal", desc: "Propuesta de valor, servicios, CTA principal", status: "launch" },
    { num: "02", title: "Página de servicios", desc: "Detalle de cada servicio, proceso y pricing", status: "launch" },
    { num: "03", title: "Recursos / Playbooks", desc: "Catálogo de productos digitales (Hotmart)", status: "launch" },
    { num: "04", title: "Sobre mí", desc: "Quién sos, tu approach, por qué confiar", status: "launch" },
    { num: "05", title: "Blog / Contenido SEO", desc: "Artículos que posicionan y generan autoridad", status: "soon" },
    { num: "06", title: "Membership (Scale Cube Club)", desc: "Área de miembros, templates, workshops", status: "soon" },
    { num: "07", title: "Contacto / Consulta inicial", desc: "Formulario + Calendly para agendar", status: "launch" },
  ];

  const techStack = [
    { icon: "▲", name: "Vercel", desc: "Hosting · Deploy automático · Dominio propio después" },
    { icon: "W", name: "WordPress / Next.js", desc: "Base del sitio · Templates de landing validados" },
    { icon: "📊", name: "GA4 + GTM + Search Console", desc: "Medición completa desde el día 1" },
    { icon: "📈", name: "Looker Studio", desc: "Dashboard de conversión y visibilidad" },
    { icon: "🎓", name: "Hotmart / Teachable", desc: "Venta de playbooks, cursos y membership" },
    { icon: "📱", name: "Instagram + TikTok", desc: "Canal orgánico · Captación y comunidad" },
  ];

  return (
    <section id="plataforma" className="px-7 md:px-20 py-24">
      <div className="font-mono-brand text-[10px] tracking-[2.5px] uppercase text-primary mb-4 font-medium">Plataforma</div>
      <h2 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-1.5px] leading-none">
        Arquitectura del<br /><em className="font-serif-brand italic font-normal">sitio.</em>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
        <div>
          <p className="text-sm text-secondary-foreground mb-7 leading-relaxed font-normal">
            Páginas que necesitás para el lanzamiento. Las marcadas como "Lanzamiento" son prioritarias para arrancar a vender.
          </p>
          <div className="flex flex-col gap-3">
            {pages.map((p, i) => (
              <div key={i} className="flex items-center gap-5 px-6 py-5 border border-foreground/5 rounded hover:border-primary transition-colors">
                <span className="font-mono-brand text-[11px] text-primary font-medium w-6 shrink-0">{p.num}</span>
                <div className="flex-1">
                  <h4 className="text-sm font-bold mb-1">{p.title}</h4>
                  <p className="text-xs text-muted-foreground font-normal">{p.desc}</p>
                </div>
                <span className={`text-[10px] font-bold tracking-[1px] uppercase px-2.5 py-1 rounded-sm shrink-0 ${
                  p.status === "launch" ? "bg-accent text-accent-foreground" : "bg-secondary text-muted-foreground"
                }`}>
                  {p.status === "launch" ? "Lanzamiento" : "Fase 2"}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-[22px] font-extrabold tracking-tight mb-7">Stack técnico recomendado</h3>
          <div className="flex flex-col gap-4">
            {techStack.map((t, i) => (
              <div key={i} className="flex items-center gap-4 px-5 py-4 bg-secondary rounded">
                <div className="w-9 h-9 bg-background rounded flex items-center justify-center text-base shrink-0">
                  {t.icon}
                </div>
                <div>
                  <h5 className="text-[13px] font-bold mb-0.5">{t.name}</h5>
                  <p className="text-xs text-muted-foreground font-normal">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
