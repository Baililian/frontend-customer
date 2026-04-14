import { useState } from "react";

type Props = {
  handleBooking: (data: Record<string, any>) => void;
  setActive: (key: string) => void;
};

const cottageOptions = [
  "Small Cottage (up to 8 pax) – ₱1,200",
  "Medium Cottage (up to 15 pax) – ₱1,800",
  "Large Cottage (up to 25 pax) – ₱2,500",
  "VIP Cottage (up to 40 pax) – ₱4,500",
  "Entrance Only (No Cottage)",
];

const foodPackageOptions = [
  "Budget Package (5–8 pax) – ₱1,500",
  "Classic Filipino Package (10–15 pax) – ₱2,500",
  "Boodle Fight Package (15–20 pax) – ₱3,800",
  "Premium Catering Package (20–30 pax) – ₱6,500",
];

const tableHutOptions = [
  "Picnic Table – ₱500",
  "Small Nipa Hut – ₱600",
  "Large Nipa Hut – ₱800",
];

const inputBase =
  "w-full px-4 py-3 rounded-xl border border-gray-200 bg-sky-50/40 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 outline-none transition-all duration-200 text-gray-800 placeholder-gray-400";

const bookingTypes = [
  { key: "cottage", label: "🏕️ Room / Cottage" },
  { key: "food", label: "🍽️ Food Package" },
  { key: "table", label: "⛱️ Tables & Huts" },
  { key: "pool_child", label: "🐬 Children's Pool" },
  { key: "pool_adult", label: "🏊 Adult Pool" },
];

function GuestDetailsFields({ form, handleChange }: { form: any; handleChange: any }) {
  return (
    <fieldset className="space-y-5 mb-6">
      <legend className="text-lg font-bold text-sky-800 mb-1">Guest Details</legend>
      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-gray-700">Date</label>
          <input name="date" type="date" value={form.date} onChange={handleChange} className={inputBase} required />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-gray-700">Time</label>
          <input name="time" type="time" value={form.time} onChange={handleChange} className={inputBase} required />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-gray-700">Adults</label>
          <input name="adults" type="number" min="1" placeholder="No. of Adults" value={form.adults} onChange={handleChange} className={inputBase} required />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-gray-700">Kids</label>
          <input name="kids" type="number" min="0" placeholder="No. of Kids" value={form.kids} onChange={handleChange} className={inputBase} />
        </div>
      </div>
    </fieldset>
  );
}

function NotesField({ form, handleChange }: { form: any; handleChange: any }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-gray-700">Special Notes</label>
      <textarea name="notes" placeholder="Any special requests or notes..." value={form.notes} onChange={handleChange} className={`${inputBase} h-24 resize-none`} />
    </div>
  );
}

function TypeDetailForm({ typeKey, form, handleChange }: { typeKey: string; form: any; handleChange: any }) {
  if (typeKey === "cottage") return (
    <fieldset className="space-y-4 p-4 bg-sky-50/60 rounded-2xl border border-sky-100">
      <legend className="text-sm font-bold text-sky-800 px-1">🏕️ Cottage Details</legend>
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-gray-700">Cottage Type</label>
        <select name="cottage" value={form.cottage} onChange={handleChange} className={inputBase}>
          {cottageOptions.map((opt) => <option key={opt}>{opt}</option>)}
        </select>
      </div>
    </fieldset>
  );
  if (typeKey === "food") return (
    <fieldset className="space-y-4 p-4 bg-sky-50/60 rounded-2xl border border-sky-100">
      <legend className="text-sm font-bold text-sky-800 px-1">🍽️ Food Package</legend>
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-gray-700">Choose Package</label>
        <select name="foodPackage" value={form.foodPackage} onChange={handleChange} className={inputBase}>
          {foodPackageOptions.map((opt) => <option key={opt}>{opt}</option>)}
        </select>
      </div>
    </fieldset>
  );
  if (typeKey === "table") return (
    <fieldset className="space-y-4 p-4 bg-sky-50/60 rounded-2xl border border-sky-100">
      <legend className="text-sm font-bold text-sky-800 px-1">⛱️ Table / Hut</legend>
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-gray-700">Select Type</label>
        <select name="tableHut" value={form.tableHut} onChange={handleChange} className={inputBase}>
          {tableHutOptions.map((opt) => <option key={opt}>{opt}</option>)}
        </select>
      </div>
    </fieldset>
  );
  if (typeKey === "pool_child") return (
    <fieldset className="space-y-4 p-4 bg-sky-50/60 rounded-2xl border border-sky-100">
      <legend className="text-sm font-bold text-sky-800 px-1">🐬 Children's Pool</legend>
      <div className="p-3 rounded-xl bg-sky-50 border border-sky-100 text-sm text-sky-800 mb-2">₱150 per person · Ages 12 and below · Lifeguard on duty</div>
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-gray-700">Number of Swimmers</label>
        <input name="poolChildPax" type="number" min="1" placeholder="How many kids?" value={form.poolChildPax} onChange={handleChange} className={inputBase} required />
      </div>
    </fieldset>
  );
  if (typeKey === "pool_adult") return (
    <fieldset className="space-y-4 p-4 bg-sky-50/60 rounded-2xl border border-sky-100">
      <legend className="text-sm font-bold text-sky-800 px-1">🏊 Adult Pool</legend>
      <div className="p-3 rounded-xl bg-sky-50 border border-sky-100 text-sm text-sky-800 mb-2">₱250 per person · Ages 13 and above · Includes wave pool &amp; lap pool</div>
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-gray-700">Number of Swimmers</label>
        <input name="poolAdultPax" type="number" min="1" placeholder="How many adults?" value={form.poolAdultPax} onChange={handleChange} className={inputBase} required />
      </div>
    </fieldset>
  );
  return null;
}

