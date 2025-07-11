import React from "react";
import { SolutionsDropdown } from "./solutions-dropdown";
import { SpecialtiesDropdown } from "./specialities-dropdown";
import { CompanyDropdown } from "./company-dropdown";
import { ResourcesDropdown } from "./resources-dropdown";
import { Button } from "./ui/button";

function Header() {
  return (
    <div className=" bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 px-4 py-4 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-50 h-9 rounded flex items-center justify-center">
              <img
                src="/Logo-Gif.gif"
                alt="Telehealth Billing Icon"
                className=" object-contain"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <SolutionsDropdown />
            <SpecialtiesDropdown />
            <div className="text-gray-700 hover:text-red-500 cursor-pointer">
              Why RCM Centric
            </div>
            <CompanyDropdown />
            <ResourcesDropdown />
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-red-300 text-red-500 hover:bg-red-50 bg-transparent"
            >
              Get Pricing
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Contact Us
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
