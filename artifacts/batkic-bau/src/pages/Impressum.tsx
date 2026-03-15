import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <a
            href={import.meta.env.BASE_URL}
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zur Startseite
          </a>

          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-12">IMPRESSUM</h1>

          <div className="space-y-8 text-foreground/80 leading-relaxed">
            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-3 uppercase tracking-wide">Angaben gemäß § 5 TMG</h2>
              <p>
                BATKIC BAU GmbH<br />
                Ringstraße 27<br />
                72135 Dettenhausen
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-3 uppercase tracking-wide">Vertreten durch</h2>
              <p>Geschäftsführer: Ba Batkic</p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-3 uppercase tracking-wide">Kontakt</h2>
              <p>
                Telefon: +49 157 3335 5585<br />
                E-Mail: ba.batkic21@outlook.com
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-3 uppercase tracking-wide">Registereintrag</h2>
              <p>
                Eintragung im Handelsregister.<br />
                Registergericht: Amtsgericht Tübingen<br />
                Registernummer: HRB 123456
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-3 uppercase tracking-wide">Umsatzsteuer-ID</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
                DE 123 456 789
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-3 uppercase tracking-wide">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p>
                Ba Batkic<br />
                Ringstraße 27<br />
                72135 Dettenhausen
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-3 uppercase tracking-wide">Haftungsausschluss</h2>

              <h3 className="text-lg font-display font-bold text-foreground mb-2 mt-4">Haftung für Inhalte</h3>
              <p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>

              <h3 className="text-lg font-display font-bold text-foreground mb-2 mt-4">Haftung für Links</h3>
              <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>

              <h3 className="text-lg font-display font-bold text-foreground mb-2 mt-4">Urheberrecht</h3>
              <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
            </section>

            <p className="text-sm text-muted-foreground italic border-t border-border pt-6 mt-8">
              Hinweis: Dies ist ein Platzhalter-Impressum. Bitte lassen Sie den Inhalt von einem Rechtsanwalt prüfen, bevor Sie die Seite veröffentlichen.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
