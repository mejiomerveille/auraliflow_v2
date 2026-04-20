import { ScrollReveal } from "@/components/ScrollReveal";
import appDetail from "@/assets/app-detail.png";
import appTresorerie from "@/assets/app-tresorerie.png";
import appAbonnements from "@/assets/app-abonnements.png";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Suivi des ventes & marge brute en temps réel",
  "Trésorerie : entrées, dépenses, investissements",
  "Détails produits enrichis avec photos & catégories",
  "Plans flexibles ECO et PRO adaptés à votre taille",
];

export function ShowcaseSection() {
  return (
    <section className="py-28 bg-bordeaux-dark text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary-foreground/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <p className="text-sm font-semibold text-rose uppercase tracking-[0.2em] mb-3">L'application Auraliflow</p>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold leading-tight mb-6">
              Votre commerce <br />
              <span className="italic text-rose">au creux de la main.</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              Pensée mobile-first, l'application Auraliflow vous accompagne sur le terrain : enregistrez une vente, suivez votre trésorerie, contrôlez votre stock — où que vous soyez.
            </p>
            <ul className="space-y-4">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-rose flex-shrink-0 mt-0.5" />
                  <span className="text-primary-foreground/90">{h}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative h-[600px]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[260px] rounded-[2.2rem] overflow-hidden shadow-glow ring-1 ring-primary-foreground/20 z-20">
                <img src={appDetail} alt="Détails produit" className="w-full" />
              </div>
              <div className="absolute bottom-0 left-0 w-[230px] rounded-[2rem] overflow-hidden shadow-card ring-1 ring-primary-foreground/20 rotate-[-8deg] z-10">
                <img src={appTresorerie} alt="Trésorerie" className="w-full" />
              </div>
              <div className="absolute bottom-0 right-0 w-[230px] rounded-[2rem] overflow-hidden shadow-card ring-1 ring-primary-foreground/20 rotate-[8deg]">
                <img src={appAbonnements} alt="Abonnements" className="w-full" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
