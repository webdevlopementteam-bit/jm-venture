import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Briefcase,
  Building,
  Calendar,
  Check,
  Clock,
  Compass,
  FileSearch,
  KeyRound,
  LineChart,
  MapPin,
  Minus,
  Sparkles,
} from "lucide-react";
import servicebanner from "../assets/service/servicebanner.jpg";
import sector1 from "../assets/service/sector1.jpg";
import sector2 from "../assets/service/sector2.jpg";
import sector3 from "../assets/service/sector3.jpg";
import sector4 from "../assets/service/sector4.jpg";
import sector5 from "../assets/service/sector5.jpg";
import sector6 from "../assets/service/sector6.jpg";
import { Link } from "../router";

const stats = [
  { value: "₹2,400Cr", label: "Assets Advised" },
  { value: "6", label: "Service Pillars" },
  { value: "18%", label: "Avg. IRR Delivered" },
];

const pillars = [
  {
    icon: Compass,
    title: "Acquisition Sourcing",
    desc: "Off-market deal flow, pre-launch allocations and bulk inventory deals across NCR, Yamuna Expressway and Dholera SIR.",
    bullets: ["Pre-launch access", "Bulk negotiation", "Vendor diligence"],
  },
  {
    icon: FileSearch,
    title: "Due Diligence",
    desc: "Title verification, RERA compliance, encumbrance checks and developer financial health assessment before every deployment.",
    bullets: [
      "Legal title audit",
      "RERA & approval review",
      "Developer credit check",
    ],
  },
  {
    icon: Briefcase,
    title: "Portfolio Structuring",
    desc: "Asset allocation across residential, commercial, plotted and SCO formats — calibrated to your risk appetite and horizon.",
    bullets: [
      "Risk-weighted mix",
      "Tax-efficient holding",
      "Co-investment vehicles",
    ],
  },
  {
    icon: LineChart,
    title: "Asset Management",
    desc: "Active stewardship through construction milestones, leasing, valuation tracking and quarterly performance reporting.",
    bullets: ["Milestone tracking", "Leasing support", "Quarterly NAV updates"],
  },
  {
    icon: Building,
    title: "Commercial Leasing",
    desc: "Tenant identification, lease structuring and yield optimisation for grade-A office, retail and SCO assets.",
    bullets: ["Tenant sourcing", "Lease negotiation", "Yield enhancement"],
  },
  {
    icon: KeyRound,
    title: "Exit Advisory",
    desc: "Resale strategy, secondary-market placement and institutional block exits structured for maximum capital recovery.",
    bullets: [
      "Pricing strategy",
      "Block sale execution",
      "Reinvestment planning",
    ],
  },
];

const steps = [
  {
    num: "01",
    title: "Discovery Call",
    desc: "A 45-minute conversation to understand your capital, horizon and risk preferences.",
  },
  {
    num: "02",
    title: "Strategy Memo",
    desc: "A written investment thesis tailored to your goals, with target corridors and asset classes.",
  },
  {
    num: "03",
    title: "Opportunity Curation",
    desc: "A shortlist of 3–5 vetted opportunities with comparable analysis and projected IRR.",
  },
  {
    num: "04",
    title: "Deep Diligence",
    desc: "Full legal, financial and on-ground verification before a single rupee is committed.",
  },
  {
    num: "05",
    title: "Deal Closure",
    desc: "Negotiation, paperwork and registration handled end-to-end by our in-house team.",
  },
  {
    num: "06",
    title: "Active Stewardship",
    desc: "Quarterly performance reviews, milestone tracking and exit planning over the holding period.",
  },
];

const rows = [
  {
    service: "Sourcing & Acquisition",
    residential: true,
    commercial: true,
    plots: true,
    sco: true,
    reit: false,
  },
  {
    service: "Legal Due Diligence",
    residential: true,
    commercial: true,
    plots: true,
    sco: true,
    reit: true,
  },
  {
    service: "Construction Tracking",
    residential: true,
    commercial: true,
    plots: false,
    sco: true,
    reit: false,
  },
  {
    service: "Leasing & Tenanting",
    residential: false,
    commercial: true,
    plots: false,
    sco: true,
    reit: true,
  },
  {
    service: "Resale & Exit",
    residential: true,
    commercial: true,
    plots: true,
    sco: true,
    reit: true,
  },
  {
    service: "Co-Investment Pooling",
    residential: false,
    commercial: true,
    plots: true,
    sco: true,
    reit: true,
  },
];

const cols = ["Residential", "Commercial", "Plots", "SCO", "REIT / AIF"];
const keys = ["residential", "commercial", "plots", "sco", "reit"];

