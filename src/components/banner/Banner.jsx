import React from "react";
import bannerImg from "../../assets/images/banner/banner.webp";
import { MdArrowOutward } from "react-icons/md";

export default function Banner() {
  return (
    <section
      className="bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="bg-[#1e3b8ae7] w-full lg:w-1/2 h-full ml-auto">
        <div className="container">
          <div className="py-10">
            <h1 className="text-4xl text-white font-bold">
              Want to work with our team member?
            </h1>
            <p className="text-slate-300 my-4">
              We love what we do and we do it with passion. We value the
              experimentation of the message and smart incentives.
            </p>
            <a href="https://www.thumbtack.com/oh/sheffield-lake/pressure-washing/budget-window-cleaning-company/service/227731913551545364" target="_blank" className="main-btn w-fit hover:bg-blue-700">
              <span>start now</span>
              <MdArrowOutward size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
