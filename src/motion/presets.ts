import type { Transition, Variants } from "framer-motion";

export const transitions = {
  smooth: {
    type: "spring" as const,
    stiffness: 220,
    damping: 26,
  } satisfies Transition,
  fast: {
    type: "spring" as const,
    stiffness: 320,
    damping: 30,
  } satisfies Transition,
  ease: {
    duration: 0.25,
    ease: "easeOut",
  } satisfies Transition,
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: transitions.smooth },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitions.ease },
};

export function staggerChildren(stagger = 0.06): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
      },
    },
  };
}

export const zoomIn: Variants = {
  hidden: { scale: 1, opacity: 0 },
  visible: {
    scale: 1.1,
    opacity: 1,
    transition: { duration: 6, ease: "easeOut", opacity: { duration: 0.5 } },
  },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

export const bounce = {
  y: [0, -12, 0],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};
