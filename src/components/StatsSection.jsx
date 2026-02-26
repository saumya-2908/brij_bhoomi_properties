// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Sparkles from "./Sparkles";   // ✅ IMPORTANT import

export default function StatsSection() {
  const stats = [
    { number: "200+", label: "Satisfied Clients" },
    { number: "10+", label: "Years of Experience" },
    { number: "20+", label: "Current Projects" },
  ];

  return (
    <section className="relative py-20 bg-[#0F3D3E] overflow-hidden">

      {/* Sparkles only in dark */}
      <div className="dark:block hidden absolute inset-0 z-10 pointer-events-none">
        <Sparkles />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-white text-center">

        {stats.map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center gap-6"
          >
            <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-2xl text-white shadow-md">
              ★
            </div>

            <div className="text-left">
              <h3 className="text-3xl font-bold">{stat.number}</h3>
              <p className="text-lg">{stat.label}</p>
            </div>
          </motion.div>
        ))}

      </div>

    </section>
  );
}