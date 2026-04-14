import { useState, useEffect, useRef } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type BookingType = "room" | "event";

const ROOM_OPTIONS = [
  { label: "Deluxe Room — ₱3,500 / night", value: "deluxe" },
  { label: "Family Room — ₱5,000 / night", value: "family" },
  { label: "Private Cottage — ₱7,500 / night", value: "cottage" },
];

const EVENT_TYPES = ["Birthday", "Wedding", "Corporate", "Others"];

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [bookingType, setBookingType] = useState<BookingType>("room");
  const [submitted, setSubmitted] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setBookingType("room");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-100 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(12, 74, 110, 0.6)", backdropFilter: "blur(6px)" }}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl booking-modal-content"
        style={{
          animation: "modalSlideIn 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
          scrollbarWidth: "none",           /* Firefox */
          msOverflowStyle: "none",          /* IE */
        } as React.CSSProperties}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-linear-to-r from-sky-800 to-sky-600 px-8 py-6 rounded-t-3xl flex items-center justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
              Book Your Stay
            </h2>
            <p className="text-sky-200 text-sm mt-1">Reserve your tropical getaway today</p>
          </div>
          <button
            onClick={handleClose}
            className="text-white/80 hover:text-white hover:bg-white/20 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 text-2xl leading-none"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="px-8 py-8">
          {submitted ? (
            /* ── Success State ── */
            <div className="text-center py-12">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-100 flex items-center justify-center">
                <svg className="w-10 h-10 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-sky-800 mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                Booking Received!
              </h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
                Your booking has been received! We'll get in touch with you shortly.
              </p>
              <button
                onClick={handleClose}
                className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-10 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]"
              >
                Done
              </button>
            </div>
          ) : (
            /* ── Booking Form ── */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Guest Info */}
              <fieldset className="space-y-5">
                <legend className="text-lg font-bold text-sky-800 mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                  Guest Information
                </legend>

                <div>
                  <label htmlFor="guest-name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Full Name
                  </label>
                  <input
                    id="guest-name"
                    type="text"
                    required
                    placeholder="Juan Dela Cruz"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-sky-50/40 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 outline-none transition-all duration-200 text-gray-800 placeholder-gray-400"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="guest-email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      id="guest-email"
                      type="email"
                      required
                      placeholder="juan@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-sky-50/40 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 outline-none transition-all duration-200 text-gray-800 placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="guest-phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      id="guest-phone"
                      type="tel"
                      required
                      placeholder="+63 912 345 6789"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-sky-50/40 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 outline-none transition-all duration-200 text-gray-800 placeholder-gray-400"
                    />
                  </div>
                </div>
              </fieldset>

              {/* Divider */}
              <div className="border-t border-gray-100"></div>

              {/* Booking Type Toggle */}
              <fieldset>
                <legend className="text-lg font-bold text-sky-800 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                  Booking Type
                </legend>
                <div className="flex bg-sky-50 rounded-xl p-1 gap-1">
                  <button
                    type="button"
                    onClick={() => setBookingType("room")}
                    className={`flex-1 py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 ${
                      bookingType === "room"
                        ? "bg-sky-600 text-white shadow-md"
                        : "text-gray-500 hover:text-sky-700 hover:bg-sky-100"
                    }`}
                  >
                    🏨 Room
                  </button>
                  <button
                    type="button"
                    onClick={() => setBookingType("event")}
                    className={`flex-1 py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 ${
                      bookingType === "event"
                        ? "bg-sky-600 text-white shadow-md"
                        : "text-gray-500 hover:text-sky-700 hover:bg-sky-100"
                    }`}
                  >
                    🎉 Function Hall / Event
                  </button>
                </div>
              </fieldset>

              {/* Divider */}
              <div className="border-t border-gray-100"></div>

              {/* ── ROOM FIELDS ── */}
              {bookingType === "room" && (
                <fieldset className="space-y-5" style={{ animation: "fieldFadeIn 0.3s ease" }}>
                  <legend className="text-lg font-bold text-sky-800 mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                    Room Details
                  </legend>

                  <div>
                    <label htmlFor="room-type" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Room Type
                    </label>
                    <select
                      id="room-type"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-sky-50/40 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 outline-none transition-all duration-200 text-gray-800 appearance-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 1rem center",
                      }}
                    >
                      <option value="">Select a room</option>
                      {ROOM_OPTIONS.map((room) => (
                        <option key={room.value} value={room.value}>
                          {room.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="check-in" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Check-in Date
                      </label>
                      <input
                        id="check-in"
                        type="date"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-sky-50/40 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 outline-none transition-all duration-200 text-gray-800"
                      />
                    </div>
                    <div>
                      <label htmlFor="check-out" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Check-out Date
                      </label>
                      <input
                        id="check-out"
                        type="date"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-sky-50/40 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 outline-none transition-all duration-200 text-gray-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="num-guests" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Number of Guests
                    </label>
                    <input
                      id="num-guests"
                      type="number"
                      min={1}
                      max={20}
                      required
                      placeholder="2"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-sky-50/40 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 outline-none transition-all duration-200 text-gray-800 placeholder-gray-400"
                    />
                  </div>
                </fieldset>
              )}

              {/* ── EVENT FIELDS ── */}
              {bookingType === "event" && (
                <fieldset className="space-y-5" style={{ animation: "fieldFadeIn 0.3s ease" }}>
                  <legend className="text-lg font-bold text-sky-800 mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                    Event Details
                  </legend>

                  <div>
                    <label htmlFor="event-type" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Event Type
                    </label>
                    <select
                      id="event-type"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-sky-50/40 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 outline-none transition-all duration-200 text-gray-800 appearance-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 1rem center",
                      }}
                    >
                      <option value="">Select event type</option>
                      {EVENT_TYPES.map((type) => (
                        <option key={type} value={type.toLowerCase()}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="event-date" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Event Date
                      </label>
                      <input
                        id="event-date"
                        type="date"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-sky-50/40 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 outline-none transition-all duration-200 text-gray-800"
                      />
                    </div>
                    <div>
                      <label htmlFor="num-attendees" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Expected Attendees
                      </label>
                      <input
                        id="num-attendees"
                        type="number"
                        min={1}
                        required
                        placeholder="50"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-sky-50/40 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 outline-none transition-all duration-200 text-gray-800 placeholder-gray-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="special-requests" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Special Requests / Notes
                    </label>
                    <textarea
                      id="special-requests"
                      rows={4}
                      placeholder="Let us know about any special arrangements, dietary needs, decorations, etc."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-sky-50/40 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 outline-none transition-all duration-200 text-gray-800 placeholder-gray-400 resize-none"
                    />
                  </div>
                </fieldset>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-700 hover:to-sky-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.01] text-lg"
              >
                Confirm Booking
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Keyframe animations */}
      <style>{`
        .booking-modal-content::-webkit-scrollbar {
          display: none;
        }
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes fieldFadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
