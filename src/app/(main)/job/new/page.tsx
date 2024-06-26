import Navbar from "@/components/Navbar";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { createJob } from "@/actions/job";

const page = () => {
  return (
    <div className="md:px-16 px-8  flex flex-col items-center">
      <div className="w-full">
        <Navbar />
      </div>
      <h1 className="font-semibold text-3xl mb-5 mt-3">Create a new Job</h1>
      <form className="w-96 flex flex-col gap-2 item" action={createJob}>
        <Input placeholder="Job title" name="title" />
        <Input placeholder="Location" name="location" />
        <Input placeholder="salary" name="salary" type="number" />
        <Textarea placeholder="Description" name="description" />
        <Input placeholder="Tags" name="tags" />
        <section className="flex gap-3">
          <div className="flex items-center space-x-2">
            <Checkbox name="mode" value={"fulltime"} id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Full time
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox name="mode" value={"parttime"} id="terms2" />
            <label
              htmlFor="terms2"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Part time
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox name="mode" value={"remote"} id="terms3" />
            <label
              htmlFor="terms3"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remote
            </label>
          </div>
        </section>
        <Button type="submit">Create job</Button>
      </form>
    </div>
  );
};

export default page;
