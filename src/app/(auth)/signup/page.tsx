import { auth, signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { redirect } from "next/navigation";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const page = async () => {
  const session = await auth();
  if (session?.user) {
    redirect("/");
  }
  console.log(session);
  return (
    <div className="flex flex-col md:flex-row md:w-screen w-screen items-center justify-center md:min-h-screen md:gap-20">
      <section className="w-96 flex flex-col gap-2 mt-10 md:mt-5">
        <h1 className="text-3xl font-cal text-center">Register</h1>
        <h1 className="text-sm font-cal text-center">New to Job seez</h1>

        <form className="flex flex-col gap-1 items-center w-96">
          <Input placeholder="email" type="email" className="w-60" />
          <Input placeholder="password" type="text" className="w-60" />
          <h2>Register as</h2>
          <RadioGroup className="flex flex-col mb-2 items-start">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">Individual</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">Company</Label>
            </div>
          </RadioGroup>

          <Button className="w-60">Register</Button>
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
