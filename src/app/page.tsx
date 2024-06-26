import React from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import MainFilter from "@/components/MainFilter";
import MainBreadCrum from "@/components/MainBreadCrum";
import Image from "next/image";
import Footer from "@/components/Footer";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import MainSearch from "@/components/MainSearch";
import { Badge } from "@/components/ui/badge";
import { FaArrowRightToBracket } from "react-icons/fa6";

const programmingLanguages = [
  {
    src: "/languages/python.png",
    title: "Python",
  },
  {
    src: "/languages/js.png",
    title: "JavaScript",
  },
  {
    src: "/languages/typescript.png",
    title: "TypeScript",
  },
  {
    src: "/languages/figma.png",
    title: "Figma",
  },
  {
    src: "/languages/java.png",
    title: "Java",
  },
  {
    src: "/languages/figma.png",
    title: "Figma",
  },
  {
    src: "/languages/java.png",
    title: "Java",
  },
];

const page = () => {
  return (
    <div className="flex flex-col overflow-x-hidden md:px-16 px-8">
      <Navbar />
      <MainSearch />
      <MainBreadCrum />
      <MainFilter />
      <main>
        <h2 className="font-bold text-2xl mt-10">Popular Languages</h2>
        <ScrollArea className="w-96 md:w-screen whitespace-nowrap rounded-md ">
          <section className="flex py-5 gap-7">
            {programmingLanguages.map(({ src, title }) => (
              <EachLanguageContainer title={title} src={src} key={src} />
            ))}
          </section>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <h2 className="font-bold text-2xl mt-10">Jobs</h2>
        <section className="grid grid-cols-1 gap-3 lg:grid-cols-2 py-10">
          <EachJobContainer/>
          <EachJobContainer/>
          <EachJobContainer/>
        </section>
      </main>
      {/* <h1 className="font-cal text-4xl">
        An example app built using Next.js 13 server components.
      </h1>
      <p className="text-sm">
        I'm building a web app with Next.js 13 and open sourcing everything.
        Follow along as we figure this out together.
      </p>
      <Button variant="outline">Button</Button> */}
      <Footer />
    </div>
  );
};

const EachLanguageContainer = ({
  src,
  title,
}: {
  src: string;
  title: string;
}) => {
  return (
    <div className="flex flex-col  items-center gap-2">
      <Image
        className="rounded-full shadow-2xl object-center object-contain hover:shadow-primary hover:shadow-lg size-16 "
        src={src}
        width={100}
        height={100}
        alt="javascript icon"
      />
      <h3 className="text-xs font-extralight capitalize">{title}</h3>
    </div>
  );
};

const EachJobContainer = () => {
  return (
    <div className="border rounded-md  py-6 px-5 w-96">
      <h3 className="font-semibold text-lg">Management Trainee Ecommerce</h3>
      <div className="flex gap-1 mt-1 mb-3">
        <Badge variant="outline">Full Time</Badge>
        <Badge variant="outline">$80000-$100000</Badge>
      </div>
      <ul className="text-[10px] list-disc ml-5 mb-3">
        <li>
          prospecting, qualifying, negotiating and closing agreements with
          partners. The ideal candidate
        </li>
        <li>
          prospecting, qualifying, negotiating and closing agreements with
          partners. The ideal candidate
        </li>
      </ul>
      <Button size={"sm"} className="flex items-center gap-1">
        Apply
        <FaArrowRightToBracket />
      </Button>
    </div>
  );
};

export default page;
