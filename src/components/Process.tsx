const Process = () => {
  const steps = [
    { num: "01", title: "Diagnóstico", desc: "Revisamos tu situación actual: web, tráfico, datos disponibles y objetivos concretos. Sin asumir nada." },
    { num: "02", title: "Estructura", desc: "Wireframe y copy de tu landing con fórmulas validadas. Cada sección tiene una intención clara." },
    { num: "03", title: "Medición", desc: "Setup de GA4, GTM y eventos clave. Dashboard en Looker Studio para que veas lo que importa." },
    { num: "04", title: "Optimización", desc: "Con datos reales, sabemos qué ajustar. El sistema trabaja para vos de ahí en adelante." },
  ];

  return (
    <section id="proceso" className="bg-secondary px-7 md:px-20 py-24">
      <div className="font-mono-brand text-[10px] tracking-[2.5px] uppercase text-primary mb-4 font-medium">Proceso</div>
      <h2 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-1.5px] leading-none">
        Cómo trabajamos<br /><em className="font-serif-brand italic font-normal">juntos.</em>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 relative">
        <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-px bg-primary/30" />
        {steps.map((s, i) => (
          <div key={i} className="px-0 md:px-6">
            <div className="w-14 h-14 rounded-full bg-background border-2 border-primary flex items-center justify-center font-mono-brand text-sm font-medium text-primary mb-6 relative z-10">
              {s.num}
            </div>
            <h4 className="text-base font-extrabold mb-2.5">{s.title}</h4>
            <p className="text-[13px] leading-relaxed text-secondary-foreground font-normal">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
