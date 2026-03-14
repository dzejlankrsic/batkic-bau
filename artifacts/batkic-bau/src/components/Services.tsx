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
  { icon: Tractor, title: "Erdarbeiten", desc: "Präzise Modellierung und Fundamentierung als Basis für Beständigkeit." },
  { icon: Hammer, title: "Betonarbeiten", desc: "Strukturelle Eleganz durch makellose Betonkonstruktionen." },
  { icon: BrickWall, title: "Maurerarbeiten", desc: "Handwerkliche Perfektion in der Errichtung von Tragwerken." },
  { icon: SunMedium, title: "Terrassen & Outdoor", desc: "Nahtlose Übergänge zwischen Wohnraum und Natur." },
  { icon: LayoutGrid, title: "Pflasterarbeiten", desc: "Repräsentative Wege und Flächen in höchster Verlegekunst." },
  { icon: Bath, title: "Innenausbau", desc: "Exklusive Raumkonzepte und anspruchsvolle Badsanierungen." },
  { icon: Droplets, title: "Abdichtung", desc: "Nachhaltiger Schutz und Sicherung der Bausubstanz." },
  { icon: AlignVerticalSpaceAround, title: "Stützmauern", desc: "Architektonische Hangsicherung durch edle Natursteinmauern." },
  { icon: Fence, title: "Einfriedungen", desc: "Stilvolle Grundstücksabgrenzungen in harmonischem Design." }
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20 md:flex md:justify-between md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-primary font-sans text-xs uppercase tracking-[0.2em] mb-4 block">
              Kompetenzen
            </span>
            <h2 className="text-3xl md:text-4xl font-display text-foreground font-light leading-tight">
              Unser Leistungsspektrum
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="mb-6 text-primary">
                <service.icon size={32} strokeWidth={1} />
              </div>
              <h4 className="text-lg font-display text-foreground mb-3">{service.title}</h4>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}