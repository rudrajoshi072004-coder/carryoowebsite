import { useCallback, useMemo, useState } from 'react'
import { BookingDraftContext } from './bookingDraftContext.js'

export function BookingDraftProvider({ children }) {
  const [pickup, setPickup] = useState('')
  const [drop, setDrop] = useState('')
  const [distanceKm, setDistanceKm] = useState(8)

  const reset = useCallback(() => {
    setPickup('')
    setDrop('')
    setDistanceKm(8)
  }, [])

  const value = useMemo(
    () => ({
      pickup,
      drop,
      distanceKm,
      setPickup,
      setDrop,
      setDistanceKm,
      reset,
    }),
    [pickup, drop, distanceKm, reset],
  )

  return (
    <BookingDraftContext.Provider value={value}>
      {children}
    </BookingDraftContext.Provider>
  )
}
