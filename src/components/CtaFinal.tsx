const CtaFinal = () => {
  return (
    <section id="contacto" className="bg-primary text-primary-foreground px-7 md:px-20 py-28 flex flex-col items-center text-center relative overflow-hidden">
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[280px] font-extrabold tracking-[-10px] text-primary-foreground/5 whitespace-nowrap pointer-events-none select-none">
        SCALE
      </span>
      <div className="font-mono-brand text-[10px] tracking-[2.5px] uppercase text-primary-foreground/60 mb-4 font-medium">Siguiente paso</div>
      <h2 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-1.5px] leading-none max-w-[600px]">
        ¿Listo para saber<br /><em className="font-serif-brand italic font-normal">qué pasa en tu web?</em>
      </h2>
      <p className="text-[17px] leading-relaxed text-primary-foreground/70 max-w-[480px] mt-4 font-normal">
        Una conversación de 30 minutos para entender tu situación y ver si puedo ayudarte. Sin compromiso.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-12 relative z-10">
        <a href="mailto:hola@scalecube.co" className="bg-background text-primary px-10 py-4 rounded text-[15px] font-extrabold hover:-translate-y-0.5 transition-transform">
          Agendar llamada →
        </a>
        <a href="#recursos" className="border-2 border-primary-foreground/40 text-primary-foreground px-10 py-4 rounded text-[15px] font-bold hover:border-primary-foreground transition-colors">
          Ver recursos primero
        </a>
      </div>
    </section>
  );
};

export default CtaFinal;
