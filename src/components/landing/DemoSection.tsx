import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { LayoutDashboard, Boxes, TrendingUp, Wallet, Play } from "lucide-react";

const demos = [
  {
    id: 0,
    icon: LayoutDashboard,
    label: "Tableau de bord",
    title: "Une vue d'ensemble claire et instantanée.",
    desc: "Chiffre d'affaires, marge, ruptures et top ventes — tout votre commerce en un coup d'œil.",
    src: "/demos/demo-1.mp4",
  },
  {
    id: 1,
    icon: Boxes,
    label: "Inventaire",
    title: "Gérez vos produits sans effort.",
    desc: "Ajoutez, modifiez, suivez vos stocks par boutique. Variants, SKU, photos — tout est centralisé.",
    src: "/demos/demo-2.mp4",
  },
  {
    id: 2,
    icon: TrendingUp,
    label: "Ventes",
    title: "Enregistrez une vente en 10 secondes.",
    desc: "Statut livré/payé, marge brute, historique client — chaque vente est tracée et analysée.",
    src: "/demos/demo-3.mp4",
  },
  {
    id: 3,
    icon: Wallet,
    label: "Trésorerie",
    title: "Maîtrisez votre cash, jour après jour.",
    desc: "Entrées, dépenses, investissements, créances — votre trésorerie respire enfin.",
    src: "/demos/demo-4.mp4",
  },
];

