import { useState } from "react";

const TESTIMONIALS = [
  {
    quote:
      "Our family vacation was unforgettable! Clean facilities, friendly staff, and amazing views. We'll definitely be coming back!",
    name: "Maria D.",
    role: "Family Vacation",
    rating: 5,
  },
  {
    quote:
      "We held our company team-building here and it exceeded all expectations. The event hall was spacious and the catering was top-notch.",
    name: "James R.",
    role: "Corporate Event",
    rating: 5,
  },
  {
    quote:
      "The private cottage was absolutely perfect for our anniversary. Peaceful, clean, and the sunrise view from the balcony was breathtaking.",
    name: "Angela & Mark T.",
    role: "Anniversary Getaway",
    rating: 5,
  },
  {
    quote:
      "Affordable, fun, and super family-friendly. The kids loved the pools and we loved the relaxing atmosphere. Highly recommended!",
    name: "Rico S.",
    role: "Weekend Trip",
    rating: 4,
  },
  {
    quote:
      "Best resort experience in North Cotabato! The staff treated us like VIPs. Already planning our next visit.",
    name: "Patricia L.",
    role: "Holiday Stay",
    rating: 5,
  },
  {
    quote:
      "We celebrated our daughter's debut here and everything was magical — from the decorations to the food. Thank you, Waterland!",
    name: "Mr. & Mrs. Santos",
    role: "Debut Celebration",
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleCount = 3;
  const maxIndex = TESTIMONIALS.length - visibleCount;

  const handlePrev = () => setActiveIndex((i) => Math.max(0, i - 1));
  const handleNext = () => setActiveIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section
      className="bg-gradient-to-b from-sky-100 to-white py-28 px-6 md:px-24 overflow-hidden"
      id="testimonials"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sky-500 font-semibold tracking-widest uppercase text-sm mb-3">
            Testimonials
          </p>
          <h2 className="text-5xl font-bold text-sky-800 mb-5">
            What Our Guests Say
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Real stories from real guests — find out why Waterland Resort is the
            top choice for getaways and celebrations.
          </p>
        </div>

        {/* Cards Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-sky-100 text-sky-600 flex items-center justify-center hover:bg-sky-50 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous testimonials"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            disabled={activeIndex >= maxIndex}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-sky-100 text-sky-600 flex items-center justify-center hover:bg-sky-50 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next testimonials"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden mx-6">
            <div
              className="flex gap-8 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${activeIndex * (100 / visibleCount + 2.7)}%)`,
              }}
            >
              {TESTIMONIALS.map((t, i) => (
                <div
                  key={i}
                  className="min-w-[calc(33.333%-1.34rem)] flex-shrink-0 bg-white/90 backdrop-blur-md rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-sky-100/60 flex flex-col"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <svg
                        key={s}
                        className={`w-5 h-5 ${s < t.rating ? "text-amber-400" : "text-gray-200"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-700 leading-relaxed mb-6 flex-1 italic">
                    "{t.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-sky-100">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center text-white font-bold text-sm shadow">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-sky-800 text-sm">
                        {t.name}
                      </p>
                      <p className="text-xs text-gray-400">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-10">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to testimonial group ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "w-8 bg-sky-500"
                    : "w-2 bg-sky-200 hover:bg-sky-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
