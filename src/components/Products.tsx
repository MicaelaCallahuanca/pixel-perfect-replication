const Products = () => {
  const products = [
    { badge: "Playbook", title: "Cómo estructurar una landing que convierta", desc: "Guía paso a paso para armar una landing con jerarquía, copy y CTA que funcionen. Sin diseñador ni técnico.", price: "$15", unit: "USD", sub: "Acceso inmediato · PDF + templates", cta: "Conseguirlo", highlight: false },
    { badge: "Playbook", title: "Cómo medir tu web sin ser técnico", desc: "GA4, GTM y Search Console explicados en lenguaje humano. Sabés qué mirar y qué hacer con lo que ves.", price: "$20", unit: "USD", sub: "Acceso inmediato · PDF + video", cta: "Conseguirlo", highlight: false },
    { badge: "Membership", title: "Scale Cube Club", desc: "Templates nuevos cada mes, dashboards listos para usar, casos reales y workshops en vivo. Para quien confía en el sistema.", price: "$20", unit: "USD/mes", sub: "Comunidad · Templates · Workshops", cta: "Unirme", highlight: true },
  ];

  return (
    <section id="recursos" className="px-7 md:px-20 py-24">
      <div className="font-mono-brand text-[10px] tracking-[2.5px] uppercase text-primary mb-4 font-medium">Recursos digitales</div>
      <h2 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-1.5px] leading-none">
        Aprendé a hacerlo<br /><em className="font-serif-brand italic font-normal">vos mismo.</em>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
        {products.map((p, i) => (
          <div key={i} className={`border p-9 rounded-md relative hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(36,50,236,0.1)] transition-all ${p.highlight ? "border-primary bg-accent" : "border-foreground/10"}`}>
            <span className={`inline-block text-[9px] font-bold tracking-[2px] uppercase px-2.5 py-1 rounded-sm mb-5 ${p.highlight ? "bg-foreground text-background" : "bg-primary text-primary-foreground"}`}>
              {p.badge}
            </span>
            <h3 className="text-lg font-extrabold tracking-tight mb-3">{p.title}</h3>
            <p className="text-[13px] leading-relaxed text-secondary-foreground font-normal mb-6">{p.desc}</p>
            <div className={`text-[28px] font-extrabold tracking-[-1px] mb-1 ${p.highlight ? "text-foreground" : "text-primary"}`}>
              {p.price} <span className="text-sm font-normal text-muted-foreground">{p.unit}</span>
            </div>
            <div className="font-mono-brand text-[11px] text-muted-foreground font-medium">{p.sub}</div>
            <a href="#" className="flex items-center gap-1.5 mt-6 text-xs font-bold text-foreground tracking-wide hover:gap-2.5 transition-all">
              {p.cta}<span>→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
