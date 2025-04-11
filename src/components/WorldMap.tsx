'use client';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

// Latitude/Longitude-based chapter data
type Chapter = {
  id: number;
  name: string;
  country: string;
  members: number;
  lat: number;
  lng: number;
};

const chapters = [
  { id: 1, name: "San Francisco", country: "USA", members: 450, lat: 37.7749, lng: -122.4194 },
  { id: 2, name: "New York", country: "USA", members: 620, lat: 40.7128, lng: -74.0060 },
  { id: 3, name: "London", country: "UK", members: 380, lat: 51.5074, lng: -0.1278 },
  { id: 4, name: "Mumbai", country: "India", members: 1200, lat: 19.0760, lng: 72.8777 },
  { id: 5, name: "Pune", country: "India", members: 950, lat: 18.5204, lng: 73.8567 },
  { id: 6, name: "Singapore", country: "Singapore", members: 275, lat: 1.3521, lng: 103.8198 },
  { id: 7, name: "Sydney", country: "Australia", members: 320, lat: -33.8688, lng: 151.2093 },
  { id: 8, name: "Toronto", country: "Canada", members: 410, lat: 43.6510, lng: -79.3470 },
  { id: 9, name: "Berlin", country: "Germany", members: 290, lat: 52.5200, lng: 13.4050 },
  { id: 10, name: "Dubai", country: "UAE", members: 340, lat: 25.276987, lng: 55.296249 },
];

const latLngToXY = (lat: number, lng: number, width: number, height: number) => {
  const x = ((lng + 180) / 360) * width;
  const y = ((90 - lat) / 180) * height;
  return { x, y };
};

