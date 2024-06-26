import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-5 border-t mt-10 py-5">
      <nav className="flex flex-col md:flex-row">
        <div className="text-xl font-semibold flex items-center gap-1">
          <Image
            src={"/logos/logo-base-32x32.png"}
            width={32}
            height={32}
            alt="logo"
          />{" "}
          jobseekz
        </div>
      </nav>
      <div></div>
      <section className="text-xs flex items-center flex-col">
        <p>Browse by: Companies Jobs Locations Communities</p>
        <p className="font-cal">
          Copyright © 2008-2024, jobseekz LLC. &ldquo; jobseekz &rdquo; and logo
          are registered trademarks of jobseekz LLC.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
