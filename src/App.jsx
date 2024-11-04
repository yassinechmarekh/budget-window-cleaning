import Banner from "./components/banner/Banner";
import Faq from "./components/faq/Faq";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Testimoniels from "./components/testimoniels/Testimoniels";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Footer from "./components/footer/Footer";
import Loader from "./Loader";

import { motion } from "framer-motion"

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
  const [showLoader, setShowLoader] = useState(false);
  useEffect(()=>{
    const handleLoad = () => {
      setShowLoader(false);
    };

    window.addEventListener('load', handleLoad);
    
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  },[])
  return (
    <>
      {showLoader && <Loader/>}
      {showBtnTop && (
        <motion.span
          className="btn-back-top"
          onClick={scrollToTop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <IoIosArrowUp size={24} />
        </motion.span>
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
