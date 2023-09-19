"use client";
import Image from "next/image";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import CaseStudyList from "./components/CaseStudyList";
import WaveBanner from "./components/WaveBanner";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <div className="container relative m-auto flex w-screen flex-col items-center">
        <Hero />
      </div>
      <WaveBanner />
      <div className="container m-auto w-screen">
        <CaseStudyList />
      </div>
      <WaveBanner direction />
    </main>
  );
}
