"use client";

import { useMemo } from "react";
import { ForwardRefComponent, HTMLMotionProps, motion, Variants } from "framer-motion";

type FadeProps = {
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  framerProps?: Variants;
  children: React.ReactNode;
  as?: string;
  onClick?: () => void
};

type TagType =
  | ForwardRefComponent<HTMLSpanElement, HTMLMotionProps<"span">>
  | ForwardRefComponent<HTMLHeadingElement, HTMLMotionProps<"h1">>
  | ForwardRefComponent<HTMLParagraphElement, HTMLMotionProps<"p">>
  | ForwardRefComponent<HTMLButtonElement, HTMLMotionProps<"button">>;

const Fade = (
  {
    direction = "up",
    className,
    children,
    framerProps = {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { type: "spring" } },
    },
    as = "h1",
    onClick
  }: FadeProps,
  
) => {
  const directionOffset = useMemo(() => {
    const map = { up: 10, down: -10, left: -10, right: 10 };
    return map[direction];
  }, [direction]);

  const axis = direction === "up" || direction === "down" ? "y" : "x";

  const Tag: TagType = as === "span" ? motion.span : as === "h1" ? motion.h1 : as === "p" ? motion.p : motion.button;

  const FADE_ANIMATION_VARIANTS = useMemo(() => {
    const { hidden, show, ...rest } = framerProps as {
      [name: string]: { [name: string]: number; opacity: number };
    };

    return {
      ...rest,
      hidden: {
        ...(hidden ?? {}),
        opacity: hidden?.opacity ?? 0,
        [axis]: hidden?.[axis] ?? directionOffset,
      },
      show: {
        ...(show ?? {}),
        opacity: show?.opacity ?? 1,
        [axis]: show?.[axis] ?? 0,
      },
    };
  }, [directionOffset, axis, framerProps]);

  return (
    <motion.div initial="hidden" animate="show" viewport={{ once: true }} variants={FADE_ANIMATION_VARIANTS}>
      <Tag className={className} onClick={onClick}>
        {children}
      </Tag>
    </motion.div>
  );
};

export default Fade;
