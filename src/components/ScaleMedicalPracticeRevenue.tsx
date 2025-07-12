"use client";

import React from "react";

export default function ScaleMedicalRevenue() {
  return (
    <div className="min-h-screen bg-blue-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h3 className="text-red-500 text-lg font-semibold mb-2">Scale Medical Practice Revenue</h3>
          <h1 className="text-4xl font-bold mb-4">Here’s How RCM Centric Can Benefit Your Practice</h1>
          <p className="text-gray-300">
            For ambitious practices around the United States, RCM Centric makes moving revenue growth as simple, borderless, and approachable as the rest of the healthcare technology. Our teams are experienced in each medical specialty to streamline your practice collection.
          </p>
        </div>

        {/* Chart Section */}
        <div className="bg-white text-black p-6 rounded-lg mb-12">
          <div className="flex justify-center">
            <div className="w-3/4">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Denials</span>
                <span>Rejections</span>
                <span>Net Collection</span>
              </div>
              <div className="relative h-48 flex items-end justify-between">
                {/* In-House Bars */}
                <div className="flex flex-col items-center">
                  <div
                    className="w-10 bg-red-200 hover:bg-red-500 transition-colors duration-300"
                    style={{ height: '60%' }}
                  ></div>
                  <span className="text-xs mt-2">In-House</span>
                </div>
                <div className="flex flex-col items-center">
                  <div
                    className="w-10 bg-blue-200 hover:bg-blue-700 transition-colors duration-300"
                    style={{ height: '40%' }}
                  ></div>
                  <span className="text-xs mt-2"></span>
                </div>
                <div className="flex flex-col items-center">
                  <div
                    className="w-10 bg-gray-200 hover:bg-gray-500 transition-colors duration-300"
                    style={{ height: '10%' }}
                  ></div>
                  <span className="text-xs mt-2"></span>
                </div>

                {/* Outsourced to RCM Bars */}
                <div className="flex flex-col items-center">
                  <div
                    className="w-10 bg-red-300 hover:bg-red-600 transition-colors duration-300"
                    style={{ height: '50%' }}
                  ></div>
                  <span className="text-xs mt-2">Outsourced to RCM</span>
                </div>
                <div className="flex flex-col items-center">
                  <div
                    className="w-10 bg-blue-300 hover:bg-blue-800 transition-colors duration-300"
                    style={{ height: '30%' }}
                  ></div>
                  <span className="text-xs mt-2"></span>
                </div>
                <div className="flex flex-col items-center">
                  <div
                    className="w-10 bg-gray-300 hover:bg-gray-600 transition-colors duration-300"
                    style={{ height: '90%' }}
                  ></div>
                  <span className="text-xs mt-2"></span>
                </div>
              </div>
              <div className="text-right text-sm text-gray-600 mt-2">0  10  20  30  40  50  60  70  80  90</div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div>
            <h4 className="text-red-500 font-semibold mb-2">Eliminate All Pain Points in Your Practice</h4>
            <p className="text-gray-300">
              Working with the doctor’s billing service partner will save your facility significant time and effort.
            </p>
          </div>
          <div>
            <h4 className="text-red-500 font-semibold mb-2">Significantly Increases Collections & Increase Revenue</h4>
            <p className="text-gray-300">
              Our simple and error-free process decreases denials and rejections, resulting in more significant practice revenue.
            </p>
          </div>
          <div>
            <h4 className="text-red-500 font-semibold mb-2">Predictable Cash Flows & Increase Revenue</h4>
            <p className="text-gray-300">
              Our certified professional billers scrub claims before sending them off to payers. This leads to faster claim processing.
            </p>
          </div>
          <div>
            <h4 className="text-red-500 font-semibold mb-2">No Excuses - 100% Accountability</h4>
            <p className="text-gray-300">
              One account manager is your single point of contact and accepts 100% accountability for achieving optimal results.
            </p>
          </div>
          <div>
            <h4 className="text-red-500 font-semibold mb-2">It’s Easy To Use & Monitor Progress</h4>
            <p className="text-gray-300">
              You don’t have to worry about learning anything new when using our medical billing services.
            </p>
          </div>
        </div>

        {/* Cost Calculator Section */}
        <div className="bg-white text-black p-6 rounded-lg flex items-center justify-between">
          <div>
            <h4 className="text-blue-600 font-semibold mb-2">Cost Calculator</h4>
            <p className="text-gray-700">
              Your time and cost-saving path to the best-fit talent for your next project.
            </p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Click to Start Saving →
          </button>
          <div className="flex items-center">
            <img src="/path/to/calculator-image.jpg" alt="Calculator" className="w-24 h-24" />
          </div>
        </div>
      </div>
    </div>
  );
}