import { useState } from "react";

type Booking = {
  id: number;
  date: string;
  time: string;
  adults: string;
  kids: string;
  cottage: string;
  foodPackage: string;
  tableHut: string;
  poolChildPax: string;
  poolAdultPax: string;
  bookingTypes: string[];
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

const bookingTypeLabels: Record<string, string> = {
  cottage: "🏕️ Room / Cottage",
  food: "🍽️ Food Package",
  table: "⛱️ Tables & Huts",
  pool_child: "🐬 Children's Pool",
  pool_adult: "🏊 Adult Pool",
};

const paymentMethods = [
  { key: "gcash", label: "GCash", emoji: "📱" },
  { key: "maya", label: "Maya", emoji: "💳" },
  { key: "bank", label: "Bank Transfer", emoji: "🏦" },
  { key: "cash", label: "Cash on Site", emoji: "💵" },
  { key: "card", label: "Credit / Debit Card", emoji: "💳" },
];

function getBookingDetails(b: Booking) {
  const details: { label: string; value: string }[] = [];
  if (b.bookingTypes.includes("cottage") && b.cottage)
    details.push({ label: "Cottage", value: b.cottage });
  if (b.bookingTypes.includes("food") && b.foodPackage)
    details.push({ label: "Package", value: b.foodPackage });
  if (b.bookingTypes.includes("table") && b.tableHut)
    details.push({ label: "Table/Hut", value: b.tableHut });
  if (b.bookingTypes.includes("pool_child") && b.poolChildPax)
    details.push({ label: "Children Swimmers", value: `${b.poolChildPax} pax` });
  if (b.bookingTypes.includes("pool_adult") && b.poolAdultPax)
    details.push({ label: "Adult Swimmers", value: `${b.poolAdultPax} pax` });
  return details;
}

const hasGuestCount = (types: string[]) =>
  types.some((t) => !["pool_child", "pool_adult"].includes(t));

const inputBase =
  "w-full px-4 py-3 rounded-xl border border-gray-200 bg-sky-50/40 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 outline-none transition-all duration-200 text-gray-800 placeholder-gray-400";

function PaymentModal({
  booking,
  onClose,
}: {
  booking: Booking;
  onClose: () => void;
}) {
  const [selectedMethod, setSelectedMethod] = useState("");
  const [referenceNo, setReferenceNo] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!selectedMethod) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl border border-sky-100 w-full max-w-md mx-4 overflow-hidden">
        {/* Modal header */}
        <div className="bg-gradient-to-r from-sky-800 to-sky-600 px-6 py-5 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-white">Make a Payment</h2>
            <p className="text-sky-200 text-xs mt-0.5">Booking #{booking.id}</p>
          </div>
          <button
            onClick={onClose}
            className="text-sky-200 hover:text-white text-2xl leading-none transition-colors"
          >
            ×
          </button>
        </div>

        <div className="p-6 space-y-5">
          {/* Booking summary */}
          <div className="bg-sky-50 rounded-2xl p-4 border border-sky-100 text-sm space-y-1">
            <div className="flex flex-wrap gap-1.5 items-center mb-2">
              {booking.bookingTypes.map((type) => (
                <span
                  key={type}
                  className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-100 text-sky-700 border border-sky-200"
                >
                  {bookingTypeLabels[type] ?? type}
                </span>
              ))}
            </div>
            <p className="text-gray-600">
              <span className="font-semibold text-sky-700">Date:</span> {booking.date} at {booking.time}
            </p>
            {hasGuestCount(booking.bookingTypes) && (
              <p className="text-gray-600">
                <span className="font-semibold text-sky-700">Guests:</span> {booking.adults} adult(s), {booking.kids || "0"} kid(s)
              </p>
            )}
          </div>

          {/* Mode of payment */}
          <div>
            <p className="text-sm font-bold text-sky-800 mb-3">Select Mode of Payment</p>
            <div className="grid grid-cols-2 gap-2">
              {paymentMethods.map((m) => (
                <button
                  key={m.key}
                  onClick={() => setSelectedMethod(m.key)}
                  className={`flex items-center gap-2.5 px-4 py-3 rounded-xl border font-medium text-sm transition-all duration-200 ${
                    selectedMethod === m.key
                      ? "bg-sky-600 text-white border-sky-600 shadow-md"
                      : "bg-white text-gray-700 border-gray-200 hover:border-sky-300 hover:bg-sky-50"
                  }`}
                >
                  <span className="text-lg">{m.emoji}</span>
                  <span>{m.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Instructions */}
          {selectedMethod === "gcash" && (
            <div className="p-4 bg-sky-50 rounded-xl border border-sky-100 text-sm text-sky-800 space-y-1">
              <p className="font-semibold">GCash Instructions</p>
              <p>Send to: <strong>0917-XXX-XXXX</strong> (Waterland Resort)</p>
            </div>
          )}
          {selectedMethod === "maya" && (
            <div className="p-4 bg-sky-50 rounded-xl border border-sky-100 text-sm text-sky-800 space-y-1">
              <p className="font-semibold">Maya Instructions</p>
              <p>Send to: <strong>0999-XXX-XXXX</strong> (Waterland Resort)</p>
            </div>
          )}
          {selectedMethod === "bank" && (
            <div className="p-4 bg-sky-50 rounded-xl border border-sky-100 text-sm text-sky-800 space-y-1">
              <p className="font-semibold">Bank Transfer Details</p>
              <p>Bank: <strong>BDO / BPI</strong> · Acct: <strong>1234-5678-9012</strong></p>
            </div>
          )}
          {selectedMethod === "cash" && (
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 text-sm text-emerald-800">
              <p className="font-semibold">Cash on Site</p>
              <p className="mt-1">Pay at the resort cashier on the day of your visit.</p>
            </div>
          )}
          {selectedMethod === "card" && (
            <div className="p-4 bg-sky-50 rounded-xl border border-sky-100 text-sm text-sky-800">
              <p className="font-semibold">Credit / Debit Card</p>
              <p className="mt-1">Visa and Mastercard accepted at the resort reception.</p>
            </div>
          )}

          {/* Reference number */}
          {["gcash", "maya", "bank"].includes(selectedMethod) && (
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700">Reference / Transaction Number</label>
              <input
                type="text"
                placeholder="Enter your reference number"
                value={referenceNo}
                onChange={(e) => setReferenceNo(e.target.value)}
                className={inputBase}
              />
            </div>
          )}

          {/* Submit */}
          {submitted ? (
            <div className="w-full py-4 rounded-xl font-bold text-center bg-emerald-500 text-white text-base">
              ✅ Payment Submitted!
            </div>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!selectedMethod}
              className={`w-full py-4 rounded-xl font-bold text-base transition-all duration-200 ${
                !selectedMethod
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-700 hover:to-sky-600 text-white shadow-lg hover:shadow-xl"
              }`}
            >
              Submit Payment
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function MyBookings({ bookings, cancelBooking }: Props) {
  const [payingBooking, setPayingBooking] = useState<Booking | null>(null);

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
          {bookings.map((b) => {
            const details = getBookingDetails(b);
            return (
              <div
                key={b.id}
                className="border border-sky-100/60 p-5 rounded-2xl shadow-md bg-sky-50/40 flex justify-between items-start hover:shadow-lg transition-all duration-200"
              >
                <div className="space-y-1 text-sm text-gray-700">
                  <p>
                    <span className="font-semibold text-sky-700">Booking ID:</span>{" "}
                    #{b.id}
                  </p>

                  <div className="flex flex-wrap gap-1.5 items-center">
                    <span className="font-semibold text-sky-700">Type:</span>
                    {b.bookingTypes.map((type) => (
                      <span
                        key={type}
                        className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-100 text-sky-700 border border-sky-200"
                      >
                        {bookingTypeLabels[type] ?? type}
                      </span>
                    ))}
                  </div>

                  <p>
                    <span className="font-semibold text-sky-700">Date:</span>{" "}
                    {b.date} at {b.time}
                  </p>

                  {details.map((d) => (
                    <p key={d.label}>
                      <span className="font-semibold text-sky-700">{d.label}:</span>{" "}
                      {d.value}
                    </p>
                  ))}

                  {hasGuestCount(b.bookingTypes) && (
                    <p>
                      <span className="font-semibold text-sky-700">Guests:</span>{" "}
                      {b.adults} adult(s), {b.kids || "0"} kid(s)
                    </p>
                  )}

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

                {/* Actions */}
                <div className="flex flex-col gap-2 items-end ml-4">
                  {b.status === "Confirmed" && (
                    <button
                      onClick={() => setPayingBooking(b)}
                      className="text-sm font-semibold bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-700 hover:to-sky-600 text-white px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                    >
                      💳 Pay Now
                    </button>
                  )}
                  {b.status !== "Cancelled" && (
                    <button
                      onClick={() => cancelBooking(b.id)}
                      className="text-sm text-red-500 border border-red-200 px-4 py-2 rounded-xl hover:bg-red-50 transition-all duration-200 font-medium"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Payment modal */}
      {payingBooking && (
        <PaymentModal
          booking={payingBooking}
          onClose={() => setPayingBooking(null)}
        />
      )}
    </div>
  );
}
