import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useBookingDraft } from '../hooks/useBookingDraft.js'

export function FloatingBookingWidget() {
  const { pickup, drop, setPickup, setDrop } = useBookingDraft()
  const navigate = useNavigate()
  const [expanded, setExpanded] = useState(true)

  const submit = () => {
    navigate('/book')
    setExpanded(false)
  }

  return (
    <motion.div
      layout
      className="fixed bottom-4 left-4 right-4 z-40 mx-auto max-w-xl sm:left-auto sm:right-6 sm:w-full"
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.45 }}
    >
      <div className="glass-strong rounded-3xl p-4 ring-glow">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="font-display text-sm font-bold text-white">Quick book</p>
            <p className="text-xs text-slate-400">Drop your route — refine on the booking page.</p>
          </div>
          <button
            type="button"
            className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:bg-white/10"
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? 'Collapse' : 'Expand'}
          </button>
        </div>

        <motion.div
          initial={false}
          animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
          className="overflow-hidden"
        >
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <label className="block text-[11px] font-medium uppercase tracking-wider text-slate-400">
              Pickup
              <input
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                placeholder="Warehouse, landmark, pin..."
                className="mt-1 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none ring-cyan-400/0 transition focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/25"
              />
            </label>
            <label className="block text-[11px] font-medium uppercase tracking-wider text-slate-400">
              Drop
              <input
                value={drop}
                onChange={(e) => setDrop(e.target.value)}
                className="mt-1 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none focus:border-orange-400/40 focus:ring-2 focus:ring-orange-400/25"
                placeholder="Delivery gate, floor, notes..."
              />
            </label>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={submit}
              className="flex-1 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/30"
            >
              Continue to booking
            </button>
            <Link
              to="/book"
              className="rounded-2xl border border-white/15 px-4 py-3 text-center text-sm font-semibold text-slate-100 hover:bg-white/5"
            >
              Full flow
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
