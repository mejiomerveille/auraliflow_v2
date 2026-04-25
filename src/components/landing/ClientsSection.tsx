import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { MapPin } from "lucide-react";
import logoMerv from "@/assets/logos/logo-merv.png";
import logoPlateau from "@/assets/logos/logo-plateau.png";
import logoYaounde from "@/assets/logos/logo-yaounde.png";
import logoDakar from "@/assets/logos/logo-dakar.png";
import logoKin from "@/assets/logos/logo-kin.png";
import logoLome from "@/assets/logos/logo-lome.png";
import logoBamako from "@/assets/logos/logo-bamako.png";
import logoCotonou from "@/assets/logos/logo-cotonou.png";
import logoNiamey from "@/assets/logos/logo-niamey.png";
import logoOuaga from "@/assets/logos/logo-ouaga.png";
import logoConakry from "@/assets/logos/logo-conakry.png";
import logoLibreville from "@/assets/logos/logo-libreville.png";

const companies = [
  { name: "Boutique Merv2", city: "Douala", category: "Mode & Textile", logo: logoMerv },
  { name: "Plateau Market", city: "Abidjan", category: "Épicerie fine", logo: logoPlateau },
  { name: "Yaoundé Bio", city: "Yaoundé", category: "Cosmétiques", logo: logoYaounde },
  { name: "Dakar Fashion", city: "Dakar", category: "Prêt-à-porter", logo: logoDakar },
  { name: "Kin Pharma", city: "Kinshasa", category: "Parapharmacie", logo: logoKin },
  { name: "Lomé Store", city: "Lomé", category: "Électroménager", logo: logoLome },
  { name: "Bamako Tech", city: "Bamako", category: "Téléphonie", logo: logoBamako },
  { name: "Cotonou Beauty", city: "Cotonou", category: "Beauté & soins", logo: logoCotonou },
  { name: "Niamey Foods", city: "Niamey", category: "Alimentation", logo: logoNiamey },
  { name: "Ouaga Sport", city: "Ouagadougou", category: "Sport & loisirs", logo: logoOuaga },
  { name: "Conakry Home", city: "Conakry", category: "Maison & déco", logo: logoConakry },
  { name: "Libreville Auto", city: "Libreville", category: "Pièces auto", logo: logoLibreville },
];

function CompanyCard({ company }: { company: typeof companies[number] }) {
  return (
    <div className="flex-shrink-0 w-[280px] bg-card border border-border rounded-2xl p-5 mx-3 hover:border-primary/40 hover:shadow-card transition-all">
      <div className="flex items-center gap-4">
        <div className="h-14 w-14 rounded-2xl bg-rose flex items-center justify-center shadow-soft flex-shrink-0 overflow-hidden p-1.5">
          <img
            src={company.logo}
            alt={`Logo ${company.name}`}
            loading="lazy"
            width={512}
            height={512}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="min-w-0">
          <p className="font-heading font-semibold text-foreground truncate">{company.name}</p>
          <p className="text-xs text-muted-foreground truncate">{company.category}</p>
          <div className="flex items-center gap-1 mt-1 text-[11px] text-primary">
            <MapPin className="h-3 w-3" />
            <span>{company.city}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ClientsSection() {
  const row1 = companies.slice(0, 6);
  const row2 = companies.slice(6, 12);

  return (
    <section className="py-28 relative overflow-hidden bg-card/40">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-3">
            Ils nous font confiance
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight">
            Plus de <span className="text-gradient-bordeaux">2 500 commerces</span> <br />
            utilisent Auraliflow chaque jour.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground">
            Des boutiques de quartier aux chaînes multi-sites, Auraliflow accompagne les entrepreneurs africains dans 15+ pays.
          </p>
        </ScrollReveal>

        <div className="relative overflow-hidden mask-fade">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex w-max"
          >
            {[...row1, ...row1].map((c, i) => (
              <CompanyCard key={`r1-${i}`} company={c} />
            ))}
          </motion.div>
        </div>

        <div className="relative overflow-hidden mask-fade mt-6">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="flex w-max"
          >
            {[...row2, ...row2].map((c, i) => (
              <CompanyCard key={`r2-${i}`} company={c} />
            ))}
          </motion.div>
        </div>

        <ScrollReveal>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "2 500+", label: "Commerces actifs" },
              { value: "15+", label: "Pays africains" },
              { value: "12M+", label: "Ventes / mois" },
              { value: "98%", label: "Clients satisfaits" },
            ].map((s) => (
              <div key={s.label} className="text-center bg-card border border-border rounded-2xl p-6">
                <p className="text-3xl sm:text-4xl font-heading font-bold text-gradient-bordeaux">
                  {s.value}
                </p>
                <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
