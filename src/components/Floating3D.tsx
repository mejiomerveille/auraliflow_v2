import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";

interface Tilt3DProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

/**
 * Premium 3D tilt card that follows the mouse with spring physics.
 */
export function Tilt3D({ children, className = "", intensity = 12 }: Tilt3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 18, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [intensity, -intensity]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-intensity, intensity]), springConfig);

  const handleMouse = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Soft floating motion for orbs / mockups.
 */
export function Float({
  children,
  className = "",
  duration = 6,
  amplitude = 12,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  duration?: number;
  amplitude?: number;
  delay?: number;
}) {
  return (
    <motion.div
      animate={{ y: [0, -amplitude, 0], rotate: [0, 1.5, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
