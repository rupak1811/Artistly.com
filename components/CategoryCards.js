import Link from "next/link"
import { Mic, Music, Users, MessageSquare } from "lucide-react"

const categories = [
  {
    name: "Singers",
    description: "Professional vocalists for all genres and events",
    icon: Mic,
    color: "bg-pink-500",
    count: "150+ Artists",
    href: "/artists?category=Singer",
  },
  {
    name: "Dancers",
    description: "Choreographers and performers for every style",
    icon: Users,
    color: "bg-purple-500",
    count: "120+ Artists",
    href: "/artists?category=Dancer",
  },
  {
    name: "DJs",
    description: "Music mixers and party entertainers",
    icon: Music,
    color: "bg-blue-500",
    count: "80+ Artists",
    href: "/artists?category=DJ",
  },
  {
    name: "Speakers",
    description: "Motivational and keynote speakers",
    icon: MessageSquare,
    color: "bg-green-500",
    count: "60+ Artists",
    href: "/artists?category=Speaker",
  },
]

export default function CategoryCards() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find the perfect artist for your event from our diverse categories of talented performers
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <Link
                key={category.name}
                href={category.href}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div
                    className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{category.count}</span>
                    <span className="text-blue-600 font-medium group-hover:text-blue-700">Explore →</span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
