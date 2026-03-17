import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

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

  const scrollToElement = (hash: string) => {
    if (hash === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.querySelector(hash);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);

    if (location === "/") {
      scrollToElement(href);
    } else {
      setLocation("/");
      const hash = href === "#" ? "" : href;
      if (hash) {
        window.location.hash = hash;
      }
      setTimeout(() => {
        if (hash) {
          scrollToElement(hash);
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 200);
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
            onClick={() => handleNavClick("#")}
          >
            <img 
              src={`${import.meta.env.BASE_URL}logo-original.png`} 
              alt="BATKIC BAU GmbH" 
              className="h-16 w-auto -my-4"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-white/90 hover:text-primary font-medium text-sm transition-colors uppercase tracking-wider font-display"
              >
                {link.name}
              </button>
            ))}
            <Button 
              onClick={() => handleNavClick("#contact")}
              className="hidden lg:flex"
            >
              <Phone className="w-4 h-4 mr-2" />
              Angebot anfragen
            </Button>
          </nav>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

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
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-white/90 hover:text-primary font-display text-xl uppercase tracking-wider py-2 border-b border-white/5"
                >
                  {link.name}
                </button>
              ))}
              <Button onClick={() => handleNavClick("#contact")} className="w-full mt-4">
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
