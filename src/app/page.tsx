import React from "react";
import {
  Navbar,
  Footer,
  HeroSection,
  ArchievementsSection,
  AboutSection,
  ProjectsSection,
} from "@/components";
import { Metadata } from "next";
import { EmailSection } from "@/components/email/EmailSection";

export const metadata: Metadata = {
  title: "Danny Sequeira | Personal Portfolio",
  description:
    "Crafting immersive digital experiences one line of code at a time. I'm a passionate web, mobile, and backend developer dedicated to bringing innovative ideas to life through elegant and efficient solutions. Explore my portfolio and discover the power of technology to transform concepts into reality. Let's build something extraordinary together.",
  openGraph: {
    images: [
      "https://new.rdani2005.com/hero.png",
      // "https://new.rdani2005.com/about.jpeg",
    ],
    title: "Danny Sequeira | Personal Portfolio",
    description:
      "Crafting immersive digital experiences one line of code at a time. I'm a passionate web, mobile, and backend developer dedicated to bringing innovative ideas to life through elegant and efficient solutions. Explore my portfolio and discover the power of technology to transform concepts into reality. Let's build something extraordinary together.",
  },
};

const HomePage = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <ArchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
};

export default HomePage;
