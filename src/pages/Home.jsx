import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AnimatedCounter } from '../components/AnimatedCounter.jsx'
import heroBg from '../assets/website background.png'
import customerApp from '../assets/customer app.jpeg'
import driverApp from '../assets/Driver app .jpeg'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
}

const heroFeatures = [
  {
    label: 'Quick Booking',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M3 7h11v8H3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M14 10h4l3 3v2h-7z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="7" cy="17" r="2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17" cy="17" r="2" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    label: 'Live Tracking',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    label: 'Safe & Reliable',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M12 3 5 6v6c0 4.4 3 7.6 7 9 4-1.4 7-4.6 7-9V6l-7-3Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

const steps = [
  {
    title: 'Set pickup & drop',
    body: 'Enter your route in seconds and pick the right tempo or truck for the load.',
  },
  {
    title: 'Get matched instantly',
    body: 'A verified Carryoo driver nearby accepts and heads straight to your pickup point.',
  },
  {
    title: 'Track till delivery',
    body: 'Follow your shipment live on the map with OTP-secured handover at the drop.',
  },
]

const safety = [
  {
    title: 'Verified drivers',
    body: 'Every partner is KYC-checked with documents verified before their first trip.',
  },
  {
    title: 'OTP-secured handover',
    body: 'Goods are released only after a one-time code confirms the right recipient.',
  },
  {
    title: 'Live trip sharing',
    body: 'Share your live route with family or your team so someone is always watching.',
  },
  {
    title: '24/7 support',
    body: 'Real humans on call through every mile — from booking to final offload.',
  },
]

function StoreBadges({ className = '' }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href="#download"
        className="flex items-center gap-3 rounded-xl bg-black px-4 py-2.5 text-white shadow-lg shadow-black/20 transition hover:brightness-125"
      >
        <svg viewBox="0 0 512 512" className="h-7 w-7" aria-hidden="true">
          <path fill="#00d4ff" d="M47 24 295 256 47 488c-9 5-22-1-22-15V39c0-14 13-20 22-15Z" />
          <path fill="#00f076" d="M47 24c4-2 9-2 14 1l253 145-66 62L47 24Z" />
          <path fill="#ff3a44" d="M248 294l66 62L61 487c-5 3-10 3-14 1l201-194Z" />
          <path fill="#ffce00" d="M380 207l60 35c20 11 20 17 0 28l-60 34-70-65 70-32Z" />
        </svg>
        <span className="text-left leading-tight">
          <span className="block text-[10px] uppercase tracking-wide text-white/70">Get it on</span>
          <span className="block text-base font-semibold">Google Play</span>
        </span>
      </a>
      <a
        href="#download"
        className="flex items-center gap-3 rounded-xl bg-black px-4 py-2.5 text-white shadow-lg shadow-black/20 transition hover:brightness-125"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
          <path d="M16.4 12.9c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9-.7 0-1.8-.8-3-.8-1.5 0-2.9.9-3.7 2.3-1.6 2.7-.4 6.8 1.1 9 .7 1.1 1.6 2.3 2.8 2.2 1.1 0 1.5-.7 2.9-.7 1.3 0 1.7.7 2.9.7 1.2 0 2-1.1 2.7-2.1.9-1.3 1.2-2.5 1.3-2.6-.1 0-2.4-.9-2.4-3.7ZM14.1 5.8c.6-.8 1-1.8.9-2.9-.9 0-2 .6-2.6 1.3-.6.7-1.1 1.7-1 2.7 1 .1 2-.4 2.7-1.1Z" />
        </svg>
        <span className="text-left leading-tight">
          <span className="block text-[10px] uppercase tracking-wide text-white/70">Download on the</span>
          <span className="block text-base font-semibold">App Store</span>
        </span>
      </a>
    </div>
  )
}

export function Home() {
  return (
    <div className="bg-slate-50">
      {/* ---------------- HERO ---------------- */}
      <section className="relative isolate overflow-hidden bg-[#0a45c4]">
        {/* Background artwork ends at the vertical middle of the app cards */}
        <div className="relative flex min-h-[calc(82vh-5rem)] items-start pt-24 sm:pt-28">
          <img
            src={heroBg}
            alt=""
            className="absolute inset-0 h-full w-full object-contain object-right-bottom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a45c4] via-[#0a45c4]/85 to-transparent md:via-[#0a45c4]/70" />

          <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-8">
            <div className="max-w-2xl">
            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.5 }}
              className="font-display text-4xl font-extrabold leading-[1.04] text-white sm:text-5xl lg:text-6xl"
            >
              Delivering Trust,
              <br />
              <span className="text-cyan-300">Every Mile.</span>
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mt-4 max-w-md text-base leading-relaxed text-blue-50/90"
            >
              Book trucks & tempos in minutes. Track live. Deliver with confidence.
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ delay: 0.18, duration: 0.5 }}
              className="mt-6 flex flex-wrap gap-6"
            >
              {heroFeatures.map((f) => (
                <div key={f.label} className="flex flex-col items-center gap-1.5 text-center">
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur">
                    {f.icon}
                  </span>
                  <span className="text-xs font-semibold text-blue-50">{f.label}</span>
                </div>
              ))}
            </motion.div>

              <motion.div {...fadeUp} transition={{ delay: 0.26, duration: 0.5 }}>
                <StoreBadges className="mt-6" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ----- App cards straddling the blue/white boundary (half on each) ----- */}
      <div className="relative z-10 mx-auto -mt-12 max-w-7xl px-4 pb-12 sm:px-8">
        <div className="flex flex-col gap-5 md:flex-row">
          <AppCard
            to="/book"
            icon={customerApp}
            title="Carryoo"
            role="For Customers"
            body="Book vehicles instantly for all your delivery needs."
            bg="bg-slate-900/60 backdrop-blur-md border border-white/10"
            roleColor="text-white"
            bodyColor="text-slate-300"
          />
          <AppCard
            to="/contact"
            icon={driverApp}
            title="Carryoo Driver"
            role="For Drivers"
            body="Earn more. Deliver more. Grow with Carryoo."
            bg="bg-slate-900/60 backdrop-blur-md border border-white/10"
            roleColor="text-white"
            bodyColor="text-slate-300"
          />
        </div>
      </div>

      {/* ---------------- SERVICES / HOW IT WORKS ---------------- */}
      <section id="services" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-8">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">How it works</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold text-slate-900">
            Move anything in three taps
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-600">
            From a single parcel to a full warehouse run — Carryoo keeps every delivery simple,
            transparent, and trackable.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="relative rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-600 font-display text-lg font-bold text-white shadow-lg shadow-blue-500/30">
                {i + 1}
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- STATS ---------------- */}
      <section className="bg-[#0a45c4]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:grid-cols-3 sm:px-8">
          {[
            { label: 'Deliveries completed', value: 128000, suffix: '+' },
            { label: 'Cities served', value: 24, suffix: '' },
            { label: 'On-time rate', value: 98, suffix: '%' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-5xl font-extrabold text-white">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-blue-100/80">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- SAFETY ---------------- */}
      <section id="safety" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Safety first</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold text-slate-900">
              Every mile, backed by trust
            </h2>
            <p className="mt-4 max-w-md text-slate-600">
              Safety is built into Carryoo from the ground up — verified partners, secure handovers,
              and live visibility so your goods are always in good hands.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-700"
            >
              Learn about our safety →
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {safety.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="font-display text-lg font-bold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- DOWNLOAD CTA ---------------- */}
      <section id="download" className="mx-auto max-w-7xl px-4 pb-24 sm:px-8">
        <div className="overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0b4fe0] to-[#0a2f8f] px-8 py-14 text-center shadow-2xl shadow-blue-900/20 sm:px-14">
          <h2 className="font-display text-4xl font-extrabold text-white sm:text-5xl">
            Ready when your cargo is
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-blue-50/85">
            Download the Carryoo app and book your first delivery in minutes. Available on Android and
            iOS.
          </p>
          <StoreBadges className="mt-8 justify-center" />
        </div>
      </section>
    </div>
  )
}

function AppCard({
  to,
  icon,
  title,
  role,
  body,
  bg,
  roleColor = 'text-cyan-300',
  bodyColor = 'text-blue-50/85',
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="md:flex-1"
    >
      <Link
        to={to}
        className={`group flex h-24 items-center gap-3 rounded-2xl ${bg} p-4 shadow-2xl shadow-blue-900/30 transition hover:brightness-110 sm:gap-4`}
      >
        <img
          src={icon}
          alt={`${title} app`}
          className="h-12 w-12 shrink-0 rounded-xl object-cover shadow-lg sm:h-14 sm:w-14"
        />
        <div className="min-w-0 flex-1">
          <p className="font-display text-lg font-extrabold leading-tight text-white sm:text-xl">{title}</p>
          <p className={`text-xs font-bold ${roleColor}`}>{role}</p>
          <p className={`mt-0.5 text-xs leading-snug ${bodyColor}`}>{body}</p>
        </div>
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/30 text-white transition group-hover:bg-white group-hover:text-[#0a45c4]">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
            <path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </Link>
    </motion.div>
  )
}
