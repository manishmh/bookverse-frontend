"use client";

import Hero from "@/components/home/hero/hero";
import Navbar from "@/components/home/navbar/navbar";

export default function Home() {
  return (
    <main>
      <div className="md:fixed w-full z-40 backdrop-blur-sm">
        <Navbar />
      </div>
      <Hero />
    </main>
  );
}
