import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GSAPProvider from "@/components/animations/GSAPProvider";
import FadeInView from "@/components/animations/FadeInView";
import AnimatedText from "@/components/animations/AnimatedText";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <GSAPProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center px-4">
          <FadeInView direction="up">
            <div className="text-center max-w-md">
              <div className="w-20 h-20 rounded-full bg-muted mx-auto mb-6 flex items-center justify-center text-3xl">&#128100;</div>
              <h1 className="text-2xl font-bold mb-2">Your Profile</h1>
              <p className="text-muted-foreground mb-6">Sign in to view and manage your profile, saved jobs, and applications.</p>
              <div className="flex gap-3 justify-center">
                <Link href="/login"><Button>Sign In</Button></Link>
                <Link href="/signup"><Button variant="outline">Create Account</Button></Link>
              </div>
            </div>
          </FadeInView>
        </main>
        <Footer />
      </div>
    </GSAPProvider>
  );
}