"use client";

const stats = [
  { value: "100+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "10+", label: "Years Experience" },
  { value: "15+", label: "Expert Developers" },
];

export default function CompanyStats() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Our Impact in Numbers
        </h2>

        <p className="mt-3 text-gray-500 dark:text-gray-400">
          Proven results that build trust and confidence
        </p>

        {/* Stats Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800"
            >
              <h3 className="text-3xl font-bold text-amber-600">
                {stat.value}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
