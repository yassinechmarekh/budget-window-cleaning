import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import { MdOutlineCleaningServices } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";
import { LiaStarSolid } from "react-icons/lia";

import testimonialImg1 from "../../assets/images/testimoniels/Danny-Green.webp";
import testimonialImg2 from "../../assets/images/testimoniels/Richard-Mayer.webp";
import testimonialImg3 from "../../assets/images/testimoniels/John-Tobik.webp";
import testimonialImg4 from "../../assets/images/testimoniels/Laura-Hall.webp";

import "swiper/css";
import "swiper/css/autoplay";

export default function Testimoniels() {
  const testimonials = [
    {
      comment:
        "Been using Budget Window Cleaning for years. Twice a year I have them clean all windows & my sunroom inside and out. They always do a good job & are fair priced, efficient & courteous!",
      image: testimonialImg1,
      name: "Danny Green",
      rating: 5,
      date: "18/04/2017",
    },
    {
      comment:
        "Ben and Jeremy did a very good job! They were attentive to our questions about the work and were very respectful working throughout our home. I definitely recommend them!",
      image: testimonialImg2,
      name: "Richard Mayer",
      rating: 5,
      date: "07/08/2025",
    },
    {
      comment:
        "Budget Window Cleaning did an excellent job cleaning our siding, windows and roof. Mike and his helper were very pleasant and easy to deal with. I'd recommend their services.",
      image: testimonialImg3,
      name: "John Tobik",
      rating: 5,
      date: "13/05/2017",
    },
    {
      comment:
        "They did an amazing job .. a hidden spot of algae was above a peak of the roof and they got to it with no problem.. great team ! Would recommend because my windows and siding are sparkling!!",
      image: testimonialImg4,
      name: "Laura Hall",
      rating: 5,
      date: "05/07/2025",
    },
  ];
  return (
    <section className="pt-10 bg-white" id="testimonials">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-between items-center"
        >
          <div className="w-full sm:w-1/2">
            <div className="flex items-center gap-1">
              <MdOutlineCleaningServices size={20} className="text-blue-600" />
              <h3 className="text-lg text-blue-600 second-font font-semibold">
                Client’s Testimonials
              </h3>
            </div>
            <h1 className="text-4xl font-bold leading-20 text-blue-900 second-font">
              We are very happy for client’s reviews.
            </h1>
          </div>
          <a
            href="https://www.thumbtack.com/oh/sheffield-lake/pressure-washing/budget-window-cleaning-company/service/227731913551545364"
            target="_blank"
            className="main-btn hidden sm:flex"
          >
            <span>start now</span>
            <MdArrowOutward size={20} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              650: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.1 }}
                  className="my-10 py-6 px-8 border border-blue-500 rounded-md hover:shadow-xl transition-all duration-300 ease-in-out"
                >
                  <p className="text-slate-500 mb-4">"{item.comment}"</p>
                  <div className="flex items-center gap-2">
                    <img
                      src={item.image}
                      alt=""
                      className="w-16 rounded-full p-1 border-2 border-blue-500"
                    />
                    <div>
                      <div className="mb-1">
                        <h4 className="text-lg text-blue-500 font-bold">
                          {item.name}
                        </h4>
                        <h5 className="text-sm text-slate-600">
                          Date : {item.date}
                        </h5>
                      </div>
                      <div className="flex gap-1 text-yellow-500">
                        {Array.from({ length: item.rating }, (_, i) => (
                          <LiaStarSolid key={i} size={16} />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
