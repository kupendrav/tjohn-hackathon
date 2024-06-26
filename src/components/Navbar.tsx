import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { ModeToggle } from "./client/DarkModeToggle";
import Link from "next/link";
import { auth, signOut } from "@/auth";
import { Button } from "./ui/button";

const Navbar = async () => {
  const session = await auth();
  const image = session?.user?.image as string;

  return (
    <header className="flex items-center justify-between  py-5 ">
      <Link href={"/"}>
        <div className="text-xl font-semibold flex items-center gap-1">
          <Image
            src={"/logos/logo-base-32x32.png"}
            width={32}
            height={32}
            alt="logo"
          />
          jobseekz
        </div>
      </Link>
      <nav>
        {session?.user ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src={image} />
                <AvatarFallback>MF</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <ModeToggle />
              </DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>
                <form
                  action={async () => {
                    "use server";
                    await signOut();
                  }}
                >
                  <Button className="w-full" variant={"destructive"}>Logout</Button>
                </form>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div className="sm:flex  hidden gap-2">
            <Link href={"/login"}>
              <Button variant={"outline"}>Login</Button>
            </Link>
            <Link href={"signup"}>
              <Button variant={"default"}>Get started now</Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
