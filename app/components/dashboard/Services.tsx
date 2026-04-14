import { useState } from "react";
import Accommodations from "./services/Accomodations";
import FoodPackages from "./services/FoodPackages";
import ReservationOptions from "./services/ReservationOptions";

type Props = {
  setActive: (key: string) => void;
};

const categories = [
  { key: "cottage", label: "🏕️ Cottages" },
  { key: "food", label: "🍽️ Food" },
  { key: "reservations", label: "🎟️ Reservations" },
];

export default function Services({ setActive }: Props) {
  const [search, setSearch] = useState("");
  // Multi-select: empty array = show all (same as "All")
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (key: string) => {
    setActiveFilters((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const showAll = activeFilters.length === 0;
  const showCottage = showAll || activeFilters.includes("cottage");
  const showFood = showAll || activeFilters.includes("food");
  const showReservations = showAll || activeFilters.includes("reservations");

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-sky-800">Resort Services</h1>
        <p className="text-sm text-gray-500 mt-1">Explore everything Waterland Resort has to offer.</p>
      </div>

      {/* Search + Filter bar */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Search */}
        <div className="relative flex-1">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-base pointer-events-none">🔍</span>
          <input
            type="text"
            placeholder="Search services..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white/70 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 outline-none transition-all duration-200 text-gray-800 placeholder-gray-400 text-sm"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-lg leading-none"
            >×</button>
          )}
        </div>

        {/* Multi-select filter buttons */}
        <div className="flex gap-2 flex-wrap items-center">
          {/* All button — clears filters */}
          <button
            onClick={() => setActiveFilters([])}
            className={`px-4 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200 whitespace-nowrap ${
              showAll
                ? "bg-sky-600 text-white border-sky-600 shadow-md"
                : "text-gray-600 border-gray-200 bg-white/70 hover:bg-sky-50 hover:border-sky-300"
            }`}
          >
            All
          </button>

          {categories.map((cat) => {
            const active = activeFilters.includes(cat.key);
            return (
              <button
                key={cat.key}
                onClick={() => toggleFilter(cat.key)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 ${
                  active
                    ? "bg-sky-600 text-white border-sky-600 shadow-md"
                    : "text-gray-600 border-gray-200 bg-white/70 hover:bg-sky-50 hover:border-sky-300"
                }`}
              >
                {active && <span className="text-xs leading-none">✓</span>}
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active filter chips */}
      {(search || !showAll) && (
        <div className="flex items-center gap-2 text-sm text-sky-700 flex-wrap">
          <span>Showing:</span>
          {activeFilters.map((f) => (
            <span key={f} className="bg-sky-100 px-2.5 py-0.5 rounded-full font-medium">
              {categories.find((c) => c.key === f)?.label}
            </span>
          ))}
          {search && (
            <span className="bg-sky-100 px-2.5 py-0.5 rounded-full font-medium">
              "{search}"
            </span>
          )}
          <button
            onClick={() => { setSearch(""); setActiveFilters([]); }}
            className="text-xs text-gray-400 hover:text-red-500 underline ml-1"
          >
            Clear all
          </button>
        </div>
      )}

      {/* Sections */}
      {showCottage && <Accommodations setActive={setActive} search={search} />}
      {showFood && <FoodPackages setActive={setActive} search={search} />}
      {showReservations && <ReservationOptions setActive={setActive} search={search} />}

      {/* Empty state */}
      {search && !showCottage && !showFood && !showReservations && (
        <div className="text-center py-16 text-gray-400">
          <p className="text-4xl mb-3">🔍</p>
          <p className="font-semibold text-gray-500">No results for "{search}"</p>
          <p className="text-sm mt-1">Try a different keyword or clear the filter.</p>
        </div>
      )}
    </div>
  );
}
