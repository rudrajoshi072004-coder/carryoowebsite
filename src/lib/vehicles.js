export const vehicles = [
  {
    id: 'city-runner',
    name: 'City Runner',
    tagline: 'Light loads · tight lanes',
    capacityKg: 500,
    etaBaseMin: 9,
    pricePerKm: 18,
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=640&q=80&auto=format&fit=crop',
    tint: 'from-emerald-400/30 to-cyan-500/20',
  },
  {
    id: 'flex-van',
    name: 'Flex Van',
    tagline: 'Furniture-ready',
    capacityKg: 950,
    etaBaseMin: 11,
    pricePerKm: 24,
    image:
      'https://images.unsplash.com/photo-1519003722824-c304b7d9e4d9?w=640&q=80&auto=format&fit=crop',
    tint: 'from-sky-400/35 to-blue-600/25',
  },
  {
    id: 'heavy-line',
    name: 'Heavy Line',
    tagline: 'Commercial moves',
    capacityKg: 2400,
    etaBaseMin: 14,
    pricePerKm: 36,
    image:
      'https://images.unsplash.com/photo-1601584115197-a26e7c8d6d4c?w=640&q=80&auto=format&fit=crop',
    tint: 'from-orange-400/35 to-rose-500/25',
  },
  {
    id: 'mega-rig',
    name: 'Mega Rig',
    tagline: 'Warehouse scale',
    capacityKg: 4500,
    etaBaseMin: 18,
    pricePerKm: 48,
    image:
      'https://images.unsplash.com/photo-1587293852727-763b6d7937d9?w=640&q=80&auto=format&fit=crop',
    tint: 'from-violet-400/35 to-indigo-600/25',
  },
]

export const tiers = [
  {
    id: 'economy',
    name: 'Economy',
    subtitle: 'Best value routing',
    multiplier: 1,
    etaOffsetMin: 4,
    badge: 'Popular',
  },
  {
    id: 'priority',
    name: 'Priority',
    subtitle: 'Faster pairing',
    multiplier: 1.18,
    etaOffsetMin: 0,
    badge: '',
  },
  {
    id: 'express',
    name: 'Express',
    subtitle: 'Top queue · live ops',
    multiplier: 1.32,
    etaOffsetMin: -2,
    badge: 'Fastest',
  },
]
