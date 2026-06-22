import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

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
    icon: "🥊",
    title: "Rehabilitation",
    desc: "Pulling youth out of drug abuse and criminal activity through structured boxing training.",
  },
  {
    icon: "📚",
    title: "Education Support",
    desc: "Facilitating school re-enrollment, fee support, and academic mentorship for vulnerable youth.",
  },
  {
    icon: "💼",
    title: "Skills & Employment",
    desc: "Linking programme graduates to vocational training and real job opportunities.",
  },
  {
    icon: "🏅",
    title: "Discipline & Values",
    desc: "Using the ring to build resilience, respect, and positive character in every participant.",
  },
  {
    icon: "🌍",
    title: "Community Advocacy",
    desc: "Championing the inclusion of boxing in schools and policy-level recognition of sport as rehabilitation.",
  },
  {
    icon: "🤝",
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

export default function Home() {
  /* hero punch animation state */
  const [punched, setPunched] = useState(false);
  useEffect(() => {
    setTimeout(() => setPunched(true), 400);
  }, []);

  return (
    <div className="font-sans text-gray-900 bg-white overflow-x-hidden">
      <Navbar />

      {/* ═══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section
        id="home"
        className="relative min-h-screen flex items-center bg-white pt-16"
      >
        {/* diagonal red slab */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, #C41E3A 0%, #C41E3A 48%, transparent 48%)",
          }}
        />
        {/* gold accent line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-yellow-600" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 flex flex-col lg:flex-row items-center gap-12">
          {/* Left — text */}
          <div className="flex-1 text-left">
            <p
              className={`text-yellow-400 text-xs font-bold uppercase tracking-[0.25em] mb-4 transition-all duration-700 ${punched ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
              style={{ transitionDelay: "100ms" }}
            >
              Fight For A Better Future Initiative
            </p>
            <h1
              className={`text-white text-5xl sm:text-6xl lg:text-7xl font-black leading-none mb-6 transition-all duration-700 ${punched ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
              style={{ transitionDelay: "250ms" }}
            >
              FIGHT FOR
              <br />
              <span className="text-yellow-400">A BETTER</span>
              <br />
              FUTURE
            </h1>
            <p
              className={`text-white/80 text-lg max-w-md leading-relaxed mb-8 transition-all duration-700 ${punched ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
              style={{ transitionDelay: "400ms" }}
            >
              Using boxing as a tool to rehabilitate, educate, and empower
              vulnerable youth across informal settlements in Kenya.
            </p>
            <div
              className={`flex flex-wrap gap-3 transition-all duration-700 ${punched ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: "550ms" }}
            >
              <a
                href="#events"
                className="bg-yellow-500 text-black font-bold uppercase tracking-widest text-sm px-6 py-3 rounded hover:bg-yellow-400 transition-colors duration-200"
              >
                June 27 Event →
              </a>
              <a
                href="#donate"
                className="border-2 border-white text-white font-bold uppercase tracking-widest text-sm px-6 py-3 rounded hover:bg-white hover:text-red-700 transition-colors duration-200"
              >
                Donate Now
              </a>
            </div>
          </div>

          {/* Right — gloves graphic */}
          <div
            className={`flex-shrink-0 transition-all duration-1000 ${punched ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="w-56 h-56 sm:w-72 sm:h-72 bg-white/10 rounded-full border-4 border-yellow-500/40 flex items-center justify-center shadow-2xl">
              <span
                className="text-8xl sm:text-9xl select-none"
                role="img"
                aria-label="boxing glove"
              >
                🥊
              </span>
            </div>
          </div>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
          <div className="w-0.5 h-8 bg-gray-400 rounded" />
          <div className="w-2 h-2 rounded-full bg-gray-400" />
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
                      <svg
                        className="w-2.5 h-2.5 fill-white"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
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
            {objectives.map(({ icon, title, desc }, i) => (
              <FadeUp key={title} delay={i * 80}>
                <div className="group bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-red-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div className="text-4xl mb-4">{icon}</div>
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
            {/* vertical line */}
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
                  <div className="flex flex-col gap-2 my-6 text-white/80 text-sm">
                    <p>
                      📅 <strong className="text-white">27th June 2026</strong>
                    </p>
                    <p>
                      📍{" "}
                      <strong className="text-white">
                        Maasai Mall – Tumaini, Ongata Rongai
                      </strong>
                    </p>
                    <p>
                      🎯 <strong className="text-white">500+ youth</strong>{" "}
                      directly engaged
                    </p>
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
                        <span className="mt-0.5 text-yellow-500 font-bold">
                          ✓
                        </span>
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
          DONATE
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
            <div className="inline-block bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sm:p-12 text-left w-full max-w-sm mx-auto">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5 text-center">
                Donate via M-Pesa
              </p>
              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                    Paybill Number
                  </p>
                  <p className="text-4xl font-black tracking-widest text-black">
                    522533
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                    Account Number
                  </p>
                  <p className="text-4xl font-black tracking-widest text-black">
                    7868187
                  </p>
                </div>
              </div>
              <p className="text-gray-400 text-xs text-center leading-relaxed">
                Currently using Ongata Rongai Talent Boxing Club account during
                CBO registration. Official account details will be shared upon
                completion.
              </p>
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
            {[
              {
                icon: "💰",
                title: "Financial Support",
                desc: "Fund events, equipment, and operational costs.",
              },
              {
                icon: "🏫",
                title: "Education Institutions",
                desc: "Offer scholarships or free slots for programme youth.",
              },
              {
                icon: "🔧",
                title: "Skills Training",
                desc: "Provide vocational training opportunities to graduates.",
              },
              {
                icon: "💼",
                title: "Employers",
                desc: "Create employment pathways for programme beneficiaries.",
              },
              {
                icon: "📱",
                title: "Media & Content",
                desc: "Help document and amplify stories of transformation.",
              },
              {
                icon: "🥊",
                title: "Boxing Clubs",
                desc: "Collaborate on training, events, and talent development.",
              },
            ].map(({ icon, title, desc }, i) => (
              <FadeUp key={title} delay={i * 70}>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-yellow-500/50 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl mb-3">{icon}</div>
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
                className="bg-red-700 text-white font-bold uppercase tracking-widest text-sm px-8 py-4 rounded hover:bg-black transition-colors duration-200"
              >
                ✉️ Email Us
              </a>
              <a
                href="#donate"
                className="border-2 border-red-700 text-red-700 font-bold uppercase tracking-widest text-sm px-8 py-4 rounded hover:bg-red-700 hover:text-white transition-colors duration-200"
              >
                🥊 Donate Now
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-6">
              📍 Ongata Rongai, Kenya
            </p>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  );
}
