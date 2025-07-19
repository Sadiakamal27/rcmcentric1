import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function TalkToSales() {
  return (
    <>
      <div
        className="min-h-[60vh] bg-gradient-to-b from-blue-900 to-blue-700
           text-white flex justify-center items-center"
      >
        <div className="mr-130  text-left">
          <h1 className="text-5xl font-bold mb-5">Talk To Sales</h1>
          <p className="text-shadow-md max-w-2xl mb-6 justify-center">
            Looking for more information on RCM Centric? Simply fill out this
            brief form and an RCM Centric representative will follow up with you
            right away to better understand how we can help you future-proof
            your practice.
          </p>
        </div>
      </div>

      <div className="absolute top-[-60px] mt-80 md:top-[-70px] left-2/3 transform -translate-x-1/2 ml-10 bg-white p-4 md:p-6 rounded-lg shadow-lg w-[320px] md:w-[400px] z-2">
        <div className="w-full p-4 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Request Form
          </h2>
        </div>

        {/* Main Form Container */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <form className="space-y-4">
            <Input
              type="text"
              placeholder="Full Name *"
              className="w-full border-gray-300"
              required
            />
            <Input
              type="email"
              placeholder="Work Email *"
              className="w-full border-gray-300"
              required
            />
            <Input
              type="tel"
              placeholder="Work Phone *"
              className="w-full border-gray-300"
              required
            />
            <Input
              type="text"
              placeholder="Practice Name *"
              className="w-full border-gray-300"
              required
            />

            <Select>
              <SelectTrigger className="w-full border-gray-300 text-gray-500">
                <SelectValue placeholder="Job Role *" />
              </SelectTrigger>
              <SelectContent className="bg-white text-black border-none">
                <SelectItem value="manager">Manager</SelectItem>
                <SelectItem value="doctor">Doctor</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-full border-gray-300">
                <SelectValue placeholder="Number of Providers *" />
              </SelectTrigger>
              <SelectContent className="bg-white border-none">
                <SelectItem value="1-5">1-5</SelectItem>
                <SelectItem value="6-10">6-10</SelectItem>
                <SelectItem value="11+">11+</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-full border-gray-300">
                <SelectValue placeholder="Services Interest *" />
              </SelectTrigger>
              <SelectContent className="bg-white border-none">
                <SelectItem value="billing">Billing Services</SelectItem>
                <SelectItem value="credentialing">Credentialing</SelectItem>
                <SelectItem value="claims">Claims Coding</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-full border-gray-300">
                <SelectValue placeholder="Monthly Collection *" />
              </SelectTrigger>
              <SelectContent className="bg-white border-none">
                <SelectItem value="0-50k">$0 - $50K</SelectItem>
                <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                <SelectItem value="100k+">$100K+</SelectItem>
              </SelectContent>
            </Select>

            <Button className="w-50 bg-blue-800 text-white hover:bg-blue-700 rounded-full">
              Send Your Request Now
            </Button>
          </form>
        </div>
      </div>
      <div className="min-h-[60vh] bg-white ">
        {/* Left Side: Contact Info */}
        <div className="w-full mt-30  px-50 ">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Call or fill out this form to <br /> connect with a sales expert
          </h3>
          <hr className="w-16 h-0.5 bg-red-400 mb-6" />

          {/* Phone */}
          <div className="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8  text-gray-700 mr-3 hover:text-red-500 transition-colors duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a1 1 0 011-1h2a1 1 0 01.97.757l.75 3a1 1 0 01-.216.918l-1.285 1.285a16.016 16.016 0 006.364 6.364l1.285-1.285a1 1 0 01.918-.216l3 .75A1 1 0 0119 18v2a1 1 0 01-1 1h-1C9.163 21 3 14.837 3 7V5z"
              />
            </svg>
            <span className="text-gray-800 font-medium">(415) 530-2893</span>
          </div>

          {/* Email */}
          <div className="flex items-center mb-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-gray-700 mr-3 hover:text-red-500 transition-colors duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 12l-4 4m0 0l-4-4m4 4V8m8 8a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-gray-800 font-medium">
              sales@rcmcentric.com
            </span>
          </div>

          {/* Chat */}
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-gray-700 mr-3 hover:text-red-500 transition-colors duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.834l-4 1 1-3.39A7.962 7.962 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span className="text-gray-800 font-medium ">Chat With Us</span>
          </div>
        </div>
      </div>
    </>
  );
}
