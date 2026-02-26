import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/vrindavan4.png";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMore, setOpenMore] = useState(false);
  const [openBlog, setOpenBlog] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const moreRef = useRef();
  const blogRef = useRef();
  const location = useLocation();

  // Theme Load
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDark(!dark);
  };

  // Scroll Detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setOpenMore(false);
      }
      if (blogRef.current && !blogRef.current.contains(e.target)) {
        setOpenBlog(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Background Logic
  const navbarBg =
    location.pathname === "/"
      ? scrolled
        ? "bg-white dark:bg-brand-darkBg shadow-md"
        : "bg-transparent"
      : "bg-white dark:bg-brand-darkBg shadow-md";

  const textColor =
    location.pathname === "/"
      ? scrolled
        ? "text-gray-800 dark:text-white"
        : "text-white"
      : "text-gray-800 dark:text-white";

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-300 ${navbarBg}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-6">

        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="w-20 cursor-pointer" />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-lg font-medium items-center">

          <li><Link to="/" className={`${textColor} hover:text-brand-gold transition`}>Home</Link></li>
          <li><Link to="/about" className={`${textColor} hover:text-brand-gold transition`}>About Us</Link></li>
          <li><Link to="/services" className={`${textColor} hover:text-brand-gold transition`}>Services</Link></li>
          <li><Link to="/projects" className={`${textColor} hover:text-brand-gold transition`}>Projects</Link></li>
          <li><Link to="/properties" className={`${textColor} hover:text-brand-gold transition`}>Properties</Link></li>

          {/* Blog Dropdown */}
          <li className="relative" ref={blogRef}>
            <button
              onClick={() => setOpenBlog(!openBlog)}
              className={`${textColor} hover:text-brand-gold transition`}
            >
              Blog ▾
            </button>

            {openBlog && (
              <div className="absolute right-0 mt-4 w-52 bg-white dark:bg-brand-darkCard rounded-xl shadow-lg py-3">
                <Link to="/blog/real-estate" onClick={() => setOpenBlog(false)} className="block px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Real Estate</Link>
                <Link to="/blog/vrindavan" onClick={() => setOpenBlog(false)} className="block px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Vrindavan</Link>
              </div>
            )}
          </li>

          {/* More Dropdown */}
          <li className="relative" ref={moreRef}>
            <button
              onClick={() => setOpenMore(!openMore)}
              className={`${textColor} hover:text-brand-gold transition`}
            >
              More ▾
            </button>

            {openMore && (
              <div className="absolute right-0 mt-4 w-52 bg-white dark:bg-brand-darkCard rounded-xl shadow-lg py-3">
                <Link to="/privacy-policy" onClick={() => setOpenMore(false)} className="block px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Privacy Policy</Link>
                <Link to="/contact" onClick={() => setOpenMore(false)} className="block px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Contact Us</Link>
              </div>
            )}
          </li>

        </ul>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden text-3xl ${textColor}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>

        {/* Dark Toggle */}
        <button
          onClick={toggleTheme}
          className="ml-4 px-4 py-2 border border-brand-gold text-brand-gold rounded-full"
        >
          {dark ? "☀" : "🌙"}
        </button>

      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-brand-darkBg px-6 py-6 space-y-4 shadow-lg">
          <Link to="/" onClick={() => setMobileOpen(false)} className="block text-gray-800 dark:text-white hover:text-brand-gold">Home</Link>
          <Link to="/about" onClick={() => setMobileOpen(false)} className="block text-gray-800 dark:text-white hover:text-brand-gold">About Us</Link>
          <Link to="/services" onClick={() => setMobileOpen(false)} className="block text-gray-800 dark:text-white hover:text-brand-gold">Services</Link>
          <Link to="/projects" onClick={() => setMobileOpen(false)} className="block text-gray-800 dark:text-white hover:text-brand-gold">Projects</Link>
          <Link to="/properties" onClick={() => setMobileOpen(false)} className="block text-gray-800 dark:text-white hover:text-brand-gold">Properties</Link>
          <Link to="/blog" onClick={() => setMobileOpen(false)} className="block text-gray-800 dark:text-white hover:text-brand-gold">Blog</Link>
          <Link to="/privacy-policy" onClick={() => setMobileOpen(false)} className="block text-gray-800 dark:text-white hover:text-brand-gold">Privacy Policy</Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)} className="block text-gray-800 dark:text-white hover:text-brand-gold">Contact Us</Link>
        </div>
      )}
    </motion.nav>
  );
}