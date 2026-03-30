import { LayoutDashboard, FolderDown, UserCircle } from "lucide-react";

export type PlataformaView = "dashboard" | "recursos" | "cuenta";

interface NavItem {
  id: PlataformaView;
  label: string;
  icon: React.ElementType;
}

const NAV_ITEMS: NavItem[] = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "recursos", label: "Recursos", icon: FolderDown },
  { id: "cuenta", label: "Mi cuenta", icon: UserCircle },
];

interface PlataformaSidebarProps {
  active: PlataformaView;
  onNavigate: (view: PlataformaView) => void;
}

const PlataformaSidebar = ({ active, onNavigate }: PlataformaSidebarProps) => {
  return (
    <aside className="w-56 shrink-0 border-r border-foreground/10 min-h-[calc(100vh-73px)] pt-8 px-3 hidden md:block">
      <div className="font-mono-brand text-[10px] tracking-[2.5px] uppercase text-muted-foreground mb-5 px-3 font-medium">
        Plataforma
      </div>
      <nav className="flex flex-col gap-1">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded text-[13px] font-semibold transition-colors text-left w-full ${
              active === item.id
                ? "bg-accent text-primary"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default PlataformaSidebar;
export { NAV_ITEMS };
