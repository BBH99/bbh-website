import BravePigIcon from './icons/BravePigIcon'

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
      <div className="flex justify-center mb-8">
        <BravePigIcon className="h-32 w-32 md:h-40 md:w-40" />
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-b-dark leading-tight mb-6">
        Pioneering<br />
        the Next Wave<br />
        of Culture
      </h1>

      <p className="max-w-2xl mx-auto text-lg md:text-xl text-b-text mb-10">
        BBH is a technology-driven firm bringing creative financing and monetizing solutions to diverse IP. We use blockchain, metaverse, and AI to generate new financial opportunities to artists and investors alike.
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
