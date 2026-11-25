import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Mail,
  MapPin,
  Phone,
  Printer,
  UserRound,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ButtonLink,
  ContactInquiryForm,
  FinalCta,
  PageHero,
  Reveal,
  SectionHeading,
} from "../components";
import { business, specialties } from "../data";

const values = [
  { number: "01", title: "Personal attention", copy: "Keep a real conversation within reach, from the first category search to the next step in an inquiry." },
  { number: "02", title: "Specialty focus", copy: "Present a deliberate range of specialty categories rather than an undifferentiated sea of products." },
  { number: "03", title: "Clear communication", copy: "Use straightforward language and distinguish representative design content from confirmed product information." },
  { number: "04", title: "Respectful service", copy: "Create an approachable experience that makes room for individual questions without asking for sensitive details online." },
];

export function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About KCSS Specialty Durable Medical" title="A specialty brand with a personal point of view." copy="Formerly KC Shoe Stop, KCSS Specialty Durable Medical brings footwear, orthotics, compression, and diabetic supplies into one customer-focused brand experience." image="/images/kcss-retail.jpg" imageAlt="Representative specialty medical footwear retail environment">
        <ButtonLink to="/contact" variant="navy">Connect with KCSS</ButtonLink>
      </PageHero>

      <section className="bg-white py-20 md:py-28">
        <div className="container-wide grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <SectionHeading eyebrow="The brand story" title="From KC Shoe Stop to KCSS." />
          <Reveal delay={0.1}>
            <p className="font-display text-[clamp(1.55rem,2.5vw,2.4rem)] font-medium leading-[1.4] tracking-[-0.035em] text-navy">The name has evolved. The emphasis on specialty products and personal attention remains at the center of the brand.</p>
            <p className="mt-7 text-base leading-8 text-slate">KCSS Specialty Durable Medical is the current identity for the business formerly known as KC Shoe Stop. The redesigned experience makes the wider specialty focus easier to understand: diabetic supplies, functional orthotics, lymphedema compression, and specialty durable medical equipment.</p>
            <p className="mt-4 text-base leading-8 text-slate">Rather than presenting a generic medical catalog, this concept gives each category room to breathe and keeps Natasha Belcher and the KCSS team accessible throughout the customer journey.</p>
          </Reveal>
        </div>
        <div className="container-wide mt-16 grid md:grid-cols-2">
          <Reveal className="border border-navy/10 bg-soft p-7 md:p-10"><p className="text-[0.64rem] font-bold uppercase tracking-[0.17em] text-slate">Former identity</p><h3 className="mt-6 font-display text-4xl font-semibold tracking-[-0.05em] text-navy">KC Shoe Stop</h3><p className="mt-4 max-w-md text-sm leading-7 text-slate">The established business identity referenced throughout the KCSS brand transition.</p><div className="mt-10 h-1 w-16 bg-navy/20" /></Reveal>
          <Reveal delay={0.12} className="border border-navy bg-navy p-7 text-white md:p-10"><p className="text-[0.64rem] font-bold uppercase tracking-[0.17em] text-gold">Current identity</p><h3 className="mt-6 font-display text-4xl font-semibold tracking-[-0.05em]">KCSS<span className="text-gold">.</span></h3><p className="mt-2 text-sm font-semibold uppercase tracking-[0.08em] text-white/60">Specialty Durable Medical</p><p className="mt-4 max-w-md text-sm leading-7 text-white/60">A broader specialty presentation with the same commitment to personal customer attention.</p><div className="mt-7 h-1 w-16 bg-gold" /></Reveal>
        </div>
      </section>

      <section className="overflow-hidden bg-soft py-20 md:py-28">
        <div className="container-wide grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal className="relative mx-auto w-full max-w-[520px]">
            <div className="relative flex aspect-[4/5] flex-col items-center justify-center overflow-hidden bg-navy text-white">
              <div className="gold-grid absolute inset-0 opacity-40" /><div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-gold/30" /><div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full border border-white/10" />
              <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-gold/40 bg-white/5 text-gold"><UserRound className="h-12 w-12" strokeWidth={1.1} /></div>
              <p className="relative mt-7 font-display text-5xl font-semibold tracking-[-0.06em]">NB<span className="text-gold">.</span></p>
              <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-[#05052f]/80 p-5 text-center backdrop-blur-sm"><p className="text-[0.61rem] font-bold uppercase tracking-[0.15em] text-gold">Professional portrait placeholder</p><p className="mt-2 text-xs text-white/45">Authentic photograph of Natasha Belcher to be supplied</p></div>
            </div>
          </Reveal>
          <div>
            <SectionHeading eyebrow="Founder / Proprietor" title="Meet Natasha Belcher." />
            <Reveal delay={0.1}><p className="mt-6 text-base leading-8 text-slate">Natasha Belcher is the founder and proprietor of KCSS Specialty Durable Medical. Her presence in the brand story gives the redesigned website a clear human center: a specialty business customers can contact directly for product assistance.</p><p className="mt-4 text-base leading-8 text-slate">This introduction intentionally stays with the information supplied. Additional biography, credentials, and authentic photography can be added after they are confirmed by Natasha.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><ButtonLink href={`mailto:${business.email}`} variant="navy">Email Natasha</ButtonLink><ButtonLink href={business.linkedin} external variant="outline">View LinkedIn</ButtonLink></div></Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-wide"><SectionHeading align="center" eyebrow="Company values" title="What the KCSS experience stands for." copy="Four principles guide the brand concept and every customer interaction it is designed to support." /><div className="mt-14 grid border-l border-t border-navy/10 sm:grid-cols-2 lg:grid-cols-4">{values.map((value, index) => <Reveal key={value.number} delay={index * 0.08} className="h-full"><div className="group h-full border-b border-r border-navy/10 p-7 transition-colors duration-500 hover:bg-soft md:p-8"><span className="text-xs font-bold text-gold">{value.number}</span><h3 className="mt-10 font-display text-2xl font-semibold tracking-[-0.04em] text-navy">{value.title}</h3><p className="mt-4 text-sm leading-7 text-slate">{value.copy}</p></div></Reveal>)}</div></div>
      </section>

      <section className="bg-soft py-20 md:py-24">
        <div className="container-wide grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20"><SectionHeading eyebrow="Our specialty focus" title="One brand. Four distinct areas to explore." copy="Each KCSS specialty has its own visual language and product-discovery path while remaining part of one coherent experience." /><div>{specialties.map((specialty, index) => <Reveal key={specialty.slug} delay={index * 0.06}><Link to={`/specialties/${specialty.slug}`} className="group flex items-center gap-5 border-b border-navy/15 py-5 first:border-t"><span className="text-[0.62rem] font-bold text-gold">0{index + 1}</span><span className="flex-1 font-display text-lg font-semibold tracking-[-0.025em] text-navy">{specialty.navTitle}</span><ArrowUpRight className="h-5 w-5 text-navy/35 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold" /></Link></Reveal>)}</div></div>
      </section>
      <FinalCta title="Specialty products start with a personal conversation." copy="Contact Natasha and the KCSS team about the specialty medical product category you would like to explore." />
    </>
  );
}

