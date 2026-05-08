import { motion } from 'framer-motion'

const pillars = [
  {
    title: 'Mission',
    body: 'Democratize dependable truck access for every business that moves physical goods inside cities — not just the ones with dedicated fleets.',
  },
  {
    title: 'Reliability',
    body: 'We treat empty miles and missed handoffs as product bugs. Every release tightens dispatch accuracy and partner accountability.',
  },
  {
    title: 'Safety',
    body: 'Drivers pass document checks, vehicle inspections, and periodic re-verification. Trips with anomalies route to a human desk instantly.',
  },
]

const steps = [
  {
    step: '01',
    title: 'Application & screening',
    desc: 'Commercial license, insurance, and prior trip history validated through partner APIs.',
  },
  {
    step: '02',
    title: 'Field onboarding',
    desc: 'Orientation on loading protocols, SOS pathways, and how we communicate with warehouses.',
  },
  {
    step: '03',
    title: 'Shadow runs',
    desc: 'First trips supervised by senior partners until quality scores stabilize.',
  },
  {
    step: '04',
    title: 'Continuous audit',
    desc: 'Random doc reverification, telemetry reviews, and customer feedback loops.',
  },
]

export function About() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300/90">Trust</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold text-white sm:text-5xl">
          Why teams stake their lanes on Carrio
        </h1>
        <p className="mt-4 text-lg text-slate-400">
          Transparent operations, obsessive about the last mile handshake. This page is narrative —
          swap in your legal team’s copy when you go live.
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/80">
              {p.title}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">{p.body}</p>
          </motion.div>
        ))}
      </div>

      <section className="mt-20 rounded-[2rem] border border-white/10 bg-slate-950/60 p-8 sm:p-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold text-white">Driver verification runway</h2>
            <p className="mt-2 max-w-xl text-slate-400">
              A progressive ladder — not a one-time checkbox. Built to keep high-trust partners on the
              network.
            </p>
          </div>
          <span className="inline-flex w-fit rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs font-semibold text-emerald-100">
            Human + automated reviews
          </span>
        </div>
        <ol className="mt-10 grid gap-6 md:grid-cols-2">
          {steps.map((s, idx) => (
            <motion.li
              key={s.step}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <span className="font-display text-sm font-bold text-orange-300">{s.step}</span>
              <p className="mt-2 font-semibold text-white">{s.title}</p>
              <p className="mt-2 text-sm text-slate-400">{s.desc}</p>
            </motion.li>
          ))}
        </ol>
      </section>
    </div>
  )
}
