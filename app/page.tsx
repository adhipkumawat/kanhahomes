"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const productGroups = [
  {
    title: "Home Decor",
    items:
      "Vases, wall decor, candle holders, table accents, planters, and decorative pieces.",
    note: "For decor stores, gift shops, lifestyle sellers, and boutique buyers.",
    image: "/home-decor-gallery.png",
  },
  {
    title: "Home Textiles",
    items:
      "Bedsheets, cushion covers, throws, curtains, table runners, mats, and soft furnishings.",
    note: "Buyer-specific sizes, colors, fabric options, sets, and packing styles.",
    image: "/home-textiles-gallery.png",
  },
  {
    title: "Kitchen and Dining",
    items:
      "Serving trays, bowls, storage jars, tableware, baskets, placemats, and dining accessories.",
    note: "Practical home products for retailers, distributors, and hospitality buyers.",
    image: "/kitchen-dining-gallery.png",
  },
  {
    title: "Custom Home Items",
    items:
      "Buyer-specific designs, sample coordination, labels, packing, and quality checks.",
    note: "Share your reference photo or specification and we will confirm availability.",
    image: "/home-items-packing.png",
  },
];

const featuredProducts = [
  "Bedsheets",
  "Cushion Covers",
  "Throws",
  "Curtains",
  "Table Runners",
  "Decor Vases",
  "Wall Decor",
  "Candle Holders",
  "Storage Baskets",
  "Serving Trays",
  "Planters",
  "Custom Designs",
];

const productDetails = [
  "Product photos",
  "Available designs",
  "Size and material",
  "Color options",
  "Packing style",
  "Price details",
];

const highlights = [
  ["Focused", "Only home items"],
  ["Simple", "Direct enquiry"],
  ["Flexible", "Custom options"],
  ["Clear", "Photos and pricing"],
];

const productGallery = [
  {
    title: "Decor collections",
    copy: "Vases, candle holders, wall accents, planters, and shelf decor for lifestyle stores.",
    image: "/home-decor-gallery.png",
  },
  {
    title: "Textile samples",
    copy: "Bedsheets, cushion covers, throws, table runners, mats, and soft furnishing sets.",
    image: "/home-textiles-gallery.png",
  },
  {
    title: "Kitchen and dining",
    copy: "Serving trays, bowls, jars, placemats, baskets, and table accessories.",
    image: "/kitchen-dining-gallery.png",
  },
  {
    title: "Packing view",
    copy: "Simple product packing, sample grouping, and buyer-specific presentation options.",
    image: "/home-items-packing.png",
  },
];

const productVisuals: Record<
  string,
  {
    description: string;
    mainImage: string;
    relatedImages: string[];
  }
