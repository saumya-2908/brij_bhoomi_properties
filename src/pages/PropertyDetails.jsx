import { useParams, useNavigate } from "react-router-dom";
import SectionWrapper from "../components/SectionWrapper";

import plot1 from "../assets/plot1.jpg";
import plot2 from "../assets/plot2.jpg";
import plot3 from "../assets/plot3.avif";
import plot4 from "../assets/plot4.jpg";

export default function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const properties = [
    {
      id: 1,
      title: "100 sq/yd Plot in Shri Ji Dham Phase-1",
      location: "Vrindavan, Mathura, U.P",
      image: plot1,
      size: "100 sq/yd",
      type: "Plot",
      phase: "Phase-1",
      description:
        "Premium 100 sq/yd plot located in Shri Ji Dham Phase-1. Ideal for residential investment with high appreciation potential.",
    },
    {
      id: 2,
      title: "100 sq/yd Residential Plot in Shri Ji Dham Phase-3",
      location: "Vrindavan, Mathura, U.P",
      image: plot2,
      size: "100 sq/yd",
      type: "Residential",
      phase: "Phase-3",
      description:
        "Residential plot in Shri Ji Dham Phase-3 offering peaceful surroundings and strong investment growth.",
    },
    {
      id: 3,
      title: "138 sq/yd Plot in Shri Ji Dham Phase-3",
      location: "Vrindavan, Mathura, U.P",
      image: plot3,
      size: "138 sq/yd",
      type: "Plot",
      phase: "Phase-3",
      description:
        "Spacious 138 sq/yd plot perfect for premium residential construction in a prime Vrindavan location.",
    },
    {
      id: 4,
      title: "100 sq/yd Plot in Shri Ji Dham Phase-2",
      location: "Vrindavan, Mathura, U.P",
      image: plot4,
      size: "100 sq/yd",
      type: "Plot",
      phase: "Phase-2",
      description:
        "Strategically located plot in Phase-2 with strong connectivity and future appreciation potential.",
    },
  ];

  const property = properties.find((p) => p.id === Number(id));

  if (!property) return <div className="pt-40 text-center">Property Not Found</div>;

  return (
    <SectionWrapper className="pt-32 pb-20 bg-white dark:bg-brand-darkBg">

      <div className="max-w-6xl mx-auto px-6">

        {/* Main Image */}
        <div className="relative">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-[450px] object-cover rounded-xl"
          />
          <span className="absolute top-6 left-6 bg-brand-gold text-black px-4 py-2 rounded-full text-sm font-semibold">
            Featured
          </span>
        </div>

        {/* Title */}
        <div className="mt-10">
          <h1 className="text-3xl font-semibold dark:text-white">
            {property.title}
          </h1>

          <p className="text-gray-600 dark:text-gray-400 mt-2">
            {property.location}
          </p>
        </div>

        {/* Details Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-10">

          <div className="bg-gray-100 dark:bg-brand-darkCard p-6 rounded-lg">
            <h4 className="font-semibold mb-2">Plot Size</h4>
            <p>{property.size}</p>
          </div>

          <div className="bg-gray-100 dark:bg-brand-darkCard p-6 rounded-lg">
            <h4 className="font-semibold mb-2">Type</h4>
            <p>{property.type}</p>
          </div>

          <div className="bg-gray-100 dark:bg-brand-darkCard p-6 rounded-lg">
            <h4 className="font-semibold mb-2">Phase</h4>
            <p>{property.phase}</p>
          </div>

        </div>

        {/* Description */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4 dark:text-white">
            Description
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {property.description}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-6 mt-10">
          <a
            href="tel:8979248799"
            className="px-6 py-3 bg-brand-gold text-black rounded-lg font-medium hover:scale-105 transition"
          >
            Call Now
          </a>

          <a
            href="https://wa.me/918979248799"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-500 text-white rounded-lg font-medium hover:scale-105 transition"
          >
            WhatsApp Inquiry
          </a>

          <button
            onClick={() => navigate("/properties")}
            className="px-6 py-3 border rounded-lg"
          >
            Back to Properties
          </button>
        </div>

      </div>
    </SectionWrapper>
  );
}