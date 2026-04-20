import { ScrollReveal } from "@/components/ScrollReveal";

const stats = [
  { value: "2 500+", label: "Commerçants actifs" },
  { value: "15+", label: "Pays africains" },
  { value: "98 %", label: "Satisfaction client" },
  { value: "<1 h", label: "Temps de réponse support" },
  { value: "12M+", label: "Transactions/mois (FCFA)" },
  { value: "99,9 %", label: "Disponibilité" },
];

export function StatsSection() {
  return (
    <section className="py-20 border-y border-border bg-card">
      <div className="container">
        <ScrollReveal className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em]">Auraliflow en chiffres</p>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 0.05}>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-heading font-bold text-gradient-bordeaux">{s.value}</p>
                <p className="text-xs md:text-sm text-muted-foreground mt-2">{s.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
