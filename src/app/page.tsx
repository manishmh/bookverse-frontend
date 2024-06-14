"use client";

import Footer from "@/components/global/footer";
import ContinueWatching from "@/components/home/continue-watching/continue-watching";
import BookGenres from "@/components/home/genres/genres";
import Hero from "@/components/home/hero/hero";
import LatestChapters from "@/components/home/latest-chapters/latest-chapters";
import Navbar from "@/components/home/navbar/navbar";
import NewOnBookverse from "@/components/home/new-on-bookverse/new-on-bookverse";
import TopBook from "@/components/home/top-book/top-book";
import Trending from "@/components/home/trending/trending";

import axios from "axios";

const url = "http://localhost:3000/manga/mangadex/info";
const data = async () => {
  try {
    const { data } = await axios.get(url, {
      params: { id: "demon-slayer" },
    });
    console.log("data from fetch", data);
    return data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};

data();

export default function Home() {
  return (
    <main>
      <div className="md:fixed w-full backdrop-blur-sm relative z-40">
        <Navbar />
      </div>
      <Hero />
      <Trending />
      <div className="xl:flex gap-4">
        <div className="w-full xl:w-9/12 flex-shrink-0 space-y-8">
          <ContinueWatching />
          <LatestChapters />
          <NewOnBookverse />
        </div>
        <div className="w-full px-3 xl:px-0 pr-3 pt-8 space-y-6">
          <TopBook />
          <BookGenres />
        </div>
      </div>
      <Footer />
    </main>
  );
}
