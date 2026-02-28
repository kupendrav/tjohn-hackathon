"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
}: AnimatedCounterProps) {
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = counterRef.current;
    if (!el) return;

    const obj = { val: 0 };

    gsap.to(obj, {
      val: target,
      duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none reverse",
        onEnter: () => {
          gsap.to(obj, {
            val: target,
            duration,
            ease: "power2.out",
            onUpdate: () => {
              if (el) {
                el.textContent = `${prefix}${Math.round(obj.val).toLocaleString()}${suffix}`;
              }
            },
          });
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [target, suffix, prefix, duration]);

  return (
    <span ref={counterRef} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
