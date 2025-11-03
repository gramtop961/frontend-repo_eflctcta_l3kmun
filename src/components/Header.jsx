import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function Header({ onToggleTheme, theme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const close = () => setIsMenuOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  const navItem = (href, label) => (
    <a
      key={href}
      href={href}
      className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
      onClick={() => setIsMenuOpen(false)}
    >
      {label}
    </a>
  );

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 dark:bg-black/60 border-b border-slate-200/60 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="text-2xl font-extrabold tracking-wider text-blue-700 dark:text-blue-400">
            TIAANWA
          </a>

          <nav className="hidden md:flex items-center gap-2">
            {navItem('#home', 'Home')}
            {navItem('#about', 'About')}
            {navItem('#portfolio', 'Portfolio')}
            {navItem('#contact', 'Contact')}
          </nav>

          <div className="flex items-center gap-2">
            <button
              aria-label="Toggle theme"
              onClick={onToggleTheme}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              onClick={() => setIsMenuOpen(v => !v)}
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-1">
            {navItem('#home', 'Home')}
            {navItem('#about', 'About')}
            {navItem('#portfolio', 'Portfolio')}
            {navItem('#contact', 'Contact')}
          </div>
        )}
      </div>
    </header>
  );
}
