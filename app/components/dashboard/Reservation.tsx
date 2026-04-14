// import { useState } from "react";

// type Props = {
//   handleBooking: (data: Record<string, any>) => void;
//   setActive: (key: string) => void;
// };

// const cottageOptions = [
//   "Small Cottage",
//   "Medium Cottage",
//   "Large Cottage",
//   "VIP Cottage",
//   "Entrance Only (No Cottage)",
// ];

// const addOns = [
//   { key: "bbq", label: "BBQ Grill" },
//   { key: "foodPkg", label: "Food Package" },
//   { key: "lifeguard", label: "Private Lifeguard" },
//   { key: "events", label: "Event Setup" },
// ];

// export default function Reservation({ handleBooking, setActive }: Props) {
//   const [form, setForm] = useState({
//     date: "",
//     time: "",
//     adults: "",
//     kids: "",
//     cottage: cottageOptions[0],
//     notes: "",
//     addOns: [] as string[],
//   });
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
//     >
//   ) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const toggleAddOn = (key: string) => {
//     setForm((prev) => ({
//       ...prev,
//       addOns: prev.addOns.includes(key)
//         ? prev.addOns.filter((a) => a !== key)
//         : [...prev.addOns, key],
//     }));
//   };

//   const handleSubmit = () => {
//     if (!form.date || !form.time || !form.adults) return;
//     handleBooking(form);
//     setSubmitted(true);
//     setTimeout(() => {
//       setSubmitted(false);
//       setForm({
//         date: "",
//         time: "",
//         adults: "",
//         kids: "",
//         cottage: cottageOptions[0],
//         notes: "",
//         addOns: [],
//       });
//       setActive("bookings");
//     }, 1500);
//   };

//   return (
//     <div className="bg-white p-6 rounded-xl shadow max-w-2xl">
//       <h1 className="text-xl font-bold mb-1 text-gray-800">Book a Reservation</h1>
//       <p className="text-sm text-gray-500 mb-5">
//         Fill in the details below to reserve your spot at Waterland Resort.
//       </p>

//       <div className="grid grid-cols-2 gap-4">
//         {/* Date */}
//         <div className="flex flex-col gap-1">
//           <label className="text-sm font-medium text-gray-600">Date</label>
//           <input
//             name="date"
//             type="date"
//             value={form.date}
//             onChange={handleChange}
//             className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-300 text-gray-600"
//             required
//           />
//         </div>

//         {/* Time */}
//         <div className="flex flex-col gap-1">
//           <label className="text-sm font-medium text-gray-600">Time</label>
//           <input
//             name="time"
//             type="time"
//             value={form.time}
//             onChange={handleChange}
//             className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-300 text-gray-600"
//             required
//           />
//         </div>

//         {/* Adults */}
//         <div className="flex flex-col gap-1">
//           <label className="text-sm font-medium text-gray-600">Adults</label>
//           <input
//             name="adults"
//             type="number"
//             min="1"
//             placeholder="No. of Adults"
//             value={form.adults}
//             onChange={handleChange}
//             className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-300 text-gray-600"
//             required
//           />
//         </div>

//         {/* Kids */}
//         <div className="flex flex-col gap-1">
//           <label className="text-sm font-medium text-gray-600">Kids</label>
//           <input
//             name="kids"
//             type="number"
//             min="0"
//             placeholder="No. of Kids"
//             value={form.kids}
//             onChange={handleChange}
//             className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-300 text-gray-600"
//           />
//         </div>

//         {/* Cottage Type */}
//         <div className="flex flex-col gap-1 col-span-2">
//           <label className="text-sm font-medium text-gray-600">
//             Cottage / Entrance Type
//           </label>
//           <select
//             name="cottage"
//             value={form.cottage}
//             onChange={handleChange}
//             className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-300 text-gray-600"
//           >
//             {cottageOptions.map((opt) => (
//               <option key={opt}>{opt}</option>
//             ))}
//           </select>
//         </div>

//         {/* Add-ons */}
//         <div className="col-span-2">
//           <label className="text-sm font-medium text-gray-600 block mb-2">
//             Add-ons (optional)
//           </label>
//           <div className="flex flex-wrap gap-2">
//             {addOns.map((a) => (
//               <button
//                 key={a.key}
//                 type="button"
//                 onClick={() => toggleAddOn(a.key)}
//                 className={`px-3 py-1 rounded-full text-sm border transition-colors ${
//                   form.addOns.includes(a.key)
//                     ? "bg-sky-600 text-white border-sky-600"
//                     : "text-gray-600 border-gray-300 hover:bg-gray-100"
//                 }`}
//               >
//                 {a.label}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Notes */}
//         <div className="flex flex-col gap-1 col-span-2">
//           <label className="text-sm font-medium text-gray-600">
//             Special Notes
//           </label>
//           <textarea
//             name="notes"
//             placeholder="Any special requests or notes..."
//             value={form.notes}
//             onChange={handleChange}
//             className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-300 text-gray-600 h-24 resize-none"
//           />
//         </div>

