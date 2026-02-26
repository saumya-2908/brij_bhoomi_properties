import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Properties from "./pages/Properties";
// import Blog from "./pages/Blog";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import PropertyDetails from "./pages/PropertyDetails";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Contact from "./pages/Contact";
import BlogCategory from "./pages/BlogCategory";
import BlogDetail from "./pages/BlogDetail";

import ProjectDetail from "./pages/ProjectDetail";



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/real-estate" element={<BlogCategory />} />
        <Route path="/blog/vrindavan" element={<BlogCategory />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </>
  );
}

export default App;