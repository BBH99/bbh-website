interface BlockchainIconProps {
  className?: string
}

export default function BlockchainIcon({ className = 'h-10 w-10' }: BlockchainIconProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="blockGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFDAB9" />
          <stop offset="100%" stopColor="#FFC8DD" />
        </linearGradient>
      </defs>

      <style>{`
        @keyframes block-float-1 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
        @keyframes block-float-2 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
        @keyframes block-float-3 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
        @keyframes block-float-4 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
        .block-1 { animation: block-float-1 3s ease-in-out infinite; }
        .block-2 { animation: block-float-2 3s ease-in-out infinite 0.4s; }
        .block-3 { animation: block-float-3 3s ease-in-out infinite 0.8s; }
        .block-4 { animation: block-float-4 3s ease-in-out infinite 1.2s; }
      `}</style>

      {/* Connecting lines */}
      <line x1="30" y1="30" x2="70" y2="30" stroke="#FFC8DD" strokeWidth="2" opacity="0.6" />
      <line x1="30" y1="30" x2="30" y2="70" stroke="#FFC8DD" strokeWidth="2" opacity="0.6" />
      <line x1="70" y1="30" x2="70" y2="70" stroke="#FFC8DD" strokeWidth="2" opacity="0.6" />
      <line x1="30" y1="70" x2="70" y2="70" stroke="#FFC8DD" strokeWidth="2" opacity="0.6" />
      <line x1="30" y1="30" x2="70" y2="70" stroke="#FFC8DD" strokeWidth="1.5" opacity="0.4" />
      <line x1="70" y1="30" x2="30" y2="70" stroke="#FFC8DD" strokeWidth="1.5" opacity="0.4" />

      {/* Blocks */}
      <g className="block-1">
        <rect x="18" y="18" width="24" height="24" rx="4" fill="url(#blockGrad)" stroke="#F4A8C3" strokeWidth="1.5" />
      </g>
      <g className="block-2">
        <rect x="58" y="18" width="24" height="24" rx="4" fill="url(#blockGrad)" stroke="#F4A8C3" strokeWidth="1.5" />
      </g>
      <g className="block-3">
        <rect x="18" y="58" width="24" height="24" rx="4" fill="url(#blockGrad)" stroke="#F4A8C3" strokeWidth="1.5" />
      </g>
      <g className="block-4">
        <rect x="58" y="58" width="24" height="24" rx="4" fill="url(#blockGrad)" stroke="#F4A8C3" strokeWidth="1.5" />
      </g>
    </svg>
  )
}