//         {/* Submit */}
//         <button
//           type="button"
//           onClick={handleSubmit}
//           disabled={submitted}
//           className={`col-span-2 py-2 rounded-lg font-semibold transition-colors ${
//             submitted
//               ? "bg-green-500 text-white"
//               : "bg-sky-600 text-white hover:bg-sky-700"
//           }`}
//         >
//           {submitted ? "✅ Booking Confirmed!" : "Confirm Booking"}
//         </button>
//       </div>
//     </div>
//   );
// }
































import { useState } from "react";

type Props = {
  handleBooking: (data: Record<string, any>) => void;
  setActive: (key: string) => void;
};

const cottageOptions = [
  "Small Cottage",
  "Medium Cottage",
  "Large Cottage",
  "VIP Cottage",
  "Entrance Only (No Cottage)",
];

const addOns = [
  { key: "bbq", label: "BBQ Grill" },
  { key: "foodPkg", label: "Food Package" },
  { key: "lifeguard", label: "Private Lifeguard" },
  { key: "events", label: "Event Setup" },
];

const inputBase =
  "w-full px-4 py-3 rounded-xl border border-gray-200 bg-sky-50/40 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 outline-none transition-all duration-200 text-gray-800 placeholder-gray-400";

export default function Reservation({ handleBooking, setActive }: Props) {
  const [form, setForm] = useState({
    date: "",
    time: "",
    adults: "",
    kids: "",
    cottage: cottageOptions[0],
    notes: "",
    addOns: [] as string[],
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const toggleAddOn = (key: string) => {
    setForm((prev) => ({
      ...prev,
      addOns: prev.addOns.includes(key)
        ? prev.addOns.filter((a) => a !== key)
        : [...prev.addOns, key],
    }));
  };

  const handleSubmit = () => {
    if (!form.date || !form.time || !form.adults) return;
    handleBooking(form);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({
        date: "",
        time: "",
        adults: "",
        kids: "",
        cottage: cottageOptions[0],
        notes: "",
        addOns: [],
      });
      setActive("bookings");
    }, 1500);
  };

  return (
    <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-sky-100/60 max-w-2xl">
      {/* Header */}
      <div className="bg-gradient-to-r from-sky-800 to-sky-600 -mx-8 -mt-8 px-8 py-6 rounded-t-3xl mb-8">
        <h1 className="text-2xl font-bold text-white">Book a Reservation</h1>
        <p className="text-sky-200 text-sm mt-1">
          Fill in the details below to reserve your spot at Waterland Resort.
        </p>
      </div>

      <fieldset className="space-y-5 mb-6">
        <legend className="text-lg font-bold text-sky-800 mb-1">Guest Details</legend>
        <div className="grid grid-cols-2 gap-5">
          {/* Date */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">Date</label>
            <input
              name="date"
              type="date"
              value={form.date}
              onChange={handleChange}
              className={inputBase}
              required
            />
          </div>

          {/* Time */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">Time</label>
            <input
              name="time"
              type="time"
              value={form.time}
              onChange={handleChange}
              className={inputBase}
              required
            />
          </div>

          {/* Adults */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">Adults</label>
            <input
              name="adults"
              type="number"
              min="1"
              placeholder="No. of Adults"
              value={form.adults}
              onChange={handleChange}
              className={inputBase}
              required
            />
          </div>

          {/* Kids */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">Kids</label>
            <input
              name="kids"
              type="number"
              min="0"
              placeholder="No. of Kids"
              value={form.kids}
              onChange={handleChange}
              className={inputBase}
            />
          </div>
        </div>
      </fieldset>

      <div className="border-t border-gray-100 mb-6"></div>

      {/* Cottage Type */}
      <fieldset className="space-y-5 mb-6">
        <legend className="text-lg font-bold text-sky-800 mb-1">Reservation Details</legend>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-gray-700">
            Cottage / Entrance Type
          </label>
          <select
            name="cottage"
            value={form.cottage}
            onChange={handleChange}
            className={inputBase}
          >
            {cottageOptions.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </div>

        {/* Add-ons */}
        <div>
          <label className="text-sm font-semibold text-gray-700 block mb-2">
            Add-ons (optional)
          </label>
          <div className="flex flex-wrap gap-2">
            {addOns.map((a) => (
              <button
                key={a.key}
                type="button"
                onClick={() => toggleAddOn(a.key)}
                className={`px-4 py-2 rounded-xl text-sm border font-medium transition-all duration-200 ${
                  form.addOns.includes(a.key)
                    ? "bg-sky-600 text-white border-sky-600 shadow-md"
                    : "text-gray-600 border-gray-200 hover:bg-sky-50 hover:border-sky-300"
                }`}
              >
                {a.label}
              </button>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-gray-700">
            Special Notes
          </label>
          <textarea
            name="notes"
            placeholder="Any special requests or notes..."
            value={form.notes}
            onChange={handleChange}
            className={`${inputBase} h-24 resize-none`}
          />
        </div>
      </fieldset>

      {/* Submit */}
      <button
        type="button"
        onClick={handleSubmit}
        disabled={submitted}
        className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.01] ${
          submitted
            ? "bg-emerald-500 text-white"
            : "bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-700 hover:to-sky-600 text-white"
        }`}
      >
        {submitted ? "✅ Booking Confirmed!" : "Confirm Booking"}
      </button>
    </div>
  );
}