> = {
  "Home Decor": {
    description:
      "Decor vases, candle holders, wall accents, planters, and shelf styling pieces.",
    mainImage: "/home-decor-gallery.png",
    relatedImages: ["/home-items-showcase.png", "/home-decor-gallery.png"],
  },
  "Home Textiles": {
    description:
      "Bedsheets, cushion covers, throws, curtains, table runners, and fabric samples.",
    mainImage: "/home-textiles-gallery.png",
    relatedImages: ["/curtains-gallery.png", "/home-items-packing.png"],
  },
  "Kitchen and Dining": {
    description:
      "Serving trays, bowls, storage jars, tableware, placemats, and dining accessories.",
    mainImage: "/kitchen-dining-gallery.png",
    relatedImages: ["/home-items-showcase.png", "/home-items-packing.png"],
  },
  "Custom Home Items": {
    description:
      "Buyer-specific designs, sample grouping, labels, packing styles, and product checks.",
    mainImage: "/home-items-packing.png",
    relatedImages: ["/home-decor-gallery.png", "/home-textiles-gallery.png"],
  },
  Bedsheets: {
    description:
      "Bedsheet sets, folded samples, color options, and fabric selections.",
    mainImage: "/home-textiles-gallery.png",
    relatedImages: ["/home-items-packing.png", "/curtains-gallery.png"],
  },
  "Cushion Covers": {
    description:
      "Cushion cover styles, fabric textures, color combinations, and sample sets.",
    mainImage: "/home-textiles-gallery.png",
    relatedImages: ["/home-items-packing.png", "/home-decor-gallery.png"],
  },
  Throws: {
    description:
      "Soft throw blankets, woven textures, neutral colors, and lifestyle textile options.",
    mainImage: "/home-textiles-gallery.png",
    relatedImages: ["/home-items-packing.png", "/curtains-gallery.png"],
  },
  Curtains: {
    description:
      "Curtain panels, fabric swatches, window styling options, and color combinations.",
    mainImage: "/curtains-gallery.png",
    relatedImages: ["/home-textiles-gallery.png", "/home-items-packing.png"],
  },
  "Table Runners": {
    description:
      "Table runners, placemats, dining textiles, and coordinated table styling.",
    mainImage: "/kitchen-dining-gallery.png",
    relatedImages: ["/home-textiles-gallery.png", "/home-items-packing.png"],
  },
  "Decor Vases": {
    description:
      "Ceramic vases, decorative accents, shelf pieces, and premium decor assortments.",
    mainImage: "/home-decor-gallery.png",
    relatedImages: ["/home-items-showcase.png", "/kitchen-dining-gallery.png"],
  },
  "Wall Decor": {
    description:
      "Wall accents, decorative hangings, lifestyle pieces, and boutique decor options.",
    mainImage: "/home-decor-gallery.png",
    relatedImages: ["/home-items-showcase.png", "/home-items-packing.png"],
  },
  "Candle Holders": {
    description:
      "Candle holders, table accents, decorative sets, and gift-ready home decor.",
    mainImage: "/home-decor-gallery.png",
    relatedImages: ["/home-items-showcase.png", "/kitchen-dining-gallery.png"],
  },
  "Storage Baskets": {
    description:
      "Storage baskets, woven organizers, home utility pieces, and display-ready samples.",
    mainImage: "/kitchen-dining-gallery.png",
    relatedImages: ["/home-decor-gallery.png", "/home-items-packing.png"],
  },
  "Serving Trays": {
    description:
      "Serving trays, bowls, table accessories, and dining product collections.",
    mainImage: "/kitchen-dining-gallery.png",
    relatedImages: ["/home-items-showcase.png", "/home-decor-gallery.png"],
  },
  Planters: {
    description:
      "Planters, ceramic pots, table accents, and indoor decor product options.",
    mainImage: "/home-decor-gallery.png",
    relatedImages: ["/home-items-showcase.png", "/kitchen-dining-gallery.png"],
  },
  "Custom Designs": {
    description:
      "Reference-based home item development, sample options, and buyer-specific presentation.",
    mainImage: "/home-items-packing.png",
    relatedImages: ["/home-decor-gallery.png", "/home-textiles-gallery.png"],
  },
};

const contactEmail = "Rajesh.todwal@gmail.com";
const contactPhone = "8005808942";

export default function Home() {
  const [product, setProduct] = useState("Home Decor");
  const [quantity, setQuantity] = useState("");
  const [requirement, setRequirement] = useState("");
  const selectedVisual = productVisuals[product] ?? productVisuals["Home Decor"];

  const enquiryHref = useMemo(() => {
    const body = [
      "Hello Kanha Homes Exports,",
      "",
      "I am interested in your home item products.",
      `Product: ${product}`,
      `Quantity: ${quantity || "Not specified"}`,
      `Requirement: ${requirement || "Not specified"}`,
      "",
      "Please share product photos, available options, packing style, and price details.",
    ].join("\n");

    return `mailto:${contactEmail}?subject=${encodeURIComponent(
      "Home Item Product Enquiry",
    )}&body=${encodeURIComponent(body)}`;
  }, [product, quantity, requirement]);

  return (
    <main className="min-h-screen bg-[#f7fbff] text-[#0a2445]">
      <section className="overflow-hidden border-b border-[#dce8f2] bg-[linear-gradient(135deg,#ffffff_0%,#eef8ff_58%,#fffaf1_100%)] px-5 py-5 sm:px-8 lg:px-14">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white bg-white/85 px-4 py-3 shadow-[0_14px_50px_rgba(20,57,95,0.08)] backdrop-blur">
          <a className="flex min-w-0 items-center gap-3" href="#">
            <Image
              alt="Kanha Homes Exports logo mark"
              className="h-12 w-12 shrink-0 rounded-full object-cover shadow-sm"
              height={1254}
              priority
              src="/kanha-mark-real.png"
              width={1254}
            />
            <span className="hidden truncate text-sm font-medium tracking-[0.16em] text-[#0b2f67] sm:block">
              KANHA HOMES EXPORTS
            </span>
          </a>

          <div className="hidden items-center gap-7 text-sm font-medium text-[#52677f] md:flex">
            <a className="transition hover:text-[#006bc9]" href="#products">
              Products
            </a>
            <a className="transition hover:text-[#006bc9]" href="#gallery">
              Gallery
            </a>
            <a className="transition hover:text-[#006bc9]" href="#details">
              Details
            </a>
            <a className="transition hover:text-[#006bc9]" href="#contact">
              Contact
            </a>
          </div>

          <a
            className="rounded-full bg-[#0b2f67] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#082653]"
            href={`tel:${contactPhone}`}
          >
            Call Now
          </a>
        </nav>

        <div className="mx-auto grid max-w-7xl gap-12 py-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-20">
          <div>
            <p className="inline-flex rounded-full border border-[#cbe1f1] bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[#006bc9] shadow-sm">
              Home item exports from India
            </p>
            <h1 className="mt-6 max-w-3xl text-4xl font-medium leading-tight text-[#082653] sm:text-5xl lg:text-6xl">
              Explore home decor, textile, kitchen, and lifestyle products.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#52677f]">
              Kanha Homes Exports helps buyers discover available home item
              categories and request current product photos, options, packing
              style, and prices directly from Rajesh.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-full bg-[#0b2f67] px-7 py-3.5 text-center text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#082653]"
                href="#products"
              >
                View Products
              </a>
              <a
                className="rounded-full border border-[#c4d7e8] bg-white px-7 py-3.5 text-center text-sm font-medium text-[#0b2f67] transition hover:-translate-y-0.5 hover:border-[#006bc9]"
                href={enquiryHref}
              >
                Send Email
              </a>
            </div>

            <div className="mt-6 flex flex-col gap-2 text-sm text-[#52677f] sm:flex-row sm:items-center sm:gap-5">
              <a
                className="font-medium text-[#0b2f67] transition hover:text-[#006bc9]"
                href={`mailto:${contactEmail}`}
              >
                {contactEmail}
              </a>
              <span className="hidden h-1 w-1 rounded-full bg-[#9ab0c5] sm:block" />
              <a
                className="font-medium text-[#0b2f67] transition hover:text-[#006bc9]"
                href={`tel:${contactPhone}`}
              >
                +91 {contactPhone}
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              {highlights.map(([value, label]) => (
                <div
                  className="rounded-[8px] border border-[#d7e4ef] bg-white/86 p-4 shadow-sm transition hover:-translate-y-1 hover:border-[#8cc9ee]"
                  key={label}
                >
                  <p className="text-xl font-medium text-[#0b2f67]">{value}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-[#6b7c90]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-8 top-10 h-36 w-36 rounded-full bg-[#d49b2f]/20 blur-3xl" />
            <div className="absolute -bottom-8 -left-8 h-44 w-44 rounded-full bg-[#13b8ff]/18 blur-3xl" />
            <div className="relative grid gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
              <div className="group overflow-hidden rounded-[8px] border border-white bg-white p-3 shadow-[0_24px_70px_rgba(8,38,83,0.13)]">
                <Image
                  alt="Kanha Homes Exports logo"
                  className="h-full min-h-[280px] w-full rounded-[8px] object-cover transition duration-700 group-hover:scale-[1.03]"
                  height={1024}
                  priority
                  src="/kanha-logo-real.png"
                  width={1536}
                />
              </div>
              <div className="grid gap-4">
                <div className="group overflow-hidden rounded-[8px] border border-white bg-white p-3 shadow-[0_18px_55px_rgba(8,38,83,0.1)]">
                  <Image
                    alt="Home decor export product collection"
                    className="h-48 w-full rounded-[8px] object-cover transition duration-700 group-hover:scale-[1.04] lg:h-full"
                    height={900}
                    src="/home-decor-gallery.png"
                    width={1200}
                  />
                </div>
                <div className="rounded-[8px] border border-[#d7e4ef] bg-white/90 p-5 shadow-sm">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#006bc9]">
                    Quick Contact
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#52677f]">
                    Like any product category? Call or email for fresh photos
                    and price details.
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <a
                      className="rounded-full bg-[#0b2f67] px-4 py-2.5 text-center text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#082653]"
                      href={`tel:${contactPhone}`}
                    >
                      Call
                    </a>
                    <a
                      className="rounded-full border border-[#c4d7e8] bg-white px-4 py-2.5 text-center text-sm font-medium text-[#0b2f67] transition hover:-translate-y-0.5 hover:border-[#006bc9]"
                      href={enquiryHref}
                    >
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:px-10 lg:px-16" id="products">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#006bc9]">
                Product Range
              </p>
              <h2 className="mt-3 text-3xl font-medium leading-tight text-[#082653] sm:text-4xl">
                A simple catalogue for home item buyers.
              </h2>
              <p className="mt-4 leading-7 text-[#52677f]">
                Visitors can explore your main product categories first, then
                contact directly for current availability, photos, and prices.
              </p>
            </div>
            <a
              className="w-fit rounded-full border border-[#c4d7e8] bg-[#f8fbff] px-6 py-3 text-sm font-medium text-[#0b2f67] transition hover:-translate-y-0.5 hover:border-[#006bc9] hover:bg-white"
              href="#contact"
            >
              Ask for Product Details
            </a>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {productGroups.map((item) => (
              <article
                className="group overflow-hidden rounded-[8px] border border-[#d7e4ef] bg-[#f8fbff] shadow-sm transition hover:-translate-y-1 hover:border-[#8cc9ee] hover:bg-white hover:shadow-[0_18px_55px_rgba(8,38,83,0.1)]"
                key={item.title}
              >
                <div className="overflow-hidden">
                  <Image
                    alt={`${item.title} export products`}
                    className="h-48 w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                    height={900}
                    src={item.image}
                    width={1200}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-[#082653]">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-[#52677f]">{item.items}</p>
                  <p className="mt-4 border-t border-[#d7e4ef] pt-4 text-sm leading-6 text-[#61758c]">
                    {item.note}
                  </p>
                  <button
                    className="mt-5 rounded-full border border-[#c4d7e8] bg-white px-4 py-2 text-sm font-medium text-[#0b2f67] transition hover:-translate-y-0.5 hover:border-[#006bc9]"
                    onClick={() => setProduct(item.title)}
                    type="button"
                  >
                    Select for enquiry
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-[8px] border border-[#d7e4ef] bg-[#f8fbff] p-5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#006bc9]">
                  Popular Enquiries
                </p>
                <h3 className="mt-2 text-2xl font-medium text-[#082653]">
                  Choose an item and send a quick enquiry
                </h3>
              </div>
              <a
                className="text-sm font-medium text-[#0b2f67] transition hover:text-[#006bc9]"
                href="#contact"
              >
                Go to contact form
              </a>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              {featuredProducts.map((item) => (
                <button
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5 ${
                    product === item
                      ? "border-[#0b2f67] bg-[#0b2f67] text-white"
                      : "border-[#c7d8e6] bg-white text-[#173b67] hover:border-[#006bc9]"
                  }`}
                  key={item}
                  onClick={() => setProduct(item)}
                  type="button"
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="mt-6 grid gap-5 rounded-[8px] border border-[#d7e4ef] bg-white p-4 shadow-sm lg:grid-cols-[1.05fr_0.95fr]">
              <div className="group overflow-hidden rounded-[8px]">
                <Image
                  alt={`${product} selected product preview`}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  height={900}
                  key={selectedVisual.mainImage}
                  src={selectedVisual.mainImage}
                  width={1200}
                />
              </div>
              <div className="flex flex-col justify-between gap-5">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#006bc9]">
                    Selected Product
                  </p>
                  <h4 className="mt-2 text-2xl font-medium text-[#082653]">
                    {product}
                  </h4>
                  <p className="mt-3 leading-7 text-[#52677f]">
                    {selectedVisual.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {selectedVisual.relatedImages.map((image) => (
                    <Image
                      alt={`${product} related product image`}
                      className="h-28 w-full rounded-[8px] object-cover"
                      height={900}
                      key={image}
                      src={image}
                      width={1200}
                    />
                  ))}
                </div>

                <a
                  className="rounded-full bg-[#0b2f67] px-6 py-3 text-center text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#082653]"
                  href="#contact"
                >
                  Enquire About {product}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-y border-[#d7e4ef] bg-[#f6f9fc] px-6 py-16 sm:px-10 lg:px-16"
        id="gallery"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#006bc9]">
                Product Gallery
              </p>
              <h2 className="mt-3 text-3xl font-medium leading-tight text-[#082653] sm:text-4xl">
                More pictures, more confidence for buyers.
              </h2>
              <p className="mt-4 leading-7 text-[#52677f]">
                A visitor should quickly understand what type of home items are
                available. These visuals make the page feel more like a product
                catalogue and less like a plain information page.
              </p>
            </div>
            <div className="rounded-[8px] border border-[#d7e4ef] bg-white p-4 shadow-sm">
              <div className="grid gap-4 sm:grid-cols-3">
                {productGallery.slice(0, 3).map((item) => (
                  <div className="group overflow-hidden rounded-[8px]" key={item.title}>
                    <Image
                      alt={`${item.title} home items`}
                      className="h-48 w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                      height={900}
                      src={item.image}
                      width={1200}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {productGallery.map((item) => (
              <article
                className="group overflow-hidden rounded-[8px] border border-[#d7e4ef] bg-white shadow-sm transition hover:-translate-y-1 hover:border-[#8cc9ee] hover:shadow-[0_18px_55px_rgba(8,38,83,0.1)]"
                key={item.title}
              >
                <Image
                  alt={item.title}
                  className="h-52 w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  height={900}
                  src={item.image}
                  width={1200}
                />
                <div className="p-5">
                  <h3 className="text-lg font-medium text-[#082653]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#52677f]">
                    {item.copy}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-white px-6 py-16 sm:px-10 lg:px-16"
        id="details"
      >
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#006bc9]">
              What Buyers Receive
            </p>
            <h2 className="mt-3 text-3xl font-medium leading-tight text-[#082653] sm:text-4xl">
              Clear product information before they decide.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-[#52677f]">
              The page keeps the offer simple: show home item categories, invite
              the buyer to ask for details, and let them contact you directly by
              phone or email.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {productDetails.map((detail, index) => (
              <div
                className="rounded-[8px] border border-[#d7e4ef] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#8cc9ee]"
                key={detail}
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eaf6ff] text-sm font-medium text-[#006bc9]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-sm font-medium text-[#173b67]">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:px-10 lg:px-16" id="contact">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#006bc9]">
              Contact Rajesh
            </p>
            <h2 className="mt-3 text-3xl font-medium leading-tight text-[#082653] sm:text-4xl">
              Call directly or send a ready email enquiry.
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-[#52677f]">
              Select a product, add quantity and requirement, then send the
              enquiry by email. Buyers who want quick answers can call Rajesh
              directly.
            </p>

            <div className="mt-6 grid gap-3">
              <a
                className="rounded-[8px] border border-[#d7e4ef] bg-[#f8fbff] px-5 py-4 text-sm font-medium text-[#0b2f67] transition hover:-translate-y-0.5 hover:border-[#006bc9] hover:bg-white"
                href={`tel:${contactPhone}`}
              >
                Call: +91 {contactPhone}
              </a>
              <a
                className="rounded-[8px] border border-[#d7e4ef] bg-[#f8fbff] px-5 py-4 text-sm font-medium text-[#0b2f67] transition hover:-translate-y-0.5 hover:border-[#006bc9] hover:bg-white"
                href={`mailto:${contactEmail}`}
              >
                Email: {contactEmail}
              </a>
            </div>
          </div>

          <div className="rounded-[8px] border border-[#d7e4ef] bg-[#f8fbff] p-5 shadow-[0_18px_55px_rgba(8,38,83,0.08)]">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-medium text-[#173b67]">
                  Product category
                </span>
                <select
                  className="rounded-[8px] border border-[#c7d8e6] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#006bc9]"
                  onChange={(event) => setProduct(event.target.value)}
                  value={product}
                >
                  {productGroups.map((item) => (
                    <option key={item.title}>{item.title}</option>
                  ))}
                  {featuredProducts.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-[#173b67]">
                  Quantity
                </span>
                <input
                  className="rounded-[8px] border border-[#c7d8e6] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#006bc9]"
                  onChange={(event) => setQuantity(event.target.value)}
                  placeholder="Example: 100 pieces"
                  value={quantity}
                />
              </label>

              <label className="grid gap-2 sm:col-span-2">
                <span className="text-sm font-medium text-[#173b67]">
                  Requirement
                </span>
                <textarea
                  className="rounded-[8px] border border-[#c7d8e6] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#006bc9]"
                  onChange={(event) => setRequirement(event.target.value)}
                  placeholder="Example: cushion covers, blue color, product photos and price needed"
                  rows={4}
                  value={requirement}
                />
              </label>
            </div>

            <div className="mt-5 rounded-[8px] border border-[#d7e4ef] bg-white p-4">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#6b7c90]">
                Enquiry summary
              </p>
              <p className="mt-2 text-sm leading-6 text-[#173b67]">
                {product} with {quantity || "quantity not specified"}.{" "}
                {requirement || "Product photos and price details requested."}
              </p>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <a
                className="rounded-full bg-[#0b2f67] px-7 py-3.5 text-center text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#082653]"
                href={enquiryHref}
              >
                Send Email
              </a>
              <a
                className="rounded-full border border-[#c4d7e8] bg-white px-7 py-3.5 text-center text-sm font-medium text-[#0b2f67] transition hover:-translate-y-0.5 hover:border-[#006bc9]"
                href={`tel:${contactPhone}`}
              >
                Call Rajesh
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
