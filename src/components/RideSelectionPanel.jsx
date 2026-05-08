import { AnimatePresence, motion } from 'framer-motion'
import { vehicles, tiers } from '../lib/vehicles.js'
import { estimateFare, etaMinutes, formatInr } from '../lib/pricing.js'

export function RideSelectionPanel({
  open,
  onClose,
  distanceKm,
  selectedVehicleId,
  selectedTierId,
  onPickVehicle,
  onPickTier,
}) {
  const vehicle = vehicles.find((v) => v.id === selectedVehicleId) ?? vehicles[0]
  const tier = tiers.find((t) => t.id === selectedTierId) ?? tiers[0]
  const fare = estimateFare({ vehicle, tier, distanceKm })
  const eta = etaMinutes(vehicle, tier, distanceKm)

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            aria-label="Close ride panel"
            className="fixed inset-0 z-[60] bg-black/55 backdrop-blur-sm sm:bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            className="fixed inset-x-0 bottom-0 z-[70] max-h-[85vh] overflow-y-auto rounded-t-[2rem] border border-slate-200 bg-white shadow-[0_-30px_80px_rgba(0,0,0,0.1)] backdrop-blur-2xl sm:inset-auto sm:right-6 sm:top-24 sm:max-h-[calc(100vh-7rem)] sm:w-[440px] sm:rounded-[2rem]"
            initial={{ y: '100%', opacity: 0.6 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
          >
            <div className="sticky top-0 flex items-center justify-between border-b border-slate-100 bg-white/90 px-5 py-4 backdrop-blur-xl">
              <div>
                <p className="font-display text-base font-bold text-slate-900">Ride selection</p>
                <p className="text-xs text-slate-500">Choose tier + vehicle · dummy pricing engine</p>
              </div>
              <button
                type="button"
                className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                onClick={onClose}
              >
                Close
              </button>
            </div>

            <div className="space-y-6 p-5">
              <section>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Service tier
                </p>
                <div className="mt-3 grid gap-3">
                  {tiers.map((t) => {
                    const selected = tier.id === t.id
                    return (
                      <button
                        type="button"
                        key={t.id}
                        onClick={() => onPickTier(t.id)}
                        className={`group relative overflow-hidden rounded-2xl border px-4 py-3 text-left transition ${
                          selected
                            ? 'border-blue-500/50 bg-blue-50 shadow-[0_0_40px_rgba(0,102,255,0.05)]'
                            : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="flex items-center gap-2 font-semibold text-slate-900">
                              {t.name}
                              {t.badge && (
                                <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-700">
                                  {t.badge}
                                </span>
                              )}
                            </p>
                            <p className="mt-1 text-xs text-slate-500">{t.subtitle}</p>
                          </div>
                          <span className="text-xs font-semibold text-blue-600">
                            ×{t.multiplier.toFixed(2)}
                          </span>
                        </div>
                        <motion.span
                          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-2 ring-blue-500/0 transition group-hover:opacity-100"
                          animate={
                            selected
                              ? {
                                  opacity: 1,
                                  boxShadow: '0 0 0 1px rgba(0,102,255,0.2)',
                                }
                              : {}
                          }
                        />
                      </button>
                    )
                  })}
                </div>
              </section>

              <section>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Vehicle
                </p>
                <div className="mt-3 grid gap-3">
                  {vehicles.map((v) => {
                    const selected = vehicle.id === v.id
                    const previewFare = estimateFare({ vehicle: v, tier, distanceKm })
                    const previewEta = etaMinutes(v, tier, distanceKm)
                    return (
                      <button
                        type="button"
                        key={v.id}
                        onClick={() => onPickVehicle(v.id)}
                        className={`flex gap-3 rounded-2xl border p-3 text-left transition ${
                          selected
                            ? 'border-blue-400/45 bg-blue-50'
                            : 'border-slate-200 bg-white hover:border-slate-300'
                        }`}
                      >
                        <div
                          className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-xl bg-slate-100`}
                        >
                          <img
                            src={v.image}
                            alt=""
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                          <span className="absolute left-2 top-2 rounded-md bg-white/90 px-1.5 py-0.5 text-[9px] font-bold text-slate-900 shadow-sm">
                            {v.capacityKg} kg
                          </span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate font-semibold text-slate-900">{v.name}</p>
                          <p className="truncate text-xs text-slate-500">{v.tagline}</p>
                          <div className="mt-2 flex flex-wrap gap-2 text-[11px]">
                            <span className="rounded-full bg-blue-600 px-2 py-0.5 font-semibold text-white">
                              {formatInr(previewFare.total)}
                            </span>
                            <span className="rounded-full border border-slate-200 px-2 py-0.5 text-slate-500">
                              ETA {previewEta} min
                            </span>
                          </div>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </section>

              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs text-slate-500">Estimated total</p>
                    <p className="font-display text-2xl font-bold text-slate-900">
                      {formatInr(fare.total)}
                    </p>
                    <p className="mt-1 text-[11px] text-slate-600">
                      Base {formatInr(fare.base)} · includes {Math.round(distanceKm)} km run
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-500">Pickup window</p>
                    <p className="text-lg font-bold text-blue-600">{eta} min</p>
                  </div>
                </div>
                <div className="mt-4 h-px w-full bg-slate-200" />
                <p className="mt-3 text-[11px] leading-relaxed text-slate-500">
                  Estimates adjust for simulated demand — not a binding quote.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
