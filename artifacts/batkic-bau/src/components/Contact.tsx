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
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <span className="text-primary font-sans text-xs uppercase tracking-[0.2em] mb-4 block">
                Kontakt
              </span>
              <h2 className="text-3xl md:text-4xl font-display text-foreground font-light mb-6">
                Ihr Weg zu uns.
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed max-w-md">
                Lassen Sie uns über Ihr nächstes Projekt sprechen. Wir beraten Sie umfassend und erarbeiten maßgeschneiderte Lösungen für Ihre Anforderungen.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="text-primary mt-1 mr-6">
                  <MapPin size={24} strokeWidth={1} />
                </div>
                <div>
                  <h4 className="text-sm font-sans uppercase tracking-widest text-foreground mb-1">Standort</h4>
                  <p className="text-muted-foreground font-light">Musterstraße 1<br />12345 Musterstadt</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-primary mt-1 mr-6">
                  <Phone size={24} strokeWidth={1} />
                </div>
                <div>
                  <h4 className="text-sm font-sans uppercase tracking-widest text-foreground mb-1">Telefon</h4>
                  <p className="text-muted-foreground font-light">+49 (0) 123 4567890</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-primary mt-1 mr-6">
                  <Mail size={24} strokeWidth={1} />
                </div>
                <div>
                  <h4 className="text-sm font-sans uppercase tracking-widest text-foreground mb-1">E-Mail</h4>
                  <p className="text-muted-foreground font-light">info@batkic-bau.de</p>
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
            className="bg-white p-10 md:p-12 shadow-sm"
          >
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-4"
              >
                <div className="w-16 h-16 border border-primary rounded-full flex items-center justify-center text-primary mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h5 className="font-display text-xl">Vielen Dank.</h5>
                <p className="text-muted-foreground font-light">Ihre Anfrage wurde erfolgreich übermittelt. Wir setzen uns umgehend mit Ihnen in Verbindung.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <Input 
                    placeholder="Name" 
                    {...register("name")}
                    className={`rounded-none border-b-2 border-t-0 border-l-0 border-r-0 bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary ${errors.name ? "border-destructive" : "border-border"}`}
                  />
                  {errors.name && <p className="text-destructive text-xs mt-2">{errors.name.message}</p>}
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Input 
                      placeholder="E-Mail" 
                      type="email"
                      {...register("email")}
                      className={`rounded-none border-b-2 border-t-0 border-l-0 border-r-0 bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary ${errors.email ? "border-destructive" : "border-border"}`}
                    />
                    {errors.email && <p className="text-destructive text-xs mt-2">{errors.email.message}</p>}
                  </div>
                  <div>
                    <Input 
                      placeholder="Telefon" 
                      {...register("phone")}
                      className={`rounded-none border-b-2 border-t-0 border-l-0 border-r-0 bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary ${errors.phone ? "border-destructive" : "border-border"}`}
                    />
                    {errors.phone && <p className="text-destructive text-xs mt-2">{errors.phone.message}</p>}
                  </div>
                </div>

                <div>
                  <Textarea 
                    placeholder="Ihre Nachricht" 
                    {...register("message")}
                    className={`rounded-none border-b-2 border-t-0 border-l-0 border-r-0 bg-transparent px-0 resize-none min-h-[120px] focus-visible:ring-0 focus-visible:border-primary ${errors.message ? "border-destructive" : "border-border"}`}
                  />
                  {errors.message && <p className="text-destructive text-xs mt-2">{errors.message.message}</p>}
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full rounded-none bg-foreground hover:bg-foreground/90 text-white uppercase tracking-widest text-xs py-6 mt-4"
                >
                  {isSubmitting ? "Wird gesendet..." : "Anfrage senden"}
                </Button>
              </form>
            )}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}