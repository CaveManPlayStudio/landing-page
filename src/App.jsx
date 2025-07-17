import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-900 text-white font-sans">
      {/* Header */}
      <header className="p-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">CavemanPlay</h1>
        <p className="text-xl text-orange-400 mt-2">Play Like It’s the First Time</p>
      </header>

      {/* About Section */}
      <section className="max-w-3xl mx-auto px-6 py-10 text-center">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="text-lg text-zinc-300">
          CavemanPlay is an indie game studio exploring primal worlds, survival mechanics,
          and immersive crafting adventures. We combine modern game design with the thrill
          of discovery to bring you experiences that feel new — every time.
        </p>
      </section>

      {/* Game Teaser */}
      <section className="bg-zinc-800 py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold text-white mb-4">Upcoming Project</h2>
        <p className="text-zinc-300 text-lg mb-6">
          Our first title is under construction — a survival building game where your tribe’s future depends on you.
        </p>
        <div className="text-orange-400 font-semibold">Coming soon...</div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="text-lg text-zinc-300 mb-4">
          Reach us at: <a href="mailto:cavemanplaystudio@gmail.com" className="text-orange-400 underline">cavemanplaystudio@gmail.com</a>
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="hover:text-orange-400">Twitter</a>
          <a href="#" className="hover:text-orange-400">Instagram</a>
          <a href="#" className="hover:text-orange-400">GitHub</a>
          <a href="#" className="hover:text-orange-400">YouTube</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-zinc-500 text-sm">
        © {new Date().getFullYear()} CavemanPlay. All rights reserved.
      </footer>
    </main>
  );
}
