import { useParams } from "react-router-dom";
import blogData from "../data/blogData";
import Footer from "../components/Footer";

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === Number(id));

  if (!blog) return <div className="pt-32">Blog not found</div>;

  return (
    <div className="pt-24">

      {/* Hero */}
      <div className="relative h-[400px]">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="max-w-6xl mx-auto px-6 text-white">
            <p className="text-sm mb-4">
              {blog.author} / {blog.date} / {blog.category}
            </p>

            <h1 className="text-4xl font-bold max-w-3xl">
              {blog.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-20 text-gray-700 dark:text-gray-300">

  {blog.content.split("\n").map((line, index) => {

    if (line.startsWith("##")) {
      return (
        <h2 key={index} className="text-2xl font-semibold mt-8 mb-4 dark:text-white">
          {line.replace("##", "")}
        </h2>
      );
    }

    if (line.trim() === "") {
      return <br key={index} />;
    }

    return (
      <p key={index} className="mb-4 leading-relaxed">
        {line}
      </p>
    );
  })}

</div>
 <Footer/>
    </div>
  );
}