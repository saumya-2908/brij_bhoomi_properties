import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-brand-darkBg text-gray-700 dark:text-gray-300 transition-colors duration-500">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-10">

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
            Contact Info
          </h3>

          <p className="mb-4">
            <strong>Address:</strong><br />
            Vrindavan, Mathura, U.P
          </p>

          <p className="mb-4">
            <strong>Phone:</strong><br />
            <a href="tel:8979248799" className="hover:text-brand-gold transition">
              +91 8979248799
            </a>
            <br />
            <a href="tel:8057435804" className="hover:text-brand-gold transition">
              +91 8057435804
            </a>
          </p>

          <p>
            <strong>Email:</strong><br />
            <a
              href="mailto:brijbhoomiproperties85@gmail.com"
              className="hover:text-brand-gold transition"
            >
              brijbhoomiproperties85@gmail.com
            </a>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
            Quick Links
          </h3>

          <ul className="space-y-3">
            <li><Link to="/" className="hover:text-brand-gold transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-brand-gold transition">About Us</Link></li>
            <li><Link to="/properties" className="hover:text-brand-gold transition">Properties</Link></li>
            {/* <li><Link to="/blog" className="hover:text-brand-gold transition">Blog</Link></li> */}
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
            Important Links
          </h3>

          <ul className="space-y-3">
            {/* <li><Link to="/faq" className="hover:text-brand-gold transition">FAQ’s</Link></li> */}
            <li><Link to="/services" className="hover:text-brand-gold transition">Services</Link></li>
            <li><Link to="/contact" className="hover:text-brand-gold transition">Contact Us</Link></li>
            {/* <li><Link to="blog/real-estate" className="hover:text-brand-gold transition">Our Blogs</Link></li> */}
          </ul>
        </div>

        {/* Social Section */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
            Follow Us
          </h3>

          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/brijbhoomi.properties/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-brand-gold text-black rounded-full hover:scale-110 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61588593699256"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-brand-gold text-black rounded-full hover:scale-110 transition"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Strip */}
      <div className="border-t border-gray-300 dark:border-gray-700 py-6 text-center text-sm">
        © 2026 Brij Bhoomi Properties | All Rights Reserved.
      </div>

    </footer>
  );
}