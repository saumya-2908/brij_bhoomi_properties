import { useLocation, useNavigate } from "react-router-dom";
import blogData from "../data/blogData";
import Footer from "../components/Footer";

export default function BlogCategory() {
  const location = useLocation();
  const navigate = useNavigate();

  const category =
    location.pathname.includes("real-estate")
      ? "Real Estate"
      : "Vrindavan";

  const blogs = blogData.filter((b) => b.category === category);

  return (
    <div className="pt-32 pb-20 min-h-screen 
                bg-gray-50 
                dark:bg-brand-darkBg 
                transition duration-300">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-16 
               text-gray-900 
               dark:text-white">
          {category}
        </h1>

        <div className="grid md:grid-cols-3 gap-10">

          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="cursor-pointer"
              onClick={() => navigate(`/blog/${blog.id}`)}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover"
              />

              <h3 className="text-xl font-semibold mt-6 
               text-gray-900 
               dark:text-white">
                {blog.title}
              </h3>

              <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                {blog.author} / {blog.date} / {blog.category}
              </p>

              <p className="text-gray-600 dark:text-gray-300 mt-4">
                {blog.content.substring(0, 120)}...
                <span className="text-brand-gold ml-2">
                  Read More »
                </span>
              </p>
            </div>
          ))}

        </div>
      </div>
      <Footer/>
    </div>
  );
}