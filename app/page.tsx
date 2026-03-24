import About from "@/components/all-pages/About";
import Contact from "@/components/all-pages/Contact";
import Gallery from "@/components/all-pages/Gallery";
import Hero from "@/components/all-pages/Hero";
import LogisticsExports from "@/components/all-pages/LogisticsExports";
import PaymentOptions from "@/components/all-pages/PaymentOpt";
import Products from "@/components/all-pages/Products";
import Quality from "@/components/all-pages/Qa";
import WhyChooseUs from "@/components/all-pages/WhyChooseUs";
import { GoToTop } from "@/components/ui/GoToTop";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import VisitorCount from "@/components/ui/VisitCount";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";

const page = () => {
  return (
    <section className="">
      <ScrollProgress />
      {/* widgets */}
      <VisitorCount />
      <GoToTop />
      <WhatsAppWidget />
      {/* sections */}
      <Hero />
      <About />
      <Products />
      <Gallery />
      <Quality />
      <LogisticsExports />
      <WhyChooseUs />
      <PaymentOptions />
      <Contact />
    </section>
  );
};

export default page;
