import { UserRole, ROLE_CONTENT, ROLES, type MockUser } from "./roleData";

interface DashboardSectionProps {
  user: MockUser;
}

const DashboardSection = ({ user }: DashboardSectionProps) => {
  const activeRoles = user.roles;

  return (
    <div>
      <h2 className="text-2xl font-extrabold tracking-tight mb-2">
        Bienvenido/a, {user.name}
      </h2>
      <p className="text-sm text-muted-foreground mb-8">
        Tu contenido personalizado según tus perfiles activos.
      </p>

      {/* Active roles badges */}
      <div className="flex flex-wrap gap-2 mb-10">
        {ROLES.map((role) => {
          const isActive = activeRoles.includes(role);
          return (
            <span
              key={role}
              className={`px-4 py-2 rounded text-[12px] font-bold transition-colors ${
                isActive
                  ? "bg-accent text-primary border border-primary/20"
                  : "bg-muted text-muted-foreground border border-transparent"
              }`}
            >
              {ROLE_CONTENT[role].label}
              {isActive && " ✓"}
            </span>
          );
        })}
      </div>

      {/* Combined content for all active roles */}
      {activeRoles.map((role) => (
        <div key={role} className="mb-12 animate-fade-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="font-mono-brand text-[10px] tracking-[2.5px] uppercase text-primary font-medium">
              {ROLE_CONTENT[role].label}
            </div>
            <div className="flex-1 h-px bg-foreground/5" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ROLE_CONTENT[role].sections.map((section) => (
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
      ))}
    </div>
  );
};

export default DashboardSection;
