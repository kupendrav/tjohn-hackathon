"use client";

import { useRef, useEffect, Children } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface StaggerGridProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  duration?: number;
}

export default function StaggerGrid({
  children,
  className = "",
  stagger = 0.1,
  duration = 0.6,
}: StaggerGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = containerRef.current;
    if (!el) return;

    const items = el.children;

    gsap.fromTo(
      items,
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration,
        stagger,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [stagger, duration]);

  return (
    <div ref={containerRef} className={className}>
      {Children.map(children, (child) => child)}
    </div>
  );
}
