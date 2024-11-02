import React from "react";
import { MdOutlineCleaningServices } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";
import Arguments from "./Arguments";

export default function WhyChooseUs() {
  return (
    <section className="bg-white my-10">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-1">
              <MdOutlineCleaningServices size={20} className="text-blue-600" />
              <h3 className="text-lg text-blue-600 second-font font-semibold">
                Why choose us?
              </h3>
            </div>
            <h1 className="mb-6 text-4xl sm:text-6xl font-bold leading-20 text-blue-900 second-font">
              We work many fields to clean your surrounding area
            </h1>
            <a
              href="#"
              className="py-2 px-4 bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white flex items-center gap-1 border border-blue-600 rounded-3xl w-fit transition-colors duration-300 ease-in-out"
            >
              <span>know more</span>
              <MdArrowOutward size={20} />
            </a>
          </div>
          <div className="w-full lg:w-1/2">
            <Arguments />
          </div>
        </div>
      </div>
    </section>
  );
}
