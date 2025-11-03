import { motion } from 'framer-motion';
import { ExternalLink, Instagram, Linkedin, Github, Globe } from 'lucide-react';

const works = [
  {
    title: 'Brand Identity — Aurora',
    image: 'https://images.unsplash.com/photo-1562701447-e0b79b331bab?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCcmFuZCUyMElkZW50aXR5JTIwJUUyJTgwJTk0JTIwQXVyb3JhfGVufDB8MHx8fDE3NjIyMTQwMzZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Landing Page — Nova Labs',
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Mobile UI — Flow Finance',
    image: 'https://images.unsplash.com/photo-1586717799252-bd134ad00e26?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Poster Series — Kinetic',
    image: 'https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Web App — Atlas Dashboard',
    image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Packaging — Blue Bottle',
    image: 'https://images.unsplash.com/photo-1684369586188-bad829e7c51f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXZWIlMjBBcHAlMjAlRTIlODAlOTQlMjBBdGxhcyUyMERhc2hib2FyZHxlbnwwfDB8fHwxNzYyMjE0MDM3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
];

export default function PortfolioContact() {
  return (
    <section id="portfolio" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Portfolio</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">A selection of recent design and web projects.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 text-blue-700 dark:text-blue-300 hover:underline">
            Let’s work together <ExternalLink size={16} />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, idx) => (
            <motion.a
              key={work.title}
              href={work.image}
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={work.image} alt={work.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
              <div className="flex items-center justify-between px-4 py-3">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{work.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Click to view</p>
                </div>
                <ExternalLink className="text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition" size={18} />
              </div>
            </motion.a>
          ))}
        </div>

        <div id="contact" className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur p-6 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Let’s build something great</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Share a bit about your project and I’ll get back to you soon.</p>
            <form className="mt-6 grid grid-cols-1 gap-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                <input
                  type="email"
                  required
                  className="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                <textarea
                  rows={5}
                  required
                  className="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button type="submit" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700 transition">
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur p-6 shadow-sm"
          >
            <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Connect</h4>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Find me on social media and creative platforms.</p>
            <div className="mt-6 grid grid-cols-1 gap-3">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-lg border border-slate-200 dark:border-slate-800 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition">
                <span className="flex items-center gap-3 text-slate-800 dark:text-slate-200"><Instagram size={18} /> Instagram</span>
                <ExternalLink size={16} className="text-slate-400" />
              </a>
              <a href="https://behance.net" target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-lg border border-slate-200 dark:border-slate-800 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition">
                <span className="flex items-center gap-3 text-slate-800 dark:text-slate-200"><Globe size={18} /> Behance</span>
                <ExternalLink size={16} className="text-slate-400" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-lg border border-slate-200 dark:border-slate-800 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition">
                <span className="flex items-center gap-3 text-slate-800 dark:text-slate-200"><Linkedin size={18} /> LinkedIn</span>
                <ExternalLink size={16} className="text-slate-400" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-lg border border-slate-200 dark:border-slate-800 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition">
                <span className="flex items-center gap-3 text-slate-800 dark:text-slate-200"><Github size={18} /> GitHub</span>
                <ExternalLink size={16} className="text-slate-400" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
