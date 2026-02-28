"use client";

import { useRef } from "react";
import { gsap } from "gsap";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export default function MagneticButton({
  children,
  className = "",
  strength = 0.3,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = buttonRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(el, {
      x: x * strength,
      y: y * strength,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    const el = buttonRef.current;
    if (!el) return;

    gsap.to(el, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)",
    });
  };

  return (
    <div
      ref={buttonRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ display: "inline-block" }}
    >
      {children}
    </div>
  );
}
