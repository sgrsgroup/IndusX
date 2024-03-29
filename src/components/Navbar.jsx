import React, { useState } from "react";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-black`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <a href="#" className="flex items-center gap-2">
            <p className="tracking-wide text-white text-[24px] font-bold cursor-pointer transition duration-500 hover:scale-125 hover:text-primary-one">
              IndusX
            </p>
          </a>
        </div>

        <ul className="list-none hidden mdd:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`text-white  hover:text-primary-one text-[18px] cursor-pointer`}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSduPgh-mj4dyH-fLgSn832-4nW9DRDmHQjtd8dOgO4tA5fCxA/viewform"
          className="hidden border border-white mdd:flex inline-block rounded-lg px-6 py-2 text-white font-semibold hover:bg-primary-one transition duration-300 ease-in-out"
          target="__blank"
        >
          Register
        </a>
        <div className="mdd:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`text-white font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <a className="nav__link" href={`#${link.id}`}>
                    {link.title}
                  </a>
                </li>
              ))}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSduPgh-mj4dyH-fLgSn832-4nW9DRDmHQjtd8dOgO4tA5fCxA/viewform"
                className="border border-white rounded-lg px-6 py-2 text-white font-semibold hover:bg-primary-one transition duration-300 ease-in-out"
                target="__blank"
              >
                Register
              </a>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
