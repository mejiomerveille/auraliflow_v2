import { useEffect, useRef, useState } from "react";
import withoutImg from "@/assets/without-auraliflow.jpg";
import withImg from "@/assets/with-auraliflow.jpg";

const ComparisonSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = vh + rect.height;
      const scrolled = vh - rect.top;
      const p = Math.max(0, Math.min(1, scrolled / total));
      setProgress(p);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Smooth easing
  const eased = progress * progress * (3 - 2 * progress);
  // Move from far apart to touching — when eased = 0.5 (section centered), offset = 0
  const offset = (0.5 - eased) * 80; // % translation, can be negative

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background py-20"
    >
      {/* Images — desktop only, animated apart-to-together */}
      <div
        className="pointer-events-none absolute left-0 top-1/2 hidden h-[90vh] w-[38%] -translate-y-1/2 items-center justify-end md:flex md:w-[32%]"
        style={{
          transform: `translate(${-Math.max(offset, 0)}%, -50%)`,
          transition: "transform 0.1s linear",
        }}
      >
        <img
          src={withoutImg}
          alt="Commerçant stressé sans Auraliflow"
          loading="lazy"
          width={1024}
          height={1280}
          className="h-full w-auto object-contain"
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 80% at 65% 50%, black 40%, transparent 92%)",
            maskImage:
              "radial-gradient(ellipse 70% 80% at 65% 50%, black 40%, transparent 92%)",
          }}
        />
      </div>

      <div
        className="pointer-events-none absolute right-0 top-1/2 hidden h-[90vh] w-[38%] -translate-y-1/2 items-center justify-start md:flex md:w-[32%]"
        style={{
          transform: `translate(${Math.max(offset, 0)}%, -50%)`,
          transition: "transform 0.1s linear",
        }}
      >
        <img
          src={withImg}
          alt="Commerçant performant avec Auraliflow"
          loading="lazy"
          width={1024}
          height={1280}
          className="h-full w-auto object-contain"
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 80% at 35% 50%, black 40%, transparent 92%)",
            maskImage:
              "radial-gradient(ellipse 70% 80% at 35% 50%, black 40%, transparent 92%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto grid max-w-2xl grid-cols-1 gap-12 px-6 md:grid-cols-2 md:gap-6">
        {/* SANS — left on desktop, top on mobile */}
        <div className="text-left order-1">
          {/* Mobile-only image */}
          <div className="md:hidden mb-5 flex justify-start">
            <img
              src={withoutImg}
              alt="Commerçant stressé sans Auraliflow"
              loading="lazy"
              width={1024}
              height={1280}
              className="h-40 w-auto object-contain rounded-2xl opacity-90"
            />
          </div>
          <p className="mb-3 text-[10px] font-bold tracking-[0.2em] text-foreground">
            [ SANS AURALIFLOW ]
          </p>
          <h3 className="font-serif text-2xl font-normal italic text-foreground md:text-3xl">
            Gestion désorganisée
          </h3>
          <h2 className="mt-1 text-3xl font-extrabold leading-none tracking-tight text-foreground md:text-4xl">
            COMMERCE
            <br />
            FRAGILE
          </h2>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Avant Auraliflow, vous gérez vos stocks, ventes et finances de
            manière manuelle, avec des erreurs, des pertes et un manque de
            visibilité sur votre activité.
          </p>
          <div className="mt-5 h-[3px] w-12 bg-aurali" />
        </div>

        {/* AVEC — right on desktop, bottom on mobile, right-aligned on mobile */}
        <div className="text-left md:text-left order-2 md:items-start flex flex-col items-end md:items-start">
          {/* Mobile-only image, right side */}
          <div className="md:hidden mb-5 flex justify-end w-full">
            <img
              src={withImg}
              alt="Commerçant performant avec Auraliflow"
              loading="lazy"
              width={1024}
              height={1280}
              className="h-40 w-auto object-contain rounded-2xl"
            />
          </div>
          <div className="text-right md:text-left w-full">
            <p className="mb-3 text-[10px] font-bold tracking-[0.2em] text-aurali">
              [ AVEC AURALIFLOW ]
            </p>
            <h3 className="font-serif text-2xl font-normal italic text-aurali-light md:text-3xl">
              Gestion optimisée
            </h3>
            <h2 className="mt-1 text-3xl font-extrabold leading-none tracking-tight text-foreground md:text-4xl">
              COMMERCE
              <br />
              PERFORMANT
            </h2>
            <p className="mt-5 ml-auto md:ml-0 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Avec Auraliflow, pilotez votre activité en temps réel, suivez vos
              ventes, gérez vos stocks efficacement et prenez des décisions
              éclairées pour faire grandir votre business.
            </p>
            <div className="mt-5 ml-auto md:ml-0 h-[3px] w-12 bg-aurali" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
