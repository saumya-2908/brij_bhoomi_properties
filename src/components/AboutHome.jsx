// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import aboutImg from "../assets/realEstate.jpg";
import { useNavigate } from "react-router-dom";
import Sparkles from "./Sparkles";

export default function AboutHome() {
  const navigate = useNavigate();

  return (
    <section className="relative py-24 bg-white dark:bg-brand-darkBg overflow-hidden transition-colors duration-500">

      {/* Sparkles only in dark mode */}
      <div className="dark:block hidden absolute inset-0 z-10 pointer-events-none">
        <Sparkles />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-semibold text-gray-800 dark:text-white transition-all duration-300 hover:text-brand-gold hover:scale-[1.02] cursor-default">
            About Brij Bhoomi Properties
          </h2>

          <div className="mt-6 space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed transition-all duration-300 hover:translate-x-1">
            <p>
              Brij Bhoomi Properties is a trusted real estate firm located in the
              sacred land of Vrindavan. We specialize in premium residential plots,
              investment lands, and property consultancy in prime locations around
              Mathura–Vrindavan.
            </p>

            <p>
              Led by <strong className="transition hover:text-brand-gold">Deepak Gautam</strong> and
              <strong className="transition hover:text-brand-gold"> Manoj Kumar Aggarwal</strong>,
              we aim to provide secure, transparent, and high-value property investments.
            </p>
          </div>

          <div className="mt-6 text-gray-700 dark:text-gray-300 text-sm space-y-3">

            <p>
              <strong>Address:</strong>{" "}
              <a
                href="https://www.google.com/maps/search/Radha+Kund+Road+Chhatikara+Vrindavan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-gold transition"
              >
                Radha Kund Road, Near Maghera Hanuman Ji Mandir,
                Chhatikara, Vrindavan – 281001
              </a>
            </p>

            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:8979248799" className="hover:text-brand-gold transition">
                8979248799
              </a>
              {" , "}
              <a href="tel:8057435804" className="hover:text-brand-gold transition">
                8057435804
              </a>
            </p>

            <p>
              <strong>WhatsApp:</strong>{" "}
              <a
                href="https://wa.me/918979248799"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-gold transition"
              >
                Chat on WhatsApp
              </a>
            </p>

          </div>

          <button
            onClick={() => navigate("/about")}
            className="mt-8 px-8 py-3 bg-brand-gold text-black font-medium rounded-md hover:scale-105 transition duration-300 shadow-md"
          >
            Know More
          </button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-xl"
        >
          <img
            src={aboutImg}
            alt="About Brij Bhoomi"
            className="w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </motion.div>

      </div>
    </section>
  );
}