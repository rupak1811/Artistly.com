import { Star, MapPin } from "lucide-react"

const featuredArtists = [
  {
    id: 1,
    name: "Priya Sharma",
    category: "Singer",
    location: "Mumbai, Maharashtra",
    rating: 4.9,
    reviews: 45,
    image: "/images/singer-1.jpg",
    priceRange: "₹15,000 - ₹30,000",
  },
  {
    id: 2,
    name: "Rahul Dance Crew",
    category: "Dancer",
    location: "Delhi, NCR",
    rating: 4.8,
    reviews: 32,
    image: "/images/dancer-1.jpg",
    priceRange: "₹20,000 - ₹40,000",
  },
  {
    id: 3,
    name: "DJ Arjun",
    category: "DJ",
    location: "Bangalore, Karnataka",
    rating: 4.9,
    reviews: 28,
    image: "/images/dj-1.jpg",
    priceRange: "₹25,000 - ₹50,000",
  },
]

export default function FeaturedArtists() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Artists</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our top-rated performers who consistently deliver exceptional experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArtists.map((artist) => (
            <div
              key={artist.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={artist.image || "/placeholder.svg"}
                  alt={artist.name}
                  className="w-full h-48 object-cover"
                  crossOrigin="anonymous"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {artist.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-900">{artist.rating}</span>
                    <span className="text-sm text-gray-500">({artist.reviews})</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{artist.name}</h3>
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{artist.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-900">{artist.priceRange}</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Ask for Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
