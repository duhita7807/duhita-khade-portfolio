import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));

const PageFallback = () => (
  <div className="flex min-h-screen items-center justify-center text-sm text-slate-500">
    Loading portfolio...
  </div>
);

function App() {
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = saved || (prefersDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-100">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
