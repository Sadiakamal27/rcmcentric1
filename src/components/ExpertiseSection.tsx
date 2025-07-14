import React from 'react'
import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
function ExpertiseSection() {
const [isVisible, setIsVisible] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Play video when section comes into view
          if (videoRef.current) {
            videoRef.current.play().catch(console.error);
            setIsVideoPlaying(true);
          }
        } else {
          // Pause video when section leaves view
          if (videoRef.current) {
            videoRef.current.pause();
            setIsVideoPlaying(false);
          }
        }
      },
      {
        threshold: 0.3,
        rootMargin: "-50px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
    
  return (
    <div className="min-h-screen py-16 px-50 bg-white flex items-center mt-20  justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-gray-800">Expertise in Software</h1>
        <div className="mt-2">
          <hr className="w-16 mx-auto border-t-2 border-red-500" />
          <div className="w-full  relative mb-8  ">
          <div className=" h-64 md:h-auto flex items-center justify-center">
            <video
              ref={videoRef}
              className="w-full h-full object-cover rounded-lg"
              autoPlay
              loop
              muted
              src="/rcm-billing-software-animation.mp4"
             preload="metadata"
            >
              <source src="/why-choose-rcm-centric.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          </div>
       
        </div>
        
     
      
     
            <Card className="w-full grid lg:grid-cols-2 bg-blue-100 max-w-3xl mx-auto  overflow-hidden">
            
      <CardHeader className="bg-gradient-to-r  to-white/50 p-1">
        <CardTitle className="text-xl font-semibold ">
          Unite your healthcare workflows and save 40+ hours every week.
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 flex items-center justify-between gap-1">
        
        <div className="flex-1  border-0">
          <Input
            type="email"
            placeholder="Work Email"
            className="w-50 "
          />
        </div>
        <Button className="bg-blue-600 text-white hover:bg-blue-700  px-6 py-2">
          GET STARTED
        </Button>
      </CardContent>
    </Card>
      </div>
     
      </div>
  )
}

export default ExpertiseSection