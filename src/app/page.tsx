"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Play,
  MessageCircle,
  BarChart3,
  DollarSign,
  CalendarClock,
  Trophy,
  ExternalLink,
  ShipWheelIcon as Wheelchair,
  
} from "lucide-react";

import { ImageComparisonSlider } from "@/components/image-comaprison-slider";
import SolutionsAndServices from "@/components/SolutionsAndServices";
import MedicalBillingSection from "@/components/MedicalBillingsection";
import RCMCentricSection from "@/components/RcmCentricsection";
import OnboardingPage from "@/components/OnBoardingPage";
import RCMBenefitSection from "@/components/RCMBenefitSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import SolutionSection from "@/components/SolutionsSection";
export default function HomePage() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Stats */}
      <section className="relative bg-gradient-to-br bg-[#0B1B39]  overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
          <div className="absolute top-40 right-40 w-24 h-24 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-20 left-1/3 w-16 h-16 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-32 right-20 w-20 h-20 border border-white/20 rounded-full"></div>
        </div>

        <div className="relative max-w-7xl ] mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <p className="text-white text-lg">Provider Practice Centric</p>
                <h1 className="text-3xl lg:text-3xl whitespace-nowrap font-bold leading-tight">
                  <div className="w-1 h-28 bg-red-500 mt-1">
                    <div className="ml-4">
                      Top-tier Revenue <br /> Cycle Management <br /> For Each
                      Medical Specialty
                    </div>
                  </div>
                </h1>
              </div>
              <div className="mt-9">
                <div className="space-y-4  text-white">
                  <p>
                    For over 10 years, our{" "}
                    <span className="text-red-400 font-semibold">
                      medical billing company in the USA
                    </span>{" "}
                    have been helping physicians, clinics, group practices, and
                    hospital-owned physician groups with their medical billing
                    and coding tasks.
                  
                    Establish and grow a healthy practice with RCM Centric's
                    advanced healthcare medical billing services & coding,
                    including unique strategy and integrated technology.
                  </p>
                </div>
              </div>

              {/* Form Section */}
              <SolutionSection />
            </div>

            {/* Right Content - Video */}
            <div className="relative">
              <div
                className="relative rounded-lg overflow-hidden shadow-2xl"
                style={{ width: "600px", height: "400px" }}
              >
                {isPlaying ? (
                  <iframe
                    width="600"
                    height="400"
                    src="https://www.youtube.com/embed/To8tul_TsWE?autoplay=1&controls=1&rel=0"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : (
                  <>
                    <img
                      src="/v1.png?height=400&width=600"
                      alt="Video testimonial thumbnail"
                      width={600}
                      height={400}
                      className="w-full h-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button
                        size="lg"
                        className="w-16 h-16 rounded-full bg-white/90 hover:bg-white text-blue-600 shadow-lg"
                        onClick={handlePlay}
                      >
                        <Play className="w-6 h-6 ml-1" fill="currentColor" />
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Stats Section - Integrated without border */}
          <div className="relative pt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
              {/* Increase Cash Flow */}
              <div className="flex items-center justify-center space-x-4">
                <div className="flex-shrink-0">
                  <BarChart3 className="w-12 h-12 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-3xl lg:text-4xl font-bold">25%</div>
                  <div className="text-blue-100 text-sm">
                    Increase Cash Flow
                  </div>
                </div>
              </div>

              {/* Net Collection Rate */}
              <div className="flex items-center justify-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <DollarSign className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-3xl lg:text-4xl font-bold">97%</div>
                  <div className="text-blue-100 text-sm">
                    Net Collection Rate
                  </div>
                </div>
              </div>

              {/* Days in A/R */}
              <div className="flex items-center justify-center space-x-4">
                <div className="flex-shrink-0">
                  <CalendarClock className="w-12 h-12 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-3xl lg:text-4xl font-bold">{"<32"}</div>
                  <div className="text-blue-100 text-sm">Days in A/R</div>
                </div>
              </div>

              {/* Client Success Rate */}
              <div className="flex items-center justify-center space-x-4">
                <div className="flex-shrink-0">
                  <Trophy className="w-12 h-12 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-3xl lg:text-4xl font-bold">99%</div>
                  <div className="text-blue-100 text-sm">
                    Client Success Rate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Widget */}
        <div className="fixed bottom-6 left-6 z-50">
          <Button
            size="lg"
            className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg"
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative bg-gray-50 py-16 lg:py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 border border-gray-300 rounded-full"></div>
          <div className="absolute top-40 right-40 w-32 h-32 border border-gray-300 rounded-full"></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 border border-gray-300 rounded-full"></div>
          <div className="absolute bottom-32 right-20 w-28 h-28 border border-gray-300 rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-red-500 text-lg font-medium">
                  Increase Your Practice Revenue by 15%-20%
                </p>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                  Maximize Profitability & <br />
                  Minimize Errors With <br />
                  <span className="text-blue-600">RCM Centric</span>
                </h2>
              </div>

              <div className="space-y-4">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Are you looking for faster payment processing for your medical
                  billing? Wish to reduce billing overheads on various specialty
                  billings that you frequently generate? RCM's advanced billing
                  solutions ensure that your billings forge higher net
                  collections in less time. RCM Centric offers advanced medical
                  billing & coding services for a wide range of healthcare
                  specialties.
                </p>
              </div>

              <div className="pt-4">
                <Link href="/About" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-blue-600 hover:bg-red-500 scroll-smooth text-white px-8 py-3">
                    About Us <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Content - Dashboard Mockups */}
            <div className="relative">
              <div className="relative">
                {/* Main Dashboard */}
                <div className="relative z-10">
                  <Image
                    src="/Product-Screen-Dashboard-rcm-centric.png?height=400&width=600"
                    alt="RCM Centric Dashboard Interface"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RCM Services Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          {/* RCM Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Revenue Card */}
            <div className="bg-gray-50 rounded-lg p-8 text-center border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <span className="text-6xl font-bold text-gray-700">R</span>
                <span className="text-6xl font-bold text-red-500">.</span>
              </div>
              <h3 className="text-lg font-medium text-gray-600 leading-relaxed">
                Revenue Growth That Your Practice Deserves
              </h3>
            </div>

            {/* Centric Card */}
            <div className="bg-gray-50 rounded-lg p-8 text-center border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <span className="text-6xl font-bold text-gray-700">C</span>
                <span className="text-6xl font-bold text-red-500">.</span>
              </div>
              <h3 className="text-lg font-medium text-gray-600 leading-relaxed">
                Centric Solution By Specialty Focused
              </h3>
            </div>

            {/* Managing Card */}
            <div className="bg-gray-50 rounded-lg p-8 text-center border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <span className="text-6xl font-bold text-gray-700">M</span>
                <span className="text-6xl font-bold text-red-500">.</span>
              </div>
              <h3 className="text-lg font-medium text-gray-600 leading-relaxed">
                Managing Each Medical Claim Efficiently
              </h3>
            </div>
          </div>

          {/* Services Description */}
        </div>
      </section>
      {/* Services Description */}

      <SolutionsAndServices />

      {/* Centric Solution Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header Content */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
              A Centric Solution For Your Practice Needs
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At RCM Centric, we recognize that Practices, Facilities, and
              Hospitals must be as flexible as their patients. And that's a{" "}
              <strong>challenge</strong> we readily embrace. So whether you're a
              doctor trying to <strong>streamline your collection</strong> or a
              hospital looking to optimize a patient's{" "}
              <strong>claims capacity</strong>, RCM Centric has the expertise to
              get you on your way with advanced medical billing &{" "}
              <strong>coding strategies</strong>.
            </p>
          </div>

          {/* Provider to Success Layout - All in One Line */}
          <div className="flex items-center justify-center gap-7 mb-12">
            {/* Provider Column */}
            <div className="text-center flex-shrink-0">
              <div className="flex justify-center mb-4">
                <div
                  className="w-32 h-32  rounded-full flex items-center
       justify-center overflow-hidden shadow-lg border-4 border-blue-200"
                >
                  <Image
                    src="/provider.jpg"
                    alt="Provider - Healthcare Professional"
                    width={120}
                    height={120}
                    className="w-28 h-28 object-cover"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Provider</h3>
            </div>

            {/* Comparison Slider - Center */}
            <div className="flex-0 max-w-2xl">
              <ImageComparisonSlider
                beforeImage="/w_rcm.jpg"
                afterImage="/with_rcm.jpg"
                beforeLabel="Without RCM Centric"
                afterLabel="With RCM Centric"
              />
            </div>

            {/* Success Column */}
            <div className="text-center flex-shrink-0">
              <div className="flex justify-center mb-4">
                <div className="w-32 h-32 bg-yellow-50 rounded-full flex items-center justify-center overflow-hidden shadow-lg border-4 border-yellow-200">
                  <Image
                    src="/success.jpg"
                    alt="Success - Trophy"
                    width={120}
                    height={120}
                    className="w-28 h-28 object-cover"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Success</h3>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="text-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              Talk to an Expert <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
      <RCMCentricSection />
      <MedicalBillingSection />
      <OnboardingPage />
      <RCMBenefitSection />

      <ExpertiseSection />
    </div>
  );
}
