import { motion } from 'framer-motion'

export function HeroTruck() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] glass p-6 sm:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,102,255,0.08),transparent_55%)]" />
      <div className="relative">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600/90">
              Fleet pulse
            </p>
            <p className="mt-1 font-display text-lg font-semibold text-slate-900">
              Routes optimized in real time
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-[11px] font-semibold text-emerald-600">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Live ops
          </div>
        </div>

        <div className="relative h-[120px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 sm:h-[140px]">
          <svg
            className="absolute inset-0 h-full w-full opacity-[0.15]"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M32 0H0V32" fill="none" stroke="rgba(0,102,255,0.2)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          <motion.div
            className="absolute left-0 top-1/2 h-[3px] w-[38%] -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-600/0 via-blue-600/80 to-blue-400/80"
            initial={{ opacity: 0.4, scaleX: 0.2 }}
            animate={{ opacity: [0.45, 0.9, 0.45], scaleX: [0.25, 1, 0.25] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: 'left center' }}
          />

          <motion.div
            className="absolute top-1/2 z-10 flex -translate-y-1/2 items-center gap-2 drop-shadow-[0_12px_30px_rgba(0,0,0,0.1)]"
            initial={{ left: '-12%' }}
            animate={{ left: ['-12%', '112%'] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
          >
            <div className="flex h-14 w-24 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-lg">
              <svg viewBox="0 0 64 40" className="h-9 w-14 text-blue-600" aria-hidden>
                <rect x="4" y="18" width="36" height="14" rx="3" fill="currentColor" opacity="0.15" />
                <rect x="10" y="12" width="22" height="16" rx="2" fill="currentColor" />
                <rect x="32" y="16" width="22" height="12" rx="2" fill="#0066ff" opacity="0.9" />
                <circle cx="14" cy="34" r="5" fill="#0066ff" />
                <circle cx="50" cy="34" r="5" fill="#0066ff" />
              </svg>
            </div>
            <motion.span
              className="hidden rounded-full border border-slate-200 bg-white/80 px-2 py-1 text-[10px] font-semibold text-slate-600 sm:inline-block"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.4, repeat: Infinity }}
            >
              Dispatch ACK
            </motion.span>
          </motion.div>

          <motion.div
            className="absolute right-10 top-5 h-2 w-2 rounded-full bg-blue-500"
            animate={{ scale: [1, 1.6, 1], opacity: [0.55, 1, 0.55] }}
            transition={{ duration: 2.1, repeat: Infinity }}
          />

          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-medium text-slate-500">
            <span>Pickup zone</span>
            <span className="text-blue-600/90">ETA adaptive</span>
            <span>Drop yard</span>
          </div>
        </div>
      </div>
    </div>
  )
}
