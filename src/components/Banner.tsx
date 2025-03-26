"use client";
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { banners } from '@/constants/index';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlideIndex, setNextSlideIndex] = useState(1);
  const sliderRef = useRef(null);
  const currentSlideRef = useRef(null);
  const nextSlideRef = useRef(null);
  const currentContentRef = useRef(null);
  const nextContentRef = useRef(null);

  // Initial entrance animation
  useEffect(() => {
    gsap.fromTo(sliderRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" }
    );
  }, []);

  // Handle slide transitions
  useEffect(() => {
    // Update next slide index for crossfade
    setNextSlideIndex((currentSlide + 1) % banners.length);

    // Create animation timeline for slide transition
    const tl = gsap.timeline();
    
    // Fade out current slide content first
    tl.to(currentContentRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.4,
      ease: "power2.inOut"
    });

    // Crossfade between slides
    tl.to(currentSlideRef.current, {
      opacity: 0,
      duration: 0.6,
      ease: "power2.inOut"
    }, "-=0.2")
      .fromTo(nextSlideRef.current,
        { opacity: 0 },
        { 
          opacity: 1,
          duration: 0.6,
          ease: "power2.inOut"
        },
        "-=0.6"  // Start at the same time as current slide fade out
      );

    // Fade in next slide content
    tl.fromTo(nextContentRef.current,
      { 
        opacity: 0,
        y: 20
      },
      { 
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.inOut"
      },
      "-=0.3"
    );

    // Auto-advance slides
    const autoAdvance = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % banners.length);
    }, 8000);

    return () => clearInterval(autoAdvance);
  }, [currentSlide]);

  const handleNextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % banners.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + banners.length) % banners.length);
  };

  const goToSlide = (index: React.SetStateAction<number>) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative mx-4 mt-[120px]" ref={sliderRef}>
      <div className="rounded-3xl h-[60vh] shadow-2xl overflow-hidden relative lg:h-[80vh] md:mt-[5rem]">
        {/* Current Slide */}
        <div 
          ref={currentSlideRef}
          className="absolute inset-0"
        >
          <Image
            src={banners[currentSlide].image}
            alt={banners[currentSlide].title}
            layout="fill"
            objectFit="cover"
            priority={true}
          />
          <div 
            ref={currentContentRef}
            className="absolute bottom-0 left-0 p-8 text-white z-10 w-full bg-gradient-to-t from-black/70 to-transparent"
          >
            <h2 className="text-4xl font-bold mb-2">
              {banners[currentSlide].title}
            </h2>
            <p className="text-lg text-gray-200">
              {banners[currentSlide].description}
            </p>
          </div>
        </div>

        {/* Next Slide (preloaded for smooth transition) */}
        <div 
          ref={nextSlideRef}
          className="absolute inset-0 opacity-0"
        >
          <Image
            src={banners[nextSlideIndex].image}
            alt={banners[nextSlideIndex].title}
            layout="fill"
            objectFit="cover"
            priority={false}
          />
          <div 
            ref={nextContentRef}
            className="absolute bottom-0 left-0 p-8 text-white z-10 w-full bg-gradient-to-t from-black/70 to-transparent opacity-0"
          >
            <h2 className="text-4xl font-bold mb-2">
              {banners[nextSlideIndex].title}
            </h2>
            <p className="text-lg text-gray-200">
              {banners[nextSlideIndex].description}
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrevSlide}
          className="absolute hidden left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-3 rounded-full text-white z-20 transition-all duration-300 lg:block"
          aria-label="Previous slide"
        >
          ←
        </button>
        <button
          onClick={handleNextSlide}
          className="hidden absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-3 rounded-full text-white z-20 transition-all duration-300 lg:block"
          aria-label="Next slide"
        >
          →
        </button>

        {/* Dots Navigation */}
        <div className="hidden absolute bottom-24 left-1/2 -translate-x-1/2 lg:flex gap-2 z-20">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white w-6"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;