import ServiceCard from "./ServiceCard";

type Props = {
  setActive: (key: string) => void;
  search?: string;
};

const foodPackages = [
  { name: "Budget Package", price: "₱1,500", serves: "Serves 5–8", emoji: "🍚", description: "Rice, fried chicken, chopsuey, and drinks. Simple and filling for small groups." },
  { name: "Classic Filipino Package", price: "₱2,500", serves: "Serves 10–15", emoji: "🍽️", description: "Grilled pork, kare-kare, steamed rice, ensaladang talong, and desserts." },
  { name: "Boodle Fight Package", price: "₱3,800", serves: "Serves 15–20", emoji: "🍖", description: "Traditional boodle fight spread: lechon, grilled seafood, rice, and tropical fruits." },
  { name: "Premium Catering Package", price: "₱6,500", serves: "Serves 20–30", emoji: "👨‍🍳", description: "Full-service catering with on-site cook, buffet setup, and curated multi-course menu." },
];

export default function FoodPackages({ setActive, search = "" }: Props) {
  const q = search.toLowerCase();
  const filtered = foodPackages.filter(
    (s) => s.name.toLowerCase().includes(q) || s.description.toLowerCase().includes(q) || s.serves.toLowerCase().includes(q)
  );
  if (filtered.length === 0) return null;
  return (
    <section>
      <div className="flex items-center gap-2 mb-1">
        <span className="text-xl">🍽️</span>
        <h2 className="text-lg font-bold text-sky-800">Food Packages</h2>
      </div>
      <p className="text-sm text-gray-500 mb-4">Curated Filipino food packages for every group size and budget.</p>
      <div className="grid grid-cols-2 gap-5">
        {filtered.map((s) => (
          <ServiceCard key={s.name} emoji={s.emoji} name={s.name} price={s.price} sub={s.serves} description={s.description} onBook={() => setActive("book")} />
        ))}
      </div>
    </section>
  );
}
