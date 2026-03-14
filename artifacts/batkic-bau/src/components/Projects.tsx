import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

export function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  // Array of 44 images based on provided zip contents
  const allProjects = Array.from({ length: 44 }, (_, i) => ({
    id: i + 1,
    url: `${import.meta.env.BASE_URL}projects/project-${i + 1}.jpeg`
  }));

  const visibleProjects = showAll ? allProjects : allProjects.slice(0, 12);

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Referenzen</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              PROJEKTGALERIE
            </h3>
            <div className="w-20 h-1.5 bg-primary" />
          </motion.div>
          
          {!showAll && (
            <Button 
              onClick={() => setShowAll(true)}
              variant="outline" 
              className="w-full md:w-auto"
            >
              Alle Projekte ansehen <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          )}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence>
            {visibleProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group relative aspect-square overflow-hidden rounded-sm cursor-pointer bg-muted"
                onClick={() => setSelectedImage(project.url)}
              >
                <img
                  src={project.url}
                  alt={`Projekt ${project.id}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <ZoomIn className="text-white" size={24} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {showAll && (
          <div className="mt-12 text-center">
            <Button 
              onClick={() => setShowAll(false)}
              variant="outline" 
            >
              Weniger anzeigen
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Ganzflächiges Projektbild"
              className="max-w-full max-h-full object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
