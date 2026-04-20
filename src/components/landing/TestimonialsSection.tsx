import { ScrollReveal } from "@/components/ScrollReveal";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Aminata Diallo", role: "Cosmétiques · Dakar", text: "Avant Auraliflow, je perdais 2h chaque soir à compter mon stock. Aujourd'hui, tout est automatique. Mon chiffre d'affaires a augmenté de 35 % en 4 mois.", rating: 5 },
  { name: "Jean-Pierre Mboko", role: "Électronique · Kinshasa", text: "L'anticipation du stock m'évite les ruptures sur mes meilleurs produits. C'est exactement ce qui manquait au commerce africain.", rating: 5 },
  { name: "Fatou Ndiaye", role: "Mode & Accessoires · Abidjan", text: "Je gère 4 boutiques depuis mon téléphone. Les transferts entre sites se font en un clic. Bluffant.", rating: 5 },
  { name: "Mervin K.", role: "Parfumerie · Douala", text: "L'interface est belle, claire, pensée pour nous. Mes employés se sont adaptés en une journée.", rating: 5 },
  { name: "Cynthia Ondoa", role: "Boutique multi-services · Yaoundé", text: "Le suivi des marges m'a fait découvrir que certains produits me faisaient perdre de l'argent. J'ai pu réajuster.", rating: 5 },
  { name: "Ibrahim Sow", role: "Électroménager · Bamako", text: "Le support client est exceptionnel. Une réponse en moins d'une heure, à chaque fois.", rating: 5 },
  { name: "Adjoa Mensah", role: "Épicerie fine · Accra", text: "Je recommande Auraliflow à tous les commerçants. C'est devenu indispensable pour mon activité.", rating: 5 },
  { name: "Patrick Tchami", role: "Pharmacie · Brazzaville", text: "La traçabilité des arrivages est parfaite. Plus aucun doute sur les quantités reçues.", rating: 5 },
  { name: "Sarah Adebayo", role: "Bijouterie · Lagos", text: "Le mobile-first change tout. Je gère mes ventes même quand je suis en déplacement chez les fournisseurs.", rating: 5 },
  { name: "Omar Bensaid", role: "Textile · Casablanca", text: "Les rapports financiers automatiques m'ont fait gagner 10h par semaine sur ma comptabilité.", rating: 5 },
  { name: "Nadia Kouassi", role: "Restaurant · Lomé", text: "Auraliflow gère mon stock cuisine ET mes ventes en salle. Un seul outil, zéro friction.", rating: 5 },
  { name: "Eric Nguema", role: "Quincaillerie · Libreville", text: "J'ai testé 3 logiciels avant. Aucun n'arrive à la cheville d'Auraliflow pour le marché africain.", rating: 5 },
];

const col1 = testimonials.slice(0, 4);
const col2 = testimonials.slice(4, 8);
const col3 = testimonials.slice(8, 12);

function Card({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="rounded-2xl bg-card p-6 border border-border shadow-soft">
      <Quote className="h-6 w-6 text-primary/30 mb-3" />
      <p className="text-sm text-foreground leading-relaxed mb-5">"{t.text}"</p>
      <div className="flex items-center gap-3 pt-4 border-t border-border">
        <div className="h-10 w-10 rounded-full gradient-bordeaux flex items-center justify-center text-primary-foreground font-heading font-bold text-sm">
          {t.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
        </div>
        <div className="flex-1">
          <p className="font-heading font-semibold text-sm text-foreground">{t.name}</p>
          <p className="text-xs text-muted-foreground">{t.role}</p>
        </div>
        <div className="flex gap-0.5">
          {Array.from({ length: t.rating }).map((_, j) => (
            <Star key={j} className="h-3 w-3 fill-primary text-primary" />
          ))}
        </div>
      </div>
    </div>
  );
}

function Column({ items, animation }: { items: typeof testimonials; animation: string }) {
  // Duplicate items for seamless loop
  const looped = [...items, ...items];
  return (
    <div className="relative h-[600px] overflow-hidden">
      <div className={`flex flex-col gap-5 ${animation}`}>
        {looped.map((t, i) => (
          <Card key={i} t={t} />
        ))}
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 gradient-rose opacity-60" />
      <div className="container relative">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-3">Témoignages</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground leading-tight">
            <span className="italic-accent">2 500+</span> commerçants africains <br />nous font déjà confiance.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            De Dakar à Nairobi, Auraliflow accompagne des milliers de boutiques au quotidien.
          </p>
        </ScrollReveal>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Column items={col1} animation="scroll-up" />
            <div className="hidden md:block"><Column items={col2} animation="scroll-down" /></div>
            <div className="hidden md:block"><Column items={col3} animation="scroll-up-slow" /></div>
          </div>
          {/* Fade overlays */}
          <div className="pointer-events-none absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent" />
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>
      </div>
    </section>
  );
}
