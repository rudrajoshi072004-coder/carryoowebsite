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
    label: 'Incoming',
    title: 'Ride Request',
    rows: ['Current location', 'Pune, Maharashtra', 'Estimated Fare: ₹4490'],
    gradient: 'from-blue-600 to-blue-700',
  },
  {
    label: 'Tracking',
    title: 'Live convoy map',
    rows: ['Driver ETA', 'Traffic fuse', 'Customer share link'],
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    label: 'Wallet',
    title: 'Payments & credits',
    rows: ['UPI + cards', 'GST PDF', 'Team budgets'],
    gradient: 'from-blue-700 to-blue-800',
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
    <div className="pb-24 bg-slate-50">
      <section className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Product</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold text-slate-900 sm:text-5xl">
            The carrioo app, choreographed on scroll
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Each band below nudges the handset UI — no video assets required, just motion and crisp
            layout craft.
          </p>
          <div className="mt-8 flex gap-3">
            <button
              type="button"
              className="rounded-2xl bg-accent px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20"
            >
              View App Store
            </button>
            <button
              type="button"
              className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Play Store
            </button>
          </div>
        </div>
        <div className="relative mx-auto mt-10 w-[240px] shrink-0 lg:mt-0">
          <div className="absolute -inset-6 rounded-full bg-blue-500/10 blur-3xl" />
          <motion.div
            layout
            className="relative rounded-[2.5rem] bg-white p-2 shadow-[0_40px_100px_rgba(0,0,0,0.1)] border border-slate-200"
          >
            <div className="overflow-hidden rounded-[2.2rem] bg-white border border-slate-100">
              <div className="flex items-center justify-between px-5 py-4 text-[11px] text-slate-500 border-b border-slate-50">
                <span className="font-bold">Trips Dashboard</span>
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-600">
                  Online
                </span>
              </div>
              <motion.div
                key={screen.label}
                initial={{ opacity: 0.4, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="px-4 py-6"
              >
                <div className={`rounded-2xl bg-gradient-to-br ${screen.gradient} p-4 text-white shadow-lg`}>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] opacity-80">
                    {screen.label}
                  </p>
                  <p className="mt-1 font-display text-lg font-bold">{screen.title}</p>
                  <ul className="mt-4 space-y-2 text-[12px] opacity-90">
                    {screen.rows.map((row) => (
                      <li key={row} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-white/50" />
                        {row}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {screenIdx === 0 && (
                  <div className="mt-4 flex gap-2">
                    <button className="flex-1 rounded-xl bg-emerald-500 py-2.5 text-[11px] font-bold text-white shadow-sm">
                      ACCEPT
                    </button>
                    <button className="flex-1 rounded-xl bg-danger py-2.5 text-[11px] font-bold text-white shadow-sm">
                      DECLINE
                    </button>
                  </div>
                )}

                <div className="mt-4 h-24 rounded-2xl border border-slate-100 bg-slate-50 p-3">
                  <div className="flex items-center justify-between text-[10px] text-slate-400">
                    <span>Timeline</span>
                    <span>Scroll-synced</span>
                  </div>
                  <div className="mt-3 flex gap-1">
                    {screens.map((s, idx) => (
                      <motion.div
                        key={s.label}
                        className={`h-1.5 flex-1 rounded-full ${idx === screenIdx ? 'bg-accent' : 'bg-slate-200'}`}
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
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
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
              className="grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10 shadow-sm"
            >
              <div>
                <h2 className="font-display text-3xl font-bold text-slate-900">{h.title}</h2>
                <p className="mt-3 text-lg text-slate-600">{h.body}</p>
                <div className="mt-6 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full border border-slate-200 px-3 py-1 text-slate-600">
                    Biometric unlock
                  </span>
                  <span className="rounded-full border border-slate-200 px-3 py-1 text-slate-600">
                    Trip archives
                  </span>
                  <span className="rounded-full border border-slate-200 px-3 py-1 text-slate-600">
                    Dark / light
                  </span>
                </div>
              </div>
              <div className="relative min-h-[200px] overflow-hidden rounded-3xl border border-slate-100 bg-slate-50">
                <motion.div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 20% 20%, rgba(0,102,255,0.4), transparent 40%), radial-gradient(circle at 80% 30%, rgba(34,197,94,0.3), transparent 45%)',
                  }}
                  animate={{ rotate: [0, 2, 0] }}
                  transition={{ duration: 10, repeat: Infinity }}
                />
                <div className="relative flex h-full flex-col justify-end p-6">
                  <p className="text-sm font-semibold text-slate-900">{h.title} panel</p>
                  <p className="mt-2 text-xs text-slate-500">
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
