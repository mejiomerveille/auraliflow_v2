import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import appHome from "@/assets/app-home.png";
import appProduits from "@/assets/app-produits.png";
import appFinances from "@/assets/app-finances.png";
import { StoreBadges } from "@/components/StoreBadges";
import { Tilt3D, Float } from "@/components/Floating3D";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 gradient-radial" />
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Floating 3D orbs */}
      <div className="absolute top-32 -right-20 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl animate-float-orb" />
      <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full bg-accent/15 blur-3xl animate-float-orb" style={{ animationDelay: "-6s" }} />
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full bg-bordeaux-light/10 blur-3xl animate-float-orb" style={{ animationDelay: "-12s" }} />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-4 py-1.5 mb-6 shadow-soft"
            >
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-semibold text-foreground">Nouveau · Anticipation intelligente du stock</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold leading-[1.1] lg:leading-[1.05] text-foreground">
              La nouvelle référence pour gérer votre <span className="text-gradient-bordeaux">stock</span>.
            </h1>

            <p className="mt-7 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Auraliflow réunit <strong className="text-foreground">gestion, traçabilité, inventaire</strong> et anticipation de stock dans une seule plateforme — pensée pour les commerçants africains qui veulent grandir sereinement.
            </p>

            {/* Store badges */}
            <div className="mt-9">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Téléchargez l'application mobile
              </p>
              <StoreBadges variant="dark" size="sm" />
            </div>

            <div className="flex flex-wrap items-center gap-6 sm:gap-8 mt-10">
              <div>
                <p className="text-3xl font-heading font-bold text-foreground">2 500+</p>
                <p className="text-xs text-muted-foreground mt-1">Boutiques actives</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <p className="text-3xl font-heading font-bold text-foreground">12M+ <span className="text-base text-muted-foreground">FCFA</span></p>
                <p className="text-xs text-muted-foreground mt-1">Ventes suivies / mois</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <p className="text-3xl font-heading font-bold text-foreground">15+</p>
                <p className="text-xs text-muted-foreground mt-1">Pays africains</p>
              </div>
            </div>
          </motion.div>

          {/* App mockups */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative h-[600px]"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-[260px] rounded-[2.2rem] overflow-hidden shadow-glow ring-1 ring-border bg-card z-20"
            >
              <img src={appHome} alt="Tableau de bord Auraliflow mobile" className="w-full" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-32 -left-4 w-[230px] rounded-[2rem] overflow-hidden shadow-card ring-1 ring-border bg-card rotate-[-6deg] z-10"
            >
              <img src={appProduits} alt="Liste produits Auraliflow" className="w-full" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-0 right-12 w-[220px] rounded-[2rem] overflow-hidden shadow-card ring-1 ring-border bg-card rotate-[5deg]"
            >
              {/* <img src={appFinances} alt="Suivi des ventes Auraliflow" className="w-full" /> */}
            </motion.div>

            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-card rounded-2xl shadow-card border border-border px-5 py-3 flex items-center gap-3 z-30">
              <div className="h-8 w-8 rounded-full gradient-bordeaux flex items-center justify-center">
                <span className="text-primary-foreground text-xs font-bold">+</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground">Nouvelle vente · 43 800 XAF</p>
                <p className="text-[10px] text-muted-foreground">Boutique Merv2 · à l'instant</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
