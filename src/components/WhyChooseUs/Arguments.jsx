import React from "react";
import {motion} from "framer-motion"

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
        "Our team specializes in office cleaning, sweeping, mopping, and kitchen sanitation, using advanced equipment for the best results.",
    },
    {
      image: argementImg2,
      title: "Natural Products",
      description:
        "We use natural, eco-friendly cleaning products to ensure a safe and sanitary environment for you and your family.",
    },
    {
      image: argementImg3,
      title: "Fast Service",
      description:
        "Count on us for quick and dependable cleaning services at competitive rates, tailored for both homes and businesses.",
    },
    {
      image: argementImg4,
      title: "Best Equipment",
      description:
        "Equipped with state-of-the-art tools, we guarantee a thorough and efficient cleaning service every time.",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
      {argument.map((item,index) => (
        <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} whileHover={{ scale:0.9 }} transition={{ duration: 0.3, ease: "easeInOut" }} key={index}>
          <div className="p-3 bg-blue-100 w-20 rounded-2xl">
            <img src={item.image} alt="" className="w-full" />
          </div>
          <h3 className="mt-4 text-blue-900 text-2xl font-bold second-font">
            {item.title}
          </h3>
          <p className="mt-2 text-slate-600 text-sm">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
