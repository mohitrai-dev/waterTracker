import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="bg-backgroundColor text-white rounded-t-3xl mt-8 md:mt-0 ">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px32 px-5 ">
        <div className="w-full  md:w-1/4">
          <h2 className="text-xl font-semibold pb-4 ">Wellness App</h2>
          <p className="text-sm ">
            Our team of dedicated doctors, each specializing in unique fields
            such as orthopedics, cardiology, pediatrics, neurology, dermatology,
            and more.
          </p>
        </div>
        <div>
          <h3 className="font-medium text-xl pb-4  pt-5 md:pt-0 ">About us</h3>
          <nav className="flex flex-col gap-2 ">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              About Us
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="doctors"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Doctors
            </Link>
          </nav>
        </div>
        <div>
          <h3 className="font-medium text-xl pb-4  pt-5 md:pt-0 ">Services</h3>
          <nav className="flex flex-col gap-2 ">
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Lab Test
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Health Check
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Heart Health
            </Link>
          </nav>
        </div>
        <div className="w-full md:w-1/4">
          <h3 className="font-medium text-xl pb-4  pt-5 md:pt-0 ">
            Contact Us
          </h3>
          <nav className="flex flex-col gap-2 ">
            <Link
              to="/"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              123 Elm Street, Suite 456 Springfield, IL 62701 United States
            </Link>
            <Link
              to="/"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              support@care.com
            </Link>
            <Link
              to="/"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              +123-456-7890
            </Link>
          </nav>
        </div>
      </div>
      <div className="text-center py-4 ">
        <p>
          @copyrights developed by{" "}
          <span className="text-hoverColor"> Mohit Rai</span> || All rights
          reserved {year}
        </p>
      </div>
    </div>
  );
};

export default Footer;
