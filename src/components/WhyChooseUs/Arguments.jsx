import React from "react";
import argementImg1 from "../../assets/icons/why choose us/argument-1.svg";
import argementImg2 from "../../assets/icons/why choose us/argument-2.svg";
import argementImg3 from "../../assets/icons/why choose us/argument-3.svg";
import argementImg4 from "../../assets/icons/why choose us/argument-4.svg";

export default function Arguments() {
  const argument = [
    {
      image: argementImg1,
      title: "Experienced Staff",
      description:
        "Office Services Sweeping Mopping Kitchen Cleaning, Equipped with the most modern appliances Services",
    },
    {
      image: argementImg2,
      title: "Natural Products",
      description:
        "Cleaning and sanitizing may be the most important aspects of a clean and stored in a clean, sanitary manner",
    },
    {
      image: argementImg3,
      title: "Fast Service",
      description:
        "We provide you the best service quality with best rate all the time no matter you're looking for residential or commercial",
    },
    {
      image: argementImg4,
      title: "Best Equipment",
      description:
        "We make sure that we had all the tools and equipment you need to provide high-quality service to our clients",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
      {argument.map((item,index) => (
        <div className="hover:scale-95 transition duration-300 ease-in-out" key={index}>
          <div className="p-3 bg-blue-100 w-20 rounded-2xl">
            <img src={item.image} alt="" className="w-full" />
          </div>
          <h3 className="mt-4 text-blue-900 text-2xl font-bold second-font">
            {item.title}
          </h3>
          <p className="mt-2 text-slate-600 text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
