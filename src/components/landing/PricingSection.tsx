import { ScrollReveal } from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "ECO",
    desc: "Idéal pour démarrer son activité",
    price: { daily: "150 F", monthly: "4 000 F", yearly: "40 000 F" },
    features: [
      "Jusqu'à 500 produits",
      "1 boutique",
      "Suivi ventes & stock",
      "Application mobile",
      "Support par email",
      "Rapports de base",
    ],
    cta: "Commencer avec ECO",
    featured: false,
  },
  {
    name: "PRO",
    desc: "Pour les commerces qui veulent grandir",
    price: { daily: "500 F", monthly: "12 500 F", yearly: "125 000 F" },
    features: [
      "Produits illimités",
      "Boutiques illimitées",
      "Anticipation du stock",
      "Analyses avancées",
      "Multi-utilisateurs & rôles",
      "Accès API complet",
      "Support prioritaire 24/7",
      "Rapports personnalisés",
    ],
    cta: "Passer en PRO",
    featured: true,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-28">
      <div className="container">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-3">Tarifs</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground leading-tight">
            Des prix <span className="italic-accent">justes</span>, sans surprise.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Commencez gratuitement, évoluez quand vous êtes prêt. Aucun engagement.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 0.1}>
              <div className={`rounded-3xl p-10 h-full flex flex-col relative ${
                plan.featured
                  ? "gradient-bordeaux text-primary-foreground shadow-bordeaux"
                  : "bg-card border border-border shadow-soft"
              }`}>
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-primary-foreground text-primary px-4 py-1.5 rounded-full shadow-soft">
                    <Sparkles className="h-3 w-3" />
                    Le plus populaire
                  </div>
                )}
                <h3 className="font-heading text-3xl font-bold">{plan.name}</h3>
                <p className={`text-sm mt-2 ${plan.featured ? "text-primary-foreground/75" : "text-muted-foreground"}`}>
                  {plan.desc}
                </p>

                <div className="mt-8 mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-heading font-bold">{plan.price.monthly}</span>
                    <span className={`text-sm ${plan.featured ? "text-primary-foreground/60" : "text-muted-foreground"}`}>/ mois</span>
                  </div>
                  <p className={`text-xs mt-2 ${plan.featured ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                    soit {plan.price.daily}/jour · {plan.price.yearly}/an (économisez 17 %)
                  </p>
                </div>

                <ul className="space-y-3.5 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <div className={`h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.featured ? "bg-primary-foreground/20" : "bg-rose"
                      }`}>
                        <Check className={`h-3 w-3 ${plan.featured ? "text-primary-foreground" : "text-primary"}`} />
                      </div>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/register" className="mt-10">
                  <Button
                    size="lg"
                    className={`w-full h-12 text-base font-semibold ${
                      plan.featured
                        ? "bg-primary-foreground text-primary hover:bg-rose"
                        : "bg-primary text-primary-foreground hover:bg-bordeaux-dark"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </Link>
                <p className={`text-center text-xs mt-3 ${plan.featured ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  14 jours d'essai gratuit
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
