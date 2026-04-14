type Props = {
  setActive: (key: string) => void;
  search?: string;
};

const reservations = [
  { name: "Tables & Huts", price: "₱500–₱800", emoji: "⛱️", description: "Open-air nipa huts and picnic tables near the pool area. Great for casual day visits and small groups.", note: "Subject to availability" },
  { name: "Children's Pool Access", price: "₱150 / person", emoji: "🐬", description: "Safe and fun shallow pool designed for kids. Lifeguard on duty at all times. Perfect for toddlers and young children.", note: "Ages 12 and below" },
  { name: "Adult Pool Access", price: "₱250 / person", emoji: "🏊", description: "Full access to our main adult swimming pool and wave pool area. Includes lap pool and leisure zones.", note: "Ages 13 and above" },
];

export default function ReservationOptions({ setActive, search = "" }: Props) {
  const q = search.toLowerCase();
  const filtered = reservations.filter(
    (s) => s.name.toLowerCase().includes(q) || s.description.toLowerCase().includes(q) || s.note.toLowerCase().includes(q)
  );
  if (filtered.length === 0) return null;
  return (
    <section>
      <div className="flex items-center gap-2 mb-1">
        <span className="text-xl">🎟️</span>
        <h2 className="text-lg font-bold text-sky-800">Reservations</h2>
      </div>
      <p className="text-sm text-gray-500 mb-4">Reserve tables, huts, or pool access for your visit.</p>
      <div className="grid grid-cols-3 gap-5">
        {filtered.map((s) => (
          <div key={s.name} className="bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-sky-100/60 flex flex-col gap-3">
            <div className="h-32 bg-gradient-to-br from-sky-100 to-cyan-50 rounded-xl flex items-center justify-center text-5xl">{s.emoji}</div>
            <div className="flex-1">
              <h3 className="font-bold text-sky-800 text-base">{s.name}</h3>
              <span className="inline-block text-xs bg-sky-50 text-sky-600 border border-sky-200 rounded-full px-2.5 py-0.5 font-medium mt-1">{s.note}</span>
              <p className="text-sm text-gray-500 mt-2">{s.description}</p>
            </div>
            <div className="flex items-center justify-between mt-1">
              <span className="text-sky-600 font-bold">{s.price}</span>
              <button onClick={() => setActive("book")} className="bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-700 hover:to-sky-600 text-white text-sm px-5 py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 font-semibold">Book</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
