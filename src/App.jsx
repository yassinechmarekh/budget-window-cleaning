import Banner from "./components/banner/banner"
import Faq from "./components/faq/Faq"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Services from "./components/services/Services"
import Testimoniels from "./components/testimoniels/Testimoniels"
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs"
import Footer from "./components/footer/Footer"

function App() {
  const menuLinks = [
    "home",
    "why choose us ?",
    "services",
    "testimonials",
    "faq",
  ];
  return (
    <>
     <Header links={menuLinks}/>
     <Hero/>
     <WhyChooseUs/>
     <Services/>
     <Banner/>
     <Testimoniels/>
     <Faq/>
     <Footer links={menuLinks}/>
    </>
  )
}

export default App
