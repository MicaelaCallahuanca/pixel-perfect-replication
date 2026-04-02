import { Link, useParams } from "react-router-dom";
import { MOCK_SERVICIOS_EMPRENDEDORES, MOCK_SERVICIOS_EMPRESAS, getVisibleItems } from "@/lib/cms";

const ServiciosList = () => {
  const { category } = useParams<{ category?: string }>();

  if (category === "emprendedores") {
    const items = getVisibleItems(MOCK_SERVICIOS_EMPRENDEDORES);
    return (
      <div>
        <h2 className="text-2xl font-extrabold tracking-tight mb-2">Servicios para Emprendedores</h2>
        <p className="text-sm text-muted-foreground mb-8">Herramientas y servicios para arrancar con todo.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((s) => (
            <div key={s.id} className="border border-foreground/10 rounded p-6">
              <h3 className="text-sm font-bold mb-1">{s.title}</h3>
              <p className="text-xs text-muted-foreground">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (category === "empresas") {
    const items = getVisibleItems(MOCK_SERVICIOS_EMPRESAS);
    return (
      <div>
        <h2 className="text-2xl font-extrabold tracking-tight mb-2">Servicios para Empresas</h2>
        <p className="text-sm text-muted-foreground mb-8">Soluciones avanzadas para escalar tu negocio.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((s) => (
            <div key={s.id} className="border border-foreground/10 rounded p-6">
              <h3 className="text-sm font-bold mb-1">{s.title}</h3>
              <p className="text-xs text-muted-foreground">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Overview
  return (
    <div>
      <h2 className="text-2xl font-extrabold tracking-tight mb-2">Servicios</h2>
      <p className="text-sm text-muted-foreground mb-8">Elegí la categoría que mejor se adapte a tu momento.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link to="/plataforma/servicios/emprendedores" className="border border-foreground/10 rounded p-8 hover:border-primary/30 transition-colors group">
          <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">Para Emprendedores</h3>
          <p className="text-xs text-muted-foreground">Servicios diseñados para quienes están arrancando.</p>
        </Link>
        <Link to="/plataforma/servicios/empresas" className="border border-foreground/10 rounded p-8 hover:border-primary/30 transition-colors group">
          <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">Para Empresas</h3>
          <p className="text-xs text-muted-foreground">Soluciones para negocios que necesitan escalar.</p>
        </Link>
      </div>
    </div>
  );
};

export default ServiciosList;
