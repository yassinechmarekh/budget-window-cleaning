import React, { useEffect, useRef, useState } from "react";
import TopHeader from "./TopHeader";
import logo from "/icon.svg";
import { IoMdMenu } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import Cart from "./Cart";

export default function Header({ links }) {
  const [currentMenu, setcurrentMenu] = useState("home");
  const [statusCart, setstatusCart] = useState(false);
  const handleCurrentMenu = (link) => {
    setcurrentMenu(link);
  };

  const [showTopHeader, setShowTopHeader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopHeader(window.scrollY < 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-blue-950 transition-all duration-300 ease-in-out ${
        showTopHeader
          ? ""
          : "fixed top-0 left-0 right-0 z-30"
      }`}
    >
      {statusCart && (
        <div
          className="fixed inset-0 bg-[#00000080] z-40"
          onClick={() => setstatusCart(false)}
        ></div>
      )}
      {showTopHeader && <TopHeader />}

      <div className="border-t border-slate-500">
        <div className="container px-0 pl-4 xl:pl-8 2xl:pl-16">
          <div className="flex justify-between">
            <a
              href="/"
              className="py-2 pr-4 text-white text-xl font-bold flex items-center w-fit xl:border-r xl:border-slate-500"
            >
              <img src={logo} alt="logo" className="w-14" />
              <h1 className="uppercase leading-4 sm:leading-6 italic text-base sm:text-xl">
                budget{" "}
                <span className="block text-blue-300">window cleaning</span>
              </h1>
            </a>
            <ul className="hidden xl:flex items-center gap-8 text-slate-300 capitalize">
              {links.map((link, index) => (
                <li
                  key={index}
                  className={`hover:text-blue-500 transition-all duration-200 ease-in-out ${
                    currentMenu === link ? "text-blue-500 font-semibold" : ""
                  }`}
                >
                  <a
                    href={`#${link.replace(/\s+/g, "").toLowerCase()}`}
                    onClick={() => handleCurrentMenu(link)}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center border-l border-slate-500">
              <div className="hidden sm:flex items-center gap-4 px-4">
                <a
                  href="tel:+14409341545"
                  className="p-3 bg-blue-100 rounded-full border-2 border-blue-500 animate-pulse"
                >
                  <FaPhoneVolume size={18} className="text-blue-500" />
                </a>
                <div>
                  <span className="block text-slate-300 text-sm">
                    Call us anytime
                  </span>
                  <a
                    href="tel:+14409341545"
                    className="text-white hover:text-blue-300 font-semibold"
                  >
                    +1440 934-1545
                  </a>
                </div>
              </div>
              <button
                className="bg-blue-500 px-3 h-full text-white hover:bg-blue-200 hover:text-blue-500 transition-colors duration-300 ease-in-out"
                onClick={() => setstatusCart(true)}
              >
                <IoMdMenu size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Cart statusCart={statusCart} setstatusCart={setstatusCart} />
    </header>
  );
}
