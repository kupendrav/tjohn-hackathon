"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface AnimatedTextProps {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  splitBy?: "words" | "chars";
}

export default function AnimatedText({
  text,
  className = "",
  tag: Tag = "h1",
  delay = 0,
  splitBy = "words",
}: AnimatedTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = containerRef.current;
    if (!el) return;

    const spans = el.querySelectorAll(".anim-unit");

    gsap.fromTo(
      spans,
      { opacity: 0, y: 50, rotateX: -40 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.7,
        stagger: 0.04,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [text, delay]);

  const units =
    splitBy === "words"
      ? text.split(" ").map((word, i) => (
          <span
            key={i}
            className="anim-unit inline-block mr-[0.25em]"
            style={{ perspective: "600px" }}
          >
            {word}
          </span>
        ))
      : text.split("").map((char, i) => (
          <span
            key={i}
            className="anim-unit inline-block"
            style={{ perspective: "600px" }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ));

  return (
    <div ref={containerRef} style={{ overflow: "hidden" }}>
      <Tag className={className}>{units}</Tag>
    </div>
  );
}
