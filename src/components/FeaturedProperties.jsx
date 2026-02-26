// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import AmbientGlow from "./AmbientGlow";
import Sparkles from "./Sparkles";

export default function FeaturedProperties() {
  const navigate = useNavigate();

  const [showContact, setShowContact] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const [form, setForm] = useState({
    user_name: "",
    user_phone: "",
    user_email: "",
    message: "",
  });

  // ✅ Dark Mode Detection
  useEffect(() => {
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkDark();

    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // ✅ Input Change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Send Email
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_42d17tb", // ✅ your service id
        "template_a6p0gac", // ⚠ replace
       
        form,
        "Tjp8Y9pFJ-p3ukkuX"
      )
      .then(() => {
        alert("Enquiry Sent Successfully ✅");

        setForm({
          user_name: "",
          user_phone: "",
          user_email: "",
          message: "",
        });

        setShowContact(false);
      })
      .catch(() => {
        alert("Failed to send enquiry ❌");
      });
  };

  const properties = [
    {
      title: "100 sq/yd Plot in Shri Ji Dham Phase-1",
      location: "Vrindavan, Mathura, U.P",
      tags: ["Land", "Plot", "For sale"],
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
    },
    {
      title: "100 sq/yd Residential Plot in Shri Ji Dham",
      location: "Vrindavan, Mathura, U.P",
      tags: ["Land", "Plot", "For sale"],
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    },
    {
      title: "138 sq/yd Plot in Shri Ji Dham Phase-3",
      location: "Vrindavan, Mathura, U.P",
      tags: ["Land", "Plot", "For sale"],
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156",
    },
  ];

  return (
    <section className="relative py-24 bg-gray-50 dark:bg-brand-darkBg overflow-hidden">

      <AmbientGlow />

      {isDark && (
        <div className="absolute inset-0 pointer-events-none z-20">
          <Sparkles />
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-gray-800 dark:text-white">
            Featured Properties
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {properties.map((property, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-brand-darkCard rounded-xl shadow-md overflow-hidden"
            >
              <div className="relative">

                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-56 object-cover"
                />

                {/* ❤️ HEART → CONTACT FORM */}
                <div
                  onClick={() => setShowContact(true)}
                  className="absolute top-4 right-4 bg-white rounded-lg p-2 shadow cursor-pointer hover:scale-110 transition"
                >
                  ❤️
                </div>

              </div>

              <div className="p-6">
                <h3 className="font-semibold text-lg dark:text-white">
                  {property.title}
                </h3>

                <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm">
                  {property.location}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-14">
          <button
            onClick={() => navigate("/properties")}
            className="px-8 py-3 bg-brand-gold text-black rounded-md hover:scale-105 transition"
          >
            View All Properties
          </button>
        </div>

      </div>

      {/* ✅ CONTACT MODAL */}
      {showContact && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

          <div className="bg-white dark:bg-brand-darkCard w-[90%] md:w-[420px] p-8 rounded-xl relative">

            <button
              onClick={() => setShowContact(false)}
              className="absolute top-4 right-4"
            >
              ✖
            </button>

            <h2 className="text-2xl font-semibold text-center dark:text-white mb-6">
              Property Enquiry
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                name="user_name"
                placeholder="Your Name"
                value={form.user_name}
                onChange={handleChange}
                required
                className="w-full border p-3 rounded dark:bg-gray-800"
              />

              <input
                name="user_phone"
                placeholder="Mobile Number"
                value={form.user_phone}
                onChange={handleChange}
                required
                className="w-full border p-3 rounded dark:bg-gray-800"
              />

              <input
                name="user_email"
                placeholder="Email"
                value={form.user_email}
                onChange={handleChange}
                required
                className="w-full border p-3 rounded dark:bg-gray-800"
              />

              <textarea
                name="message"
                placeholder="I'm interested in this property"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full border p-3 rounded dark:bg-gray-800"
              />

              <button className="w-full bg-brand-gold py-3 rounded font-semibold">
                Send Enquiry
              </button>

            </form>

          </div>
        </div>
      )}
    </section>
  );
}