import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export default function Datenschutz() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-12">DATENSCHUTZERKLÄRUNG</h1>

          <div className="space-y-8 text-foreground/80 leading-relaxed">
            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-3 uppercase tracking-wide">1. Einleitung und Überblick</h2>
              <p>Wir haben diese Datenschutzerklärung (Fassung: 01.01.2026) verfasst, um Ihnen gemäß der Vorgaben der Datenschutz-Grundverordnung (EU) 2016/679 und anwendbaren nationalen Gesetzen zu erklären, welche personenbezogenen Daten wir als Verantwortliche verarbeiten, in Zukunft verarbeiten werden und welche rechtmäßigen Möglichkeiten Sie haben.</p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-3 uppercase tracking-wide">2. Verantwortliche Stelle</h2>
              <p>
                BATKIC BAU GmbH<br />
                Ringstraße 27<br />
                72135 Dettenhausen<br />
                Telefon: +49 157 3335 5585<br />
                E-Mail: ba.batkic21@outlook.com
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-3 uppercase tracking-wide">3. Erhebung und Speicherung personenbezogener Daten</h2>

              <h3 className="text-lg font-display font-bold text-foreground mb-2 mt-4">3.1 Beim Besuch der Website</h3>
              <p>Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sog. Logfile gespeichert. Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>IP-Adresse des anfragenden Rechners</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Name und URL der abgerufenen Datei</li>
                <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name Ihres Access-Providers</li>
              </ul>

              <h3 className="text-lg font-display font-bold text-foreground mb-2 mt-4">3.2 Bei Nutzung unseres Kontaktformulars</h3>
              <p>Bei Fragen jeglicher Art bieten wir Ihnen die Möglichkeit, mit uns über ein auf der Website bereitgestelltes Formular Kontakt aufzunehmen. Dabei ist die Angabe Ihres Namens und einer gültigen E-Mail-Adresse erforderlich, damit wir wissen, von wem die Anfrage stammt und um diese beantworten zu können. Weitere Angaben können freiwillig getätigt werden.</p>
              <p className="mt-2">Die Datenverarbeitung zum Zwecke der Kontaktaufnahme mit uns erfolgt nach Art. 6 Abs. 1 S. 1 lit. a DSGVO auf Grundlage Ihrer freiwillig erteilten Einwilligung.</p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-3 uppercase tracking-wide">4. Cookies</h2>
              <p>Unsere Internetseiten verwenden derzeit keine Cookies. Sollte sich dies in Zukunft ändern, werden wir diese Datenschutzerklärung entsprechend aktualisieren und Sie gegebenenfalls um Ihre Einwilligung bitten.</p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-3 uppercase tracking-wide">5. Rechte der betroffenen Person</h2>
              <p>Ihnen stehen als betroffene Person nach der DSGVO verschiedene Rechte zu, die sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere Informationen und Kopie der Daten.</li>
                <li><strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie haben das Recht, die Vervollständigung der Sie betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.</li>
                <li><strong>Recht auf Löschung (Art. 17 DSGVO):</strong> Sie haben das Recht, zu verlangen, dass betreffende Daten unverzüglich gelöscht werden.</li>
                <li><strong>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie haben das Recht, die Einschränkung der Verarbeitung zu verlangen.</li>
                <li><strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie haben das Recht, die Sie betreffenden Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.</li>
                <li><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie haben das Recht, jederzeit gegen die Verarbeitung Widerspruch einzulegen.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-3 uppercase tracking-wide">6. Datensicherheit</h2>
              <p>Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird. Ob eine einzelne Seite unseres Internetauftrittes verschlüsselt übertragen wird, erkennen Sie an der geschlossenen Darstellung des Schlüssel- beziehungsweise Schloss-Symbols in der unteren Statusleiste Ihres Browsers.</p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-foreground mb-3 uppercase tracking-wide">7. Aktualität und Änderung dieser Datenschutzerklärung</h2>
              <p>Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Januar 2026. Durch die Weiterentwicklung unserer Website und Angebote darüber oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.</p>
            </section>

            <p className="text-sm text-muted-foreground italic border-t border-border pt-6 mt-8">
              Hinweis: Dies ist eine Platzhalter-Datenschutzerklärung. Der Text sollte vor der Veröffentlichung von einem Rechtsanwalt geprüft werden.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
