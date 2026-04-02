import { MOCK_CURSOS, getVisibleItems } from "@/lib/cms";

const Cursos = () => {
  const cursos = getVisibleItems(MOCK_CURSOS);

  return (
    <div>
      <h2 className="text-2xl font-extrabold tracking-tight mb-2">Cursos</h2>
      <p className="text-sm text-muted-foreground mb-8">
        Accedé a cursos diseñados para cada etapa de tu crecimiento.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cursos.map((curso) => (
          <div key={curso.id} className="border border-foreground/10 rounded p-6">
            <h3 className="text-sm font-bold mb-1">{curso.title}</h3>
            <p className="text-xs text-muted-foreground">{curso.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cursos;
