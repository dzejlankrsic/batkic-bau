import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const benefits = [
    "Langjährige Erfahrung am Bau",
    "Persönliche Beratung & Planung",
    "Termingerechte Ausführung",
    "Höchste handwerkliche Qualität"
  ];

  return (
    <section id="about" className="py-24 bg-background relative bg-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Über Uns</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              MASSARBEIT AUS LEIDENSCHAFT
            </h3>
            
            <div className="w-20 h-1.5 bg-primary mb-8" />
            
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Die BATKIC BAU GmbH ist Ihr kompetenter Ansprechpartner für anspruchsvolle Bau- und Sanierungsprojekte. Als mittelständisches Bauunternehmen stehen wir für Verlässlichkeit, Transparenz und handwerkliche Perfektion.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Von der ersten Idee bis zur finalen Übergabe begleiten wir Sie partnerschaftlich. Egal ob privater Wohnungsbau, gewerbliche Objekte oder komplexe Außenanlagen – wir setzen Ihre Visionen in massiven Beton und Stein um.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center text-foreground font-medium">
                  <CheckCircle2 className="text-primary w-6 h-6 mr-3 shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px]"
          >
            <div className="absolute top-0 right-0 w-4/5 h-[400px] shadow-2xl rounded-sm overflow-hidden z-10 border-4 border-white">
              <img 
                src={`${import.meta.env.BASE_URL}projects/project-10.jpeg`} 
                alt="Bauarbeiten" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-3/5 h-[300px] shadow-xl rounded-sm overflow-hidden z-20 border-4 border-white">
              <img 
                src={`${import.meta.env.BASE_URL}projects/project-30.jpeg`} 
                alt="Terrassenbau" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-8 border-primary/20 z-0" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 z-0" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
