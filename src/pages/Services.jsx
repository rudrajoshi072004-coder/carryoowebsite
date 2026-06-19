import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PageShell } from '../components/PageShell.jsx'

const glassCard = 'bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-6'

const fleet = [
  {
    name: '2-Wheelers',
    tag: 'Parcels & documents',
    capacity: 'Up to 20 kg',
    base: '₹25',
    perKm: '₹8/km',
    icon: '🛵',
  },
  {
    name: 'Mini Trucks',
    tag: 'Shop stock & appliances',
    capacity: '500 – 1,000 kg',
    base: '₹250',
    perKm: '₹18/km',
    icon: '🚚',
  },
  {
    name: 'Large Tempos',
    tag: 'Bulk & commercial loads',
    capacity: '1,500 – 3,000 kg',
    base: '₹600',
    perKm: '₹32/km',
    icon: '🚛',
  },
  {
    name: 'Packers & Movers',
    tag: 'Full home & office shifting',
    capacity: 'Custom crew + vehicle',
    base: 'From ₹2,499',
    perKm: 'Quote based',
    icon: '📦',
  },
]

export function Services() {
  return (
    <PageShell
      eyebrow="Services"
      title="One network for every load"
      intro="From a single parcel to a full office move, pick the right vehicle class with transparent, upfront pricing — no surprises at drop-off."
    >
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {fleet.map((v, i) => (
          <motion.div
            key={v.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className={`group flex flex-col ${glassCard} transition hover:border-white/25 hover:bg-slate-900/75`}
          >
            <span className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/5 text-2xl">
              {v.icon}
            </span>
            <h3 className="mt-5 font-display text-xl font-bold text-white">{v.name}</h3>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">{v.tag}</p>

            <dl className="mt-5 space-y-3 border-t border-white/10 pt-5 text-sm">
              <div className="flex items-center justify-between">
                <dt className="text-slate-400">Capacity</dt>
                <dd className="font-semibold text-white">{v.capacity}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-slate-400">Base fare</dt>
                <dd className="font-semibold text-white">{v.base}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-slate-400">Distance</dt>
                <dd className="font-semibold text-white">{v.perKm}</dd>
              </div>
            </dl>

            <Link
              to="/book"
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-blue-600 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700"
            >
              Book {v.name}
            </Link>
          </motion.div>
        ))}
      </div>

      <p className="mt-8 text-sm text-slate-400">
        Prices shown are indicative placeholders for this demo. Final fares depend on city, demand,
        and exact route.
      </p>
    </PageShell>
  )
}
