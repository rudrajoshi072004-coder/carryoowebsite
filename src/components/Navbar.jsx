import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const links = [
  { to: '/', label: 'Home' },
  { to: '/book', label: 'Book' },
  { to: '/app', label: 'App' },
  { to: '/about', label: 'Trust' },
  { to: '/contact', label: 'Support' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070b14]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="group flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-orange-400 text-sm font-extrabold text-slate-950 shadow-lg shadow-cyan-500/20">
            C
          </span>
          <div className="leading-tight">
            <p className="font-display text-base font-bold tracking-tight text-white sm:text-lg">
              Carrio
            </p>
            <p className="hidden text-[11px] text-slate-400 sm:block">City truck network</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                [
                  'rounded-full px-3 py-2 text-sm font-medium transition-colors',
                  isActive ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white',
                ].join(' ')
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <a
            href="#download"
            className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-white/30 hover:bg-white/5"
          >
            Download
          </a>
          <Link
            to="/book"
            className="rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 px-4 py-2 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:brightness-105"
          >
            Book now
          </Link>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span className={`h-0.5 w-5 rounded-full bg-white transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 w-5 rounded-full bg-white/70 transition ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-5 rounded-full bg-white transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden border-t border-white/10 md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-3">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/10"
                >
                  {l.label}
                </NavLink>
              ))}
              <Link
                to="/book"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-xl bg-gradient-to-r from-orange-400 to-rose-500 py-3 text-center text-sm font-bold text-slate-950"
              >
                Book now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
