const Hero = () => {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 pt-20">
      <div className="flex flex-col justify-center px-7 md:px-16 lg:px-20 py-20">
        <div className="font-mono-brand text-[11px] font-medium tracking-[2px] text-primary uppercase mb-7 flex items-center gap-2.5 animate-fade-up">
          <span className="block w-8 h-0.5 bg-primary" />
          Marketing que se mide · Scale Cube
        </div>
        <h1 className="text-[clamp(44px,5.5vw,72px)] font-extrabold leading-none tracking-[-2px] mb-7 animate-fade-up-1">
          Tu web debería<br />
          <em className="font-serif-brand italic font-normal text-primary">convertir.</em><br />
          Hagamos que pase.
        </h1>
        <p className="text-[17px] leading-relaxed text-secondary-foreground max-w-[420px] mb-12 font-normal animate-fade-up-2">
          Diseño landings, configuro medición y te enseño a leer tus datos. Sin tecnicismos. Con resultados claros desde el día 1.
        </p>
        <div className="flex gap-4 items-center flex-wrap animate-fade-up-3">
          <a href="#servicios" className="bg-primary text-primary-foreground px-8 py-4 rounded text-[15px] font-bold tracking-wide hover:bg-primary-dim hover:-translate-y-0.5 transition-all">
            Ver servicios
          </a>
          <a href="#recursos" className="text-foreground text-sm font-semibold flex items-center gap-1.5 hover:gap-2.5 transition-all group">
            Recursos gratuitos<span>→</span>
          </a>
        </div>
      </div>

      <div className="bg-foreground flex flex-col justify-center px-7 md:px-14 py-16 relative overflow-hidden">
        <div className="absolute -top-[120px] -right-20 w-[400px] h-[400px] border-[120px] border-primary rounded-full opacity-15" />
        <div className="grid grid-cols-2 gap-7 relative z-10 animate-fade-up-stats">
          {[
            { num: "3", accent: "x", label: "Más conversión con landing estructurada" },
            { num: "D", accent: "1", label: "Métricas activas desde el día 1" },
            { num: "0", accent: "", label: "Tecnicismos. Todo explicado en claro" },
            { num: "∞", accent: "", label: "Escalable: servicios + recursos + membresía" },
          ].map((stat, i) => (
            <div key={i} className="border border-primary-foreground/10 p-7 rounded-md hover:border-primary hover:-translate-y-0.5 transition-all">
              <div className="text-[42px] font-extrabold text-primary-foreground tracking-[-2px] leading-none mb-2">
                {stat.num}{stat.accent && <span className="text-primary">{stat.accent}</span>}
              </div>
              <div className="text-xs text-primary-foreground/50 font-semibold tracking-wide leading-relaxed">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-9 relative z-10 border-t border-primary-foreground/10 pt-7">
          <div className="font-mono-brand text-[10px] tracking-[2px] text-primary-foreground/35 uppercase mb-3.5">
            Incluye en cada proyecto
          </div>
          <div className="flex flex-col gap-2.5">
            {[
              "Wireframe + copy estructurado con fórmulas",
              "GA4 + GTM + eventos clave configurados",
              "Dashboard en Looker Studio listo para usar",
              "Diagnóstico SEO con datos reales",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-[13px] text-primary-foreground/75 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
