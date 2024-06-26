import MainBreadCrum from "@/components/MainBreadCrum";
import MainFilter from "@/components/MainFilter";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="px-10 md:px-16">
      <Navbar />
      <MainFilter />
      <MainBreadCrum />
    </div>
  );
};

export default page;
