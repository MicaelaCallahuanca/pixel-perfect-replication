export type UserRole = "emprendedor" | "negocio" | "aprendiz";

export interface RoleConfig {
  label: string;
  description: string;
  sections: { title: string; items: string[] }[];
}

export const ROLE_CONTENT: Record<UserRole, RoleConfig> = {
  emprendedor: {
    label: "Emprendedor",
    description: "Guías básicas para arrancar con estructura y claridad.",
    sections: [
      {
        title: "Guías básicas",
        items: ["Cómo validar tu idea", "Pricing para principiantes", "Tu primera landing page", "Guía de primeros 90 días"],
      },
      {
        title: "Templates",
        items: ["Checklist de lanzamiento", "Template de plan de negocio", "Canvas de propuesta de valor"],
      },
      {
        title: "Soporte",
        items: ["Acceso a comunidad Discord", "Q&A mensual en vivo"],
      },
    ],
  },
  negocio: {
    label: "Negocio en crecimiento",
    description: "Servicios y optimización para escalar lo que ya funciona.",
    sections: [
      {
        title: "Servicios",
        items: ["Auditoría de funnel", "Setup de automatizaciones", "Estrategia de paid media", "Consultoría de pricing"],
      },
      {
        title: "Optimización",
        items: ["Dashboard de métricas clave", "Playbook de escalamiento", "Template de procesos operativos"],
      },
      {
        title: "Soporte premium",
        items: ["Soporte prioritario por email", "Sesión estratégica 1:1 mensual", "Acceso a mastermind"],
      },
    ],
  },
  aprendiz: {
    label: "Aprendiz",
    description: "Recursos educativos para desarrollar habilidades de marketing y negocio.",
    sections: [
      {
        title: "Recursos educativos",
        items: ["Fundamentos de marketing digital", "Introducción a analytics", "Copywriting básico", "SEO para principiantes"],
      },
      {
        title: "Material de práctica",
        items: ["Glosario de marketing digital", "Workbook de ejercicios", "Biblioteca de templates"],
      },
      {
        title: "Comunidad",
        items: ["Foro de preguntas", "Newsletter semanal con tips", "Retos semanales"],
      },
    ],
  },
};

export const ROLES: UserRole[] = ["emprendedor", "negocio", "aprendiz"];

export interface MockUser {
  name: string;
  email: string;
  roles: UserRole[];
}

export const MOCK_USER: MockUser = {
  name: "Usuario Demo",
  email: "demo@scalecube.com",
  roles: ["emprendedor", "aprendiz"],
};
