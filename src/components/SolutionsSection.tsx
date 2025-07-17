"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function SolutionSection() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (selectedSpecialty) {
      setIsOpen(true);
    } else {
      alert("Please select a specialty first.");
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">
        Get a Solution for Your Medical Practice
      </h3>

      <div className="flex flex-col sm:flex-row gap-4 w-full">
        {/* Specialty Select */}
        <Select onValueChange={(value) => setSelectedSpecialty(value)}>
          <SelectTrigger className="bg-white text-gray-500 w-full rounded-none border-0">
            <SelectValue placeholder="Select Your Specialty" />
          </SelectTrigger>
          <SelectContent className="bg-white max-h-58 overflow-y-auto">
            <SelectItem value="cardiology">Cardiology</SelectItem>
            <SelectItem value="dermatology">Dermatology</SelectItem>
            <SelectItem value="orthopedics">Orthopedics</SelectItem>
            <SelectItem value="psychiatry">Psychiatry</SelectItem>
            <SelectItem value="primary-care">Primary Care</SelectItem>
            {/* More repeated items if needed */}
          </SelectContent>
        </Select>

        {/* Sheet Trigger & Form */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              className="bg-red-500 hover:bg-red-600 w-56 rounded-none text-white px-4"
              onClick={handleClick}
            >
              Get Solution →
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="max-w-md p-0">
            <div className="p-9 space-y-4 bg-white rounded-xl m-1 shadow-lg">
              {/* Logo */}
              <div className="flex justify-center">
                <img
                  src="/formlogo.jpg"
                  alt="Logo"
                  className="h-15 w-40 mb-2"
                />
              </div>

              {/* Form */}
              <div className="space-y-4">
                <h2 className="text-lg font-bold text-center">
                  Get Solution in 24 Hours
                </h2>
                <p className="text-sm text-gray-500 text-center">
                  Please tell us more about your business and get connected with
                  an expert.
                </p>

                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    className="w-full border border-gray-200 p-2 rounded"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    className="w-full border border-gray-200 p-2 rounded"
                  />
                  <input
                    type="email"
                    placeholder="Work Email *"
                    className="w-full border border-gray-200 p-2 rounded"
                  />
                  <input
                    type="text"
                    placeholder="Practice Name *"
                    className="w-full border border-gray-200 p-2 rounded"
                  />
                  <textarea
                    placeholder="Enter your message here (Optional)"
                    className="w-full border border-gray-200 p-4 rounded"
                  ></textarea>
                  <Button type="submit" className="w-full text-white bg-blue-600">
                    Connect Now
                  </Button>
                </form>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
