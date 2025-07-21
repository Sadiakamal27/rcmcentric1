"use client";

import Image from "next/image";

export default function MedicalBillingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <p className="text-red-400 text-lg font-medium mb-2">One-Stop Shop Solution</p>
          <div className="flex items-center mb-4">
            <div className="w-1 h-12 bg-red-400 mr-3"></div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800">Medical Billing Services</h1>
          </div>
          <p className="text-gray-700 text-lg mb-8">
            RCM Centric provides customized medical billing service solutions from charge entry to analytics and reporting for all medical specialists and practices.
          </p>
          <div className="mb-2 font-medium text-gray-700">Find Solution By Your Speciality</div>
          <div className="flex flex-col sm:flex-row gap-4">
            <select className="border rounded px-4 py-3 text-gray-700 w-full sm:w-72">
              <option value="">Select Your Specialty</option>
              <option value="cardiology">Cardiology</option>
              <option value="dermatology">Dermatology</option>
              <option value="orthopedics">Orthopedics</option>
              <option value="pediatrics">Pediatrics</option>
              {/* Add more specialties as needed */}
            </select>
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded transition flex items-center justify-center">
              <span className="mr-2">→</span> Get Solutions
            </button>
          </div>
        </div>
        {/* Right Content - Video */}
        <div className="w-full md:w-[650px] flex justify-center items-center">
          <video
            className="w-full h-[220px] sm:h-[400px] object-cover rounded-lg  pointer-events-none"
            autoPlay
            loop
            muted
            src="/rcm-medical-billing-services-animation.mp4"
            preload="metadata"
          >
            Sorry, your browser does not support embedded videos.
          </video>
        </div>
      </section>

      {/* R.C.M. Cards Section */}
      <section className="bg-white py-10 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-16">
            {/* Revenue Card */}
            <div className="bg-gray-50 rounded-lg p-6 sm:p-8 text-center border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="mb-4 sm:mb-6">
                <span className="text-5xl sm:text-6xl font-bold text-gray-700">R</span>
                <span className="text-5xl sm:text-6xl font-bold text-red-500">.</span>
              </div>
              <h3 className="text-base sm:text-lg font-medium text-gray-600 leading-relaxed">
                Revenue Growth That Your Practice Deserves
              </h3>
            </div>
            {/* Centric Card */}
            <div className="bg-gray-50 rounded-lg p-6 sm:p-8 text-center border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="mb-4 sm:mb-6">
                <span className="text-5xl sm:text-6xl font-bold text-gray-700">C</span>
                <span className="text-5xl sm:text-6xl font-bold text-red-500">.</span>
              </div>
              <h3 className="text-base sm:text-lg font-medium text-gray-600 leading-relaxed">
                Centric Solution By Specialty Focused
              </h3>
            </div>
            {/* Managing Card */}
            <div className="bg-gray-50 rounded-lg p-6 sm:p-8 text-center border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="mb-4 sm:mb-6">
                <span className="text-5xl sm:text-6xl font-bold text-gray-700">M</span>
                <span className="text-5xl sm:text-6xl font-bold text-red-500">.</span>
              </div>
              <h3 className="text-base sm:text-lg font-medium text-gray-600 leading-relaxed">
                Managing Each Medical Claim Efficiently
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 