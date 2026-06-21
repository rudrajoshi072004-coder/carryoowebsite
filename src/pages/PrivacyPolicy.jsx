import { useEffect } from 'react'
import policyHtml from '../content/privacy-policy.html?raw'

function parsePolicyHtml(html) {
  const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/i)
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)

  return {
    styles: (styleMatch?.[1] ?? '').replace(/^(\s*)body\s*\{/m, '$1.privacy-policy-page {'),
    body: bodyMatch?.[1] ?? html,
  }
}

const { styles, body } = parsePolicyHtml(policyHtml)

export function PrivacyPolicy() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Carryoo — Privacy Policy'
    window.scrollTo(0, 0)

    return () => {
      document.title = previousTitle
    }
  }, [])

  return (
    <div className="privacy-policy-page">
      <style>{styles}</style>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  )
}
