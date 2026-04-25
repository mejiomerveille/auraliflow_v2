import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { StoreBadges } from "@/components/StoreBadges";
import { Tilt3D, Float } from "@/components/Floating3D";
import { Check, Smartphone, Zap, Bell } from "lucide-react";
import appHome from "@/assets/app-home.png";
import appStock from "@/assets/app-stock.png";

const perks = [
  { icon: Zap, label: "Synchronisation temps réel", desc: "Toutes vos boutiques à jour instantanément" },
  { icon: Bell, label: "Notifications instantanées", desc: "Soyez alerté de chaque vente" },
  { icon: Smartphone, label: "iOS & Android natifs", desc: "Expérience fluide sur tous les appareils" },
];

export function DownloadSection() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 gradient-rose opacity-60" />
      <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl animate-float-orb" />
      <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl animate-float-orb" style={{ animationDelay: "-10s" }} />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: 3D phone showcase */}
          <ScrollReveal direction="left">
            <div className="relative h-[600px] perspective-1500 flex items-center justify-center">
              {/* Rotating gradient ring */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full border-2 border-dashed border-primary/20 animate-spin-slow" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full border border-accent/30 animate-spin-reverse" />

              {/* Back phone */}
              <Tilt3D intensity={14} className="absolute left-8 top-12 w-[230px] z-10">
                <Float duration={8} amplitude={16} delay={0.4}>
                  <div className="rounded-[2rem] overflow-hidden shadow-card ring-1 ring-border bg-card rotate-[-10deg]">
                    <img src={appStock} alt="Gestion stock Auraliflow" className="w-full" />
                  </div>
                </Float>
              </Tilt3D>

              {/* Front phone with glow */}
              <Tilt3D intensity={12} className="relative w-[280px] z-20">
                <Float duration={6} amplitude={14}>
                  <div className="rounded-[2.4rem] overflow-hidden shadow-glow ring-1 ring-border bg-card animate-glow-pulse">
                    <img src={appHome} alt="Tableau de bord Auraliflow" className="w-full" />
                  </div>
                </Float>
              </Tilt3D>

              {/* Floating callouts */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute top-16 right-0 bg-card rounded-2xl shadow-card border border-border px-4 py-3 z-30"
              >
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Stock anticipé</p>
                <p className="text-sm font-heading font-bold text-foreground">+24% précision</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-20 left-0 bg-card rounded-2xl shadow-card border border-border px-4 py-3 z-30 flex items-center gap-2.5"
              >
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Bell className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">3 produits en alerte</p>
                  <p className="text-[10px] text-muted-foreground">Boutique Plateau</p>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Right: content + badges */}
          <ScrollReveal direction="right">
            <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-3">
              Application mobile
            </p>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground leading-tight">
              Votre boutique <br />
              <span className="italic-accent">dans la poche</span>.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-lg">
              Gérez vos ventes, votre stock et vos finances depuis votre téléphone — où que vous soyez. Disponible gratuitement sur iOS et Android.
            </p>

            <div className="mt-8 space-y-4">
              {perks.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="h-11 w-11 rounded-xl bg-card border border-border flex items-center justify-center shadow-soft shrink-0">
                    <p.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground">{p.label}</p>
                    <p className="text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10">
              <StoreBadges variant="dark" size="sm" />
              <div className="flex items-center gap-2 mt-5 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-primary" />
                <span>Gratuit · 4.8 ★ sur les stores · 15+ pays</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
