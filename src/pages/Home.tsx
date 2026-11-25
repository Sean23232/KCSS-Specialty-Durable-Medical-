import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Footprints,
  HandHeart,
  HeartHandshake,
  Layers3,
  MessageCircle,
  PackageSearch,
  Phone,
  UserRound,
} from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ButtonLink, FinalCta, ProductCard, Reveal, SectionHeading } from "../components";
import { business, products, specialties } from "../data";

const categories = [
  {
    title: "Diabetic Shoes & Inserts",
    description: "Explore footwear, insert, and custom-collection starting points with a direct path to personal assistance.",
    image: "/images/diabetic-shoes.jpg",
    alt: "Representative navy and taupe comfort footwear",
    to: "/specialties/diabetic-footwear",
    className: "lg:col-span-7",
  },
  {
    title: "Functional Orthotics",
    description: "Discover a focused orthotic presentation grounded in clarity, detail, and product conversations.",
    image: "/images/functional-orthotics.jpg",
    alt: "Representative functional orthotic insoles",
    to: "/specialties/functional-orthotics",
    className: "lg:col-span-5",
  },
  {
    title: "Lymphedema Compression",
    description: "Navigate representative upper- and lower-limb garment collections in a calm, organized experience.",
    image: "/images/compression-leg.jpg",
    alt: "Representative beige compression stockings",
    to: "/specialties/lymphedema-compression",
    className: "lg:col-span-5",
  },
  {
    title: "Diabetic Supplies",
    description: "Browse representative monitoring and testing-supply concepts without assumed models or specifications.",
    image: "/images/glucose-monitor.jpg",
    alt: "Representative unbranded glucose monitoring kit",
    to: "/specialties/diabetic-supplies",
    className: "lg:col-span-7",
  },
];

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", reduceMotion ? "0%" : "14%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, reduceMotion ? 1 : 1.12]);
  const imageClip = useTransform(scrollYProgress, [0, 1], ["inset(0% 0% 0% 0%)", reduceMotion ? "inset(0% 0% 0% 0%)" : "inset(8% 0% 14% 0%)"]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -64]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.8], [1, reduceMotion ? 1 : 0.25]);

  return (
    <section ref={ref} className="relative min-h-[calc(100svh-108px)] overflow-hidden bg-white">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-[38%] bg-soft/70" aria-hidden="true" />
      <motion.div className="pointer-events-none absolute -left-24 bottom-10 h-64 w-64 rounded-full border border-gold/20" animate={reduceMotion ? undefined : { rotate: 360 }} transition={{ duration: 45, repeat: Infinity, ease: "linear" }} aria-hidden="true"><div className="absolute left-1/2 top-0 h-2 w-2 rounded-full bg-gold" /></motion.div>
      <div className="container-wide relative grid min-h-[calc(100svh-108px)] items-center gap-10 py-12 lg:grid-cols-[0.93fr_1.07fr] lg:gap-16 lg:py-10">
        <motion.div style={{ y: copyY, opacity: copyOpacity }} className="relative z-10 max-w-[690px]">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6 flex items-center gap-3 text-[0.64rem] font-bold uppercase tracking-[0.19em] text-navy/55">
            <span className="h-px w-8 bg-gold" />Specialty Durable Medical <span className="hidden text-gold sm:inline">•</span><span className="hidden sm:inline">Shawnee, KS</span>
          </motion.div>
          <h1 className="text-balance font-display text-[clamp(3rem,5.55vw,5.9rem)] font-semibold leading-[0.96] tracking-[-0.065em] text-navy">
            <span className="block overflow-hidden pb-1"><motion.span className="block" initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}>Specialty Medical</motion.span></span>
            <span className="block overflow-hidden pb-1"><motion.span className="block" initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.85, delay: 0.17, ease: [0.22, 1, 0.36, 1] }}>Products.</motion.span></span>
            <span className="block overflow-hidden pb-2"><motion.span className="relative block" initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.85, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}>Personal Attention.<motion.span className="absolute -bottom-1 left-0 h-[5px] bg-gold" initial={{ width: 0 }} animate={{ width: "42%" }} transition={{ duration: 0.8, delay: 1 }} /></motion.span></span>
          </h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }} className="mt-7 max-w-xl text-base leading-7 text-slate md:text-lg md:leading-8">
            Explore specialty medical supplies, diabetic footwear, orthotic solutions, and compression products with a team focused on your needs.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.64 }} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/shop" variant="navy">Explore Our Products</ButtonLink>
            <ButtonLink to="/contact" variant="outline">Contact Our Team</ButtonLink>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="mt-7 flex items-center gap-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/15 text-navy"><Phone className="h-4 w-4" /></span>
            <div><p className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-slate">A direct line to our team</p><a href={business.phoneHref} className="mt-0.5 block text-sm font-bold text-navy hover:text-gold">{business.phone}</a></div>
          </motion.div>
        </motion.div>
        <motion.div className="relative min-h-[440px] self-stretch overflow-hidden bg-[#e7e2d9] sm:min-h-[520px] lg:min-h-[650px]" style={{ clipPath: imageClip }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <motion.img src="/images/kcss-hero.jpg" alt="Attentive specialty footwear fitting interaction" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-center" style={{ y: imageY, scale: imageScale }} initial={{ scale: 1.14 }} animate={{ scale: 1 }} transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }} />
          <div className="image-grain absolute inset-0" />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85, duration: 0.7 }} className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-5 bg-navy p-5 text-white sm:bottom-7 sm:left-7 sm:right-auto sm:w-[330px]">
            <div><p className="text-[0.59rem] font-bold uppercase tracking-[0.17em] text-gold">Focused on your needs</p><p className="mt-2 font-display text-lg font-medium leading-6 tracking-[-0.025em]">Four specialties.<br />One personal point of contact.</p></div>
            <ArrowUpRight className="h-6 w-6 shrink-0 text-gold" />
          </motion.div>
          <div className="absolute right-0 top-0 h-20 w-1 bg-gold" />
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[0.58rem] font-bold uppercase tracking-[0.16em] text-navy/45 xl:flex"><ArrowDown className="h-3.5 w-3.5 animate-bounce" />Scroll to discover</motion.div>
    </section>
  );
}

