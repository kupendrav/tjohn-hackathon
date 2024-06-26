"use client";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useSearchParams } from "next/navigation";

const MainSearch = () => {
  const searchParams = useSearchParams();
  const handleSearch = (term: String, location: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term as string);
    } else {
      params.delete("query");
    }
  };
  return (
    <form
      // onSubmit={(formData: FormData)=>{
      //   const query = formData.get("query")
      //   console.log(query)
      // }}
      className="border rounded-md h-12 flex items-center gap-2"
    >
      <Input name="query" placeholder="Job title, keyword or company" />
      <Input name="location" placeholder='City, state zip code or "remote"' />
      <Button>Find Jobs</Button>
    </form>
  );
};

export default MainSearch;
