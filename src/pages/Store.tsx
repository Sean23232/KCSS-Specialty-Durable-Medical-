import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Clipboard,
  Info,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import {
  BackLink,
  ButtonLink,
  FinalCta,
  ProductCard,
  Reveal,
  SectionHeading,
  useInquiry,
} from "../components";
import {
  business,
  getProduct,
  products,
  storeCategories,
  type ProductFormat,
} from "../data";

const formats: ProductFormat[] = ["Footwear", "Inserts", "Orthotics", "Compression garments", "Monitoring", "Supplies"];
type SortOption = "featured" | "name" | "category";

export function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const query = searchParams.get("q") ?? "";
  const category = searchParams.get("category") ?? "all";
  const format = searchParams.get("format") ?? "all";
  const sort = (searchParams.get("sort") ?? "featured") as SortOption;

  const updateParam = (key: string, value: string, defaultValue = "all") => {
    const next = new URLSearchParams(searchParams);
    if (!value || value === defaultValue) next.delete(key);
    else next.set(key, value);
    setSearchParams(next, { replace: true });
  };
  const clearFilters = () => setSearchParams({}, { replace: true });

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const result = products.filter((product) => {
      const searchMatch = !normalized || [product.title, product.category, product.description, product.format, product.sampleNumber]
        .join(" ").toLowerCase().includes(normalized);
      const categoryMatch = category === "all" || storeCategories.find((item) => item.slug === category)?.name === product.category;
      const formatMatch = format === "all" || product.format === format;
      return searchMatch && categoryMatch && formatMatch;
    });
    return [...result].sort((a, b) => {
      if (sort === "name") return a.title.localeCompare(b.title);
      if (sort === "category") return a.category.localeCompare(b.category) || a.title.localeCompare(b.title);
      return Number(b.featured) - Number(a.featured) || products.indexOf(a) - products.indexOf(b);
    });
  }, [query, category, format, sort]);

  const activeFilterCount = Number(category !== "all") + Number(format !== "all");
  const activeCategory = storeCategories.find((item) => item.slug === category);

  return (
    <>
      <section className="relative overflow-hidden bg-navy py-16 text-white md:py-24">
        <div className="gold-grid absolute inset-0 opacity-40" />
        <div className="absolute -right-24 -top-40 h-[500px] w-[500px] rounded-full border border-gold/15" />
        <div className="container-wide relative grid items-end gap-10 lg:grid-cols-[1fr_0.65fr]">
          <motion.div initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <div className="mb-6 flex items-center gap-3 text-[0.67rem] font-bold uppercase tracking-[0.2em] text-gold"><span className="h-px w-8 bg-gold" />The KCSS product catalog</div>
            <h1 className="max-w-4xl text-balance font-display text-[clamp(3rem,6vw,6.3rem)] font-semibold leading-[0.96] tracking-[-0.065em]">Explore Our<br />Specialty Products<span className="text-gold">.</span></h1>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="lg:pb-2">
            <p className="max-w-xl text-base leading-8 text-white/65 md:text-lg">Browse specialty medical products and discover solutions across our key product categories.</p>
            <div className="mt-6 border-l-2 border-gold pl-4 text-xs leading-6 text-white/50">Visual catalog prototype · 12 design samples · Actual inventory to be confirmed</div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-navy/10 bg-white py-7">
        <div className="container-wide">
          <div className="flex flex-col gap-3 lg:flex-row">
            <label className="relative flex min-h-14 flex-1 items-center">
              <span className="sr-only">Search sample products</span><Search className="pointer-events-none absolute left-5 h-5 w-5 text-navy/40" />
              <input type="search" value={query} onChange={(event) => updateParam("q", event.target.value, "")} placeholder="Search by product study, category, or type…" className="h-14 w-full border border-navy/15 bg-soft pl-13 pr-12 text-base text-navy outline-none transition-colors placeholder:text-slate/65 focus:border-gold focus:bg-white" />
              {query && <button type="button" onClick={() => updateParam("q", "", "")} className="absolute right-4 flex h-8 w-8 items-center justify-center text-navy/50 hover:text-navy" aria-label="Clear search"><X className="h-4 w-4" /></button>}
            </label>
            <button type="button" onClick={() => setFiltersOpen(!filtersOpen)} className={`flex min-h-14 items-center justify-center gap-3 border px-5 text-xs font-bold uppercase tracking-[0.1em] transition-colors ${filtersOpen || activeFilterCount ? "border-navy bg-navy text-white" : "border-navy/15 text-navy hover:border-navy"}`} aria-expanded={filtersOpen} aria-controls="store-filters"><SlidersHorizontal className="h-4 w-4" />Filters{activeFilterCount > 0 && <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[0.62rem] text-navy">{activeFilterCount}</span>}</button>
            <label className="relative flex min-h-14 items-center border border-navy/15 bg-white pl-5">
              <span className="mr-3 whitespace-nowrap text-[0.64rem] font-bold uppercase tracking-[0.11em] text-slate">Sort by</span>
              <select value={sort} onChange={(event) => updateParam("sort", event.target.value, "featured")} className="h-full min-w-[160px] appearance-none bg-transparent py-4 pr-10 text-sm font-semibold text-navy outline-none"><option value="featured">Featured</option><option value="name">Name A–Z</option><option value="category">Category</option></select><ChevronDown className="pointer-events-none absolute right-4 h-4 w-4 text-navy" />
            </label>
          </div>
          <div className="no-scrollbar mt-5 flex gap-2 overflow-x-auto pb-1" aria-label="Product categories">
            <button type="button" onClick={() => updateParam("category", "all")} className={`shrink-0 border px-4 py-2.5 text-[0.65rem] font-bold uppercase tracking-[0.08em] transition-colors ${category === "all" ? "border-gold bg-gold text-navy" : "border-navy/10 text-navy/60 hover:border-navy/40 hover:text-navy"}`}>All products <span className="ml-1 opacity-60">{products.length}</span></button>
            {storeCategories.map((item) => {
              const count = products.filter((product) => product.category === item.name).length;
              return <button key={item.slug} type="button" onClick={() => updateParam("category", item.slug)} className={`shrink-0 border px-4 py-2.5 text-[0.65rem] font-bold uppercase tracking-[0.08em] transition-colors ${category === item.slug ? "border-gold bg-gold text-navy" : "border-navy/10 text-navy/60 hover:border-navy/40 hover:text-navy"}`}>{item.name} <span className="ml-1 opacity-60">{count}</span></button>;
            })}
          </div>
          <AnimatePresence initial={false}>
            {filtersOpen && (
              <motion.div id="store-filters" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35 }} className="overflow-hidden">
                <div className="mt-5 grid gap-6 border-t border-navy/10 bg-soft p-5 md:grid-cols-[1fr_auto] md:items-end md:p-6">
                  <div><p className="mb-3 text-[0.63rem] font-bold uppercase tracking-[0.14em] text-navy">Filter by product format</p><div className="flex flex-wrap gap-2"><button type="button" onClick={() => updateParam("format", "all")} className={`px-4 py-2 text-xs font-semibold ${format === "all" ? "bg-navy text-white" : "bg-white text-navy/60 hover:text-navy"}`}>All formats</button>{formats.map((item) => <button type="button" key={item} onClick={() => updateParam("format", item)} className={`px-4 py-2 text-xs font-semibold ${format === item ? "bg-navy text-white" : "bg-white text-navy/60 hover:text-navy"}`}>{item}</button>)}</div></div>
                  {(activeFilterCount > 0 || query) && <button type="button" onClick={clearFilters} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-navy underline decoration-gold decoration-2 underline-offset-4"><X className="h-3.5 w-3.5" />Clear all</button>}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <section className="bg-soft py-10 md:py-14">
        <div className="container-wide">
          <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-gold">{activeCategory?.name ?? "Complete visual catalog"}</p><h2 className="mt-2 font-display text-2xl font-semibold tracking-[-0.035em] text-navy">Showing {filtered.length} of {products.length} design samples</h2>{query && <p className="mt-1 text-sm text-slate">Search results for “{query}”</p>}</div>
            <p className="max-w-md text-xs leading-5 text-slate">Samples demonstrate layout and interaction only. They are not purchase listings.</p>
          </div>
          {filtered.length > 0 ? (
            <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <AnimatePresence mode="popLayout">
                {filtered.map((product, index) => <motion.div layout key={product.slug} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.25 }}><ProductCard product={product} index={index} /></motion.div>)}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex min-h-[420px] flex-col items-center justify-center border border-navy/10 bg-white px-6 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-soft text-navy"><Search className="h-6 w-6" /></div><h3 className="mt-6 font-display text-3xl font-semibold tracking-[-0.04em] text-navy">No samples match those filters.</h3><p className="mt-3 max-w-md text-sm leading-6 text-slate">Try a broader search or clear the filters to return to the complete visual catalog.</p><button type="button" onClick={clearFilters} className="mt-6 bg-navy px-6 py-3 text-xs font-bold uppercase tracking-[0.1em] text-white">Clear all filters</button>
            </motion.div>
          )}
          <Reveal className="mt-10 flex flex-col gap-5 border border-navy/10 bg-white p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div className="flex gap-4"><Info className="mt-1 h-5 w-5 shrink-0 text-gold" /><div><h3 className="font-display text-xl font-semibold text-navy">Looking for confirmed product information?</h3><p className="mt-2 max-w-2xl text-sm leading-6 text-slate">This catalog is a design prototype. Contact KCSS directly to discuss actual products and appropriate next steps.</p></div></div>
            <ButtonLink href={business.phoneHref} variant="outline" className="shrink-0">Call {business.phone}</ButtonLink>
          </Reveal>
        </div>
      </section>
      <FinalCta title="Need help navigating the product categories?" copy="Connect with KCSS for personal assistance with your specialty medical product inquiry." />
    </>
  );
}

