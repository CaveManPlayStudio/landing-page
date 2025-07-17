import React from "react";
import logo from "./assets/logo.svg";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-900 text-white font-sans">
      {/* Hero Header */}
      <header className="py-10 px-6 flex flex-col items-center justify-center text-center bg-gradient-to-b from-zinc-950 to-zinc-900">
        <img src={logo} alt="CavemanPlay Logo" className="w-24 h-24 mb-4 drop-shadow-lg" />
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">CavemanPlay</h1>
        <p className="text-xl text-orange-400 mt-2">Play Like It’s the First Time</p>
        <button className="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-lg font-semibold shadow-md transition-all">
          Join the Tribe
        </button>
      </header>

      {/* About Section */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="text-lg text-zinc-300 leading-relaxed">
          CavemanPlay is an indie game studio exploring primal worlds, survival mechanics,
          and immersive crafting adventures. We combine modern game design with the thrill
          of discovery to bring you experiences that feel new — every time.
        </p>
      </section>

      {/* Game Teaser Section */}
      <section className="bg-zinc-800 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold text-white mb-4">Upcoming Project</h2>
        <p className="text-zinc-300 text-lg mb-6 max-w-2xl mx-auto">
          Our first title is under construction — a survival building game where your tribe’s future depends on you.
        </p>
        <div className="text-orange-400 font-semibold text-xl">Coming soon...</div>
      </section>

      {/* Dev Blog Preview */}
      <section className="bg-zinc-950 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Dev Blog & Updates</h2>
        <p className="text-zinc-300 text-lg mb-4 max-w-2xl mx-auto">
          Follow our journey from idea to primal survival game — from prototypes to production.
        </p>
        <div className="max-w-xl mx-auto text-left text-zinc-400 text-sm bg-zinc-800 p-6 rounded-xl shadow-xl">
          <h3 className="text-orange-400 font-bold text-lg mb-2">🛠️ July 2025 — Prototype Kickoff</h3>
          <p>
            We've started prototyping core survival mechanics and terrain in Unreal Engine 5.
            Early crafting, harvesting, and world-building systems are underway.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="text-lg text-zinc-300 mb-4">
          Reach us at:{" "}
          <a
            href="mailto:contact@cavemanplay.com"
            className="text-orange-400 underline hover:text-orange-300"
          >
            contact@cavemanplay.com
          </a>
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-4 text-lg">
          <a href="#" className="hover:text-orange-400">Twitter</a>
          <a href="#" className="hover:text-orange-400">Instagram</a>
          <a href="#" className="hover:text-orange-400">GitHub</a>
          <a href="#" className="hover:text-orange-400">YouTube</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-zinc-500 text-sm border-t border-zinc-800">
        © {new Date().getFullYear()} CavemanPlay. All rights reserved.
      </footer>
    </main>
  );
}
