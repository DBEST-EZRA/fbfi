import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
  Dumbbell,
  BookOpen,
  Briefcase,
  Shield,
  Globe,
  Handshake,
  TrendingUp,
  DollarSign,
  School,
  Wrench,
  Users,
  Tv,
  Trophy,
  MapPin,
  Mail,
  Check,
  ChevronDown,
  Smartphone,
} from "lucide-react";

/* ── tiny hook: fires once when element enters viewport ── */
function useInView(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15, ...options },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

/* ── animated counter ── */
function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [ref, visible] = useInView();
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = Math.ceil(target / 60);
    const id = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(id);
      } else setCount(start);
    }, 24);
    return () => clearInterval(id);
  }, [visible, target]);
  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ── fade-up wrapper ── */
function FadeUp({ children, delay = 0, className = "" }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const objectives = [
  {
    Icon: Dumbbell,
    title: "Rehabilitation",
    desc: "Pulling youth out of drug abuse and criminal activity through structured boxing training.",
  },
  {
    Icon: BookOpen,
    title: "Education Support",
    desc: "Facilitating school re-enrollment, fee support, and academic mentorship for vulnerable youth.",
  },
  {
    Icon: Briefcase,
    title: "Skills & Employment",
    desc: "Linking programme graduates to vocational training and real job opportunities.",
  },
  {
    Icon: Shield,
    title: "Discipline & Values",
    desc: "Using the ring to build resilience, respect, and positive character in every participant.",
  },
  {
    Icon: Globe,
    title: "Community Advocacy",
    desc: "Championing the inclusion of boxing in schools and policy-level recognition of sport as rehabilitation.",
  },
  {
    Icon: Handshake,
    title: "Partnerships",
    desc: "Building bridges with institutions, sponsors, and media to scale impact across Kenya.",
  },
];

const timeline = [
  { year: "10 yrs", label: "Grassroots track record in Ongata Rongai" },
  {
    year: "2026",
    label: "Official launch — Youth Empowerment Boxing Exhibition, 27 June",
  },
  { year: "Year 1", label: "4 boxing events · 500+ youth directly engaged" },
  { year: "Future", label: "50,000 – 500,000 youth reached annually" },
];

const eventItems = [
  "Exhibition boxing bouts",
  "Educational & mentorship talks",
  "Youth sensitisation on drugs, crime & education",
  "School & training programme enrolments",
  "Direct school-fee financial support",
  "Incentive tokens for participating youth",
];

const partnerTypes = [
  {
    Icon: DollarSign,
    title: "Financial Support",
    desc: "Fund events, equipment, and operational costs.",
  },
  {
    Icon: School,
    title: "Education Institutions",
    desc: "Offer scholarships or free slots for programme youth.",
  },
  {
    Icon: Wrench,
    title: "Skills Training",
    desc: "Provide vocational training opportunities to graduates.",
  },
  {
    Icon: Users,
    title: "Employers",
    desc: "Create employment pathways for programme beneficiaries.",
  },
  {
    Icon: Tv,
    title: "Media & Content",
    desc: "Help document and amplify stories of transformation.",
  },
  {
    Icon: Trophy,
    title: "Boxing Clubs",
    desc: "Collaborate on training, events, and talent development.",
  },
];

/* ── Boxer SVG illustration ── */
function BoxerIllustration() {
  return (
    <svg
      viewBox="0 0 320 420"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-label="Boxer in fighting stance"
    >
      {/* Background ring glow */}
      <circle cx="160" cy="210" r="155" fill="rgba(196,30,58,0.08)" />
      <circle cx="160" cy="210" r="120" fill="rgba(196,30,58,0.06)" />

      {/* Body silhouette — fighter in stance */}
      {/* Head */}
      <ellipse cx="175" cy="72" rx="32" ry="36" fill="#1a1a1a" />
      {/* Neck */}
      <rect x="163" y="102" width="22" height="18" rx="4" fill="#1a1a1a" />

      {/* Torso */}
      <path
        d="M130 118 Q110 130 108 185 L118 220 L200 220 L215 185 Q218 135 195 118 Z"
        fill="#C41E3A"
      />
      {/* Shorts */}
      <path
        d="M118 220 L108 300 L148 300 L160 255 L172 300 L212 300 L200 220 Z"
        fill="#1a1a1a"
      />
      {/* Left leg */}
      <rect x="108" y="298" width="42" height="80" rx="10" fill="#1a1a1a" />
      {/* Right leg */}
      <rect x="168" y="298" width="42" height="72" rx="10" fill="#1a1a1a" />
      {/* Shoes */}
      <ellipse cx="129" cy="378" rx="24" ry="10" fill="#333" />
      <ellipse cx="189" cy="370" rx="24" ry="10" fill="#333" />

      {/* Left arm — extended forward (jab) */}
      <path
        d="M130 125 Q80 140 55 155 Q48 160 50 168 Q52 176 60 174 Q90 162 130 148 Z"
        fill="#1a1a1a"
      />
      {/* Left glove */}
      <ellipse cx="48" cy="166" rx="22" ry="17" fill="#C41E3A" />
      <ellipse cx="48" cy="156" rx="14" ry="10" fill="#a01830" />

      {/* Right arm — guard up */}
      <path
        d="M195 125 Q225 110 240 100 Q250 94 255 100 Q260 108 254 115 Q240 122 215 140 Z"
        fill="#1a1a1a"
      />
      {/* Right glove */}
      <ellipse cx="257" cy="106" rx="22" ry="17" fill="#EAB308" />
      <ellipse cx="257" cy="96" rx="14" ry="10" fill="#ca8a04" />

      {/* Shorts stripe */}
      <rect
        x="108"
        y="220"
        width="92"
        height="8"
        fill="#C41E3A"
        opacity="0.6"
      />

      {/* Head guard / headgear suggestion */}
      <path
        d="M148 44 Q175 30 202 44 Q218 62 210 90 Q200 75 175 72 Q152 72 140 90 Q132 62 148 44 Z"
        fill="#333"
        opacity="0.5"
      />

      {/* Motion lines — jab */}
      <line
        x1="30"
        y1="158"
        x2="10"
        y2="152"
        stroke="#C41E3A"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.7"
      />
      <line
        x1="32"
        y1="168"
        x2="8"
        y2="168"
        stroke="#C41E3A"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
      <line
        x1="30"
        y1="178"
        x2="12"
        y2="184"
        stroke="#C41E3A"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.3"
      />

      {/* Gold accent ring outline */}
      <circle
        cx="160"
        cy="210"
        r="155"
        fill="none"
        stroke="#EAB308"
        strokeWidth="1.5"
        strokeDasharray="8 12"
        opacity="0.3"
      />
    </svg>
  );
}

export default function Home() {
  const [punched, setPunched] = useState(false);
  useEffect(() => {
    setTimeout(() => setPunched(true), 400);
  }, []);

  return (
    <div className="font-sans text-gray-900 bg-white overflow-x-hidden">
      <Navbar />

      {/* ═══════════════════════════════════════
          HERO — fully responsive two-column
      ══════════════════════════════════════ */}
      <section id="home" className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=2000&q=80"
            alt="Young boxer training"
            className="w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <p className="text-yellow-400 font-semibold uppercase tracking-[0.2em] mb-4">
              Fight For A Better Future Initiative
            </p>

            <h1 className="text-white text-5xl md:text-7xl font-black leading-tight mb-6">
              Empowering Youth
              <br />
              Through Boxing
            </h1>

            <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
              Using boxing as a tool to rehabilitate, educate, and empower
              vulnerable youth across informal settlements in Kenya.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#events"
                className="bg-[#C41E3A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition"
              >
                June 27 Event
              </a>

              <a
                href="#donate"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition"
              >
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════ */}
      <section className="bg-black py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { value: 10, suffix: " yrs", label: "Grassroots Experience" },
            { value: 500, suffix: "+", label: "Youth to Engage (June event)" },
            { value: 50000, suffix: "+", label: "Annual Reach Goal" },
            { value: 4, suffix: "", label: "Events Per Year" },
          ].map(({ value, suffix, label }) => (
            <div key={label}>
              <p className="text-yellow-500 text-4xl font-black">
                <Counter target={value} suffix={suffix} />
              </p>
              <p className="text-gray-400 text-xs uppercase tracking-widest mt-1">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ABOUT
      ══════════════════════════════════════ */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <p className="text-red-700 text-xs font-bold uppercase tracking-[0.2em] mb-3">
                About FBFI
              </p>
              <h2 className="text-4xl sm:text-5xl font-black leading-tight mb-6">
                Boxing as a Tool for{" "}
                <span className="text-red-700">Social Change</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Across informal settlements there is a growing crisis — youth
                unemployment, school dropouts, drug abuse, and rising crime. For{" "}
                <strong>10 years</strong> we have worked at grassroots level
                alongside Ongata Rongai Talent Boxing Club to witness something
                remarkable: the ring transforms people.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Young people once involved in criminal gangs have become
                disciplined athletes. Some returned to school, others competed
                nationally, others found employment. FBFI exists to
                institutionalise and scale what we have already proven works.
              </p>
              <div className="flex flex-col gap-2">
                {[
                  "Returned to school through collective fee support",
                  "Competed & succeeded in national amateur boxing",
                  "Acquired vocational skills — including driving",
                  "Secured local employment opportunities",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1 w-4 h-4 rounded-full bg-red-700 flex items-center justify-center shrink-0">
                      <Check
                        className="w-2.5 h-2.5 text-white"
                        strokeWidth={3}
                      />
                    </span>
                    <p className="text-gray-700 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={150}>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white border-l-4 border-red-700 rounded-lg p-6 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-widest text-red-700 mb-2">
                    Vision
                  </p>
                  <p className="text-gray-800 font-medium leading-relaxed">
                    To build a generation of disciplined, empowered, educated,
                    and self-reliant youth — free from drug abuse and crime
                    through the transformative power of boxing and mentorship.
                  </p>
                </div>
                <div className="bg-white border-l-4 border-yellow-500 rounded-lg p-6 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-widest text-yellow-600 mb-2">
                    Mission
                  </p>
                  <p className="text-gray-800 font-medium leading-relaxed">
                    To use boxing to engage, mentor, and empower vulnerable
                    youth by providing training, life skills, education support,
                    mentorship, and pathways to personal growth and employment.
                  </p>
                </div>
                <div className="bg-black rounded-lg p-6 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-widest text-yellow-500 mb-2">
                    Motto
                  </p>
                  <p className="text-white text-2xl font-black italic">
                    "Fight for a Better Future"
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PROGRAMS / OBJECTIVES
      ══════════════════════════════════════ */}
      <section id="programs" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-14">
            <p className="text-red-700 text-xs font-bold uppercase tracking-[0.2em] mb-3">
              What We Do
            </p>
            <h2 className="text-4xl sm:text-5xl font-black">
              Our Core Programs
            </h2>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map(({ Icon, title, desc }, i) => (
              <FadeUp key={title} delay={i * 80}>
                <div className="group bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-red-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-red-700/10 flex items-center justify-center mb-4 group-hover:bg-red-700 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-red-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-black text-lg mb-2 group-hover:text-red-700 transition-colors">
                    {title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          IMPACT / TIMELINE
      ══════════════════════════════════════ */}
      <section id="impact" className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-14">
            <p className="text-yellow-500 text-xs font-bold uppercase tracking-[0.2em] mb-3">
              Our Journey
            </p>
            <h2 className="text-4xl sm:text-5xl font-black">
              From Streets to Stages
            </h2>
          </FadeUp>
          <div className="relative">
            <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-0.5 bg-yellow-600/30" />
            <div className="space-y-10">
              {timeline.map(({ year, label }, i) => (
                <FadeUp key={year} delay={i * 100}>
                  <div
                    className={`flex items-center gap-6 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} flex-row`}
                  >
                    <div className="w-12 shrink-0" />
                    <div className="relative flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center z-10 shrink-0">
                        <div className="w-3 h-3 rounded-full bg-black" />
                      </div>
                    </div>
                    <div
                      className={`bg-white/5 border border-white/10 rounded-xl px-6 py-4 flex-1 max-w-sm ${i % 2 === 0 ? "lg:text-left" : "lg:text-right"}`}
                    >
                      <p className="text-yellow-500 text-xl font-black mb-1">
                        {year}
                      </p>
                      <p className="text-gray-300 text-sm">{label}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          EVENTS
      ══════════════════════════════════════ */}
      <section id="events" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-14">
            <p className="text-red-700 text-xs font-bold uppercase tracking-[0.2em] mb-3">
              Upcoming Event
            </p>
            <h2 className="text-4xl sm:text-5xl font-black">
              Flagship Launch Event
            </h2>
          </FadeUp>

          <FadeUp>
            <div className="bg-gradient-to-br from-red-700 to-red-900 rounded-2xl overflow-hidden shadow-2xl">
              <div className="grid lg:grid-cols-2">
                {/* Info */}
                <div className="p-8 sm:p-12 text-white">
                  <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-4">
                    Official Launch
                  </p>
                  <h3 className="text-3xl sm:text-4xl font-black mb-2 leading-tight">
                    Youth Empowerment
                    <br />
                    Boxing Exhibition
                  </h3>
                  <div className="flex flex-col gap-3 my-6 text-white/80 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                        <TrendingUp className="w-3 h-3 text-yellow-400" />
                      </div>
                      <p>
                        <strong className="text-white">27th June 2026</strong>
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                        <MapPin className="w-3 h-3 text-yellow-400" />
                      </div>
                      <p>
                        <strong className="text-white">
                          Maasai Mall – Tumaini, Ongata Rongai
                        </strong>
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                        <Users className="w-3 h-3 text-yellow-400" />
                      </div>
                      <p>
                        <strong className="text-white">500+ youth</strong>{" "}
                        directly engaged
                      </p>
                    </div>
                  </div>
                  <a
                    href="#donate"
                    className="inline-block bg-yellow-500 text-black font-bold uppercase tracking-widest text-sm px-6 py-3 rounded hover:bg-yellow-400 transition-colors duration-200"
                  >
                    Support This Event
                  </a>
                </div>

                {/* Programme */}
                <div className="bg-black/30 p-8 sm:p-12">
                  <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-5">
                    Event Programme
                  </p>
                  <ul className="space-y-3">
                    {eventItems.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-white/90 text-sm"
                      >
                        <Check
                          className="w-4 h-4 mt-0.5 text-yellow-500 shrink-0"
                          strokeWidth={3}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 border-t border-white/10 pt-6">
                    <p className="text-white/60 text-xs uppercase tracking-widest mb-1">
                      Event Budget
                    </p>
                    <p className="text-yellow-400 text-3xl font-black">
                      Kshs 170,000
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          DONATE — M-Pesa green card
      ══════════════════════════════════════ */}
      <section id="donate" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <p className="text-red-700 text-xs font-bold uppercase tracking-[0.2em] mb-3">
              Make a Difference
            </p>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Support the Movement
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto mb-10">
              Every shilling you contribute goes directly toward boxing events,
              education support, and mentorship for vulnerable youth in Ongata
              Rongai.
            </p>
          </FadeUp>
          <FadeUp delay={100}>
            <div className="inline-block w-full max-w-sm mx-auto">
              {/* M-Pesa card — green themed */}
              <div
                className="rounded-2xl shadow-xl overflow-hidden text-left"
                style={{
                  background:
                    "linear-gradient(135deg, #00A651 0%, #007a3d 100%)",
                }}
              >
                {/* Card header */}
                <div className="px-8 pt-7 pb-4 flex items-center justify-between">
                  <div>
                    <p className="text-white/70 text-[10px] font-bold uppercase tracking-widest">
                      Pay via
                    </p>
                    <p className="text-white text-2xl font-black tracking-tight leading-none">
                      M-PESA
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Divider */}
                <div className="mx-8 h-px bg-white/20 mb-5" />

                {/* Fields */}
                <div className="px-8 pb-8 space-y-4">
                  <div className="bg-white/15 rounded-xl p-4">
                    <p className="text-white/70 text-[10px] font-bold uppercase tracking-wider mb-1">
                      Paybill Number
                    </p>
                    <p className="text-white text-3xl font-black tracking-widest">
                      522533
                    </p>
                  </div>
                  <div className="bg-white/15 rounded-xl p-4">
                    <p className="text-white/70 text-[10px] font-bold uppercase tracking-wider mb-1">
                      Account Number
                    </p>
                    <p className="text-white text-3xl font-black tracking-widest">
                      7868187
                    </p>
                  </div>
                  <p className="text-white/60 text-xs text-center leading-relaxed pt-1">
                    Currently using Ongata Rongai Talent Boxing Club account
                    during CBO registration. Official account details will be
                    shared upon completion.
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PARTNERS / CALL TO ACTION
      ══════════════════════════════════════ */}
      <section id="partners" className="py-24 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-yellow-500 text-xs font-bold uppercase tracking-[0.2em] mb-3">
              Strategic Partners
            </p>
            <h2 className="text-4xl sm:text-5xl font-black mb-6">
              We're Seeking Partners
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              To scale this movement, we are actively looking for individuals,
              organisations, and institutions who share our vision. Here's how
              you can plug in:
            </p>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left mb-12">
            {partnerTypes.map(({ Icon, title, desc }, i) => (
              <FadeUp key={title} delay={i * 70}>
                <div className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:border-yellow-500/50 hover:bg-white/10 transition-all duration-300">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center mb-3 group-hover:bg-yellow-500 transition-colors duration-300">
                    <Icon className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors duration-300" />
                  </div>
                  <h4 className="font-bold text-white mb-1">{title}</h4>
                  <p className="text-gray-400 text-sm">{desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={200}>
            <a
              href="#contact"
              className="inline-block bg-yellow-500 text-black font-bold uppercase tracking-widest text-sm px-8 py-4 rounded hover:bg-yellow-400 transition-colors duration-200"
            >
              Get In Touch →
            </a>
          </FadeUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CONTACT
      ══════════════════════════════════════ */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <p className="text-red-700 text-xs font-bold uppercase tracking-[0.2em] mb-3">
              Get In Touch
            </p>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Join the Movement
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto mb-8">
              Whether you want to donate, partner, volunteer, or simply learn
              more — we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@fbfi.org"
                className="inline-flex items-center justify-center gap-2 bg-red-700 text-white font-bold uppercase tracking-widest text-sm px-8 py-4 rounded hover:bg-black transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                Email Us
              </a>
              <a
                href="#donate"
                className="inline-flex items-center justify-center gap-2 border-2 border-red-700 text-red-700 font-bold uppercase tracking-widest text-sm px-8 py-4 rounded hover:bg-red-700 hover:text-white transition-colors duration-200"
              >
                <Dumbbell className="w-4 h-4" />
                Donate Now
              </a>
            </div>
            <div className="flex items-center justify-center gap-1.5 text-gray-400 text-sm mt-6">
              <MapPin className="w-4 h-4" />
              <span>Ongata Rongai, Kenya</span>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  );
}
