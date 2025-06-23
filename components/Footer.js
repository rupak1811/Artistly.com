import Link from "next/link"
import { Music, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Music className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Artistly</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Connecting event planners with talented performing artists. Find the perfect entertainment for your events
              or showcase your talent to the world.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>hello@artistly.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/artists" className="text-gray-300 hover:text-white transition-colors">
                  Find Artists
                </Link>
              </li>
              <li>
                <Link href="/onboard" className="text-gray-300 hover:text-white transition-colors">
                  Join as Artist
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-300 hover:text-white transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/artists?category=Singer" className="text-gray-300 hover:text-white transition-colors">
                  Singers
                </Link>
              </li>
              <li>
                <Link href="/artists?category=Dancer" className="text-gray-300 hover:text-white transition-colors">
                  Dancers
                </Link>
              </li>
              <li>
                <Link href="/artists?category=DJ" className="text-gray-300 hover:text-white transition-colors">
                  DJs
                </Link>
              </li>
              <li>
                <Link href="/artists?category=Speaker" className="text-gray-300 hover:text-white transition-colors">
                  Speakers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Artistly. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
