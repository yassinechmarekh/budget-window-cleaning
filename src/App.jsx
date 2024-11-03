import Banner from "./components/banner/banner";
import Faq from "./components/faq/Faq";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Testimoniels from "./components/testimoniels/Testimoniels";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Footer from "./components/footer/Footer";

import { IoIosArrowUp } from "react-icons/io";
import { useEffect, useState } from "react";

function App() {
  const menuLinks = [
    "home",
    "why choose us ?",
    "services",
    "testimonials",
    "faq",
  ];
  const [showBtnTop, setshowBtnTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY >= 300) {
        setshowBtnTop(true);
      } else {
        setshowBtnTop(false);
      }
    });
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {showBtnTop && (
        <span
          className="btn-back-top"
          onClick={scrollToTop}
        >
          <IoIosArrowUp size={24} />
        </span>
      )}
      <Header links={menuLinks} />
      <Hero />
      <WhyChooseUs />
      <Services />
      <Banner />
      <Testimoniels />
      <Faq />
      <Footer links={menuLinks} />
    </>
  );
}

export default App;
