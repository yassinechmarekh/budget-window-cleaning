import React from "react";
import { MdOutlineCleaningServices } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";
import serviceImg1 from "../../assets/images/services/house-washing.webp";
import serviceImg2 from "../../assets/images/services/window-cleaning.webp";
import serviceImg3 from "../../assets/images/services/gutter-cleaning.webp";
import serviceImg4 from "../../assets/images/services/driveways-and-walkways.webp";
import serviceImg5 from "../../assets/images/services/deck-washing.webp";
import serviceImg6 from "../../assets/images/services/roof-cleaning.webp";

export default function Services() {
  const services = [
    {
      image: serviceImg1,
      title: "House Washing",
      subtitle: "Office cleaning",
    },
    {
      image: serviceImg2,
      title: "Window Cleaning",
      subtitle: "Window cleaning",
    },
    {
      image: serviceImg3,
      title: "Gutter Cleaning",
      subtitle: "Office cleaning",
    },
    {
      image: serviceImg4,
      title: "Driveways and Walkways",
      subtitle: "Office cleaning",
    },
    {
      image: serviceImg5,
      title: "Deck Washing",
      subtitle: "Office cleaning",
    },
    {
      image: serviceImg6,
      title: "Roof Cleaning",
      subtitle: "Office cleaning",
    },
  ];
  return (
    <section className="py-10 bg-blue-100 mt-10 lg:mt-20" id="services">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <div className="w-full sm:w-1/2">
            <div className="flex items-center gap-1">
              <MdOutlineCleaningServices size={20} className="text-blue-600" />
              <h3 className="text-lg text-blue-600 second-font font-semibold">
                What we do?
              </h3>
            </div>
            <h1 className="text-4xl font-bold leading-20 text-blue-900 second-font">
              We work many fields to clean your surrounding area
            </h1>
          </div>
          <a href="https://www.thumbtack.com/oh/sheffield-lake/pressure-washing/budget-window-cleaning-company/service/227731913551545364" target="_blank" className="main-btn hidden sm:flex">
            <span>start now</span>
            <MdArrowOutward size={20} />
          </a>
        </div>

        <div className="lg:grid grid-cols-4 gap-6 hidden">
          {services.map((item,index) => (
            <div
              className={`h-80 ${
                index === 0 || index === 5
                  ? "col-span-2"
                  : "col-span-1"
              } overflow-hidden bg-center bg-cover relative`}
              style={{ backgroundImage: `url(${item.image})` }}
              key={index}
            >
              <div className="p-6 absolute left-0 bottom-0 right-0 bg-gradient-to-t from-black to-[#00000001]">
                <h3 className="text-white font-bold text-2xl capitalize">
                  {item.title}
                </h3>
                <h5 className="text-blue-300 text-xl capitalize">
                  {item.subtitle}
                </h5>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden sm:grid grid-cols-3 gap-6 lg:hidden">
          {services.map((item,index) => (
            <div
              className={`h-80 ${
                index === 0 || index === 3 || index === 4
                  ? "col-span-2"
                  : "col-span-1"
              } overflow-hidden bg-center bg-cover relative`}
              style={{ backgroundImage: `url(${item.image})` }}
              key={index}
            >
              <div className="p-6 absolute left-0 bottom-0 right-0 bg-gradient-to-t from-black to-[#00000001]">
                <h3 className="text-white font-bold text-2xl capitalize">
                  {item.title}
                </h3>
                <h5 className="text-blue-300 text-xl capitalize">
                  {item.subtitle}
                </h5>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:hidden">
          {services.map((item,index) => (
            <div
              className={`h-80 overflow-hidden bg-center bg-cover relative`}
              style={{ backgroundImage: `url(${item.image})` }}
              key={index}
            >
              <div className="p-6 absolute left-0 bottom-0 right-0 bg-gradient-to-t from-black to-[#00000001]">
                <h3 className="text-white font-bold text-2xl capitalize">
                  {item.title}
                </h3>
                <h5 className="text-blue-300 text-xl capitalize">
                  {item.subtitle}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
