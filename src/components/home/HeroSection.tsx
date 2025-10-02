import Container from '../layout/Container'
import Sidebar from '../ui/navigation/sidebar'
import HeroBanner from './HeroBanner'

const HeroSection = () => {
  return (
    <section className="px-0   border-t-[0.5px] bp-amber-950">
        <Container>
          <div className="grid md:grid-cols-[220px_1fr] gap-8">
            {/* Categories Sidebar */}
            <Sidebar />

            {/* Hero Banner */}
            <HeroBanner />
          </div>
        </Container>
      </section>
  )
}

export default HeroSection