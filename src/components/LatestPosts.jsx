import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

import post1 from "../assets/blog1.jpg";
import post2 from "../assets/blog2.jpg";
import post3 from "../assets/blog3.jpg";
import post4 from "../assets/blog4.jpg";

export default function LatestPosts() {

  const posts = [
    {
      image: post1,
      category1: "Real Estate",
      category2: "Vrindavan",
      title: "Living in Vrindavan: A blend of traditional and modern comforts",
      meta: "admin • 09 December 2024",
      excerpt:
        "Vrindavan is a unique destination where tradition and modernity coexist harmoniously.",
    },
    {
      image: post2,
      category1: "Investment",
      category2: "Mathura",
      title: "Why Property Investment in Mathura is Rising",
      meta: "admin • 15 January 2025",
      excerpt:
        "Discover the fast-growing real estate opportunities in Mathura.",
    },
    {
      image: post3,
      category1: "Lifestyle",
      category2: "Vrindavan",
      title: "Top Residential Areas in Vrindavan",
      meta: "admin • 22 February 2025",
      excerpt:
        "Explore the best localities for peaceful and modern living.",
    },
    {
      image: post4,
      category1: "Spiritual Living",
      category2: "Brij",
      title: "Experience Spiritual Living in Brij Bhoomi",
      meta: "admin • 10 March 2025",
      excerpt:
        "Living close to sacred temples enhances lifestyle and peace.",
    },
  ];

  const [[current, direction], setCurrent] = useState([0, 0]);

  const paginate = (newDirection) => {
    setCurrent(([prev]) => [
      (prev + newDirection + posts.length) % posts.length,
      newDirection,
    ]);
  };

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 400 : -400,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -400 : 400,
      opacity: 0,
    }),
  };

  return (
    <SectionWrapper className="py-24 bg-gray-100 dark:bg-brand-darkBg transition-colors duration-500">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-gray-800 dark:text-white">
            Explore Our Latest Posts
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover fresh ideas, expert insights, and trending topics crafted to keep you informed.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl h-[500px]">

          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={current}
              src={posts[current].image}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6 }}
              className="absolute w-full h-[500px] object-cover"
            />
          </AnimatePresence>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Glass Card */}
          <div className="absolute left-10 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-lg p-10 rounded-xl w-[420px] text-white">

            <div className="flex gap-3 mb-6">
              <span className="bg-brand-gold px-3 py-1 text-sm rounded-md text-black">
                {posts[current].category1}
              </span>
              <span className="bg-brand-gold px-3 py-1 text-sm rounded-md text-black">
                {posts[current].category2}
              </span>
            </div>

            <h3 className="text-2xl font-semibold leading-snug">
              {posts[current].title}
            </h3>

            <p className="text-sm mt-4 opacity-80">
              {posts[current].meta}
            </p>

            <p className="mt-6 text-sm opacity-90">
              {posts[current].excerpt}
            </p>

            {/* <button className="mt-8 px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition duration-300">
              Read More
            </button> */}

          </div>

          {/* Left Arrow */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-5 top-1/2 -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow hover:scale-110 transition"
          >
            ‹
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => paginate(1)}
            className="absolute right-5 top-1/2 -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow hover:scale-110 transition"
          >
            ›
          </button>

        </div>

      </div>

    </SectionWrapper>
  );
}