export function DemoSection() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Mouse tilt motion values
  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);
  const sRotX = useSpring(rotX, { damping: 20, stiffness: 150 });
  const sRotY = useSpring(rotY, { damping: 20, stiffness: 150 });

  // Scroll-driven 3D entrance + parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const enterRotY = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [-25, 0, 0, 18]);
  const enterScale = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.85, 1, 1, 0.92]);
  const blobY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const tagY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!phoneRef.current) return;
    const r = phoneRef.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    rotY.set(x * 18);
    rotX.set(-y * 14);
  };
  const handleMouseLeave = () => {
    rotX.set(0);
    rotY.set(0);
  };

  // Autoplay only the active video, pause others
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === active) {
        v.currentTime = 0;
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [active]);

  // Auto-advance when current video ends
  const handleEnded = () => setActive((a) => (a + 1) % demos.length);

  return (
    <section
      ref={sectionRef}
      id="demo"
      className="relative py-32 bg-bordeaux-dark text-primary-foreground overflow-hidden"
      style={{ perspective: "1800px" }}
    >
      {/* Atmospheric background */}
      <motion.div
        style={{ y: blobY }}
        className="absolute -top-40 right-0 w-[700px] h-[700px] rounded-full bg-primary/40 blur-[140px] opacity-60"
      />
      <motion.div
        style={{ y: tagY }}
        className="absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full bg-accent/30 blur-[120px] opacity-50"
      />
      <div className="absolute inset-0 grid-pattern opacity-[0.06]" />

      <div className="container relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 backdrop-blur px-4 py-1.5 mb-5 border border-primary-foreground/15">
            <Play className="h-3.5 w-3.5 text-rose fill-rose" />
            <span className="text-xs font-semibold text-primary-foreground">Démo en direct</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight">
            Auraliflow <span className="italic text-rose">en action.</span>
          </h2>
          <p className="mt-5 text-lg text-primary-foreground/75">
            Quatre vidéos pour comprendre comment Auraliflow simplifie votre quotidien de commerçant.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left — chapter selector */}
          <div className="lg:col-span-5 space-y-3">
            {demos.map((d, i) => {
              const isActive = active === i;
              return (
                <button
                  key={d.id}
                  onClick={() => setActive(i)}
                  className={`group w-full text-left rounded-2xl p-5 border transition-all duration-300 ${
                    isActive
                      ? "bg-primary-foreground/10 border-primary-foreground/25 shadow-bordeaux"
                      : "bg-primary-foreground/[0.03] border-primary-foreground/10 hover:bg-primary-foreground/[0.06]"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`h-11 w-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                      isActive ? "bg-rose text-primary" : "bg-primary-foreground/10 text-primary-foreground/70"
                    }`}>
                      <d.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-rose/80">
                          0{i + 1}
                        </span>
                        <span className="text-sm font-semibold text-primary-foreground/90">{d.label}</span>
                      </div>
                      <h3 className={`font-heading font-bold text-lg leading-snug transition-colors ${
                        isActive ? "text-primary-foreground" : "text-primary-foreground/70"
                      }`}>
                        {d.title}
                      </h3>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3 }}
                          className="mt-2 text-sm text-primary-foreground/65 leading-relaxed overflow-hidden"
                        >
                          {d.desc}
                        </motion.p>
                      )}
                    </div>
                  </div>
                  {/* progress indicator */}
                  {isActive && (
                    <div className="mt-4 h-0.5 bg-primary-foreground/10 rounded-full overflow-hidden">
                      <motion.div
                        key={active}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 26, ease: "linear" }}
                        className="h-full bg-rose"
                      />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right — 3D phone */}
          <div className="lg:col-span-7 flex justify-center">
            <motion.div
              ref={phoneRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX: sRotX,
                rotateY: useTransform([sRotY, enterRotY] as any, ([a, b]: any) => a + b),
                scale: enterScale,
                transformStyle: "preserve-3d",
              }}
              className="relative"
            >
              {/* Glow halo */}
              <div className="absolute inset-0 -z-10 blur-3xl opacity-70">
                <div className="absolute inset-x-0 top-1/4 h-1/2 bg-gradient-to-r from-rose/40 via-primary/60 to-accent/40 rounded-full" />
              </div>

              {/* Phone frame */}
              <div
                className="relative w-[320px] sm:w-[360px] rounded-[3rem] bg-bordeaux-dark p-3 shadow-[0_60px_120px_-30px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.08)_inset]"
                style={{ transform: "translateZ(40px)" }}
              >
                {/* Side reflection */}
                <div className="absolute inset-y-12 -left-px w-[2px] bg-gradient-to-b from-transparent via-primary-foreground/20 to-transparent rounded-full" />
                <div className="absolute inset-y-12 -right-px w-[2px] bg-gradient-to-b from-transparent via-primary-foreground/20 to-transparent rounded-full" />

                {/* Screen */}
                <div className="relative rounded-[2.4rem] overflow-hidden bg-black aspect-[296/640]">
                  {/* Notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20 flex items-center justify-end pr-3">
                    <div className="h-2 w-2 rounded-full bg-primary-foreground/30" />
                  </div>

                  {demos.map((d, i) => (
                    <video
                      key={d.id}
                      ref={(el) => (videoRefs.current[i] = el)}
                      src={d.src}
                      muted
                      playsInline
                      preload="metadata"
                      onEnded={handleEnded}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                        active === i ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  ))}

                  {/* subtle screen sheen */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-primary-foreground/[0.04] to-primary-foreground/[0.08]" />
                </div>
              </div>

              {/* Floating callout 1 */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{ transform: "translateZ(80px)" }}
                className="absolute -left-12 top-20 hidden md:flex items-center gap-2.5 bg-primary-foreground text-primary px-3.5 py-2.5 rounded-2xl shadow-2xl"
              >
                <div className="h-7 w-7 rounded-full gradient-bordeaux flex items-center justify-center">
                  <TrendingUp className="h-3.5 w-3.5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">+ Nouvelle vente</p>
                  <p className="text-xs font-bold">43 800 XAF</p>
                </div>
              </motion.div>

              {/* Floating callout 2 */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                style={{ transform: "translateZ(60px)" }}
                className="absolute -right-10 bottom-32 hidden md:block bg-rose text-primary px-4 py-3 rounded-2xl shadow-2xl"
              >
                <p className="text-[10px] font-bold uppercase tracking-wider opacity-70">Stock</p>
                <p className="text-lg font-heading font-bold leading-none">12 unités</p>
                <p className="text-[10px] mt-0.5 opacity-70">Rupture dans 3 jours</p>
              </motion.div>

              {/* Reflection floor */}
              <div
                className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[400px] h-32 opacity-40"
                style={{
                  background: "radial-gradient(ellipse at center top, rgba(245,237,237,0.25), transparent 70%)",
                  transform: "translateZ(0px) rotateX(80deg) translateY(-40px)",
                  transformStyle: "preserve-3d",
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
