import { motion } from "framer-motion";
import { 
  Hammer, 
  BrickWall, 
  SunMedium, 
  LayoutGrid, 
  Bath, 
  Droplets, 
  AlignVerticalSpaceAround, 
  Fence,
  Tractor
} from "lucide-react";

const services = [
  { icon: Tractor, title: "Erdarbeiten", desc: "Fachgerechte Ausgrabungen, Planierungen und Bodenaustausch." },
  { icon: Hammer, title: "Betonarbeiten", desc: "Fundamente, Bodenplatten und massive Betonkonstruktionen." },
  { icon: BrickWall, title: "Maurerarbeiten", desc: "Präzises Mauerwerk für Rohbau, Umbauten und Erweiterungen." },
  { icon: SunMedium, title: "Terrassenbau", desc: "Individuelle Terrassen für Ihren Garten, langlebig und schön." },
  { icon: LayoutGrid, title: "Pflasterarbeiten", desc: "Wege, Einfahrten und Plätze professionell gepflastert." },
  { icon: Bath, title: "Badsanierung", desc: "Komplette Renovierung und Modernisierung Ihres Badezimmers." },
  { icon: Droplets, title: "Abdichtungsarbeiten", desc: "Zuverlässiger Schutz vor Feuchtigkeit und Nässe am Gebäude." },
  { icon: AlignVerticalSpaceAround, title: "Stützmauern", desc: "Sichere Hangabfangungen und optisch ansprechende Mauern." },
  { icon: Fence, title: "Zaunbau", desc: "Stabile und ästhetische Einzäunungen für Ihr Grundstück." }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-secondary text-secondary-foreground relative">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Kernkompetenzen</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              UNSERE LEISTUNGEN
            </h3>
            <div className="w-20 h-1.5 bg-primary mx-auto" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary-foreground/5 border border-white/10 p-8 hover:bg-secondary-foreground/10 transition-colors duration-300 group rounded-sm"
            >
              <div className="w-14 h-14 bg-primary/20 text-primary flex items-center justify-center rounded-sm mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-display font-bold text-white mb-3 tracking-wide">{service.title}</h4>
              <p className="text-white/60 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
