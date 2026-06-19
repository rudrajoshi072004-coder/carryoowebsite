export function LogoMark({ className = 'h-9 w-9' }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* speed lines */}
      <g stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.9">
        <line x1="2" y1="24" x2="16" y2="24" />
        <line x1="6" y1="34" x2="20" y2="34" />
        <line x1="2" y1="44" x2="16" y2="44" />
      </g>
      {/* C-shaped truck body */}
      <path
        d="M50 18H30c-7.2 0-13 5.8-13 13s5.8 13 13 13h6"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />
      {/* truck cab */}
      <path
        d="M44 27h7.5c1.2 0 2.3.6 3 1.6l3.2 4.6c.4.6.6 1.2.6 1.9V42c0 1.7-1.3 3-3 3H40"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* wheels */}
      <circle cx="33" cy="48" r="5" fill="currentColor" />
      <circle cx="50" cy="48" r="5" fill="currentColor" />
    </svg>
  )
}

export function Logo({ light = false, className = '' }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark className={`h-9 w-9 ${light ? 'text-white' : 'text-blue-600'}`} />
      <span
        className={`font-display text-2xl font-extrabold tracking-tight ${
          light ? 'text-white' : 'text-slate-900'
        }`}
      >
        carry<span className="text-cyan-400">oo</span>
      </span>
    </span>
  )
}
