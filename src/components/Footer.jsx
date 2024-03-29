import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { navLinks } from "../constants";

const Footer = () => {
  return (
    <>
      <footer className="bg-courses-bg pt-8 pb-4">
        <div className="xxxs:w-[74vw] xxs:w-[78vw] md:w-[82vw] mx-auto grid xxs:grid-cols-2 md:grid-cols-3 text-[#9F9F9F] gap-8">
          <div className="xxs:col-span-2 md:col-span-3">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSduPgh-mj4dyH-fLgSn832-4nW9DRDmHQjtd8dOgO4tA5fCxA/viewform"
              className="inline-block bg-gradient-to-r from-blue-500 to-black-700 border border-none rounded-full px-6 py-2.5 text-white hover:from-black-700 hover:to-blue-500 transition duration-300 ease-in-out"
              target="__blank"
            >
              Register Now
            </a>
            <div className="mt-8 border-t border-gray-300 xxxs:w-[74vw] xxs:w-[78vw] md:w-[82vw] mx-auto opacity-10"></div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-white text-lg">Quick Links</h1>
            {navLinks.map((data, index) => (
              <a key={index} href={`#${data.id}`} className="hover:text-white">
                {data.title}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-white text-lg">Policies</h1>
            <a href="" className="hover:text-white">
              Terms of Use
            </a>
            <a href="" className="hover:text-white">
              Privacy Notice
            </a>
            <a href="" className="hover:text-white">
              Cookie Policy
            </a>
            <a href="" className="hover:text-white">
              Usage Policy
            </a>
          </div>
          <div className="xxs:col-span-2 md:col-span-1">
            <h1 className="text-white text-lg">Reach Us</h1>
            <div className="flex gap-2 my-2">
              <LocationOnIcon />
              <p>
                Hustlehub Tech Park H210 36/5 Somasundarapalya Main Road
                adjacent 27thMainRoad HaralukunteVillage, Sector 2, HSR Layout,
                Bengaluru, Karnataka 560102
              </p>
            </div>
          </div>
        </div>
      </footer>
      <p className="bg-black text-center text-[#9F9F9F] py-2">
        &#169; 2024 IndusX
      </p>
    </>
  );
};
export default Footer;
