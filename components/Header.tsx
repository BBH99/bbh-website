import { useState } from 'react'
import BravePigIcon from './icons/BravePigIcon'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-b-background/80 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <BravePigIcon className="h-10 w-10" />
          <span className="text-xl font-bold text-b-dark">BBH</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-b-text hover:text-b-dark transition-all duration-300">What We Fund</a>
          <a href="#vision" className="text-b-text hover:text-b-dark transition-all duration-300">Vision</a>
          <a href="#contact" className="bg-b-dark text-white px-6 py-2 rounded-full hover:bg-b-dark/80 transition-all duration-300">Contact</a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-b-dark transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-b-dark transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-b-dark transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-60' : 'max-h-0'}`}>
        <div className="px-6 pb-4 flex flex-col gap-4">
          <a href="#features" onClick={() => setMenuOpen(false)} className="text-b-text hover:text-b-dark transition-all duration-300">What We Fund</a>
          <a href="#vision" onClick={() => setMenuOpen(false)} className="text-b-text hover:text-b-dark transition-all duration-300">Vision</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="bg-b-dark text-white px-6 py-2 rounded-full text-center hover:bg-b-dark/80 transition-all duration-300">Contact</a>
        </div>
      </div>
    </header>
  )
}
