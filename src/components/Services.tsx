const Services = () => {
  const services = [
    {
      num: "01 — SERVICIO PRINCIPAL",
      title: "Sistema de medición + mejora de conversión",
      desc: "Te muestro dónde estás perdiendo ventas y cómo corregirlo. Auditoría, reestructuración de landing, setup completo de tracking y dashboard en Looker Studio.",
      items: ["Auditoría rápida de tu situación actual", "Reestructuración de landing (con template si hace falta)", "Setup completo: GA4 + GTM + eventos clave", "Dashboard en Looker Studio", "Diagnóstico SEO: indexación, queries, CTR por página"],
      price: "A consultar",
      cta: "Quiero este servicio",
      featured: true,
    },
    {
      num: "02",
      title: "Landing lista para usar + medición básica",
      desc: "Todo listo para que sepas qué pasa en tu web desde el día 1. Para quien arranca sin nada o con algo muy básico.",
      items: ["Template WordPress con estructura validada", "Setup básico de Analytics y eventos clave", "Dashboard simple para entender el tráfico"],
      price: "A consultar",
      cta: "Me interesa",
      featured: false,
    },
    {
      num: "03",
      title: "Sistema de copy + estructura para landing",
      desc: "Wireframe, fórmulas de copy, límites de caracteres, intención y keyword. Hero, CTA, FAQs y secciones clave. Con SEO integrado.",
      items: ["Wireframe con secciones claras", "Fórmulas de copy por sección", "Guías: caracteres, intención, keyword principal"],
      cta: "Ver más",
      featured: false,
    },
  ];

  return (
    <section className="bg-foreground text-primary-foreground px-7 md:px-20 py-24">
      <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-4">
        <div>
          <div className="font-mono-brand text-[10px] tracking-[2.5px] uppercase text-primary-foreground/40 mb-4 font-medium">Servicios</div>
          <h2 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-1.5px] leading-none text-primary-foreground">
            Lo que hago<br /><em className="font-serif-brand italic font-normal">por vos.</em>
          </h2>
        </div>
        <p className="text-[17px] leading-relaxed text-primary-foreground/55 max-w-[520px] font-normal">
          Dos servicios principales. Uno para arrancar, uno para optimizar.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5">
        {services.map((s, i) => (
          <div
            key={i}
            className={`p-11 border relative overflow-hidden transition-all ${
              s.featured
                ? "md:col-span-2 bg-primary border-primary hover:bg-primary-dim"
                : "border-primary-foreground/10 hover:border-primary hover:bg-primary/5"
            }`}
          >
            <div className="font-mono-brand text-[11px] text-primary-foreground/35 tracking-[2px] mb-5">
              {s.num}
            </div>
            {s.price && (
              <div className="absolute top-11 right-11 font-mono-brand text-[11px] tracking-[1px] text-primary-foreground/30 font-medium">
                {s.price}
              </div>
            )}
            <h3 className="text-2xl font-extrabold tracking-tight text-primary-foreground mb-4">{s.title}</h3>
            <p className={`text-sm leading-relaxed mb-7 font-normal ${s.featured ? "text-primary-foreground/80" : "text-primary-foreground/55"}`}>
              {s.desc}
            </p>
            <div className="flex flex-col gap-2">
              {s.items.map((item, j) => (
                <div key={j} className={`text-xs font-medium flex items-center gap-2 ${s.featured ? "text-primary-foreground/70" : "text-primary-foreground/50"}`}>
                  <span className={`w-1 h-1 rounded-full shrink-0 ${s.featured ? "bg-primary-foreground" : "bg-primary"}`} />
                  {item}
                </div>
              ))}
            </div>
            <a href="#contacto" className="inline-flex items-center gap-2 mt-8 text-[13px] font-bold text-primary-foreground hover:gap-3.5 transition-all">
              {s.cta}<span>→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
