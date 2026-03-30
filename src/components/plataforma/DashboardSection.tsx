import { UserRole, ROLE_CONTENT, ROLES } from "./roleData";

interface DashboardSectionProps {
  selectedRole: UserRole | null;
  onSelectRole: (role: UserRole) => void;
}

const DashboardSection = ({ selectedRole, onSelectRole }: DashboardSectionProps) => {
  return (
    <div>
      <h2 className="text-2xl font-extrabold tracking-tight mb-2">
        Bienvenido/a a tu espacio personalizado
      </h2>
      <p className="text-sm text-muted-foreground mb-10">
        Seleccioná tu perfil para ver contenido adaptado a tu etapa.
      </p>

      {/* Role selector */}
      <div className="mb-10">
        <h3 className="text-sm font-bold mb-4">Tu perfil</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {ROLES.map((role) => (
            <button
              key={role}
              onClick={() => onSelectRole(role)}
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

      {/* Role-based content preview */}
      {selectedRole ? (
        <div className="animate-fade-up">
          <div className="font-mono-brand text-[10px] tracking-[2.5px] uppercase text-primary mb-2 font-medium">
            Contenido para
          </div>
          <h3 className="text-xl font-extrabold tracking-tight mb-6">
            {ROLE_CONTENT[selectedRole].label}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ROLE_CONTENT[selectedRole].sections.map((section) => (
              <div key={section.title} className="border border-foreground/10 rounded p-6">
                <h4 className="text-sm font-bold mb-4">{section.title}</h4>
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
            Elegí un perfil para ver tu contenido personalizado.
          </p>
        </div>
      )}
    </div>
  );
};

export default DashboardSection;
