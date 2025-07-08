"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import {
  Play,
  MessageCircle,
  BarChart3,
  DollarSign,
  CalendarClock,
  Trophy,
  ExternalLink,
  FileText,
  Code,
  ShipWheelIcon as Wheelchair,
  Building2,
  ClipboardCheck,
  Award,
  Monitor,
  Headphones,
} from "lucide-react"
import { SolutionsDropdown } from "@/components/solutions-dropdown"
import { SpecialtiesDropdown } from "@/components/specialities-dropdown"
import { CompanyDropdown } from "@/components/company-dropdown"
import { ResourcesDropdown } from "@/components/resources-dropdown"
import { TopBar } from "@/components/top-bar"
import { ImageComparisonSlider } from "@/components/image-comaprison-slider"
import AutoPlayVideo from "@/components/AutoPlayVideo"

export default function HomePage() {

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <TopBar />

      {/* Header */}
      <header className="bg-white border-b border-gray-100 px-4 py-4 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center animate-logo-move">
              <span className="text-white font-bold text-sm">RCM</span>
            </div>
            <div className="text-gray-800 overflow-hidden">
              <div className="font-bold text-lg animate-slide-in-right">RCM</div>
              <div className="text-sm -mt-1 animate-slide-in-right">Centric</div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <SolutionsDropdown />
            <SpecialtiesDropdown />
            <div className="text-gray-700 hover:text-red-500 cursor-pointer">Why RCM Centric</div>
            <CompanyDropdown />
            <ResourcesDropdown />
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="border-red-300 text-red-500 hover:bg-red-50 bg-transparent">
              Get Pricing
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">Contact Us</Button>
          </div>
        </div>
      </header>

      {/* Hero Section with Stats */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
          <div className="absolute top-40 right-40 w-24 h-24 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-20 left-1/3 w-16 h-16 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-32 right-20 w-20 h-20 border border-white/20 rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <p className="text-blue-200 text-lg">Provider Practice Centric</p>
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                  <span className="border-l-4 border-red-400 pl-4">
                    Top-tier Revenue Cycle Management For Each Medical Specialty
                  </span>
                </h1>
              </div>

              <div className="space-y-4 text-blue-100">
                <p>
                  For over 10 years, our{" "}
                  <span className="text-red-400 font-semibold">medical billing company in the USA</span> have been
                  helping physicians, clinics, group practices, and hospital-owned physician groups with their medical
                  billing and coding tasks.
                </p>
                <p>
                  Establish and grow a healthy practice with RCM Centric's advanced healthcare medical billing services
                  & coding, including unique strategy and integrated technology.
                </p>
              </div>

              {/* Form Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Get a Solution for Your Medical Practice</h3>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                  <Select>
                    <SelectTrigger className="bg-white text-gray-700 border-0">
                      <SelectValue placeholder="Select Your Specialty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cardiology">Cardiology</SelectItem>
                      <SelectItem value="dermatology">Dermatology</SelectItem>
                      <SelectItem value="orthopedics">Orthopedics</SelectItem>
                      <SelectItem value="psychiatry">Psychiatry</SelectItem>
                      <SelectItem value="primary-care">Primary Care</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="bg-red-500 hover:bg-red-600 text-white px-8">Get Solution →</Button>
                </div>
              </div>
            </div>

            {/* Right Content - Video */}
         <div className="relative">
      <div className="relative rounded-lg overflow-hidden shadow-2xl" style={{ width: '600px', height: '400px' }}>
        {isPlaying ? (
          <iframe
            width="600"
            height="400"
            src="https://www.youtube.com/embed/To8tul_TsWE?autoplay=1&controls=1&rel=0"
            title="YouTube video player"
            frameBorder="0"
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
                  <div className="text-blue-100 text-sm">Increase Cash Flow</div>
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
                  <div className="text-blue-100 text-sm">Net Collection Rate</div>
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
                  <div className="text-blue-100 text-sm">Client Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Widget */}
        <div className="fixed bottom-6 left-6 z-50">
          <Button size="lg" className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg">
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
                <p className="text-red-500 text-lg font-medium">Increase Your Practice Revenue by 15%-20%</p>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                  Maximize Profitability & <br />
                  Minimize Errors With <br />
                  <span className="text-blue-600">RCM Centric</span>
                </h2>
              </div>

              <div className="space-y-4">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Are you looking for faster payment processing for your medical billing? Wish to reduce billing
                  overheads on various specialty billings that you frequently generate? RCM's advanced billing solutions
                  ensure that your billings forge higher net collections in less time. RCM Centric offers advanced
                  medical billing & coding services for a wide range of healthcare specialties.
                </p>
              </div>

              <div className="pt-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  About Us <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
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
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-700 mb-6">Centric Solutions & Services</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Unlock explosive revenue growth and empower your practice with accurate claim processing. Connect with our
              team to learn how honest and reliable medical claims solutions can help your business succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Medical Billing Services */}
            <Card className="bg-white hover:bg-blue-600 hover:shadow-lg transition-all duration-300 cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-white transition-colors">
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white mb-3 transition-colors">
                  MEDICAL BILLING SERVICES
                </h3>
                <p className="text-gray-600 group-hover:text-blue-100 text-sm mb-4 leading-relaxed transition-colors">
                  Offering End-To-End medical billing from demo entry to payment posting, with advanced monthly or
                  weekly reporting so you can notice what's going on.
                </p>
                <Button
                  variant="outline"
                  className="text-blue-600 border-blue-600 group-hover:bg-white group-hover:text-blue-600 group-hover:border-white bg-transparent transition-colors"
                >
                  Explore <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Medical Coding Services */}
            <Card className="bg-white hover:bg-blue-600 hover:shadow-lg transition-all duration-300 cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-white transition-colors">
                  <Code className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white mb-3 transition-colors">
                  MEDICAL CODING SERVICES
                </h3>
                <p className="text-gray-600 group-hover:text-blue-100 text-sm mb-4 leading-relaxed transition-colors">
                  Outsourcing your medical coding services to expert coders at RCM Centric enables you to optimize your
                  revenue while reducing compliance risks.
                </p>
                <Button
                  variant="outline"
                  className="text-blue-600 border-blue-600 group-hover:bg-white group-hover:text-blue-600 group-hover:border-white bg-transparent transition-colors"
                >
                  Explore <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* DME / Ambulatory Billing Services */}
            <Card className="bg-white hover:bg-blue-600 hover:shadow-lg transition-all duration-300 cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-white transition-colors">
                  <Wheelchair className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white mb-3 transition-colors">
                  DME / AMBULATORY BILLING SERVICES
                </h3>
                <p className="text-gray-600 group-hover:text-blue-100 text-sm mb-4 leading-relaxed transition-colors">
                  Forget your worries at leading DME billing, and you can boost your revenue by using our 24/7 durable
                  medical equipment (DME) Billing and Coding experts.
                </p>
                <Button
                  variant="outline"
                  className="text-blue-600 border-blue-600 group-hover:bg-white group-hover:text-blue-600 group-hover:border-white bg-transparent transition-colors"
                >
                  Explore <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Hospital Billing Services */}
            <Card className="bg-white hover:bg-blue-600 hover:shadow-lg transition-all duration-300 cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-white transition-colors">
                  <Building2 className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white mb-3 transition-colors">
                  HOSPITAL BILLING SERVICES
                </h3>
                <p className="text-gray-600 group-hover:text-blue-100 text-sm mb-4 leading-relaxed transition-colors">
                  Working with RCM Centric, you enjoy the long-term benefits of our revenue cycle specialists providing
                  efficient billing services to hospitals.
                </p>
                <Button
                  variant="outline"
                  className="text-blue-600 border-blue-600 group-hover:bg-white group-hover:text-blue-600 group-hover:border-white bg-transparent transition-colors"
                >
                  Explore <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Practice Audit Services */}
            <Card className="bg-white hover:bg-blue-600 hover:shadow-lg transition-all duration-300 cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-white transition-colors">
                  <ClipboardCheck className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white mb-3 transition-colors">
                  PRACTICE AUDIT SERVICES
                </h3>
                <p className="text-gray-600 group-hover:text-blue-100 text-sm mb-4 leading-relaxed transition-colors">
                  Want smooth practice? Our billing and coding experts will initiate an audit for you to find billing
                  issues and update your practice with the latest tech.
                </p>
                <Button
                  variant="outline"
                  className="text-blue-600 border-blue-600 group-hover:bg-white group-hover:text-blue-600 group-hover:border-white bg-transparent transition-colors"
                >
                  Explore <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Credentialing & Enrollment */}
            <Card className="bg-white hover:bg-blue-600 hover:shadow-lg transition-all duration-300 cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-white transition-colors">
                  <Award className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white mb-3 transition-colors">
                  CREDENTIALING & ENROLLMENT
                </h3>
                <p className="text-gray-600 group-hover:text-blue-100 text-sm mb-4 leading-relaxed transition-colors">
                  Our experienced team manages the credentialing process, which helps you navigate the process of
                  provider enrollment and credentialing with insurance.
                </p>
                <Button
                  variant="outline"
                  className="text-blue-600 border-blue-600 group-hover:bg-white group-hover:text-blue-600 group-hover:border-white bg-transparent transition-colors"
                >
                  Explore <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Telehealth Billing Services */}
            <Card className="bg-white hover:bg-blue-600 hover:shadow-lg transition-all duration-300 cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-white transition-colors">
                  <Monitor className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white mb-3 transition-colors">
                  TELEHEALTH BILLING SERVICES
                </h3>
                <p className="text-gray-600 group-hover:text-blue-100 text-sm mb-4 leading-relaxed transition-colors">
                  Connect with your patient easily and get an automated billing solution. We help providers to connect
                  with patients virtually with integrated technology.
                </p>
                <Button
                  variant="outline"
                  className="text-blue-600 border-blue-600 group-hover:bg-white group-hover:text-blue-600 group-hover:border-white bg-transparent transition-colors"
                >
                  Explore <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Patient Help Desk Services */}
            <Card className="bg-white hover:bg-blue-600 hover:shadow-lg transition-all duration-300 cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-white transition-colors">
                  <Headphones className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white mb-3 transition-colors">
                  PATIENT HELP DESK SERVICES
                </h3>
                <p className="text-gray-600 group-hover:text-blue-100 text-sm mb-4 leading-relaxed transition-colors">
                  RCM Centric provides dedicated help desk services for hospitals, medical centers, health clinics, and
                  private doctor's practices throughout the United States.
                </p>
                <Button
                  variant="outline"
                  className="text-blue-600 border-blue-600 group-hover:bg-white group-hover:text-blue-600 group-hover:border-white bg-transparent transition-colors"
                >
                  Explore <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Centric Solution Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header Content */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
              A Centric Solution For Your Practice Needs
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At RCM Centric, we recognize that Practices, Facilities, and Hospitals must be as flexible as their
              patients. And that's a <strong>challenge</strong> we readily embrace. So whether you're a doctor trying to{" "}
              <strong>streamline your collection</strong> or a hospital looking to optimize a patient's{" "}
              <strong>claims capacity</strong>, RCM Centric has the expertise to get you on your way with advanced
              medical billing & <strong>coding strategies</strong>.
            </p>
          </div>

          {/* Provider to Success Layout - All in One Line */}
          <div className="flex items-center justify-center gap-8 mb-12">
  {/* Provider Column */}
  <div className="text-center flex-shrink-0">
    <div className="flex justify-center mb-4">
      <div className="w-32 h-32 bg-blue-50 rounded-full flex items-center
       justify-center overflow-hidden shadow-lg border-4 border-blue-200">
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
  <div className="flex-1 max-w-2xl">
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

      {/* Why RCM Centric Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Sticky Content */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">Why RCM Centric?</h2>

                {/* Divider */}
                <div className="w-24 h-1 bg-red-500"></div>

                <p className="text-gray-600 text-lg leading-relaxed">
                  Upgrade and simplify your practice to ensure seamless, precise, and efficient service on the go.
                </p>

                {/* Video Placeholder */}
                
                <AutoPlayVideo />
              </div>
            </div>

            {/* Right Column - Scrolling Content */}
            <div className="space-y-8">
              {/* GO FAST */}
              <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="GO FAST"
                      width={64}
                      height={64}
                      className="w-12 h-12"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">GO FAST</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Billing and coding key processes so you can understand and improve operations—as it happens.
                  </p>
                </div>
              </div>

              {/* GO BIG */}
              <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="GO BIG"
                      width={64}
                      height={64}
                      className="w-12 h-12"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">GO BIG</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Improve your practice billing and coding errors and streamline maximum collections.
                  </p>
                </div>
              </div>

              {/* GO BOLD */}
              <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="GO BOLD"
                      width={64}
                      height={64}
                      className="w-12 h-12"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">GO BOLD</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Dream up and deliver more care to your patients' that advance your practice health.
                  </p>
                </div>
              </div>

              {/* GO SMOOTH */}
              <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="GO SMOOTH"
                      width={64}
                      height={64}
                      className="w-12 h-12"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">GO SMOOTH</h3>
                  <p className="text-gray-600 leading-relaxed">
                    With RCM Centric, your practice will achieve the results set for success in a short time.
                  </p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-blue-600 rounded-lg p-8 text-center text-white">
                <h2 className="text-2xl lg:text-3xl font-bold mb-6 leading-tight">
                  Connect for a free Practice Audit to build out your tailored improvement plan
                </h2>
                <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg">
                  Connect Now <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customized Billing Solutions Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* RCM Logo */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                  <div className="text-white font-bold text-center">
                    <div className="text-lg leading-tight">RCM</div>
                    <div className="text-xs leading-tight">CENTRIC</div>
                  </div>
                </div>
              </div>

              {/* Section Header */}
              <div className="space-y-4">
                <p className="text-red-500 text-lg font-medium uppercase tracking-wide">Solutions by Specialty</p>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                  Customized Billing Solutions
                  <br />
                  For Your Medical <span className="underline decoration-4 decoration-blue-600">Specialty</span>
                </h2>
              </div>

              {/* Description */}
              <div className="space-y-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our operations and billing team is here to provide you with everything you need, whenever you need it,
                  so you can focus on what matters most: caring for your patients.
                </p>

                {/* Benefits List */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg">Reduce in-house cost</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg">More time for patients</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg">Smooth, accurate and faster</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg">Optimized billing process</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg">Monthly audits, reporting and analytics</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                    View All Specialties <ExternalLink className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Content - Video and Specialties */}
            <div className="relative">
              {/* Video Placeholder */}
              <div className="bg-gray-100 rounded-lg p-8 mb-8 border-2 border-dashed border-gray-300 h-full">
                <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <Play className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                    <p className="text-lg font-medium">MP4 Video Placeholder</p>
                    <p className="text-sm">Replace with your video content</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
