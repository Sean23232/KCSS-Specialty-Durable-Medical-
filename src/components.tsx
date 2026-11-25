import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Copy,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import {
  createContext,
  type FormEvent,
  type ReactNode,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { business, type Product, specialties } from "./data";
import { cn } from "./utils/cn";

export function Logo({ light = false, onClick }: { light?: boolean; onClick?: () => void }) {
  return (
    <Link to="/" onClick={onClick} className="group inline-flex items-center gap-3" aria-label="KCSS home">
      <svg viewBox="0 0 48 48" className="h-10 w-10 shrink-0" aria-hidden="true">
        <path d="M4 4h10v40H4z" fill={light ? "#fff" : "#08083E"} />
        <path d="M18 4h8L16 24l12 20h-9L7 24z" fill={light ? "#fff" : "#08083E"} />
        <path d="M31 4h13L31 24h-8z" fill="#FFB900" />
        <path d="M25 27h7l12 17H31z" fill="#FFB900" />
      </svg>
      <span className="flex flex-col">
        <span className={cn("font-display text-[1.55rem] font-extrabold leading-none tracking-[-0.055em]", light ? "text-white" : "text-navy")}>
          KCSS<span className="text-gold">.</span>
        </span>
        <span className={cn("mt-1 text-[0.51rem] font-bold uppercase tracking-[0.19em]", light ? "text-white/60" : "text-navy/55")}>
          Specialty Durable Medical
        </span>
      </span>
    </Link>
  );
}

type ButtonLinkProps = {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: "gold" | "navy" | "outline" | "white" | "text";
  className?: string;
  external?: boolean;
  onClick?: () => void;
  arrow?: boolean;
};

export function ButtonLink({
  to,
  href,
  children,
  variant = "navy",
  className,
  external,
  onClick,
  arrow = true,
}: ButtonLinkProps) {
  const classes = cn(
    "group/btn inline-flex min-h-12 items-center justify-center gap-3 px-6 py-3 text-[0.78rem] font-bold uppercase tracking-[0.105em] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold",
    variant === "gold" && "bg-gold text-navy hover:bg-[#ffc633] hover:shadow-[0_12px_32px_rgba(255,185,0,0.22)]",
    variant === "navy" && "bg-navy text-white hover:bg-[#171757] hover:shadow-[0_12px_32px_rgba(8,8,62,0.16)]",
    variant === "outline" && "border border-navy/20 bg-transparent text-navy hover:border-navy hover:bg-navy hover:text-white",
    variant === "white" && "bg-white text-navy hover:bg-gold",
    variant === "text" && "min-h-0 px-0 py-1 text-navy",
    className,
  );
  const content = (
    <>
      <span>{children}</span>
      {arrow && <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" aria-hidden="true" />}
    </>
  );
  if (to) return <Link to={to} className={classes} onClick={onClick}>{content}</Link>;
  return (
    <a href={href} className={classes} onClick={onClick} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
      {content}
    </a>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 160, damping: 28, restDelta: 0.001 });
  return <motion.div className="fixed inset-x-0 top-0 z-[80] h-[3px] origin-left bg-gold" style={{ scaleX }} aria-hidden="true" />;
}

const navItems = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "Specialties", to: "/specialties" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return () => { document.body.style.overflow = ""; };
    const timer = window.setTimeout(() => document.getElementById("mobile-menu-close")?.focus(), 120);
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="relative z-50 flex h-8 items-center justify-center bg-navy px-4 text-center text-[0.62rem] font-semibold uppercase tracking-[0.17em] text-white/70">
        <span>Formerly KC Shoe Stop</span><span className="mx-3 text-gold">•</span><span>Shawnee, Kansas</span>
      </div>
      <header className={cn("sticky top-0 z-50 border-b transition-all duration-500", scrolled ? "border-navy/10 bg-white/95 shadow-[0_8px_35px_rgba(8,8,62,0.06)] backdrop-blur-xl" : "border-transparent bg-white")}>
        <div className="container-wide flex h-[76px] items-center justify-between gap-6 lg:h-[86px]">
          <Logo />
          <nav className="hidden items-center gap-7 xl:flex" aria-label="Main navigation">
            {navItems.map((item) => item.label === "Specialties" ? (
              <div key={item.to} className="group relative py-8">
                <NavLink to={item.to} className={({ isActive }) => cn("flex items-center gap-1.5 text-[0.75rem] font-bold uppercase tracking-[0.09em] transition-colors hover:text-gold", isActive ? "text-navy" : "text-navy/65")}>
                  {item.label}<ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                </NavLink>
                <div className="invisible absolute left-1/2 top-[72px] w-[340px] -translate-x-1/2 translate-y-3 border-t-2 border-gold bg-white p-3 opacity-0 shadow-[0_24px_70px_rgba(8,8,62,0.16)] transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <Link to="/specialties" className="block px-4 py-3 text-[0.66rem] font-bold uppercase tracking-[0.14em] text-navy/45 transition-colors hover:bg-soft hover:text-navy">View all specialties</Link>
                  {specialties.map((specialty, index) => (
                    <Link key={specialty.slug} to={`/specialties/${specialty.slug}`} className="group/item flex items-center justify-between gap-4 px-4 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-soft">
                      <span><span className="mr-3 text-[0.62rem] text-gold">0{index + 1}</span>{specialty.navTitle}</span>
                      <ArrowRight className="h-4 w-4 -translate-x-2 opacity-0 transition-all group-hover/item:translate-x-0 group-hover/item:opacity-100" />
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => cn("relative py-3 text-[0.75rem] font-bold uppercase tracking-[0.09em] transition-colors after:absolute after:inset-x-0 after:bottom-1 after:h-px after:origin-left after:bg-gold after:transition-transform hover:text-navy", isActive ? "text-navy after:scale-x-100" : "text-navy/65 after:scale-x-0")}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="hidden items-center gap-5 md:flex">
            <a href={business.phoneHref} className="hidden items-center gap-2 text-sm font-bold text-navy transition-colors hover:text-gold lg:flex">
              <Phone className="h-4 w-4 text-gold" />{business.phone}
            </a>
            <ButtonLink to="/contact" variant="gold" className="min-h-11 px-5">Contact Us</ButtonLink>
          </div>
          <button type="button" onClick={() => setOpen(true)} className="flex h-12 w-12 shrink-0 items-center justify-center border border-navy/15 text-navy xl:hidden" aria-label="Open navigation" aria-expanded={open}>
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-[70] bg-navy text-white xl:hidden" initial={{ clipPath: "inset(0 0 100% 0)" }} animate={{ clipPath: "inset(0 0 0% 0)" }} exit={{ clipPath: "inset(0 0 100% 0)" }} transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}>
            <div className="flex h-[76px] items-center justify-between border-b border-white/10 px-5">
              <Logo light onClick={() => setOpen(false)} />
              <button id="mobile-menu-close" type="button" onClick={() => setOpen(false)} className="flex h-12 w-12 items-center justify-center border border-white/20" aria-label="Close navigation"><X /></button>
            </div>
            <div className="flex h-[calc(100%-76px)] flex-col overflow-y-auto px-6 pb-8 pt-8">
              <nav className="flex flex-col" aria-label="Mobile navigation">
                {navItems.map((item, index) => (
                  <motion.div key={item.to} initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.18 + index * 0.06 }}>
                    <NavLink to={item.to} onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-white/10 py-4 font-display text-[1.75rem] font-semibold tracking-[-0.04em]">
                      {item.label}<span className="text-xs font-normal tracking-normal text-gold">0{index + 1}</span>
                    </NavLink>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3">
                {specialties.map((specialty) => <Link key={specialty.slug} to={`/specialties/${specialty.slug}`} onClick={() => setOpen(false)} className="text-xs leading-5 text-white/55">{specialty.navTitle}</Link>)}
              </div>
              <div className="mt-auto space-y-3 pt-8">
                <ButtonLink href={business.phoneHref} variant="white" className="w-full">Call {business.phone}</ButtonLink>
                <ButtonLink to="/contact" variant="gold" className="w-full" onClick={() => setOpen(false)}>Contact Our Team</ButtonLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function Reveal({ children, className, delay = 0, y = 42 }: { children: ReactNode; className?: string; delay?: number; y?: number }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y, clipPath: "inset(0 0 12% 0)" }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ eyebrow, title, copy, align = "left", light = false }: { eyebrow: string; title: string; copy?: string; align?: "left" | "center"; light?: boolean }) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <Reveal>
        <div className={cn("mb-5 flex items-center gap-3 text-[0.67rem] font-bold uppercase tracking-[0.2em]", light ? "text-gold" : "text-navy/55", align === "center" && "justify-center")}>
          <span className="h-px w-8 bg-gold" />{eyebrow}
        </div>
        <h2 className={cn("text-balance font-display text-[clamp(2.25rem,4.6vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.055em]", light ? "text-white" : "text-navy")}>{title}</h2>
        {copy && <p className={cn("mt-6 max-w-2xl text-base leading-7 md:text-lg md:leading-8", light ? "text-white/65" : "text-slate", align === "center" && "mx-auto")}>{copy}</p>}
      </Reveal>
    </div>
  );
}

interface InquiryContextValue { openInquiry: (product?: Product) => void }
const InquiryContext = createContext<InquiryContextValue | null>(null);
export const useInquiry = () => {
  const context = useContext(InquiryContext);
  if (!context) throw new Error("useInquiry must be used within InquiryProvider");
  return context;
};

const emailDraft = (subject: string, lines: string[]) =>
  `mailto:${business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;

export function InquiryProvider({ children }: { children: ReactNode }) {
  const [product, setProduct] = useState<Product | undefined>();
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const openInquiry = (selected?: Product) => {
    setProduct(selected);
    setDraft("");
    setCopyStatus("idle");
    setForm({ name: "", email: "", phone: "", message: "" });
    setOpen(true);
  };
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => closeRef.current?.focus(), 120);
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const subject = product ? `Product inquiry: ${product.title} (${product.sampleNumber})` : "Specialty product inquiry";
    const lines = [
      "Hello KCSS team,",
      "",
      product ? `I would like information about the ${product.title} ${product.sampleNumber} catalog placeholder (${product.category}).` : "I would like assistance with specialty medical products.",
      form.message,
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : "",
      "",
      "I understand this website sample does not confirm product availability or specifications.",
    ].filter(Boolean);
    const url = emailDraft(subject, lines);
    setDraft(url);
    window.location.href = url;
  };

  const copyDraft = async () => {
    const text = decodeURIComponent(draft.split("body=")[1] ?? "").replace(/\+/g, " ");
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }
  };

  return (
    <InquiryContext.Provider value={{ openInquiry }}>
      {children}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[100] flex items-end justify-end sm:p-4">
            <motion.button type="button" aria-label="Close inquiry" className="absolute inset-0 bg-navy/65 backdrop-blur-sm" onClick={close} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
            <motion.section role="dialog" aria-modal="true" aria-labelledby={titleId} className="relative flex max-h-[94svh] w-full max-w-[590px] flex-col overflow-y-auto bg-white shadow-2xl sm:max-h-[calc(100svh-32px)]" initial={{ opacity: 0, x: 70 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 70 }} transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}>
              <div className="flex items-start justify-between gap-6 border-b border-navy/10 p-6 md:p-8">
                <div>
                  <p className="mb-2 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-gold">Personal assistance</p>
                  <h2 id={titleId} className="font-display text-3xl font-semibold tracking-[-0.04em] text-navy">Start an inquiry</h2>
                </div>
                <button ref={closeRef} type="button" onClick={close} className="flex h-11 w-11 shrink-0 items-center justify-center border border-navy/15 text-navy transition-colors hover:bg-navy hover:text-white" aria-label="Close inquiry"><X className="h-5 w-5" /></button>
              </div>
              <div className="p-6 md:p-8">
                {product && (
                  <div className="mb-7 flex gap-4 bg-soft p-3">
                    <img src={product.image} alt="" className="h-20 w-24 object-cover" />
                    <div className="py-1"><p className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-gold">{product.sampleNumber} · Design placeholder</p><p className="mt-1 font-display text-lg font-semibold text-navy">{product.title}</p><p className="mt-1 text-xs text-slate">{product.category}</p></div>
                  </div>
                )}
                {draft ? (
                  <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="border border-navy/10 bg-soft p-6">
                    <div className="mb-5 flex h-11 w-11 items-center justify-center bg-gold text-navy"><Check /></div>
                    <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-navy">Your email draft is ready.</h3>
                    <p className="mt-3 text-sm leading-6 text-slate">Your email application should have opened. Nothing has been sent or stored by this website. Review the draft there, then choose whether to send it.</p>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <ButtonLink href={draft} variant="navy" arrow={false}>Open draft again</ButtonLink>
                      <button type="button" onClick={copyDraft} className="inline-flex min-h-12 items-center justify-center gap-2 border border-navy/20 px-5 text-xs font-bold uppercase tracking-[0.1em] text-navy hover:border-navy"><Copy className="h-4 w-4" />{copyStatus === "copied" ? "Copied" : copyStatus === "error" ? "Copy unavailable" : "Copy message"}</button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={submit} className="space-y-5">
                    <p className="text-sm leading-6 text-slate">Tell us what product information you need. Please do not include diagnoses, insurance details, or other sensitive medical information.</p>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Name" required value={form.name} onChange={(value) => setForm({ ...form, name: value })} autoComplete="name" />
                      <Field label="Email" required type="email" value={form.email} onChange={(value) => setForm({ ...form, email: value })} autoComplete="email" />
                    </div>
                    <Field label="Phone (optional)" type="tel" value={form.phone} onChange={(value) => setForm({ ...form, phone: value })} autoComplete="tel" />
                    <label className="block"><span className="mb-2 block text-xs font-bold uppercase tracking-[0.1em] text-navy">How can we help? <span className="text-gold">*</span></span><textarea required rows={4} value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} className="w-full resize-none border border-navy/15 bg-white px-4 py-3 text-base text-navy outline-none transition-colors placeholder:text-slate/50 focus:border-gold" placeholder="Your non-sensitive product question…" /></label>
                    <p className="text-xs leading-5 text-slate">This prototype does not transmit or store form data. Continuing opens a draft in your email application.</p>
                    <button type="submit" className="group flex min-h-13 w-full items-center justify-center gap-3 bg-gold px-6 py-4 text-xs font-bold uppercase tracking-[0.11em] text-navy transition-colors hover:bg-[#ffc633]">Create email draft<ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></button>
                  </form>
                )}
              </div>
            </motion.section>
          </div>
        )}
      </AnimatePresence>
    </InquiryContext.Provider>
  );
}

function Field({ label, value, onChange, required = false, type = "text", autoComplete }: { label: string; value: string; onChange: (value: string) => void; required?: boolean; type?: string; autoComplete?: string }) {
  return (
    <label className="block"><span className="mb-2 block text-xs font-bold uppercase tracking-[0.1em] text-navy">{label}{required && <span className="text-gold"> *</span>}</span><input required={required} type={type} value={value} autoComplete={autoComplete} onChange={(event) => onChange(event.target.value)} className="h-12 w-full border border-navy/15 bg-white px-4 text-base text-navy outline-none transition-colors placeholder:text-slate/50 focus:border-gold" /></label>
  );
}

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { openInquiry } = useInquiry();
  return (
    <Reveal delay={(index % 4) * 0.07} className="h-full">
      <article className="group flex h-full flex-col border border-navy/10 bg-white transition-all duration-500 hover:-translate-y-1.5 hover:border-navy/20 hover:shadow-[0_22px_55px_rgba(8,8,62,0.1)]">
        <Link to={`/product/${product.slug}`} className="relative block aspect-[4/3] overflow-hidden bg-soft" aria-label={`View ${product.title} design sample`}>
          <img src={product.image} alt={product.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.055]" />
          <span className="absolute left-3 top-3 bg-white/95 px-3 py-2 text-[0.57rem] font-bold uppercase tracking-[0.12em] text-navy backdrop-blur-sm">{product.sampleNumber}</span>
          <span className="absolute bottom-3 right-3 flex h-10 w-10 translate-y-2 items-center justify-center bg-gold text-navy opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"><ArrowUpRight className="h-4 w-4" /></span>
        </Link>
        <div className="flex flex-1 flex-col p-5 md:p-6">
          <p className="min-h-8 text-[0.59rem] font-bold uppercase leading-4 tracking-[0.12em] text-gold">{product.category}</p>
          <h3 className="mt-3 font-display text-[1.35rem] font-semibold leading-tight tracking-[-0.035em] text-navy">{product.title}</h3>
          <p className="mt-3 flex-1 text-sm leading-6 text-slate">{product.description}</p>
          <p className="mt-4 border-l-2 border-gold/60 pl-3 text-[0.66rem] leading-5 text-slate">Representative sample. Actual product details must be confirmed.</p>
          <div className="mt-5 flex items-center justify-between gap-3 border-t border-navy/10 pt-4">
            <Link to={`/product/${product.slug}`} className="text-[0.67rem] font-bold uppercase tracking-[0.1em] text-navy underline decoration-gold decoration-2 underline-offset-4">View details</Link>
            <button type="button" onClick={() => openInquiry(product)} className="text-[0.67rem] font-bold uppercase tracking-[0.1em] text-navy/60 transition-colors hover:text-gold">Request info</button>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function FinalCta({ title = "Let’s Find the Right Specialty Medical Solutions.", copy = "Connect with the KCSS team for assistance with specialty medical products and services." }: { title?: string; copy?: string }) {
  const { openInquiry } = useInquiry();
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white md:py-28">
      <div className="absolute -right-20 -top-44 h-[480px] w-[480px] rounded-full border border-gold/20" aria-hidden="true" />
      <div className="absolute -right-2 -top-28 h-[300px] w-[300px] rounded-full border border-gold/20" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-gold" aria-hidden="true" />
      <div className="container-wide relative grid items-end gap-10 lg:grid-cols-[1fr_auto]">
        <Reveal>
          <p className="mb-5 text-[0.67rem] font-bold uppercase tracking-[0.2em] text-gold">A direct line to KCSS</p>
          <h2 className="max-w-4xl text-balance font-display text-[clamp(2.4rem,5vw,5rem)] font-semibold leading-[1.02] tracking-[-0.055em]">{title}</h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/65 md:text-lg">{copy}</p>
        </Reveal>
        <Reveal delay={0.15} className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
          <ButtonLink href={business.phoneHref} variant="gold">Call KCSS</ButtonLink>
          <button type="button" onClick={() => openInquiry()} className="group/btn inline-flex min-h-12 items-center justify-center gap-3 border border-white/30 px-6 py-3 text-[0.78rem] font-bold uppercase tracking-[0.105em] text-white transition-colors hover:border-white hover:bg-white hover:text-navy">Contact Us<ArrowUpRight className="h-4 w-4" /></button>
        </Reveal>
      </div>
    </section>
  );
}

export function ContactInquiryForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", topic: "Specialty product question", message: "" });
  const [draft, setDraft] = useState("");
  const submit = (event: FormEvent) => {
    event.preventDefault();
    const url = emailDraft(`Website inquiry: ${form.topic}`, [
      "Hello KCSS team,", "", form.message, "", `Topic: ${form.topic}`, `Name: ${form.name}`, `Email: ${form.email}`, form.phone ? `Phone: ${form.phone}` : "",
    ].filter(Boolean));
    setDraft(url);
    window.location.href = url;
  };
  return (
    <form onSubmit={submit} className="bg-white p-6 shadow-[0_20px_70px_rgba(8,8,62,0.08)] md:p-9">
      <div className="mb-8"><p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-gold">General inquiry</p><h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-navy">How can we help?</h2></div>
      {draft && <div className="mb-6 flex gap-3 border border-gold/40 bg-gold/10 p-4 text-sm leading-6 text-navy" role="status"><Check className="mt-1 h-4 w-4 shrink-0 text-gold" /><span>Your draft is ready in your email application. It has not been sent or stored by this website. <a href={draft} className="font-bold underline decoration-gold underline-offset-4">Open it again</a>.</span></div>}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" required value={form.name} onChange={(value) => setForm({ ...form, name: value })} autoComplete="name" />
        <Field label="Email" required type="email" value={form.email} onChange={(value) => setForm({ ...form, email: value })} autoComplete="email" />
        <Field label="Phone (optional)" type="tel" value={form.phone} onChange={(value) => setForm({ ...form, phone: value })} autoComplete="tel" />
        <label className="block"><span className="mb-2 block text-xs font-bold uppercase tracking-[0.1em] text-navy">Topic</span><select value={form.topic} onChange={(event) => setForm({ ...form, topic: event.target.value })} className="h-12 w-full border border-navy/15 bg-white px-4 text-sm text-navy outline-none focus:border-gold"><option>Specialty product question</option><option>Diabetic footwear & inserts</option><option>Functional orthotics</option><option>Lymphedema compression</option><option>Diabetic supplies</option><option>General question</option></select></label>
      </div>
      <label className="mt-5 block"><span className="mb-2 block text-xs font-bold uppercase tracking-[0.1em] text-navy">Message <span className="text-gold">*</span></span><textarea required rows={5} value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} className="w-full resize-none border border-navy/15 px-4 py-3 text-base text-navy outline-none placeholder:text-slate/50 focus:border-gold" placeholder="Please share only non-sensitive product questions…" /></label>
      <div className="mt-4 flex gap-2 text-xs leading-5 text-slate"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" /><p>Do not include diagnoses, insurance details, or sensitive medical information. This prototype opens an email draft; it does not transmit or store your entries.</p></div>
      <button type="submit" className="group mt-6 flex min-h-13 w-full items-center justify-center gap-3 bg-gold px-6 py-4 text-xs font-bold uppercase tracking-[0.11em] text-navy transition-colors hover:bg-[#ffc633]">Create email draft<ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></button>
    </form>
  );
}

function SocialIcon({ name }: { name: string }) {
  if (name === "Instagram") return <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="4" /><circle cx="12" cy="12" r="4" /><circle cx="17.4" cy="6.6" r="0.7" fill="currentColor" stroke="none" /></svg>;
  if (name === "Facebook") return <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>;
  return <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v2a5 5 0 0 1 2-2Z" /><path d="M2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>;
}

export function Footer() {
  return (
    <footer className="bg-[#05052f] pb-8 pt-16 text-white md:pt-20">
      <div className="container-wide">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-[1.35fr_0.65fr_1fr_1.15fr] lg:gap-10">
          <div>
            <Logo light />
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/55">Specialty medical products with personal attention, formerly KC Shoe Stop. Serving product inquiries from Shawnee, Kansas.</p>
            <div className="mt-6 flex gap-2">
              {[{ href: business.instagram, label: "Instagram" }, { href: business.facebook, label: "Facebook" }, { href: business.linkedin, label: "LinkedIn" }].map(({ href, label }) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/65 transition-all hover:border-gold hover:bg-gold hover:text-navy"><SocialIcon name={label} /></a>)}
            </div>
          </div>
          <div>
            <h3 className="footer-title">Navigate</h3>
            <div className="mt-5 flex flex-col items-start gap-3">{navItems.map((item) => <Link key={item.to} to={item.to} className="footer-link">{item.label}</Link>)}</div>
          </div>
          <div>
            <h3 className="footer-title">Specialties</h3>
            <div className="mt-5 flex flex-col items-start gap-3">{specialties.map((item) => <Link key={item.slug} to={`/specialties/${item.slug}`} className="footer-link">{item.navTitle}</Link>)}</div>
          </div>
          <div>
            <h3 className="footer-title">Contact</h3>
            <div className="mt-5 space-y-4 text-sm text-white/60">
              <a href={business.phoneHref} className="flex items-center gap-3 transition-colors hover:text-gold"><Phone className="h-4 w-4 shrink-0 text-gold" />{business.phone}</a>
              <p className="flex items-center gap-3"><span className="flex h-4 w-4 shrink-0 items-center justify-center text-[0.55rem] font-bold text-gold">FX</span>Fax {business.fax}</p>
              <a href={`mailto:${business.email}`} className="flex items-center gap-3 break-all transition-colors hover:text-gold"><Mail className="h-4 w-4 shrink-0 text-gold" />{business.email}</a>
              <a href={business.directions} target="_blank" rel="noreferrer" className="flex items-start gap-3 leading-6 transition-colors hover:text-gold"><MapPin className="mt-1 h-4 w-4 shrink-0 text-gold" /><span>{business.addressLine1}<br />{business.addressLine2}</span></a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-7 text-[0.65rem] leading-5 text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} KCSS Specialty Durable Medical. All rights reserved.</p>
          <p>Website redesign concept · Representative product imagery and sample catalog entries.</p>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, copy, image, imageAlt, children }: { eyebrow: string; title: string; copy: string; image?: string; imageAlt?: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-soft">
      <div className="container-wide grid min-h-[560px] items-stretch gap-0 lg:grid-cols-2">
        <div className="flex flex-col justify-center py-16 pr-0 lg:py-24 lg:pr-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
            <div className="mb-6 flex items-center gap-3 text-[0.67rem] font-bold uppercase tracking-[0.2em] text-navy/55"><span className="h-px w-8 bg-gold" />{eyebrow}</div>
            <h1 className="text-balance font-display text-[clamp(2.8rem,5.4vw,5.6rem)] font-semibold leading-[0.98] tracking-[-0.06em] text-navy">{title}</h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-slate md:text-lg">{copy}</p>
            {children && <div className="mt-8">{children}</div>}
          </motion.div>
        </div>
        {image && <motion.div className="relative min-h-[360px] overflow-hidden lg:min-h-full" initial={{ clipPath: "inset(0 0 100% 0)" }} animate={{ clipPath: "inset(0 0 0% 0)" }} transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}><motion.img src={image} alt={imageAlt ?? ""} className="absolute inset-0 h-full w-full object-cover" initial={{ scale: 1.12 }} animate={{ scale: 1 }} transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }} /><div className="absolute inset-x-0 bottom-0 h-1 bg-gold" /></motion.div>}
      </div>
    </section>
  );
}

export function BackLink({ to, children }: { to: string; children: ReactNode }) {
  return <Link to={to} className="group inline-flex items-center gap-2 text-[0.67rem] font-bold uppercase tracking-[0.12em] text-navy/60 transition-colors hover:text-navy"><ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />{children}</Link>;
}
