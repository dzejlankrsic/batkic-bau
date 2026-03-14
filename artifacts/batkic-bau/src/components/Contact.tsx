import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, "Bitte geben Sie einen Namen ein."),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail Adresse ein."),
  phone: z.string().min(6, "Bitte geben Sie eine Telefonnummer ein."),
  message: z.string().min(10, "Ihre Nachricht muss mindestens 10 Zeichen lang sein."),
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-muted relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Kontakt</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                LASSEN SIE UNS SPRECHEN
              </h3>
              <div className="w-20 h-1.5 bg-primary mb-6" />
              <p className="text-muted-foreground text-lg leading-relaxed">
                Haben Sie ein konkretes Projekt im Kopf oder benötigen Sie fachkundige Beratung? Zögern Sie nicht, uns zu kontaktieren. Wir erstellen Ihnen gerne ein unverbindliches Angebot.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-card border border-border flex items-center justify-center shrink-0 mr-4 shadow-sm">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground uppercase tracking-wide font-display">Adresse</h4>
                  <p className="text-muted-foreground mt-1">Ringstraße 27<br />72135 Dettenhausen</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-card border border-border flex items-center justify-center shrink-0 mr-4 shadow-sm">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground uppercase tracking-wide font-display">Telefon</h4>
                  <p className="text-muted-foreground mt-1">0157 33355585</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-card border border-border flex items-center justify-center shrink-0 mr-4 shadow-sm">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground uppercase tracking-wide font-display">E-Mail</h4>
                  <p className="text-muted-foreground mt-1">ba.batkic21@outlook.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-card border border-border flex items-center justify-center shrink-0 mr-4 shadow-sm">
                  <Clock className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground uppercase tracking-wide font-display">Bürozeiten</h4>
                  <p className="text-muted-foreground mt-1">Mo - Fr: 07:00 - 17:00 Uhr<br />Sa: nach Vereinbarung</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card p-8 shadow-xl border border-border relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-primary" />
            
            <h4 className="text-2xl font-display font-bold text-foreground mb-6 uppercase tracking-wide">
              Schreiben Sie uns
            </h4>

            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 text-green-800 p-6 rounded border border-green-200 text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h5 className="font-bold text-lg mb-2">Vielen Dank für Ihre Nachricht!</h5>
                <p>Wir haben Ihre Anfrage erhalten und werden uns schnellstmöglich bei Ihnen melden.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Input 
                    placeholder="Ihr Name" 
                    {...register("name")}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Input 
                      placeholder="E-Mail Adresse" 
                      type="email"
                      {...register("email")}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <Input 
                      placeholder="Telefonnummer" 
                      {...register("phone")}
                      className={errors.phone ? "border-destructive" : ""}
                    />
                    {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>}
                  </div>
                </div>

                <div>
                  <Textarea 
                    placeholder="Ihre Nachricht / Projektbeschreibung" 
                    {...register("message")}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && <p className="text-destructive text-sm mt-1">{errors.message.message}</p>}
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Wird gesendet..." : "Nachricht absenden"}
                </Button>
              </form>
            )}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
