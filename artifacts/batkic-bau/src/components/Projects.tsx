import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "./ui/button";

type Category = "Alle" | "Terrassenbau" | "Stützmauern" | "Badsanierung" | "Innenausbau";

const categoryMap: Record<Exclude<Category, "Alle">, number[]> = {
  Terrassenbau: [1, 2, 3, 8, 9, 23, 24, 27, 28, 29, 30, 32, 34, 35, 36, 40, 41, 42, 44, 47],
  Stützmauern: [4, 5, 6, 7, 10, 12, 13, 22, 31, 33, 37, 43, 45, 46, 48],
  Badsanierung: [11, 19, 20, 21, 25, 26, 38, 39],
  Innenausbau: [14, 15, 16, 17, 18],
};

const categoryLabels: Record<Category, string> = {
  Alle: "Alle Projekte",
  Terrassenbau: "Terrassenbau",
  Stützmauern: "Stützmauern",
  Badsanierung: "Badsanierung",
  Innenausbau: "Innenausbau",
};

const allProjects = Array.from({ length: 48 }, (_, i) => ({
  id: i + 1,
  url: `${import.meta.env.BASE_URL}projects/project-${i + 1}.jpeg`,
}));

export function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category>("Alle");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects =
    activeCategory === "Alle"
      ? allProjects
      : allProjects.filter((p) => categoryMap[activeCategory].includes(p.id));

  const INITIAL_COUNT = 12;
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, INITIAL_COUNT);
  const hasMore = filteredProjects.length > INITIAL_COUNT;

  const categories: Category[] = ["Alle", "Terrassenbau", "Stützmauern", "Badsanierung", "Innenausbau"];

  const lightboxIndex = selectedImage
    ? filteredProjects.findIndex((p) => p.url === selectedImage)
    : -1;

  const navigateLightbox = (direction: "prev" | "next") => {
    if (lightboxIndex === -1) return;
    const newIndex =
      direction === "prev"
        ? (lightboxIndex - 1 + filteredProjects.length) % filteredProjects.length
        : (lightboxIndex + 1) % filteredProjects.length;
    setSelectedImage(filteredProjects[newIndex].url);
  };

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
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
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => {
            const count =
              cat === "Alle" ? allProjects.length : categoryMap[cat].length;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setShowAll(false);
                }}
                className={`px-5 py-2.5 rounded-sm text-sm font-semibold tracking-wide uppercase transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                {categoryLabels[cat]}{" "}
                <span
                  className={`ml-1.5 text-xs ${
                    activeCategory === cat ? "text-white/70" : "text-muted-foreground/60"
                  }`}
                >
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
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

        {hasMore && (
          <div className="mt-12 text-center">
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              className="w-full md:w-auto"
            >
              {showAll ? (
                "Weniger anzeigen"
              ) : (
                <>
                  {activeCategory === "Alle" ? "Alle Projekte ansehen" : `Alle ${categoryLabels[activeCategory]} ansehen`}{" "}
                  <ChevronRight className="ml-2 w-4 h-4" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>

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
              className="absolute top-6 right-6 text-white/70 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={32} />
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white hover:bg-white/10 p-3 rounded-full transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox("prev");
              }}
            >
              <ChevronLeft size={32} />
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white hover:bg-white/10 p-3 rounded-full transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox("next");
              }}
            >
              <ChevronRight size={32} />
            </button>

            <motion.img
              key={selectedImage}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Ganzflächiges Projektbild"
              className="max-w-full max-h-full object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm">
              {lightboxIndex + 1} / {filteredProjects.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
