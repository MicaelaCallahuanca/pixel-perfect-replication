const RecursosSection = () => {
  const recursos = [
    { title: "Checklist de lanzamiento", type: "PDF", status: "Disponible" },
    { title: "Template de plan de negocio", type: "Spreadsheet", status: "Disponible" },
    { title: "Playbook de escalamiento", type: "PDF", status: "Próximamente" },
    { title: "Guía de primeros 90 días", type: "PDF", status: "Disponible" },
    { title: "Dashboard de métricas", type: "Template", status: "Próximamente" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-extrabold tracking-tight mb-2">Recursos</h2>
      <p className="text-sm text-muted-foreground mb-8">
        Descargá herramientas y materiales para tu negocio.
      </p>

      <div className="flex flex-col gap-3">
        {recursos.map((r) => (
          <div
            key={r.title}
            className="flex items-center justify-between border border-foreground/10 rounded px-5 py-4"
          >
            <div>
              <span className="text-sm font-bold block">{r.title}</span>
              <span className="text-xs text-muted-foreground">{r.type}</span>
            </div>
            <span
              className={`text-[11px] font-bold px-3 py-1 rounded ${
                r.status === "Disponible"
                  ? "bg-accent text-primary"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {r.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecursosSection;
