import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="hidden lg:flex gradient-bordeaux items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="text-center max-w-md relative z-10">
          <div className="h-20 w-20 rounded-3xl bg-primary-foreground/15 backdrop-blur mx-auto mb-6 flex items-center justify-center animate-float">
            <span className="font-heading font-black text-primary-foreground text-3xl">A</span>
          </div>
          <h2 className="text-3xl font-heading font-bold text-primary-foreground mb-3">
            Démarrez en <span className="italic">2 minutes.</span>
          </h2>
          <p className="text-primary-foreground/70 text-sm">
            14 jours d'essai gratuit. Pas de carte bancaire. Annulez quand vous voulez.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center p-8 bg-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Link to="/" className="flex items-center gap-2.5 mb-10">
            <div className="h-10 w-10 rounded-xl gradient-bordeaux flex items-center justify-center shadow-bordeaux">
              <span className="font-heading font-black text-primary-foreground text-lg">A</span>
            </div>
            <span className="font-heading text-xl font-bold text-foreground">Auraliflow</span>
          </Link>

          <h1 className="text-3xl font-heading font-bold text-foreground mb-2">Créez votre compte</h1>
          <p className="text-muted-foreground text-sm mb-8">Commencez votre essai gratuit — sans engagement.</p>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first">Prénom</Label>
                <Input id="first" placeholder="Aminata" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last">Nom</Label>
                <Input id="last" placeholder="Diallo" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="business">Nom de la boutique</Label>
              <Input id="business" placeholder="Ma Boutique" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="vous@boutique.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <div className="relative">
                <Input id="password" type={showPassword ? "text" : "password"} placeholder="••••••••" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <Button className="w-full bg-primary text-primary-foreground hover:bg-bordeaux-dark shadow-bordeaux h-11" size="lg">
              Créer mon compte
            </Button>
          </form>

          <p className="text-sm text-center text-muted-foreground mt-6">
            Déjà inscrit ?{" "}
            <Link to="/login" className="text-primary font-semibold hover:underline">Se connecter</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
