export const business = {
  name: "KCSS Specialty Durable Medical",
  formerName: "KC Shoe Stop",
  founder: "Natasha Belcher",
  phone: "913-486-1190",
  phoneHref: "tel:+19134861190",
  fax: "913-300-9624",
  email: "natasha@kcssdme.com",
  addressLine1: "10820 West 64th Street, Suite 200",
  addressLine2: "Shawnee, KS 66203",
  addressFull: "10820 West 64th Street, Suite 200, Shawnee, KS 66203",
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=10820+West+64th+Street+Suite+200+Shawnee+KS+66203",
  instagram: "https://www.instagram.com/kcshoestop/",
  facebook: "https://www.facebook.com/natasha.belcher",
  linkedin: "https://www.linkedin.com/in/natasha-belcher-hess-7b063234",
};

export type ProductCategory =
  | "Diabetic Shoes"
  | "Diabetic Inserts"
  | "Custom Diabetic Shoes & Inserts"
  | "Functional Orthotics"
  | "Lymphedema Compression"
  | "Blood Glucose Monitors & Supplies";

export type ProductFormat =
  | "Footwear"
  | "Inserts"
  | "Orthotics"
  | "Compression garments"
  | "Monitoring"
  | "Supplies";

export interface Product {
  slug: string;
  title: string;
  sampleNumber: string;
  category: ProductCategory;
  format: ProductFormat;
  description: string;
  detail: string;
  image: string;
  gallery: string[];
  alt: string;
  featured: boolean;
}

export const storeCategories: {
  name: ProductCategory;
  slug: string;
  description: string;
}[] = [
  {
    name: "Diabetic Shoes",
    slug: "diabetic-shoes",
    description: "Representative footwear styles for product conversations.",
  },
  {
    name: "Diabetic Inserts",
    slug: "diabetic-inserts",
    description: "Sample insert presentations across the diabetic footwear category.",
  },
  {
    name: "Custom Diabetic Shoes & Inserts",
    slug: "custom-diabetic",
    description: "A visual starting point for custom product inquiries.",
  },
  {
    name: "Functional Orthotics",
    slug: "functional-orthotics",
    description: "Representative orthotic forms and product imagery.",
  },
  {
    name: "Lymphedema Compression",
    slug: "lymphedema-compression",
    description: "Sample lower- and upper-limb garment presentations.",
  },
  {
    name: "Blood Glucose Monitors & Supplies",
    slug: "glucose-supplies",
    description: "Monitoring and supply concepts for catalog exploration.",
  },
];

