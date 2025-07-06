"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface ImageComparisonSliderProps {
  beforeImage?: string; // Made optional with default fallback
  afterImage?: string;  // Made optional with default fallback
  beforeLabel?: string;
  afterLabel?: string;
}

export function ImageComparisonSlider({
  beforeImage = "/w_rcm.jpg", // Default fallback image
  afterImage = "/with_rcm.jpg", // Default fallback image
  beforeLabel = "Before",
  afterLabel = "After",
}: ImageComparisonSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  // Validate and adjust image sources
  const getValidImageSrc = (src: string) => {
    if (!src) return "/default-placeholder.jpg"; // Fallback to a default placeholder
    if (src.startsWith("http") || src.startsWith("https")) {
      return src; // Use external URL as is
    }
    return `/public/${src}`; // Prepend /public for local paths
  };

  const validBeforeImage = getValidImageSrc(beforeImage);
  const validAfterImage = getValidImageSrc(afterImage);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-80 overflow-hidden rounded-lg shadow-xl border-4 border-gray-200 cursor-col-resize select-none bg-gray-100"
    >
      {/* After Image (Right side - With RCM) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src={validAfterImage}
          alt={afterLabel}
          width={600}
          height={320}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Before Image (Left side - Without RCM) */}
      <div
        className="absolute inset-0 overflow-hidden flex items-center justify-center"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={validBeforeImage}
          alt={beforeLabel}
          width={600}
          height={320}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Slider Handle - More Visible */}
      <div
        className="absolute top-0 bottom-0 w-2 bg-gradient-to-b from-blue-500 to-blue-700 cursor-col-resize z-10 shadow-lg"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        {/* Center Handle */}
        <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-white rounded-full border-4 border-blue-600 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
          <div className="flex space-x-1">
            <div className="w-1 h-6 bg-blue-600 rounded"></div>
            <div className="w-1 h-6 bg-blue-600 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}