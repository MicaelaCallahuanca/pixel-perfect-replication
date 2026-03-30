import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemBand from "@/components/ProblemBand";
import Segments from "@/components/Segments";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Process from "@/components/Process";
//import Architecture from "@/components/Architecture"; |<Architecture />
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemBand />
      <Segments />
      <Services />
      <Products />
      <Process />
      <CtaFinal />
      <Footer />
    </>
  );
};

export default Index;
