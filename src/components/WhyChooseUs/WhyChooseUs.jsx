import React from "react";
import { motion } from "framer-motion"

import { MdOutlineCleaningServices } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";

import Arguments from "./Arguments";

export default function WhyChooseUs() {
  return (
    <section className="bg-white mt-10 lg:mt-20" id="whychooseus?">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="w-full lg:w-1/2">
            <div className="flex items-center gap-1">
              <MdOutlineCleaningServices size={20} className="text-blue-600" />
              <h3 className="text-lg text-blue-600 second-font font-semibold">
                Why choose us?
              </h3>
            </div>
            <h1 className="mb-6 text-4xl sm:text-6xl font-bold leading-20 text-blue-900 second-font">
              We work many fields to clean your surrounding area
            </h1>
            <motion.a
              href="#faq"
              className="py-2 px-4 bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white flex items-center gap-1 border border-blue-600 rounded-3xl w-fit transition-colors duration-300 ease-in-out"
              aria-label="learnmore"
              whileTap={{ scale: 0.9 }}
            >
              <span className="capitalize">Learn More</span>
              <MdArrowOutward size={20} />
            </motion.a>
          </motion.div>
          <div className="w-full lg:w-1/2">
            <Arguments />
          </div>
        </div>
      </div>
    </section>
  );
}
