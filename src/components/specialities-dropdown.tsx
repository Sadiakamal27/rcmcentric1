"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  ChevronDown,
  Stethoscope,
  Heart,
  Syringe,
  Ear,
  UserCheck,
  Brain,
  SmileIcon as Tooth,
  Shield,
  Camera,
  Bone,
  Users,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { div } from "framer-motion/m";

export function SpecialtiesDropdown() {
  return (
    <DropdownMenu  >
      <DropdownMenuTrigger asChild>
        <button className="flex items-center font-bold space-x-1 text-gray-700 hover:text-red-500 cursor-pointer">
          <span>Specialties</span>
          <ChevronDown className="w-3 h-3 " />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-screen max-w-5xl items-center p-0 border-0 shadow-xl"
        align="start"
      >
        <div className="grid lg:grid-cols-2">
          {/* Left Side - Blue Section */}
          <div className="bg-blue-500  p-0 text-white relative overflow-hidden">
            <div className="relative space-y-2">
              {/* RCM Logo */}
              <div className="w-129 h-39  flex items-center justify-center mb-4 overflow-hidden ">
                <Image
                  src="/main-shield-with-rcm-logo-1024x585.jpg"
                  alt="RCM Logo"
                  width={516} // Adjusted to fit w-48 (48 * 4 = 192px with default Tailwind base)
                  height={156} // Adjusted to fit h-24 (24 * 4 = 96px with default Tailwind base)
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <div className="space-y-4  p-3 ">
                <p className="text-blue-100 leading-relaxed text-sm ">
                  Instead of wasting your time pushing and pulling reports, RCM
                  Centric delivers everything you need, neatly in our operations
                  and billing team when you are.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
                >
                  Talk to Sales 
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side - Specialties Grid */}
          <div className="bg-white p-3">
            <div className="space-y-3">
              {/* First Column */}
              <div className="grid grid-cols-2 gap-1">
                <div className="space-y-1">
                  <div className="flex items-center space-x-3 group cursor-pointer hover:bg-gray-50 p-1 rounded-lg transition-colors">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                      <div className="w-16 h-16  rounded-lg flex items-center justify-center mx-auto   transition-colors">
                        <img
                          src="/a-s.png"
                          alt="Telehealth Billing Icon"
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                    </div>
                    <span className="text-sm text-gray-700 group-hover:text-blue-600">
                      Acupuncture Specialist
                    </span>
                  </div>

                  <div className="flex items-center space-x-3 group cursor-pointer hover:bg-gray-50 p-1 rounded-lg transition-colors">
                    <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center">
                      <div className="w-16 h-16  rounded-lg flex items-center justify-center mx-auto   transition-colors">
                        <img
                          src="/skin.png"
                          alt="Telehealth Billing Icon"
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                    </div>
                    <span className="text-sm text-gray-700 group-hover:text-blue-600">
                      Allergy / Immunology
                    </span>
                  </div>

                  <div className="flex items-center space-x-3 group cursor-pointer hover:bg-gray-50 p-1 rounded-lg transition-colors">
                    <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
                      <div className="w-16 h-16  rounded-lg flex items-center justify-center mx-auto   transition-colors">
                        <img
                          src="/anesthesia.png"
                          alt="Telehealth Billing Icon"
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                    </div>
                    <span className="text-sm text-gray-700 group-hover:text-blue-600">
                      Anesthesia Specialist
                    </span>
                  </div>

                  <div className="flex items-center space-x-3 group cursor-pointer hover:bg-gray-50 p-1 rounded-lg transition-colors">
                    <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center">
                      <div className="w-16 h-16  rounded-lg flex items-center justify-center mx-auto   transition-colors">
                        <img
                          src="/audiologist.png"
                          alt="Telehealth Billing Icon"
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                    </div>
                    <span className="text-sm text-gray-700 group-hover:text-blue-600">
                      Audiologist Specialist
                    </span>
                  </div>

                  <div className="flex items-center space-x-3 group cursor-pointer hover:bg-gray-50 p-1 rounded-lg transition-colors">
                    <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center">
                      <div className="w-16 h-16  rounded-lg flex items-center justify-center mx-auto   transition-colors">
                        <img
                          src="/nurse.png"
                          alt="Telehealth Billing Icon"
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                    </div>
                    <span className="text-sm text-gray-700 group-hover:text-blue-600">
                      Clinical Nurse Specialist
                    </span>
                  </div>

                  <div className="flex items-center space-x-3 group cursor-pointer hover:bg-gray-50 p-1 rounded-lg transition-colors">
                    <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center">
                      <div className="w-16 h-16  rounded-lg flex items-center justify-center mx-auto   transition-colors">
                        <img
                          src="/heart.png"
                          alt="Telehealth Billing Icon"
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                    </div>
                    <span className="text-sm text-gray-700 group-hover:text-blue-600">
                      Clinical Psychologist
                    </span>
                  </div>

                  <div className="flex items-center space-x-3 group cursor-pointer hover:bg-gray-50 p-1 rounded-lg transition-colors">
                    <div className="w-8 h-8 bg-cyan-50 rounded-lg flex items-center justify-center">
                      <div className="w-16 h-16  rounded-lg flex items-center justify-center mx-auto   transition-colors">
                        <img
                          src="/dentist.png"
                          alt="Telehealth Billing Icon"
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                    </div>
                    <span className="text-sm text-gray-700 group-hover:text-blue-600">
                      Dentist / Dentistry Specialist
                    </span>
                  </div>
                </div>

                {/* Second Column */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 group cursor-pointer hover:bg-gray-50 p-1 rounded-lg transition-colors">
                    <div className="w-8 h-8 bg-teal-50 rounded-lg flex items-center justify-center">
                      <div className="w-16 h-16  rounded-lg flex items-center justify-center mx-auto   transition-colors">
                        <img
                          src="/medical.png"
                          alt="Telehealth Billing Icon"
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                    </div>
                    <span className="text-sm text-gray-700 group-hover:text-blue-600">
                      Registered Nurse Anesthetist
                    </span>
                  </div>

                  <div className="flex items-center space-x-3 group cursor-pointer hover:bg-gray-50 p-1 rounded-lg transition-colors">
                    <div className="w-8 h-8 bg-pink-50 rounded-lg flex items-center justify-center">
                      <div className="w-16 h-16  rounded-lg flex items-center justify-center mx-auto   transition-colors">
                        <img
                          src="/diagnostic-tool.png"
                          alt="Telehealth Billing Icon"
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                    </div>
                    <span className="text-sm text-gray-700 group-hover:text-blue-600">
                      Diagnostic Radiology
                    </span>
                  </div>

                  <div className="flex items-center space-x-3 group cursor-pointer hover:bg-gray-50 p-1 rounded-lg transition-colors">
                    <div className="w-8 h-8 bg-yellow-50 rounded-lg flex items-center justify-center">
                      <div className="w-16 h-16  rounded-lg flex items-center justify-center mx-auto   transition-colors">
                        <img
                          src="/therapy.png"
                          alt="Telehealth Billing Icon"
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                    </div>
                    <span className="text-sm text-gray-700 group-hover:text-blue-600">
                      Chiropractor Specialist
                    </span>
                  </div>

                  <div className="flex items-center space-x-3 group cursor-pointer hover:bg-gray-50 p-1 rounded-lg transition-colors">
                    <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center">
                      <div className="w-16 h-16  rounded-lg flex items-center justify-center mx-auto   transition-colors">
                        <img
                          src="/neurologist.png"
                          alt="Telehealth Billing Icon"
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                    </div>
                    <span className="text-sm text-gray-700 group-hover:text-blue-600">
                      Clinical Neuropsychologist
                    </span>
                  </div>

                  <div className="flex items-center space-x-3 group cursor-pointer hover:bg-gray-50 p-1 rounded-lg transition-colors">
                    <div className="w-8 h-8 bg-violet-50 rounded-lg flex items-center justify-center">
                      <div className="w-16 h-16  rounded-lg flex items-center justify-center mx-auto   transition-colors">
                        <img
                          src="/online-counseling.png"
                          alt="Telehealth Billing Icon"
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                    </div>
                    <span className="text-sm text-gray-700 group-hover:text-blue-600">
                      Counseling Specialist
                    </span>
                  </div>

                  <div className="flex items-center space-x-3 group cursor-pointer hover:bg-gray-50 p-1 rounded-lg transition-colors">
                    <div className="w-8 h-8 bg-rose-50 rounded-lg flex items-center justify-center">
                      <div className="w-16 h-16  rounded-lg flex items-center justify-center mx-auto   transition-colors">
                        <img
                          src="/hair.png"
                          alt="Telehealth Billing Icon"
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                    </div>
                    <span className="text-sm text-gray-700 group-hover:text-blue-600">
                      Dermatology Specialist
                    </span>
                  </div>
                </div>
              </div>

              {/* View All Button */}
              <div className="pt-1">
                <Link href="/Specialties" target="_blank" rel="noopener noreferrer">
                  <Button className="w-1/2 bg-red-500 hover:bg-red-600 text-white flex items-center justify-center">
                    View All Medical Specialities{" "}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
