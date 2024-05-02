"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

export const DirectionAwareHover = ({
  imageUrl,
  children,
  className,
  imageClassName,
  childrenClassName,
}: {
  imageUrl: string;
  className?: string;
  imageClassName?: string;
  childrenClassName?: string;
  children: React.ReactNode | string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [direction, setDirection] = useState<
    "top" | "bottom" | "left" | "right" | string
  >("left");

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!ref.current) return;

    const direction = getDirection(event, ref.current);

    switch (direction) {
      case 0:
        setDirection("top");
        break;
      case 1:
        setDirection("right");
        break;
      case 2:
        setDirection("bottom");
        break;
      case 3:
        setDirection("left");
        break;
      default:
        setDirection("left");
        break;
    }
  };

  const getDirection = (
    ev: React.MouseEvent<HTMLDivElement, MouseEvent>,
    obj: HTMLElement
  ) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return d;
  };

  return (
    <motion.div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      className={cn(
        "md:h-96 w-60 h-60 md:w-96 bg-transparent rounded-lg overflow-hidden group/card relative",
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          initial="initial"
          whileHover={direction}
          exit="exit"
          className="relative w-full h-full"
        >
          <motion.div className="group-hover/card:block z-10 absolute inset-0 hidden bg-black/40 w-full h-full transition duration-500" />

          <motion.div
            variants={variants}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative bg-gray-50 dark:bg-black w-full h-full"
          >
            <Image
              alt="image"
              width="1000"
              height="1000"
              src={imageUrl}
              className={cn(
                "h-full w-full object-cover scale-[1.15]",
                imageClassName
              )}
            />
          </motion.div>

          <motion.div
            variants={textVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cn(
              "text-white absolute bottom-4 left-4 z-40",
              childrenClassName
            )}
          >
            {children}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

const variants = {
  initial: { x: 0 },
  exit: { x: 0, y: 0 },
  top: { y: 20 },
  bottom: { y: -20 },
  left: { x: 20 },
  right: { x: -20 },
};

const textVariants = {
  initial: { y: 0, x: 0, opacity: 0 },
  exit: { y: 0, x: 0, opacity: 0 },
  top: { y: -20, opacity: 1 },
  bottom: { y: -20, opacity: 1 },
  left: { y: -20, opacity: 1 },
  right: { y: -20, opacity: 1 },
};
