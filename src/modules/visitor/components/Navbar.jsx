"use client";

import Button from "./Button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

import logo from "../assets/Logo.png";

export function Navbar({ isActive, handleMenu }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="hidden md:flex justify-center bg-[#18222E]/80 backdrop-blur-md py-3 h-[60px] border-b-2 border-white sticky top-0 z-50">
        <ol className="flex h-[40px] items-center gap-3">
          <li>
            <a
              href="#home"
              className={`cursor-pointer py-[5px] hover:border-b-1 hover:border-[#FDCB04] hover:text-[#FDCB04] ${
                isActive == "home"
                  ? "border-b-1 border-[#FDCB04] text-[#FDCB04]"
                  : ""
              }`}
              onClick={() => handleMenu("home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#aboutUs"
              className={`cursor-pointer py-[5px] hover:border-b-1 hover:border-[#FDCB04] hover:text-[#FDCB04] ${
                isActive == "aboutUs"
                  ? "border-b-1 border-[#FDCB04] text-[#FDCB04]"
                  : ""
              }`}
              onClick={() => handleMenu("aboutUs")}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#ourPrograms"
              className={`cursor-pointer py-[5px] hover:border-b-1 hover:border-[#FDCB04] hover:text-[#FDCB04] ${
                isActive == "ourPrograms"
                  ? "border-b-1 border-[#FDCB04] text-[#FDCB04]"
                  : ""
              }`}
              onClick={() => handleMenu("ourPrograms")}
            >
              Our Programs
            </a>
          </li>
        </ol>
        <div className="z-10">
          <img src={logo} className="w-[100px] h-auto" alt="Logo FBAcademy" />
        </div>
        <ol className="flex h-[40px] items-center gap-3">
          <li>
            <a
              href="#gallery"
              className={`cursor-pointer py-[5px] hover:border-b-1 hover:border-[#FDCB04] hover:text-[#FDCB04] ${
                isActive == "gallery"
                  ? "border-b-1 border-[#FDCB04] text-[#FDCB04]"
                  : ""
              }`}
              onClick={() => handleMenu("gallery")}
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="#newsEvent"
              className={`cursor-pointer py-[5px] hover:border-b-1 hover:border-[#FDCB04] hover:text-[#FDCB04] ${
                isActive == "newsEvents"
                  ? "border-b-1 border-[#FDCB04] text-[#FDCB04]"
                  : ""
              }`}
              onClick={() => handleMenu("newsEvents")}
            >
              News/Events
            </a>
          </li>
          <li>
            <NavLink
              to="/login"
              className="bg-[#FDCB04] text-black rounded-[20px] font-bold py-[5px] px-[15px] cursor-pointer"
            >
              Login
            </NavLink>
          </li>
        </ol>
      </div>

      {/* Navbar Mobile  */}
      <div className="md:hidden flex justify-between items-center bg-[#18222E]/80 backdrop-blur py-3 h-[60px] border-b-2 border-white sticky top-0 px-4 md:px-8 z-50">
        {/* Logo */}
        <div className="z-10 mt-11 md:mt-0">
          <img src={logo} className="w-[100px] h-auto" alt="Logo FBAcademy" />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden z-20">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-[60px] right-0 w-1/3 bg-[#18222E]/90 backdrop-blur transition-all duration-300 ease-in-out rounded-bl-3xl border-l-2 border-b-2 border-white ${
            isMobileMenuOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0"
          } overflow-hidden`}
        >
          <ol className="flex flex-col items-end gap-4 py-4 pr-4">
            <li>
              <a
                href="#home"
                className={`cursor-pointer py-[5px] hover:border-b-1 hover:border-[#FDCB04] hover:text-[#FDCB04] ${
                  isActive === "home"
                    ? "border-b-1 border-[#FDCB04] text-[#FDCB04]"
                    : ""
                }`}
                onClick={() => {
                  handleMenu("home");
                  toggleMobileMenu();
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#aboutUs"
                className={`cursor-pointer py-[5px] hover:border-b-1 hover:border-[#FDCB04] hover:text-[#FDCB04] ${
                  isActive === "aboutUs"
                    ? "border-b-1 border-[#FDCB04] text-[#FDCB04]"
                    : ""
                }`}
                onClick={() => {
                  handleMenu("aboutUs");
                  toggleMobileMenu();
                }}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#ourPrograms"
                className={`cursor-pointer py-[5px] hover:border-b-1 hover:border-[#FDCB04] hover:text-[#FDCB04] ${
                  isActive === "ourPrograms"
                    ? "border-b-1 border-[#FDCB04] text-[#FDCB04]"
                    : ""
                }`}
                onClick={() => {
                  handleMenu("ourPrograms");
                  toggleMobileMenu();
                }}
              >
                Our Programs
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className={`cursor-pointer py-[5px] hover:border-b-1 hover:border-[#FDCB04] hover:text-[#FDCB04] ${
                  isActive === "gallery"
                    ? "border-b-1 border-[#FDCB04] text-[#FDCB04]"
                    : ""
                }`}
                onClick={() => {
                  handleMenu("gallery");
                  toggleMobileMenu();
                }}
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#newsEvent"
                className={`cursor-pointer py-[5px] hover:border-b-1 hover:border-[#FDCB04] hover:text-[#FDCB04] ${
                  isActive === "newsEvents"
                    ? "border-b-1 border-[#FDCB04] text-[#FDCB04]"
                    : ""
                }`}
                onClick={() => {
                  handleMenu("newsEvents");
                  toggleMobileMenu();
                }}
              >
                News/Events
              </a>
            </li>
            <li>
              <NavLink
                to="/login"
                className="bg-[#FDCB04] text-black rounded-[20px] font-bold py-[5px] px-[15px] cursor-pointer"
              >
                Login
              </NavLink>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
