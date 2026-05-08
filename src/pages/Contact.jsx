import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'Do you integrate with our ERP?',
    a: 'Yes — CSV, API, and webhook patterns are all on the roadmap. This demo site has no backend, but enterprise mode is how we ship.',
  },
  {
    q: 'Can I cancel after a driver accepts?',
    a: 'You can void before loading begins. Cancellation windows and fees depend on your contract tier — shown clearly in-app.',
  },
  {
    q: 'How do you handle fragile cargo?',
    a: 'Tag the trip with handling notes, request extra lashings, and choose partners with higher handling scores.',
  },
  {
    q: 'Is pricing locked after booking?',
    a: 'If distance or wait time materially changes, we surface delta charges before you acknowledge them.',
  },
]

export function Contact() {
  const [open, setOpen] = useState(0)
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    window.setTimeout(() => setSent(false), 3200)
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/90">Support</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold text-white sm:text-5xl">
            Talk to humans who understand yards, not scripts
          </h1>
          <p className="mt-4 text-lg text-slate-400">
            Enterprise logistics is messy — we designed support channels that respect how your team
            actually works.
          </p>

          <div className="mt-10 space-y-4 rounded-[2rem] glass p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-white">Hotline</p>
                <p className="text-sm text-slate-400">+91 8000 000 000 · 24/7</p>
              </div>
              <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-emerald-200">
                Demo
              </span>
            </div>
            <div className="h-px bg-white/10" />
            <div>
              <p className="text-sm font-semibold text-white">Ops email</p>
              <p className="text-sm text-cyan-200">ops@carrioo.example</p>
            </div>
          </div>

          <div className="mt-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-orange-500/10 to-transparent p-6">
            <h2 className="font-display text-xl font-bold text-white">Help library</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>· Fleet onboarding checklist</li>
              <li>· Billing & GST quickstart</li>
              <li>· Incident response playbook</li>
            </ul>
          </div>
        </div>

        <div>
          <form
            onSubmit={submit}
            className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8"
          >
            <h2 className="font-display text-2xl font-bold text-white">Send a note</h2>
            <p className="mt-2 text-sm text-slate-400">We’ll route this to the right squad — demo only.</p>
            <div className="mt-6 grid gap-4">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Name
                <input
                  required
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none focus:border-cyan-400/40"
                  placeholder="Your name"
                />
              </label>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Work email
                <input
                  type="email"
                  required
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none focus:border-cyan-400/40"
                  placeholder="you@company.com"
                />
              </label>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                How can we help?
                <textarea
                  required
                  rows={4}
                  className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none focus:border-orange-400/40"
                  placeholder="Shipments / pricing / partnership…"
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-6 w-full rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 py-3 text-sm font-bold text-slate-950"
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

          <div className="mt-10">
            <h3 className="font-display text-lg font-bold text-white">FAQs</h3>
            <div className="mt-4 space-y-2">
              {faqs.map((item, idx) => {
                const isOpen = open === idx
                return (
                  <div key={item.q} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? -1 : idx)}
                      className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-semibold text-slate-100"
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
                          <p className="px-4 py-3 text-sm text-slate-400">{item.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
