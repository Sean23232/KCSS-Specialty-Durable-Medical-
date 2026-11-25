import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MessageSquareText,
  Phone,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import {
  BackLink,
  ButtonLink,
  FinalCta,
  PageHero,
  ProductCard,
  Reveal,
  SectionHeading,
  useInquiry,
} from "../components";
import { business, getSpecialty, products, specialties, storeCategories } from "../data";

export function SpecialtiesPage() {
  return (
    <>
      <PageHero eyebrow="Focused areas of discovery" title="Specialty products. A more personal experience." copy="Explore four core KCSS specialties through clear category guidance, representative product studies, and direct access to the team." image="/images/kcss-retail.jpg" imageAlt="Representative specialty medical retail setting">
        <ButtonLink to="/shop" variant="navy">Browse the visual catalog</ButtonLink>
      </PageHero>
      <section className="bg-white py-20 md:py-28">
        <div className="container-wide">
          <SectionHeading eyebrow="Four KCSS specialties" title="Start with what you want to explore." copy="Each specialty page offers a distinct visual presentation, helpful conversation prompts, and relevant samples from the design catalog." />
          <div className="mt-14 space-y-6">
            {specialties.map((specialty, index) => (
              <Reveal key={specialty.slug}>
                <Link to={`/specialties/${specialty.slug}`} className="group grid overflow-hidden border border-navy/10 bg-soft transition-all duration-500 hover:shadow-[0_24px_65px_rgba(8,8,62,0.1)] lg:grid-cols-2">
                  <div className={`relative min-h-[330px] overflow-hidden lg:min-h-[430px] ${index % 2 ? "lg:order-2" : ""}`}>
                    <img src={specialty.image} alt={specialty.imageAlt} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute left-5 top-5 bg-navy px-3 py-2 text-[0.62rem] font-bold tracking-[0.14em] text-white">0{index + 1}</span>
                  </div>
                  <div className="flex flex-col justify-center p-7 md:p-12 lg:p-14">
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-gold">{specialty.eyebrow}</p>
                    <h2 className="mt-4 text-balance font-display text-[clamp(2rem,3.5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.05em] text-navy">{specialty.title}</h2>
                    <p className="mt-5 max-w-xl text-sm leading-7 text-slate md:text-base">{specialty.description}</p>
                    <span className="mt-7 inline-flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-navy">Explore this specialty<ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1.5" /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-soft py-20 md:py-24">
        <div className="container-wide grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading eyebrow="Store organization" title="Six categories. One clear catalog." copy="The visual store adds custom diabetic footwear and separate insert and monitoring categories for more precise discovery." />
          <div className="border-t border-navy/15">
            {storeCategories.map((category, index) => (
              <Reveal key={category.slug} delay={index * 0.05}>
                <Link to={`/shop?category=${category.slug}`} className="group flex items-center gap-5 border-b border-navy/15 py-5">
                  <span className="w-7 text-[0.62rem] font-bold text-gold">0{index + 1}</span><div className="flex-1"><h3 className="font-display text-lg font-semibold tracking-[-0.025em] text-navy">{category.name}</h3><p className="mt-1 text-xs leading-5 text-slate">{category.description}</p></div><span className="hidden text-xs text-slate sm:inline">{products.filter((product) => product.category === category.name).length} samples</span><ArrowUpRight className="h-5 w-5 text-navy/40 transition-all group-hover:text-gold" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <FinalCta title="Not sure which specialty to explore?" copy="The KCSS team can help you identify the right starting point for your product inquiry." />
    </>
  );
}

export function SpecialtyDetailPage() {
  const { slug } = useParams();
  const specialty = getSpecialty(slug);
  const { openInquiry } = useInquiry();

  if (!specialty) {
    return <section className="container-narrow flex min-h-[65vh] flex-col items-center justify-center py-20 text-center"><p className="text-xs font-bold uppercase tracking-[0.15em] text-gold">Specialty not found</p><h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-navy">Explore one of our four specialty pages.</h1><ButtonLink to="/specialties" variant="navy" className="mt-8">View all specialties</ButtonLink></section>;
  }

  const relevant = products.filter((product) => specialty.categories.includes(product.category));
  const others = specialties.filter((item) => item.slug !== specialty.slug);

  return (
    <>
      <div className="container-wide bg-soft pt-6"><BackLink to="/specialties">All specialties</BackLink></div>
      <PageHero eyebrow={specialty.eyebrow} title={specialty.title} copy={specialty.description} image={specialty.image} imageAlt={specialty.imageAlt}>
        <div className="flex flex-col gap-3 sm:flex-row"><button type="button" onClick={() => document.getElementById("collection")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })} className="group inline-flex min-h-12 items-center justify-center gap-3 bg-navy px-6 py-3 text-[0.78rem] font-bold uppercase tracking-[0.105em] text-white transition-colors hover:bg-[#171757]">Explore collection<ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1" /></button><button type="button" onClick={() => openInquiry()} className="group inline-flex min-h-12 items-center justify-center gap-3 border border-navy/20 px-6 py-3 text-[0.78rem] font-bold uppercase tracking-[0.105em] text-navy transition-colors hover:bg-navy hover:text-white">Product inquiry<ArrowUpRight className="h-4 w-4 text-gold" /></button></div>
      </PageHero>

      <section className="bg-white py-20 md:py-28">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <SectionHeading eyebrow="A thoughtful starting point" title={specialty.editorialTitle} />
            <Reveal delay={0.1}><p className="text-base leading-8 text-slate md:text-lg md:leading-9">{specialty.editorialCopy}</p><div className="mt-7 flex gap-3 border-l-2 border-gold bg-soft p-5"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" /><p className="text-xs leading-6 text-slate">Product options and requirements vary. This concept provides general category information only and does not replace guidance from your healthcare provider.</p></div></Reveal>
          </div>
          <div className="mt-14 grid border-l border-t border-navy/10 md:grid-cols-3">
            {specialty.explore.map((item, index) => <Reveal key={item.title} delay={index * 0.09} className="h-full"><div className={`h-full border-b border-r border-navy/10 p-7 md:p-8 ${specialty.tone}`}><p className="text-[0.62rem] font-bold tracking-[0.15em] text-gold">0{index + 1}</p><h3 className="mt-7 font-display text-xl font-semibold tracking-[-0.03em] text-navy">{item.title}</h3><p className="mt-3 text-sm leading-6 text-slate">{item.copy}</p></div></Reveal>)}
          </div>
        </div>
      </section>

      <section id="collection" className="scroll-mt-24 bg-soft py-20 md:py-28">
        <div className="container-wide">
          <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between"><SectionHeading eyebrow="Relevant product studies" title={`Explore ${specialty.navTitle.toLowerCase()}.`} copy="Representative samples are shown for design purposes only. Contact KCSS for confirmed product information." /><Reveal><span className="border border-navy/15 bg-white px-4 py-3 text-xs font-bold uppercase tracking-[0.1em] text-navy">{relevant.length} catalog {relevant.length === 1 ? "sample" : "samples"}</span></Reveal></div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{relevant.map((product, index) => <ProductCard key={product.slug} product={product} index={index} />)}</div>
        </div>
      </section>

      <section className="bg-navy py-20 text-white md:py-24">
        <div className="container-wide grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal><p className="text-[0.66rem] font-bold uppercase tracking-[0.18em] text-gold">Prepare for a useful conversation</p><h2 className="mt-5 text-balance font-display text-[clamp(2.4rem,4vw,4.2rem)] font-semibold leading-[1.02] tracking-[-0.05em]">Bring your product questions. Leave sensitive details out.</h2><p className="mt-6 max-w-xl text-base leading-8 text-white/60">These prompts can help you frame a general inquiry. Please do not send diagnoses, insurance information, or sensitive medical details through this website prototype.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><ButtonLink href={business.phoneHref} variant="gold">Call {business.phone}</ButtonLink><button type="button" onClick={() => openInquiry()} className="inline-flex min-h-12 items-center justify-center gap-3 border border-white/25 px-6 py-3 text-[0.75rem] font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-white hover:text-navy">Create an inquiry<ArrowUpRight className="h-4 w-4" /></button></div></Reveal>
          <Reveal delay={0.12} className="border border-white/15 bg-white/5 p-6 md:p-9"><MessageSquareText className="h-8 w-8 text-gold" strokeWidth={1.4} /><h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.035em]">Conversation starters</h3><div className="mt-6 space-y-5">{specialty.prompts.map((prompt, index) => <div key={prompt} className="flex gap-4 border-t border-white/10 pt-5"><span className="text-xs font-bold text-gold">0{index + 1}</span><p className="text-sm leading-7 text-white/70">{prompt}</p></div>)}</div><a href={business.phoneHref} className="mt-7 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-gold"><Phone className="h-4 w-4" />Speak with KCSS</a></Reveal>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container-wide"><SectionHeading eyebrow="Continue discovering" title="Explore another specialty." /><div className="mt-10 grid gap-5 md:grid-cols-3">{others.map((item, index) => <Reveal key={item.slug} delay={index * 0.08}><Link to={`/specialties/${item.slug}`} className="group block"><div className="aspect-[16/10] overflow-hidden"><img src={item.image} alt={item.imageAlt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div><div className="flex items-center justify-between gap-4 border-b border-navy/15 py-5"><h3 className="font-display text-xl font-semibold tracking-[-0.03em] text-navy">{item.navTitle}</h3><ArrowUpRight className="h-5 w-5 shrink-0 text-gold transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div></Link></Reveal>)}</div></div>
      </section>
      <FinalCta title={`Let’s talk about ${specialty.navTitle.toLowerCase()}.`} copy="Connect with KCSS for product information and personal assistance with appropriate next steps." />
    </>
  );
}
