const BASE_FLOOR = 99
const DEMAND_SLOPE = 6
const SURCHARGE_PERCENT = 0.05

export function estimateFare({ vehicle, tier, distanceKm }) {
  const demand = BASE_FLOOR + Math.min(420, distanceKm * DEMAND_SLOPE)
  const raw = vehicle.pricePerKm * distanceKm * tier.multiplier + demand
  const total = Math.round(raw * (1 + SURCHARGE_PERCENT))
  const base = Math.round(raw)
  return { total, base, tax: total - base }
}

export function formatInr(n) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(n)
}

export function etaMinutes(vehicle, tier, distanceKm) {
  const travel = Math.round(distanceKm * 2.2)
  return Math.max(
    6,
    vehicle.etaBaseMin + tier.etaOffsetMin + travel,
  )
}
