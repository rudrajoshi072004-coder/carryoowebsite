import { motion } from 'framer-motion'

export function SkeletonLine({ className = '' }) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl bg-white/10 ${className}`}
      initial={{ opacity: 0.6 }}
      animate={{ opacity: [0.5, 0.9, 0.5] }}
      transition={{ duration: 1.4, repeat: Infinity }}
    >
      <motion.div
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent"
        animate={{ translateX: ['-100%', '100%'] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
      />
    </motion.div>
  )
}

export function BookingSkeleton() {
  return (
    <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-5">
      <SkeletonLine className="h-4 w-1/3" />
      <SkeletonLine className="h-10 w-full" />
      <SkeletonLine className="h-10 w-full" />
      <div className="grid grid-cols-2 gap-3">
        <SkeletonLine className="h-24" />
        <SkeletonLine className="h-24" />
      </div>
    </div>
  )
}
