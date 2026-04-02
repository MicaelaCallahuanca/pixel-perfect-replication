import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import PlataformaSidebar, { PlataformaView, NAV_ITEMS } from "@/components/plataforma/PlataformaSidebar";
import DashboardSection from "@/components/plataforma/DashboardSection";
import RecursosSection from "@/components/plataforma/RecursosSection";
import MiCuentaSection from "@/components/plataforma/MiCuentaSection";
import Cursos from "@/pages/plataforma/Cursos";
import ServiciosList from "@/pages/plataforma/ServiciosList";
import { MOCK_USER } from "@/components/plataforma/roleData";

const PlataformaContent = () => {
  const [activeView, setActiveView] = useState<PlataformaView>("dashboard");

  return (
    <div className="flex min-h-screen pt-[73px]">
      <PlataformaSidebar active={activeView} onNavigate={setActiveView} />
      <main className="flex-1 px-7 md:px-14 py-10">
        {/* Mobile nav */}
        <div className="flex gap-2 mb-8 md:hidden overflow-x-auto">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded text-[12px] font-bold whitespace-nowrap transition-colors ${
                activeView === item.id
                  ? "bg-accent text-primary"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              <item.icon className="w-3.5 h-3.5" />
              {item.label}
            </button>
          ))}
        </div>

        {activeView === "dashboard" && <DashboardSection user={MOCK_USER} />}
        {activeView === "recursos" && <RecursosSection />}
        {activeView === "cuenta" && <MiCuentaSection />}
      </main>
    </div>
  );
};

const Plataforma = () => {
  const navigate = useNavigate();
  const [isAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/acceso", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return null;

  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<PlataformaContent />} />
        <Route path="cursos" element={
          <div className="min-h-screen pt-[73px]">
            <main className="px-7 md:px-14 py-10 max-w-4xl mx-auto"><Cursos /></main>
          </div>
        } />
        <Route path="servicios" element={
          <div className="min-h-screen pt-[73px]">
            <main className="px-7 md:px-14 py-10 max-w-4xl mx-auto"><ServiciosList /></main>
          </div>
        } />
        <Route path="servicios/:category" element={
          <div className="min-h-screen pt-[73px]">
            <main className="px-7 md:px-14 py-10 max-w-4xl mx-auto"><ServiciosList /></main>
          </div>
        } />
      </Routes>
      <Footer />
    </>
  );
};

export default Plataforma;
