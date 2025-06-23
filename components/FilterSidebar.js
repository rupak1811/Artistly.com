"use client"

import { X } from "lucide-react"

const categories = ["Singer", "Dancer", "DJ", "Speaker", "Comedian", "Magician", "Band", "Instrumentalist"]
const priceRanges = ["₹5,000 - ₹15,000", "₹15,000 - ₹30,000", "₹30,000 - ₹50,000", "₹50,000 - ₹1,00,000", "₹1,00,000+"]

export default function FilterSidebar({ filters, onFilterChange, onClearFilters }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        <button onClick={onClearFilters} className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
          <X className="h-4 w-4" />
          Clear All
        </button>
      </div>

      <div className="space-y-6">
        {/* Category Filter */}
        <div>
          <h4 className="font-medium text-gray-900 mb-3">Category</h4>
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={filters.category === category}
                  onChange={(e) => onFilterChange({ category: e.target.value })}
                  className="text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">{category}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Location Filter */}
        <div>
          <h4 className="font-medium text-gray-900 mb-3">Location</h4>
          <input
            type="text"
            placeholder="Enter city or state"
            value={filters.location}
            onChange={(e) => onFilterChange({ location: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Price Range Filter */}
        <div>
          <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
          <div className="space-y-2">
            {priceRanges.map((range) => (
              <label key={range} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="priceRange"
                  value={range}
                  checked={filters.priceRange === range}
                  onChange={(e) => onFilterChange({ priceRange: e.target.value })}
                  className="text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">{range}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
