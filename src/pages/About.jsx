import { motion } from 'framer-motion'
import { PageShell } from '../components/PageShell.jsx'

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

const glassCard = 'bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-6'

export function About() {
  return (
    <PageShell
      eyebrow="Trust"
      title="Why teams stake their lanes on Carryoo"
      intro="Transparent operations, obsessive about the last-mile handshake. Verified partners, secure handovers, and live visibility on every trip — delivering trust, every mile."
    >
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className={glassCard}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">{p.title}</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">{p.body}</p>
          </motion.div>
        ))}
      </div>

      <section className="mt-20">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold text-white">Driver verification runway</h2>
            <p className="mt-2 max-w-xl text-slate-300">
              A progressive ladder — not a one-time checkbox. Built to keep high-trust partners on the
              network.
            </p>
          </div>
          <span className="inline-flex w-fit rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs font-semibold text-emerald-200">
            Human + automated reviews
          </span>
        </div>

        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, idx) => (
            <motion.li
              key={s.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className={`group relative ${glassCard} transition hover:border-white/25 hover:bg-slate-900/75`}
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-600/90 font-display text-sm font-bold text-white shadow-lg shadow-blue-500/30">
                {s.step}
              </span>
              <p className="mt-4 font-display text-base font-bold text-white">{s.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{s.desc}</p>
            </motion.li>
          ))}
        </ol>
      </section>
    </PageShell>
  )
}
