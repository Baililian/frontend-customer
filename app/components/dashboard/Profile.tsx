// import { useState } from "react";
// import { Eye, EyeOff } from "lucide-react";

// const PLACEHOLDER = {
//   name: "Customer Name",
//   email: "customer@email.com",
// };

// export default function Profile() {
//   const [isEditing, setIsEditing] = useState(false);
//   const [saved, setSaved] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   const [form, setForm] = useState({
//     name: PLACEHOLDER.name,
//     email: PLACEHOLDER.email,
//     password: "",
//     confirmPassword: "",
//   });

//   const [draft, setDraft] = useState({ ...form });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setDraft({ ...draft, [e.target.name]: e.target.value });
//   };

//   const handleEdit = () => {
//     setDraft({ ...form, password: "", confirmPassword: "" });
//     setIsEditing(true);
//   };

//   const handleSave = () => {
//     if (draft.password && draft.password !== draft.confirmPassword) {
//       alert("Passwords do not match.");
//       return;
//     }
//     setForm({ ...draft });
//     setIsEditing(false);
//     setSaved(true);
//     setTimeout(() => setSaved(false), 2000);
//   };

//   const handleCancel = () => {
//     setIsEditing(false);
//     setDraft({ ...form, password: "", confirmPassword: "" });
//   };

//   return (
//     <div className="bg-white p-8 rounded-2xl shadow max-w-md">
//       <h1 className="text-xl font-bold mb-1 text-gray-800">My Profile</h1>
//       <p className="text-sm text-gray-500 mb-6">
//         View and update your account information.
//       </p>

//       {/* Avatar */}
//       <div className="flex items-center gap-4 mb-6">
//         <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-8 h-8 text-sky-400"
//             viewBox="0 0 24 24"
//             fill="currentColor"
//           >
//             <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
//           </svg>
//         </div>
//         <div>
//           <p className="font-semibold text-gray-800">{form.name}</p>
//           <p className="text-sm text-gray-400">{form.email}</p>
//         </div>
//       </div>

//       {saved && (
//         <div className="mb-4 px-4 py-2 bg-green-50 border border-green-200 text-green-700 text-sm rounded-lg">
//           Profile updated successfully!
//         </div>
//       )}

//       <div className="space-y-4">
//         {/* Full Name */}
//         <div className="flex flex-col gap-1">
//           <label className="block text-gray-700 mb-1">Full Name</label>
//           <input
//             name="name"
//             value={isEditing ? draft.name : form.name}
//             onChange={handleChange}
//             disabled={!isEditing}
//             placeholder="Enter your full name"
//             className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-gray-600 transition-colors ${
//               !isEditing ? "bg-gray-50 cursor-not-allowed" : "bg-white"
//             }`}
//           />
//         </div>

//         {/* Email */}
//         <div className="flex flex-col gap-1">
//           <label className="block text-gray-700 mb-1">Email Address</label>
//           <input
//             name="email"
//             type="email"
//             value={isEditing ? draft.email : form.email}
//             onChange={handleChange}
//             disabled={!isEditing}
//             placeholder="Enter your email"
//             className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-gray-600 transition-colors ${
//               !isEditing ? "bg-gray-50 cursor-not-allowed" : "bg-white"
//             }`}
//           />
//         </div>

//         {/* Password fields — only shown when editing */}
//         {isEditing && (
//           <>
//             <div className="flex flex-col gap-1">
//               <label className="block text-gray-700 mb-1">New Password</label>
//               <div className="relative">
//                 <input
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Leave blank to keep current"
//                   value={draft.password}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-gray-600"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-sky-600"
//                 >
//                   {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//                 </button>
//               </div>
//             </div>

//             <div className="flex flex-col gap-1">
//               <label className="block text-gray-700 mb-1">
//                 Confirm New Password
//               </label>
//               <input
//                 name="confirmPassword"
//                 type="password"
//                 placeholder="Re-enter new password"
//                 value={draft.confirmPassword}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-gray-600"
//               />
//             </div>
//           </>
//         )}

