import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SectionWrapper from "../components/SectionWrapper";
import Footer from "../components/Footer";

import plot1 from "../assets/plot1.jpg";
import plot2 from "../assets/plot2.jpg";
import plot3 from "../assets/plot3.avif";
import plot4 from "../assets/plot4.jpg";

export default function Properties() {
  const navigate = useNavigate();

  const allProperties = [
    {
      id: 1,
      title: "100 sq/yd Plot in Shri Ji Dham Phase-1",
      location: "Vrindavan, Mathura, U.P",
      type: "Plot",
      image: plot1,
      featured: true,
    },
    {
      id: 2,
      title: "100 sq/yd Residential Plot in Shri Ji Dham Phase-3",
      location: "Vrindavan, Mathura, U.P",
      type: "Residential",
      image: plot2,
      featured: true,
    },
    {
      id: 3,
      title: "138 sq/yd Plot in Shri Ji Dham Phase-3",
      location: "Vrindavan, Mathura, U.P",
      type: "Plot",
      image: plot3,
      featured: true,
    },
    {
      id: 4,
      title: "100 sq/yd Plot in Shri Ji Dham Phase-2",
      location: "Vrindavan, Mathura, U.P",
      type: "Plot",
      image: plot4,
      featured: true,
    },
  ];

  const [view, setView] = useState("list");
  const [typeFilter, setTypeFilter] = useState("All");
  const [favourites, setFavourites] = useState([]);
  const [page, setPage] = useState(1);

  const perPage = 2;

  const toggleFavourite = (id) => {
    setFavourites((prev) =>
      prev.includes(id)
        ? prev.filter((fav) => fav !== id)
        : [...prev, id]
    );
  };

  const filtered =
    typeFilter === "All"
      ? allProperties
      : allProperties.filter((p) => p.type === typeFilter);

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice(
    (page - 1) * perPage,
    page * perPage
  );

  return (
    <>
      <SectionWrapper className="pt-32 pb-20 bg-gray-50 dark:bg-brand-darkBg">

        <div className="max-w-7xl mx-auto px-6">

          {/* Filter + View Toggle */}
          <div className="flex flex-wrap gap-4 mb-10 items-center">
            <select
              onChange={(e) => {
                setTypeFilter(e.target.value);
                setPage(1);
              }}
              className="px-4 py-2 rounded border dark:bg-brand-darkCard"
            >
              <option value="All">All Types</option>
              <option value="Plot">Plot</option>
              <option value="Residential">Residential</option>
            </select>

            <div className="flex gap-2 ml-auto">
              <button
                onClick={() => setView("grid")}
                className="px-4 py-2 border rounded"
              >
                Grid
              </button>
              <button
                onClick={() => setView("list")}
                className="px-4 py-2 border rounded"
              >
                List
              </button>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-6 dark:text-white">
            {filtered.length} Results
          </h2>

          <div className={view === "grid" ? "grid md:grid-cols-2 gap-8" : "space-y-8"}>

            {paginated.map((property) => (
              <motion.div
                key={property.id}
                whileHover={{ scale: 1.01 }}
                className={`bg-white dark:bg-brand-darkCard rounded-xl shadow-md overflow-hidden cursor-pointer ${
                  view === "list" ? "flex flex-col md:flex-row" : ""
                }`}
                onClick={() => navigate(`/property/${property.id}`)}
              >
                <div className={view === "list" ? "md:w-1/3 relative" : "relative"}>
                  <img
                    src={property.image}
                    alt={property.title}
                    className={
                      view === "list"
                        ? "w-full h-full object-cover"
                        : "w-full h-60 object-cover"
                    }
                  />

                  <div className="absolute top-4 left-4 flex gap-2">
                    {property.featured && (
                      <span className="bg-brand-gold text-black text-xs px-3 py-1 rounded-full font-semibold">
                        Featured
                      </span>
                    )}
                    <span className="bg-orange-400 text-white text-xs px-3 py-1 rounded-full">
                      Just Listed
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between w-full">

                  <div>
                    <h3 className="text-xl font-semibold dark:text-white">
                      {property.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      {property.location}
                    </p>

                    <div className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                      {property.type} • For sale
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-6">
                    <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-sm rounded-full">
                      Call for price
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavourite(property.id);
                      }}
                      className="text-2xl"
                    >
                      {favourites.includes(property.id) ? "❤️" : "🤍"}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-4 mt-12">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="px-4 py-2 border rounded"
            >
              Prev
            </button>

            <span className="px-4 py-2">
              {page} / {totalPages}
            </span>

            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="px-4 py-2 border rounded"
            >
              Next
            </button>
          </div>

        </div>
      </SectionWrapper>

      <Footer />
    </>
  );
}