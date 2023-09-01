import { Header } from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({
  weight: ["300", "600", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor | REST Countries API with color theme switcher",
  description: "Page built for a Frontend Mentor challenge",
  authors: { name: "Jean", url: "https://github.com/JenaCarry" },
  keywords: [
    "Frontend Mentor",
    "Frontend",
    "Mentor",
    "REST Countries API with color theme switcher",
    "REST Countries API",
    "with color theme switcher",
    "HTML",
    "CSS",
    "JavaScript",
    "TailwindCSS",
    "TypeScript",
    "React",
    "Next.js",
    "React-Icons",
    "Responsive",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body className={nunitoSans.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
