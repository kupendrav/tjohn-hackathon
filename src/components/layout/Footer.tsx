"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const footerLinks = {
  Product: [
    { label: "Browse Jobs", href: "/jobs" },
    { label: "Post a Job", href: "/job/new" },
    { label: "Companies", href: "/company" },
  ],
  Resources: [
    { label: "Blog", href: "#" },
    { label: "Career Tips", href: "#" },
    { label: "Help Center", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
};

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = footerRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll(".footer-col"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="border-t mt-20 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="footer-col col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logos/logo-base-32x32.png`}
                width={28}
                height={28}
                alt="JobSeekz logo"
                className="group-hover:scale-110 transition-transform"
              />
              <span className="text-lg font-bold tracking-tight">
                job<span className="text-primary">seekz</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your next career move starts here. Connecting talent with
              opportunity through a modern job platform.
            </p>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="footer-col">
              <h4 className="font-semibold text-sm mb-3">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            &copy; {new Date().getFullYear()} JobSeekz. 
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground">
              Browse by: Jobs &bull; Companies &bull; Locations
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
