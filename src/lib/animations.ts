import type { Variants } from "framer-motion";

/* ── Cinematic text reveal (clip-path wipe) ── */
export const textReveal: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    opacity: 1,
    transition: { duration: 1, ease: [0.77, 0, 0.175, 1] },
  },
};

/* ── Elastic pop ── */
export const elasticPop: Variants = {
  hidden: { opacity: 0, scale: 0.6, rotate: -5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};

/* ── Perspective tilt-in (3D) ── */
export const tiltIn: Variants = {
  hidden: { opacity: 0, rotateX: 25, y: 60, transformPerspective: 1200 },
  visible: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: { duration: 0.9, ease: [0.33, 1, 0.68, 1] },
  },
};

/* ── Blur-in (out-of-focus → sharp) ── */
export const blurIn: Variants = {
  hidden: { opacity: 0, filter: "blur(20px)", y: 30 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

/* ── Slide + rotate from left ── */
export const swingInLeft: Variants = {
  hidden: { opacity: 0, x: -120, rotate: -8 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ── Slide + rotate from right ── */
export const swingInRight: Variants = {
  hidden: { opacity: 0, x: 120, rotate: 8 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ── Rise with stretch ── */
export const riseStretch: Variants = {
  hidden: { opacity: 0, scaleY: 0.3, y: 80, transformOrigin: "bottom" },
  visible: {
    opacity: 1,
    scaleY: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.34, 1.56, 0.64, 1] },
  },
};

/* ── Stagger container with wider delay ── */
export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

/* ── Stagger child — blur + rise ── */
export const staggerItem: Variants = {
  hidden: { opacity: 0, filter: "blur(12px)", y: 40 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ── Card hover 3D tilt (use with whileHover) ── */
export const cardHover3D = {
  rotateY: 5,
  rotateX: -5,
  scale: 1.04,
  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
  transition: { duration: 0.4, ease: "easeOut" },
};

/* ── Simple fade for legacy usage ── */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
