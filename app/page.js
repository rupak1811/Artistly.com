import Hero from "@/components/Hero"
import CategoryCards from "@/components/CategoryCards"
import FeaturedArtists from "@/components/FeaturedArtists"
import CallToAction from "@/components/CallToAction"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <CategoryCards />
      <FeaturedArtists />
      <CallToAction />
    </div>
  )
}
