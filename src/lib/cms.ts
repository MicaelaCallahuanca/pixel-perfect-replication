// CMS Content Types & Mock Data
// Replace mock data with real CMS fetches when backend is ready

export interface CMSItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  link: string;
  category: string;
  visibility: "public" | "authenticated" | "hidden";
}

export interface Curso extends CMSItem {
  category: "curso";
}

export interface Servicio extends CMSItem {
  category: "emprendedores" | "empresas";
}

export interface PaginaLegal extends CMSItem {
  category: "legal";
  content: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  visibility: "public" | "hidden";
}

// --- Mock Data ---

export const MOCK_CURSOS: Curso[] = [
  { id: "c1", title: "Marketing Digital desde Cero", slug: "marketing-digital", description: "Aprendé los fundamentos del marketing digital.", link: "/plataforma/cursos", category: "curso", visibility: "public" },
  { id: "c2", title: "Analytics para Decisiones", slug: "analytics-decisiones", description: "Usá datos para tomar mejores decisiones.", link: "/plataforma/cursos", category: "curso", visibility: "public" },
  { id: "c3", title: "Copywriting que Convierte", slug: "copywriting", description: "Escribí textos que generan acción.", link: "/plataforma/cursos", category: "curso", visibility: "public" },
  { id: "c4", title: "SEO Práctico", slug: "seo-practico", description: "Posicioná tu sitio en buscadores.", link: "/plataforma/cursos", category: "curso", visibility: "public" },
  { id: "c5", title: "Embudos de Venta", slug: "embudos-venta", description: "Diseñá funnels que conviertan.", link: "/plataforma/cursos", category: "curso", visibility: "public" },
];

export const MOCK_SERVICIOS_EMPRENDEDORES: Servicio[] = [
  { id: "se1", title: "Landing Page Starter", slug: "landing-starter", description: "Tu primera landing optimizada.", link: "/plataforma/servicios/emprendedores", category: "emprendedores", visibility: "public" },
  { id: "se2", title: "Setup de Medición", slug: "setup-medicion", description: "Instalación de analytics y tracking.", link: "/plataforma/servicios/emprendedores", category: "emprendedores", visibility: "public" },
  { id: "se3", title: "Estrategia de Lanzamiento", slug: "estrategia-lanzamiento", description: "Plan de go-to-market para tu producto.", link: "/plataforma/servicios/emprendedores", category: "emprendedores", visibility: "public" },
  { id: "se4", title: "Branding Express", slug: "branding-express", description: "Identidad visual en 5 días.", link: "/plataforma/servicios/emprendedores", category: "emprendedores", visibility: "public" },
  { id: "se5", title: "Consultoría Inicial", slug: "consultoria-inicial", description: "Sesión 1:1 para definir tu estrategia.", link: "/plataforma/servicios/emprendedores", category: "emprendedores", visibility: "public" },
];

export const MOCK_SERVICIOS_EMPRESAS: Servicio[] = [
  { id: "sem1", title: "Auditoría de Funnel", slug: "auditoria-funnel", description: "Análisis completo de tu embudo de ventas.", link: "/plataforma/servicios/empresas", category: "empresas", visibility: "public" },
  { id: "sem2", title: "Automatización de Marketing", slug: "automatizacion", description: "Flujos automatizados para escalar.", link: "/plataforma/servicios/empresas", category: "empresas", visibility: "public" },
  { id: "sem3", title: "Paid Media Avanzado", slug: "paid-media", description: "Campañas de alto rendimiento.", link: "/plataforma/servicios/empresas", category: "empresas", visibility: "public" },
  { id: "sem4", title: "CRO & Optimización", slug: "cro-optimizacion", description: "Mejorá tus tasas de conversión.", link: "/plataforma/servicios/empresas", category: "empresas", visibility: "public" },
  { id: "sem5", title: "Dashboard Ejecutivo", slug: "dashboard-ejecutivo", description: "Reportes y métricas en tiempo real.", link: "/plataforma/servicios/empresas", category: "empresas", visibility: "public" },
];