export default function Reservation({ handleBooking, setActive }: Props) {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const blankForm = {
    date: "", time: "", adults: "", kids: "",
    cottage: cottageOptions[0],
    foodPackage: foodPackageOptions[0],
    tableHut: tableHutOptions[0],
    poolChildPax: "",
    poolAdultPax: "",
    notes: "",
  };

  const [form, setForm] = useState(blankForm);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const toggleType = (key: string) =>
    setSelectedTypes((prev) => prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]);

  const handleSubmit = () => {
    if (!form.date || !form.time || selectedTypes.length === 0) return;
    handleBooking({ ...form, bookingTypes: selectedTypes });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm(blankForm);
      setSelectedTypes([]);
      setActive("bookings");
    }, 1500);
  };

  return (
    <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-sky-100/60 max-w-2xl">
      <div className="bg-gradient-to-r from-sky-800 to-sky-600 -mx-8 -mt-8 px-8 py-6 rounded-t-3xl mb-8">
        <h1 className="text-2xl font-bold text-white">Book a Reservation</h1>
        <p className="text-sky-200 text-sm mt-1">Fill in the details below to reserve your spot at Waterland Resort.</p>
      </div>

      {/* Multi-select booking types */}
      <div className="mb-6">
        <p className="text-sm font-semibold text-gray-700 mb-1">Select Booking Type(s)</p>
        <p className="text-xs text-gray-400 mb-3">You may select one or more types for a combined booking.</p>
        <div className="flex flex-wrap gap-2">
          {bookingTypes.map((t) => {
            const selected = selectedTypes.includes(t.key);
            return (
              <button
                key={t.key} type="button" onClick={() => toggleType(t.key)}
                className={`px-4 py-2 rounded-xl text-sm border font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  selected
                    ? "bg-sky-600 text-white border-sky-600 shadow-md"
                    : "text-gray-600 border-gray-200 hover:bg-sky-50 hover:border-sky-300"
                }`}
              >
                {selected && <span className="text-xs leading-none">✓</span>}
                {t.label}
              </button>
            );
          })}
        </div>
        {selectedTypes.length === 0 && (
          <p className="text-xs text-amber-500 mt-2">⚠ Please select at least one booking type.</p>
        )}
        {selectedTypes.length > 0 && (
          <p className="text-xs text-sky-600 mt-2 font-medium">
            {selectedTypes.length} type{selectedTypes.length > 1 ? "s" : ""} selected
          </p>
        )}
      </div>

      <div className="border-t border-gray-100 mb-6" />

      {selectedTypes.length > 0 && (
        <>
          <GuestDetailsFields form={form} handleChange={handleChange} />
          <div className="border-t border-gray-100 mb-6" />
          <div className="space-y-4 mb-6">
            <p className="text-sm font-semibold text-gray-700">Details per Booking Type</p>
            {selectedTypes.map((key) => (
              <TypeDetailForm key={key} typeKey={key} form={form} handleChange={handleChange} />
            ))}
          </div>
          <NotesField form={form} handleChange={handleChange} />
          <div className="mt-6" />
        </>
      )}

      <button
        type="button" onClick={handleSubmit}
        disabled={submitted || selectedTypes.length === 0}
        className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg transition-all duration-200 ${
          submitted ? "bg-emerald-500 text-white"
          : selectedTypes.length === 0 ? "bg-gray-200 text-gray-400 cursor-not-allowed"
          : "bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-700 hover:to-sky-600 text-white hover:shadow-xl hover:scale-[1.01]"
        }`}
      >
        {submitted ? "✅ Booking Confirmed!" : "Confirm Booking"}
      </button>
    </div>
  );
}
