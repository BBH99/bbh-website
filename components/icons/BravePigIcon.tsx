interface BravePigIconProps {
  className?: string
}

export default function BravePigIcon({ className = 'h-10 w-10' }: BravePigIconProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="pigHead" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#FFD9E8" />
          <stop offset="100%" stopColor="#FFC8DD" />
        </radialGradient>
        <filter id="shadowBlur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
        </filter>
      </defs>

      <style>{`
        @keyframes lively-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-3px) rotate(1deg); }
          50% { transform: translateY(-5px) rotate(0deg); }
          75% { transform: translateY(-3px) rotate(-1deg); }
        }
        @keyframes shadow-dance {
          0%, 100% { rx: 18; opacity: 0.15; }
          50% { rx: 15; opacity: 0.1; }
        }
        @keyframes blink {
          0%, 90%, 100% { transform: scaleY(1); }
          95% { transform: scaleY(0.1); }
        }
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        .pig-body { animation: lively-float 3s ease-in-out infinite; transform-origin: center; }
        .pig-shadow { animation: shadow-dance 3s ease-in-out infinite; }
        .pig-eye { animation: blink 4s ease-in-out infinite; transform-origin: center; }
        .pig-glow { animation: glow-pulse 3s ease-in-out infinite; }
        .sparkle-1 { animation: sparkle 2s ease-in-out infinite; }
        .sparkle-2 { animation: sparkle 2s ease-in-out infinite 0.6s; }
        .sparkle-3 { animation: sparkle 2s ease-in-out infinite 1.2s; }
      `}</style>

      {/* Shadow */}
      <ellipse className="pig-shadow" cx="50" cy="92" rx="18" ry="4" fill="#5D5C61" opacity="0.15" filter="url(#shadowBlur)" />

      <g className="pig-body">
        {/* Ears */}
        <polygon points="28,32 22,15 36,28" fill="#FFD9E8" stroke="#F4A8C3" strokeWidth="1.5" />
        <polygon points="72,32 78,15 64,28" fill="#FFD9E8" stroke="#F4A8C3" strokeWidth="1.5" />

        {/* Head */}
        <circle cx="50" cy="48" r="28" fill="url(#pigHead)" stroke="#F4A8C3" strokeWidth="2" />

        {/* Snout */}
        <ellipse cx="50" cy="55" rx="12" ry="8" fill="#FFF0F5" stroke="#F4A8C3" strokeWidth="1" />
        <circle cx="45" cy="55" r="2" fill="#5D5C61" />
        <circle cx="55" cy="55" r="2" fill="#5D5C61" />

        {/* Eyes */}
        <circle className="pig-eye" cx="40" cy="42" r="3" fill="#5D5C61" />
        <circle className="pig-eye" cx="60" cy="42" r="3" fill="#5D5C61" />

        {/* Bowtie */}
        <polygon points="38,78 50,73 50,83" fill="#5D5C61" />
        <polygon points="62,78 50,73 50,83" fill="#5D5C61" />
        <circle cx="50" cy="78" r="2.5" fill="#5D5C61" />
      </g>

      {/* Sparkles */}
      <g className="sparkle-1">
        <polygon points="15,25 16.5,20 18,25 16.5,30" fill="#FFDAB9" />
        <polygon points="13,25 18,23.5 13,22 8,23.5" fill="#FFDAB9" transform="rotate(45 15 25)" />
      </g>
      <g className="sparkle-2">
        <polygon points="85,20 86.5,15 88,20 86.5,25" fill="#FFFFFF" />
        <polygon points="83,20 88,18.5 83,17 78,18.5" fill="#FFFFFF" transform="rotate(45 85 20)" />
      </g>
      <g className="sparkle-3">
        <polygon points="80,65 81.5,60 83,65 81.5,70" fill="#FFC8DD" />
        <polygon points="78,65 83,63.5 78,62 73,63.5" fill="#FFC8DD" transform="rotate(45 80 65)" />
      </g>
    </svg>
  )
}
