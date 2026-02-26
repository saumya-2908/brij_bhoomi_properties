// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import brajVatika from "../assets/brajVatika.webp";
import radhaCottage from "../assets/radhaCottage.webp";
import Sparkles from "./Sparkles";

export default function RecentProjects() {

  const projects = [
    {
      title: "Braj Vatika",
      image: brajVatika,
    },
    {
      title: "Radha Cottage",
      image: radhaCottage,
    },
  ];

  return (
    <section className="relative py-24 bg-gray-50 dark:bg-brand-darkBg overflow-hidden transition-colors duration-500">

      {/* Sparkles only in dark mode */}
      <div className="dark:block hidden absolute inset-0 z-10 pointer-events-none">
        <Sparkles />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-gray-800 dark:text-white">
            Explore Our Recent Projects
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our recent real estate projects, thoughtfully designed to blend innovation,
            luxury, and comfort, creating exceptional living spaces for a modern lifestyle.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10 mt-16">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative rounded-xl overflow-hidden group shadow-lg cursor-pointer"
            >

              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* White Border Frame */}
              <div className="absolute inset-8 border border-white scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500"></div>

              {/* Hover Text */}
              <div className="absolute inset-0 flex items-center justify-center text-center px-10">
                <div className="opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 text-white">
                  <h3 className="text-3xl font-semibold mb-4">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Welcome to <strong>{project.title.toUpperCase()}</strong> Residential Society,
                    a vision brought to life by Brij Bhoomi Properties.
                  </p>
                </div>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}