import React from "react";
import logo from "./assets/logo.svg";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-950 to-black text-white font-sans">
      {/* Header */}
      <header className="p-6 flex flex-col md:flex-row items-center justify-center gap-4 text-center animate-fade-in">
        <img src={logo} alt="CavemanPlay logo" className="w-24 h-24 drop-shadow-[0_0_12px_rgba(255,115,0,0.5)] animate-glow" />
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">CavemanPlay</h1>
          <p className="text-lg md:text-xl text-orange-400 mt-1 italic">Play Like It’s the First Time</p>
        </div>
      </header>

      {/* CTA */}
      <section className="text-center py-4 animate-fade-in delay-200">
        <a href="#devlog" className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-xl shadow-md transition">
          Join the Tribe — Follow Our Devlog
        </a>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-6 py-10 text-center animate-fade-in delay-300">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="text-lg text-zinc-300 leading-relaxed">
          CavemanPlay is an indie game studio exploring primal worlds, survival mechanics,
          and immersive crafting adventures. We combine modern game design with the thrill
          of discovery to bring you experiences that feel new — every time.
        </p>
      </section>

      {/* Game Teaser */}
      <section className="bg-zinc-800 py-16 px-6 text-center animate-fade-in delay-500">
        <h2 className="text-3xl font-semibold text-white mb-4">Upcoming Project</h2>
        <p className="text-zinc-300 text-lg mb-6 max-w-2xl mx-auto">
          Our first title is under construction — a survival building game where your tribe’s future depends on you.
        </p>
        <div className="text-orange-400 font-semibold text-xl animate-pulse">Coming soon...</div>
      </section>

      {/* Dev Blog / Development Updates */}
      <section id="devlog" className="bg-zinc-950 py-12 px-6 text-center animate-fade-in delay-700">
        <h2 className="text-3xl font-semibold mb-4">Dev Blog & Updates</h2>
        <p className="text-zinc-300 text-lg mb-8">
          Follow our journey as we build the first title by CavemanPlay — from prototype to primal masterpiece.
        </p>
        <div className="max-w-xl mx-auto text-left text-zinc-400 text-sm bg-zinc-800 p-6 rounded-xl shadow-xl">
          <h3 className="text-orange-400 font-bold text-lg mb-2">🛠️ July 2025 — Prototype Kickoff</h3>
          <p>
            We've begun development on core mechanics: world-building, harvesting, and survival loops.
            Expect Unreal Engine 5 dev logs, behind-the-scenes looks, and early art reveals soon.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-6 text-center animate-fade-in delay-900">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="text-lg text-zinc-300 mb-4">
          Reach us at: <a href="mailto:contact@cavemanplay.com" className="text-orange-400 underline">contact@cavemanplay.com</a>
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-4 text-lg">
          <a href="#" className="hover:text-orange-400">Twitter</a>
          <a href="#" className="hover:text-orange-400">Instagram</a>
          <a href="#" className="hover:text-orange-400">GitHub</a>
          <a href="#" className="hover:text-orange-400">YouTube</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-zinc-500 text-sm border-t border-zinc-800 animate-fade-in delay-1000">
        © {new Date().getFullYear()} CavemanPlay. All rights reserved.
      </footer>
    </main>
  );
}
