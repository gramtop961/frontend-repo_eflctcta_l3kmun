import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import PortfolioContact from './components/PortfolioContact.jsx';

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-black dark:text-slate-100 font-inter">
      <Header onToggleTheme={toggleTheme} theme={theme} />
      <main>
        <Hero />
        <About />
        <PortfolioContact />
      </main>
      <footer className="border-t border-slate-200 dark:border-slate-800 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600 dark:text-slate-400">Copyright © 2025 tiaanwa.id – All rights reserved</p>
          <a href="#home" className="text-sm font-semibold text-blue-700 dark:text-blue-300 hover:underline">Back to top</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
