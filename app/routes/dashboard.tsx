// import { Link } from "react-router";
// import { useState } from "react";
// import DashboardContent from "~/components/DashboardContent";
// import Header from "~/components/Header";

// export default function Dashboard() {
//   const [active, setActive] = useState("home");

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="fixed top-0 left-0 right-0 z-50">
//         <Header />
//       </div>

//       <div className="flex pt-20">
//         {/* SIDEBAR */}
//         <aside className="w-64 min-h-screen bg-white shadow-md p-6 flex flex-col justify-between">
//           <div>
//             <h2 className="text-xl font-bold text-sky-700 mb-6">
//               Customer Panel
//             </h2>
//             <nav className="space-y-2">
//               {[
//                 { key: "home", label: "Home" },
//                 { key: "book", label: "Book Reservation" },
//                 { key: "bookings", label: "My Bookings" },
//                 { key: "services", label: "Resort Services" },
//                 { key: "profile", label: "Profile" },
//               ].map(({ key, label }) => (
//                 <button
//                   key={key}
//                   onClick={() => setActive(key)}
//                   className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
//                     active === key
//                       ? "bg-sky-100 text-sky-700 font-semibold"
//                       : "text-gray-600 hover:bg-gray-100"
//                   }`}
//                 >
//                   {label}
//                 </button>
//               ))}
//             </nav>
//           </div>

//           <Link
//             to="/"
//             className="block px-4 py-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors mt-6"
//           >
//             Logout
//           </Link>
//         </aside>

//         {/* MAIN CONTENT */}
//         <DashboardContent active={active} setActive={setActive} />
//       </div>
//     </div>
//   );
// }










import { Link } from "react-router";
import { useState } from "react";
import DashboardContent from "~/components/DashboardContent";
import NavBar from "~/components/NavBar"; // Use NavBar instead of Header for consistency

export default function Dashboard() {
  const [active, setActive] = useState("home");

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-100">
      {/* Use the same NavBar as the landing page */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <NavBar />
      </div>

      <div className="flex pt-20">
        {/* SIDEBAR */}
        <aside className="w-64 min-h-screen bg-white/80 backdrop-blur-md shadow-xl border-r border-sky-100/60 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold text-sky-800 mb-6 tracking-wide">
              Customer Panel
            </h2>
            <nav className="space-y-2">
              {[
                { key: "home", label: "Home" },
                { key: "book", label: "Book Reservation" },
                { key: "bookings", label: "My Bookings" },
                { key: "services", label: "Resort Services" },
                { key: "profile", label: "Profile" },
              ].map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl transition-all duration-200 font-medium ${
                    active === key
                      ? "bg-sky-600 text-white shadow-md"
                      : "text-gray-600 hover:bg-sky-50 hover:text-sky-700"
                  }`}
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>

          <Link
            to="/"
            className="block px-4 py-2.5 rounded-xl text-red-500 border border-red-200 hover:bg-red-50 transition-all duration-200 text-center font-semibold mt-6"
          >
            Logout
          </Link>
        </aside>

        {/* MAIN CONTENT */}
        <DashboardContent active={active} setActive={setActive} />
      </div>
    </div>
  );
}
