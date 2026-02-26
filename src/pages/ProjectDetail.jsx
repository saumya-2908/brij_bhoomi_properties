import { useParams } from "react-router-dom";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import projectsData from "../data/projectsData";
import Footer from "../components/Footer";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);

  const [form, setForm] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });

  if (!project)
    return (
      <div className="pt-40 text-center dark:text-white">
        Project not found
      </div>
    );

  // ✅ Input Change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Email Send
  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      user_name: form.user_name,
      user_email: form.user_email,
      user_phone: form.user_phone,
      message: form.message,
      project_name: project.title,
    };

    emailjs
      .send(
        "service_42d17tb", // ✅ your service id
        "template_a6p0gac", // ⚠ replace
        templateParams,
        "Tjp8Y9pFJ-p3ukkuX" // ✅ public key
      )
      .then(() => {
        alert("Enquiry Sent Successfully ✅");

        setForm({
          user_name: "",
          user_email: "",
          user_phone: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send enquiry ❌");
      });
  };

  return (
    <div className="pt-32 pb-20 bg-gray-50 dark:bg-brand-darkBg min-h-screen">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* LEFT SIDE */}
        <div className="md:col-span-2">

          <img
            src={project.image}
            alt={project.title}
            className="w-full h-96 object-cover rounded-xl mb-8"
          />

          <h1 className="text-3xl font-bold mb-4 dark:text-white">
            {project.title}
          </h1>

          <p className="text-gray-600 dark:text-gray-300 mb-3">
            <strong>Project Type:</strong> {project.type}
          </p>

          <p className="text-gray-600 dark:text-gray-300 mb-3">
            <strong>Area:</strong> {project.area}
          </p>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            <strong>Location:</strong> {project.location}
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
            {project.description}
          </p>

          {/* Amenities */}
          <h2 className="text-2xl font-semibold mb-6 dark:text-white">
            Amenities / Features
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {project.amenities.map((item, index) => (
              <div
                key={index}
                className="
                  bg-white
                  dark:bg-brand-darkCard
                  text-gray-800
                  dark:text-white
                  p-4
                  rounded-xl
                  shadow-md
                  border
                  border-gray-200
                  dark:border-gray-700
                "
              >
                ✅ {item}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white dark:bg-brand-darkCard p-6 rounded-xl shadow-md h-fit">

          <h3 className="text-xl font-semibold mb-6 dark:text-white">
            Yes! I am Interested
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="user_name"
              placeholder="Name"
              value={form.user_name}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded dark:bg-gray-800 dark:text-white"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Email"
              value={form.user_email}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded dark:bg-gray-800 dark:text-white"
            />

            <input
              type="text"
              name="user_phone"
              placeholder="Mobile No."
              value={form.user_phone}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded dark:bg-gray-800 dark:text-white"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded dark:bg-gray-800 dark:text-white"
            />

            <button
              type="submit"
              className="w-full bg-brand-gold py-3 rounded font-semibold hover:scale-105 transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

      <Footer />
    </div>
  );
}