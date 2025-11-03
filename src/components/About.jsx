import { motion } from 'framer-motion';
import { Palette, Code, Layers, PenTool, Image as ImageIcon, Layout, Monitor } from 'lucide-react';

const skills = [
  { name: 'Adobe Illustrator', icon: PenTool },
  { name: 'Photoshop', icon: ImageIcon },
  { name: 'Figma', icon: Layout },
  { name: 'HTML', icon: Code },
  { name: 'CSS', icon: Layers },
  { name: 'JavaScript', icon: Monitor },
  { name: 'React', icon: Code },
  { name: 'Brand & Color', icon: Palette },
];

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent dark:via-blue-950/20 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start"
        >
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">About Me</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              I’m Tiaanwa, a multidisciplinary creative focused on crafting polished design systems and building delightful web experiences. I blend visual storytelling with robust front‑end engineering to produce work that is both beautiful and functional.
            </p>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              When not designing or coding, I explore typography, experiment with motion, and refine details until everything feels just right.
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map(({ name, icon: Icon }) => (
              <motion.div
                key={name}
                whileHover={{ y: -2 }}
                className="group rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur p-4 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10 text-blue-700 dark:text-blue-300">
                    <Icon size={20} />
                  </span>
                  <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
