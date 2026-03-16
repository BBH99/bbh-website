import BravePigIcon from './icons/BravePigIcon'

export default function Footer() {
  return (
    <footer id="contact" className="bg-b-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Mission */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BravePigIcon className="h-8 w-8" />
              <span className="font-bold text-lg">BBH Mission</span>
            </div>
            <p className="text-white/70">
              Streamlining entertainment and art funding and monetization with technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-white/70 hover:text-white transition-all duration-300">What We Do</a>
              </li>
              <li>
                <a href="#vision" className="text-white/70 hover:text-white transition-all duration-300">Our Vision</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Get in Touch</h3>
            <p className="text-white/70">
              For partnership inquiries, please email us at:
            </p>
            <a href="mailto:contact@bbh.international" className="text-b-yellow hover:underline transition-all duration-300">
              contact@bbh.international
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/50 text-sm">
          &copy; 2026 BBH Ventures. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
