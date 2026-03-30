const Segments = () => {
  const segments = [
    { icon: "🚀", title: "Emprendedor que arranca", problem: "Problema: no sé por dónde empezar", desc: "No tiene web o tiene algo básico. No entiende métricas. Quiere \"tener presencia\" sin saber exactamente qué significa eso en términos de resultados.", tag: "Landing + setup desde cero" },
    { icon: "📈", title: "Negocio en crecimiento", problem: "Problema: tengo datos pero no los entiendo", desc: "Ya tiene web y tráfico. No sabe por qué no convierte. Quiere mejorar resultados pero no sabe dónde mirar ni qué cambiar primero.", tag: "Auditoría + medición + mejora" },
    { icon: "🧠", title: "Persona que quiere aprender", problem: "Problema: necesito claridad y estructura", desc: "Freelancer, marketer o dueño curioso. Quiere entender y aplicar sin depender de un técnico para cada cosa.", tag: "Playbooks + membership" },
  ];

  return (
    <section id="servicios" className="px-7 md:px-20 py-24">
      <div className="flex flex-col md:flex-row justify-between md:items-end mb-14 gap-4">
        <div>
          <div className="font-mono-brand text-[10px] tracking-[2.5px] uppercase text-primary mb-4 font-medium">¿Para quién?</div>
          <h2 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-1.5px] leading-none">
            Tres perfiles.<br /><em className="font-serif-brand italic font-normal">Un sistema.</em>
          </h2>
        </div>
        <p className="text-[17px] leading-relaxed text-secondary-foreground max-w-[520px] font-normal">
          Cada perfil tiene un problema específico. Tengo un producto pensado exactamente para ese momento.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
        {segments.map((s, i) => (
          <div key={i} className="p-10 border border-foreground/5 hover:border-primary hover:-translate-y-1 transition-all">
            <div className="w-11 h-11 bg-accent rounded-md mb-6 flex items-center justify-center text-xl">{s.icon}</div>
            <h3 className="text-xl font-extrabold tracking-tight mb-3">{s.title}</h3>
            <div className="font-mono-brand text-[11px] text-primary tracking-wide mb-4 font-medium">{s.problem}</div>
            <p className="text-sm leading-relaxed text-secondary-foreground font-normal">{s.desc}</p>
            <span className="inline-block mt-6 text-[11px] font-bold tracking-[1px] uppercase border border-foreground px-3 py-1.5 rounded-sm">
              {s.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Segments;
