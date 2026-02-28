"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface FadeInViewProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  className?: string;
  distance?: number;
}

export default function FadeInView({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  className = "",
  distance = 60,
}: FadeInViewProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = ref.current;
    if (!el) return;

    const directionMap = {
      up: { y: distance, x: 0 },
      down: { y: -distance, x: 0 },
      left: { x: distance, y: 0 },
      right: { x: -distance, y: 0 },
      none: { x: 0, y: 0 },
    };

    const { x, y } = directionMap[direction];

    gsap.fromTo(
      el,
      { opacity: 0, x, y },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [direction, delay, duration, distance]);

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
