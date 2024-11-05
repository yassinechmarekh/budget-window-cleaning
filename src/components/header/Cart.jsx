import React from "react";
import { IoMdClose } from "react-icons/io";
import logo from "/icon.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoChatbox } from "react-icons/io5";

export default function Cart({ statusCart, setstatusCart }) {
  return (
    <div
      className={`fixed top-0 ${
        statusCart ? "right-0" : "right-[-150%]"
      } bottom-0 w-full sm:w-96 transition-all duration-300 ease-in-out bg-blue-50 border-l p-6 z-50`}
    >
      <div className="flex flex-col items-center justify-between h-full">
        <button className="ml-auto" onClick={() => setstatusCart(false)}>
          <IoMdClose
            size={24}
            className="text-blue-950 hover:text-blue-500 hover:rotate-90 transition-all duration-300"
            aria-label="closecart"
          />
        </button>
        <a href="/" className="flex items-center" aria-label="logo">
          <img src={logo} alt="logo" className="w-24" />
          <h1 className="text-2xl font-bold italic uppercase leading-6 text-blue-900">
            budget <span className="block text-blue-300">window cleaning</span>
          </h1>
        </a>
        <p className="text-center text-slate-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
          voluptate.
        </p>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-blue-900">Contact info</h3>
          <ul className="mt-2 sm:mt-4 text-slate-600">
            <li className="cart-info-list">
              <a href="tel:+14409341545" aria-label="phone">+1 440 934-1545</a>
            </li>
            <li className="cart-info-list">
              <a href="https://maps.app.goo.gl/gRBLVwviLtySaXSeA" aria-label="address">
                5210 Parkhurst Dr, Sheffield, OH, United States, Ohio
              </a>
            </li>
            <li className="cart-info-list">
              <a href="mailto:mike@budgetwindowcleaning.com" aria-label="mail">
                mike@budgetwindowcleaning.com
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-blue-900">Official Address</h3>
          <div className="mt-2 sm:mt-4 text-slate-600 cart-info-list">
            <a href="https://maps.app.goo.gl/gRBLVwviLtySaXSeA" target="_blank" aria-label="address">
              5210 Parkhurst Dr, Sheffield, OH, United States, Ohio
            </a>
          </div>
        </div>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/BudgetWindowCleaningOhio/" target="_blank" aria-label="facebook" className="cart-social-list">
            <FaFacebookF size={16} />
          </a>
          <a href="https://www.instagram.com/cleaningbudget/" target="_blank" aria-label="instagram" className="cart-social-list">
            <FaInstagram size={16} />
          </a>
          <a href="https://www.youtube.com/@BudgetWC" target="_blank" aria-label="youtube" className="cart-social-list">
            <FaYoutube size={16} />
          </a>
          <a href="https://www.thumbtack.com/oh/sheffield-lake/pressure-washing/budget-window-cleaning-company/service/227731913551545364" target="_blank" aria-label="appointement" className="cart-social-list">
            <IoChatbox size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
