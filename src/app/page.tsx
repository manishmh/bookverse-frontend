"use client";

import ContinueWatching from "@/components/home/continue-watching/continue-watching";
import Hero from "@/components/home/hero/hero";
import Navbar from "@/components/home/navbar/navbar";
import Trending from "@/components/home/trending/trending";

export default function Home() {
  return (
    <main>
      <div className="md:fixed w-full backdrop-blur-sm relative z-40">
        <Navbar />
      </div>
      <Hero />
      <Trending />
      <ContinueWatching />
    </main>
  );
}
