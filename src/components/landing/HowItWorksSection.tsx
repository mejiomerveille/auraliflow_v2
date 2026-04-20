import { ScrollReveal } from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import appBoutiques from "@/assets/app-boutiques.png";
import appArrivage from "@/assets/app-arrivage.png";
import appStock from "@/assets/app-stock.png";

const steps = [
  {
    step: "01",
    title: "Créez vos boutiques",
    desc: "Configurez vos points de vente, importez vos produits et invitez votre équipe. Tout est prêt en moins de 5 minutes.",
    image: appBoutiques,
  },
  {
    step: "02",
    title: "Enregistrez vos arrivages",
    desc: "Scannez ou ajoutez vos produits, indiquez les frais additionnels et la référence fournisseur. Le stock est mis à jour partout instantanément.",
    image: appArrivage,
  },
  {
    step: "03",
    title: "Pilotez en temps réel",
    desc: "Visualisez chaque mouvement, anticipez les ruptures et prenez de meilleures décisions grâce à des analyses claires.",
    image: appStock,
  },
];

export function HowItWorksSection() {
  return (
    <section id="how" className="py-28">
      <div className="container">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-3">Comment ça marche</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground">
            Lancé en <span className="italic-accent">3 étapes</span> simples.
          </h2>
        </ScrollReveal>

        <div className="space-y-28">
          {steps.map((s, i) => (
            <ScrollReveal key={s.step}>
              <div className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div>
                  <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4">Étape {s.step}</span>
                  <h3 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-5 leading-tight">{s.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-8 flex gap-4">
                    {["Rapide", "Intuitif", "Sécurisé"].map((tag) => (
                      <span key={tag} className="text-xs font-semibold text-primary px-3 py-1.5 rounded-full bg-rose">
                        ✓ {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.02, rotate: i % 2 ? -2 : 2 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="relative"
                >
                  <div className="absolute -inset-4 gradient-bordeaux opacity-10 blur-2xl rounded-full" />
                  <div className="relative mx-auto w-[280px] rounded-[2.2rem] overflow-hidden ring-1 ring-border shadow-glow bg-card">
                    <img src={s.image} alt={s.title} className="w-full" />
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
