import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <span className="text-primary font-sans text-xs uppercase tracking-[0.2em] mb-4 block">
              Unsere Philosophie
            </span>
            <h2 className="text-3xl md:text-4xl font-display text-foreground mb-8 font-light leading-tight">
              Präzision in <br/>jedem Detail.
            </h2>
            
            <div className="prose prose-lg text-muted-foreground font-light prose-p:leading-relaxed">
              <p>
                Die BATKIC BAU GmbH steht für anspruchsvolles Bauhandwerk und zeitlose Ästhetik. Wir verstehen Architektur nicht nur als Struktur, sondern als Ausdruck von Persönlichkeit und Wertbeständigkeit.
              </p>
              <p>
                Mit einem kompromisslosen Anspruch an Qualität realisieren wir Projekte, die höchste Maßstäbe erfüllen. Ob exklusive Wohnbauprojekte, filigrane Außenanlagen oder detailgetreue Sanierungen – wir begleiten Sie von der ersten Vision bis zur meisterhaften Vollendung.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-display text-foreground mb-2">Erfahrung</h4>
                <p className="text-sm text-muted-foreground font-light">Langjährige Expertise im Premiumsegment.</p>
              </div>
              <div>
                <h4 className="text-xl font-display text-foreground mb-2">Qualität</h4>
                <p className="text-sm text-muted-foreground font-light">Kompromisslose Auswahl von Materialien und Umsetzung.</p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="aspect-[4/5] w-full overflow-hidden">
              <img 
                src={`${import.meta.env.BASE_URL}projects/project-10.jpeg`} 
                alt="Bauarbeiten" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}