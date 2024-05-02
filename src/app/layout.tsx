import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://portfolio-red-wood-digitals-projects.vercel.app/"
  ),
  title: "Red Wood Digital",
  description:
    "As a leading digital marketing agency, we are dedicated to helping businesses thrive in the ever-evolving online landscape. With a passion for innovation and a commitment to delivering results",
  creator: "Md Ahnaf Abir",
  applicationName: "Red Wood Digital",
  keywords: [
    "Ahnaf Abir",
    "Md Ahnaf Abir",
    "Web developer Ahnaf Abir",
    "Software engineer Ahnaf Abir",
    "Red Wood Digital",
    "Branding",
    "Branding with Red Wood Digital",
    "Web Development",
    "Web Development with Red Wood Digital",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
