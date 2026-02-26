import { Link } from "react-router-dom";
import projectsData from "../data/projectsData";
import Footer from "../components/Footer";

export default function Projects() {
  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-12 text-center">
          Our Projects
        </h1>

        <div className="grid md:grid-cols-2 gap-10">

          {projectsData.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-semibold">
                  {project.title}
                </h2>

                <p className="mt-2 text-gray-600">
                  {project.type}
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  {project.location}
                </p>

                <button className="mt-4 bg-brand-gold px-5 py-2 rounded">
                  View Details
                </button>
              </div>
            </Link>
          ))}

        </div>
      </div>
      <Footer/>
    </div>
  );
}