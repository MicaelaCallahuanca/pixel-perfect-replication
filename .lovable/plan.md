## Plan

### 1. CMS Content Types & Data Layer
- Create `src/lib/cms.ts` with content type interfaces (Curso, Servicio, PaginaLegal, FAQ) and mock data
- Each item: title, slug, description, link, category, visibility

### 2. New Pages
- `/preguntas-frecuentes` → FAQ page with accordion
- `/contacto` → redirect to WhatsApp
- `/legal/terminos`, `/legal/promociones`, `/legal/privacidad` → legal pages from CMS data
- `/plataforma/cursos`, `/plataforma/servicios`, `/plataforma/servicios/emprendedores`, `/plataforma/servicios/empresas` → nested platform routes

### 3. Routes & App.tsx
- Add all new routes to App.tsx
- Wrap platform routes with existing auth guard logic

### 4. SEO
- Add `noindex` meta to `/acceso`
- Ensure other pages are indexable
- Update `robots.txt`

### 5. Navigation Update
- Navbar items: Inicio, Servicios, Recursos, Plataforma (→ /acceso)

### 6. Footer Restructure
- Brand section with logo, description, social links
- Dynamic columns: Cursos (5), Servicios emprendedores (5), Servicios empresas (5)
- Legal links row

### 7. Constraints
- Keep existing UI design intact
- Keep responsive behavior
- No backend auth changes