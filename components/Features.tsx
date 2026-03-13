import { FilmIcon, TVIcon, ArtIcon } from './icons/CategoryIcons'

const features = [
  {
    title: 'Cinematic Ventures',
    icon: FilmIcon,
    description: 'We invest in groundbreaking films from emerging and established filmmakers, ensuring unique stories reach the global stage.',
  },
  {
    title: 'Episodic Content',
    icon: TVIcon,
    description: 'From binge-worthy series to compelling documentaries, we fund television projects that captivate audiences and push creative boundaries.',
  },
  {
    title: 'Digital & Fine Art',
    icon: ArtIcon,
    description: 'We empower artists by funding innovative art projects, from interactive digital installations to timeless physical collections.',
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-b-dark mb-4">Fueling Creative Genius</h2>
          <p className="max-w-2xl mx-auto text-b-text text-lg">
            BBH is dedicated to a diverse portfolio of entertainment assets. We believe in the power of great content, no matter the medium.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map(({ title, icon: Icon, description }) => (
            <div
              key={title}
              className="bg-white rounded-2xl shadow-lg border border-b-pink p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-b-pink/30 rounded-full flex items-center justify-center mb-6">
                <Icon className="h-7 w-7 text-b-pink" />
              </div>
              <h3 className="text-xl font-semibold text-b-dark mb-3">{title}</h3>
              <p className="text-b-text">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
