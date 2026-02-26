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
      
    </>
  );
}