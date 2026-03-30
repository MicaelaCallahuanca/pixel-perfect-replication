const ProblemBand = () => {
  const problems = [
    { title: "Tráfico sin conversión", desc: "Recibís visitas pero no se transforman en clientes. No sabés por qué ni en qué parte del funnel se van." },
    { title: "Datos que no entendés", desc: "Tenés Google Analytics pero no lo mirás. O lo mirás y no sabés qué hacer con lo que ves." },
    { title: "Landing sin estructura", desc: "Tu página existe pero no está pensada para convertir. Le falta jerarquía, copy y un CTA claro." },
    { title: "SEO invisible", desc: "Aparecés en búsquedas pero no capitalizás ese tráfico. Las páginas posicionan y no convierten." },
  ];

  return (
    <div className="bg-secondary px-7 md:px-20 py-16 flex flex-col md:flex-row gap-8 md:gap-16 items-start">
      <div className="md:w-[300px] shrink-0">
        <div className="font-mono-brand text-[10px] tracking-[2.5px] uppercase text-primary mb-4 font-medium">El problema</div>
        <h2 className="text-[28px] font-extrabold tracking-[-1px] leading-tight">
          La mayoría tiene web. Pocos saben qué pasa en ella.
        </h2>
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
        {problems.map((p, i) => (
          <div key={i} className="bg-background p-7 rounded-md border-l-[3px] border-l-primary">
            <h4 className="text-sm font-bold mb-2">{p.title}</h4>
            <p className="text-[13px] text-secondary-foreground leading-relaxed font-normal">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProblemBand;
