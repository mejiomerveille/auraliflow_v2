import { ScrollReveal } from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-28">
      <div className="container">
        <ScrollReveal>
          <div className="gradient-bordeaux rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-bordeaux">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary-foreground/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-primary-foreground/5 blur-3xl" />
            <div className="absolute inset-0 grid-pattern opacity-10" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 backdrop-blur px-4 py-1.5 mb-6">
                <Sparkles className="h-3.5 w-3.5 text-primary-foreground" />
                <span className="text-xs font-semibold text-primary-foreground">14 jours d'essai gratuit</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
                Reprenez le contrôle <br /><span className="italic">de votre commerce.</span>
              </h2>
              <p className="text-primary-foreground/80 text-lg max-w-lg mx-auto mb-10">
                Rejoignez les milliers de commerçants africains qui pilotent leur stock, leurs ventes et leurs profits avec Auraliflow.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/register">
                  <Button size="lg" className="bg-primary-foreground text-primary hover:bg-rose text-base px-8 h-12 font-semibold">
                    Démarrer gratuitement
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button size="lg" variant="outline" className="text-base px-8 h-12 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                    Voir les tarifs
                  </Button>
                </Link>
              </div>
              <p className="text-xs text-primary-foreground/60 mt-6">Aucune carte requise · Annulation à tout moment</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
