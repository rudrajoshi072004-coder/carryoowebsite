import { useEffect } from 'react'

/** Full-page redirect for static HTML docs outside the React app. */
export function StaticPageRedirect({ to }) {
  useEffect(() => {
    window.location.replace(to)
  }, [to])

  return null
}
