import { Link } from "wouter";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <div className="max-w-md w-full text-center px-4">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center">
            <AlertCircle className="w-10 h-10 text-primary" />
          </div>
        </div>
        <h1 className="text-4xl font-display font-bold text-foreground mb-4">404 - Seite nicht gefunden</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Entschuldigung, die von Ihnen gesuchte Seite existiert leider nicht oder wurde verschoben.
        </p>
        <Link href="/" className="inline-block">
          <Button size="lg" className="w-full sm:w-auto">
            Zurück zur Startseite
          </Button>
        </Link>
      </div>
    </div>
  );
}
