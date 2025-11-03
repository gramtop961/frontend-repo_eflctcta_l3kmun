import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white dark:from-black/70 dark:via-black/40 dark:to-black" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center rounded-full border border-blue-200 dark:border-blue-900 bg-blue-50/70 dark:bg-blue-950/40 px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">
              Graphic Designer • Web Developer
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">TASTAFTIYAAN WOHING ATI</span>
            </h1>
            <p className="max-w-xl text-slate-600 dark:text-slate-300 text-lg">
              I craft elegant brand visuals and build modern, performant websites. Clean aesthetics, thoughtful interactions, and pixel-perfect details.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700 transition"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 dark:border-slate-700 px-5 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-md">
              <div className="rounded-3xl border border-slate-200/70 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur p-2 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1400&auto=format&fit=crop"
                  alt="Tiaanwa portrait"
                  className="aspect-[4/5] w-full object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-2xl bg-gradient-to-tr from-blue-600 to-blue-400 opacity-40 blur-2xl" />
              <div className="absolute -top-6 -right-6 h-28 w-28 rounded-2xl bg-gradient-to-tr from-blue-400 to-cyan-400 opacity-40 blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
