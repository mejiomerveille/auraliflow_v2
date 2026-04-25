import { Link } from "react-router-dom";
import { Instagram, Linkedin, Twitter, Mail } from "lucide-react";
import { StoreBadges } from "@/components/StoreBadges";

const footerLinks = {
  Produit: ["Fonctionnalités", "Tarifs", "API", "Application mobile", "Intégrations"],
  Entreprise: ["À propos", "Blog", "Carrières", "Contact", "Presse"],
  Ressources: ["Centre d'aide", "Guides", "Communauté", "Statut"],
  Légal: ["Confidentialité", "Conditions", "Sécurité", "RGPD"],
};

export function Footer() {
  return (
    <footer className="bg-bordeaux-dark text-primary-foreground">
      <div className="container py-20">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="h-10 w-10 rounded-xl bg-primary-foreground flex items-center justify-center">
                <span className="font-heading font-black text-primary text-lg">A</span>
              </div>
              <span className="font-heading text-2xl font-bold">Auraliflow</span>
            </div>
            <p className="text-sm text-primary-foreground/70 max-w-xs leading-relaxed">
              La nouvelle référence pour la gestion de votre stock. Pensée pour les commerçants africains, conçue pour grandir avec vous.
            </p>
            <div className="flex gap-3 mt-6">
              {[Instagram, Linkedin, Twitter, Mail].map((Icon, i) => (
                <a key={i} href="#" className="h-9 w-9 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-xs font-semibold text-primary-foreground/70 uppercase tracking-wider mb-3 text-center sm:text-left">
                Téléchargez l'app
              </p>
              <div className="flex justify-center sm:justify-start">
                <StoreBadges variant="light" size="sm" />
              </div>
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/90">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link to="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-primary-foreground/10 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Auraliflow. Tous droits réservés.
          </p>
          <p className="text-xs text-primary-foreground/40">
            Fait avec ❤️ en Afrique · Disponible dans 15+ pays
          </p>
        </div>
      </div>
    </footer>
  );
}
