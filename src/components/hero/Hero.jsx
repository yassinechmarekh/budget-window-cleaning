import { React, useState } from "react";
import ModalVideo from "./ModalVideo";
import heroImg from "../../assets/images/hero/hero.webp";
import cleaningMop from "../../assets/images/hero/cleaning-mop.svg";
import cleaningCheck from "../../assets/icons/clening-check.svg";
import { MdArrowOutward } from "react-icons/md";
import { FaPlay } from "react-icons/fa";

export default function Hero() {
  const [modalVideo, setmodalVideo] = useState(false);
  return (
    <section className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 bg-blue-100 relative">
        <div className="h-40 sm:h-60 2xl:h-72 absolute left-0 bottom-0">
          <img src={cleaningMop} alt="" className="h-full opacity-30" />
        </div>
        <div className="pt-10 pb-20 sm:py-20">
          <div className="container">
            <div className="flex items-center gap-1">
              <img src={cleaningCheck} alt="cleaning stars" className="w-6" />
              <h4 className="text-xl sm:text-2xl text-blue-500 font-semibold">
                We are budget window cleaning
              </h4>
            </div>
            <h1 className="mt-1 mb-4 text-blue-900 text-4xl sm:text-6xl font-bold">
              We are the best cleaning agency
            </h1>
            <p className="text-slate-600 text-sm sm:text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              possimus necessitatibus quo error dolorum at qui earum saepe
              pariatur dignissimos!
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a
                href="#"
                className="py-2 px-4 bg-blue-600 hover:bg-blue-900 text-white flex items-center gap-2 rounded-3xl transition-colors duration-300 ease-in-out"
              >
                <span className="ml-1 capitalize text-base sm:text-lg">
                  start now
                </span>
                <MdArrowOutward size={20} />
              </a>
              <button
                className="p-3 bg-blue-900 text-white rounded-full"
                onClick={() => setmodalVideo(true)}
              >
                <FaPlay size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full lg:w-1/2 h-[450px] sm:h-[550px] 2xl:h-[650px] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
        alt=""
      ></div>
      {modalVideo && <ModalVideo setmodalVideo={setmodalVideo} />}
    </section>
  );
}
