/**
 * Loads the static privacy-policy.html inside the SPA shell so /privacy-policy
 * works without server redirects (which caused ERR_TOO_MANY_REDIRECTS).
 */
export function PrivacyPolicy() {
  return (
    <iframe
      src="/privacy-policy.html"
      title="Carryoo — Privacy Policy"
      className="block h-screen w-full border-0"
    />
  )
}
