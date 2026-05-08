import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { vehicles, tiers } from '../lib/vehicles.js'
import { estimateFare, etaMinutes, formatInr } from '../lib/pricing.js'
import { useBookingDraft } from '../hooks/useBookingDraft.js'
import { RideSelectionPanel } from '../components/RideSelectionPanel.jsx'
import { BookingSkeleton } from '../components/Skeleton.jsx'

const steps = ['Route', 'Vehicle', 'Confirm', 'Match']

export function Booking() {
  const { pickup, drop, setPickup, setDrop, distanceKm, setDistanceKm } = useBookingDraft()
  const [stepIdx, setStepIdx] = useState(0)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [vehicleId, setVehicleId] = useState(vehicles[1].id)
  const [tierId, setTierId] = useState('economy')
  const [panelOpen, setPanelOpen] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [matchStage, setMatchStage] = useState('idle')

  useEffect(() => {
    const t = window.setTimeout(() => setMapLoaded(true), 650)
    return () => window.clearTimeout(t)
  }, [])

  const vehicle = useMemo(() => vehicles.find((v) => v.id === vehicleId) ?? vehicles[0], [vehicleId])
  const tier = useMemo(() => tiers.find((t) => t.id === tierId) ?? tiers[0], [tierId])
  const fare = estimateFare({
    vehicle,
    tier,
    distanceKm,
  })

  const canRoute = pickup.trim().length > 3 && drop.trim().length > 3
  const canConfirm = name.trim() && phone.replace(/\D/g, '').length >= 10

  const startMatch = () => {
    if (!canConfirm) return
    setMatchStage('matching')
    window.setTimeout(() => setMatchStage('found'), 3600)
  }

  useEffect(() => {
    if (matchStage !== 'idle') window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [matchStage])

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/90">
            Booking Desk
          </p>
          <h1 className="mt-2 font-display text-3xl font-extrabold text-white sm:text-4xl">
            Plan a truck like you’re plotting a runway
          </h1>
          <p className="mt-2 max-w-2xl text-slate-400">
            Google Maps-inspired surfaces (static demo), stacked steps, transparent math. Open the{' '}
            <span className="text-orange-300">Ride selection panel</span> anytime to reshuffle tiers.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setPanelOpen(true)}
          className="mt-4 inline-flex rounded-2xl border border-orange-400/40 bg-orange-400/15 px-4 py-2 text-sm font-bold text-orange-50 shadow-[0_0_40px_rgba(251,146,60,0.18)] sm:mt-0"
        >
          Ride selection panel
        </button>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {steps.map((label, idx) => {
          const active = idx === stepIdx
          const done = idx < stepIdx
          return (
            <button
              key={label}
              type="button"
              onClick={() => setStepIdx(idx)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                active
                  ? 'bg-white text-slate-950'
                  : done
                    ? 'border border-emerald-400/30 bg-emerald-400/10 text-emerald-100'
                    : 'border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
            >
              {idx + 1}. {label}
            </button>
          )
        })}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
        <div className="space-y-6">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(800px_500px_at_20%_0%,rgba(56,189,248,0.15),transparent_55%)]" />
            <div className="relative">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />
                  Map preview · demo canvas
                </div>
                <span className="rounded-full bg-white/5 px-3 py-1 text-[11px] font-semibold text-slate-200">
                  Sat · light traffic
                </span>
              </div>

              <div className="relative h-[320px] sm:h-[380px]">
                {!mapLoaded ? (
                  <div className="absolute inset-0 p-5">
                    <BookingSkeleton />
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900"
                  >
                    <svg className="absolute inset-0 h-full w-full opacity-40" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="tiles" width="48" height="48" patternUnits="userSpaceOnUse">
                          <path
                            d="M48 0H0v48"
                            fill="none"
                            stroke="rgba(148,163,184,0.12)"
                            strokeWidth="1"
                          />
                        </pattern>
                        <linearGradient id="lane" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="rgba(34,211,238,0)" />
                          <stop offset="40%" stopColor="rgba(34,211,238,0.45)" />
                          <stop offset="100%" stopColor="rgba(249,115,22,0.35)" />
                        </linearGradient>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#tiles)" />
                      <motion.path
                        d="M40 300 C 180 80, 320 360, 520 120 S 780 40, 900 220"
                        fill="none"
                        stroke="url(#lane)"
                        strokeWidth="6"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.4, ease: 'easeInOut' }}
                      />
                    </svg>

                    <motion.div
                      className="absolute left-[12%] top-[58%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
                      initial={{ scale: 0.7, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <span className="grid h-10 w-10 place-items-center rounded-2xl border border-cyan-400/40 bg-cyan-500/20 text-xs font-bold text-cyan-50 shadow-lg shadow-cyan-500/25">
                        A
                      </span>
                      <span className="rounded-full bg-black/40 px-2 py-0.5 text-[10px] text-slate-200 ring-1 ring-white/10">
                        Pickup
                      </span>
                    </motion.div>

                    <motion.div
                      className="absolute left-[76%] top-[28%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
                      initial={{ scale: 0.7, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.45 }}
                    >
                      <span className="grid h-10 w-10 place-items-center rounded-2xl border border-orange-400/40 bg-orange-500/20 text-xs font-bold text-orange-50 shadow-lg shadow-orange-500/25">
                        B
                      </span>
                      <span className="rounded-full bg-black/40 px-2 py-0.5 text-[10px] text-slate-200 ring-1 ring-white/10">
                        Drop
                      </span>
                    </motion.div>
                  </motion.div>
                )}
              </div>

              <div className="relative grid gap-3 border-t border-white/10 bg-black/40 p-5 sm:grid-cols-2">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Pickup
                  <input
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-cyan-400/40"
                    placeholder="Search or paste address"
                  />
                </label>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Drop
                  <input
                    value={drop}
                    onChange={(e) => setDrop(e.target.value)}
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-orange-400/40"
                    placeholder="Gate, dock, floor notes"
                  />
                </label>
                <label className="sm:col-span-2 block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Approximate distance · {distanceKm} km
                  <input
                    type="range"
                    min={2}
                    max={40}
                    value={distanceKm}
                    onChange={(e) => setDistanceKm(Number(e.target.value))}
                    className="mt-3 w-full accent-cyan-400"
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="font-display text-xl font-bold text-white">Vehicle matrix</h2>
                <p className="text-sm text-slate-400">
                  Cards show capacity, dummy estimate, ETA from the pricing helper.
                </p>
              </div>
              <span className="hidden rounded-full border border-white/10 px-3 py-1 text-[11px] text-slate-300 sm:inline-block">
                Tap to select
              </span>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {vehicles.map((v) => {
                const selected = v.id === vehicleId
                const vFare = estimateFare({
                  vehicle: v,
                  tier,
                  distanceKm,
                })
                const eta = etaMinutes(v, tier, distanceKm)
                return (
                  <motion.button
                    key={v.id}
                    type="button"
                    layout
                    onClick={() => {
                      setVehicleId(v.id)
                      setStepIdx(1)
                    }}
                    whileHover={{ y: -3 }}
                    className={`relative overflow-hidden rounded-2xl border text-left transition ${
                      selected
                        ? 'border-cyan-400/50 bg-gradient-to-br from-cyan-500/15 to-transparent shadow-[0_0_50px_rgba(34,211,238,0.12)]'
                        : 'border-white/10 bg-white/[0.03] hover:border-white/18'
                    }`}
                  >
                    <div className="flex gap-3 p-4">
                      <div className={`relative h-20 w-28 overflow-hidden rounded-xl bg-gradient-to-br ${v.tint}`}>
                        <img src={v.image} alt="" className="h-full w-full object-cover" loading="lazy" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-white">{v.name}</p>
                        <p className="text-xs text-slate-400">{v.tagline}</p>
                        <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold">
                          <span className="rounded-full bg-white/10 px-2 py-0.5 text-slate-100">
                            {v.capacityKg} kg
                          </span>
                          <span className="rounded-full bg-black/30 px-2 py-0.5 text-cyan-200 ring-1 ring-cyan-400/25">
                            {formatInr(vFare.total)}
                          </span>
                          <span className="rounded-full border border-white/10 px-2 py-0.5 text-slate-200">
                            ETA {eta}m
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.button>
                )
              })}
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-[2rem] glass p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Fare snapshot
            </p>
            <p className="mt-4 font-display text-4xl font-extrabold text-white">
              {formatInr(fare.total)}
            </p>
            <p className="mt-2 text-sm text-slate-400">
              {vehicle.name} · {distanceKm} km simulated · tier weighting baked in.
            </p>
            <button
              type="button"
              onClick={() => setPanelOpen(true)}
              className="mt-6 w-full rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 py-3 text-sm font-bold text-slate-950"
            >
              Refine in ride panel
            </button>
          </div>

          <AnimatePresence mode="wait">
            {matchStage === 'idle' && (
              <motion.div
                key="confirm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-slate-900/80 to-black/60 p-6"
              >
                <h3 className="font-display text-lg font-bold text-white">Confirm & dispatch</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Step {stepIdx + 1} of {steps.length} — we’ll simulate driver matching on submit.
                </p>
                <div className="mt-4 grid gap-3">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contact name"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-white/25"
                  />
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone number"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-white/25"
                  />
                </div>
                <div className="mt-5 flex gap-3">
                  <button
                    type="button"
                    disabled={!canRoute || stepIdx === 0}
                    onClick={() => setStepIdx((s) => Math.max(0, s - 1))}
                    className="flex-1 rounded-2xl border border-white/15 py-3 text-sm font-semibold text-slate-100 disabled:opacity-40"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    disabled={!canConfirm || !canRoute}
                    onClick={startMatch}
                    className="flex-1 rounded-2xl bg-gradient-to-r from-orange-400 to-pink-500 py-3 text-sm font-bold text-slate-950 disabled:opacity-40"
                  >
                    Request driver
                  </button>
                </div>
              </motion.div>
            )}

            {matchStage === 'matching' && (
              <motion.div
                key="matching"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="relative overflow-hidden rounded-[2rem] border border-cyan-400/30 bg-slate-950 p-8 text-center"
              >
                <motion.div
                  className="mx-auto grid h-24 w-24 place-items-center rounded-full border border-cyan-400/30 bg-cyan-500/10"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
                >
                  <span className="h-14 w-14 rounded-full border-2 border-dashed border-cyan-300/60" />
                </motion.div>
                <p className="mt-6 font-display text-xl font-bold text-white">Matching nearby partners</p>
                <p className="mt-2 text-sm text-slate-400">
                  Scanning {vehicle.name.toLowerCase()} availability around your pickup corridor…
                </p>
              </motion.div>
            )}

            {matchStage === 'found' && (
              <motion.div
                key="found"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-[2rem] border border-emerald-400/35 bg-emerald-500/10 p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
                  Driver lined up
                </p>
                <p className="mt-3 font-display text-2xl font-bold text-white">Imran Shah · MH17 XC 9033</p>
                <p className="mt-2 text-sm text-emerald-100/90">
                  Arriving in ~{Math.max(6, etaMinutes(vehicle, tier, distanceKm) - 4)}{' '}
                  minutes · OTP shared in app.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setMatchStage('idle')
                    setStepIdx(0)
                  }}
                  className="mt-6 w-full rounded-2xl bg-white py-3 text-sm font-bold text-slate-950"
                >
                  Book another
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </aside>
      </div>

      <RideSelectionPanel
        open={panelOpen}
        onClose={() => setPanelOpen(false)}
        distanceKm={distanceKm}
        selectedVehicleId={vehicleId}
        selectedTierId={tierId}
        onPickVehicle={setVehicleId}
        onPickTier={setTierId}
      />
    </div>
  )
}
