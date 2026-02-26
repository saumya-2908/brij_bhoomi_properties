// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

import premMandir from "../assets/premMandir.avif";
import bankeBihari from "../assets/bankeBihari.webp";
import iskcon from "../assets/iskon.jpg";
import radhaKund from "../assets/radhaKund2.jpg";

export default function NearbyPlaces() {

  const places = [
    { name: "PREM MANDIR", image: premMandir, distance: "5 km" },
    { name: "BANKE BIHARI MANDIR", image: bankeBihari, distance: "4 km" },
    { name: "ISKCON TEMPLE", image: iskcon, distance: "6 km" },
    { name: "RADHA KUND", image: radhaKund, distance: "12 km" }
  ];

  return (
    <SectionWrapper className="py-24 bg-gray-100 dark:bg-brand-darkBg transition-colors duration-500">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-gray-800 dark:text-white">
            Nearby Popular Places
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Experience the spiritual charm and cultural richness of Vrindavan
            with renowned landmarks just minutes away.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {places.map((place, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer"
            >

              {/* Image */}
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-[280px] object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Hover Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4
                              opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0
                              transition-all duration-500 text-white">

                <h3 className="text-xl font-semibold">
                  {place.name}
                </h3>

                <p className="mt-2 text-sm text-gray-200">
                  {place.distance} Away
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </SectionWrapper>
  );
}