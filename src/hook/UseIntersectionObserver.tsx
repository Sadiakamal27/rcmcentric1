"use client";

import { useState, useEffect, useRef } from "react";

interface IntersectionOptions {
  threshold?: number | number[];
  rootMargin?: string;
}

export function useIntersectionObserver({ threshold = 0.05, rootMargin = "0px" }: IntersectionOptions) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null); // Explicitly type ref for HTMLDivElement

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current); // Stop observing after animation triggers
          }
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin]); // Remove ref from dependencies to avoid unnecessary re-renders

  return [ref, isVisible] as const; // Use 'as const' to ensure tuple type
}