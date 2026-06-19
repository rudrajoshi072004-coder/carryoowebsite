import { motion } from 'framer-motion'
import { PageShell } from '../components/PageShell.jsx'

const glassCard = 'bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-6'

const metrics = [
  {
    title: 'Driver background checks',
    body: 'Every partner clears KYC, license, and police-record verification before their first trip — with periodic re-checks.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M12 3 5 6v6c0 4.4 3 7.6 7 9 4-1.4 7-4.6 7-9V6l-7-3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Live GPS tracking',
    body: 'Track your shipment in real time and share a live trip link with your team or family for full visibility.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: 'Goods insurance partners',
    body: 'Optional in-transit cover through trusted insurance partners keeps high-value cargo protected end to end.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M4 7h16v6c0 4-3.5 6.5-8 8-4.5-1.5-8-4-8-8V7Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M9 12h6M12 9v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'OTP-secured handover',
    body: 'Goods are released only after a one-time code confirms the right recipient at pickup and drop.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <rect x="4" y="10" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: '24/7 safety desk',
    body: 'A human response desk monitors trips flagged for anomalies and is reachable any time via SOS.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M5 5h14v10H8l-3 3V5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Vehicle inspections',
    body: 'Registered vehicles pass fitness and documentation checks, with condition reviews kept up to date.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M3 13h11v4H3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M14 13h4l3 3v1h-7z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="7" cy="18.5" r="1.6" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17" cy="18.5" r="1.6" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
]

const prohibited = [
  'Illegal drugs & narcotics',
  'Firearms, ammunition & explosives',
  'Flammable or hazardous chemicals',
  'Live animals',
  'Counterfeit or smuggled goods',
  'Currency, gold bullion & valuables',
  'Perishables without proper packaging',
  'Any item banned under local law',
]

export function Safety() {
  return (
    <PageShell
      eyebrow="Safety"
      title="Every mile, backed by trust"
      intro="Safety is built into Carryoo from the ground up — verified partners, secure handovers, and live visibility so your goods are always in good hands."
    >
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map((m, i) => (
          <motion.div
            key={m.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className={`${glassCard} transition hover:border-white/25 hover:bg-slate-900/75`}
          >
            <span className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-blue-500/15 text-cyan-300">
              {m.icon}
            </span>
            <h3 className="mt-5 font-display text-lg font-bold text-white">{m.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{m.body}</p>
          </motion.div>
        ))}
      </div>

      {/* Prohibited items list */}
      <section className={`mt-16 ${glassCard} sm:p-8`}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold text-white">Prohibited items list</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-300">
              To keep our network, partners, and communities safe — and to stay compliant with the
              law — the following items may not be booked or transported on Carryoo.
            </p>
          </div>
          <span className="inline-flex w-fit rounded-full border border-rose-400/30 bg-rose-500/10 px-4 py-2 text-xs font-semibold text-rose-200">
            Strictly not allowed
          </span>
        </div>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {prohibited.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
            >
              <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-rose-500/20 text-rose-300">
                <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none">
                  <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                </svg>
              </span>
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-6 text-xs text-slate-400">
          This list is a placeholder for the demo. Final prohibited-items policy is governed by
          Carryoo’s terms of service and applicable regulations.
        </p>
      </section>
    </PageShell>
  )
}
