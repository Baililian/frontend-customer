import { useState, useEffect, useCallback, useRef } from "react";

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
  const [isPaused, setIsPaused] = useState(false);
  const totalSlides = TESTIMONIALS.length;
  const autoPlayDelay = 4500; // 4.5 seconds
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    // Wrap around for infinite cycling
    const newIndex = ((index % totalSlides) + totalSlides) % totalSlides;
    setActiveIndex(newIndex);
  }, [totalSlides]);

  const handlePrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);
  const handleNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);

  // Auto-play
  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSlides);
    }, autoPlayDelay);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, totalSlides]);

  return (
    <section
      className="The class `bg-gradient-to-b` can be written as `bg-linear-to-b` from-sky-100 to-white py-28 px-6 md:px-24 overflow-hidden"
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
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-sky-100 text-sky-600 flex items-center justify-center hover:bg-sky-50 transition-all duration-200"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-sky-100 text-sky-600 flex items-center justify-center hover:bg-sky-50 transition-all duration-200"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden mx-6">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {TESTIMONIALS.map((t, i) => (
                <div
                  key={i}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur-md rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-10 border border-sky-100/60 flex flex-col items-center text-center">
                    {/* Stars */}
                    <div className="flex gap-1 mb-5">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <svg
                          key={s}
                          className={`w-6 h-6 ${s < t.rating ? "text-amber-400" : "text-gray-200"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-gray-700 leading-relaxed mb-8 text-lg italic max-w-xl">
                      "{t.quote}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-5 border-t border-sky-100 w-full justify-center">
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center text-white font-bold text-sm shadow">
                        {t.name.charAt(0)}
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-sky-800 text-sm">
                          {t.name}
                        </p>
                        <p className="text-xs text-gray-400">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-10">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  i === activeIndex
                    ? "w-9 bg-sky-500 shadow-md"
                    : "w-2.5 bg-sky-200 hover:bg-sky-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
