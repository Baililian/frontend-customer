import { useState } from "react";
import DashboardHome from "./dashboard/DashboardHome";
import Reservation from "./dashboard/Reservation";
import MyBookings from "./dashboard/MyBookings";
import Services from "./dashboard/Services";
import Profile from "./dashboard/Profile";
import Transactions from "./dashboard/Transactions";

type Props = {
  active: string;
  setActive: (key: string) => void;
};

export default function DashboardContent({ active, setActive }: Props) {
  const [bookings, setBookings] = useState<any[]>([]);

  const handleBooking = (formData: Record<string, any>) => {
    const newBooking = {
      id: Date.now(),
      bookingTypes: formData.bookingTypes,
      date: formData.date,
      time: formData.time,
      adults: formData.adults,
      kids: formData.kids,
      cottage: formData.cottage,
      foodPackage: formData.foodPackage,
      tableHut: formData.tableHut,
      poolChildPax: formData.poolChildPax,
      poolAdultPax: formData.poolAdultPax,
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
      {active === "book" && <Reservation handleBooking={handleBooking} setActive={setActive} />}
      {active === "bookings" && <MyBookings bookings={bookings} cancelBooking={cancelBooking} />}
      {active === "services" && <Services setActive={setActive} />}
      {active === "transactions" && <Transactions bookings={bookings} />}
      {active === "profile" && <Profile />}
    </main>
  );
}
