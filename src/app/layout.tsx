import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local";
const inter = Inter({ subsets: ["latin"] });

const calsans = localFont({
  src: [
    {
      path: "../../public/fonts/CalSans-SemiBold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-calsans",
});

export const metadata: Metadata = {
  title: "JobSeekz — Find Your Dream Job",
  description:
    "A modern job board connecting talent with opportunity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${calsans.variable}`}>
        <ThemeProvider
          attribute="class"
          enableSystem
          disableTransitionOnChange
          defaultTheme={"dark"}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
