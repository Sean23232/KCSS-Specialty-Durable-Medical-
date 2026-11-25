import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useEffect } from "react";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import {
  ButtonLink,
  Footer,
  Header,
  InquiryProvider,
  ScrollProgress,
} from "./components";
import Home from "./pages/Home";
import { ProductDetailPage, ShopPage } from "./pages/Store";
import { SpecialtiesPage, SpecialtyDetailPage } from "./pages/Specialties";
import { AboutPage, ContactPage } from "./pages/AboutContact";

function RouteEffects() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    const section = pathname === "/" ? "Personal Attention" : pathname.startsWith("/product/") ? "Product Study" : pathname.startsWith("/specialties/") ? "Specialty Collection" : pathname === "/shop" ? "Specialty Products" : pathname === "/specialties" ? "Our Specialties" : pathname === "/about" ? "About Us" : pathname === "/contact" ? "Contact" : "Page Not Found";
    document.title = `${section} | KCSS Specialty Durable Medical`;
  }, [pathname]);
  return null;
}

function NotFoundPage() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-soft py-20">
      <div className="gold-grid absolute inset-0 opacity-50" />
      <div className="container-narrow relative text-center">
        <p className="text-[0.67rem] font-bold uppercase tracking-[0.2em] text-gold">404 · Page not found</p>
        <h1 className="mt-5 text-balance font-display text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.98] tracking-[-0.06em] text-navy">Let’s get you back to a helpful place.</h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate">The page you requested is not part of this website concept. Return home or continue exploring the specialty product catalog.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><ButtonLink to="/" variant="navy">Return home</ButtonLink><ButtonLink to="/shop" variant="outline">Explore products</ButtonLink></div>
      </div>
    </section>
  );
}

function SiteRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main id="main-content" tabIndex={-1} className="outline-none" key={location.pathname} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.28, ease: "easeOut" }}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:slug" element={<ProductDetailPage />} />
          <Route path="/specialties" element={<SpecialtiesPage />} />
          <Route path="/specialties/:slug" element={<SpecialtyDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <HashRouter>
        <RouteEffects />
        <InquiryProvider>
          <button type="button" onClick={() => document.getElementById("main-content")?.focus()} className="fixed left-4 top-4 z-[120] -translate-y-24 bg-gold px-5 py-3 text-xs font-bold uppercase tracking-[0.1em] text-navy transition-transform focus:translate-y-0">Skip to content</button>
          <ScrollProgress />
          <Header />
          <SiteRoutes />
          <Footer />
        </InquiryProvider>
      </HashRouter>
    </MotionConfig>
  );
}
