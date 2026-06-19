import { Link } from 'react-router-dom'
import { Logo } from './Logo.jsx'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-8 lg:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">
            Delivering trust, every mile. Book trucks & tempos in minutes, track live, and deliver
            with confidence across the city.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full border border-slate-200 px-3 py-1 text-slate-600">
              ISO-ready ops
            </span>
            <span className="rounded-full border border-slate-200 px-3 py-1 text-slate-600">
              24/7 support
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <p className="font-semibold text-slate-900">Product</p>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li>
                <Link className="hover:text-blue-600" to="/book">
                  Book a truck
                </Link>
              </li>
              <li>
                <Link className="hover:text-blue-600" to="/app">
                  Mobile app
                </Link>
              </li>
              <li>
                <a className="hover:text-blue-600" href="#download">
                  Download
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Company</p>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li>
                <Link className="hover:text-blue-600" to="/about">
                  Trust center
                </Link>
              </li>
              <li>
                <Link className="hover:text-blue-600" to="/contact">
                  Help & FAQs
                </Link>
              </li>
              <li>
                <span className="text-slate-400">Careers · soon</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="rounded-3xl glass p-6">
          <p className="font-display text-lg font-semibold text-slate-900">Stay in the loop</p>
          <p className="mt-2 text-sm text-slate-600">Product drops, fare tips, seasonal offers.</p>
          <div className="mt-4 flex gap-2">
            <input
              readOnly
              placeholder="you@company.com"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400"
            />
            <button
              type="button"
              className="shrink-0 rounded-2xl bg-accent px-4 py-2.5 text-sm font-bold text-white shadow-sm shadow-blue-500/10"
            >
              Join
            </button>
          </div>
          <p className="mt-3 text-[11px] text-slate-500">Demo form — connects to nothing.</p>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-slate-100 px-4 py-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span>© {new Date().getFullYear()} Carryoo Technologies Pvt Ltd. All rights reserved.</span>
        <span>
          <a
            href="https://rudrajoshi072004-coder.github.io/Carryoo-privacy-policy/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer transition-colors hover:text-blue-400"
          >
            Privacy
          </a>
          {' · '}
          <a
            href="https://rudrajoshi072004-coder.github.io/Carryoo-privacy-policy/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer transition-colors hover:text-blue-400"
          >
            Terms
          </a>
          {' · Insurance partners'}
        </span>
      </div>
    </footer>
  )
}
