import { motion } from "framer-motion";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${import.meta.env.BASE_URL}hero.png)`,
        }}
      >
        {/* Subtle, elegant overlay */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col items-center text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl flex flex-col items-center"
        >
          <span className="text-white/80 font-sans text-xs uppercase tracking-[0.3em] mb-6 block">
            Architektur & Handwerk
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display text-white leading-tight mb-8 font-light">
            Visionen in <br className="hidden sm:block" />
            <span className="font-medium">Form & Struktur</span> vollendet
          </h1>
          
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mb-12 font-light leading-relaxed">
            Wir gestalten Lebensräume durch exzellentes Bauhandwerk. Von anspruchsvollem Hochbau bis zu eleganten Außenanlagen.
          </p>
          
          <Button 
            size="lg" 
            onClick={scrollToContact} 
            className="text-sm uppercase tracking-widest font-light px-8 py-6 rounded-none bg-primary hover:bg-primary/90 text-white border-none"
          >
            Projekt anfragen
          </Button>
        </motion.div>
      </div>
    </section>
  );
}