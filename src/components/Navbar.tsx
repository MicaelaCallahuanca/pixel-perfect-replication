const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-background/90 backdrop-blur-md border-b border-foreground/5">
      <div className="flex items-center gap-2 text-lg font-extrabold tracking-tight">
        <span className="w-[22px] h-[22px] bg-primary rotate-[10deg] inline-block" />
        Scale Cube
      </div>
      <ul className="hidden md:flex gap-9 list-none">
        <li><a href="#servicios" className="text-[13px] font-semibold tracking-wide text-foreground hover:text-primary transition-colors">Servicios</a></li>
        <li><a href="#recursos" className="text-[13px] font-semibold tracking-wide text-foreground hover:text-primary transition-colors">Recursos</a></li>
        <li><a href="#proceso" className="text-[13px] font-semibold tracking-wide text-foreground hover:text-primary transition-colors">Proceso</a></li>
        <li><a href="#plataforma" className="text-[13px] font-semibold tracking-wide text-foreground hover:text-primary transition-colors">Plataforma</a></li>
      </ul>
      <a href="#contacto" className="bg-primary text-primary-foreground px-5 py-2.5 rounded text-[13px] font-bold tracking-wide hover:bg-primary-dim hover:-translate-y-px transition-all">
        Hablemos →
      </a>
    </nav>
  );
};

export default Navbar;
