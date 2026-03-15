import { MapPin, Phone } from "lucide-react";
import { useLocation } from "wouter";
import { Link } from "wouter";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [location, setLocation] = useLocation();

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
    <footer className="bg-secondary text-white pt-16 pb-8 border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 lg:col-span-2">
            <div className="mb-6">
              <img 
                src={`${import.meta.env.BASE_URL}logo-white.svg`} 
                alt="BATKIC BAU GmbH" 
                className="h-14 w-auto"
              />
            </div>
            <p className="text-white/60 mb-6 max-w-sm leading-relaxed">
              Ihr kompetenter Baupartner für anspruchsvolle Projekte. Wir bauen auf Qualität, Erfahrung und Zuverlässigkeit.
            </p>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 text-white/60">
              <span className="flex items-center"><MapPin className="w-4 h-4 mr-2 shrink-0" /> Dettenhausen</span>
              <span className="flex items-center"><Phone className="w-4 h-4 mr-2 shrink-0" /> +49 157 3335 5585</span>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-xl uppercase tracking-wider mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li><button onClick={() => handleNavClick("#")} className="text-white/60 hover:text-primary transition-colors">Startseite</button></li>
              <li><button onClick={() => handleNavClick("#about")} className="text-white/60 hover:text-primary transition-colors">Über uns</button></li>
              <li><button onClick={() => handleNavClick("#services")} className="text-white/60 hover:text-primary transition-colors">Leistungen</button></li>
              <li><button onClick={() => handleNavClick("#projects")} className="text-white/60 hover:text-primary transition-colors">Referenzen</button></li>
              <li><button onClick={() => handleNavClick("#contact")} className="text-white/60 hover:text-primary transition-colors">Kontakt</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-xl uppercase tracking-wider mb-6">Rechtliches</h4>
            <ul className="space-y-3">
              <li><Link href="/impressum" className="text-white/60 hover:text-primary transition-colors">Impressum</Link></li>
              <li><Link href="/datenschutz" className="text-white/60 hover:text-primary transition-colors">Datenschutz</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/40 text-sm mb-4 md:mb-0">
            &copy; {currentYear} BATKIC BAU GmbH. Alle Rechte vorbehalten.
          </p>
          <p className="text-white/40 text-sm">
            Entwickelt für höchste Bauansprüche.
          </p>
        </div>
      </div>
    </footer>
  );
}
