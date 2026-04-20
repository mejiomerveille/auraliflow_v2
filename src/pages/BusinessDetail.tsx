import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Building2, Calendar, Coins, TrendingUp, Package, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { fetchCompanyById } from "@/services/companyService";
import { Skeleton } from "@/components/ui/skeleton";

const mockStats = [
  { label: "Ventes totales", value: "24 500 F", icon: TrendingUp, change: "+12 %" },
  { label: "Produits", value: "342", icon: Package, change: "+8" },
  { label: "Clients", value: "1 204", icon: Users, change: "+45" },
  { label: "Chiffre d'affaires", value: "18 200 F", icon: Coins, change: "+18 %" },
];

const BusinessDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: company, isLoading, isError } = useQuery({
    queryKey: ["company", id],
    queryFn: () => fetchCompanyById(id!),
    enabled: !!id,
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-16">
        <div className="container max-w-4xl">
          <Link to="/businesses">
            <Button variant="ghost" size="sm" className="mb-6 text-muted-foreground">
              <ArrowLeft className="h-4 w-4 mr-2" /> Retour aux boutiques
            </Button>
          </Link>

          {isLoading && (
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Skeleton className="h-16 w-16 rounded-2xl" />
                <div><Skeleton className="h-6 w-48 mb-2" /><Skeleton className="h-4 w-32" /></div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-28 rounded-2xl" />)}
              </div>
            </div>
          )}

          {isError && <p className="text-center text-muted-foreground py-16">Impossible de charger les détails.</p>}

          {company && (
            <>
              <ScrollReveal>
                <div className="flex items-center gap-5 mb-10">
                  {company.logo ? (
                    <img src={company.logo} alt={company.name} className="h-16 w-16 rounded-2xl object-cover shadow-soft" />
                  ) : (
                    <div className="h-16 w-16 rounded-2xl gradient-bordeaux flex items-center justify-center">
                      <Building2 className="h-8 w-8 text-primary-foreground" />
                    </div>
                  )}
                  <div>
                    <h1 className="text-3xl font-heading font-bold text-foreground">{company.name}</h1>
                    <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                      {company.status && (
                        <span className={`inline-block text-xs px-2 py-0.5 rounded-full ${company.status === "active" ? "bg-green-100 text-green-700" : "bg-muted text-muted-foreground"}`}>
                          {company.status}
                        </span>
                      )}
                      {company.currency && <span>{company.currency}</span>}
                      {company.created_at && (
                        <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{new Date(company.created_at).toLocaleDateString("fr-FR")}</span>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {mockStats.map((stat, i) => (
                  <ScrollReveal key={stat.label} delay={i * 0.1}>
                    <div className="rounded-2xl bg-card p-5 border border-border">
                      <stat.icon className="h-5 w-5 text-primary mb-3" />
                      <p className="text-2xl font-heading font-bold text-foreground">{stat.value}</p>
                      <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                      <span className="text-xs text-green-600 font-medium">{stat.change}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BusinessDetail;