export const MOCK_LEGAL: PaginaLegal[] = [
  { id: "l1", title: "Términos y Condiciones", slug: "terminos", description: "Términos de uso del servicio.", link: "/legal/terminos", category: "legal", visibility: "public", content: "Estos son los términos y condiciones de uso de Scale Cube. Al utilizar nuestros servicios, aceptás cumplir con estas condiciones.\n\n1. Uso del servicio: Los servicios están destinados a profesionales y empresas que buscan mejorar su presencia digital.\n\n2. Propiedad intelectual: Todo el contenido, materiales y herramientas proporcionados son propiedad de Scale Cube.\n\n3. Responsabilidad: Scale Cube no se hace responsable por los resultados comerciales derivados del uso de sus servicios.\n\n4. Modificaciones: Nos reservamos el derecho de modificar estos términos en cualquier momento.\n\n5. Jurisdicción: Estos términos se rigen por las leyes de la República Argentina." },
  { id: "l2", title: "Promociones", slug: "promociones", description: "Bases y condiciones de promociones.", link: "/legal/promociones", category: "legal", visibility: "public", content: "Bases y condiciones generales de promociones de Scale Cube.\n\n1. Vigencia: Cada promoción tiene un período de vigencia específico indicado en la comunicación correspondiente.\n\n2. Beneficiarios: Las promociones aplican a nuevos clientes salvo indicación contraria.\n\n3. Acumulación: Las promociones no son acumulables entre sí, salvo que se indique lo contrario.\n\n4. Modificaciones: Scale Cube se reserva el derecho de modificar o cancelar cualquier promoción." },
  { id: "l3", title: "Política de Privacidad", slug: "privacidad", description: "Cómo manejamos tus datos.", link: "/legal/privacidad", category: "legal", visibility: "public", content: "Política de privacidad de Scale Cube.\n\n1. Datos recopilados: Recopilamos nombre, email y datos de uso de la plataforma.\n\n2. Uso de datos: Los datos se utilizan para personalizar la experiencia y mejorar nuestros servicios.\n\n3. Almacenamiento: Los datos se almacenan de forma segura con encriptación.\n\n4. Derechos: Podés solicitar la eliminación de tus datos en cualquier momento.\n\n5. Cookies: Utilizamos cookies para análisis y funcionalidad del sitio." },
];

export const MOCK_FAQ: FAQItem[] = [
  { id: "f1", question: "¿Qué es Scale Cube?", answer: "Scale Cube es una plataforma de marketing digital que te ayuda a medir, optimizar y escalar tu presencia online con datos claros y herramientas prácticas.", visibility: "public" },
  { id: "f2", question: "¿Para quién es este servicio?", answer: "Para emprendedores que arrancan, negocios en crecimiento y personas que quieren aprender marketing digital basado en datos.", visibility: "public" },
  { id: "f3", question: "¿Necesito conocimientos técnicos?", answer: "No. Nuestros servicios y recursos están diseñados para que cualquier persona pueda entenderlos y aplicarlos, sin tecnicismos.", visibility: "public" },
  { id: "f4", question: "¿Cómo funciona la plataforma?", answer: "Una vez que creás tu cuenta, accedés a contenido personalizado según tu perfil: guías, herramientas, templates y soporte.", visibility: "public" },
  { id: "f5", question: "¿Puedo cambiar mi plan?", answer: "Sí, podés cambiar tu plan en cualquier momento desde la sección Mi Cuenta en la plataforma.", visibility: "public" },
  { id: "f6", question: "¿Cómo me contacto con soporte?", answer: "Podés escribirnos por WhatsApp o usar el formulario de contacto. Te respondemos en menos de 24 horas.", visibility: "public" },
];

// Helper to get visible items
export function getVisibleItems<T extends { visibility: string }>(items: T[]): T[] {
  return items.filter((item) => item.visibility !== "hidden");
}
