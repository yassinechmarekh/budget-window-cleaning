import { React, useState } from "react";
import { motion } from "framer-motion";

import ModalVideo from "./ModalVideo";

import heroImg from "../../assets/images/hero/hero.webp";
import cleaningMop from "../../assets/images/hero/cleaning-mop.svg";
import cleaningCheck from "../../assets/icons/clening-check.svg";

import { MdArrowOutward } from "react-icons/md";
import { FaPlay } from "react-icons/fa";

export default function Hero() {
  const [modalVideo, setmodalVideo] = useState(false);
  return (
    <section className="flex flex-col lg:flex-row" id="home">
      <div className="w-full lg:w-1/2 bg-blue-100 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="h-40 sm:h-60 2xl:h-72 absolute left-0 bottom-0 z-0"
        >
          <img src={cleaningMop} alt="" className="h-full opacity-30" />
        </motion.div>
        <motion.div
          className="pt-10 pb-20 sm:py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="container">
            <div className="flex items-center gap-1">
              <img src={cleaningCheck} alt="cleaning stars" className="w-6" />
              <h4 className="text-xl sm:text-2xl text-blue-500 font-semibold second-font capitalize">
                Affordable Window Cleaning Experts
              </h4>
            </div>
            <h1 className="mt-1 mb-4 text-blue-900 text-4xl sm:text-6xl font-bold second-font capitalize">
              The Best Cleaning Agency You Can Trust
            </h1>
            <p className="text-slate-600 text-sm sm:text-base">
              Professional, budget-friendly window cleaning for spotless results
              in homes and businesses. Contact us today to make your windows
              shine!
            </p>
            <div className="flex items-center gap-4 mt-4">
              <motion.a
                href="https://www.thumbtack.com/oh/sheffield-lake/pressure-washing/budget-window-cleaning-company/service/227731913551545364"
                target="_blank"
                aria-label="startnow"
                className="main-btn z-10"
                whileTap={{ scale: 0.9 }}
              >
                <span>start now</span>
                <MdArrowOutward size={20} />
              </motion.a>
              <motion.button
                className="p-3 bg-blue-900 hover:bg-blue-800 text-white rounded-full transition-colors duration-300 ease-in-out"
                onClick={() => setmodalVideo(true)}
                whileTap={{ scale: 0.9 }}
                aria-label="playvideo"
              >
                <FaPlay size={16} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
      <div
        className="w-full lg:w-1/2 h-[450px] sm:h-[550px] 2xl:h-[650px] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
        alt="hero image"
      ></div>
      {modalVideo && <ModalVideo setmodalVideo={setmodalVideo} />}
    </section>
  );
}
