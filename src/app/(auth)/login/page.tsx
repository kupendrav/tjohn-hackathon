import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const page = () => {
  return (
    <div className="flex md:w-screen items-center justify-center md:min-h-screen md:gap-20">
      <section className="w-96 flex flex-col gap-2">
        <form className="flex flex-col gap-1">
          <Input placeholder="email" type="email" className="w-60" />
          <Input placeholder="password" type="text" className="w-60" />
          <Button className="w-60">Submit</Button>
        </form>
        <div className="flex items-center gap-3 justify-center w-60 py-5">
          <Separator orientation="horizontal" className="w-24" />
          <span className="text-xs">or</span>
          <Separator orientation="horizontal" className="w-24" />
        </div>
        <form>
          <Button className="flex items-center gap-3 w-60" variant={"outline"}>
            <FaLinkedin size={24} />
            Login with LinkedIn
          </Button>
        </form>
        <form>
          <Button className="flex items-center gap-3 w-60" variant={"outline"}>
            <FaGoogle size={24} />
            Login with Google
          </Button>
        </form>

        <form
          action={async () => {
            "use server";
            await signIn("github");
          }}
        >
          <Button className="flex items-center gap-3 w-60" variant={"outline"}>
            <FaGithub size={24} />
            Login with Github
          </Button>
        </form>
      </section>

      <div className="">
        <h1 className="text-3xl font-cal text-center">Login</h1>
        <Image
          src={"/imgs/job_hunt_re_q203.svg"}
          width={250}
          height={250}
          alt="Job searching"
        />
      </div>
    </div>
  );
};

export default page;
