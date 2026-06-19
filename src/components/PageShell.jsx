import { motion } from 'framer-motion'

/**
 * Global dark layout template that matches the Home page premium theme.
 * Deep midnight/slate-blue gradient base + soft glows + a subtle geometric mesh.
 * Reuse across inner pages for structural continuity.
 */
export function PageShell({ eyebrow, title, intro, children }) {
  return (
    <div className="relative -mt-20 min-h-screen overflow-hidden bg-gradient-to-b from-[#0a1d44] via-[#0a1733] to-[#070f24] text-slate-100">
      {/* ambient glows */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_520px_at_12%_-8%,rgba(37,99,235,0.28),transparent_60%),radial-gradient(720px_520px_at_92%_2%,rgba(34,211,238,0.12),transparent_55%)]" />
      {/* subtle geometric mesh */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:52px_52px]" />

      <div className="relative mx-auto max-w-7xl px-4 pb-32 pt-28 sm:px-8 sm:pt-32">
        {(eyebrow || title || intro) && (
          <div className="max-w-3xl">
            {eyebrow && (
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300"
              >
                {eyebrow}
              </motion.p>
            )}
            {title && (
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="mt-3 font-display text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl"
              >
                {title}
              </motion.h1>
            )}
            {intro && (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-4 text-lg leading-relaxed text-slate-300"
              >
                {intro}
              </motion.p>
            )}
          </div>
        )}

        {children}
      </div>
    </div>
  )
}
