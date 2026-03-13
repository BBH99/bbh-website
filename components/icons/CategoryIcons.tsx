interface IconProps {
  className?: string
}

export function FilmIcon({ className = 'h-8 w-8' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="2" />
      <line x1="7" y1="2" x2="7" y2="22" />
      <line x1="17" y1="2" x2="17" y2="22" />
      <line x1="2" y1="7" x2="7" y2="7" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <line x1="2" y1="17" x2="7" y2="17" />
      <line x1="17" y1="7" x2="22" y2="7" />
      <line x1="17" y1="17" x2="22" y2="17" />
    </svg>
  )
}

export function TVIcon({ className = 'h-8 w-8' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  )
}

export function ArtIcon({ className = 'h-8 w-8' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8a4 4 0 0 1 4 4c0 1.5-.8 2.5-2 3.5s-2 2-2 3.5" />
      <path d="M12 8c-2.2 0-4 1.8-4 4c0 1.5.8 2.5 2 3.5s2 2 2 3.5" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  )
}
