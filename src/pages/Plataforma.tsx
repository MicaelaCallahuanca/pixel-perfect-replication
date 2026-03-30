import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type UserRole = "emprendedor" | "crecimiento" | "aprendiz";

interface RoleConfig {
  label: string;
  description: string;
  sections: { title: string; items: string[] }[];
}

const ROLE_CONTENT: Record<UserRole, RoleConfig> = {
  emprendedor: {
    label: "Emprendedor arrancando",
    description: "Recursos para dar tus primeros pasos con estructura y claridad.",
    sections: [
      {
        title: "Recursos descargables",
        items: ["Checklist de lanzamiento", "Template de plan de negocio", "Guía de primeros 90 días"],
      },
      {
        title: "Guías simples",
        items: ["Cómo validar tu idea", "Pricing para principiantes", "Tu primera landing page"],
      },
      {
        title: "Comunicación / soporte",
        items: ["Acceso a comunidad Discord", "Q&A mensual en vivo"],
      },
    ],
  },
  crecimiento: {
    label: "Negocio en crecimiento",
    description: "Herramientas para escalar lo que ya funciona.",
    sections: [
      {
        title: "Recursos descargables",
        items: ["Playbook de escalamiento", "Dashboard de métricas", "Template de procesos"],
      },
      {
        title: "Guías simples",
        items: ["Automatización de ventas", "Cómo delegar sin perder calidad", "Estrategia de contenido avanzada"],
      },
      {
        title: "Comunicación / soporte",
        items: ["Soporte prioritario por email", "Sesión estratégica 1:1 mensual", "Acceso a mastermind"],
      },
    ],
  },
  aprendiz: {
    label: "Aprendiz",
    description: "Contenido educativo para desarrollar habilidades de marketing y negocio.",
    sections: [
      {
        title: "Recursos descargables",
        items: ["Glosario de marketing digital", "Workbook de ejercicios", "Biblioteca de templates"],
      },
      {
        title: "Guías simples",
        items: ["Fundamentos de marketing", "Introducción a analytics", "Copywriting básico"],
      },
      {
        title: "Comunicación / soporte",
        items: ["Foro de preguntas", "Newsletter semanal con tips"],
      },
    ],
  },
};

const ROLES: UserRole[] = ["emprendedor", "crecimiento", "aprendiz"];

const Plataforma = () => {
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const navigate = useNavigate();

  // Mock authentication — change to true to simulate logged-in user
  const [isAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/acceso", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return null;

  return (
    <>
      <Navbar />
      <section className="min-h-screen pt-32 pb-24 px-7 md:px-20">
        <div className="max-w-2xl mx-auto">
          <div className="font-mono-brand text-[10px] tracking-[2.5px] uppercase text-primary mb-4 font-medium">
            Plataforma
          </div>
          <h1 className="text-[clamp(32px,4vw,48px)] font-extrabold tracking-[-1.5px] leading-none mb-4">
            Plataforma
          </h1>
          <p className="text-secondary-foreground text-sm leading-relaxed mb-12">
            Accedé a tus recursos, herramientas y contenido según tu perfil.
          </p>

          {/* Login placeholder */}
          <div className="border border-foreground/10 rounded p-8 mb-10 max-w-md">
            <h2 className="text-lg font-bold mb-6">Iniciar sesión</h2>
            <div className="flex flex-col gap-4">
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Contraseña" />
              <Button className="w-full font-bold">Ingresar</Button>
            </div>
          </div>

          {/* Role selector (mock) */}
          <div className="mb-10">
            <h2 className="text-lg font-bold mb-2">Seleccioná tu perfil</h2>
            <p className="text-xs text-muted-foreground mb-5">
              (Simulación — en el futuro se asignará automáticamente)
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {ROLES.map((role) => (
                <button
                  key={role}
                  onClick={() => setSelectedRole(role)}
                  className={`px-5 py-4 rounded border text-left transition-all ${
                    selectedRole === role
                      ? "border-primary bg-accent"
                      : "border-foreground/10 hover:border-primary/40"
                  }`}
                >
                  <span className="text-sm font-bold block mb-1">{ROLE_CONTENT[role].label}</span>
                  <span className="text-xs text-muted-foreground">{ROLE_CONTENT[role].description}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Role-based content */}
          {selectedRole ? (
            <div className="animate-fade-up">
              <div className="font-mono-brand text-[10px] tracking-[2.5px] uppercase text-primary mb-2 font-medium">
                Contenido para
              </div>
              <h2 className="text-2xl font-extrabold tracking-tight mb-8">
                {ROLE_CONTENT[selectedRole].label}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {ROLE_CONTENT[selectedRole].sections.map((section) => (
                  <div key={section.title} className="border border-foreground/10 rounded p-6">
                    <h3 className="text-sm font-bold mb-4">{section.title}</h3>
                    <ul className="flex flex-col gap-2.5">
                      {section.items.map((item) => (
                        <li key={item} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-accent rounded p-6 text-center">
              <p className="text-sm text-accent-foreground leading-relaxed">
                Próximamente vas a poder acceder a contenido personalizado según tu perfil (emprendedor, negocio en crecimiento, aprendizaje, etc.)
              </p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Plataforma;
