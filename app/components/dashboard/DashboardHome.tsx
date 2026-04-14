// type Props = {
//   setActive: (key: string) => void;
// };

// const attractions = [
//   {
//     emoji: "🏊",
//     title: "Wave Pool",
//     description: "Enjoy our thrilling wave pool — perfect for all ages.",
//   },
//   {
//     emoji: "🏕️",
//     title: "Cottages",
//     description: "Cozy and spacious cottages available for day and overnight stays.",
//   },
//   {
//     emoji: "🎉",
//     title: "Event Venues",
//     description: "Host birthdays, reunions, and special events with us.",
//   },
//   {
//     emoji: "🍽️",
//     title: "Food & Dining",
//     description: "Delicious Filipino cuisine and refreshments served on-site.",
//   },
// ];

// const announcements = [
//   "🎊 Summer Season is now open! Book early to secure your spot.",
//   "🛠️ The kiddie pool will be under maintenance on April 20–21.",
//   "📣 New food packages are available — check Resort Services for details.",
// ];

// const promos = [
//   {
//     label: "Weekend Group Deal",
//     desc: "20% off for groups of 10 or more on weekends.",
//     badge: "LIMITED",
//   },
//   {
//     label: "Early Bird Promo",
//     desc: "Book 7 days in advance and get free pool access upgrade.",
//     badge: "HOT",
//   },
//   {
//     label: "Senior & PWD Discount",
//     desc: "10% discount on entrance fees for seniors and PWDs.",
//     badge: "ONGOING",
//   },
// ];

// export default function DashboardHome({ setActive }: Props) {
//   return (
//     <div className="space-y-6">
//       {/* Welcome Banner */}
//       <div className="bg-gradient-to-r from-sky-500 to-cyan-400 text-white p-6 rounded-xl shadow">
//         <h1 className="text-2xl font-bold mb-1">Welcome Back! 👋</h1>
//         <p className="text-sky-50 mb-4">
//           Ready for a splash? Plan your visit to Waterland Resort today.
//         </p>
//         <button
//           onClick={() => setActive("book")}
//           className="bg-white text-sky-600 font-semibold px-5 py-2 rounded-lg hover:bg-sky-50 transition-colors"
//         >
//           Book Now →
//         </button>
//       </div>

//       {/* Announcements */}
//       <div className="bg-yellow-50 border border-yellow-200 p-5 rounded-xl shadow">
//         <h2 className="text-lg font-bold text-yellow-700 mb-3">
//           📢 Announcements
//         </h2>
//         <ul className="space-y-2">
//           {announcements.map((msg, i) => (
//             <li key={i} className="text-sm text-yellow-800">
//               {msg}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Featured Attractions */}
//       <div>
//         <h2 className="text-lg font-bold text-gray-700 mb-3">
//           🌊 Featured Attractions
//         </h2>
//         <div className="grid grid-cols-2 gap-4">
//           {attractions.map((a) => (
//             <div
//               key={a.title}
//               className="bg-white p-5 rounded-xl shadow flex gap-4 items-start"
//             >
//               <span className="text-3xl">{a.emoji}</span>
//               <div>
//                 <h3 className="font-semibold text-gray-800">{a.title}</h3>
//                 <p className="text-sm text-gray-500">{a.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Available Promos */}
//       <div>
//         <h2 className="text-lg font-bold text-gray-700 mb-3">
//           🎁 Available Promos
//         </h2>
//         <div className="space-y-3">
//           {promos.map((promo) => (
//             <div
//               key={promo.label}
//               className="bg-white border border-sky-100 p-4 rounded-xl shadow flex justify-between items-center"
//             >
//               <div>
//                 <p className="font-semibold text-gray-800">{promo.label}</p>
//                 <p className="text-sm text-gray-500">{promo.desc}</p>
//               </div>
//               <span className="text-xs font-bold bg-sky-100 text-sky-700 px-2 py-1 rounded-full whitespace-nowrap">
//                 {promo.badge}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }















type Props = {
  setActive: (key: string) => void;
};

const attractions = [
  {
    emoji: "🏊",
    title: "Wave Pool",
    description: "Enjoy our thrilling wave pool — perfect for all ages.",
  },
  {
    emoji: "🏕️",
    title: "Cottages",
    description: "Cozy and spacious cottages available for day and overnight stays.",
  },
  {
    emoji: "🎉",
    title: "Event Venues",
    description: "Host birthdays, reunions, and special events with us.",
  },
  {
    emoji: "🍽️",
    title: "Food & Dining",
    description: "Delicious Filipino cuisine and refreshments served on-site.",
  },
];

const announcements = [
  "🎊 Summer Season is now open! Book early to secure your spot.",
  "🛠️ The kiddie pool will be under maintenance on April 20–21.",
  "📣 New food packages are available — check Resort Services for details.",
];

const promos = [
  {
    label: "Weekend Group Deal",
    desc: "20% off for groups of 10 or more on weekends.",
    badge: "LIMITED",
  },
  {
    label: "Early Bird Promo",
    desc: "Book 7 days in advance and get free pool access upgrade.",
    badge: "HOT",
  },
  {
    label: "Senior & PWD Discount",
    desc: "10% discount on entrance fees for seniors and PWDs.",
    badge: "ONGOING",
  },
];

export default function DashboardHome({ setActive }: Props) {
  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-sky-800 to-sky-600 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5 pointer-events-none" />
        <div className="relative z-10">
          <h1 className="text-2xl font-bold mb-2">Welcome Back! 👋</h1>
          <p className="text-sky-200 mb-6 max-w-md">
            Ready for a splash? Plan your visit to Waterland Resort today.
          </p>
          <button
            onClick={() => setActive("book")}
            className="bg-white text-sky-700 font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
          >
            Book Now →
          </button>
        </div>
      </div>

      {/* Announcements */}
      <div className="bg-white/80 backdrop-blur-md border border-amber-200 p-6 rounded-3xl shadow-lg">
        <h2 className="text-lg font-bold text-sky-800 mb-4">
          📢 Announcements
        </h2>
        <ul className="space-y-2">
          {announcements.map((msg, i) => (
            <li key={i} className="text-sm text-gray-600 leading-relaxed">
              {msg}
            </li>
          ))}
        </ul>
      </div>

      {/* Featured Attractions */}
      <div>
        <h2 className="text-lg font-bold text-sky-800 mb-4">
          🌊 Featured Attractions
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {attractions.map((a) => (
            <div
              key={a.title}
              className="bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-sky-100/60 flex gap-4 items-start"
            >
              <span className="text-3xl">{a.emoji}</span>
              <div>
                <h3 className="font-semibold text-sky-800">{a.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{a.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Available Promos */}
      <div>
        <h2 className="text-lg font-bold text-sky-800 mb-4">
          🎁 Available Promos
        </h2>
        <div className="space-y-3">
          {promos.map((promo) => (
            <div
              key={promo.label}
              className="bg-white/80 backdrop-blur-md border border-sky-100/60 p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex justify-between items-center"
            >
              <div>
                <p className="font-semibold text-sky-800">{promo.label}</p>
                <p className="text-sm text-gray-500 mt-1">{promo.desc}</p>
              </div>
              <span className="text-xs font-bold bg-sky-100 text-sky-700 px-3 py-1.5 rounded-full whitespace-nowrap">
                {promo.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
