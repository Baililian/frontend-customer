import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const inputBase =
  "w-full px-4 py-3 rounded-xl border border-gray-200 bg-sky-50/40 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 outline-none transition-all duration-200 text-gray-800 placeholder-gray-400";

const initialForm = {
  firstName: "Customer",
  middleName: "",
  lastName: "Name",
  suffix: "",
  email: "customer@email.com",
  phone: "",
  address: "",
  password: "",
  confirmPassword: "",
};

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [draft, setDraft] = useState({ ...form });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setDraft({ ...draft, [e.target.name]: e.target.value });

  const handleEdit = () => { setDraft({ ...form, password: "", confirmPassword: "" }); setIsEditing(true); };

  const handleSave = () => {
    if (draft.password && draft.password !== draft.confirmPassword) {
      alert("Passwords do not match."); return;
    }
    setForm({ ...draft }); setIsEditing(false); setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleCancel = () => { setIsEditing(false); setDraft({ ...form, password: "", confirmPassword: "" }); };

  const fullName = [form.firstName, form.middleName, form.lastName, form.suffix].filter(Boolean).join(" ");

  const Field = ({ label, name, type = "text", placeholder = "" }: { label: string; name: string; type?: string; placeholder?: string }) => (
    <div className="flex flex-col gap-1.5">
      <label className="block text-sm font-semibold text-gray-700">{label}</label>
      <input
        name={name} type={type} placeholder={placeholder}
        value={(isEditing ? draft : form)[name as keyof typeof form]}
        onChange={handleChange} disabled={!isEditing}
        className={`${inputBase} ${!isEditing ? "cursor-not-allowed opacity-70" : ""}`}
      />
    </div>
  );

  return (
    <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-sky-100/60 max-w-lg">
      <h1 className="text-xl font-bold mb-1 text-sky-800">My Profile</h1>
      <p className="text-sm text-gray-500 mb-6">View and update your account information.</p>

      {/* Avatar */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center shadow">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
          </svg>
        </div>
        <div>
          <p className="font-semibold text-sky-800">{fullName}</p>
          <p className="text-sm text-gray-400">{form.email}</p>
        </div>
      </div>

      {saved && (
        <div className="mb-4 px-4 py-3 bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm rounded-xl">
          ✅ Profile updated successfully!
        </div>
      )}

      <div className="space-y-5">
        {/* Name section */}
        <div>
          <p className="text-xs font-bold text-sky-700 uppercase tracking-wider mb-3">Personal Information</p>
          <div className="grid grid-cols-2 gap-4">
            <Field label="First Name" name="firstName" placeholder="First name" />
            <Field label="Middle Name" name="middleName" placeholder="Middle name (optional)" />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <Field label="Last Name" name="lastName" placeholder="Last name" />
            <div className="flex flex-col gap-1.5">
              <label className="block text-sm font-semibold text-gray-700">Suffix</label>
              <select
                name="suffix"
                value={isEditing ? draft.suffix : form.suffix}
                onChange={handleChange}
                disabled={!isEditing}
                className={`${inputBase} ${!isEditing ? "cursor-not-allowed opacity-70" : ""}`}
              >
                <option value="">None</option>
                <option value="Jr.">Jr.</option>
                <option value="Sr.">Sr.</option>
                <option value="II">II</option>
                <option value="III">III</option>
                <option value="IV">IV</option>
              </select>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100" />

        {/* Contact info */}
        <div>
          <p className="text-xs font-bold text-sky-700 uppercase tracking-wider mb-3">Contact Details</p>
          <div className="space-y-4">
            <Field label="Email Address" name="email" type="email" placeholder="Enter your email" />
            <Field label="Phone Number" name="phone" type="tel" placeholder="e.g. 09XX XXX XXXX" />
            <Field label="Address" name="address" placeholder="Home address (optional)" />
          </div>
        </div>

        {/* Password fields — editing only */}
        {isEditing && (
          <>
            <div className="border-t border-gray-100" />
            <div>
              <p className="text-xs font-bold text-sky-700 uppercase tracking-wider mb-3">Change Password</p>
              <div className="space-y-4">
                <div className="flex flex-col gap-1.5">
                  <label className="block text-sm font-semibold text-gray-700">New Password</label>
                  <div className="relative">
                    <input
                      name="password" type={showPassword ? "text" : "password"}
                      placeholder="Leave blank to keep current" value={draft.password}
                      onChange={handleChange} className={`${inputBase} pr-12`}
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-sky-600 transition">
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="block text-sm font-semibold text-gray-700">Confirm New Password</label>
                  <input name="confirmPassword" type="password" placeholder="Re-enter new password" value={draft.confirmPassword} onChange={handleChange} className={inputBase} />
                </div>
              </div>
            </div>
          </>
        )}

        {/* Buttons */}
        {isEditing ? (
          <div className="flex gap-3 pt-1">
            <button type="button" onClick={handleSave}
              className="flex-1 bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-700 hover:to-sky-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
              Save Changes
            </button>
            <button type="button" onClick={handleCancel}
              className="flex-1 border border-gray-200 text-gray-600 py-3 rounded-xl font-semibold hover:bg-sky-50 transition-all duration-200">
              Cancel
            </button>
          </div>
        ) : (
          <button type="button" onClick={handleEdit}
            className="w-full bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-700 hover:to-sky-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
            Update Profile
          </button>
        )}
      </div>
    </div>
  );
}
