import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MOCK_FAQ, getVisibleItems } from "@/lib/cms";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = getVisibleItems(MOCK_FAQ);

  return (
    <>
      <Navbar />
      <section className="min-h-screen pt-32 pb-24 px-7 md:px-20">
        <div className="max-w-2xl mx-auto">
          <div className="font-mono-brand text-[10px] tracking-[2.5px] uppercase text-primary mb-4 font-medium">
            FAQ
          </div>
          <h1 className="text-[clamp(32px,4vw,48px)] font-extrabold tracking-[-1.5px] leading-none mb-4">
            Preguntas frecuentes
          </h1>
          <p className="text-secondary-foreground text-sm leading-relaxed mb-10">
            Respuestas a las consultas más comunes sobre nuestros servicios.
          </p>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="border-foreground/10">
                <AccordionTrigger className="text-sm font-bold text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FAQ;
