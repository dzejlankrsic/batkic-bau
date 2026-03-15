import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Start", href: "#" },
    { name: "Über uns", href: "#about" },
    { name: "Leistungen", href: "#services" },
    { name: "Projekte", href: "#projects" },
    { name: "Kontakt", href: "#contact" },
  ];

  const isHome = window.location.pathname === import.meta.env.BASE_URL || window.location.pathname === import.meta.env.BASE_URL.replace(/\/$/, "");

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    if (!isHome) {
      window.location.href = href === "#" ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}${href}`;
      return;
    }
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-secondary/95 backdrop-blur-md shadow-lg py-3"
          : "bg-gradient-to-b from-black/80 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div 
            className="cursor-pointer group-hover:opacity-90 transition-opacity"
            onClick={() => scrollTo("#")}
          >
            <img 
              src={`${import.meta.env.BASE_URL}logo-white.svg`} 
              alt="BATKIC BAU GmbH" 
              className="h-20 w-auto -my-4"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="text-white/90 hover:text-primary font-medium text-sm transition-colors uppercase tracking-wider font-display"
              >
                {link.name}
              </button>
            ))}
            <Button 
              onClick={() => scrollTo("#contact")}
              className="hidden lg:flex"
            >
              <Phone className="w-4 h-4 mr-2" />
              Angebot anfragen
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-secondary border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-white/90 hover:text-primary font-display text-xl uppercase tracking-wider py-2 border-b border-white/5"
                >
                  {link.name}
                </button>
              ))}
              <Button onClick={() => scrollTo("#contact")} className="w-full mt-4">
                <Phone className="w-4 h-4 mr-2" />
                Kontakt aufnehmen
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
