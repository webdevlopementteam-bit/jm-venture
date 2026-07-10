import dholera from "../assets/home/dholera.jpeg";
import londonmart from "../assets/londonmart/mart1.png";
import aceedit from "../assets/home/ace-edit.png";
import galaxyImg from "../assets/home/galaxy.jpeg";
import gaurImg from "../assets/home/galaxynorth.png";
import aceImg from "../assets/home/ace-estate.jpg";
import { AnimatePresence, motion, useInView, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, MapPin, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const FILTERS = ["All", "Residential", "Commercial", "Plots"];
const PROJECTS = [
  {
    id: "iconic-nest",
    name: "Iconic Nest",
    location: "Dholera, Gujarat",
    tag: "PLOTTED",
    year: "2025",
    description:
      "Premium plotted development in India's first greenfield smart city, anchored to the new Dholera International Airport.",
    image: dholera,
    link:"/iconic-nest",
  },
  {
    id: "london-mart",
    name: "London Mart",
    location: "Greater Noida West",
    tag: "COMMERCIAL",
    year: "2024",
    description:
      "A modern commercial hub crafted for retail, F&B, and offices in NCR's fastest-growing residential corridor.",
    image: londonmart,
    link:"/london-mart",
  },
  {
    id: "ace-edit",
    name: "Ace Edit",
    location: "Yamuna Expressway",
    tag: "RESIDENTIAL",
    year: "2024",
    description:
      "Contemporary residences along the Jewar Airport growth corridor, designed for modern families and investors.",
    image: aceedit,
    link:"/ace-edit",
  },
  {
    id: "gaur-city-heights",
    name: "Galaxy North Avenue",
    location: "GC-3 Gaur City",
    tag: "RESIDENTIAL",
    year: "2023",
    description:
      "Landmark mixed-use community with mature infrastructure, lush podiums, and strong rental demand.",
    image: gaurImg,
    link:"/gaur-city",
  },
  {
    id: "ace-estate",
    name: "Ace Estate",
    location: "Yamuna Expressway",
    tag: "PLOTTED",
    year: "2025",
    description:
      "Strategically positioned plots near the upcoming international airport — ideal for long-horizon land holders.",
    image: aceImg,
    link:"/ace-estate",
  },
];

const Projects = () => {
   const [activeFilter, setActiveFilter] = useState("All");

  const filtered = PROJECTS.filter((p) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Residential") return p.tag === "RESIDENTIAL";
    if (activeFilter === "Commercial") return p.tag === "COMMERCIAL";
    if (activeFilter === "Plots") return p.tag === "PLOTTED";
    return true;
  });
  return (
    <>

      {/* HERO — split editorial layout */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 px-6 lg:px-10 overflow-hidden bg-gradient-to-t from-primary/60 to-foreground/40">
        {/* decorative giant serif word */}
        <div
          aria-hidden
          className="pointer-events-none select-none absolute -bottom-10 lg:-bottom-20 left-0 right-0 text-center font-serif italic text-[20vw] leading-none text-[#873953]/15 tracking-tight"
        >
          JM Ventures
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: text */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 relative"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="h-[1px] w-12 bg-[#873953]" />
                <span className="text-[11px] tracking-[0.3em] uppercase text-[#873953] font-semibold">
                  Portfolio · 2026
                </span>
              </div>

              <h1 className="font-serif text-[14vw] sm:text-[10vw] lg:text-[8.5vw] leading-[0.95] tracking-tight text-[#1A1414]">
                Our
                <br />
                <span className="italic text-[#873953]">Projects.</span>
              </h1>

              <p className="mt-10 text-base md:text-lg text-[#1A1414]/70 max-w-xl leading-relaxed font-light">
                Curated real-estate opportunities across India's highest-growth
                corridors — Dholera SIR, the Yamuna Expressway and Greater
                Noida. Hand-picked. Title-clear. Investor-grade.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a href="#portfolio" className="bg-[#1A1414] hover:bg-[#873953] flex text-white rounded-none px-7 py-6 text-[11px] tracking-[0.25em] uppercase transition-all duration-500 group h-auto">
                  Explore Portfolio
                  <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#consultation"
                  className="text-[11px] tracking-[0.25em] uppercase text-[#1A1414] border-b border-[#1A1414] pb-1 hover:text-[#873953] hover:border-[#873953] transition-colors"
                >
                  Speak to an advisor
                </a>
              </div>

              <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4 font-semibold text-[#1A1414]/60 text-xs tracking-[0.2em] uppercase">
                <span>
                  <span className="text-[#873953] mr-2">06</span>Live Projects
                </span>
                <span>
                  <span className="text-[#873953] mr-2">04</span>Cities
                </span>
                <span>
                  <span className="text-[#873953] mr-2">50+</span>Years Of
                  Experience
                </span>
              </div>
            </motion.div>

            {/* Right: stacked image collage */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="lg:col-span-5 relative h-[460px] sm:h-[540px] lg:h-[640px]"
            >
              {/* Burgundy frame */}
              <div className="absolute right-6 top-6 w-[78%] h-[78%] border border-[#873953]" />
              {/* Main image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6 }}
                className="absolute right-0 top-0 w-[82%] h-[78%] overflow-hidden shadow-[0_30px_80px_-20px_rgba(26,20,20,0.35)]"
              >
                <img
                  src={dholera}
                  alt="Iconic Nest"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* Secondary image */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6 }}
                className="absolute left-0 bottom-0 w-[58%] h-[42%] overflow-hidden border-[6px] border-[#F8F5F2] shadow-[0_20px_50px_-15px_rgba(26,20,20,0.4)]"
              >
                <img
                  src={londonmart}
                  alt="London Mart"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* Floating tag */}
              <div className="absolute left-2 top-6 bg-[#1A1414] text-[#F8F5F2] px-4 py-3 text-[10px] tracking-[0.3em] uppercase">
                Featured
                <div className="text-white font-serif italic text-base normal-case tracking-normal mt-1">
                  Iconic Nest
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-[#1A1414]/10 bg-[#F1ECE6] py-5 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap animate-marquee">
          {[
            "Dholera",
            "Yamuna Expressway",
            "Greater Noida West",
            "Noida",
            "Jewar Airport Corridor",
            "RERA Compliant",
          ]
            .concat([
              "Dholera",
              "Yamuna Expressway",
              "Greater Noida West",
              "Noida",
              "Jewar Airport Corridor",,
              "RERA Compliant",
            ])
            .map((label, i) => (
              <span
                key={i}
                className="font-serif italic text-2xl text-[#1A1414]/70 flex items-center gap-12"
              >
                {label}
                <span className="w-1.5 h-1.5 rounded-full bg-[#873953]" />
              </span>
            ))}
        </div>
      </div>

      {/* FILTER BAR */}
      <section className="px-6 lg:px-10 pt-20 pb-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <span className="block text-[11px] tracking-[0.3em] uppercase text-[#873953] font-semibold mb-3">
              The Collection
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1A1414] leading-tight">
              A portfolio,<br />
              <span className="italic text-[#873953]">curated.</span>
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`relative px-5 py-2.5 text-[11px] tracking-[0.2em] uppercase rounded-full border transition-colors duration-300 ${
                  activeFilter === f
                    ? "text-[#F8F5F2] border-[#873953]"
                    : "text-[#1A1414]/70 border-[#1A1414]/15 hover:text-[#1A1414] hover:border-[#1A1414]/40"
                }`}
              >
                {activeFilter === f && (
                  <motion.span
                    layoutId="activeFilterPill"
                    className="absolute inset-0 rounded-full bg-[#873953]"
                    transition={{ type: "spring", stiffness: 320, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{f}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS — editorial alternating layout */}
      <section id="portfolio" className="px-6 lg:px-10 pb-24">
        <div className="max-w-7xl mx-auto divide-y divide-[#1A1414]/10">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, idx) => {
              const reverse = idx % 2 === 1;
              return (
                <motion.article
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                    delay: idx * 0.05,
                  }}
                  className="group py-12 md:py-20 first:pt-8"
                >
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                      reverse ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    {/* Image */}
                     <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
             className="lg:col-span-7 relative">
                      <div className="relative overflow-hidden aspect-[5/3.4] bg-[#1A1414]/5">
                        <motion.img
                          src={p.image}
                          alt={p.name}
                          className="w-full h-full object-cover rounded-xl transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                        />
                        {/* Tag */}
                        <div className="absolute top-5 left-5">
                          <span className="bg-[#F8F5F2] text-[#1A1414] text-[10px] tracking-[0.25em] uppercase px-4 py-2 font-semibold">
                            {p.tag}
                          </span>
                        </div>
                        {/* Year stamp */}
                        <div className="absolute bottom-5 right-5 bg-[#1A1414]/85 backdrop-blur text-[#F8F5F2] text-[10px] tracking-[0.25em] uppercase px-3 py-1.5">
                          Est. {p.year}
                        </div>
                      </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, dela3y: 0.2 }}
             className="lg:col-span-5 relative">
                      {/* Big index */}
                      <div
                        className="font-serif text-[#873953]/15 text-[8rem] leading-none absolute -top-6 -left-2 lg:-left-4 select-none pointer-events-none"
                        aria-hidden
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </div>

                      <div className="relative">
                        <div className="flex items-center text-[#873953] text-[11px] tracking-[0.25em] uppercase font-semibold mb-4">
                          <MapPin className="w-3.5 h-3.5 mr-2" />
                          {p.location}
                        </div>

                        <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1A1414] leading-[1.05] mb-6">
                          {p.name}
                          <span className="italic text-[#873953]">.</span>
                        </h3>

                        <p className="text-[#1A1414]/70 text-base md:text-lg font-light leading-relaxed mb-8 max-w-md">
                          {p.description}
                        </p>

                        <div className="flex items-center gap-6">
                         <Link to={p.link}>
                          <button className="inline-flex items-center text-[11px] tracking-[0.25em] uppercase text-[#1A1414] font-semibold border-b border-[#1A1414] pb-1 hover:text-[#873953] hover:border-[#873953] transition-colors group/btn">
                            View Details
                            <ArrowUpRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          </button></Link>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </section>

      {/* FEATURED PROJECT — dark accent block for contrast */}
      {/* <section className="relative bg-[#1A1414] text-[#F8F5F2] px-6 lg:px-10 py-24 lg:py-32 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 w-[500px] h-[500px] rounded-full bg-[#873953]/20 blur-3xl"
        />
        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9 }}
              className="w-full lg:w-[55%] relative"
            >
              <div className="aspect-[4/3] lg:aspect-[3/2] overflow-hidden">
                <img
                  src={iconicNestImg}
                  alt="Iconic Nest Phase 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#873953] text-white px-6 py-4 hidden md:block">
                <div className="text-[10px] tracking-[0.3em] uppercase opacity-70">
                  Phase
                </div>
                <div className="font-serif text-3xl">02</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="w-full lg:w-[45%]"
            >
              <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-[#873953] font-semibold mb-5">
                Featured Project
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">
                Iconic Nest
                <span className="italic text-[#873953]"> Phase 2</span>
              </h2>
              <p className="text-[#F8F5F2]/60 text-sm tracking-wide uppercase mb-8">
                Fedra–Pipli Road · SH-40 · Dholera SIR, Gujarat
              </p>

              <div className="text-[#F8F5F2]/75 font-light leading-relaxed space-y-4 mb-10 text-base md:text-lg">
                <p>
                  A premium plotted development inside India's first greenfield
                  smart city. Positioned for exponential growth — minutes from
                  the Dholera International Airport (Phase 1 completed Dec 2025)
                  and the Ahmedabad–Dholera Expressway.
                </p>
                <p>
                  71 meticulously planned residential plots from 155 to 300 sq
                  yards, across ~11,661 sq m of prime, title-clear land.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-10">
                {[
                  "RERA Compliant",
                  "Freehold",
                  "Title Clear",
                  "7/12 Verified",
                ].map((c) => (
                  <span
                    key={c}
                    className="flex items-center text-[10px] tracking-[0.2em] uppercase text-[#F8F5F2] bg-white/5 px-3 py-2 border border-white/10"
                  >
                    <Check className="w-3 h-3 mr-2 text-[#873953]" />
                    {c}
                  </span>
                ))}
              </div>

              <Button className="bg-[#873953] hover:bg-[#F8F5F2] hover:text-[#1A1414] text-white rounded-none px-8 py-6 text-[11px] tracking-[0.25em] uppercase h-auto group">
                Explore Project
                <ArrowUpRight className="w-4 h-4 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section
        id="consultation"
        className="relative px-6 lg:px-10 py-28 lg:py-36 bg-[#F1ECE6] overflow-hidden"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(135,57,83,0.18),transparent_60%)]"
        />
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="block text-[11px] tracking-[0.3em] uppercase text-[#873953] font-semibold mb-5">
              Private Advisory
            </span>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-[#1A1414] mb-6 leading-[1.05]">
              Looking for the right
              <br />
              <span className="italic text-[#873953]">
                investment opportunity?
              </span>
            </h2>
            <p className="text-[#1A1414]/65 text-base md:text-lg font-light mb-12 max-w-2xl mx-auto">
              Connect with our advisory team to explore exclusive pre-launch
              allocations and premium inventory across the JM Ventures
              portfolio.
            </p>
             <Link to="/contact">
            <button className="bg-[#1A1414] hover:bg-[#873953] text-white rounded-none px-10 py-7 text-[11px] tracking-[0.3em] uppercase h-auto group">
             <span className="flex">
               Get Consultation
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
               </span>
            </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Projects