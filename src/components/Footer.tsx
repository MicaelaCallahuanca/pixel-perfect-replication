const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/40 px-7 md:px-20 py-12 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-medium">
      <div className="flex items-center gap-2 text-primary-foreground text-[15px] font-extrabold">
        <span className="w-4 h-4 bg-primary inline-block rotate-[10deg]" />
        Scale Cube
      </div>
      <nav>
        <ul className="flex gap-6 list-none">
          <li><a href="#servicios" className="text-primary-foreground/40 hover:text-primary-foreground text-xs transition-colors">Servicios</a></li>
          <li><a href="#recursos" className="text-primary-foreground/40 hover:text-primary-foreground text-xs transition-colors">Recursos</a></li>
          <li><a href="#proceso" className="text-primary-foreground/40 hover:text-primary-foreground text-xs transition-colors">Proceso</a></li>
          <li><a href="#contacto" className="text-primary-foreground/40 hover:text-primary-foreground text-xs transition-colors">Contacto</a></li>
        </ul>
      </nav>
      <span>© 2025 Scale Cube · Hecho con datos.</span>
    </footer>
  );
};

export default Footer;
