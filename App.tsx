import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Vision from './components/Vision'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-b-background text-b-text font-sans antialiased">
      <Header />
      <Hero />
      <Features />
      <Vision />
      <Footer />
    </div>
  )
}
