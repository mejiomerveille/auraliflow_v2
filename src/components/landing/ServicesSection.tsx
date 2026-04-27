import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Package,
  ShoppingCart,
  Wallet,
  BarChart3,
  Boxes,
  TrendingUp,
  FileText,
  AlertCircle,
  ArrowRightLeft,
  ClipboardCheck,
  Receipt,
  Users,
  Send,
  Target,
  PiggyBank,
  LineChart,
  Tag,
  Globe,
  Calendar,
  Download,
} from "lucide-react";
import personImg1 from "@/assets/person-using-app-1.jpg";
import personImg2 from "@/assets/person-using-app-2.jpg";
import personImg3 from "@/assets/person-using-app-3.jpg";
import appScreen3 from "@/assets/app-screen-3.png";
import appScreen6 from "@/assets/app-screen-6.png";
import appScreen2 from "@/assets/app-screen-2.png";
import appScreen11 from "@/assets/app-screen-11.png";

type Slide = {
  category: string;
  title: string;
  description: string;
  bg: string;
  screenshot: string;
  features: { icon: React.ComponentType<{ className?: string }>; label: string }[];
  accent: string;
};

const slides: Slide[] = [
  {
    category: "Stocks",
    title: "Gestion des stocks & produits",
    description: "Suivez chaque article, chaque arrivage, chaque mouvement de stock — en temps réel, partout.",
    bg: personImg1,
    screenshot: appScreen2,
    accent: "hsl(var(--bordeaux))",
    features: [
      { icon: Package, label: "Fiches articles complètes (SKU, code-barres)" },
      { icon: Boxes, label: "Gestion des arrivages mobile/web" },
      { icon: TrendingUp, label: "Calcul auto du Prix de Revient (CMUP)" },
      { icon: ArrowRightLeft, label: "Transferts entre sites de stockage" },
      { icon: ClipboardCheck, label: "Inventaire physique mobile par scan" },
      { icon: AlertCircle, label: "Alertes stock bas par push & WhatsApp" },
    ],
  },
  {
    category: "Ventes",
    title: "Ventes & gestion de la marge",
    description: "Encaissez, facturez et suivez vos marges depuis le terrain.",
    bg: personImg2,
    screenshot: appScreen3,
    accent: "hsl(var(--bordeaux-light))",
    features: [
      { icon: ShoppingCart, label: "Prise de commande mobile rapide" },
      { icon: FileText, label: "Devis & promesses d'achat avec réservation" },
      { icon: TrendingUp, label: "Marge brute auto par vente (PR figé)" },
      { icon: Users, label: "Fiches clients & créances (CRM simple)" },
      { icon: Receipt, label: "Factures PDF avec TVA & numérotation" },
      { icon: Send, label: "Envoi WhatsApp direct au client" },
    ],
  },
  {
    category: "Trésorerie",
    title: "Trésorerie & pilotage financier",
    description: "Visualisez vos flux, catégorisez vos dépenses et calculez votre bénéfice net réel.",
    bg: personImg3,
    screenshot: appScreen11,
    accent: "hsl(var(--bordeaux-dark))",
    features: [
      { icon: Wallet, label: "Encaissements & décaissements unifiés" },
      { icon: LineChart, label: "Tableau de bord trésorerie graphique" },
      { icon: PiggyBank, label: "Calcul auto du bénéfice net réel" },
      { icon: Tag, label: "Catégorisation des dépenses (Loyer, Marketing…)" },
      { icon: Calendar, label: "Historique filtrable sur période" },
      { icon: Target, label: "Liaison automatique des ventes payées" },
    ],
  },
  {
    category: "Reporting",
    title: "Reporting & tableaux de bord",
    description: "Tous vos KPIs en un coup d'œil. Analysez par produit, vendeur, ville, période.",
    bg: personImg1,
    screenshot: appScreen6,
    accent: "hsl(var(--noir-profond))",
    features: [
      { icon: BarChart3, label: "KPIs synthèse 360° (CA, marge, ruptures)" },
      { icon: Package, label: "Top 5 / Flop 5 par produit & catégorie" },
      { icon: Calendar, label: "Analyses jour/semaine/mois/trimestre" },
      { icon: Users, label: "Performances par commercial" },
      { icon: Globe, label: "Analyse géographique par ville/région" },
      { icon: Download, label: "Export CSV / Excel sur tous les rapports" },
    ],
  },
];

const ServicesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxTranslate, setMaxTranslate] = useState(0);
  const [sectionHeight, setSectionHeight] = useState("400vh");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const update = () => {
      if (!trackRef.current || !containerRef.current) return;
      const trackWidth = trackRef.current.scrollWidth;
      const containerWidth = containerRef.current.clientWidth;
      const translate = trackWidth - containerWidth;
      setMaxTranslate(translate);
      // La hauteur de scroll nécessaire = translation + 100vh (pour que la dernière slide soit visible)
      setSectionHeight(`calc(${translate}px + 100vh)`);
    };

    update();
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [0, -maxTranslate]);

  return (
    <section
      ref={containerRef}
      id="services"
      className="relative bg-warm-cream"
      style={{ height: sectionHeight }}
    >
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
        {/* Header */}
        <div className="container px-4 pt-16 md:pt-20 pb-4 md:pb-6 shrink-0">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div>
              <span className="inline-block px-3 py-1.5 rounded-full bg-foreground/5 text-foreground/70 text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] mb-3 border border-foreground/10">
                Nos services
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground leading-[1.05] tracking-tight max-w-3xl">
                Que propose <span className="italic text-foreground/50">Aurali Flow ?</span>
              </h2>
            </div>
            <p className="text-foreground/60 text-sm md:text-lg max-w-md">
              Quatre piliers pour piloter votre commerce. Faites défiler pour découvrir.
            </p>
          </div>
        </div>

        {/* Horizontal track */}
        <div className="flex-1 flex items-center overflow-hidden pb-8 md:pb-12">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-5 md:gap-6 pl-[5vw] pr-[5vw] will-change-transform"
          >
            {slides.map((s, i) => (
              <SlideCard key={i} slide={s} index={i} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile fallback */}
      <style>{`
        @media (max-width: 767px) {
          #services { height: auto !important; }
          #services > div.sticky { position: relative !important; height: auto !important; }
          #services .will-change-transform { transform: none !important; flex-direction: column; padding: 0 1rem !important; gap: 1.25rem !important; }
        }
      `}</style>
    </section>
  );
};

const SlideCard = ({ slide }: { slide: Slide; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0.6 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.4 }}
      className="relative shrink-0 w-[88vw] md:w-[70vw] h-[68vh] md:h-[74vh] rounded-3xl overflow-hidden shadow-xl border border-foreground/10"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${slide.bg})`, filter: "blur(2px)" }}
      />
      {/* Color overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${slide.accent.replace(")", " / 0.55)")} 0%, hsl(15 40% 18% / 0.85) 60%, hsl(20 30% 25% / 0.92) 100%)`,
        }}
      />

      {/* Mobile dark filter overlay for readability */}
      <div className="md:hidden absolute inset-0 bg-black/45 z-[1]" />

      {/* Content grid */}
      <div className="relative z-[2] h-full grid md:grid-cols-12 gap-4 md:gap-6 p-5 md:p-10 lg:p-12">
        {/* Left: title + screenshot */}
        <div className="md:col-span-7 flex flex-col justify-between min-h-0">
          <div>
            <span
              className="inline-block px-3 py-1 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] mb-3 backdrop-blur-md border"
              style={{
                backgroundColor: `${slide.accent.replace(")", " / 0.25)")}`,
                borderColor: `${slide.accent.replace(")", " / 0.4)")}`,
                color: "hsl(45 95% 80%)",
              }}
            >
              {slide.category}
            </span>
          </div>

          {/* Mockup — hidden on mobile to avoid overlap with title */}
          <div className="hidden md:flex flex-1 items-center justify-center my-2 md:my-4 min-h-0">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-6 rounded-3xl bg-warm-cream/10 blur-2xl" />
              <div className="relative w-[120px] md:w-[180px] lg:w-[220px] rounded-[1.75rem] overflow-hidden border-4 border-warm-cream/20 shadow-2xl bg-warm-cream">
                <img src={slide.screenshot} alt={slide.title} className="w-full h-auto" loading="lazy" />
              </div>
            </motion.div>
          </div>

          {/* Title bottom-left */}
          <div className="max-w-lg mt-4 md:mt-0">
            <h3 className="font-display font-semibold text-warm-cream text-white text-xl md:text-3xl lg:text-4xl leading-[1.1] tracking-tight mb-2 md:mb-3">
              {slide.title}
            </h3>
          </div>
        </div>

        {/* Right: feature list — solid dark card on mobile, glassmorphic on desktop */}
        <div className="md:col-span-5 flex flex-col justify-start md:pt-12">
          <div className="rounded-2xl bg-black/55 md:bg-warm-cream/[0.08] md:backdrop-blur-md border border-warm-cream/20 md:border-warm-cream/15 p-4 md:p-5 space-y-2 md:space-y-2.5">
            <p className="text-warm-cream/60 text-white text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
              Fonctionnalités clés
            </p>
            {slide.features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-start gap-2.5 md:gap-3 group"
              >
                <div
                  className="w-7 h-7 md:w-8 md:h-8 rounded-lg shrink-0 flex items-center justify-center mt-0.5"
                  style={{ backgroundColor: `${slide.accent.replace(")", " / 0.25)")}` }}
                >
                  <f.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-white text-warm-cream" />
                </div>
                <p className="text-warm-cream/90 text-white text-[11px] md:text-sm leading-snug font-medium pt-1 md:pt-1.5">
                  {f.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesSection;