import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { Link } from "react-router-dom"; // or next/link

import {
  MapPinned,
  TrendingUp,
  ShieldCheck,
  Route,
  LineChart,
  MapPin,
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Phone,
  Plus,
  X,
  Landmark,
  Building2,
  TreePalmIcon,
} from "lucide-react";
import gaurcity from "../assets/home/galaxynorth.png";
// import g1 from "../assets/home/gallery1_1.jpg";
// import g2 from "../assets/home/gallery1_2.jpg";
// import g3 from "../assets/home/gallery1_3.jpg";
// import g4 from "../assets/home/gallery1_4.jpg";
// import g5 from "../assets/home/gallery2_1.jpg";
// import g6 from "../assets/home/gallery2_2.jpg";
import gclogo from "../assets/gclogo.jpeg";

const FEATURES = [
  {
    roman: "i",
    icon: Landmark,
    title: "Landmark Township",
    blurb:
      "One of Greater Noida West's most recognisable addresses — visible, established and trusted.",
  },
  {
    roman: "ii",
    icon: Building2,
    title: "Mixed-Use Advantage",
    blurb:
      "Retail, commercial and residential all within the same community — maximum convenience for residents.",
  },
  {
    roman: "iii",
    icon: TreePalmIcon,
    title: "Lush Podium Greens",
    blurb:
      "Elevated podium gardens, landscaped parks, and large green areas across the township.",
  },
  {
    roman: "iv",
    icon: TrendingUp,
    title: "Strong Rental Traction",
    blurb:
      "Consistent rental demand driven by corporate professionals and the dense social infrastructure around the project.",
  },
  {
    roman: "v",
    icon: ShieldCheck,
    title: "Ready Possession",
    blurb:
      "Occupation Certificate received. Residents already living. No construction delays to worry about.",
  },
];

// const GALLERY = [
//   { src: g1, caption: "Aerial study, golden hour" },
//   { src: gaurcity, caption: "Master plan render" },
//   { src: g3, caption: "Road grid & avenues" },
//   { src: g2, caption: "Gateway elevation" },
//   { src: g5, caption: "Ahmedabad–Dholera Expressway" },
//   { src: g4, caption: "Scale model, boardroom" },
//   { src: g6, caption: "International airport, Phase I" },
// ];

const CONNECTIVITY = [
  {
    label: "Metro",
    title: "Aqua Line, Noida–Greater Noida",
    note: "Operational",
  },
  {
    label: "Road",
    title: "Noida–Greater Noida Expressway",
    note: "Fully operational",
  },
  {
    label: "Mall",
    title: "Gaur City Mall",
    note: "Within the township",
  },
  {
    label: "Airport",
    title: "Jewar Intl. Airport",
    note: "~35 km · under construction",
  },
];

const WHAT_YOU_GET = [
  { label: "Configuration", value: "2 BHK, 3 BHK & Retail" },
  { label: "Sizes", value: "On request" },
  { label: "Status", value: "Ready · OC Received" },
  { label: "Ownership", value: "Leasehold · RERA Compliant" },
  { label: "Approvals", value: "OC Received · Fully Occupied" },
  { label: "Advisory", value: "Resale, leasing & investment advisory" },
];

const GaurCity = () => {
  const [lightbox, setLightbox] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 800], [1, 1.12]);
  const heroY = useTransform(scrollY, [0, 800], [0, 120]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lightbox keyboard nav
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight")
        setLightbox((i) => (i === null ? null : (i + 1) % GALLERY.length));
      if (e.key === "ArrowLeft")
        setLightbox((i) =>
          i === null ? null : (i - 1 + GALLERY.length) % GALLERY.length,
        );
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);
  return (
    <div className="min-h-[100dvh] bg-[#F8F5F2] text-[#1A1414] selection:bg-[#873953] selection:text-white overflow-x-hidden font-sans">
      {/* 1) HERO */}
      <section className="relative h-[100dvh] min-h-[640px] w-full overflow-hidden">
        <motion.div
          style={{ scale: heroScale, y: heroY }}
          className="absolute inset-0 will-change-transform"
        >
          <img
            src={gaurcity}
            alt="Iconic Nest"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Layered gradients: black + burgundy */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/55 to-[#0A0A0A]/15"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-[#873953]/40 via-transparent to-[#5C2438]/30 mix-blend-multiply"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(135,57,83,0.25),transparent_60%)]"
        />

        {/* Decorative corner brackets */}
        <div
          aria-hidden
          className="absolute top-28 right-6 lg:right-10 w-12 h-12 border-r border-t border-[#F8F5F2]/40 hidden md:block"
        />
        <div
          aria-hidden
          className="absolute bottom-10 left-6 lg:left-10 w-12 h-12 border-l border-b border-[#F8F5F2]/40 hidden md:block"
        />

        {/* Back link */}
        <div className="absolute top-28 left-6 lg:left-10 z-10">
          <Link
            to="/projects"
            className="inline-flex items-center text-[#F8F5F2]/75 hover:text-[#F8F5F2] text-[11px] tracking-[0.25em] uppercase transition-colors group"
          >
            <span className="w-8 h-[1px] bg-[#F8F5F2]/50 mr-3 group-hover:w-12 transition-all duration-500" />
            <ArrowLeft className="w-3.5 h-3.5 mr-2" />
            Back to Projects
          </Link>
        </div>

        {/* Vertical side label */}
        <div className="hidden lg:flex absolute left-10 top-1/2 -translate-y-1/2 -rotate-90 origin-left z-10 items-center gap-3">
          <span className="w-12 h-[1px] bg-[#F8F5F2]/40" />
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#F8F5F2]/60">
            Project · 05 of 06
          </span>
        </div>

        {/* Hero content */}
        <div className="absolute inset-x-0 bottom-0 px-6 lg:px-10 pb-24 lg:pb-32">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-block bg-[#873953] text-white text-[10px] tracking-[0.3em] uppercase font-semibold px-3 py-1.5">
                  Mixed-Use Community
                </span>
                <span className="text-[#F8F5F2]/60 text-[10px] tracking-[0.3em] uppercase">
                  Phase 02 · Est. 2023
                </span>
              </div>

              <h1 className="font-serif text-[14vw] sm:text-[10vw] lg:text-[8vw] leading-[0.9] text-[#F8F5F2] mb-8 -tracking-[0.02em]">
               Galaxy North {" "}
                <span className="italic font-light text-[#F8F5F2]/95">
                  Avenue.
                </span>
              </h1>

              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-[#F8F5F2]/85 max-w-3xl">
                <div className="flex items-center text-[11px] tracking-[0.25em] uppercase">
                  <MapPin className="w-4 h-4 mr-2.5 text-[#873953]" />
                 GC-3 Gaur City · Uttar Pradesh
                </div>
                <span className="hidden md:block w-12 h-[1px] bg-[#F8F5F2]/30" />
                <p className="text-[#F8F5F2]/70 font-light text-base md:text-lg italic max-w-xl">
                  A landmark community with everything inside.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating spec card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="hidden lg:block absolute right-10 bottom-32 z-10"
        >
          <div className="bg-[#F8F5F2]/8 backdrop-blur-md border border-white/15 text-[#F8F5F2] w-[280px]">
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
              <span className="text-[10px] tracking-[0.3em] uppercase opacity-60">
                Spec Sheet
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#873953]">
                Live
              </span>
            </div>
            <div className="px-6 py-5 space-y-3.5">
              {[
                ["Type", "Mixed-Use Community"],
                ["Location", "GC-3 Gaur City"],
                ["Status", "Available"],
                ["Est.", "2023"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-baseline justify-between text-xs"
                >
                  <span className="opacity-50 tracking-[0.15em] uppercase text-[10px]">
                    {k}
                  </span>
                  <span className="font-serif italic text-sm">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2) OVERVIEW */}
      <section
        id="overview"
        className="relative px-6 lg:px-10 py-28 lg:pt-40 lg:pb-20 bg-primary/40"
      >
        {/* Watermark monogram */}
        <span
          aria-hidden
          className="pointer-events-none absolute right-0 top-10 font-serif italic text-[28vw] lg:text-[22vw] leading-none text-[#1A1414]/[0.025] select-none"
        >
          02
        </span>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative">
          <div className="lg:col-span-4">
            <SectionLabel label="The Project" />
            <h2 className="font-serif text-4xl lg:text-5xl leading-[1.05] text-[#1A1414] mt-6">
              A self-contained landmark
              <span className="italic text-[#873953]"> community.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 lg:pt-3">
            <p className="text-xl leading-[1.6] text-[#1A1414]/80 font-light">
              <span className="float-left font-serif text-7xl leading-[0.85] mr-3 mt-1.5 text-[#873953] italic">
                G
              </span>
             alaxy North Avenue is a landmark mixed-use residential and
              commercial community in Greater Noida West — one of NCR's largest
              and most recognisable township addresses, with mature
              infrastructure, a rich amenity ecosystem and consistent rental
              demand.
            </p>
            <div className="my-10 flex items-center gap-5">
              <span className="block w-16 h-[1px] bg-[#873953]" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#873953] font-semibold">
                Why it remains a benchmark
              </span>
            </div>
            <p className="text-base leading-[1.75] text-[#1A1414]/65 font-light">
              For investors, the combination of a ready, occupied township with
              high visibility and strong rental traction makes Gaur City Heights
              a dependable long-term hold. For end-users, it simply offers the
              most complete lifestyle in the micro-market.
            </p>
            <div className="mt-10 flex items-center gap-3 text-[#1A1414]/50">
              <span className="font-serif italic text-sm">— JM Ventures</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3) KEY FEATURES — refined editorial list */}
      <section
        id="features"
        className="px-6 lg:px-10 pb-28 lg:pt-20 lg:pb-28 relative"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16 lg:mb-20">
            <div className="lg:col-span-5">
              <SectionLabel label="Key Features" />
              <h2 className="font-serif text-4xl lg:text-5xl leading-[1.05] text-[#1A1414] mt-6">
                Infrastructure built,
                <span className="italic text-[#873953]">
                  {" "}
                  community thriving.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:pt-3">
              <p className="text-[#1A1414]/65 font-light leading-relaxed text-lg">
                Five reasons Gaur City Heights continues to attract buyers,
                renters and investors across NCR.
              </p>
            </div>
          </div>

          {/* Editorial numbered list */}
          <div className="border-t border-[#1A1414]/10">
            {FEATURES.map((f, idx) => (
              <motion.article
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="group relative grid grid-cols-12 gap-4 lg:gap-8 items-center py-8 lg:py-10 border-b border-[#1A1414]/10 hover:bg-[#1A1414] hover:text-[#F8F5F2] transition-colors duration-500 px-2 lg:px-6 -mx-2 lg:-mx-6"
              >
                <div className="col-span-2 lg:col-span-1">
                  <span className="font-serif italic text-3xl lg:text-4xl text-[#873953] group-hover:text-[#F8F5F2] transition-colors duration-500">
                    {f.roman}
                  </span>
                </div>

                <div className="col-span-1 lg:col-span-1 flex justify-center">
                  <span className="w-11 h-11 rounded-full border border-[#1A1414]/20 group-hover:border-[#873953] group-hover:bg-[#873953] group-hover:text-white flex items-center justify-center transition-all duration-500">
                    <f.icon className="w-4 h-4" />
                  </span>
                </div>

                <div className="col-span-9 lg:col-span-4">
                  <h3 className="font-serif text-2xl lg:text-3xl leading-tight">
                    {f.title}
                  </h3>
                </div>

                <div className="col-span-12 lg:col-span-5 lg:col-start-7">
                  <p className="text-sm lg:text-base font-light leading-relaxed text-[#1A1414]/70 group-hover:text-[#F8F5F2]/75 transition-colors duration-500 max-w-md">
                    {f.blurb}
                  </p>
                </div>

                <div className="hidden lg:flex col-span-1 justify-end">
                  <ArrowUpRight className="w-5 h-5 text-[#1A1414]/30 group-hover:text-[#873953] group-hover:rotate-45 transition-all duration-500" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 4) GALLERY */}
      {/* <section
        id="gallery"
        className="bg-gradient-to-tr from-primary to-foreground px-6 lg:px-10 py-28 lg:py-40 text-[#F8F5F2] relative"
      >
        <span
          aria-hidden
          className="pointer-events-none absolute left-0 bottom-0 font-serif italic text-[24vw] lg:text-[18vw] leading-none text-white/[0.025] select-none"
        >
          gallery
        </span>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-6">
              <SectionLabel label="Gallery" tone="dark" />
              <h2 className="font-serif text-4xl lg:text-5xl leading-[1.05] mt-6">
                A walk through
                <span className="italic text-[#873953]">
                  {" "}
                  Gaur City Heights.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 lg:pt-3 flex items-end">
              <p className="text-[#F8F5F2] font-light leading-relaxed">
                Renders, visuals and photography of the project, its
                surroundings and key infrastructure. Click any frame to expand.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-3 md:gap-4">
            <GalleryTile
              item={GALLERY[0]}
              index={0}
              className="col-span-12 md:col-span-8 aspect-[16/10]"
              onClick={setLightbox}
            />
            <GalleryTile
              item={GALLERY[1]}
              index={1}
              className="col-span-6 md:col-span-4 aspect-square"
              onClick={setLightbox}
            />
            <GalleryTile
              item={GALLERY[2]}
              index={2}
              className="col-span-6 md:col-span-4 aspect-[4/5]"
              onClick={setLightbox}
            />
            <GalleryTile
              item={GALLERY[3]}
              index={3}
              className="col-span-12 md:col-span-4 aspect-[4/5]"
              onClick={setLightbox}
            />
            <GalleryTile
              item={GALLERY[4]}
              index={4}
              className="col-span-12 md:col-span-4 aspect-[4/5]"
              onClick={setLightbox}
            />
            <GalleryTile
              item={GALLERY[5]}
              index={5}
              className="col-span-6 md:col-span-7 aspect-[16/10]"
              onClick={setLightbox}
            />
            <GalleryTile
              item={GALLERY[6]}
              index={6}
              className="col-span-6 md:col-span-5 aspect-[16/10]"
              onClick={setLightbox}
            />
          </div>
        </div>
      </section> */}

      {/* 5) LOCATION ADVANTAGE */}
      <section
        id="location"
        className="px-6 lg:px-10 py-28 lg:py-16 bg-[#F8F5F2] relative"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <SectionLabel label="Location Advantage" />
            <h2 className="font-serif text-4xl lg:text-5xl leading-[1.05] text-[#1A1414] mt-6 mb-8">
              Greater Noida West's
              <span className="italic text-[#873953]">
                {" "}
                most recognised address.
              </span>
            </h2>
            <p className="text-[#1A1414]/70 font-light leading-relaxed mb-6 text-lg">
              The Gaur City township sits at the heart of Greater Noida West's
              most active residential belt, with mature schools, hospitals,
              malls and corporate offices all within minutes.
            </p>
            <p className="text-[#1A1414]/60 font-light leading-relaxed">
              The project has long passed the 'upcoming' stage — it is a living,
              breathing community that speaks for itself.
            </p>

            <div className="mt-10 inline-flex items-center gap-4 px-6 py-4 border border-[#1A1414]/15 hover:border-[#873953] hover:bg-[#873953] hover:text-white transition-colors duration-500 cursor-pointer group">
              <MapPin className="w-4 h-4 text-[#873953] group-hover:text-white" />
              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase opacity-60">
                  On the Map
                </div>
                <div className="font-serif italic text-base">
                  Gaur City 2, Greater Noida West
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 ml-2 group-hover:rotate-45 transition-transform" />
            </div>
          </div>

          <div className="lg:col-span-7">
            {/* Image */}
            <div className="relative mb-10 group overflow-hidden">
              <div className="aspect-[5/4] overflow-hidden">
                <img
                  src={gaurcity}
                  alt="Connectivity"
                  className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                />
              </div>
              <div className="absolute top-4 left-4 bg-[#F8F5F2]/95 backdrop-blur px-4 py-2 text-[#1A1414]">
                <span className="text-[10px] tracking-[0.3em] uppercase font-semibold">
                  Location & Connectivity
                </span>
              </div>
            </div>

            {/* Connectivity timeline */}
            <div className="space-y-px bg-[#1A1414]/10">
              {CONNECTIVITY.map((c, idx) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="bg-[#F8F5F2] grid grid-cols-12 gap-4 items-center px-5 py-5 hover:bg-white transition-colors group"
                >
                  <div className="col-span-2 lg:col-span-2">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#873953] font-semibold">
                      {c.label}
                    </span>
                  </div>
                  <div className="col-span-7 lg:col-span-7">
                    <div className="font-serif text-lg lg:text-xl text-[#1A1414] leading-tight">
                      {c.title}
                    </div>
                  </div>
                  <div className="col-span-3 lg:col-span-3 text-right">
                    <span className="text-xs text-[#1A1414]/55 font-light italic">
                      {c.note}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6) WHAT YOU GET — refined spec sheet */}
      <section
        id="details"
        className="px-6 lg:px-10 py-28 lg:py-40 bg-[#1A1414] text-[#F8F5F2] relative overflow-hidden"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#873953]/10 blur-3xl"
        />

        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16 lg:mb-20">
            <SectionLabel label="What You Get" tone="dark" center />
            <h2 className="font-serif text-4xl lg:text-6xl leading-[1.05] max-w-3xl mx-auto mt-6">
              Community living,
              <span className="italic text-[#873953]"> complete package.</span>
            </h2>
          </div>

          {/* Spec sheet card with corner brackets */}
          <div className="relative">
            {/* Corner brackets */}
            <span
              className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-[#873953]"
              aria-hidden
            />
            <span
              className="absolute -top-3 -right-3 w-6 h-6 border-t border-r border-[#873953]"
              aria-hidden
            />
            <span
              className="absolute -bottom-3 -left-3 w-6 h-6 border-b border-l border-[#873953]"
              aria-hidden
            />
            <span
              className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-[#873953]"
              aria-hidden
            />

            <div className="border border-[#F8F5F2]/15 divide-y divide-[#F8F5F2]/10">
              {WHAT_YOU_GET.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="grid grid-cols-12 gap-6 items-baseline px-6 lg:px-10 py-6 lg:py-7 hover:bg-[#F8F5F2]/[0.03] transition-colors group"
                >
                  <span className="col-span-1 font-serif italic text-white text-sm">
                    0{idx + 1}
                  </span>
                  <span className="col-span-4 lg:col-span-3 text-[10px] tracking-[0.3em] uppercase text-[#F8F5F2]/65 font-semibold">
                    {item.label}
                  </span>
                  <span className="col-span-7 lg:col-span-7 font-serif text-xl lg:text-2xl leading-snug">
                    {item.value}
                  </span>
                  <span className="hidden lg:block col-span-1 text-right">
                    <Plus className="w-4 h-4 text-[#F8F5F2] inline group-hover:text-[#873953] group-hover:rotate-90 transition-all duration-500" />
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7) CTA */}
      <section
        id="enquire"
        className="relative bg-[#F8F5F2] text-[#1A1414] px-6 lg:px-10 py-28 lg:py-40 overflow-hidden"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(135,57,83,0.18),transparent_60%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-[#873953]/8 blur-3xl"
        />

        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionLabel label="Next Step" center />
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 mt-6 leading-[1.02]">
              Interested in
              <span className="italic text-[#873953]"> this project?</span>
            </h2>
            <p className="text-[#1A1414]/65 text-base md:text-lg font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              Get connected to available resale units, rental listings and
              investment analysis for Gaur City Heights from our Greater Noida
              West specialists.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                to="/contact"
                className="bg-[#873953] hover:bg-[#1A1414] flex text-white rounded-none px-9 py-7 text-[11px] tracking-[0.25em] uppercase h-auto group min-w-[240px]"
              >
                Schedule Site Visit
                <ArrowUpRight className="w-4 h-4 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/919899053053"
                target="_blank"
                className="bg-transparent flex items-center justify-center hover:bg-[#1A1414] hover:text-[#F8F5F2] text-[#1A1414] border border-[#1A1414]/30 hover:border-[#1A1414] rounded-none px-9 py-7 text-[11px] tracking-[0.25em] uppercase h-auto group min-w-[240px]"
              >
                Get Details
                <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="flex items-center justify-center gap-3 text-[#1A1414]/55">
              <span className="block w-12 h-[1px] bg-[#873953]/40" />
              <a
                href="tel:+919899053053"
                className="inline-flex items-center gap-2 text-sm font-light italic font-serif hover:text-[#873953] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                or call directly · +91 98990 53053
              </a>
              <span className="block w-12 h-[1px] bg-[#873953]/40" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 bg-[#0A0A0A]/96 backdrop-blur-md z-[100] flex items-center justify-center p-6 cursor-zoom-out"
          >
            {/* Top bar */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-[#F8F5F2]/80">
              <div className="flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase">
                <span className="text-[#873953]">
                  {String(lightbox + 1).padStart(2, "0")}
                </span>
                <span className="w-8 h-[1px] bg-[#F8F5F2]/30" />
                <span>{String(GALLERY.length).padStart(2, "0")}</span>
                <span className="hidden md:inline ml-4 italic font-serif text-sm not-uppercase tracking-normal text-[#F8F5F2]/70">
                  {GALLERY[lightbox].caption}
                </span>
              </div>
              <button
                aria-label="Close"
                onClick={() => setLightbox(null)}
                className="w-11 h-11 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-[#873953] hover:border-[#873953] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Prev / Next */}
            <button
              aria-label="Previous"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((i) =>
                  i === null ? null : (i - 1 + GALLERY.length) % GALLERY.length,
                );
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/25 text-white flex items-center justify-center hover:bg-[#873953] hover:border-[#873953] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              aria-label="Next"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((i) =>
                  i === null ? null : (i + 1) % GALLERY.length,
                );
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/25 text-white flex items-center justify-center hover:bg-[#873953] hover:border-[#873953] transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
            </button>

            <motion.img
              key={lightbox}
              src={GALLERY[lightbox].src}
              alt={GALLERY[lightbox].caption}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[88vw] max-h-[82vh] object-contain shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

function SectionLabel({ index, label, tone = "light", center = false }) {
  const color = tone === "dark" ? "text-[#F8F5F2]/55" : "text-[#1A1414]/55";
  return (
    <div
      className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}
    >
      <span className="font-serif italic text-[#873953] text-lg">{index}</span>
      <span className="block w-8 h-[1px] bg-[#873953]" />
      <span
        className={`text-[10px] tracking-[0.3em] uppercase font-semibold ${color}`}
      >
        {label}
      </span>
    </div>
  );
}

function GalleryTile({ item, index, className, onClick }) {
  return (
    <button
      onClick={() => onClick(index)}
      className={`relative overflow-hidden group cursor-zoom-in bg-[#0D0D0D] ${className}`}
    >
      <img
        src={item.src}
        alt={item.caption}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-[1300ms] ease-out group-hover:scale-[1.06] grayscale-[60%] group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Index */}
      <div className="absolute top-4 left-4 text-[#F8F5F2]/70 text-[10px] tracking-[0.3em] uppercase">
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Caption + view */}
      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
        <span className="font-serif italic text-[#F8F5F2] text-sm md:text-base translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          {item.caption}
        </span>
        <span className="bg-[#F8F5F2] text-[#1A1414] text-[10px] tracking-[0.25em] uppercase px-3 py-1.5 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 shrink-0">
          Expand
        </span>
      </div>
    </button>
  );
}

export default GaurCity;
