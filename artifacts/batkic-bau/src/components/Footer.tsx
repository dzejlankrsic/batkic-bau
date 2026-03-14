export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (href: string) => {
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
    <footer className="bg-foreground text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="md:col-span-4">
            <span className="font-display text-xl tracking-[0.2em] font-medium block mb-6">
              BATKIC BAU
            </span>
            <p className="text-white/60 font-light text-sm leading-relaxed max-w-sm mb-6">
              Exzellenz in Konstruktion und Handwerk. Wir realisieren Bauprojekte mit höchstem Anspruch an Qualität und Ästhetik.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 md:col-start-7">
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] mb-6 text-white/40">Sitemap</h4>
            <ul className="space-y-3">
              <li><button onClick={() => scrollTo("#")} className="text-white/80 hover:text-primary transition-colors font-light text-sm">Startseite</button></li>
              <li><button onClick={() => scrollTo("#about")} className="text-white/80 hover:text-primary transition-colors font-light text-sm">Profil</button></li>
              <li><button onClick={() => scrollTo("#services")} className="text-white/80 hover:text-primary transition-colors font-light text-sm">Expertise</button></li>
              <li><button onClick={() => scrollTo("#projects")} className="text-white/80 hover:text-primary transition-colors font-light text-sm">Portfolio</button></li>
              <li><button onClick={() => scrollTo("#contact")} className="text-white/80 hover:text-primary transition-colors font-light text-sm">Kontakt</button></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-2">
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] mb-6 text-white/40">Rechtliches</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-primary transition-colors font-light text-sm">Impressum</a></li>
              <li><a href="#" className="text-white/80 hover:text-primary transition-colors font-light text-sm">Datenschutz</a></li>
              <li><a href="#" className="text-white/80 hover:text-primary transition-colors font-light text-sm">AGB</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/40 text-xs font-light mb-4 md:mb-0">
            &copy; {currentYear} BATKIC BAU GmbH. Alle Rechte vorbehalten.
          </p>
          <p className="text-white/40 text-xs font-light">
            Crafted for Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}