import { useEffect } from "react";

const WHATSAPP_URL = "https://wa.me/5491100000000?text=Hola%20Scale%20Cube%2C%20quiero%20más%20información";

const Contacto = () => {
  useEffect(() => {
    window.location.href = WHATSAPP_URL;
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-sm text-muted-foreground">Redirigiendo a WhatsApp…</p>
    </div>
  );
};

export default Contacto;
