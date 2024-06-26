import React from "react";
import { IoIosOptions } from "react-icons/io";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CheckBoxWithText from "./client/CheckBoxWithText";

const domains = [
  "Digital",
  "Consulting",
  "Technology",
  "Operations",
  "Marketing",
  "Software",
  "Digital Media",
  "E-commerce",
  "Retail",
  "Cloud",
];

const skills = [
  "Javascript",
  "Python",
  "Java",
  "Figma",
  "Typescript",
  "Angularjs",
  "Nextjs",
  "Reactjs",
  "Figma",
  "UI/UX",
  "AI",
  "Machine Learning",
];

const MainFilter = () => {

  return (
    <section className="flex items-center gap-1 justify-start w-screen mt-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"outline"} className="flex items-center gap-1">
            <IoIosOptions />
            Filter
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Job near me" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="10">Within 5-10kms</SelectItem>
          <SelectItem value="dark">10-20kms</SelectItem>
          <SelectItem value="system">Ok to relocate</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Job Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Full time</SelectItem>
          <SelectItem value="dark">Internships</SelectItem>
          <SelectItem value="system">Fresher</SelectItem>
          <SelectItem value="system">Part time</SelectItem>
        </SelectContent>
      </Select>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"outline"} className="flex items-center gap-1">
            Skills
            {/* <FaAngleDown /> */}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="mb-3">Are you absolutely sure?</DialogTitle>
            <DialogDescription className="grid grid-cols-2 gap-1">
              {skills.map((domain) => (
                <CheckBoxWithText id={domain.toLowerCase().replaceAll(" ", "")}>
                  {domain}
                </CheckBoxWithText>
              ))}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"outline"} className="flex items-center gap-1">
            Domain
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="mb-3">Domains</DialogTitle>
            <DialogDescription className="grid grid-cols-2  gap-1">
              {domains.map((domain) => (
                <CheckBoxWithText id={domain.toLowerCase().replaceAll(" ", "")}>
                  {domain}
                </CheckBoxWithText>
              ))}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default MainFilter;
