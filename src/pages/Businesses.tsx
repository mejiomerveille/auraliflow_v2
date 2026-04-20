import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Building2, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { fetchCompanies } from "@/services/companyService";
import { Skeleton } from "@/components/ui/skeleton";

const Businesses = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["companies", page, search],
    queryFn: () => fetchCompanies({ page, search: search || undefined }),
  });

  const companies = data?.data ?? [];
  const meta = data?.meta;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-16">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center mb-12">
              <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-3">Annuaire</p>
              <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground">
                Découvrez les <span className="italic-accent">boutiques</span> Auraliflow
              </h1>
              <p className="mt-4 text-muted-foreground">
                Des milliers de commerçants africains font confiance à Auraliflow au quotidien.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-md mx-auto mb-10">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher une boutique..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                className="pl-10 h-11"
              />
            </div>
          </div>

          {isLoading && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="rounded-2xl bg-card p-6 border border-border">
                  <Skeleton className="h-12 w-12 rounded-xl mb-4" />
                  <Skeleton className="h-5 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              ))}
            </div>
          )}

          {isError && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">Impossible de charger les boutiques. Veuillez réessayer.</p>
            </div>
          )}

          {!isLoading && !isError && (
            <>
              {companies.length === 0 ? (
                <div className="text-center py-16">
                  <Building2 className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
                  <p className="text-muted-foreground">Aucune boutique trouvée.</p>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {companies.map((company, i) => (
                    <motion.div
                      key={company.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link to={`/business/${company.id}`}>
                        <div className="group rounded-2xl bg-card p-6 border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 hover:-translate-y-1 h-full">
                          <div className="flex items-start gap-4 mb-4">
                            {company.logo ? (
                              <img src={company.logo} alt={company.name} className="h-12 w-12 rounded-xl object-cover" />
                            ) : (
                              <div className="h-12 w-12 rounded-xl gradient-bordeaux flex items-center justify-center flex-shrink-0">
                                <Building2 className="h-6 w-6 text-primary-foreground" />
                              </div>
                            )}
                            <div className="min-w-0">
                              <h3 className="font-heading font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                                {company.name}
                              </h3>
                              {company.status && (
                                <span className={`inline-block text-xs px-2 py-0.5 rounded-full mt-1 ${company.status === "active" ? "bg-green-100 text-green-700" : "bg-muted text-muted-foreground"}`}>
                                  {company.status}
                                </span>
                              )}
                            </div>
                          </div>
                          {company.created_at && (
                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                              <Calendar className="h-3 w-3" />
                              <span>{new Date(company.created_at).toLocaleDateString("fr-FR")}</span>
                            </div>
                          )}
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}

              {meta && meta.last_page > 1 && (
                <div className="flex items-center justify-center gap-3 mt-10">
                  <Button variant="outline" size="sm" disabled={page <= 1} onClick={() => setPage(page - 1)}>
                    <ChevronLeft className="h-4 w-4 mr-1" /> Précédent
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    Page {meta.current_page} sur {meta.last_page}
                  </span>
                  <Button variant="outline" size="sm" disabled={page >= meta.last_page} onClick={() => setPage(page + 1)}>
                    Suivant <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Businesses;
