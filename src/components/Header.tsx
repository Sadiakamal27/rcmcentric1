"use client"

import React, { useState, useEffect } from "react";
import { SolutionsDropdown } from "./solutions-dropdown";
import { SpecialtiesDropdown } from "./specialities-dropdown";
import { CompanyDropdown } from "./company-dropdown";
import { ResourcesDropdown } from "./resources-dropdown";
import { Button } from "./ui/button";
import Link from "next/link";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set to true when scrolling starts (even a small amount)
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white">
      {/* Header */}
      <header
        className={`${
          isScrolled
            ? "fixed top-0 left-0 w-full z-40 bg-white shadow-md"
            : "relative"
        } bg-white border-b border-gray-100 px-4 py-4 transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-50 h-9 rounded flex items-center justify-center">
              <img
                src="/Logo-Gif.gif"
                alt="Telehealth Billing Icon"
                className="object-contain"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <SolutionsDropdown />
            <SpecialtiesDropdown />
            <div className="text-gray-700 hover:text-red-500 font-bold cursor-pointer">
              <Link href="/WhyRCM" target="_blank" rel="noopener noreferrer">
              Why RCM Centric
              </Link>
            </div>
            <CompanyDropdown />
            <ResourcesDropdown />
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Link href="/Pricing" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="border-red-300 rounded-full text-red-500 hover:bg-red-500 hover:text-white bg-transparent"
            >
              Get Pricing
            </Button>
            </Link>
             <Link href="/ContactUs" target="_blank" rel="noopener noreferrer">
            <Button className=" rounded-full bg-blue-600  hover:bg-red-500 hover:text-white text-white font-bold">
              Contact Us
            </Button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;