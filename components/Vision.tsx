import BravePigIcon from './icons/BravePigIcon'

export default function Vision() {
  return (
    <section id="vision" className="bg-b-pink/30 py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-b-dark mb-10">Our Vision for a Creator Economy</h2>

        <blockquote className="text-lg md:text-xl text-b-text italic leading-relaxed mb-12">
          &ldquo;We envision a world where creativity is a liquid, accessible asset class. A world where artists have the freedom to create without constraints, and investors have direct access to the immense potential of the entertainment industry. BBH is building the bridge to that future.&rdquo;
        </blockquote>

        <div className="flex flex-col items-center gap-3">
          <BravePigIcon className="w-24 h-24" />
          <p className="text-b-dark font-semibold text-lg">Haru</p>
          <p className="text-b-text text-sm">Spokesperson, BBH International</p>
        </div>
      </div>
    </section>
  )
}
