import React from "react";

import logo from "/icon.svg";

import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoChatbox } from "react-icons/io5";

export default function Footer({ links }) {
  return (
    <footer className="bg-blue-900">
      <div className="container">
        <div className="pt-10 pb-6">
          <div className="grid grid-cols-[350px_1fr_1fr_1fr] gap-8">
            <div>
              <a
                href="/"
                className="py-2 pr-4 text-white text-xl font-bold flex items-center"
              >
                <img src={logo} alt="logo" className="w-14" />
                <h1 className="uppercase leading-4 sm:leading-6 italic text-base sm:text-xl">
                  budget{" "}
                  <span className="block text-blue-300">window cleaning</span>
                </h1>
              </a>
              <p className="text-slate-300 text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorum itaque, temporibus consequuntur quis quod veniam.
              </p>
              <div className="mt-4">
                <h3 className="text-white font-semibold">Open Hours:</h3>
                <ul className="text-slate-300 text-sm">
                  <li>Mon – Sat: 8 am – 6 pm,</li>
                  <li>Sunday: CLOSED</li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="footer-title">quick links</h2>
              <ul className="mt-4 leading-8">
                {links.map((link, index) => (
                  <li key={index} className="footer-list-links">
                    <a href={`#${link.replace(/\s+/g, "").toLowerCase()}`}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="footer-title">What we do?</h2>
              <ul className="mt-4 leading-8">
                <li className="footer-list-links">
                  <a href="#services">House Washing</a>
                </li>
                <li className="footer-list-links">
                  <a href="#services">Window Cleaning</a>
                </li>
                <li className="footer-list-links">
                  <a href="#services">Gutter Cleaning</a>
                </li>
                <li className="footer-list-links">
                  <a href="#services">Driveways and Walkways</a>
                </li>
                <li className="footer-list-links">
                  <a href="#services">Deck Washing</a>
                </li>
                <li className="footer-list-links">
                  <a href="#services">Roof Cleaning</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="footer-title">Contact info</h2>
              <ul className="mt-4">
                <li className="footer-contactinfo-list">
                  <div className="flex items-start gap-2">
                    <FaMapMarkerAlt size={18} className="text-blue-300" />
                    <h4 className="footer-contactinfo-subtitle">address :</h4>
                  </div>
                  <a href="https://maps.app.goo.gl/gRBLVwviLtySaXSeA" target="_blank" className="footer-contactinfo-text">
                    5210 Parkhurst Dr, Sheffield, OH, United States, Ohio
                  </a>
                </li>
                <li className="footer-contactinfo-list">
                  <div className="flex items-start gap-2">
                    <FaMapMarkerAlt size={18} className="text-blue-300" />
                    <h4 className="footer-contactinfo-subtitle">address :</h4>
                  </div>
                  <a
                    href="tel:+14409341545"
                    className="footer-contactinfo-text"
                  >
                    +1 440 934-1545
                  </a>
                </li>
                <li className="footer-contactinfo-list">
                  <div className="flex items-start gap-2">
                    <FaMapMarkerAlt size={18} className="text-blue-300" />
                    <h4 className="footer-contactinfo-subtitle">phone :</h4>
                  </div>
                  <a
                    href="mailto:mike@budgetwindowcleaning.com"
                    className="footer-contactinfo-text"
                  >
                    mike@budgetwindowcleaning.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-3 border-t border-slate-500 flex justify-between">
          <p className="text-slate-300">
            &copy; 2024{" "}
            <span className="text-blue-300 font-bold capitalize">
              budget window cleaning
            </span>
            , All Right Reserved. Designed By{" "}
            <a
              href="https://yassine-chmarekh.vercel.app/" target="_blank"
              className="text-white font-semibold hover:text-blue-300 transition-colors duration-300 ease-in-out"
            >
              Yassine_ChM
            </a>
          </p>
          <ul className="flex gap-4">
            <li className="footer-social-list">
              <a href="https://www.facebook.com/BudgetWindowCleaningOhio/" target="_blank"><FaFacebookF size={20} /></a>
            </li>
            <li className="footer-social-list">
              <a href="https://www.instagram.com/cleaningbudget/" target="_blank"><FaInstagram size={20} /></a>
            </li>
            <li className="footer-social-list">
              <a href="https://www.youtube.com/@BudgetWC" target="_blank"><FaYoutube size={20} /></a>
            </li>
            <li className="footer-social-list">
              <a href="https://www.thumbtack.com/oh/sheffield-lake/pressure-washing/budget-window-cleaning-company/service/227731913551545364" target="_blank"><IoChatbox size={20} /></a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
