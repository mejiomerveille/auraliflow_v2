import { motion } from "framer-motion";
import { Apple, Play } from "lucide-react";

interface StoreBadgesProps {
  variant?: "light" | "dark";
  size?: "sm" | "md";
  className?: string;
}

export function StoreBadges({ variant = "dark", size = "md", className = "" }: StoreBadgesProps) {
  const base =
    variant === "dark"
      ? "bg-foreground text-background hover:bg-bordeaux-dark"
      : "bg-primary-foreground text-primary hover:bg-rose";

  const sizing =
    size === "sm"
      ? "px-3.5 h-11 gap-2 rounded-xl"
      : "px-5 h-14 gap-3 rounded-2xl";

  const iconSize = size === "sm" ? "h-5 w-5" : "h-6 w-6";
  const labelTop = size === "sm" ? "text-[9px]" : "text-[10px]";
  const labelMain = size === "sm" ? "text-sm" : "text-base";

  return (
    <div className={`inline-flex flex-wrap gap-2.5 ${className}`}>
      <motion.a
        href="#"
        whileHover={{ y: -3, scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className={`group inline-flex items-center shadow-card transition-colors ${sizing} ${base}`}
      >
        <Apple className={iconSize} strokeWidth={1.5} />
        <div className="text-left leading-tight">
          <p className={`${labelTop} uppercase tracking-wider opacity-70`}>Télécharger sur</p>
          <p className={`${labelMain} font-heading font-semibold -mt-0.5`}>App Store</p>
        </div>
      </motion.a>

      <motion.a
        href="#"
        whileHover={{ y: -3, scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className={`group inline-flex items-center shadow-card transition-colors ${sizing} ${base}`}
      >
        <Play className={`${size === "sm" ? "h-4 w-4" : "h-5 w-5"} fill-current`} strokeWidth={1.5} />
        <div className="text-left leading-tight">
          <p className={`${labelTop} uppercase tracking-wider opacity-70`}>Disponible sur</p>
          <p className={`${labelMain} font-heading font-semibold -mt-0.5`}>Google Play</p>
        </div>
      </motion.a>
    </div>
  );
}