const sectors = [
  {
    name: "Luxury Residential",
    detail:
      "Branded residences, premium apartments and villas in established and emerging premium pockets.",
    img: sector1,
  },
  {
    name: "Grade-A Commercial",
    detail:
      "IT parks, business parks and pre-leased office assets generating institutional-quality cash flows.",
    img: sector2,
  },
  {
    name: "Retail & SCO",
    detail:
      "High-street retail, shop-cum-office formats and food & beverage destinations in dense catchments.",
    img: sector3,
  },
  {
    name: "Land & Plotted",
    detail:
      "Authority-released plots, township plots and farmhouse land in pre-notified growth corridors.",
    img: sector4,
  },
  {
    name: "Warehousing & Logistics",
    detail:
      "Grade-A warehousing parks adjacent to logistics corridors and DMIC industrial nodes.",
    img: sector5,
  },
  {
    name: "Hospitality",
    detail:
      "Selective branded hotel keys and serviced-apartment inventory in tourism and business hubs.",
    img: sector6,
  },
];

const Services = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Advisory",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const templateParams = {
        form_type: "Consultation Form",
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        interest: form.interest,
        message: form.notes,
      };

      await emailjs.send(
        "service_et2ozej",
        "template_xqwjqe7",
        templateParams,
        "CqaPnjLV5Q0q6hcqK",
      );

      setSubmitted(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        interest: "Advisory",
        notes: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    }
  };
  return (
    <>
      {/* hero section */}
      <section className="relative min-h-[100dvh] flex items-center bg-foreground text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={servicebanner}
            alt="Luxury skyline"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/85 to-foreground/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-transparent to-foreground/40" />
        </div>

        <div
          className="absolute inset-0 z-10 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* <div className="hidden lg:block absolute inset-0 z-10 pointer-events-none">
        {floatingTags.map((tag) => (
          <motion.div
            key={tag.label}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: tag.delay, ease: [0.22, 1, 0.36, 1] }}
            className="absolute"
            style={{ top: tag.top, left: tag.left, right: tag.right, bottom: tag.bottom }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: tag.delay }}
              className="bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 text-sm tracking-wide text-white/90"
            >
              {tag.label}
            </motion.div>
          </motion.div>
        ))}
      </div> */}

        <div className="container relative z-20 mx-auto px-6 md:px-12 pt-32 pb-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-primary/20 border border-primary/40 backdrop-blur-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs tracking-[0.25em] uppercase text-white/90">
                  What We Do
                </span>
              </motion.div>

              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] mb-8">
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="block"
                >
                  End-to-end
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.35 }}
                  className="block"
                >
                  real estate{" "}
                  <span className="italic text-primary">advisory.</span>
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className="block text-white/50 text-3xl md:text-4xl lg:text-5xl mt-4 font-sans font-light tracking-tight"
                >
                  Built around your capital.
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.65 }}
                className="text-base md:text-lg text-white/70 max-w-xl leading-relaxed mb-10"
              >
                From sourcing pre-launch inventory to structuring
                institutional-grade exits — a complete service stack across
                India's fastest-growing real estate corridors.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/contact"
                  className="bg-primary text-white px-8 py-4 text-sm font-medium tracking-wide hover:bg-deep-burgundy transition-colors"
                >
                  Book a Consultation
                </Link>
                <a
                  href="#pillars"
                  className="border border-white/30 text-white px-8 py-4 text-sm font-medium tracking-wide hover:bg-white hover:text-foreground transition-colors"
                >
                  Explore Services
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="lg:col-span-5"
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-primary" />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-primary" />

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-10">
                  <div className="text-xs tracking-[0.3em] uppercase text-primary mb-6">
                    By the Numbers
                  </div>
                  <div className="space-y-6">
                    {stats.map((stat, i) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 + i * 0.15 }}
                        className="border-b border-white/10 pb-5 last:border-b-0 last:pb-0"
                      >
                        <div className="font-serif text-4xl md:text-5xl text-white mb-1">
                          {stat.value}
                        </div>
                        <div className="text-xs uppercase tracking-wider text-white/60">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.a
          href="#pillars"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors"
        >
          <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.a>
      </section>

      {/* pillars */}
      <section id="pillars" className="py-12 md:py-20 bg-background md:px-28">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mb-16"
          >
            <span className="text-sm tracking-[0.3em] uppercase text-primary mb-4 block">
              Six Pillars
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
              A complete service stack — one accountable partner.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-background p-8 md:p-10 hover:bg-primary/5 transition-colors group"
              >
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <p.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-3">
                  {p.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  {p.desc}
                </p>
                <ul className="space-y-2">
                  {p.bullets.map((b) => (
                    <li
                      key={b}
                      className="text-sm text-foreground/70 flex items-center"
                    >
                      <span className="w-4 h-px bg-primary mr-3" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* process timeline */}
      <section className="py-12 md:py-20 md:px-28">
        <div className="container mx-auto px-6 md:px-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-20"
          >
            <span className="text-sm tracking-[0.3em] uppercase text-primary mb-4 block text-center">
              How We Work
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight text-center">
              A six-stage engagement, designed for clarity at every step.
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 md:-translate-x-1/2" />

            <div className="space-y-16">
              {steps.map((s, i) => (
                <motion.div
                  key={s.num}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex items-start ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 mt-3 ring-4 ring-background" />

                  <div
                    className={`pl-20 md:pl-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}
                  >
                    <span className="font-serif text-5xl md:text-6xl text-primary/30 block mb-2">
                      {s.num}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3">
                      {s.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capability matrix */}
      <section className="py-12 md:py-20 bg-background md:px-28">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mb-12"
          >
            <span className="text-sm tracking-[0.3em] uppercase text-primary mb-4 block">
              Capability Matrix
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
              Every service, mapped against every asset class.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-x-auto border border-border"
          >
            <table className="w-full min-w-[720px]">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left p-5 font-medium tracking-wide">
                    Service
                  </th>
                  {cols.map((c) => (
                    <th
                      key={c}
                      className="p-5 font-medium tracking-wide text-center"
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr
                    key={r.service}
                    className={i % 2 === 0 ? "bg-secondary/5" : "bg-background"}
                  >
                    <td className="p-5 font-medium text-foreground">
                      {r.service}
                    </td>
                    {keys.map((k) => (
                      <td key={k} className="p-5 text-center">
                        {r[k] ? (
                          <Check
                            className="w-5 h-5 text-primary mx-auto"
                            strokeWidth={2.5}
                          />
                        ) : (
                          <Minus className="w-5 h-5 text-muted-foreground/40 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Sector Focus */}
      <section className="py-12 md:py-20 md:px-28">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mb-16"
          >
            <span className="text-sm tracking-[0.3em] uppercase text-primary mb-4 block">
              Sector Focus
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
              Specialised across six asset classes.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group relative overflow-hidden cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">
                    {s.name}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500">
                    {s.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Consultation */}
      <section className="py-12 md:py-20 bg-foreground text-white md:px-28">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-sm tracking-[0.3em] uppercase text-white/60 mb-4 block">
                Book a Consultation
              </span>
              <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">
                45 minutes that could reshape your portfolio.
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-10">
                No obligation, no pitch deck. Just a focused conversation about
                your capital, your goals and where India's real estate cycle is
                headed next.
              </p>

              <div className="space-y-5 border-t border-white/10 pt-8">
                <div className="flex items-start">
                  <Calendar className="w-5 h-5 text-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Available windows</div>
                    <div className="text-sm text-white/60">
                      Monday to Saturday, 10:00 – 19:00 IST
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Duration</div>
                    <div className="text-sm text-white/60">
                      45 minutes — virtual or in-person
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <div className="font-medium">In-person locations</div>
                    <div className="text-sm text-white/60">
                      Noida · Gurugram · Greater Noida West
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="bg-white text-foreground p-8 md:p-10"
            >
              {submitted ? (
                <div className="py-12 text-center">
                  <h3 className="font-serif text-3xl text-primary mb-3">
                    Request received.
                  </h3>
                  <p className="text-muted-foreground">
                    A relationship manager will reach out within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-serif text-2xl text-foreground mb-6">
                    Request a slot
                  </h3>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1">
                      Full name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="w-full border-b border-border bg-transparent py-2 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        title="Please enter a valid email address"
                        placeholder="example@gmail.com"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className="w-full border-b border-border bg-transparent py-2 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        title="Please enter a valid 10-digit phone number"
                        placeholder="9876543210"
                        value={form.phone}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            phone: e.target.value.replace(/\D/g, ""),
                          })
                        }
                        maxLength={10}
                        className="w-full border-b border-border bg-transparent py-2 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                      Engagement interest
                    </label>
                    <select
                      value={form.interest}
                      onChange={(e) =>
                        setForm({ ...form, interest: e.target.value })
                      }
                      className="w-full border-b border-border bg-transparent py-2 focus:outline-none focus:border-primary transition-colors"
                    >
                      <option>Advisory</option>
                      <option>Managed</option>
                      <option>Bespoke</option>
                      <option>Just exploring</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1">
                      What's on your mind
                    </label>
                    <textarea
                      rows={2}
                      value={form.notes}
                      placeholder="Your Message"
                      onChange={(e) =>
                        setForm({ ...form, notes: e.target.value })
                      }
                      className="w-full border-b border-border bg-transparent py-2 focus:outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-4 inline-flex items-center bg-primary text-white px-8 py-4 text-sm font-medium tracking-wide hover:bg-deep-burgundy transition-colors group"
                  >
                    Request Consultation
                    <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
