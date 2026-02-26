// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import servicesBanner from "../assets/servicesBanner.jpg";

import sellIcon from "../assets/sell.webp";
import buyIcon from "../assets/buy.webp";
import consultIcon from "../assets/consultant.webp";
import manageIcon from "../assets/management.webp";
import Footer from "../components/Footer";

export default function Services() {
  const services = [
    {
      title: "Sell Property",
      icon: sellIcon,
      description:
        "Our Sell Property service provides expert assistance in selling residential, commercial, and agricultural properties in Mathura–Vrindavan. We handle valuation, marketing, and legal documentation for a smooth process.",
    },
    {
      title: "Buy Property",
      icon: buyIcon,
      description:
        "Our Buy Property service offers complete support for purchasing residential and commercial properties. We assist with property searches, site visits, and documentation.",
    },
    {
      title: "Real Estate Consultation",
      icon: consultIcon,
      description:
        "We provide expert advice on property investments, market trends, valuation, and legal aspects to help you make secure and profitable decisions.",
    },
    {
      title: "Property Management",
      icon: manageIcon,
      description:
        "Our Property Management service provides tenant management, rent collection, maintenance, and complete care for property owners.",
    },
  ];

  return (
    <>
      {/* HERO BANNER */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src={servicesBanner}
          alt="Services"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Services</h1>
          
        </div>
      </section>

      {/* SERVICES GRID */}
      <SectionWrapper className="py-24 bg-gray-100 dark:bg-brand-darkBg transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-brand-darkCard p-10 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-28 md:w-32 mb-8 transition-transform duration-300 group-hover:scale-110"
              />

              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                {service.title}
              </h3>

              <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}

        </div>
      </SectionWrapper>
      <Footer/>
    </>
  );
}