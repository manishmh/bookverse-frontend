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
      <div className="flex">
        <div className="w-full lg:w-9/12 flex-shrink-0">
          <ContinueWatching />
        </div>
        <div className="w-full hidden lg:block"></div>
      </div>
    </main>
  );
}
