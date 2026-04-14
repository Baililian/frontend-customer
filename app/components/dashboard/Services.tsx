// type Props = {
//   setActive: (key: string) => void;
// };

// const services = [
//   {
//     name: "Cottage Rental",
//     price: "₱1,500",
//     emoji: "🏕️",
//     description:
//       "Enjoy a private cottage for the day. Options range from small to VIP. Perfect for families and groups.",
//   },
//   {
//     name: "Pool Access",
//     price: "₱300",
//     emoji: "🏊",
//     description:
//       "Full access to our wave pool and swimming areas. Includes the kiddie pool and lap pool.",
//   },
//   {
//     name: "Food Packages",
//     price: "₱2,500",
//     emoji: "🍽️",
//     description:
//       "Curated Filipino food packages for groups. Includes rice, grilled dishes, and desserts.",
//   },
//   {
//     name: "Event Reservation",
//     price: "₱5,000",
//     emoji: "🎉",
//     description:
//       "Reserve our function area for birthdays, reunions, and corporate events with dedicated staff.",
//   },
//   {
//     name: "Tables / Huts",
//     price: "₱800",
//     emoji: "⛱️",
//     description:
//       "Open-air huts and tables near the pool area. Great for picnics and casual day visits.",
//   },
// ];

// export default function Services({ setActive }: Props) {
//   return (
//     <div className="space-y-4">
//       <div>
//         <h1 className="text-xl font-bold text-gray-800">Resort Services</h1>
//         <p className="text-sm text-gray-500">
//           Explore what Waterland Resort has to offer.
//         </p>
//       </div>

//       <div className="grid grid-cols-2 gap-6">
//         {services.map((service) => (
//           <div
//             key={service.name}
//             className="bg-white p-5 rounded-xl shadow hover:shadow-md transition-shadow flex flex-col gap-3"
//           >
//             {/* Image Placeholder */}
//             <div className="h-36 bg-gradient-to-br from-sky-100 to-cyan-50 rounded-lg flex items-center justify-center text-5xl">
//               {service.emoji}
//             </div>

//             <div className="flex-1">
//               <h2 className="font-bold text-gray-800 text-base">
//                 {service.name}
//               </h2>
//               <p className="text-sm text-gray-500 mt-1">{service.description}</p>
//             </div>

//             <div className="flex items-center justify-between mt-1">
//               <span className="text-sky-600 font-bold text-lg">
//                 {service.price}
//               </span>
//               <button
//                 onClick={() => setActive("book")}
//                 className="bg-sky-600 text-white text-sm px-4 py-1.5 rounded-lg hover:bg-sky-700 transition-colors"
//               >
//                 Book
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
























type Props = {
  setActive: (key: string) => void;
};

const services = [
  {
    name: "Cottage Rental",
    price: "₱1,500",
    emoji: "🏕️",
    description:
      "Enjoy a private cottage for the day. Options range from small to VIP. Perfect for families and groups.",
  },
  {
    name: "Pool Access",
    price: "₱300",
    emoji: "🏊",
    description:
      "Full access to our wave pool and swimming areas. Includes the kiddie pool and lap pool.",
  },
  {
    name: "Food Packages",
    price: "₱2,500",
    emoji: "🍽️",
    description:
      "Curated Filipino food packages for groups. Includes rice, grilled dishes, and desserts.",
  },
  {
    name: "Event Reservation",
    price: "₱5,000",
    emoji: "🎉",
    description:
      "Reserve our function area for birthdays, reunions, and corporate events with dedicated staff.",
  },
  {
    name: "Tables / Huts",
    price: "₱800",
    emoji: "⛱️",
    description:
      "Open-air huts and tables near the pool area. Great for picnics and casual day visits.",
  },
];

export default function Services({ setActive }: Props) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-sky-800">Resort Services</h1>
        <p className="text-sm text-gray-500 mt-1">
          Explore what Waterland Resort has to offer.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {services.map((service) => (
          <div
            key={service.name}
            className="bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-sky-100/60 flex flex-col gap-3"
          >
            {/* Image Placeholder */}
            <div className="h-36 bg-gradient-to-br from-sky-100 to-cyan-50 rounded-xl flex items-center justify-center text-5xl">
              {service.emoji}
            </div>
            <div className="flex-1">
              <h2 className="font-bold text-sky-800 text-base">
                {service.name}
              </h2>
              <p className="text-sm text-gray-500 mt-1">{service.description}</p>
            </div>
            <div className="flex items-center justify-between mt-1">
              <span className="text-sky-600 font-bold text-lg">
                {service.price}
              </span>
              <button
                onClick={() => setActive("book")}
                className="bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-700 hover:to-sky-600 text-white text-sm px-5 py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 font-semibold"
              >
                Book
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