const contactCards = [
  { icon: Phone, label: "Phone", value: business.phone, note: "Speak directly with the KCSS team", href: business.phoneHref, action: "Call KCSS" },
  { icon: Mail, label: "Email", value: business.email, note: "Create a non-sensitive product inquiry", href: `mailto:${business.email}`, action: "Send an email" },
  { icon: Printer, label: "Fax", value: business.fax, note: "Fax contact for KCSS", action: "Fax number" },
  { icon: MapPin, label: "Visit", value: business.addressLine1, note: business.addressLine2, href: business.directions, action: "Get directions", external: true },
];

const contactFaqs = [
  { question: "What should I include in an inquiry?", answer: "Share the product category and the general information you would like KCSS to confirm. Do not include diagnoses, insurance details, medical records, or other sensitive medical information in this website prototype." },
  { question: "Can I purchase products through this website?", answer: "No. This is a front-end design prototype with no checkout, payment processing, shipping calculation, live inventory, or customer accounts. Product entries are clearly labeled design samples." },
  { question: "How do I ask about an actual product?", answer: "Call KCSS at 913-486-1190 or use the inquiry form to prepare an email draft. The team can provide confirmed product information and discuss appropriate next steps." },
];

function LocationIllustration() {
  return (
    <div className="map-grid relative min-h-[420px] overflow-hidden border border-navy/10" role="img" aria-label="Stylized location illustration for KCSS on West 64th Street in Shawnee">
      <svg viewBox="0 0 900 480" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <path d="M-40 340C160 300 250 365 440 300S710 190 960 235" fill="none" stroke="#fff" strokeWidth="40" />
        <path d="M-40 340C160 300 250 365 440 300S710 190 960 235" fill="none" stroke="#c8ced5" strokeWidth="2" strokeDasharray="12 12" />
        <path d="M240-30C260 100 230 180 310 275S420 400 390 520" fill="none" stroke="#fff" strokeWidth="26" />
        <path d="M650-40C610 100 690 160 640 260S570 400 610 520" fill="none" stroke="#fff" strokeWidth="24" />
        <path d="M60 90 180 170M730 380l140 60M80 430l120-70M480 60l100 60" stroke="#fff" strokeWidth="14" />
        <text x="85" y="306" fill="#667085" fontSize="14" fontFamily="DM Sans, sans-serif" fontWeight="600" letterSpacing="2">WEST 64TH STREET</text>
      </svg>
      <motion.div initial={{ scale: 0, y: -20 }} whileInView={{ scale: 1, y: 0 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 180, damping: 16 }} className="absolute left-[57%] top-[42%]"><div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-navy text-gold shadow-[0_15px_40px_rgba(8,8,62,0.25)]"><MapPin className="h-7 w-7" /><span className="absolute -inset-3 -z-10 animate-ping rounded-full border border-navy/20" /></div></motion.div>
      <div className="absolute bottom-5 left-5 right-5 bg-white p-5 shadow-[0_15px_45px_rgba(8,8,62,0.1)] sm:right-auto sm:w-[360px]"><p className="text-[0.61rem] font-bold uppercase tracking-[0.16em] text-gold">KCSS Specialty Durable Medical</p><p className="mt-2 font-display text-lg font-semibold text-navy">{business.addressLine1}</p><p className="mt-1 text-sm text-slate">{business.addressLine2}</p></div>
      <span className="absolute right-4 top-4 bg-white/85 px-3 py-2 text-[0.55rem] font-bold uppercase tracking-[0.1em] text-slate">Location illustration · Use directions for navigation</span>
    </div>
  );
}

