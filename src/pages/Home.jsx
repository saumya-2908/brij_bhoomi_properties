import Hero from "../components/Hero";
import FeaturedProperties from "../components/FeaturedProperties";
import AboutHome from "../components/AboutHome";
import StatsSection from "../components/StatsSection";
import RecentProjects from "../components/RecentProjects";
import WhyChooseUs from "../components/WhyChooseUs";
import PromoCarousel from "../components/PromoCarousel";
import NearbyPlaces from "../components/NearbyPlaces";
import LatestPosts from "../components/LatestPosts";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <AboutHome />
      <StatsSection />
      <RecentProjects />
      <WhyChooseUs/>
      <PromoCarousel/>
      <NearbyPlaces/>
      <LatestPosts/>
      <Footer/>

    <a
      href="https://wa.me/918979248799?text=Hi%20I%20want%20details%20about%20properties%20in%20Vrindavan"
      target="_blank"
     rel="noopener noreferrer"
     className="whatsapp-float"
    >
     <img
       src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
       alt="WhatsApp"
    />
  </a>
      
    </>
  );
}