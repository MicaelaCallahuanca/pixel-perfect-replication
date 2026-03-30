export type UserRole = "emprendedor" | "crecimiento" | "aprendiz";

export interface RoleConfig {
  label: string;
  description: string;
  sections: { title: string; items: string[] }[];
}

export const ROLE_CONTENT: Record<UserRole, RoleConfig> = {
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

export const ROLES: UserRole[] = ["emprendedor", "crecimiento", "aprendiz"];
