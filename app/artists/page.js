"use client"

import { useState, useEffect } from "react"
import ArtistCard from "@/components/ArtistCard"
import FilterSidebar from "@/components/FilterSidebar"
import { Search, Filter, Grid, List } from "lucide-react"
import { artistsData } from "@/data/artists"

export default function ArtistsPage() {
  const [artists, setArtists] = useState(artistsData)
  const [filteredArtists, setFilteredArtists] = useState(artistsData)
  const [filters, setFilters] = useState({
    category: "",
    location: "",
    priceRange: "",
    search: "",
  })
  const [viewMode, setViewMode] = useState("grid")
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    let filtered = artists

    // Apply search filter
    if (filters.search) {
      filtered = filtered.filter(
        (artist) =>
          artist.name.toLowerCase().includes(filters.search.toLowerCase()) ||
          artist.bio.toLowerCase().includes(filters.search.toLowerCase()),
      )
    }

    // Apply category filter
    if (filters.category) {
      filtered = filtered.filter((artist) => artist.categories.includes(filters.category))
    }

    // Apply location filter
    if (filters.location) {
      filtered = filtered.filter((artist) => artist.location.toLowerCase().includes(filters.location.toLowerCase()))
    }

    // Apply price range filter
    if (filters.priceRange) {
      filtered = filtered.filter((artist) => artist.priceRange === filters.priceRange)
    }

    setFilteredArtists(filtered)
  }, [filters, artists])

  const handleFilterChange = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }))
  }

  const clearFilters = () => {
    setFilters({
      category: "",
      location: "",
      priceRange: "",
      search: "",
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Find Artists</h1>
              <p className="text-gray-600 mt-1">Discover talented performers for your events</p>
            </div>

            {/* Search and View Controls */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search artists..."
                  value={filters.search}
                  onChange={(e) => handleFilterChange({ search: e.target.value })}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                />
              </div>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <Filter className="h-4 w-4" />
                Filters
              </button>

              <div className="hidden sm:flex items-center gap-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg ${viewMode === "grid" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"}`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg ${viewMode === "list" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-64 ${showFilters ? "block" : "hidden lg:block"}`}>
            <FilterSidebar filters={filters} onFilterChange={handleFilterChange} onClearFilters={clearFilters} />
          </div>

          {/* Artists Grid/List */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                {filteredArtists.length} artist{filteredArtists.length !== 1 ? "s" : ""} found
              </p>
            </div>

            {filteredArtists.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No artists found matching your criteria.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div
                className={`${
                  viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"
                }`}
              >
                {filteredArtists.map((artist) => (
                  <ArtistCard key={artist.id} artist={artist} viewMode={viewMode} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
