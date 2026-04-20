import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { swingInLeft, swingInRight, blurIn, staggerContainer, staggerItem } from "@/lib/animations";
import person1 from "@/assets/person-using-app-1.jpg";
import person2 from "@/assets/person-using-app-2.jpg";
import appScreen1 from "@/assets/app-screen-1.png";
import appScreen4 from "@/assets/app-screen-4.png";
import appScreen5 from "@/assets/app-screen-5.png";
import appScreen9 from "@/assets/app-screen-9.png";
import appScreen10 from "@/assets/app-screen-10.png";
import appScreen12 from "@/assets/app-screen-12.png";

const vp = { once: true, amount: 0.2 };

const CheckItem = ({ text }: { text: string }) => (
  <li className="flex items-center gap-3 text-sm text-foreground">
    <span className="w-7 h-7 rounded-lg bg-rose-pale flex items-center justify-center text-bordeaux text-xs font-bold">✓</span>
    {text}
  </li>
);

const AppShowcase = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const parallax1 = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const parallax2 = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={sectionRef} className="py-28 md:py-36 bg-background relative overflow-hidden">
      <div className="absolute top-20 -right-20 w-96 h-96 rounded-full border border-bordeaux/10" />
      <div className="absolute bottom-20 -left-20 w-72 h-72 rounded-full border border-bordeaux/10" />

      <div className="container px-4">
        <motion.div className="text-center mb-20" variants={blurIn} initial="hidden" whileInView="visible" viewport={vp}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-rose-pale text-bordeaux font-semibold text-xs tracking-[0.2em] uppercase mb-4">L'application</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground mt-3 mb-5">Conçue pour le terrain</h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">Une interface intuitive pensée pour les commerçants qui veulent aller vite.</p>
        </motion.div>

        {/* Row 1 — Dashboard */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div className="relative" variants={swingInLeft} initial="hidden" whileInView="visible" viewport={vp}>
            <motion.div style={{ y: parallax1 }}>
              <img src={person1} alt="Commerçante utilisant Aurali Flow" className="rounded-[2rem] shadow-2xl w-full object-cover h-[420px]" loading="lazy" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: 12 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 6 }}
              viewport={vp}
              transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
              className="absolute -bottom-10 -right-2 md:right-6 w-[180px] md:w-[210px] rounded-[2.5rem] border-[6px] border-foreground/80 bg-foreground shadow-[0_30px_60px_-10px_rgba(0,0,0,0.4)] overflow-hidden"
            >
              <img src={appScreen1} alt="Dashboard Aurali Flow" className="w-full" loading="lazy" />
            </motion.div>
          </motion.div>

          <motion.div variants={swingInRight} initial="hidden" whileInView="visible" viewport={vp}>
            <span className="text-primary text-sm font-bold tracking-widest uppercase">Dashboard</span>
            <h3 className="text-2xl md:text-4xl font-display font-bold text-foreground mb-5 mt-2">Tableau de bord complet</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed text-base">Chiffre d'affaires, marge brute, stock total et ruptures — tout est visible en un coup d'œil.</p>
            <motion.ul className="space-y-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={vp}>
              {["Chiffre d'affaire en temps réel", "Alertes rupture de stock", "Actions rapides (vente, arrivage, produit)"].map((item) => (
                <motion.div key={item} variants={staggerItem}><CheckItem text={item} /></motion.div>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        {/* Row 2 — Arrivages */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div className="order-2 lg:order-1" variants={swingInLeft} initial="hidden" whileInView="visible" viewport={vp}>
            <span className="text-primary text-sm font-bold tracking-widest uppercase">Arrivages</span>
            <h3 className="text-2xl md:text-4xl font-display font-bold text-foreground mb-5 mt-2">Gestion des arrivages simplifiée</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed text-base">Enregistrez vos arrivages en quelques clics : produits, quantités, fournisseurs, frais additionnels.</p>
            <motion.ul className="space-y-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={vp}>
              {["Sélection produit rapide", "Frais additionnels intégrés", "Historique fournisseur"].map((item) => (
                <motion.div key={item} variants={staggerItem}><CheckItem text={item} /></motion.div>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div className="order-1 lg:order-2 relative" variants={swingInRight} initial="hidden" whileInView="visible" viewport={vp}>
            <motion.div style={{ y: parallax2 }}>
              <img src={person2} alt="Commerçant gérant ses stocks" className="rounded-[2rem] shadow-2xl w-full object-cover h-[420px]" loading="lazy" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -12 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
              viewport={vp}
              transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
              className="absolute -bottom-10 -left-2 md:left-6 w-[180px] md:w-[210px] rounded-[2.5rem] border-[6px] border-foreground/80 bg-foreground shadow-[0_30px_60px_-10px_rgba(0,0,0,0.4)] overflow-hidden"
            >
              <img src={appScreen4} alt="Arrivage Aurali Flow" className="w-full" loading="lazy" />
            </motion.div>
          </motion.div>
        </div>

        {/* Row 3 — Products + multi-screen showcase */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            className="flex justify-center gap-4"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-[140px] md:w-[160px] rounded-[2rem] border-[5px] border-foreground/80 bg-foreground shadow-2xl overflow-hidden"
            >
              <img src={appScreen5} alt="Produits" className="w-full" loading="lazy" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="w-[140px] md:w-[160px] rounded-[2rem] border-[5px] border-foreground/80 bg-foreground shadow-2xl overflow-hidden mt-8"
            >
              <img src={appScreen9} alt="Ventes" className="w-full" loading="lazy" />
            </motion.div>
          </motion.div>

          <motion.div variants={swingInRight} initial="hidden" whileInView="visible" viewport={vp}>
            <span className="text-primary text-sm font-bold tracking-widest uppercase">Produits</span>
            <h3 className="text-2xl md:text-4xl font-display font-bold text-foreground mb-5 mt-2">Ajoutez vos produits facilement</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed text-base">Désignation, catégorie, SKU, prix de vente, seuil d'alerte — configurez votre catalogue en quelques secondes.</p>
            <motion.ul className="space-y-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={vp}>
              {["Catégories personnalisées", "Code barre / SKU", "Seuils d'alerte automatiques"].map((item) => (
                <motion.div key={item} variants={staggerItem}><CheckItem text={item} /></motion.div>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        {/* Row 4 — Ventes & Rapports */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div className="order-2 lg:order-1" variants={swingInLeft} initial="hidden" whileInView="visible" viewport={vp}>
            <span className="text-primary text-sm font-bold tracking-widest uppercase">Ventes & Rapports</span>
            <h3 className="text-2xl md:text-4xl font-display font-bold text-foreground mb-5 mt-2">Suivez chaque transaction</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed text-base">Historique complet des ventes, marges par produit, rapports exportables — pilotez votre business avec précision.</p>
            <motion.ul className="space-y-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={vp}>
              {["Historique détaillé des ventes", "Marge par produit en temps réel", "Export PDF & Excel"].map((item) => (
                <motion.div key={item} variants={staggerItem}><CheckItem text={item} /></motion.div>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2 flex justify-center gap-4"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="w-[140px] md:w-[160px] rounded-[2rem] border-[5px] border-foreground/80 bg-foreground shadow-2xl overflow-hidden"
            >
              <img src={appScreen10} alt="Rapports" className="w-full" loading="lazy" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="w-[140px] md:w-[160px] rounded-[2rem] border-[5px] border-foreground/80 bg-foreground shadow-2xl overflow-hidden mt-12"
            >
              <img src={appScreen12} alt="Détails vente" className="w-full" loading="lazy" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
