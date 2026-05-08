import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HeroTruck } from '../components/HeroTruck.jsx'
import { TestimonialCarousel } from '../components/TestimonialCarousel.jsx'
import { AnimatedCounter } from '../components/AnimatedCounter.jsx'
import { vehicles } from '../lib/vehicles.js'
import { useBookingDraft } from '../hooks/useBookingDraft.js'

const features = [
  {
    title: 'Verified mesh',
    body: 'Multi-step KYC, document vault, and trip-level audit trails for every partner.',
    accent: 'from-cyan-400/25 to-blue-600/10',
  },
  {
    title: 'Fare you can defend',
    body: 'Line-item estimates with distance, demand, and vehicle class — before you confirm.',
    accent: 'from-orange-400/25 to-rose-500/10',
  },
  {
    title: 'Ops that scales',
    body: 'Bulk bookings, saved routes, and team roles built for enterprises that still move fast.',
    accent: 'from-violet-400/25 to-indigo-600/10',
  },
  {
    title: 'Human + machine',
    body: 'Dispatch copilots watch traffic, weather, and yard congestion to keep ETAs honest.',
    accent: 'from-emerald-400/25 to-teal-600/10',
  },
]

export function Home() {
  const { pickup, drop, setPickup, setDrop } = useBookingDraft()

  return (
    <div className="pb-28 bg-slate-50">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_420px_at_70%_10%,rgba(0,102,255,0.05),transparent_60%)]" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shadow-[0_0_12px_rgba(0,102,255,0.4)]" />
              City-scale logistics
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.5 }}
              className="mt-6 font-display text-4xl font-extrabold leading-[1.05] text-slate-900 sm:text-5xl lg:text-6xl"
            >
              Move anything, <span className="text-gradient">anytime</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg"
            >
              carrioo pairs you with verified truck partners, transparent pricing, and a mobile
              experience that feels as polished as the brands you already love.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                to="/book"
                className="rounded-full bg-accent px-6 py-3 text-sm font-bold text-white shadow-xl shadow-blue-500/25"
              >
                Book now
              </Link>
              <a
                href="#download"
                className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 backdrop-blur hover:bg-slate-50"
              >
                Download app
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.55 }}
              className="mt-10 rounded-[1.75rem] glass p-5 sm:p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Floating route capture
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <label className="block text-[11px] font-medium text-slate-500">
                  Pickup
                  <input
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500/40"
                    placeholder="Enter pickup area"
                  />
                </label>
                <label className="block text-[11px] font-medium text-slate-500">
                  Drop
                  <input
                    value={drop}
                    onChange={(e) => setDrop(e.target.value)}
                    className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500/40"
                    placeholder="Where should we arrive?"
                  />
                </label>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link
                  to="/book"
                  className="flex-1 rounded-2xl bg-accent py-3 text-center text-sm font-bold text-white"
                >
                  Open booking flow
                </Link>
                <Link
                  to="/app"
                  className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Preview app
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.12, duration: 0.55 }}
          >
            <HeroTruck />
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, idx) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ delay: idx * 0.06, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-blue-50 opacity-0 transition group-hover:opacity-100`}
              />
              <div className="relative">
                <h3 className="font-display text-lg font-bold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.body}</p>
                <div className="mt-5 h-px w-12 bg-blue-600 opacity-60" />
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600/90">
              Fleet gallery
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              Pick the right metal for the job
            </h2>
            <p className="mt-2 max-w-xl text-slate-600">
              Swipe through capacity classes — every card shows real photography and load bands.
            </p>
          </div>
          <Link to="/book" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
            Configure a run →
          </Link>
        </div>

        <div className="mt-8 flex gap-4 overflow-x-auto pb-4 pt-2 [scrollbar-width:thin]">
          {vehicles.map((v, idx) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="relative w-[260px] shrink-0 snap-start overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm"
            >
              <div className={`h-36 bg-slate-100`}>
                <img src={v.image} alt="" className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="p-5">
                <p className="font-display text-lg font-bold text-slate-900">{v.name}</p>
                <p className="mt-1 text-xs text-slate-400">{v.tagline}</p>
                <div className="mt-4 flex items-center justify-between text-xs font-semibold">
                  <span className="rounded-full bg-white/10 px-2 py-1 text-slate-100">
                    {v.capacityKg} kg
                  </span>
                  <span className="text-cyan-200">₹{v.pricePerKm}/km</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/60 to-black/60 p-8 sm:p-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300/90">
              Network health
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white">
              Built for bursts, steady at baseline
            </h2>
            <p className="mt-3 text-slate-400">
              Counters animate once as you scroll — synthetic but directionally faithful to how we
              present growth metrics.
            </p>
          </div>
          <dl className="grid gap-6 sm:grid-cols-3">
            {[
              { label: 'Trips coordinated', value: 12840, suffix: '+' },
              { label: 'Cities humming', value: 18, suffix: '' },
              { label: 'On-time handoffs', value: 97, suffix: '%' },
            ].map((s) => (
              <div key={s.label} className="rounded-3xl bg-white/[0.04] p-5 ring-1 ring-white/10">
                <dt className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  {s.label}
                </dt>
                <dd className="mt-3 font-display text-4xl font-extrabold text-white">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6 lg:grid lg:grid-cols-[1fr_1.05fr] lg:gap-10">
        <TestimonialCarousel />
        <motion.div
          id="download"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/15 via-slate-900 to-orange-500/15 p-8 sm:mt-0 sm:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/90">
                Mobile command center
              </p>
              <h3 className="mt-3 font-display text-3xl font-bold text-white">
                The app your ops team will actually open
              </h3>
              <p className="mt-3 text-slate-300">
                Live map, secure payments, trip sharing, and driver chat — all glassy, fast, and
                thumb-friendly.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="rounded-2xl bg-black px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15"
                >
                  App Store
                </button>
                <button
                  type="button"
                  className="rounded-2xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 backdrop-blur"
                >
                  Google Play
                </button>
              </div>
            </div>
            <div className="relative mx-auto h-[320px] w-[200px]">
              <div className="absolute inset-0 rounded-[2.4rem] bg-gradient-to-b from-white/25 to-white/5 p-[2px] shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
                <div className="flex h-full flex-col overflow-hidden rounded-[2.35rem] bg-slate-950">
                  <div className="flex items-center justify-between px-4 py-3 text-[10px] text-slate-400">
                    <span>9:41</span>
                    <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px]">5G</span>
                  </div>
                  <div className="px-4 pb-4">
                    <div className="rounded-2xl bg-gradient-to-br from-cyan-500/30 to-orange-500/25 p-4">
                      <p className="text-xs font-semibold text-white">Active trip</p>
                      <p className="mt-1 text-[11px] text-slate-200">Warehouse 4 → Midtown Hub</p>
                      <div className="mt-3 h-2 overflow-hidden rounded-full bg-black/30">
                        <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-cyan-400 to-orange-400" />
                      </div>
                    </div>
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <div className="rounded-xl bg-white/5 p-3 text-[10px] text-slate-300">
                        Driver
                        <p className="mt-1 font-semibold text-white">R. Menon</p>
                      </div>
                      <div className="rounded-xl bg-white/5 p-3 text-[10px] text-slate-300">
                        OTP
                        <p className="mt-1 font-semibold text-white">4821</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 sm:flex-row sm:items-center sm:p-10">
          <div>
            <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Ready when your cargo is.
            </h3>
            <p className="mt-2 max-w-xl text-slate-400">
              Book on web, track on mobile, loop in finance with clean invoices — demo site, zero
              backend wiring.
            </p>
          </div>
          <Link
            to="/book"
            className="rounded-full bg-white px-7 py-3 text-sm font-extrabold text-slate-950 shadow-xl"
          >
            Start a booking
          </Link>
        </div>
      </section>
    </div>
  )
}