export function ContactPage() {
  const [openFaq, setOpenFaq] = useState(0);
  return (
    <>
      <PageHero eyebrow="Contact KCSS" title="Let’s start with a conversation." copy="Connect with the KCSS team for assistance with specialty medical products and services. Call, email, or prepare a non-sensitive product inquiry below." image="/images/kcss-hero.jpg" imageAlt="Representative personal specialty footwear assistance">
        <div className="flex flex-col gap-3 sm:flex-row"><ButtonLink href={business.phoneHref} variant="navy">Call {business.phone}</ButtonLink><ButtonLink href={`mailto:${business.email}`} variant="outline">Email KCSS</ButtonLink></div>
      </PageHero>

      <section className="bg-white py-16 md:py-24">
        <div className="container-wide">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {contactCards.map(({ icon: Icon, label, value, note, href, action, external }, index) => <Reveal key={label} delay={index * 0.07} className="h-full"><div className="group flex h-full flex-col border border-navy/10 bg-soft p-6 transition-colors hover:border-gold"><Icon className="h-6 w-6 text-gold" strokeWidth={1.5} /><p className="mt-6 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-slate">{label}</p><p className="mt-2 break-words font-display text-lg font-semibold leading-7 tracking-[-0.025em] text-navy">{value}</p><p className="mt-1 flex-1 text-sm leading-6 text-slate">{note}</p>{href ? <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className="mt-5 inline-flex items-center gap-2 text-[0.64rem] font-bold uppercase tracking-[0.1em] text-navy">{action}<ArrowUpRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a> : <p className="mt-5 text-[0.64rem] font-bold uppercase tracking-[0.1em] text-navy/45">{action}</p>}</div></Reveal>)}
          </div>
          <div className="mt-14 grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="lg:sticky lg:top-28">
              <SectionHeading eyebrow="Product inquiries" title="Tell us what you’d like to explore." copy="Use the form for general, non-sensitive questions. It prepares a draft in your own email application so you stay in control of what is sent." />
              <Reveal delay={0.12} className="mt-8 space-y-4">
                {["No sensitive medical or insurance details", "No account or payment information", "No data transmitted or stored by this prototype"].map((item) => <div key={item} className="flex items-center gap-3 text-sm text-slate"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold/15"><Check className="h-3.5 w-3.5 text-navy" /></span>{item}</div>)}
              </Reveal>
              <Reveal delay={0.18} className="mt-9 border-t border-navy/10 pt-7"><p className="text-[0.62rem] font-bold uppercase tracking-[0.15em] text-navy">Follow KCSS</p><div className="mt-4 flex flex-wrap gap-3">{[{ label: "Instagram", href: business.instagram }, { label: "Facebook", href: business.facebook }, { label: "LinkedIn", href: business.linkedin }].map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 border border-navy/15 px-4 py-3 text-xs font-bold text-navy transition-colors hover:border-gold hover:bg-gold">{social.label}<ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>)}</div></Reveal>
            </div>
            <Reveal delay={0.08}><ContactInquiryForm /></Reveal>
          </div>
        </div>
      </section>

      <section className="bg-soft py-20 md:py-24">
        <div className="container-wide"><div className="mb-9 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"><SectionHeading eyebrow="Shawnee, Kansas" title="Find KCSS." copy={`${business.addressLine1}, ${business.addressLine2}.`} /><ButtonLink href={business.directions} external variant="navy">Get Directions</ButtonLink></div><Reveal><LocationIllustration /></Reveal></div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container-narrow grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20"><SectionHeading eyebrow="Before you connect" title="A few helpful answers." /><div className="border-t border-navy/15">{contactFaqs.map((faq, index) => <Reveal key={faq.question} delay={index * 0.05}><div className="border-b border-navy/15"><button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} className="flex w-full items-center justify-between gap-6 py-6 text-left" aria-expanded={openFaq === index}><span className="font-display text-lg font-semibold tracking-[-0.025em] text-navy">{faq.question}</span><ChevronDown className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`} /></button><AnimatePresence initial={false}>{openFaq === index && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden"><p className="pb-6 pr-8 text-sm leading-7 text-slate">{faq.answer}</p></motion.div>}</AnimatePresence></div></Reveal>)}</div></div>
      </section>
      <FinalCta title="Prefer to speak with someone directly?" copy="Call KCSS for personal assistance with specialty medical products and services." />
    </>
  );
}
