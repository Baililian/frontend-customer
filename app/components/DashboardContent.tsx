// import { useState } from "react";
// import DashboardHome from "./dashboard/DashboardHome";
// import Reservation from "./dashboard/Reservation";
// import MyBookings from "./dashboard/MyBookings";
// import Services from "./dashboard/Services";
// import Profile from "./dashboard/Profile";

// type Props = {
//   active: string;
//   setActive: (key: string) => void;
// };

// export default function DashboardContent({ active, setActive }: Props) {
//   const [bookings, setBookings] = useState<any[]>([]);

//   const handleBooking = (formData: Record<string, any>) => {
//     const newBooking = {
//       id: Date.now(),
//       date: formData.date,
//       time: formData.time,
//       adults: formData.adults,
//       kids: formData.kids,
//       cottage: formData.cottage,
//       notes: formData.notes,
//       status: "Pending",
//     };
//     setBookings([...bookings, newBooking]);
//   };

//   const cancelBooking = (id: number) => {
//     setBookings(bookings.filter((b) => b.id !== id));
//   };

//   return (
//     <main className="flex-1 p-8 space-y-6">
//       {active === "home" && <DashboardHome setActive={setActive} />}
//       {active === "book" && (
//         <Reservation handleBooking={handleBooking} setActive={setActive} />
//       )}
//       {active === "bookings" && (
//         <MyBookings bookings={bookings} cancelBooking={cancelBooking} />
//       )}
//       {active === "services" && <Services setActive={setActive} />}
//       {active === "profile" && <Profile />}
//     </main>
//   );
// }












import { useState } from "react";
import DashboardHome from "./dashboard/DashboardHome";
import Reservation from "./dashboard/Reservation";
import MyBookings from "./dashboard/MyBookings";
import Services from "./dashboard/Services";
import Profile from "./dashboard/Profile";

type Props = {
  active: string;
  setActive: (key: string) => void;
};

export default function DashboardContent({ active, setActive }: Props) {
  const [bookings, setBookings] = useState<any[]>([]);

  const handleBooking = (formData: Record<string, any>) => {
    const newBooking = {
      id: Date.now(),
      date: formData.date,
      time: formData.time,
      adults: formData.adults,
      kids: formData.kids,
      cottage: formData.cottage,
      notes: formData.notes,
      status: "Pending",
    };
    setBookings([...bookings, newBooking]);
  };

  const cancelBooking = (id: number) => {
    setBookings(bookings.filter((b) => b.id !== id));
  };

  return (
    <main className="flex-1 p-8 space-y-6 max-w-5xl">
      {active === "home" && <DashboardHome setActive={setActive} />}
      {active === "book" && (
        <Reservation handleBooking={handleBooking} setActive={setActive} />
      )}
      {active === "bookings" && (
        <MyBookings bookings={bookings} cancelBooking={cancelBooking} />
      )}
      {active === "services" && <Services setActive={setActive} />}
      {active === "profile" && <Profile />}
    </main>
  );
}
