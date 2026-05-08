import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

export function AnimatedCounter({ value, suffix = '', prefix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { stiffness: 90, damping: 18 })

  useEffect(() => {
    if (!inView) return
    motionValue.set(value)
  }, [inView, motionValue, value])

  useEffect(() => {
    const unsub = spring.on('change', (latest) => {
      if (!ref.current) return
      ref.current.textContent = `${prefix}${Math.round(latest).toLocaleString('en-IN')}${suffix}`
    })
    return () => unsub()
  }, [spring, prefix, suffix])

  return <span ref={ref}>0</span>
}
