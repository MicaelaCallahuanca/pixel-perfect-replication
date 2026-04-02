import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MOCK_LEGAL } from "@/lib/cms";

const Legal = () => {
  const { slug } = useParams<{ slug: string }>();
  const page = MOCK_LEGAL.find((p) => p.slug === slug);

  if (!page) {
    return (
      <>
        <Navbar />
        <section className="min-h-screen pt-32 pb-24 px-7 md:px-20">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-2xl font-extrabold">Página no encontrada</h1>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <section className="min-h-screen pt-32 pb-24 px-7 md:px-20">
        <div className="max-w-2xl mx-auto">
          <div className="font-mono-brand text-[10px] tracking-[2.5px] uppercase text-primary mb-4 font-medium">
            Legal
          </div>
          <h1 className="text-[clamp(28px,3.5vw,40px)] font-extrabold tracking-[-1.5px] leading-none mb-4">
            {page.title}
          </h1>
          <p className="text-secondary-foreground text-sm leading-relaxed mb-10">
            {page.description}
          </p>
          <div className="prose prose-sm max-w-none text-foreground/80">
            {page.content.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-sm leading-relaxed mb-4 text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Legal;
