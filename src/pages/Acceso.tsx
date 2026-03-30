import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Acceso = () => {
  const [mode, setMode] = useState<"login" | "register">("login");

  return (
    <>
      <Navbar />
      <section className="min-h-screen pt-32 pb-24 px-7 md:px-20">
        <div className="max-w-md mx-auto">
          <div className="font-mono-brand text-[10px] tracking-[2.5px] uppercase text-primary mb-4 font-medium">
            Acceso
          </div>
          <h1 className="text-[clamp(32px,4vw,48px)] font-extrabold tracking-[-1.5px] leading-none mb-4">
            Acceder a tu espacio
          </h1>
          <p className="text-secondary-foreground text-sm leading-relaxed mb-10">
            Una vez que ingreses, vas a acceder a contenido personalizado según tu perfil.
          </p>

          {/* Toggle */}
          <div className="flex gap-0 mb-8 border border-foreground/10 rounded overflow-hidden">
            <button
              onClick={() => setMode("login")}
              className={`flex-1 py-3 text-[13px] font-bold tracking-wide transition-colors ${
                mode === "login"
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-muted-foreground hover:text-foreground"
              }`}
            >
              Iniciar sesión
            </button>
            <button
              onClick={() => setMode("register")}
              className={`flex-1 py-3 text-[13px] font-bold tracking-wide transition-colors ${
                mode === "register"
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-muted-foreground hover:text-foreground"
              }`}
            >
              Crear cuenta
            </button>
          </div>

          {/* Forms */}
          <div className="border border-foreground/10 rounded p-8 animate-fade-up">
            {mode === "login" ? (
              <div className="flex flex-col gap-4">
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Contraseña" />
                <Button className="w-full font-bold">Ingresar</Button>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <Input type="text" placeholder="Nombre" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Contraseña" />
                <Button className="w-full font-bold">Crear cuenta</Button>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Acceso;
