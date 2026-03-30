import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { ROLES, ROLE_CONTENT, type UserRole } from "@/components/plataforma/roleData";

interface AdminUser {
  id: string;
  name: string;
  email: string;
  roles: UserRole[];
}

const INITIAL_USERS: AdminUser[] = [
  { id: "1", name: "María López", email: "maria@ejemplo.com", roles: ["emprendedor"] },
  { id: "2", name: "Juan Pérez", email: "juan@ejemplo.com", roles: ["negocio", "aprendiz"] },
  { id: "3", name: "Lucía Fernández", email: "lucia@ejemplo.com", roles: ["aprendiz"] },
  { id: "4", name: "Carlos Ruiz", email: "carlos@ejemplo.com", roles: ["emprendedor", "negocio"] },
];

const Admin = () => {
  const [users, setUsers] = useState<AdminUser[]>(INITIAL_USERS);

  const toggleRole = (userId: string, role: UserRole) => {
    setUsers((prev) =>
      prev.map((u) => {
        if (u.id !== userId) return u;
        const has = u.roles.includes(role);
        const newRoles = has ? u.roles.filter((r) => r !== role) : [...u.roles, role];
        return { ...u, roles: newRoles };
      })
    );
  };

  return (
    <>
      <Navbar />
      <section className="min-h-screen pt-32 pb-24 px-7 md:px-20">
        <div className="max-w-3xl mx-auto">
          <div className="font-mono-brand text-[10px] tracking-[2.5px] uppercase text-primary mb-4 font-medium">
            Admin
          </div>
          <h1 className="text-[clamp(28px,3.5vw,40px)] font-extrabold tracking-[-1.5px] leading-none mb-2">
            Panel interno
          </h1>
          <p className="text-secondary-foreground text-sm leading-relaxed mb-10">
            Panel interno - gestión de usuarios
          </p>

          <div className="flex flex-col gap-4">
            {users.map((user) => (
              <div
                key={user.id}
                className="border border-foreground/10 rounded p-5 flex flex-col sm:flex-row sm:items-center gap-4"
              >
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-bold block truncate">{user.name}</span>
                  <span className="text-xs text-muted-foreground">{user.email}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {ROLES.map((role) => {
                    const active = user.roles.includes(role);
                    return (
                      <button
                        key={role}
                        onClick={() => toggleRole(user.id, role)}
                        className={`px-3 py-1.5 rounded text-[11px] font-bold transition-colors ${
                          active
                            ? "bg-accent text-primary border border-primary/20"
                            : "bg-muted text-muted-foreground border border-transparent hover:border-foreground/10"
                        }`}
                      >
                        {ROLE_CONTENT[role].label}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Admin;
