import { useEffect } from "react";
import Lenis from "lenis";
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Handle smooth scrolling for anchor links 
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Search for anchor element OR any element with href starting with '#'
      const anchor = target.closest("a") || target.closest("[href^='#']");

      if (anchor) {
        const href = anchor.getAttribute("href");
        if (href && href.startsWith("#") && href.length > 1) {
          e.preventDefault();
          e.stopPropagation();
          lenis.scrollTo(href);
        }
      }
    };

    // Important: Use capture phase true to intercept the click before it bubbles to NextUI buttons or native elements
    document.documentElement.addEventListener("click", handleAnchorClick, { capture: true });

    return () => {
      document.documentElement.removeEventListener("click", handleAnchorClick, { capture: true });
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen relative bg-background selection:bg-primary selection:text-black">
      {/* Background Noise/Grain Effect */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <Navigation />

      <main className="sm:pl-16 md:pl-24 sm:pr-16 md:pr-20 pt-20 sm:pt-0">
        <div className="max-w-[1400px] mx-auto min-h-screen">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </div>
      </main>

      {/* Decorative Circles inspired by Omelet */}
      <div className="fixed top-20 right-40 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="fixed bottom-40 left-60 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
    </div>
  )
}

export default App
