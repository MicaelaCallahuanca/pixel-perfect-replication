import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const MiCuentaSection = () => {
  return (
    <div>
      <h2 className="text-2xl font-extrabold tracking-tight mb-2">Mi cuenta</h2>
      <p className="text-sm text-muted-foreground mb-8">
        Gestioná tu información personal y preferencias.
      </p>

      <div className="border border-foreground/10 rounded p-8 max-w-md">
        <div className="flex flex-col gap-4">
          <div>
            <label className="text-xs font-bold text-muted-foreground mb-1.5 block">Nombre</label>
            <Input type="text" placeholder="Tu nombre" defaultValue="Usuario Demo" />
          </div>
          <div>
            <label className="text-xs font-bold text-muted-foreground mb-1.5 block">Email</label>
            <Input type="email" placeholder="Email" defaultValue="demo@scalecube.com" />
          </div>
          <div>
            <label className="text-xs font-bold text-muted-foreground mb-1.5 block">Contraseña</label>
            <Input type="password" placeholder="••••••••" />
          </div>
          <Button className="w-full font-bold mt-2">Guardar cambios</Button>
        </div>
      </div>
    </div>
  );
};

export default MiCuentaSection;
