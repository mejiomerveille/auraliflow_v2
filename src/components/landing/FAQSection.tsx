import { ScrollReveal } from "@/components/ScrollReveal";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  { q: "Puis-je essayer Auraliflow gratuitement ?", a: "Oui, vous bénéficiez de 14 jours d'essai gratuit sur le plan PRO, sans carte bancaire requise. Vous pouvez ensuite choisir ECO ou PRO selon vos besoins." },
  // { q: "Auraliflow fonctionne-t-il hors ligne ?", a: "L'application mobile fonctionne en mode dégradé hors ligne. Vos ventes sont enregistrées localement puis synchronisées dès que la connexion revient." },
  { q: "Combien de boutiques puis-je gérer ?", a: "Le plan ECO inclut 1 boutique. Le plan PRO offre des boutiques illimitées avec transferts entre sites en un clic." },
  { q: "Mes données sont-elles sécurisées ?", a: "Absolument. Vos données sont hébergées dans des datacenters certifiés, chiffrées en transit et au repos, et sauvegardées quotidiennement." },
  { q: "Quels modes de paiement acceptez-vous ?", a: "Mobile Money (Orange, MTN, Wave, Moov), virement bancaire, carte de crédit. Paiement en FCFA, EUR ou USD." },
  { q: "Y a-t-il une API pour intégrer mes outils ?", a: "Oui, Auraliflow propose une API REST complète et documentée pour connecter votre POS, marketplace ou logiciel comptable." },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-28">
      <div className="container max-w-3xl">
        <ScrollReveal className="text-center mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-3">Questions fréquentes</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground">
            On répond à <span className="italic-accent">toutes</span> vos questions.
          </h2>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <ScrollReveal key={f.q} delay={i * 0.05}>
              <div className="rounded-2xl border border-border bg-card overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-rose/40 transition-colors"
                >
                  <span className="font-heading font-semibold text-foreground">{f.q}</span>
                  <div className="h-8 w-8 rounded-full bg-rose flex items-center justify-center flex-shrink-0">
                    {open === i ? <Minus className="h-4 w-4 text-primary" /> : <Plus className="h-4 w-4 text-primary" />}
                  </div>
                </button>
                {open === i && (
                  <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed">{f.a}</div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
