import { Inter } from "next/font/google";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <main
      className={`${inter.className} min-h-screen bg-gray-900 relative p-2 pb-0`}
    >
      <Header />
      <Hero />
    </main>
  );
};

export default Home;
