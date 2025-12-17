import HeroSection from "../components/home/HeroSection";
import FacilitiesSection from "../components/home/FacilitiesSection";
import ServicesSection from "../components/home/ServicesSection";
import TrainersSection from "../components/home/TrainersSection";
import ScheduleSection from "../components/home/ScheduleSection";
import PlansSection from "../components/home/PlansSection";
import TestimonialSection from "../components/home/TestimonialSection";
import FAQSection from "../components/home/FAQSection";
import ContactSection from "../components/home/ContactSection";
import Footer from "../components/layout/Footer";
import ScrollTopButton from "../components/ul/ScrollTopButton"


export default function Home() {
  return (
    <>
      <HeroSection />
      <FacilitiesSection />
      <ServicesSection />
      <TrainersSection />
      <ScheduleSection />
      <PlansSection />
      <TestimonialSection />
      <FAQSection />
      <ContactSection />
      <Footer/>
      <ScrollTopButton/>
    </>
  );
}