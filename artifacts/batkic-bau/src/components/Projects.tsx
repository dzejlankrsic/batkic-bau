import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { Button } from "./ui/button";

const categories = [
  { id: "all", label: "Alle Projekte" },
  { id: "terrassen", label: "Terrassen & Überdachungen" },
  { id: "naturstein", label: "Natursteinmauern" },
  { id: "beton", label: "Beton & Erdarbeiten" },
  { id: "pflaster", label: "Pflaster & Fliesen" },
  { id: "badsanierung", label: "Innenausbau" }
];

const categoryMapping: Record<string, number[]> = {
  "terrassen": [1, 2, 3, 8, 9, 23, 24, 27, 28, 29, 40],
  "naturstein": [4, 5, 6, 12, 14, 15, 16, 19, 20, 21, 31, 37],
  "beton": [7, 10, 11, 22, 30, 33, 34, 41, 42, 43],
  "pflaster": [13, 18, 25, 26, 32, 35, 36, 44],
  "badsanierung": [17, 38, 39]
};

export function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);

  // Generate all projects with their assigned category
  const allProjects = Array.from({ length: 44 }, (_, i) => {
    const id = i + 1;
    // Find category for this image
    let cat = "unknown";
    for (const [key, ids] of Object.entries(categoryMapping)) {
      if (ids.includes(id)) {
        cat = key;
        break;
      }
    }
    return {
      id,
      category: cat,
      url: `${import.meta.env.BASE_URL}projects/project-${id}.jpeg`
    };
  });

  const filteredProjects = activeCategory === "all" 
    ? allProjects 
    : allProjects.filter(p => p.category === activeCategory);

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 12);

  return (
    <section id="projects" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-sans text-xs uppercase tracking-[0.2em] mb-4 block">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-display text-foreground font-light mb-12">
              Ausgewählte Referenzen
            </h2>
          </motion.div>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setShowAll(false);
                }}
                className={`px-4 py-2 text-sm font-sans tracking-wide transition-all ${
                  activeCategory === cat.id 
                    ? "text-primary border-b border-primary" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {visibleProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group relative aspect-[4/3] overflow-hidden bg-muted cursor-pointer"
                onClick={() => setSelectedImage(project.url)}
              >
                <img
                  src={project.url}
                  alt={`Projekt ${project.id}`}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <ZoomIn size={32} strokeWidth={1} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {!showAll && filteredProjects.length > 12 && (
          <div className="mt-16 text-center">
            <Button 
              onClick={() => setShowAll(true)}
              variant="outline" 
              className="rounded-none border-primary text-primary hover:bg-primary hover:text-white uppercase tracking-widest text-xs px-8 py-6"
            >
              Mehr anzeigen
            </Button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white/95 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-8 right-8 text-foreground hover:text-primary transition-colors p-2"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={32} strokeWidth={1} />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4 }}
              src={selectedImage}
              alt="Ganzflächiges Projektbild"
              className="max-w-full max-h-[90vh] object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}