const pexels = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200`;

export const products: Product[] = [
  {
    slug: "everyday-footwear-sample",
    title: "Everyday Footwear",
    sampleNumber: "Sample 01",
    category: "Diabetic Shoes",
    format: "Footwear",
    description: "A sample presentation for exploring everyday diabetic footwear with the KCSS team.",
    detail:
      "This catalog entry demonstrates how a diabetic footwear style could be presented. It is not a specific brand, model, or offer for sale. Contact KCSS to discuss the product information relevant to your needs.",
    image: "/images/diabetic-shoes.jpg",
    gallery: ["/images/diabetic-shoes.jpg", "/images/kcss-hero.jpg"],
    alt: "Representative navy and taupe comfort footwear on ivory plinths",
    featured: true,
  },
  {
    slug: "streamlined-footwear-sample",
    title: "Streamlined Footwear",
    sampleNumber: "Sample 02",
    category: "Diabetic Shoes",
    format: "Footwear",
    description: "A second footwear design sample showing a clean, streamlined product presentation.",
    detail:
      "Representative photography is used to demonstrate the proposed KCSS product experience. Style, sizing, product details, and availability have not been supplied and must be confirmed directly with the team.",
    image: pexels(13919725),
    gallery: [pexels(13919725), "/images/diabetic-shoes.jpg"],
    alt: "Representative black leather footwear held against a neutral background",
    featured: false,
  },
  {
    slug: "cushioned-insert-sample",
    title: "Cushioned Insert",
    sampleNumber: "Sample 03",
    category: "Diabetic Inserts",
    format: "Inserts",
    description: "A representative insert study for learning about the diabetic insert category.",
    detail:
      "This sample entry provides a visual framework for insert information without assigning unconfirmed materials, dimensions, or clinical specifications. The KCSS team can help identify appropriate next steps for your inquiry.",
    image: "/images/diabetic-inserts.jpg",
    gallery: ["/images/diabetic-inserts.jpg", "/images/custom-footwear.jpg"],
    alt: "Representative sand and navy contoured shoe inserts",
    featured: true,
  },
  {
    slug: "custom-footwear-sample",
    title: "Custom Footwear Study",
    sampleNumber: "Sample 04",
    category: "Custom Diabetic Shoes & Inserts",
    format: "Footwear",
    description: "A catalog concept for beginning a conversation about custom diabetic footwear.",
    detail:
      "Custom product requirements are individual. This design sample does not describe a specific custom service, product configuration, or clinical outcome. Connect with KCSS to discuss what information may be needed.",
    image: "/images/custom-footwear.jpg",
    gallery: ["/images/custom-footwear.jpg", "/images/diabetic-inserts.jpg"],
    alt: "Representative custom comfort shoe, inserts, and workshop tools",
    featured: true,
  },
  {
    slug: "custom-craft-sample",
    title: "Custom Craft Study",
    sampleNumber: "Sample 05",
    category: "Custom Diabetic Shoes & Inserts",
    format: "Footwear",
    description: "Representative workshop imagery for the custom footwear catalog category.",
    detail:
      "The imagery illustrates craftsmanship as a visual theme only. No fabrication process, timeline, material, or service commitment is implied. Product inquiries can be directed to the KCSS team.",
    image: pexels(38946185),
    gallery: [pexels(38946185), "/images/custom-footwear.jpg"],
    alt: "Representative footwear craftsperson working at a shoe workshop bench",
    featured: false,
  },
  {
    slug: "functional-orthotic-sample",
    title: "Functional Orthotic Profile",
    sampleNumber: "Sample 06",
    category: "Functional Orthotics",
    format: "Orthotics",
    description: "A visual product study for exploring functional orthotic options with KCSS.",
    detail:
      "This sample focuses on clear product presentation rather than unverified technical claims. Orthotic needs and product information should be discussed with the KCSS team and your healthcare provider as appropriate.",
    image: "/images/functional-orthotics.jpg",
    gallery: ["/images/functional-orthotics.jpg", pexels(3913023)],
    alt: "Representative sculpted graphite functional orthotic insoles",
    featured: true,
  },
  {
    slug: "orthotic-craft-sample",
    title: "Orthotic Craft Study",
    sampleNumber: "Sample 07",
    category: "Functional Orthotics",
    format: "Orthotics",
    description: "A representative look at orthotic craftsmanship for this catalog concept.",
    detail:
      "Workshop photography is representative and does not depict a specific KCSS process or product. Contact the team for accurate information about orthotic products and the next steps for an inquiry.",
    image: pexels(3913023),
    gallery: [pexels(3913023), "/images/functional-orthotics.jpg"],
    alt: "Representative orthotic technician shaping a device in a workshop",
    featured: false,
  },
  {
    slug: "lower-limb-compression-sample",
    title: "Lower-Limb Garment Study",
    sampleNumber: "Sample 08",
    category: "Lymphedema Compression",
    format: "Compression garments",
    description: "A sample garment presentation for exploring lower-limb compression products.",
    detail:
      "Compression product selection is individual. This entry makes no claim about compression level, fit, sizing, treatment, or outcome. KCSS can assist with product information and appropriate next steps.",
    image: "/images/compression-leg.jpg",
    gallery: ["/images/compression-leg.jpg", "/images/compression-arm.jpg"],
    alt: "Representative beige knee-high compression garments on ivory linen",
    featured: true,
  },
  {
    slug: "upper-limb-compression-sample",
    title: "Upper-Limb Garment Study",
    sampleNumber: "Sample 09",
    category: "Lymphedema Compression",
    format: "Compression garments",
    description: "Representative upper-limb garment imagery for a compression product inquiry.",
    detail:
      "This design sample is not a specific garment offer and does not supply measurements or clinical instructions. Discuss your product questions with KCSS and follow guidance from your healthcare provider.",
    image: "/images/compression-arm.jpg",
    gallery: ["/images/compression-arm.jpg", "/images/compression-leg.jpg"],
    alt: "Representative sand-colored compression sleeve and hand garment",
    featured: true,
  },
  {
    slug: "monitoring-kit-sample",
    title: "Monitoring Kit Study",
    sampleNumber: "Sample 10",
    category: "Blood Glucose Monitors & Supplies",
    format: "Monitoring",
    description: "A sample monitoring-kit layout for the diabetic supplies catalog experience.",
    detail:
      "No device model, compatibility, technical specification, or availability is assigned to this entry. Representative imagery supports the design concept only; contact KCSS for actual product information.",
    image: "/images/glucose-monitor.jpg",
    gallery: ["/images/glucose-monitor.jpg", pexels(6940852)],
    alt: "Representative unbranded glucose monitoring kit on an ivory tray",
    featured: true,
  },
  {
    slug: "testing-supplies-sample",
    title: "Testing Supplies Study",
    sampleNumber: "Sample 11",
    category: "Blood Glucose Monitors & Supplies",
    format: "Supplies",
    description: "An organized sample presentation for discussing diabetic testing supplies.",
    detail:
      "This sample does not identify specific supplies, quantities, compatibility, or packaging. It is a visual placeholder for a future catalog entry confirmed by KCSS.",
    image: "/images/testing-supplies.jpg",
    gallery: ["/images/testing-supplies.jpg", pexels(33200683)],
    alt: "Representative unbranded testing supplies organized with a navy case",
    featured: true,
  },
  {
    slug: "monitor-and-supplies-sample",
    title: "Monitor & Supplies Study",
    sampleNumber: "Sample 12",
    category: "Blood Glucose Monitors & Supplies",
    format: "Monitoring",
    description: "A second monitoring concept showing supplies in a clean editorial layout.",
    detail:
      "The objects pictured are representative and are not offered as a defined kit. Product names, specifications, and availability must be confirmed before this concept becomes a published catalog.",
    image: pexels(6940852),
    gallery: [pexels(6940852), "/images/testing-supplies.jpg"],
    alt: "Representative glucose monitor and testing supplies arranged on a surface",
    featured: false,
  },
];

export interface Specialty {
  slug: string;
  navTitle: string;
  title: string;
  eyebrow: string;
  description: string;
  editorialTitle: string;
  editorialCopy: string;
  image: string;
  imageAlt: string;
  categories: ProductCategory[];
  explore: { title: string; copy: string }[];
  prompts: string[];
  tone: string;
}

export const specialties: Specialty[] = [
  {
    slug: "diabetic-footwear",
    navTitle: "Diabetic Footwear & Inserts",
    title: "Diabetic footwear, presented with clarity.",
    eyebrow: "Diabetic Footwear & Inserts",
    description:
      "Explore representative footwear and insert collections, then connect with KCSS for product information shaped around your inquiry.",
    editorialTitle: "A more personal way to explore footwear.",
    editorialCopy:
      "Footwear product discovery can involve many details. KCSS brings the category into focus with a calm, organized experience and a direct line to a real person. The samples below are design placeholders; actual styles and product details must be confirmed with the team.",
    image: "/images/kcss-hero.jpg",
    imageAlt: "Representative personal footwear fitting interaction",
    categories: ["Diabetic Shoes", "Diabetic Inserts", "Custom Diabetic Shoes & Inserts"],
    explore: [
      { title: "Diabetic shoes", copy: "Start with representative everyday and streamlined footwear presentations." },
      { title: "Diabetic inserts", copy: "Explore the insert category without unconfirmed materials or specifications." },
      { title: "Custom collection", copy: "Use the custom collection as a starting point for a direct product conversation." },
    ],
    prompts: [
      "Which product category would you like to discuss?",
      "What information has your healthcare provider asked you to obtain?",
      "Would you like the team to explain appropriate next steps?",
    ],
    tone: "bg-[#eee9df]",
  },
  {
    slug: "functional-orthotics",
    navTitle: "Functional Orthotics",
    title: "Orthotic expertise. Thoughtful product discovery.",
    eyebrow: "Functional Orthotics",
    description:
      "Discover a focused orthotic collection and connect with KCSS to discuss product information and appropriate next steps.",
    editorialTitle: "Details matter. So does the conversation.",
    editorialCopy:
      "The orthotics category benefits from careful attention and clear communication. This concept pairs refined product imagery with straightforward paths to assistance, avoiding unsupported technical claims while making it easy to ask a question.",
    image: "/images/functional-orthotics.jpg",
    imageAlt: "Representative sculpted functional orthotic insoles",
    categories: ["Functional Orthotics"],
    explore: [
      { title: "Product profiles", copy: "Review representative orthotic forms in an uncluttered visual presentation." },
      { title: "Craft context", copy: "See how workshop imagery can communicate attention to detail without implying a specific process." },
      { title: "Direct assistance", copy: "Bring your product questions to the KCSS team for a personal response." },
    ],
    prompts: [
      "What orthotic product information are you looking for?",
      "Do you have product instructions from a healthcare provider to reference when you call?",
      "What would you like the team to clarify about next steps?",
    ],
    tone: "bg-[#e9edf0]",
  },
  {
    slug: "lymphedema-compression",
    navTitle: "Lymphedema Compression",
    title: "Compression products, easier to navigate.",
    eyebrow: "Lymphedema Compression",
    description:
      "Browse representative upper- and lower-limb garment collections in a reassuring experience built around clear inquiry paths.",
    editorialTitle: "Reassurance begins with clear information.",
    editorialCopy:
      "Compression product discovery should feel organized and approachable. This page concept separates garment collections, keeps product language careful, and places personal assistance within easy reach. No treatment outcome or product suitability is implied.",
    image: "/images/compression-leg.jpg",
    imageAlt: "Representative beige compression stockings arranged on ivory fabric",
    categories: ["Lymphedema Compression"],
    explore: [
      { title: "Lower-limb collection", copy: "Explore a representative stocking presentation and prepare a product inquiry." },
      { title: "Upper-limb collection", copy: "View sleeve and hand-garment imagery in a separate, clearly labeled sample." },
      { title: "Product conversations", copy: "Ask KCSS about product information without sharing sensitive medical details online." },
    ],
    prompts: [
      "Are you asking about an upper-limb or lower-limb product category?",
      "What non-sensitive product information would you like the team to provide?",
      "Would you prefer to call or create an email draft?",
    ],
    tone: "bg-[#f1ece6]",
  },
  {
    slug: "diabetic-supplies",
    navTitle: "Diabetic Supplies",
    title: "Everyday supplies. An organized starting point.",
    eyebrow: "Diabetic Supplies",
    description:
      "Explore representative blood glucose monitoring and supply presentations, with a direct route to the KCSS team for actual product information.",
    editorialTitle: "Less searching. More useful conversations.",
    editorialCopy:
      "A clear supply catalog begins with thoughtful organization. Monitoring and supply samples are presented without invented model names, compatibility statements, or package contents, leaving room for confirmed KCSS information at publication.",
    image: "/images/glucose-monitor.jpg",
    imageAlt: "Representative unbranded glucose monitor and supplies",
    categories: ["Blood Glucose Monitors & Supplies"],
    explore: [
      { title: "Monitoring concepts", copy: "Review representative monitoring imagery without assumed device specifications." },
      { title: "Supply concepts", copy: "Explore an organized testing-supply presentation with no implied package contents." },
      { title: "Confirmed information", copy: "Contact KCSS to ask about actual product details before making any decision." },
    ],
    prompts: [
      "Are you asking about monitoring products, supplies, or the broader category?",
      "What product details would you like KCSS to confirm?",
      "Would you like help identifying the next step for your inquiry?",
    ],
    tone: "bg-[#e8edf0]",
  },
];

export const getProduct = (slug?: string) => products.find((product) => product.slug === slug);
export const getSpecialty = (slug?: string) => specialties.find((specialty) => specialty.slug === slug);
export const getCategoryBySlug = (slug?: string | null) =>
  storeCategories.find((category) => category.slug === slug)?.name;
