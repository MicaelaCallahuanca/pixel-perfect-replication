import { Link } from "react-router-dom";
import { MOCK_CURSOS, MOCK_SERVICIOS_EMPRENDEDORES, MOCK_SERVICIOS_EMPRESAS } from "@/lib/cms";

const Footer = () => {
  const cursos = MOCK_CURSOS.slice(0, 5);
  const serviciosEmp = MOCK_SERVICIOS_EMPRENDEDORES.slice(0, 5);
  const serviciosEmpr = MOCK_SERVICIOS_EMPRESAS.slice(0, 5);

  return (
    <footer className="bg-foreground text-primary-foreground/40 px-7 md:px-20 py-16">
      {/* Main grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 text-primary-foreground text-[15px] font-extrabold mb-3">
            <span className="w-4 h-4 bg-primary inline-block rotate-[10deg]" />
            Scale Cube
          </div>
          <p className="text-xs leading-relaxed mb-4">
            Marketing que se mide. Diseño, medición y datos claros para tu negocio.
          </p>
          <div className="flex gap-3">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/40 hover:text-primary-foreground text-xs transition-colors">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/40 hover:text-primary-foreground text-xs transition-colors">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/40 hover:text-primary-foreground text-xs transition-colors">X</a>
          </div>
        </div>

        {/* Cursos */}
        <div>
          <h4 className="text-primary-foreground text-xs font-bold uppercase tracking-wider mb-3">Cursos</h4>
          <ul className="flex flex-col gap-2 list-none">
            {cursos.map((c) => (
              <li key={c.id}>
                <Link to="/acceso" className="text-primary-foreground/40 hover:text-primary-foreground text-xs transition-colors">
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Servicios Emprendedores */}
        <div>
          <h4 className="text-primary-foreground text-xs font-bold uppercase tracking-wider mb-3">Para Emprendedores</h4>
          <ul className="flex flex-col gap-2 list-none">
            {serviciosEmp.map((s) => (
              <li key={s.id}>
                <Link to="/acceso" className="text-primary-foreground/40 hover:text-primary-foreground text-xs transition-colors">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Servicios Empresas */}
        <div>
          <h4 className="text-primary-foreground text-xs font-bold uppercase tracking-wider mb-3">Para Empresas</h4>
          <ul className="flex flex-col gap-2 list-none">
            {serviciosEmpr.map((s) => (
              <li key={s.id}>
                <Link to="/acceso" className="text-primary-foreground/40 hover:text-primary-foreground text-xs transition-colors">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <span>© 2025 Scale Cube · Hecho con datos.</span>
        <nav>
          <ul className="flex gap-6 list-none">
            <li><Link to="/legal/terminos" className="text-primary-foreground/40 hover:text-primary-foreground transition-colors">Términos</Link></li>
            <li><Link to="/legal/privacidad" className="text-primary-foreground/40 hover:text-primary-foreground transition-colors">Privacidad</Link></li>
            <li><Link to="/legal/promociones" className="text-primary-foreground/40 hover:text-primary-foreground transition-colors">Promociones</Link></li>
            <li><Link to="/preguntas-frecuentes" className="text-primary-foreground/40 hover:text-primary-foreground transition-colors">FAQ</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
