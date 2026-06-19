import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PageShell } from '../components/PageShell.jsx'

const faqs = [
  {
    q: 'How fast can a vehicle reach my pickup?',
    a: 'Most city bookings are matched within minutes. You will see a live ETA for the nearest Carryoo partner before you confirm.',
  },
  {
    q: 'Can I cancel after a driver accepts?',
    a: 'You can cancel before loading begins. Cancellation windows and any fees are shown clearly in the app before you confirm.',
  },
  {
    q: 'How do you handle fragile cargo?',
    a: 'Add handling notes to the trip, request extra lashings, and choose partners with higher handling scores.',
  },
  {
    q: 'Is pricing locked after booking?',
    a: 'Yes. If distance or wait time materially changes, we surface any delta charges before you acknowledge them.',
  },
]

const glassCard = 'bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-6'
const inputBase =
  'mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400/50 focus:bg-white/10'
const label = 'block text-xs font-semibold uppercase tracking-wider text-slate-300'

export function Contact() {
  const [open, setOpen] = useState(0)
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    window.setTimeout(() => setSent(false), 3200)
  }

  return (
    <PageShell
      eyebrow="Support"
      title="Talk to humans who understand the road"
      intro="Logistics gets messy — our support channels are built to respect how your team actually works. Reach us any time, day or night."
    >
      <div className="mt-12 grid items-start gap-6 lg:grid-cols-2">
        {/* Send a note */}
        <form onSubmit={submit} className={glassCard}>
          <h2 className="font-display text-2xl font-bold text-white">Send a note</h2>
          <p className="mt-2 text-sm text-slate-300">We’ll route this to the right squad — demo only.</p>
          <div className="mt-6 grid gap-4">
            <label className={label}>
              Name
              <input required className={inputBase} placeholder="Your name" />
            </label>
            <label className={label}>
              Work email
              <input type="email" required className={inputBase} placeholder="you@company.com" />
            </label>
            <label className={label}>
              How can we help?
              <textarea
                required
                rows={4}
                className={`${inputBase} resize-none`}
                placeholder="Shipments / pricing / partnership…"
              />
            </label>
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 py-3 text-sm font-bold text-slate-950 transition hover:brightness-105"
          >
            Submit
          </button>
          <AnimatePresence>
            {sent && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 text-center text-sm font-semibold text-emerald-300"
              >
                Received — this form is a demo and does not send data.
              </motion.p>
            )}
          </AnimatePresence>
        </form>

        {/* Hotline / Email info */}
        <div className={`${glassCard} flex flex-col`}>
          <h2 className="font-display text-2xl font-bold text-white">Reach us directly</h2>
          <p className="mt-2 text-sm text-slate-300">Real people, around the clock.</p>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-white">Hotline</p>
                <p className="text-sm text-slate-300">+91 8000 000 000 · 24/7</p>
              </div>
              <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold text-emerald-200">
                Demo
              </span>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-sm font-semibold text-white">Ops email</p>
              <p className="text-sm text-cyan-300">ops@carryoo.example</p>
            </div>
          </div>

          <div className="mt-6 border-t border-white/10 pt-6">
            <h3 className="font-display text-lg font-bold text-white">Help library</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>· Fleet onboarding checklist</li>
              <li>· Billing & GST quickstart</li>
              <li>· Incident response playbook</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <section className="mt-16">
        <h3 className="font-display text-2xl font-bold text-white">Frequently asked</h3>
        <div className="mt-6 grid gap-3 lg:grid-cols-2">
          {faqs.map((item, idx) => {
            const isOpen = open === idx
            return (
              <div key={item.q} className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : idx)}
                  className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-sm font-semibold text-white"
                >
                  {item.q}
                  <span className="text-cyan-300">{isOpen ? '−' : '+'}</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-white/5"
                    >
                      <p className="px-5 py-4 text-sm leading-relaxed text-slate-300">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </section>
    </PageShell>
  )
}
