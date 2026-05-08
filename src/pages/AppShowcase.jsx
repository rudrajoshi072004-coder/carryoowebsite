import { useRef, useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'

const highlights = [
  {
    title: 'Real-time tracking',
    body: 'Sub-minute location refreshes with geofenced milestones and reroute alerts.',
  },
  {
    title: 'Easy booking',
    body: 'Three taps from idea to dispatched truck — templates remember your docks and bays.',
  },
  {
    title: 'Secure payments',
    body: 'Escrow-friendly flows, GST-ready invoices, and instant refunds on voided trips.',
  },
]

const screens = [
  {
    label: 'Dispatch',
    title: 'Book in seconds',
    rows: ['Saved routes', 'Capacity guardrails', 'Ops notes pinned'],
    gradient: 'from-cyan-500/40 to-blue-600/30',
  },
  {
    label: 'Tracking',
    title: 'Live convoy map',
    rows: ['Driver ETA', 'Traffic fuse', 'Customer share link'],
    gradient: 'from-orange-500/40 to-rose-600/30',
  },
  {
    label: 'Wallet',
    title: 'Payments & credits',
    rows: ['UPI + cards', 'GST PDF', 'Team budgets'],
    gradient: 'from-violet-500/40 to-indigo-600/30',
  },
]

export function AppShowcase() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.75', 'end 0.25'],
  })
  const [screenIdx, setScreenIdx] = useState(0)

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(screens.length - 1, Math.max(0, Math.floor(v * screens.length)))
    setScreenIdx(idx)
  })

  const screen = screens[screenIdx]

  return (
    <div className="pb-24">
      <section className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/90">Product</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold text-white sm:text-5xl">
            The Carrio app, choreographed on scroll
          </h1>
          <p className="mt-4 text-lg text-slate-400">
            Each band below nudges the handset UI — no video assets required, just motion and crisp
            layout craft.
          </p>
          <div className="mt-8 flex gap-3">
            <button
              type="button"
              className="rounded-2xl bg-white px-5 py-3 text-sm font-bold text-slate-950"
            >
              View App Store
            </button>
            <button
              type="button"
              className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-white hover:bg-white/5"
            >
              Play Store
            </button>
          </div>
        </div>
        <div className="relative mx-auto mt-10 w-[220px] shrink-0 lg:mt-0">
          <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-cyan-500/25 to-orange-500/15 blur-3xl" />
          <motion.div
            layout
            className="relative rounded-[2.5rem] bg-gradient-to-b from-white/30 to-white/5 p-[2px] shadow-[0_40px_100px_rgba(0,0,0,0.55)]"
          >
            <div className="overflow-hidden rounded-[2.45rem] bg-slate-950">
              <div className="flex items-center justify-between px-5 py-4 text-[11px] text-slate-400">
                <span>Carrio</span>
                <span className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-200">
                  β
                </span>
              </div>
              <motion.div
                key={screen.label}
                initial={{ opacity: 0.4, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="px-5 pb-8"
              >
                <div className={`rounded-2xl bg-gradient-to-br ${screen.gradient} p-[1px]`}>
                  <div className="rounded-2xl bg-slate-950/90 p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                      {screen.label}
                    </p>
                    <p className="mt-2 font-display text-xl font-bold text-white">{screen.title}</p>
                    <ul className="mt-4 space-y-2 text-sm text-slate-300">
                      {screen.rows.map((row) => (
                        <li key={row} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                          {row}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-4 h-28 rounded-2xl border border-white/10 bg-white/5 p-3">
                  <div className="flex items-center justify-between text-[10px] text-slate-400">
                    <span>Timeline</span>
                    <span>Scroll-synced</span>
                  </div>
                  <div className="mt-3 flex gap-1">
                    {screens.map((s, idx) => (
                      <motion.div
                        key={s.label}
                        className={`h-1.5 flex-1 rounded-full ${idx === screenIdx ? 'bg-gradient-to-r from-cyan-400 to-orange-400' : 'bg-white/10'}`}
                        layout
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section ref={sectionRef} className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
          Scroll to advance UI states
        </p>
        <div className="mt-10 space-y-24 pb-32 pt-6">
          {highlights.map((h, idx) => (
            <motion.article
              key={h.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20%' }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10"
            >
              <div>
                <h2 className="font-display text-3xl font-bold text-white">{h.title}</h2>
                <p className="mt-3 text-lg text-slate-400">{h.body}</p>
                <div className="mt-6 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full border border-white/10 px-3 py-1 text-slate-300">
                    Biometric unlock
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-slate-300">
                    Trip archives
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-slate-300">
                    Dark / light
                  </span>
                </div>
              </div>
              <div className="relative min-h-[200px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-black">
                <motion.div
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 20% 20%, rgba(56,189,248,0.25), transparent 40%), radial-gradient(circle at 80% 30%, rgba(249,115,22,0.18), transparent 45%)',
                  }}
                  animate={{ rotate: [0, 2, 0] }}
                  transition={{ duration: 10, repeat: Infinity }}
                />
                <div className="relative flex h-full flex-col justify-end p-6">
                  <p className="text-sm font-semibold text-white">{h.title} panel</p>
                  <p className="mt-2 text-xs text-slate-400">
                    Interface snapshot {idx + 1} — scroll the page to rotate the phone mockup above.
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  )
}
