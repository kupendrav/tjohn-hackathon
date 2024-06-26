import { auth, signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const page = async() => {
  const session = await auth()
  if(session?.user) {
    redirect("/")
  }
  console.log(session)
  return (
    <div className="flex flex-col md:flex-row md:w-screen w-screen items-center justify-center md:min-h-screen md:gap-20">
      <section className="w-96 flex flex-col gap-2 mt-10 md:mt-5">
        <h1 className="text-3xl font-cal text-center">Login</h1>

        <form className="flex flex-col gap-1 items-center">
          <Input placeholder="email" type="email" className="w-60" />
          <Input placeholder="password" type="text" className="w-60" />
          <Button className="w-60">Submit</Button>
        </form>
        <div className="flex items-center gap-3 justify-center w-60 py-5">
          <Separator orientation="horizontal" className="w-24" />
          <span className="text-xs">or</span>
          <Separator orientation="horizontal" className="w-24" />
        </div>
        <form className="flex flex-col items-center">
          <Button
            className="flex items-center gap-3 w-60"
            disabled
            value={"linkedin"}
            variant={"outline"}
          >
            <FaLinkedin size={24} />
            Login with LinkedIn
          </Button>
        </form>
        <form className="flex flex-col items-center">
          <Button
            className="flex items-center gap-3 w-60"
            disabled
            variant={"outline"}
          >
            <FaGithub size={24} />
            Login with Github
          </Button>
        </form>

        <form
          action={async () => {
            "use server";
            await signIn("google", {redirectTo:"/profile"});
          }}
          className="flex flex-col items-center"
        >
          <Button className="flex items-center gap-3 w-60" variant={"outline"}>
            <FaGoogle size={24} />
            Login with Google
          </Button>
        </form>
      </section>

      <div className="">
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