//         {/* Buttons */}
//         {isEditing ? (
//           <div className="flex gap-3 pt-1">
//             <button
//               type="button"
//               onClick={handleSave}
//               className="flex-1 bg-sky-600 text-white py-2 rounded-lg font-semibold hover:bg-sky-700 transition"
//             >
//               Save Changes
//             </button>
//             <button
//               type="button"
//               onClick={handleCancel}
//               className="flex-1 border border-gray-300 text-gray-600 py-2 rounded-lg font-semibold hover:bg-gray-50 transition"
//             >
//               Cancel
//             </button>
//           </div>
//         ) : (
//           <button
//             type="button"
//             onClick={handleEdit}
//             className="w-full bg-sky-600 text-white py-2 rounded-lg font-semibold hover:bg-sky-700 transition"
//           >
//             Update Profile
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }
















import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const PLACEHOLDER = {
  name: "Customer Name",
  email: "customer@email.com",
};

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: PLACEHOLDER.name,
    email: PLACEHOLDER.email,
    password: "",
    confirmPassword: "",
  });
  const [draft, setDraft] = useState({ ...form });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDraft({ ...draft, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {
    setDraft({ ...form, password: "", confirmPassword: "" });
    setIsEditing(true);
  };

  const handleSave = () => {
    if (draft.password && draft.password !== draft.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    setForm({ ...draft });
    setIsEditing(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setDraft({ ...form, password: "", confirmPassword: "" });
  };

  const inputBase =
    "w-full px-4 py-3 rounded-xl border border-gray-200 bg-sky-50/40 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 outline-none transition-all duration-200 text-gray-800 placeholder-gray-400";

  return (
    <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-sky-100/60 max-w-md">
      <h1 className="text-xl font-bold mb-1 text-sky-800">My Profile</h1>
      <p className="text-sm text-gray-500 mb-6">
        View and update your account information.
      </p>

      {/* Avatar */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-white"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
          </svg>
        </div>
        <div>
          <p className="font-semibold text-sky-800">{form.name}</p>
          <p className="text-sm text-gray-400">{form.email}</p>
        </div>
      </div>

      {saved && (
        <div className="mb-4 px-4 py-3 bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm rounded-xl">
          ✅ Profile updated successfully!
        </div>
      )}

      <div className="space-y-5">
        {/* Full Name */}
        <div className="flex flex-col gap-1.5">
          <label className="block text-sm font-semibold text-gray-700">Full Name</label>
          <input
            name="name"
            value={isEditing ? draft.name : form.name}
            onChange={handleChange}
            disabled={!isEditing}
            placeholder="Enter your full name"
            className={`${inputBase} ${!isEditing ? "cursor-not-allowed opacity-70" : ""}`}
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label className="block text-sm font-semibold text-gray-700">Email Address</label>
          <input
            name="email"
            type="email"
            value={isEditing ? draft.email : form.email}
            onChange={handleChange}
            disabled={!isEditing}
            placeholder="Enter your email"
            className={`${inputBase} ${!isEditing ? "cursor-not-allowed opacity-70" : ""}`}
          />
        </div>

        {/* Password fields — only shown when editing */}
        {isEditing && (
          <>
            <div className="flex flex-col gap-1.5">
              <label className="block text-sm font-semibold text-gray-700">New Password</label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Leave blank to keep current"
                  value={draft.password}
                  onChange={handleChange}
                  className={`${inputBase} pr-12`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-sky-600 transition"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="block text-sm font-semibold text-gray-700">
                Confirm New Password
              </label>
              <input
                name="confirmPassword"
                type="password"
                placeholder="Re-enter new password"
                value={draft.confirmPassword}
                onChange={handleChange}
                className={inputBase}
              />
            </div>
          </>
        )}

        {/* Buttons */}
        {isEditing ? (
          <div className="flex gap-3 pt-1">
            <button
              type="button"
              onClick={handleSave}
              className="flex-1 bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-700 hover:to-sky-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="flex-1 border border-gray-200 text-gray-600 py-3 rounded-xl font-semibold hover:bg-sky-50 transition-all duration-200"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={handleEdit}
            className="w-full bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-700 hover:to-sky-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Update Profile
          </button>
        )}
      </div>
    </div>
  );
}
