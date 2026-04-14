import ServiceCard from "./ServiceCard";

type Props = {
  setActive: (key: string) => void;
  search?: string;
};

const accommodations = [
  { name: "Small Cottage", price: "₱1,200", capacity: "Up to 8 pax", emoji: "🏠", description: "Cozy small cottage perfect for small groups and families. Includes basic amenities." },
  { name: "Medium Cottage", price: "₱1,800", capacity: "Up to 15 pax", emoji: "🏡", description: "Spacious medium cottage ideal for mid-sized groups with extra seating area." },
  { name: "Large Cottage", price: "₱2,500", capacity: "Up to 25 pax", emoji: "🏕️", description: "Large open cottage with wide covered area, great for reunions and groups." },
  { name: "VIP Cottage", price: "₱4,500", capacity: "Up to 40 pax", emoji: "🌟", description: "Premium VIP cottage with exclusive area, private facilities, and priority service." },
];

export default function Accommodations({ setActive, search = "" }: Props) {
  const q = search.toLowerCase();
  const filtered = accommodations.filter(
    (s) => s.name.toLowerCase().includes(q) || s.description.toLowerCase().includes(q) || s.capacity.toLowerCase().includes(q)
  );
  if (filtered.length === 0) return null;
  return (
    <section>
      <div className="flex items-center gap-2 mb-1">
        <span className="text-xl">🏕️</span>
        <h2 className="text-lg font-bold text-sky-800">Room & Cottage Rentals</h2>
      </div>
      <p className="text-sm text-gray-500 mb-4">Choose a cottage that fits your group size and occasion.</p>
      <div className="grid grid-cols-2 gap-5">
        {filtered.map((s) => (
          <ServiceCard key={s.name} emoji={s.emoji} name={s.name} price={s.price} sub={s.capacity} description={s.description} onBook={() => setActive("book")} />
        ))}
      </div>
    </section>
  );
}
