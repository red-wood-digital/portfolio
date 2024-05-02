"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";

export const InfiniteMovingCards = ({
  items,
  className,
  speed = "fast",
  direction = "left",
  pauseOnHover = true,
}: {
  items: {
    quote: string;
    name: string;
    avatar: string;
    designation: string;
    stars: number;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const [start, setStart] = useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={item.name}
            className="relative flex-shrink-0 bg-gray-100 px-8 py-6 rounded-2xl w-[350px] md:w-[450px] max-w-full"
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="-top-0.5 -left-0.5 -z-1 absolute w-[calc(100%_+_4px)] h-[calc(100%_+_4px)] pointer-events-none user-select-none"
              ></div>

              <div className="flex items-center gap-4">
                <Image
                  width={56}
                  height={56}
                  src={item.avatar}
                  alt={`avatar of ${item.name} rivewer`}
                  className="rounded-full object-cover size-14"
                />

                <div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: Math.floor(item.stars) }).map(
                      (_, idx) => (
                        <Star
                          key={`review-star-${idx}`}
                          className="w-4 h-4 text-red-500 fill-red-500"
                        />
                      )
                    )}
                  </div>

                  <p className="mt-0.5 font-medium text-md">{item.name}</p>
                  <p className="text-xs">{item.designation}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-600">{item.quote}</p>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
