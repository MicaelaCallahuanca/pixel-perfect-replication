import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Plataforma = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen pt-32 pb-24 px-7 md:px-20">
        <div className="max-w-md mx-auto">
          <div className="font-mono-brand text-[10px] tracking-[2.5px] uppercase text-primary mb-4 font-medium">
            Plataforma
          </div>
          <h1 className="text-[clamp(32px,4vw,48px)] font-extrabold tracking-[-1.5px] leading-none mb-4">
            Plataforma
          </h1>
          <p className="text-secondary-foreground text-sm leading-relaxed mb-12">
            Accedé a tus recursos, herramientas y contenido según tu perfil.
          </p>

          <div className="border border-foreground/10 rounded p-8 mb-10">
            <h2 className="text-lg font-bold mb-6">Iniciar sesión</h2>
            <div className="flex flex-col gap-4">
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Contraseña" />
              <Button className="w-full font-bold">Ingresar</Button>
            </div>
          </div>

          <div className="bg-accent rounded p-6 text-center">
            <p className="text-sm text-accent-foreground leading-relaxed">
              Próximamente vas a poder acceder a contenido personalizado según tu perfil (emprendedor, negocio en crecimiento, aprendizaje, etc.)
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Plataforma;
