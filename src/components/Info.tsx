"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe, Users, Award, Heart } from "lucide-react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Info = () => {
  const headerRef = useRef(null);
  const taglineRef = useRef(null);
  const descriptionRef = useRef(null);
  const missionRef = useRef(null);
  const missionItemsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    // Header animation
    gsap.from(headerRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Tagline animation
    gsap.from(taglineRef.current, {
      y: 30,
      opacity: 0,
      duration: 1.2,
      delay: 0.3,
      ease: "power3.out",
    });

    // Description section animation
    gsap.from(descriptionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: descriptionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });

    // Mission title animation
    gsap.from(missionRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      scrollTrigger: {
        trigger: missionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });

    // Mission items staggered animation
    gsap.from(missionItemsRef.current, {
      opacity: 0,
      x: -30,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: missionRef.current,
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  const addToMissionRefs = (el: HTMLElement | null) => {
    if (el && !missionItemsRef.current.includes(el)) {
      missionItemsRef.current.push(el);
    }
  };
  

  return (
    <div className="bg-gradient-to-b from-blue-50 to-gray-50 min-h-screen">
      {/* Hero Section with Marathi cultural patterns */}
      <div className="relative bg-[#ed9702] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ed9702] to-[#c57d01] opacity-90"></div>

        {/* Marathi cultural pattern overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
              <defs>
                <pattern
                  id="paithani"
                  width="60"
                  height="60"
                  patternUnits="userSpaceOnUse"
                >
                  {/* Stylized paithani border pattern */}
                  <path
                    d="M0,0 L60,0 L60,60 L0,60 Z"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                  />
                  <path
                    d="M30,10 L50,30 L30,50 L10,30 Z"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                  />
                  <path
                    d="M30,15 L45,30 L30,45 L15,30 Z"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                  />
                  <circle
                    cx="30"
                    cy="30"
                    r="5"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#paithani)" />
            </svg>
          </div>
        </div>

        {/* Decorative cultural elements */}
        <div className="absolute top-0 left-0 w-32 h-32 opacity-20">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M50,5 L95,50 L50,95 L5,50 Z"
              fill="none"
              stroke="white"
              strokeWidth="1"
            />
            <path
              d="M50,20 L80,50 L50,80 L20,50 Z"
              fill="none"
              stroke="white"
              strokeWidth="1"
            />
            <circle
              cx="50"
              cy="50"
              r="10"
              fill="none"
              stroke="white"
              strokeWidth="1"
            />
          </svg>
        </div>

        <div className="absolute bottom-0 right-0 w-40 h-40 opacity-20">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10,10 Q50,-10 90,10 Q110,50 90,90 Q50,110 10,90 Q-10,50 10,10"
              fill="none"
              stroke="white"
              strokeWidth="1"
            />
            <path
              d="M25,25 Q50,10 75,25 Q90,50 75,75 Q50,90 25,75 Q10,50 25,25"
              fill="none"
              stroke="white"
              strokeWidth="1"
            />
          </svg>
        </div>
      </div>

      {/* About Section */}
      <div
        ref={descriptionRef}
        className="container mx-auto px-4 py-12 md:py-20"
      >
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-10 relative overflow-hidden">
          {/* Warli art styled decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              {/* Simplified Warli-style human figures in a circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#000"
                strokeWidth="1"
              />
              {[...Array(8)].map((_, i) => {
                const angle = (i * Math.PI) / 4;
                const x = 50 + 30 * Math.cos(angle);
                const y = 50 + 30 * Math.sin(angle);
                return (
                  <g key={i}>
                    <circle cx={x} cy={y - 5} r="3" fill="#000" />
                    <line
                      x1={x}
                      y1={y - 2}
                      x2={x}
                      y2={y + 10}
                      stroke="#000"
                      strokeWidth="1"
                    />
                    <line
                      x1={x}
                      y1={y + 3}
                      x2={x - 5}
                      y2={y + 8}
                      stroke="#000"
                      strokeWidth="1"
                    />
                    <line
                      x1={x}
                      y1={y + 3}
                      x2={x + 5}
                      y2={y + 8}
                      stroke="#000"
                      strokeWidth="1"
                    />
                    <line
                      x1={x}
                      y1={y + 10}
                      x2={x - 5}
                      y2={y + 15}
                      stroke="#000"
                      strokeWidth="1"
                    />
                    <line
                      x1={x}
                      y1={y + 10}
                      x2={x + 5}
                      y2={y + 15}
                      stroke="#000"
                      strokeWidth="1"
                    />
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="prose max-w-none relative z-10">
            <p className="text-lg text-gray-700 mb-6">
              Garje Marathi Global (GMG) is a non-profit institution registered
              in California, USA with a sister organization, Garje Marathi
              Global Foundation (GMGF), a Section 8 not-for-profit company
              registered in Maharashtra, India.
            </p>

            <p className="text-lg text-gray-700 mb-6">
              With over 15,000 members connected across the globe and 30
              location-based chapters, GMG has united the Marathi community
              worldwide with one common purpose: empowering Marathis globally
              while giving back to our roots.
            </p>

            {/* Marathi Cultural Icons Row */}
            <div className="flex justify-center mb-8">
              <div className="grid grid-cols-5 gap-4">
                {/* Styled cultural icons */}
                <div className="flex flex-col items-center">
                  <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
                    <rect
                      x="50"
                      y="100"
                      width="300"
                      height="100"
                      fill="#d32f2f"
                    />

                    <path
                      d="M50,100 v-15 h10 v15 h10 v-15 h10 v15 h10 v-15 h10 v15 h10 v-15 h10 v15 h10 v-15 h10 v15 h10 v-15 h10 v15 h10 v-15 h10 v15 h10 v-15 h10 v15 h10 v-15 h10 v15 h10 v-15 h10 v15 h10 v-15 h10 v15 h10 v-15 h10 v15 h10 v-15 h10 v15 h10 v-15 h10 v15 h10 v-15 h10 v15 h10 v-15 h10 v15"
                      fill="#d32f2f"
                      stroke="#000000"
                      strokeWidth="1"
                    />

                    <path
                      d="M170,200 v-70 a30,30 0 0 1 60,0 v70"
                      fill="#881c1c"
                    />
                    <path
                      d="M170,130 a30,30 0 0 1 60,0"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="2"
                    />

                    <path
                      d="M90,160 v-30 a10,15 0 0 1 20,0 v30"
                      fill="#881c1c"
                    />
                    <path
                      d="M90,130 a10,15 0 0 1 20,0"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="1"
                    />

                    <path
                      d="M290,160 v-30 a10,15 0 0 1 20,0 v30"
                      fill="#881c1c"
                    />
                    <path
                      d="M290,130 a10,15 0 0 1 20,0"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="1"
                    />

                    <rect
                      x="35"
                      y="80"
                      width="30"
                      height="120"
                      fill="#d32f2f"
                      rx="2"
                      ry="2"
                    />
                    <rect
                      x="335"
                      y="80"
                      width="30"
                      height="120"
                      fill="#d32f2f"
                      rx="2"
                      ry="2"
                    />

                    <path
                      d="M45,170 v-40 a5,10 0 0 1 10,0 v40"
                      fill="#881c1c"
                    />
                    <path
                      d="M45,130 a5,10 0 0 1 10,0"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="1"
                    />

                    <path
                      d="M345,170 v-40 a5,10 0 0 1 10,0 v40"
                      fill="#881c1c"
                    />
                    <path
                      d="M345,130 a5,10 0 0 1 10,0"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="1"
                    />

                    <path d="M35,80 v-10 h5 v-5 h20 v5 h5 v10" fill="#d32f2f" />
                    <path
                      d="M335,80 v-10 h5 v-5 h20 v5 h5 v10"
                      fill="#d32f2f"
                    />

                    <rect
                      x="150"
                      y="200"
                      width="100"
                      height="5"
                      fill="#ffffff"
                    />
                    <rect
                      x="140"
                      y="205"
                      width="120"
                      height="5"
                      fill="#f5f5f5"
                    />
                    <rect
                      x="130"
                      y="210"
                      width="140"
                      height="5"
                      fill="#eeeeee"
                    />
                    <rect
                      x="120"
                      y="215"
                      width="160"
                      height="5"
                      fill="#e0e0e0"
                    />
                    <rect
                      x="110"
                      y="220"
                      width="180"
                      height="5"
                      fill="#d0d0d0"
                    />

                    <line
                      x1="200"
                      y1="110"
                      x2="200"
                      y2="130"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                    />
                    <circle cx="200" cy="107" r="3" fill="#ffffff" />
                  </svg>
                  <span className="text-xs mt-1 text-gray-600">Heritage</span>
                </div>

                <div className="flex flex-col items-center">
                  <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(300, 300) rotate(-45) translate(-200, -250)">
                      <ellipse
                        cx="200"
                        cy="370"
                        rx="120"
                        ry="110"
                        fill="#d4a76a"
                        stroke="#603813"
                        strokeWidth="3"
                      />

                      <path
                        d="M200,370 L200,50 C180,50 170,70 170,90 L170,350 C170,360 185,370 200,370"
                        fill="#d4a76a"
                        stroke="#603813"
                        strokeWidth="3"
                      />
                      <path
                        d="M200,370 L200,50 C220,50 230,70 230,90 L230,350 C230,360 215,370 200,370"
                        fill="#c69c6d"
                        stroke="#603813"
                        strokeWidth="3"
                      />

                      <rect
                        x="160"
                        y="370"
                        width="80"
                        height="10"
                        rx="5"
                        ry="5"
                        fill="#603813"
                      />

                      <g transform="translate(178, 50) rotate(10)">
                        <rect
                          width="10"
                          height="25"
                          rx="2"
                          ry="2"
                          fill="#5d4037"
                        />
                      </g>
                      <g transform="translate(193, 57) rotate(-10)">
                        <rect
                          width="10"
                          height="25"
                          rx="2"
                          ry="2"
                          fill="#5d4037"
                        />
                      </g>
                      <g transform="translate(174, 80) rotate(10)">
                        <rect
                          width="10"
                          height="25"
                          rx="2"
                          ry="2"
                          fill="#5d4037"
                        />
                      </g>
                      <g transform="translate(197, 87) rotate(-10)">
                        <rect
                          width="10"
                          height="25"
                          rx="2"
                          ry="2"
                          fill="#5d4037"
                        />
                      </g>
                      <g transform="translate(170, 110) rotate(10)">
                        <rect
                          width="10"
                          height="25"
                          rx="2"
                          ry="2"
                          fill="#5d4037"
                        />
                      </g>
                      <g transform="translate(201, 117) rotate(-10)">
                        <rect
                          width="10"
                          height="25"
                          rx="2"
                          ry="2"
                          fill="#5d4037"
                        />
                      </g>

                      <rect
                        x="175"
                        y="140"
                        width="50"
                        height="5"
                        rx="2.5"
                        ry="2.5"
                        fill="#8d6e63"
                      />
                      <rect
                        x="175"
                        y="170"
                        width="50"
                        height="5"
                        rx="2.5"
                        ry="2.5"
                        fill="#8d6e63"
                      />
                      <rect
                        x="175"
                        y="200"
                        width="50"
                        height="5"
                        rx="2.5"
                        ry="2.5"
                        fill="#8d6e63"
                      />
                      <rect
                        x="175"
                        y="230"
                        width="50"
                        height="5"
                        rx="2.5"
                        ry="2.5"
                        fill="#8d6e63"
                      />
                      <rect
                        x="175"
                        y="260"
                        width="50"
                        height="5"
                        rx="2.5"
                        ry="2.5"
                        fill="#8d6e63"
                      />
                      <rect
                        x="175"
                        y="290"
                        width="50"
                        height="5"
                        rx="2.5"
                        ry="2.5"
                        fill="#8d6e63"
                      />
                      <rect
                        x="175"
                        y="320"
                        width="50"
                        height="5"
                        rx="2.5"
                        ry="2.5"
                        fill="#8d6e63"
                      />
                      <line
                        x1="185"
                        y1="50"
                        x2="185"
                        y2="380"
                        stroke="#f5f5f5"
                        strokeWidth="1.5"
                      />
                      <line
                        x1="195"
                        y1="50"
                        x2="195"
                        y2="380"
                        stroke="#f5f5f5"
                        strokeWidth="1.5"
                      />
                      <line
                        x1="205"
                        y1="50"
                        x2="205"
                        y2="380"
                        stroke="#f5f5f5"
                        strokeWidth="1.5"
                      />
                      <line
                        x1="215"
                        y1="50"
                        x2="215"
                        y2="380"
                        stroke="#f5f5f5"
                        strokeWidth="1.5"
                      />
                      <line
                        x1="175"
                        y1="150"
                        x2="175"
                        y2="370"
                        stroke="#f5f5f5"
                        strokeWidth="0.75"
                      />
                      <line
                        x1="225"
                        y1="150"
                        x2="225"
                        y2="370"
                        stroke="#f5f5f5"
                        strokeWidth="0.75"
                      />

                      <path
                        d="M200,430 a120,60 0 0 0 120,-60"
                        fill="none"
                        stroke="#603813"
                        strokeWidth="2"
                      />
                      <path
                        d="M200,430 a120,60 0 0 1 -120,-60"
                        fill="none"
                        stroke="#603813"
                        strokeWidth="2"
                      />

                      <circle
                        cx="200"
                        cy="390"
                        r="15"
                        fill="none"
                        stroke="#8d6e63"
                        strokeWidth="1.5"
                      />
                      <circle
                        cx="200"
                        cy="390"
                        r="10"
                        fill="none"
                        stroke="#8d6e63"
                        strokeWidth="1.5"
                      />
                      <circle
                        cx="200"
                        cy="390"
                        r="5"
                        fill="none"
                        stroke="#8d6e63"
                        strokeWidth="1.5"
                      />
                    </g>
                  </svg>
                  <span className="text-xs mt-1 text-gray-600">Music</span>
                </div>

                <div className="flex flex-col items-center">
                  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                    <radialGradient
                      id="backgroundGlow"
                      cx="200"
                      cy="150"
                      r="150"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset="0%"
                        stopColor="#ffdc9e"
                        stopOpacity="0.4"
                      />
                      <stop
                        offset="70%"
                        stopColor="#ffdc9e"
                        stopOpacity="0.1"
                      />
                      <stop
                        offset="100%"
                        stopColor="#ffdc9e"
                        stopOpacity="0"
                      />
                    </radialGradient>
                    <circle
                      cx="200"
                      cy="150"
                      r="150"
                      fill="url(#backgroundGlow)"
                    />

                    <ellipse
                      cx="200"
                      cy="200"
                      rx="120"
                      ry="30"
                      fill="#873600"
                    />
                    <ellipse
                      cx="200"
                      cy="200"
                      rx="110"
                      ry="25"
                      fill="#a04000"
                    />
                    <ellipse
                      cx="200"
                      cy="200"
                      rx="100"
                      ry="20"
                      fill="#ba4a00"
                    />

                    <path
                      d="M120,190 Q130,185 140,190 Q150,195 160,190 Q170,185 180,190 Q190,195 200,190 Q210,185 220,190 Q230,195 240,190 Q250,185 260,190 Q270,195 280,190"
                      stroke="#ffd700"
                      strokeWidth="2"
                      fill="none"
                    />

                    <path
                      d="M130,200 Q140,195 150,200 Q160,205 170,200 Q180,195 190,200 Q200,205 210,200 Q220,195 230,200 Q240,205 250,200 Q260,195 270,200"
                      stroke="#ffd700"
                      strokeWidth="2"
                      fill="none"
                    />

                    <linearGradient
                      id="clayGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#c94200" />
                      <stop offset="50%" stopColor="#aa3600" />
                      <stop offset="100%" stopColor="#962e00" />
                    </linearGradient>

                    <path
                      d="M200,180 C160,180 150,160 170,140 L230,140 C250,160 240,180 200,180 Z"
                      fill="url(#clayGradient)"
                      stroke="#6d2c00"
                      strokeWidth="2"
                    />

                    <path
                      d="M180,175 C175,165 175,155 180,145"
                      stroke="#6d2c00"
                      strokeWidth="1"
                      fill="none"
                    />
                    <path
                      d="M220,175 C225,165 225,155 220,145"
                      stroke="#6d2c00"
                      strokeWidth="1"
                      fill="none"
                    />

                    <linearGradient
                      id="oilGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#ffcc80" />
                      <stop offset="50%" stopColor="#ffb74d" />
                      <stop offset="100%" stopColor="#ffa726" />
                    </linearGradient>

                    <path
                      d="M200,150 C180,150 180,145 190,142 L210,142 C220,145 220,150 200,150 Z"
                      fill="url(#oilGradient)"
                    />

                    <rect
                      x="197"
                      y="130"
                      width="6"
                      height="15"
                      rx="3"
                      ry="3"
                      fill="#4e342e"
                    />

                    <defs>
                      <radialGradient
                        id="flameGradient"
                        cx="200"
                        cy="110"
                        r="30"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="10%" stopColor="#ffffff" />
                        <stop offset="30%" stopColor="#ffee58" />
                        <stop offset="60%" stopColor="#ffa726" />
                        <stop offset="100%" stopColor="#ff7043" />
                      </radialGradient>
                    </defs>

                    <path
                      d="M200,125 C208,110 215,95 210,80 C215,95 222,110 200,125 Z"
                      fill="url(#flameGradient)"
                    />
                    <path
                      d="M200,125 C205,115 210,105 207,95 C210,105 213,115 200,125 Z"
                      fill="#ff9800"
                      opacity="0.7"
                    />
                    <path
                      d="M200,125 C202,120 204,115 203,110 C204,115 205,120 200,125 Z"
                      fill="#ff5722"
                      opacity="0.9"
                    />

                    <radialGradient
                      id="flameGlow"
                      cx="200"
                      cy="100"
                      r="70"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset="0%"
                        stopColor="#ff9800"
                        stopOpacity="0.7"
                      />
                      <stop
                        offset="40%"
                        stopColor="#ff9800"
                        stopOpacity="0.3"
                      />
                      <stop
                        offset="100%"
                        stopColor="#ff9800"
                        stopOpacity="0"
                      />
                    </radialGradient>
                    <circle cx="200" cy="100" r="70" fill="url(#flameGlow)" />

                    <circle cx="150" cy="200" r="5" fill="#ffd700" />
                    <circle cx="170" cy="200" r="5" fill="#ffd700" />
                    <circle cx="190" cy="200" r="5" fill="#ffd700" />
                    <circle cx="210" cy="200" r="5" fill="#ffd700" />
                    <circle cx="230" cy="200" r="5" fill="#ffd700" />
                    <circle cx="250" cy="200" r="5" fill="#ffd700" />

                    <g fill="#ffffff">
                      <circle cx="140" cy="175" r="1.5" />
                      <circle cx="160" cy="165" r="1.5" />
                      <circle cx="180" cy="170" r="1.5" />
                      <circle cx="220" cy="170" r="1.5" />
                      <circle cx="240" cy="165" r="1.5" />
                      <circle cx="260" cy="175" r="1.5" />
                      <circle cx="200" cy="90" r="2" />
                      <circle cx="190" cy="75" r="1.5" />
                      <circle cx="210" cy="75" r="1.5" />
                    </g>

                    <ellipse
                      cx="200"
                      cy="205"
                      rx="80"
                      ry="10"
                      fill="#000000"
                      opacity="0.2"
                    />
                  </svg>
                  <span className="text-xs mt-1 text-gray-600">Festivals</span>
                </div>

                <div className="flex flex-col items-center">
                <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  
  <path d="M80,220 L320,220 L320,250 L80,250 Z" fill="#8BC34A" stroke="#000" strokeWidth="1"/>
  <rect x="90" y="235" width="100" height="8" rx="1" fill="#FFFFFF" stroke="#000" strokeWidth="0.5"/>
  <path d="M80,250 L320,250 L320,220 L330,230 L330,260 L90,260 Z" fill="#689F38" stroke="#000" strokeWidth="1"/>
  
  <path d="M90,190 L330,190 L330,220 L90,220 Z" fill="#FF9800" stroke="#000" strokeWidth="1"/>
  <path d="M90,220 L330,220 L330,190 L340,200 L340,230 L100,230 Z" fill="#F57C00" stroke="#000" strokeWidth="1"/>
  
  <path d="M85,160 L335,160 L335,190 L85,190 Z" fill="#9C27B0" stroke="#000" strokeWidth="1"/>
  <rect x="95" y="165" width="230" height="5" fill="#FFC107" stroke="none"/>
  <rect x="95" y="180" width="230" height="5" fill="#FFC107" stroke="none"/>
  <path d="M85,190 L335,190 L335,160 L345,170 L345,200 L95,200 Z" fill="#7B1FA2" stroke="#000" strokeWidth="1"/>
  
  <path d="M70,100 C100,90 150,85 200,83 L200,130 L70,145 Z" fill="#F5F5F5" stroke="#000" strokeWidth="1"/>
  <path d="M330,100 C300,90 250,85 200,83 L200,130 L330,145 Z" fill="#F5F5F5" stroke="#000" strokeWidth="1"/>
  
  <path d="M200,83 L200,130" stroke="#000" strokeWidth="1"/>
  
  <path d="M70,145 L200,130 L330,145" fill="none" stroke="#9C27B0" strokeWidth="1"/>
  <path d="M70,100 C100,90 150,85 200,83 C250,85 300,90 330,100" fill="none" stroke="#9C27B0" strokeWidth="1"/>
  
  <path d="M85,135 L190,123" stroke="#DDD" strokeWidth="0.5"/>
  <path d="M85,125 L190,113" stroke="#DDD" strokeWidth="0.5"/>
  <path d="M85,115 L190,103" stroke="#DDD" strokeWidth="0.5"/>
  
  <path d="M210,123 L315,135" stroke="#DDD" strokeWidth="0.5"/>
  <path d="M210,113 L315,125" stroke="#DDD" strokeWidth="0.5"/>
  <path d="M210,103 L315,115" stroke="#DDD" strokeWidth="0.5"/>
  
  <text x="155" y="60" fontFamily="Arial Unicode MS, Noto Sans" fontSize="24" fill="#9C27B0">ज्ञान</text>
  <text x="220" y="45" fontFamily="Arial Unicode MS, Noto Sans" fontSize="24" fill="#FF9800">धर्म</text>
  <text x="115" y="45" fontFamily="Arial Unicode MS, Noto Sans" fontSize="24" fill="#8BC34A">वेद</text>
  <text x="260" y="60" fontFamily="Arial Unicode MS, Noto Sans" fontSize="24" fill="#7B1FA2">मोक्ष</text>
  
  <path d="M170,65 L185,83" stroke="#9C27B0" strokeWidth="0.5" strokeDasharray="2,1"/>
  <path d="M230,50 L205,83" stroke="#FF9800" strokeWidth="0.5" strokeDasharray="2,1"/>
  <path d="M125,50 L195,83" stroke="#8BC34A" strokeWidth="0.5" strokeDasharray="2,1"/>
  <path d="M270,65 L215,83" stroke="#7B1FA2" strokeWidth="0.5" strokeDasharray="2,1"/>
</svg>
                  <span className="text-xs mt-1 text-gray-600">Literature</span>
                </div>

                <div className="flex flex-col items-center">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Simplified paithani saree pattern */}
                    <rect
                      x="20"
                      y="30"
                      width="60"
                      height="40"
                      fill="#E5E7EB"
                      stroke="#4B5563"
                      strokeWidth="2"
                    />
                    <path d="M20,40 L80,40" stroke="#4B5563" strokeWidth="1" />
                    <path d="M20,50 L80,50" stroke="#4B5563" strokeWidth="1" />
                    <path d="M20,60 L80,60" stroke="#4B5563" strokeWidth="1" />
                    <path d="M30,30 L30,70" stroke="#4B5563" strokeWidth="1" />
                    <path d="M40,30 L40,70" stroke="#4B5563" strokeWidth="1" />
                    <path d="M50,30 L50,70" stroke="#4B5563" strokeWidth="1" />
                    <path d="M60,30 L60,70" stroke="#4B5563" strokeWidth="1" />
                    <path d="M70,30 L70,70" stroke="#4B5563" strokeWidth="1" />
                  </svg>
                  <span className="text-xs mt-1 text-gray-600">Textiles</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 my-12">
              <div className="text-center bg-blue-50 rounded-lg p-6 shadow-sm flex-1 min-w-64">
                <div className="flex justify-center mb-4">
                  <Users size={36} className="text-[#ed9702]" />
                </div>
                <h3 className="text-xl font-semibold text-[#ed9702] mb-2">
                  15,000+
                </h3>
                <p className="text-gray-600">Global Members</p>
              </div>

              <div className="text-center bg-blue-50 rounded-lg p-6 shadow-sm flex-1 min-w-64">
                <div className="flex justify-center mb-4">
                  <Globe size={36} className="text-[#ed9702]" />
                </div>
                <h3 className="text-xl font-semibold text-[#ed9702] mb-2">
                  30+
                </h3>
                <p className="text-gray-600">Global Chapters</p>
              </div>

              <div className="text-center bg-blue-50 rounded-lg p-6 shadow-sm flex-1 min-w-64">
                <div className="flex justify-center mb-4">
                  <Heart size={36} className="text-[#ed9702]" />
                </div>
                <h3 className="text-xl font-semibold text-[#ed9702] mb-2">
                  100+
                </h3>
                <p className="text-gray-600">Community Initiatives</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <h2
              ref={missionRef}
              className="text-2xl md:text-3xl font-bold text-[#ed9702]"
            >
              Our Mission
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div
              ref={addToMissionRefs}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#ed9702] relative overflow-hidden"
            >
              <div className="absolute right-0 bottom-0 w-16 h-16 opacity-5">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  {/* Simplified globe with Maharashtra highlighted */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                  />
                  <path
                    d="M30,30 Q50,20 70,30 Q80,50 70,70 Q50,80 30,70 Q20,50 30,30"
                    fill="#000"
                    fillOpacity="0.2"
                  />
                </svg>
              </div>
              <div className="flex items-start relative z-10">
                <Globe className="text-[#ed9702] mr-4" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Unite Globally</h3>
                  <p className="text-gray-600">
                    Connecting Marathi people across continents on a single
                    collaborative platform
                  </p>
                </div>
              </div>
            </div>

            <div
              ref={addToMissionRefs}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#ed9702] relative overflow-hidden"
            >
              <div className="absolute right-0 bottom-0 w-16 h-16 opacity-5">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  {/* Simplified people network */}
                  <circle cx="30" cy="30" r="10" fill="#000" />
                  <circle cx="70" cy="30" r="10" fill="#000" />
                  <circle cx="30" cy="70" r="10" fill="#000" />
                  <circle cx="70" cy="70" r="10" fill="#000" />
                  <line
                    x1="30"
                    y1="30"
                    x2="70"
                    y2="30"
                    stroke="#000"
                    strokeWidth="2"
                  />
                  <line
                    x1="30"
                    y1="30"
                    x2="30"
                    y2="70"
                    stroke="#000"
                    strokeWidth="2"
                  />
                  <line
                    x1="30"
                    y1="30"
                    x2="70"
                    y2="70"
                    stroke="#000"
                    strokeWidth="2"
                  />
                  <line
                    x1="70"
                    y1="30"
                    x2="70"
                    y2="70"
                    stroke="#000"
                    strokeWidth="2"
                  />
                  <line
                    x1="30"
                    y1="70"
                    x2="70"
                    y2="70"
                    stroke="#000"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="flex items-start relative z-10">
                <Users className="text-[#ed9702] mr-4" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Support Systems
                  </h3>
                  <p className="text-gray-600">
                    Building robust networks for youth, entrepreneurs, and
                    professionals
                  </p>
                </div>
              </div>
            </div>

            <div
              ref={addToMissionRefs}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#ed9702] relative overflow-hidden"
            >
              <div className="absolute right-0 bottom-0 w-16 h-16 opacity-5">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  {/* Simplified Maharashtra outline */}
                  <path
                    d="M20,20 L80,30 L70,70 L30,80 Z"
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                  />
                  <circle cx="40" cy="40" r="5" fill="#000" />
                </svg>
              </div>
              <div className="flex items-start relative z-10">
                <Heart className="text-[#ed9702] mr-4" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Give Back</h3>
                  <p className="text-gray-600">
                    Developing meaningful channels to contribute to
                    Maharashtra's growth and prosperity
                  </p>
                </div>
              </div>
            </div>

            <div
              ref={addToMissionRefs}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#ed9702] relative overflow-hidden"
            >
              <div className="absolute right-0 bottom-0 w-16 h-16 opacity-5">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  {/* Simplified trophy with stars */}
                  <path
                    d="M35,30 L65,30 L65,60 C65,70 55,75 50,75 C45,75 35,70 35,60 Z"
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                  />
                  <line
                    x1="35"
                    y1="30"
                    x2="35"
                    y2="20"
                    stroke="#000"
                    strokeWidth="2"
                  />
                  <line
                    x1="65"
                    y1="30"
                    x2="65"
                    y2="20"
                    stroke="#000"
                    strokeWidth="2"
                  />
                  <line
                    x1="35"
                    y1="20"
                    x2="65"
                    y2="20"
                    stroke="#000"
                    strokeWidth="2"
                  />
                  <path d="M50,75 L50,85" stroke="#000" strokeWidth="2" />
                  <path d="M40,85 L60,85" stroke="#000" strokeWidth="2" />
                  <path
                    d="M25,40 L15,40 C15,50 20,55 25,55"
                    stroke="#000"
                    strokeWidth="2"
                  />
                  <path
                    d="M75,40 L85,40 C85,50 80,55 75,55"
                    stroke="#000"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="flex items-start relative z-10">
                <Award className="text-[#ed9702] mr-4" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Celebrate Achievement
                  </h3>
                  <p className="text-gray-600">
                    Recognizing and honoring the global accomplishments of our
                    community members
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cultural Footer Element */}
        </div>
      </div>
    </div>
  );
};

export default Info;
