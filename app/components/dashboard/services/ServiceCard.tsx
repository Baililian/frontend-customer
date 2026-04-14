type CardProps = {
  emoji: string;
  name: string;
  price: string;
  description: string;
  sub?: string;
  onBook: () => void;
};

export default function ServiceCard({ emoji, name, price, description, sub, onBook }: CardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-sky-100/60 flex flex-col gap-3">
      <div className="h-32 bg-gradient-to-br from-sky-100 to-cyan-50 rounded-xl flex items-center justify-center text-5xl">
        {emoji}
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-sky-800 text-base">{name}</h3>
        {sub && <p className="text-xs text-sky-500 font-medium mt-0.5">{sub}</p>}
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>
      <div className="flex items-center justify-between mt-1">
        <span className="text-sky-600 font-bold text-lg">{price}</span>
        <button
          onClick={onBook}
          className="bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-700 hover:to-sky-600 text-white text-sm px-5 py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 font-semibold"
        >
          Book
        </button>
      </div>
    </div>
  );
}
