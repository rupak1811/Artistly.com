import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function CallToAction() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Find Your Perfect Artist?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of event planners who trust Artistly to find amazing talent for their events
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/artists"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              Browse Artists
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/onboard"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Join as Artist
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-blue-100">
              <CheckCircle className="h-5 w-5" />
              <span>Verified Artists</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-blue-100">
              <CheckCircle className="h-5 w-5" />
              <span>Secure Booking</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-blue-100">
              <CheckCircle className="h-5 w-5" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
