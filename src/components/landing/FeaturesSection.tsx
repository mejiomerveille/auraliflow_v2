import { ScrollReveal } from "@/components/ScrollReveal";
import { Package, TrendingUp, PieChart, Users, ShieldCheck, Zap, Bell, Store, Boxes } from "lucide-react";

const features = [
  { icon: Boxes, title: "Inventaire intelligent", desc: "Centralisez tous vos produits, variantes et SKU. Multi-boutiques, multi-entrepôts, en temps réel." },
  { icon: TrendingUp, title: "Suivi des ventes", desc: "Chaque vente enregistrée instantanément. Marge brute, chiffre d'affaires et tendances claires." },
  { icon: Bell, title: "Anticipation du stock", desc: "Alertes intelligentes avant la rupture. Auraliflow prédit vos besoins selon vos ventes passées." },
  { icon: PieChart, title: "Analyse des profits", desc: "Comprenez vos marges, vos coûts et votre rentabilité par produit, boutique ou période." },
  { icon: Store, title: "Multi-boutiques", desc: "Gérez tous vos points de vente depuis une seule application. Transferts entre sites en un clic." },
  { icon: Users, title: "Gestion clients", desc: "Fichiers clients, historique d'achats, créances et fidélité — tout au même endroit." },
  { icon: ShieldCheck, title: "Traçabilité totale", desc: "Chaque mouvement de stock est tracé : arrivages, ventes, transferts, ajustements." },
  { icon: Package, title: "Arrivages simplifiés", desc: "Enregistrez un arrivage en 30 secondes avec frais additionnels et référence externe." },
  { icon: Zap, title: "API & intégrations", desc: "Connectez Auraliflow à votre POS, votre marketplace ou votre comptabilité." },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-28 relative">
      <div className="absolute inset-0 gradient-rose opacity-50" />
      <div className="container relative">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-3">Fonctionnalités</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground leading-tight">
            Tout ce qu'il faut pour <span className="italic-accent">piloter</span> votre commerce.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            De l'inventaire aux décisions stratégiques — Auraliflow remplace 5 outils par une seule plateforme intuitive.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 0.06}>
              <div className="group rounded-3xl bg-card p-7 border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="h-12 w-12 rounded-2xl bg-rose flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <f.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
