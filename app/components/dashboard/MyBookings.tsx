// type Booking = {
//   id: number;
//   date: string;
//   time: string;
//   adults: string;
//   kids: string;
//   cottage: string;
//   notes: string;
//   status: string;
// };

// type Props = {
//   bookings: Booking[];
//   cancelBooking: (id: number) => void;
// };

// const statusColors: Record<string, string> = {
//   Pending: "bg-yellow-100 text-yellow-700",
//   Confirmed: "bg-green-100 text-green-700",
//   Cancelled: "bg-red-100 text-red-600",
// };

// export default function MyBookings({ bookings, cancelBooking }: Props) {
//   return (
//     <div className="bg-white p-6 rounded-xl shadow">
//       <h1 className="text-xl font-bold mb-1 text-gray-800">My Bookings</h1>
//       <p className="text-sm text-gray-500 mb-5">
//         View and manage your resort reservations.
//       </p>

//       {bookings.length === 0 ? (
//         <div className="text-center py-16 text-gray-400">
//           <p className="text-4xl mb-3">📋</p>
//           <p className="font-medium">No bookings yet.</p>
//           <p className="text-sm">Go to "Book Reservation" to get started!</p>
//         </div>
//       ) : (
//         <div className="space-y-4">
//           {bookings.map((b) => (
//             <div
//               key={b.id}
//               className="border border-gray-100 p-5 rounded-xl shadow-sm bg-gray-50 flex justify-between items-start"
//             >
//               <div className="space-y-1 text-sm text-gray-700">
//                 <p>
//                   <span className="font-semibold text-gray-500">Booking ID:</span>{" "}
//                   #{b.id}
//                 </p>
//                 <p>
//                   <span className="font-semibold text-gray-500">Date:</span>{" "}
//                   {b.date} at {b.time}
//                 </p>
//                 <p>
//                   <span className="font-semibold text-gray-500">Cottage:</span>{" "}
//                   {b.cottage}
//                 </p>
//                 <p>
//                   <span className="font-semibold text-gray-500">Guests:</span>{" "}
//                   {b.adults} adult(s), {b.kids || "0"} kid(s)
//                 </p>
//                 {b.notes && (
//                   <p>
//                     <span className="font-semibold text-gray-500">Notes:</span>{" "}
//                     {b.notes}
//                   </p>
//                 )}
//                 <span
//                   className={`inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-semibold ${
//                     statusColors[b.status] ?? "bg-gray-100 text-gray-600"
//                   }`}
//                 >
//                   {b.status}
//                 </span>
//               </div>

//               {b.status !== "Cancelled" && (
//                 <button
//                   onClick={() => cancelBooking(b.id)}
//                   className="text-sm text-red-500 border border-red-200 px-3 py-1 rounded-lg hover:bg-red-50 transition-colors"
//                 >
//                   Cancel
//                 </button>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }















type Booking = {
  id: number;
  date: string;
  time: string;
  adults: string;
  kids: string;
  cottage: string;
  notes: string;
  status: string;
};

type Props = {
  bookings: Booking[];
  cancelBooking: (id: number) => void;
};

const statusColors: Record<string, string> = {
  Pending: "bg-amber-100 text-amber-700",
  Confirmed: "bg-emerald-100 text-emerald-700",
  Cancelled: "bg-red-100 text-red-600",
};

export default function MyBookings({ bookings, cancelBooking }: Props) {
  return (
    <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-sky-100/60">
      <h1 className="text-xl font-bold mb-1 text-sky-800">My Bookings</h1>
      <p className="text-sm text-gray-500 mb-6">
        View and manage your resort reservations.
      </p>

      {bookings.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <p className="text-5xl mb-4">📋</p>
          <p className="font-semibold text-gray-500">No bookings yet.</p>
          <p className="text-sm mt-1">Go to "Book Reservation" to get started!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {bookings.map((b) => (
            <div
              key={b.id}
              className="border border-sky-100/60 p-5 rounded-2xl shadow-md bg-sky-50/40 flex justify-between items-start hover:shadow-lg transition-all duration-200"
            >
              <div className="space-y-1 text-sm text-gray-700">
                <p>
                  <span className="font-semibold text-sky-700">Booking ID:</span>{" "}
                  #{b.id}
                </p>
                <p>
                  <span className="font-semibold text-sky-700">Date:</span>{" "}
                  {b.date} at {b.time}
                </p>
                <p>
                  <span className="font-semibold text-sky-700">Cottage:</span>{" "}
                  {b.cottage}
                </p>
                <p>
                  <span className="font-semibold text-sky-700">Guests:</span>{" "}
                  {b.adults} adult(s), {b.kids || "0"} kid(s)
                </p>
                {b.notes && (
                  <p>
                    <span className="font-semibold text-sky-700">Notes:</span>{" "}
                    {b.notes}
                  </p>
                )}
                <span
                  className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold ${
                    statusColors[b.status] ?? "bg-gray-100 text-gray-600"
                  }`}
                >
                  {b.status}
                </span>
              </div>

              {b.status !== "Cancelled" && (
                <button
                  onClick={() => cancelBooking(b.id)}
                  className="text-sm text-red-500 border border-red-200 px-4 py-2 rounded-xl hover:bg-red-50 transition-all duration-200 font-medium"
                >
                  Cancel
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
