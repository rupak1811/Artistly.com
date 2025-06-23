import Link from "next/link"
import { Search, Star, Users, Calendar } from "lucide-react"

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 overflow-hidden min-h-[600px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Find Perfect Artists for
            <span className="block text-yellow-300">Your Events</span>
          </h1>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Connect with talented performers, book amazing artists, and make your events unforgettable. From singers to
            dancers, speakers to DJs - find them all here.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/artists"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              <Search className="h-5 w-5" />
              Explore Artists
            </Link>
            <Link
              href="/onboard"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Join as Artist
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-yellow-300" />
              </div>
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-gray-200">Talented Artists</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Calendar className="h-8 w-8 text-yellow-300" />
              </div>
              <div className="text-3xl font-bold text-white">1000+</div>
              <div className="text-gray-200">Events Booked</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="h-8 w-8 text-yellow-300" />
              </div>
              <div className="text-3xl font-bold text-white">4.9</div>
              <div className="text-gray-200">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
