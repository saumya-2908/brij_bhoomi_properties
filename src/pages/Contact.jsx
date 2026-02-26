import { useState } from "react";
import emailjs from "@emailjs/browser";
import SectionWrapper from "../components/SectionWrapper";
import Footer from "../components/Footer";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Input Change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ EMAIL SEND
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_42d17tb",
        "template_a6p0gac",
        {
          user_name: form.name,
          user_email: form.email,
          user_phone: form.phone,
          message: form.message,
        },
        "Tjp8Y9pFJ-p3ukkuX"
      )
      .then(() => {
        alert("✅ Enquiry Sent Successfully!");

        setForm({
          name: "",
          phone: "",
          email: "",
          message: "",
        });

        setLoading(false);
      })
      .catch(() => {
        alert("❌ Failed to send message");
        setLoading(false);
      });
  };

  return (
    <>
      {/* HERO */}
      <div className="pt-32 pb-20 bg-gray-100 dark:bg-brand-darkBg text-center">

        <h1 className="text-5xl font-bold dark:text-white pt-10">
          Contact Us
        </h1>

        <p className="mt-4 text-3xl text-gray-600 dark:text-gray-400">
          PLOT | FLAT | VILLA | SHOP
        </p>

        <p className="mt-2 text-2xl font-semibold text-brand-gold">
          📞 +91 8979248799
        </p>

      </div>

      {/* MAIN SECTION */}
      <SectionWrapper className="py-16 bg-white dark:bg-brand-darkBg">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="block mb-2 dark:text-white">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-brand-gold dark:bg-brand-darkCard"
                />
              </div>

              <div>
                <label className="block mb-2 dark:text-white">
                  Mobile no.
                </label>

                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-brand-gold dark:bg-brand-darkCard"
                />
              </div>

            </div>

            <div>
              <label className="block mb-2 dark:text-white">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-brand-gold dark:bg-brand-darkCard"
              />
            </div>

            <div>
              <label className="block mb-2 dark:text-white">
                Message
              </label>

              <textarea
                name="message"
                rows="6"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-brand-gold dark:bg-brand-darkCard"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#2e6f89] hover:bg-[#255c72] text-white py-4 rounded-full text-lg font-semibold transition"
            >
              {loading ? "Sending..." : "Submit"}
            </button>

          </form>

          {/* CONTACT INFO */}
          <div className="space-y-8">

            {/* CALL */}
            <a
              href="tel:+918979248799"
              className="block p-8 border rounded-2xl shadow-md hover:shadow-lg transition dark:bg-brand-darkCard"
            >
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                📞 Call Us:
              </h3>

              <p className="text-gray-600 dark:text-gray-400">
                +91 8979248799
              </p>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:brijbhoomiproperties85@gmail.com"
              className="block p-8 border rounded-2xl shadow-md hover:shadow-lg transition dark:bg-brand-darkCard"
            >
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                ✉ Mail Us:
              </h3>

              <p className="text-gray-600 dark:text-gray-400">
                brijbhoomiproperties85@gmail.com
              </p>
            </a>

            {/* ADDRESS */}
            <a
              href="https://maps.google.com/?q=Vrindavan,Mathura,Uttar Pradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-8 border rounded-2xl shadow-md hover:shadow-lg transition dark:bg-brand-darkCard"
            >
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                📍 Address:
              </h3>

              <p className="text-gray-600 dark:text-gray-400">
                Vrindavan, Mathura, U.P
              </p>
            </a>

          </div>

        </div>

      </SectionWrapper>

      <Footer />
    </>
  );
}