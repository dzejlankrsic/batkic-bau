import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector("#services");
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${import.meta.env.BASE_URL}projects/project-1.jpeg)`,
        }}
      >
        {/* Dark overlay with slight gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-start pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <div className="inline-block px-4 py-1.5 mb-6 bg-primary/20 border-l-4 border-primary text-primary font-semibold text-sm uppercase tracking-widest backdrop-blur-sm">
            Bauen mit Verstand
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-display font-bold text-white leading-[0.9] mb-6 drop-shadow-lg">
            IHR PARTNER FÜR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-300">
              BAU & SANIERUNG
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mb-10 font-medium leading-relaxed">
            Zuverlässig. Professionell. Termingerecht. Wir verwirklichen Ihre Bauprojekte im Hoch-, Tief- und Landschaftsbau mit höchster handwerklicher Qualität.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={scrollToContact} className="text-lg">
              Kostenlose Beratung
            </Button>
            <Button size="lg" variant="outline" onClick={scrollToServices} className="text-lg border-white/30 text-white hover:bg-white hover:text-secondary">
              Unsere Leistungen <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative construction lines */}
      <div className="absolute bottom-0 right-0 w-1/3 h-2 bg-primary z-10" />
      <div className="absolute bottom-0 right-1/3 w-1/4 h-2 bg-white/20 z-10" />
    </section>
  );
}
