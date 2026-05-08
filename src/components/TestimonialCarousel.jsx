import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const items = [
  {
    quote:
      'Carrio cut our intra-city replenishment time in half. Feels like enterprise ops with consumer-grade UX.',
    name: 'Aditi Rao',
    role: 'Ops Director, Bloom Retail',
  },
  {
    quote:
      'The live trip view is absurdly good. Our clients finally stop calling every 10 minutes.',
    name: 'Manu K.',
    role: 'Founder, Coldchain Co.',
  },
  {
    quote:
      'Transparent pricing saved us endless approval loops. Finance actually likes this product.',
    name: 'Sarah L.',
    role: 'Head of Logistics, Northwind',
  },
]

export function TestimonialCarousel() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => setI((v) => (v + 1) % items.length), 5200)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div className="relative overflow-hidden rounded-3xl glass p-8 sm:p-10">
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-400/30 to-transparent blur-2xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-gradient-to-tr from-orange-400/25 to-transparent blur-2xl" />

      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/90">Voices</p>
      <div className="relative mt-6 min-h-[140px]">
        <AnimatePresence mode="wait">
          <motion.figure
            key={items[i].name}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35 }}
            className="space-y-5"
          >
            <blockquote className="font-display text-xl leading-snug text-white sm:text-2xl">
              “{items[i].quote}”
            </blockquote>
            <figcaption className="text-sm">
              <span className="font-semibold text-slate-100">{items[i].name}</span>
              <span className="text-slate-400"> · {items[i].role}</span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex gap-2">
        {items.map((_, idx) => (
          <button
            key={idx.toString()}
            type="button"
            aria-label={`Show testimonial ${idx + 1}`}
            className={`h-1.5 flex-1 rounded-full transition ${idx === i ? 'bg-gradient-to-r from-cyan-400 to-orange-400' : 'bg-white/10 hover:bg-white/20'}`}
            onClick={() => setI(idx)}
          />
        ))}
      </div>
    </div>
  )
}
