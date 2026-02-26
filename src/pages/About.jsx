// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SectionWrapper from "../components/SectionWrapper";
import aboutBanner from "../assets/blog4.jpg";
import Footer from "../components/Footer";

export default function About() {

  const navigate = useNavigate();

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src={aboutBanner}
          alt="About Braj Bhoomi"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div>
            <h1 className="text-5xl font-bold pt-20">
              About Brij Bhoomi Properties
            </h1>

            <p className="mt-4 text-lg text-gray-200">
              Building Trust, Creating Value, Delivering Excellence
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <SectionWrapper className="py-24 bg-white dark:bg-brand-darkBg">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold text-gray-800 dark:text-white"
          >
            Our Story
          </motion.h2>

          <p className="mt-8 text-gray-600 dark:text-gray-400 leading-relaxed">
            Brij Bhoomi Properties is a trusted real estate firm located in
            the sacred land of Vrindavan. We specialize in premium residential
            plots, investment lands, and property consultancy services in prime
            locations around Mathura–Vrindavan.
          </p>

          <p className="mt-6 text-gray-600 dark:text-gray-400 leading-relaxed">
            With deep local expertise and a commitment to transparency,
            we aim to deliver secure, high-value investments for our clients
            while maintaining long-term relationships built on trust.
          </p>

        </div>
      </SectionWrapper>

      {/* Mission & Vision */}
      <SectionWrapper className="py-20 bg-gray-100 dark:bg-brand-darkBg">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div className="bg-white dark:bg-brand-darkCard p-10 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Our Mission
            </h3>

            <p className="mt-4 text-gray-600 dark:text-gray-400">
              To provide transparent, secure, and value-driven real estate
              solutions while maintaining the highest standards of integrity
              and customer satisfaction.
            </p>
          </div>

          <div className="bg-white dark:bg-brand-darkCard p-10 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Our Vision
            </h3>

            <p className="mt-4 text-gray-600 dark:text-gray-400">
              To become the most trusted and leading real estate company
              in Vrindavan and Mathura by delivering excellence,
              innovation, and long-term investment value.
            </p>
          </div>

        </div>
      </SectionWrapper>

      {/* Leadership */}
      <SectionWrapper className="py-24 bg-white dark:bg-brand-darkBg">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-semibold text-gray-800 dark:text-white">
            Leadership
          </h2>

          <div className="grid md:grid-cols-2 gap-10 mt-16">

            <div className="bg-gray-100 dark:bg-brand-darkCard p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Deepak Gautam
              </h3>

              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Co-Founder with strong local expertise in real estate
                development and investment consultancy across the Braj region.
              </p>
            </div>

            <div className="bg-gray-100 dark:bg-brand-darkCard p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Manoj Kumar Aggarwal
              </h3>

              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Co-Founder committed to delivering secure,
                transparent, and customer-focused property solutions.
              </p>
            </div>

          </div>

        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="py-20 bg-[#0F3D3E] text-white text-center">

        <h2 className="text-3xl font-semibold">
          Ready to Invest in Divine Brij Bhoomi?
        </h2>

        <p className="mt-4 text-gray-200">
          Contact us today and secure your dream property in Vrindavan.
        </p>

        <button
          onClick={() => navigate("/contact")}
          className="mt-8 px-8 py-3 bg-brand-gold text-black rounded-md
          hover:scale-105 hover:shadow-xl active:scale-95 transition"
        >
          Contact Us
        </button>

      </SectionWrapper>

      <Footer />
    </>
  );
}