function CategorySections() {
  return (
    <section className="bg-soft py-20 md:py-28">
      <div className="container-wide">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="Our specialties" title="Focused collections. Thoughtfully presented." copy="Start with a category, explore representative product samples, and connect with KCSS when you are ready for more information." />
          <Reveal delay={0.12}><ButtonLink to="/specialties" variant="text">View all specialties</ButtonLink></Reveal>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          {categories.map((category, index) => (
            <Reveal key={category.title} className={category.className} delay={(index % 2) * 0.1}>
              <Link to={category.to} className="group flex h-full flex-col overflow-hidden border border-navy/10 bg-white transition-shadow duration-500 hover:shadow-[0_24px_65px_rgba(8,8,62,0.1)]">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img src={category.image} alt={category.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute left-5 top-5 bg-navy px-3 py-2 text-[0.6rem] font-bold tracking-[0.13em] text-white">0{index + 1}</span>
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-navy md:text-[1.75rem]">{category.title}</h3>
                  <p className="mt-3 max-w-xl flex-1 text-sm leading-6 text-slate">{category.description}</p>
                  <span className="mt-5 inline-flex items-center gap-3 text-[0.67rem] font-bold uppercase tracking-[0.12em] text-navy">Explore category<ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1.5" /></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProducts() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-wide">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="Featured product studies" title="A clearer way to explore." copy="A preview of the visual catalog concept across KCSS specialties. Every entry is a clearly marked sample awaiting confirmed product information." />
          <Reveal delay={0.12}><ButtonLink to="/shop" variant="outline">Browse all 12 samples</ButtonLink></Reveal>
        </div>
        <Reveal className="mt-8 border-l-2 border-gold bg-soft px-5 py-4" y={20}>
          <p className="text-xs leading-6 text-slate"><strong className="font-semibold text-navy">Catalog concept:</strong> Representative imagery only. No prices, brands, availability, or medical specifications are shown. Actual inventory must be confirmed with KCSS.</p>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.filter((product) => product.featured).map((product, index) => <ProductCard key={product.slug} product={product} index={index} />)}
        </div>
      </div>
    </section>
  );
}

const reasons = [
  { icon: Layers3, title: "Specialty-focused selection", copy: "A focused product experience across diabetic footwear, orthotics, compression, and diabetic supplies." },
  { icon: HandHeart, title: "Personalized assistance", copy: "A direct route to the KCSS team, with space to ask product questions and discuss appropriate next steps." },
  { icon: Footprints, title: "Orthotic expertise", copy: "A brand heritage connected to footwear and orthotics, presented with careful attention to product discovery." },
  { icon: HeartHandshake, title: "Customer-centered service", copy: "Clear language, unhurried interactions, and personal attention at the center of the KCSS experience." },
];

function WhyKcss() {
  return (
    <section className="border-y border-navy/10 bg-soft py-20 md:py-28">
      <div className="container-wide grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
        <div>
          <SectionHeading eyebrow="Why choose KCSS" title="Specialty products never need to feel impersonal." copy="KCSS brings product categories and human assistance together in one clear, customer-focused experience." />
          <Reveal delay={0.15} className="mt-8"><ButtonLink to="/about" variant="text">Meet KCSS</ButtonLink></Reveal>
        </div>
        <div className="grid border-l border-t border-navy/10 sm:grid-cols-2">
          {reasons.map(({ icon: Icon, title, copy }, index) => (
            <Reveal key={title} delay={index * 0.08} className="h-full">
              <div className="group h-full border-b border-r border-navy/10 bg-white p-7 transition-colors duration-500 hover:bg-navy md:p-9">
                <div className="flex items-center justify-between"><Icon className="h-7 w-7 text-gold" strokeWidth={1.5} /><span className="text-[0.6rem] font-bold tracking-[0.14em] text-navy/30 group-hover:text-white/30">0{index + 1}</span></div>
                <h3 className="mt-10 font-display text-xl font-semibold tracking-[-0.035em] text-navy transition-colors group-hover:text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate transition-colors group-hover:text-white/60">{copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CareStory() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const secondClip = useTransform(scrollYProgress, [0.16, 0.4], ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]);
  const thirdClip = useTransform(scrollYProgress, [0.57, 0.8], ["inset(0% 0% 0% 100%)", "inset(0% 0% 0% 0%)"]);
  const baseScale = useTransform(scrollYProgress, [0, 0.4], [1.08, 1]);
  const secondScale = useTransform(scrollYProgress, [0.16, 0.6], [1.12, 1]);
  const thirdScale = useTransform(scrollYProgress, [0.57, 1], [1.12, 1]);
  const firstOpacity = useTransform(scrollYProgress, [0.18, 0.29], [1, 0]);
  const firstY = useTransform(scrollYProgress, [0.18, 0.29], [0, -35]);
  const secondOpacity = useTransform(scrollYProgress, [0.29, 0.4, 0.57, 0.67], [0, 1, 1, 0]);
  const secondY = useTransform(scrollYProgress, [0.29, 0.4, 0.57, 0.67], [35, 0, 0, -35]);
  const thirdOpacity = useTransform(scrollYProgress, [0.67, 0.79], [0, 1]);
  const thirdY = useTransform(scrollYProgress, [0.67, 0.79], [35, 0]);
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  if (reduceMotion) {
    return (
      <section className="bg-navy py-20 text-white">
        <div className="container-wide"><SectionHeading light eyebrow="The KCSS approach" title="From discovery to personal attention." copy="Explore the retail setting, consider the product details, and connect with a real person when you are ready." /><div className="mt-10 grid gap-5 md:grid-cols-3">{[["/images/kcss-retail.jpg", "A specialty setting"], ["/images/kcss-hero.jpg", "Personal attention"], ["/images/functional-orthotics.jpg", "Product detail"]].map(([image, title]) => <div key={title}><img src={image} alt="" className="aspect-[4/3] w-full object-cover" /><h3 className="mt-4 font-display text-xl">{title}</h3></div>)}</div></div>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative h-[260vh] bg-navy">
      <div className="sticky top-0 h-svh overflow-hidden text-white">
        <motion.div className="absolute inset-0" style={{ scale: baseScale }}><img src="/images/kcss-retail.jpg" alt="Specialty footwear retail setting" className="h-full w-full object-cover" /><div className="absolute inset-0 bg-navy/55" /></motion.div>
        <motion.div className="absolute inset-0" style={{ clipPath: secondClip }}><motion.img src="/images/kcss-hero.jpg" alt="Personal footwear fitting interaction" className="h-full w-full object-cover object-center" style={{ scale: secondScale }} /><div className="absolute inset-0 bg-navy/50" /></motion.div>
        <motion.div className="absolute inset-0" style={{ clipPath: thirdClip }}><motion.img src="/images/functional-orthotics.jpg" alt="Detailed orthotic product presentation" className="h-full w-full object-cover" style={{ scale: thirdScale }} /><div className="absolute inset-0 bg-navy/60" /></motion.div>
        <div className="image-grain absolute inset-0" />
        <div className="container-wide relative flex h-full items-center py-24">
          <div className="relative min-h-[340px] w-full max-w-4xl">
            <motion.div className="absolute inset-x-0 top-0" style={{ opacity: firstOpacity, y: firstY }}>
              <p className="story-eyebrow">01 · A focused setting</p><h2 className="story-title">Specialty retail,<br /><span className="text-gold">reconsidered.</span></h2><p className="story-copy">A calm, organized environment for exploring specialty product categories—not an overwhelming warehouse of unfamiliar options.</p>
            </motion.div>
            <motion.div className="absolute inset-x-0 top-0" style={{ opacity: secondOpacity, y: secondY }}>
              <p className="story-eyebrow">02 · Personal attention</p><h2 className="story-title">A real person<br /><span className="text-gold">comes into focus.</span></h2><p className="story-copy">The experience moves beyond browsing, making it easy to bring your product questions directly to the KCSS team.</p>
            </motion.div>
            <motion.div className="absolute inset-x-0 top-0" style={{ opacity: thirdOpacity, y: thirdY }}>
              <p className="story-eyebrow">03 · Thoughtful detail</p><h2 className="story-title">Clarity in every<br /><span className="text-gold">product conversation.</span></h2><p className="story-copy">Careful product presentation, honest sample labeling, and appropriate next steps keep attention where it belongs: on your inquiry.</p>
            </motion.div>
          </div>
          <div className="absolute bottom-8 right-5 flex items-center gap-4 md:right-10">
            <span className="text-[0.58rem] font-bold uppercase tracking-[0.15em] text-white/50">Our approach</span><div className="h-px w-24 bg-white/20"><motion.div className="h-full origin-left bg-gold" style={{ scaleX: progress }} /></div><span className="text-xs text-gold">03</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <Reveal className="relative">
          <div className="overflow-hidden"><motion.img src="/images/kcss-retail.jpg" alt="Representative specialty footwear retail environment" loading="lazy" className="aspect-[4/3] w-full object-cover" whileHover={{ scale: 1.035 }} transition={{ duration: 0.7 }} /></div>
          <div className="relative z-10 -mt-10 ml-auto flex w-[86%] items-center gap-5 bg-navy p-5 text-white shadow-xl sm:-mt-14 sm:w-[70%] sm:p-6">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center border border-gold/40 bg-white/5 text-gold"><UserRound className="h-7 w-7" strokeWidth={1.4} /></div>
            <div><p className="text-[0.58rem] font-bold uppercase tracking-[0.16em] text-gold">Founder / Proprietor</p><p className="mt-1 font-display text-xl font-semibold">Natasha Belcher</p><p className="mt-1 text-[0.65rem] text-white/45">Portrait placeholder · Authentic photo to be supplied</p></div>
          </div>
        </Reveal>
        <div>
          <SectionHeading eyebrow="About KCSS" title="A new name. The same personal focus." />
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-8 text-slate">KCSS Specialty Durable Medical, formerly KC Shoe Stop, brings specialty medical product categories into one clear brand experience. The transition reflects an expanded presentation that includes diabetic supplies, functional orthotics, lymphedema compression, and specialty durable medical equipment.</p>
            <p className="mt-4 text-base leading-8 text-slate">Founded and led by Natasha Belcher, KCSS is presented around a simple idea: specialty product discovery should include personal attention.</p>
            <ButtonLink to="/about" variant="navy" className="mt-8">Our Story</ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const journey = [
  { number: "01", title: "Explore", copy: "Discover specialty products and available categories.", icon: PackageSearch },
  { number: "02", title: "Connect", copy: "Contact the KCSS team about your needs.", icon: MessageCircle },
  { number: "03", title: "Get Assistance", copy: "Discuss product information and appropriate next steps with the team.", icon: HandHeart },
];

function CustomerJourney() {
  return (
    <section className="bg-soft py-20 md:py-28">
      <div className="container-wide">
        <SectionHeading align="center" eyebrow="Your customer journey" title="Three simple steps. One helpful conversation." copy="Move at your own pace, from independent product discovery to personal assistance." />
        <div className="relative mt-14 grid gap-5 md:grid-cols-3">
          <div className="absolute left-[16.66%] right-[16.66%] top-10 hidden h-px bg-navy/15 md:block" />
          {journey.map(({ number, title, copy, icon: Icon }, index) => (
            <Reveal key={number} delay={index * 0.13} className="relative">
              <div className="group h-full border border-navy/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold md:p-9">
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-navy/10 bg-soft text-navy transition-colors group-hover:border-gold group-hover:bg-gold"><Icon className="h-7 w-7" strokeWidth={1.5} /></div>
                <p className="mt-8 text-[0.65rem] font-bold tracking-[0.18em] text-gold">{number}</p>
                <h3 className="mt-2 font-display text-3xl font-semibold tracking-[-0.045em] text-navy">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate">{copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center"><ButtonLink to="/shop" variant="outline">Start Exploring</ButtonLink></Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <CategorySections />
      <FeaturedProducts />
      <WhyKcss />
      <CareStory />
      <AboutPreview />
      <CustomerJourney />
      <section className="border-y border-navy/10 bg-white py-8">
        <div className="container-wide flex flex-col items-start justify-between gap-5 md:flex-row md:items-center"><p className="max-w-3xl text-sm leading-6 text-slate"><span className="font-bold text-navy">Not sure where to begin?</span> Browse all four specialty pages or speak directly with KCSS about the category you want to explore.</p><div className="flex flex-wrap gap-x-5 gap-y-2">{specialties.map((specialty) => <Link key={specialty.slug} to={`/specialties/${specialty.slug}`} className="text-xs font-bold text-navy underline decoration-gold decoration-2 underline-offset-4">{specialty.navTitle}</Link>)}</div></div>
      </section>
      <FinalCta />
    </>
  );
}
