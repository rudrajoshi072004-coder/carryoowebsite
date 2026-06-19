import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Logo } from './Logo.jsx'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/safety', label: 'Safety' },
  { to: '/contact', label: 'Support' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Transparent over the hero only on home (until scrolled).
  const overlay = isHome && !scrolled
  const light = overlay

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-colors duration-300',
        overlay
          ? 'bg-transparent'
          : 'border-b border-white/10 bg-[#0a45c4]/95 backdrop-blur-xl shadow-lg shadow-blue-900/10',
      ].join(' ')}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-8">
        <Link to="/" className="shrink-0">
          <Logo light={light || !overlay} />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                [
                  'relative rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                  isActive ? 'text-white' : 'text-white/80 hover:text-white',
                ].join(' ')
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-cyan-300"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/contact"
            className="rounded-full bg-white px-6 py-2.5 text-sm font-bold text-[#0a45c4] shadow-lg shadow-blue-900/20 transition hover:bg-cyan-50"
          >
            Become a Partner
          </Link>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur lg:hidden"
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
            className="overflow-hidden border-t border-white/10 bg-[#0a45c4] lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-3">
              {links.map((l) => (
                <NavLink
                  key={l.label}
                  to={l.to}
                  end={l.to === '/'}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-sm font-semibold text-white/85 hover:bg-white/10 hover:text-white"
                >
                  {l.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-xl bg-white px-3 py-3 text-center text-sm font-bold text-[#0a45c4]"
              >
                Become a Partner
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
