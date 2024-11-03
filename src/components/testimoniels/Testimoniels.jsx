import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import { MdOutlineCleaningServices } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";
import { LiaStarSolid } from "react-icons/lia";

import testimonialImg1 from "../../assets/images/testimoniels/01.webp";
import testimonialImg2 from "../../assets/images/testimoniels/02.webp";
import testimonialImg3 from "../../assets/images/testimoniels/03.webp";
import testimonialImg4 from "../../assets/images/testimoniels/04.webp";


import 'swiper/css';
import 'swiper/css/autoplay';

export default function Testimoniels() {
    const testimonials = [
        {
            comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil tempore impedit quia suscipit molestiae.',
            image: testimonialImg1,
            name: 'Moe Ammar',
            rating: 5,
            date: '27/03/2023'
        },
        {
            comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil tempore impedit quia suscipit molestiae.',
            image: testimonialImg2,
            name: 'Jeff Adams',
            rating: 5,
            date: '19/08/2022'
        },
        {
            comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil tempore impedit quia suscipit molestiae.',
            image: testimonialImg3,
            name: 'Farhan Rio',
            rating: 4,
            date: '10/01/2022'
        },
        {
            comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil tempore impedit quia suscipit molestiae.',
            image: testimonialImg4,
            name: 'Amy Herzog',
            rating: 5,
            date: '05/09/2024'
        }
    ];
  return (
    <section className="py-10 bg-white">
      <div className="container">
        <div className="flex justify-between items-center">
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
          <a href="#" className="main-btn hidden sm:flex">
            <span>start now</span>
            <MdArrowOutward size={20} />
          </a>
        </div>

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
            {testimonials.map((item,index)=>(
                <SwiperSlide key={index}>
                    <div  className="my-10 py-6 px-8 border border-blue-500 rounded-md hover:shadow-xl transition-all duration-300 ease-in-out">
                        <p className="text-slate-500 mb-4">
                        "{item.comment}"
                        </p>
                        <div className="flex items-center gap-2">
                        <img
                            src={item.image}
                            alt=""
                            className="w-20 rounded-full p-1 border-2 border-blue-500"
                        />
                        <div>
                            <div className="mb-1">
                            <h4 className="text-lg text-blue-500 font-bold">
                                {item.name}
                            </h4>
                            <h5 className="text-sm text-slate-600">Date : {item.date}</h5>
                            </div>
                            <div className="flex gap-1 text-yellow-500">
                                {Array.from({ length: item.rating }, (_, i) => (
                                    <LiaStarSolid key={i} size={16} />
                                ))}
                            </div>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
}
