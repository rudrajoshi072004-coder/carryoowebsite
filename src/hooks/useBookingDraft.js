import { useContext } from 'react'
import { BookingDraftContext } from '../context/bookingDraftContext.js'

export function useBookingDraft() {
  const ctx = useContext(BookingDraftContext)
  if (!ctx) {
    throw new Error('useBookingDraft must be used within BookingDraftProvider')
  }
  return ctx
}
