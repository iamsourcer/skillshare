
import Hero from "@/components/Hero";
import FeaturedCourses from "@/components/FeaturedCourses";
import AboutSection from "@/components/AboutSection";
import Statistics from "@/components/Statistics";
import CompanyCarousel from "@/components/CompanyCarousel";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <FeaturedCourses />
      <AboutSection />
      <Statistics />
      <CompanyCarousel />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
