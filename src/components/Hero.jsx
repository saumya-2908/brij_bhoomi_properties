// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import bgImage from "../assets/bgImage.avif";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      {/* Overlay (Light + Dark Different) */}
      <div
        className="
          absolute inset-0 z-10
          bg-gradient-to-r 
          from-white/50 via-white/0 to-white/30
          dark:from-black/60 dark:via-black/60 dark:to-black/50
          transition duration-500
        "
      />

      {/* Sparkles */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <div className="sparkle sparkle1"></div>
        <div className="sparkle sparkle2"></div>
        <div className="sparkle sparkle3"></div>
        <div className="sparkle sparkle4"></div>
        <div className="sparkle sparkle5"></div>
      </div>

      {/* Content */}
      <div className="relative z-30 h-full flex items-center px-6 md:px-20">
        <div className="max-w-2xl text-gray-900 dark:text-white">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-heading text-4xl sm:text-5xl md:text-7xl leading-[1.15]"
          >
            Own a Piece of
            <span className="block text-brand-gold mt-2">
              Divine Brij Bhoomi
            </span>
          </motion.h1>

       <Link to="/properties">
          <motion.button
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-3 bg-brand-gold text-black font-semibold rounded-md shadow-lg"
         >
           Explore Properties
          </motion.button>
       </Link>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
        <div className="scroll-indicator"></div>
      </div>

    </section>
  );
}