import React from "react";
import { IoMdMailOpen } from "react-icons/io";
import { IoTimeSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoChatbox } from "react-icons/io5";

export default function () {
  return (
    <div className="py-2">
      <div className="container">
        <div className="flex justify-center lg:justify-between items-center">
          <p className="text-slate-300 text-xs text-center">
            Welcome to{" "}
            <span className="font-semibold text-blue-300">
              Budget Window Cleaning!
            </span>
          </p>
          <ul className="hidden lg:flex items-center gap-4">
            <li className="flex items-center gap-1">
              <IoTimeSharp size={16} className="text-blue-300" />
              <p className="text-slate-300 text-xs">
                <span className="font-semibold text-slate-100">
                  Open Hours :
                </span>{" "}
                8.00am - 6.00pm
              </p>
            </li>
            <li className="flex items-center gap-1 border-x border-slate-500 px-4">
              <IoMdMailOpen size={16} className="text-blue-300" />
              <div className="text-slate-300 text-xs">
                <span className="mr-1 font-semibold text-slate-100">
                  Mail to us:
                </span>
                <a
                  href="mailto:mike@budgetwindowcleaning.com"
                  className="hover:text-blue-300 transition-colors duration-300"
                  aria-label="mail"
                >
                  mike@budgetwindowcleaning.com
                </a>
              </div>
            </li>
            <li className="text-slate-300 flex items-center gap-3">
              <a href="https://www.facebook.com/BudgetWindowCleaningOhio/" target="_blank" aria-label="facebook" className="navbar-social-link">
                <FaFacebookF size={14} />
              </a>
              <a href="https://www.instagram.com/cleaningbudget/" target="_blank" aria-label="instagram" className="navbar-social-link">
                <FaInstagram size={16} />
              </a>
              <a href="https://www.youtube.com/@BudgetWC" target="_blank" aria-label="youtube" className="navbar-social-link">
                <FaYoutube size={18} />
              </a>
              <a href="https://www.thumbtack.com/oh/sheffield-lake/pressure-washing/budget-window-cleaning-company/service/227731913551545364" target="_blank" aria-label="appointment" className="navbar-social-link">
                <IoChatbox size={15} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
