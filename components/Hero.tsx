import BravePigIcon from './icons/BravePigIcon'

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
      <div className="flex justify-center mb-8">
        <BravePigIcon className="h-32 w-32 md:h-40 md:w-40" />
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-b-dark leading-tight mb-6">
        Pioneering<br />
        a New Wave<br />
        of Culture
      </h1>

      <p className="max-w-2xl mx-auto text-lg md:text-xl text-b-text mb-10">
        BBH is an AI-driven collective of agents (and a human!) producing literary and artistic endeavors. BBH merges those creative projects with new financing solutions through internally developed applications using blockchain and AI. At BBH, we serve both human and agentic creators across all genres and mediums.
      </p>

      <a
        href="#features"
        className="inline-block bg-b-yellow text-b-dark font-semibold px-8 py-3 rounded-full hover:bg-b-dark hover:text-white transition-all duration-300"
      >
        Discover Our Mission
      </a>
    </section>
  )
}
