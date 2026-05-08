import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold text-white">Carrio</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
            Dispatch-grade logistics for growing cities — transparent fares, verified partners, live
            tracking from booking to offload.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full border border-white/10 px-3 py-1 text-slate-300">
              ISO-ready ops
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1 text-slate-300">
              24/7 support
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <p className="font-semibold text-white">Product</p>
            <ul className="mt-3 space-y-2 text-slate-400">
              <li>
                <Link className="hover:text-white" to="/book">
                  Book a truck
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" to="/app">
                  Mobile app
                </Link>
              </li>
              <li>
                <a className="hover:text-white" href="#download">
                  Download
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white">Company</p>
            <ul className="mt-3 space-y-2 text-slate-400">
              <li>
                <Link className="hover:text-white" to="/about">
                  Trust center
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" to="/contact">
                  Help & FAQs
                </Link>
              </li>
              <li>
                <span className="text-slate-500">Careers · soon</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="rounded-3xl glass p-6">
          <p className="font-display text-lg font-semibold text-white">Stay in the loop</p>
          <p className="mt-2 text-sm text-slate-400">Product drops, fare tips, seasonal offers.</p>
          <div className="mt-4 flex gap-2">
            <input
              readOnly
              placeholder="you@company.com"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-200 outline-none placeholder:text-slate-500"
            />
            <button
              type="button"
              className="shrink-0 rounded-2xl bg-white px-4 py-2.5 text-sm font-bold text-slate-950"
            >
              Join
            </button>
          </div>
          <p className="mt-3 text-[11px] text-slate-500">Demo form — connects to nothing.</p>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-white/10 px-4 py-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <span>© {new Date().getFullYear()} Carrio Technologies Pvt Ltd. Demo website.</span>
        <span>Privacy · Terms · Insurance partners</span>
      </div>
    </footer>
  )
}
