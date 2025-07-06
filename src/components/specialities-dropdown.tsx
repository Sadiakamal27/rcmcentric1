"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
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
} from "lucide-react"

export function SpecialtiesDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center space-x-1 text-gray-700 hover:text-red-500 cursor-pointer">
          <span>Specialties</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-screen max-w-5xl p-0 border-0 shadow-xl" align="start">
        <div className="grid lg:grid-cols-2">
          {/* Left Side - Blue Section */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 left-4 w-16 h-16 border border-white/30 rounded-full"></div>
              <div className="absolute top-12 right-8 w-8 h-8 border border-white/30 rounded-full"></div>
              <div className="absolute bottom-8 left-12 w-12 h-12 border border-white/30 rounded-full"></div>
            </div>

            <div className="relative space-y-4">
              {/* RCM Logo */}
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">RCM</span>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <p className="text-blue-100 leading-relaxed text-sm">
                  Instead of wasting your time pushing and pulling reports, RCM Centric delivers everything you need,
                  neatly in our operations and billing team when you are.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
                >
                  Talk to Sales <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side - Specialties Grid */}
          <div className="bg-white p-6">
            <div className="space-y-6">
              {/* First Column */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 group cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Stethoscope className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-sm text-gray-700 group-hover:text-blue-600">Acupuncture Specialist</span>
                  </div>

                  <div className="flex items-center space-x-3 group cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                    <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center">
                      <Heart className="w-4 h-4 text-red-500" />
                    </div>
                    <span className="text-sm text-gray-700 group-hover:text-blue-600">Allergy / Immunology</span>
                  </div>

                  <div className="flex items-center space-x-3 group cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                    <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
                      <Syringe className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-sm text-gray-700 group-hover:text-blue-600">Anesthesia Specialist</span>
                  </div>

                  <div className="flex items-center space-x-3 group cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                    <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center">
                      <Ear className="w-4 h-4 text-orange-600" />
                    </div>
                    <span className="text-sm text-gray-700 group-hover:text-blue-600">Audiologist Specialist</span>
                  </div>

                  <div className="flex items-center space-x-3 group cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                    <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center">
                      <UserCheck className="w-4 h-4 text-purple-600" />
                    </div>
                    <span className="text-sm text-gray-700 group-hover:text-blue-600">Clinical Nurse Specialist</span>
                  </div>

                  <div className="flex items-center space-x-3 group cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                    <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center">
                      <Brain className="w-4 h-4 text-indigo-600" />
                    </div>
                    <span className="text-sm text-gray-700 group-hover:text-blue-600">Clinical Psychologist</span>
                  </div>

                  <div className="flex items-center space-x-3 group cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                    <div className="w-8 h-8 bg-cyan-50 rounded-lg flex items-center justify-center">
                      <Tooth className="w-4 h-4 text-cyan-600" />
                    </div>
                    <span className="text-sm text-gray-700 group-hover:text-blue-600">
                      Dentist / Dentistry Specialist
                    </span>
                  </div>
                </div>

                {/* Second Column */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 group cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                    <div className="w-8 h-8 bg-teal-50 rounded-lg flex items-center justify-center">
                      <Shield className="w-4 h-4 text-teal-600" />
                    </div>
                    <span className="text-sm text-gray-700 group-hover:text-blue-600">
                      Registered Nurse Anesthetist
                    </span>
                  </div>

                  <div className="flex items-center space-x-3 group cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                    <div className="w-8 h-8 bg-pink-50 rounded-lg flex items-center justify-center">
                      <Camera className="w-4 h-4 text-pink-600" />
                    </div>
                    <span className="text-sm text-gray-700 group-hover:text-blue-600">Diagnostic Radiology</span>
                  </div>

                  <div className="flex items-center space-x-3 group cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                    <div className="w-8 h-8 bg-yellow-50 rounded-lg flex items-center justify-center">
                      <Bone className="w-4 h-4 text-yellow-600" />
                    </div>
                    <span className="text-sm text-gray-700 group-hover:text-blue-600">Chiropractor Specialist</span>
                  </div>

                  <div className="flex items-center space-x-3 group cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                    <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center">
                      <Users className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-sm text-gray-700 group-hover:text-blue-600">Clinical Neuropsychologist</span>
                  </div>

                  <div className="flex items-center space-x-3 group cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                    <div className="w-8 h-8 bg-violet-50 rounded-lg flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 text-violet-600" />
                    </div>
                    <span className="text-sm text-gray-700 group-hover:text-blue-600">Counseling Specialist</span>
                  </div>

                  <div className="flex items-center space-x-3 group cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                    <div className="w-8 h-8 bg-rose-50 rounded-lg flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-rose-600" />
                    </div>
                    <span className="text-sm text-gray-700 group-hover:text-blue-600">Dermatology Specialist</span>
                  </div>
                </div>
              </div>

              {/* View All Button */}
              <div className="pt-4">
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                  View All Medical Specialities <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