export function ProductDetailPage() {
  const { slug } = useParams();
  const product = getProduct(slug);
  const [selectedImage, setSelectedImage] = useState(0);
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");
  const { openInquiry } = useInquiry();

  if (!product) {
    return <section className="container-narrow flex min-h-[65vh] flex-col items-center justify-center py-20 text-center"><p className="text-xs font-bold uppercase tracking-[0.15em] text-gold">Catalog sample not found</p><h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-navy">This product study isn’t in the visual catalog.</h1><ButtonLink to="/shop" variant="navy" className="mt-8">Return to the store</ButtonLink></section>;
  }

  const categorySlug = storeCategories.find((item) => item.name === product.category)?.slug;
  const sameCategory = products.filter((item) => item.category === product.category && item.slug !== product.slug);
  const related = [...sameCategory, ...products.filter((item) => item.category !== product.category && item.featured)].slice(0, 3);
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopyStatus("copied");
      window.setTimeout(() => setCopyStatus("idle"), 2200);
    } catch {
      setCopyStatus("error");
    }
  };

  return (
    <>
      <section className="bg-white py-8 md:py-12">
        <div className="container-wide">
          <BackLink to="/shop">Back to all products</BackLink>
          <div className="mt-7 grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
            <div>
              <div className="relative aspect-[4/3] overflow-hidden bg-soft">
                <AnimatePresence mode="wait">
                  <motion.img key={product.gallery[selectedImage]} src={product.gallery[selectedImage]} alt={`${product.alt} — gallery view ${selectedImage + 1}`} className="absolute inset-0 h-full w-full object-cover" initial={{ opacity: 0, scale: 1.035 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} />
                </AnimatePresence>
                <span className="absolute left-5 top-5 bg-white/95 px-3 py-2 text-[0.6rem] font-bold uppercase tracking-[0.12em] text-navy">Representative imagery</span>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {product.gallery.map((image, index) => <button type="button" key={`${image}-${index}`} onClick={() => setSelectedImage(index)} className={`relative aspect-[16/9] overflow-hidden border-2 transition-colors ${selectedImage === index ? "border-gold" : "border-transparent opacity-65 hover:opacity-100"}`} aria-label={`View gallery image ${index + 1}`} aria-pressed={selectedImage === index}><img src={image} alt="" className="h-full w-full object-cover" /><span className="absolute bottom-2 left-2 bg-navy px-2 py-1 text-[0.55rem] font-bold text-white">0{index + 1}</span></button>)}
              </div>
            </div>
            <div className="lg:py-3">
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
                <div className="flex flex-wrap items-center gap-3"><span className="bg-gold px-3 py-2 text-[0.6rem] font-bold uppercase tracking-[0.12em] text-navy">{product.sampleNumber}</span><span className="text-[0.6rem] font-bold uppercase tracking-[0.12em] text-slate">Design placeholder · Not a purchase listing</span></div>
                <h1 className="mt-6 text-balance font-display text-[clamp(2.7rem,4.7vw,4.8rem)] font-semibold leading-[1] tracking-[-0.06em] text-navy">{product.title}</h1>
                <Link to={`/shop?category=${categorySlug}`} className="group mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.11em] text-navy/65 hover:text-navy">{product.category}<ArrowUpRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
                <p className="mt-7 text-lg leading-8 text-navy/80">{product.description}</p>
                <p className="mt-4 text-sm leading-7 text-slate">{product.detail}</p>
                <div className="mt-7 border-y border-navy/10 py-6">
                  <h2 className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-navy">Information to confirm with KCSS</h2>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">{["Actual product name and brand", "Relevant product options", "Current product information", "Appropriate next steps"].map((item) => <li key={item} className="flex items-start gap-2 text-sm leading-6 text-slate"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />{item}</li>)}</ul>
                </div>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <button type="button" onClick={() => openInquiry(product)} className="group flex min-h-13 flex-1 items-center justify-center gap-3 bg-gold px-6 py-4 text-xs font-bold uppercase tracking-[0.1em] text-navy hover:bg-[#ffc633]">Request information<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></button>
                  <ButtonLink href={business.phoneHref} variant="outline">Call KCSS</ButtonLink>
                </div>
                <button type="button" onClick={copyLink} className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-slate transition-colors hover:text-navy" aria-live="polite">{copyStatus === "copied" ? <Check className="h-4 w-4 text-gold" /> : <Clipboard className="h-4 w-4" />}{copyStatus === "copied" ? "Sample link copied" : copyStatus === "error" ? "Copy unavailable — use your browser address bar" : "Copy sample link"}</button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-y border-navy/10 bg-soft py-8">
        <div className="container-wide flex items-start gap-4"><Info className="mt-0.5 h-5 w-5 shrink-0 text-gold" /><p className="max-w-5xl text-sm leading-7 text-slate"><strong className="text-navy">About this sample:</strong> The name above is a descriptive design-study title, not an actual product or brand name. Photography is representative. No pricing, availability, specifications, or purchase option is offered in this prototype.</p></div>
      </section>
      <section className="bg-white py-20 md:py-24">
        <div className="container-wide"><div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"><SectionHeading eyebrow="Continue exploring" title={sameCategory.length ? "Related product studies." : "More from the visual catalog."} /><ButtonLink to="/shop" variant="text">View all samples</ButtonLink></div><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{related.map((item, index) => <ProductCard key={item.slug} product={item} index={index} />)}</div></div>
      </section>
      <FinalCta title="Have a question about this product category?" copy="Start an inquiry or call KCSS to discuss confirmed product information and appropriate next steps." />
    </>
  );
}