export default function GlobalCommunityMap() {
  const [activeChapter, setActiveChapter] = useState<Chapter | null>(null);
  const [totalMembers, setTotalMembers] = useState(0);
  const [countedMembers, setCountedMembers] = useState(0);
  const mapRef = useRef(null);
  const width = 800;
  const height = 400;

  useEffect(() => {
    const total = chapters.reduce((sum, c) => sum + c.members, 0);
    setTotalMembers(total);

    let obj = { val: 0 };
    gsap.to(obj, {
      val: total,
      duration: 2.5,
      ease: "power2.out",
      onUpdate: () => setCountedMembers(Math.floor(obj.val))
    });
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      gsap.fromTo(
        mapRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
      );

      gsap.fromTo(
        ".chapter-point",
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          delay: 0.5,
          ease: "back.out(1.7)",
        }
      );

      gsap.to(".point-pulse", {
        scale: 1.5,
        opacity: 0,
        duration: 1.5,
        repeat: -1,
        ease: "power1.out",
        stagger: 0.3,
      });
    }
  }, []);

  const handleChapterClick = (chapter: Chapter) => {
    setActiveChapter(chapter);
    gsap.to(".chapter-point", {
      scale: 1,
      fill: "#ed9702",
      opacity: 0.7,
      duration: 0.3,
    });

    gsap.to(`#chapter-${chapter.id}`, {
      scale: 1.4,
      fill: "#ed9702",
      opacity: 1,
      duration: 0.3,
    });

    gsap.fromTo(
      ".chapter-info",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
    );
  };

  const resetView = () => {
    setActiveChapter(null);
    gsap.to(".chapter-point", {
      scale: 1,
      fill: "#ed9702",
      opacity: 0.7,
      duration: 0.3,
    });
  };

  const chapterPoints = chapters.map(ch => latLngToXY(ch.lat, ch.lng, width, height));

  return (
    <div className="w-full bg-gray-50 py-16 mt-24 overflow-hidden"><div className="text-center mb-16">
    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
      Welcome To Garje Marathi Global Foundation
    </h1>
    <div className="max-w-4xl mx-auto">
      <p className="text-neutral-600 uppercase tracking-wider text-sm md:text-xl mb-8 px-4">
        आपल्या स्वतःची प्रगती करत असताना, आपल्या मराठी समाजाची.आपल्या
        महाराष्ट्राची.आपल्या कर्मभूमी आणि जन्मभूमीची सेवा करण्यासाठीच गर्जे
        मराठीचे अस्तित्व आहे.
      </p>
    </div>
    <div className="h-1 w-32 md:w-64 bg-[#ed9702] mx-auto rounded"></div>
  </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Global Community</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Connecting over {" "}
            <span className="font-bold text-[#ff7700]">
              {countedMembers.toLocaleString()}
            </span>{" "}
            Marathi community members across 30 chapters worldwide.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div
            ref={mapRef}
            className="relative bg-white rounded-xl shadow-lg p-4 md:p-8 overflow-hidden"
          >
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
              <image
                href="/world-map.svg"
                width={width}
                height={height}
                preserveAspectRatio="xMidYMid meet"
              />

              {/* Arcs between chapters */}
              {chapterPoints.map((from, i) => {
                const to = chapterPoints[(i + 1) % chapterPoints.length];
                const midX = (from.x + to.x) / 2;
                const midY = (from.y + to.y) / 2 - 30;
                return (
                  <path
                    key={`arc-${i}`}
                    d={`M${from.x},${from.y} Q${midX},${midY} ${to.x},${to.y}`}
                    fill="none"
                    stroke="#ed9702"
                    strokeWidth="1.5"
                    opacity="0.4"
                  />
                );
              })}

              {/* Chapter points */}
              {chapters.map((chapter) => {
                const { x, y } = latLngToXY(chapter.lat, chapter.lng, width, height);
                return (
                  <g key={chapter.id}>
                    <circle
                      className="point-pulse"
                      cx={x}
                      cy={y}
                      r="5"
                      fill="#ff7700"
                      opacity="0.3"
                    />
                    <circle
                      id={`chapter-${chapter.id}`}
                      className="chapter-point cursor-pointer"
                      cx={x}
                      cy={y}
                      r="5"
                      fill="#ff7700"
                      opacity="0.7"
                      onClick={() => handleChapterClick(chapter)}
                    >
                      <title>{`${chapter.name}, ${chapter.country} (${chapter.members})`}</title>
                    </circle>
                  </g>
                );
              })}
            </svg>

            {activeChapter && (
              <div className="chapter-info absolute bottom-8 left-0 right-0 mx-auto max-w-md bg-white p-5 rounded-lg shadow-lg border border-gray-200">
                <button
                  onClick={resetView}
                  className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {activeChapter.name}, {activeChapter.country}
                </h3>
                <p className="text-gray-600 mb-3">
                  <span className="font-semibold text-[#ed9702]">
                    {activeChapter.members.toLocaleString()}
                  </span>{" "}
                  active members
                </p>
                <div className="flex space-x-2">
                  <button className="text-sm bg-[#ed9702] text-white px-4 py-2 rounded-full hover:bg-[#d88a00] transition-colors">
                    Chapter Details
                  </button>
                  <button className="text-sm border border-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-50 transition-colors">
                    Contact
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <span className="inline-block w-3 h-3 rounded-full bg-[#ed9702] mr-2"></span>
              <span>Chapter Location</span>
            </div>
            <div className="flex items-center">
              <span className="inline-block w-4 h-0.5 bg-[#ed9702] mr-2"></span>
              <span>Community Connection</span>
            </div>
            <div className="flex items-center">
              <span className="text-[#ed9702] font-bold mr-1">{totalMembers.toLocaleString()}+</span>
              <span>Global Members</span>
            </div>
          </div>

          <div className="mt-8 text-center">
          <Link href="https://www.garjemarathi.com/">
            <button className="bg-white hover:cursor-pointer text-gray-700 hover:text-[#ed9702] border border-gray-300 rounded-lg px-6 py-3 font-medium transition-colors">
              Join The Community
            </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
