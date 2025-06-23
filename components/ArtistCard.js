import { Star, MapPin, MessageCircle } from "lucide-react"

export default function ArtistCard({ artist, viewMode = "grid" }) {
  if (viewMode === "list") {
    return (
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
        <div className="flex items-center gap-6">
          <img
            src={artist.image || "/placeholder.svg"}
            alt={artist.name}
            className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
            crossOrigin="anonymous"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{artist.name}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {artist.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    {artist.rating} ({artist.reviews} reviews)
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {artist.categories.map((category) => (
                    <span
                      key={category}
                      className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm line-clamp-2">{artist.bio}</p>
              </div>
              <div className="text-right flex-shrink-0 ml-4">
                <div className="text-lg font-semibold text-gray-900 mb-2">{artist.priceRange}</div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  Ask for Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
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
          <div className="flex flex-wrap gap-1">
            {artist.categories.slice(0, 2).map((category) => (
              <span key={category} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                {category}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-gray-900">{artist.rating}</span>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-2">{artist.name}</h3>

        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{artist.location}</span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{artist.bio}</p>

        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-gray-900">{artist.priceRange}</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <MessageCircle className="h-4 w-4" />
            Ask for Quote
          </button>
        </div>
      </div>
    </div>
  )
}
