// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import whyImage from "../assets/whyChooseUs.jpg";

export default function WhyChooseUs() {

  const features = [
    {
      title: "Prime Location Advantage",
      desc: "Vrindavan and Mathura are spiritual hubs, attracting millions of visitors and residents, ensuring a constant demand for real estate."
    },
    {
      title: "High Appreciation Potential",
      desc: "The real estate market in this region has seen significant growth, with property values rising steadily over the years."
    },
    {
      title: "Tourism and Pilgrimage Boost",
      desc: "As major religious destinations, the continuous influx of pilgrims drives up rental yields and long-term property value."
    },
    {
      title: "Spiritual and Cultural Significance",
      desc: "Investing in Vrindavan is not just a financial decision but also a spiritual one."
    }
  ];

  return (
    <SectionWrapper className="py-24 bg-white dark:bg-brand-darkBg transition-colors duration-500">

      <div className="max-w-7xl mx-auto px-6">

        {/* CENTER HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-gray-800 dark:text-white">
            Why Invest in Braj Bhoomi Properties?
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover the financial strength, spiritual significance,
            and long-term investment potential of one of India’s most sacred regions.
          </p>
        </div>

        {/* IMAGE + CARDS */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={whyImage}
              alt="Why Invest"
              className="w-full h-[500px] object-cover rounded-xl shadow-xl"
            />
          </motion.div>

          {/* CARDS */}
          <div className="grid sm:grid-cols-2 gap-6">

            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-50 dark:bg-brand-darkCard p-6 rounded-xl border border-gray-200 dark:border-gray-700"
              >
                <div className="w-12 h-12 mb-4 rounded-full bg-brand-gold flex items-center justify-center text-black">
                  ★
                </div>

                <h3 className="text-sm font-semibold text-gray-800 dark:text-white">
                  {feature.title}
                </h3>

                <p className="mt-2 text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}

          </div>

        </div>

      </div>

    </SectionWrapper>
  );
}