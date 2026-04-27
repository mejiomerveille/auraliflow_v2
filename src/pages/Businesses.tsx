import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Search, Store } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchIndustries, type Industry } from "@/services/industryService";
import heroBg from "@/assets/businesses-hero.jpg";

import img1 from "@/assets/industries/1.jpg";
import img2 from "@/assets/industries/2.jpg";
import img3 from "@/assets/industries/3.jpg";
import img4 from "@/assets/industries/4.jpg";
import img5 from "@/assets/industries/5.jpg";
import img6 from "@/assets/industries/6.jpg";
import img7 from "@/assets/industries/7.jpg";
import img8 from "@/assets/industries/8.jpg";
import img9 from "@/assets/industries/9.jpg";
import img10 from "@/assets/industries/10.jpg";
import img11 from "@/assets/industries/11.jpg";
import img12 from "@/assets/industries/12.jpg";
import img13 from "@/assets/industries/13.jpg";
import img14 from "@/assets/industries/14.jpg";
import img15 from "@/assets/industries/15.jpg";
import img16 from "@/assets/industries/16.jpg";
import img17 from "@/assets/industries/17.jpg";
import img18 from "@/assets/industries/18.jpg";
import img19 from "@/assets/industries/19.jpg";
import img20 from "@/assets/industries/20.jpg";

const INDUSTRY_IMAGES: Record<number, string> = {
  1: img1, 2: img2, 3: img3, 4: img4, 5: img5,
  6: img6, 7: img7, 8: img8, 9: img9, 10: img10,
  11: img11, 12: img12, 13: img13, 14: img14, 15: img15,
  16: img16, 17: img17, 18: img18, 19: img19, 20: img20,
};

const Businesses = () => {
  const [search, setSearch] = useState("");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["industries"],
    queryFn: fetchIndustries,
  });

  const industries: Industry[] = data ?? [];

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return industries;
    return industries.filter((i) => i.name.toLowerCase().includes(q));
  }, [industries, search]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <header className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt=""
            className="h-full w-full object-cover"
            width={1920}
            height={700}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        </div>
        <div className="container relative z-10">
          <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-3">
            Annuaire des boutiques
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight text-foreground uppercase">
            Boutiques sélectionnées
          </h1>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Auraliflow accompagne les commerçants africains dans tous les secteurs d'activité.
            Découvrez les boutiques qui font confiance à notre solution.
          </p>

          <div className="mt-8 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher un secteur..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 h-11 bg-background/80 backdrop-blur"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Grid */}
      <section className="py-16">
        <div className="container">
          {isLoading && (
            <div className="grid sm:grid-cols-2 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} className="aspect-[4/3] rounded-2xl" />
              ))}
            </div>
          )}

          {isError && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">
                Impossible de charger les secteurs. Veuillez réessayer.
              </p>
            </div>
          )}

          {!isLoading && !isError && (
            <>
              {filtered.length === 0 ? (
                <div className="text-center py-16">
                  <Store className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
                  <p className="text-muted-foreground">Aucun secteur trouvé.</p>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-6">
                  {filtered.map((industry, i) => {
                    const image = INDUSTRY_IMAGES[industry.industry_id];
                    return (
                      <motion.article
                        key={industry.industry_id}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.5, delay: Math.min((i % 4) * 0.05, 0.2) }}
                        className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted cursor-pointer"
                      >
                        {image ? (
                          <img
                            src={image}
                            alt={`Boutique ${industry.name}`}
                            loading="lazy"
                            width={800}
                            height={600}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        ) : (
                          <div className="absolute inset-0 gradient-bordeaux flex items-center justify-center">
                            <Store className="h-16 w-16 text-primary-foreground/40" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                          <h3 className="font-heading font-bold text-white text-xl sm:text-2xl uppercase tracking-wide">
                            {industry.name}
                          </h3>
                          <p className="mt-2 text-sm text-white/70">
                            Secteur d'activité — Boutique Auraliflow
                          </p>
                        </div>
                      </motion.article>
                    );
                  })}
                </div>
              )}

              <p className="text-center text-sm text-muted-foreground mt-12">
                {filtered.length} secteur{filtered.length > 1 ? "s" : ""} disponible
                {filtered.length > 1 ? "s" : ""}
              </p>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Businesses;
