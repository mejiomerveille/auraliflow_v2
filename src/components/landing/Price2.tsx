import { useState } from "react";
import { Check, CreditCard, Gift, LogOut, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Period = "short" | "long";

type Plan = {
  name: string;
  desc: string;
  shortLabel: string; // Jour / Mois
  longLabel: string; // Semaine / An
  shortPrice: string;
  longPrice: string;
  shortBilling: string;
  longBilling: string;
  features: { label: string; value: string }[];
  featured?: boolean;
};

const plans: Plan[] = [
  {
    name: "ECO",
    desc: "Plan de démarrage",
    shortLabel: "Jour",
    longLabel: "Semaine",
    shortPrice: "190 FCFA",
    longPrice: "1 200 FCFA",
    shortBilling: "facturé chaque jour",
    longBilling: "facturé chaque semaine",
    features: [
      { label: "1 utilisateur actif", value: "5" },
      { label: "Gestion des arrivages", value: "50" },
      { label: "Suivi des ventes", value: "1" },
      { label: "Stock en temps réel", value: "1" },
      { label: "1 site de stockage", value: "1" },
      { label: "Support par email", value: "1" },
    ],
  },
  {
    name: "PRO",
    desc: "Plan pour équipes",
    shortLabel: "Mois",
    longLabel: "An",
    shortPrice: "5 000 FCFA",
    longPrice: "50 000 FCFA",
    shortBilling: "facturé chaque mois",
    longBilling: "facturé chaque année",
    features: [
      { label: "Jusqu'à 5 utilisateurs", value: "20" },
      { label: "Calcul automatique des marges", value: "illimité" },
      { label: "Gestion multi-sites (3 sites)", value: "3" },
      { label: "Rapports analytiques avancés", value: "3" },
      { label: "Exportation des données", value: "3" },
      { label: "Support prioritaire 24/7", value: "3" },
    ],
    featured: true,
  },
  {
    name: "PREMIUM",
    desc: "Plan pour grandes structures",
    shortLabel: "Mois",
    longLabel: "An",
    shortPrice: "12 000 FCFA",
    longPrice: "120 000 FCFA",
    shortBilling: "facturé chaque mois",
    longBilling: "facturé chaque année",
    features: [
      { label: "Utilisateurs illimités", value: "illimité" },
      { label: "Sites de stockage illimités", value: "illimité" },
      { label: "Pistes d'audit avancées", value: "illimité" },
      { label: "Gestion documentaire complète", value: "illimité" },
      { label: "API dédiée pour Marketplace", value: "illimité" },
      { label: "Gestionnaire de compte dédié", value: "illimité" },
    ],
  },
];

const PlanCard = ({ plan }: { plan: Plan }) => {
  const [period, setPeriod] = useState<Period>("short");
  const isShort = period === "short";

  return (
    <div id="pricing" className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-card shadow-[0_20px_60px_-20px_hsl(var(--aurali)/0.25)] ring-1 ring-aurali/10">
      {plan.featured && (
        <div className="absolute right-4 top-4 z-10 inline-flex items-center gap-1 rounded-full bg-aurali-pale px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-aurali">
          <Sparkles className="h-3 w-3" />
          Populaire
        </div>
      )}

      {/* Header bordeaux */}
      <div className="rounded-b-3xl bg-aurali px-8 py-10 text-center">
        <h3 className="text-3xl font-extrabold tracking-wide text-primary-foreground">
          {plan.name}
        </h3>
        <p className="mt-2 text-sm text-primary-foreground/85">{plan.desc}</p>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col px-7 pb-7 pt-7">
        {/* Toggle */}
        <div className="inline-flex w-fit items-center gap-1 rounded-full p-1">
          <button
            type="button"
            onClick={() => setPeriod("short")}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-semibold transition-colors",
              isShort
                ? "border border-aurali/40 bg-background text-aurali"
                : "bg-muted text-muted-foreground hover:text-foreground",
            )}
          >
            {plan.shortLabel}
          </button>
          <button
            type="button"
            onClick={() => setPeriod("long")}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-semibold transition-colors",
              !isShort
                ? "border border-aurali/40 bg-background text-aurali"
                : "bg-muted text-muted-foreground hover:text-foreground",
            )}
          >
            {plan.longLabel}
          </button>
        </div>

        {/* Price */}
        <div className="mt-6">
          <div className="text-4xl font-extrabold tracking-tight text-aurali">
            {isShort ? plan.shortPrice : plan.longPrice}
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            {isShort ? plan.shortBilling : plan.longBilling}
          </p>
        </div>

        <div className="my-6 h-px w-full bg-border" />

        {/* Features */}
        <ul className="space-y-4">
          {plan.features.map((f) => (
            <li key={f.label} className="flex items-center gap-3 text-[15px] text-foreground">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-aurali-pale">
                <Check className="h-4 w-4 text-aurali" strokeWidth={3} />
              </span>
              <span>
                {f.label}
                 {/* <span className="text-muted-foreground">({f.value})</span> */}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row">
          <Button
            variant="outline"
            className="flex-1 rounded-full border-aurali/40 text-aurali hover:bg-aurali-pale hover:text-aurali"
          >
            <Gift className="h-4 w-4" />
            Essai (14j)
          </Button>
          <Button className="flex-1 rounded-full bg-aurali text-primary-foreground hover:bg-aurali-dark">
            <CreditCard className="h-4 w-4" />
            Souscrire
          </Button>
        </div>
      </div>
    </div>
  );
};

const PricingSection2 = () => {
  return (
    <section className="relative w-full bg-background py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        {/* Header bar */}
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-lg font-bold text-foreground sm:text-xl">
            Abonnements
          </h2>
        </div>

        {/* Title */}
        <div className="mb-14 max-w-2xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Choisissez votre forfait
          </h1>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Débloquez tout le potentiel de votre business en souscrivant à l'un
            de nos plans adaptés à vos besoins.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection2;
