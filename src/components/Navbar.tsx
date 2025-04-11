"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ChevronDown } from "lucide-react";
import { navlinks } from "@/constants";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const submenuRefs = useRef<(HTMLDivElement | null)[]>([]);
  const navbarRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  
  // Initialize GSAP animations
  useEffect(() => {
    // Initial animation for navbar elements
    if (navbarRef.current && linksRef.current) {
      gsap.fromTo(
        navbarRef.current,
        { y: -100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          ease: "power3.out" 
        }
      );
      
      // Stagger animation for each nav link
      gsap.fromTo(
        linksRef.current.children,
        { y: -20, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.1, 
          duration: 0.5, 
          delay: 0.5,
          ease: "power2.out" 
        }
      );
    }
  }, []);

  // Handle scroll effect for transparent to solid background transition
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 20) {
        if (!isScrolled) {
          setIsScrolled(true);
          if (navbarRef.current) {
            gsap.to(navbarRef.current, {
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
              duration: 0.3,
              ease: "power2.out"
            });
          }
        }
      } else {
        if (isScrolled) {
          setIsScrolled(false);
          if (navbarRef.current) {
            gsap.to(navbarRef.current, {
              backgroundColor: "transparent",
              boxShadow: "none",
              duration: 0.3,
              ease: "power2.out"
            });
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveSubmenu(null);
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
    // Animate mobile menu
    if (!isMenuOpen) {
      // Opening animation
      gsap.fromTo(
        ".mobile-menu-content",
        { 
          x: "100%",
          opacity: 0.5
        },
        { 
          x: "0%", 
          opacity: 1,
          duration: 0.5, 
          ease: "power3.out" 
        }
      );
      
      gsap.fromTo(
        ".mobile-menu-overlay",
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      );
    } else {
      // Closing animation
      gsap.to(
        ".mobile-menu-content",
        { 
          x: "100%", 
          opacity: 0.5,
          duration: 0.5, 
          ease: "power3.in" 
        }
      );
      
      gsap.to(
        ".mobile-menu-overlay",
        { opacity: 0, duration: 0.3 }
      );
    }
  };

  const toggleSubmenu = (index: number) => {
    const submenuContainer = submenuRefs.current[index];

    if (submenuContainer) {
      if (activeSubmenu === index) {
        // Close submenu with GSAP
        gsap.to(submenuContainer, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut",
          onComplete: () => setActiveSubmenu(null),
        });
      } else {
        // Open submenu with GSAP
        gsap.set(submenuContainer, { height: "auto" });
        const height = submenuContainer.offsetHeight;
        gsap.set(submenuContainer, { height: 0, opacity: 0 });
        gsap.to(submenuContainer, {
          height: height,
          opacity: 1,
          duration: 0.3,
          ease: "power2.inOut",
        });
        setActiveSubmenu(index);
      }
    }
  };

  // Hover animation for desktop menu items
  const handleMenuItemHover = (e: React.MouseEvent, isEnter: boolean) => {
    if (isEnter) {
      gsap.to(e.currentTarget, {
        scale: 1.05,
        duration: 0.2,
        ease: "power1.out"
      });
    } else {
      gsap.to(e.currentTarget, {
        scale: 1,
        duration: 0.2,
        ease: "power1.out"
      });
    }
  };

  return (
    <header 
      ref={navbarRef}
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm ${
        isScrolled ? "bg-white/90 shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex-shrink-0 relative overflow-hidden">
            <Image
              src="/images/logo.png"
              alt="garje marathi logo"
              width={150}
              height={50}
              objectFit="cover"
              priority={true}
              className={`transition-all duration-300 ${isScrolled ? "brightness-100" : "brightness-110"}`}
            />
          </Link>

          <button
            onClick={toggleMenu}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-full text-gray-700 hover:text-gray-900 hover:bg-gray-100/50 focus:outline-none transition-all"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <div className="relative w-6 h-6 z-30">
              <span
                className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                  isMenuOpen ? "rotate-45 translate-y-2" : "-translate-y-1"
                }`}
              />
              <span
                className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                  isMenuOpen ? "-rotate-45 translate-y-2" : "translate-y-3"
                }`}
              />
            </div>
          </button>

          <div 
            ref={linksRef}
            className="hidden lg:flex lg:items-center lg:space-x-1"
          >
            {navlinks.map((link, index) => (
              <div key={index} className="relative group">
                {link.sublinks ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleSubmenu(index)}
                      onMouseEnter={(e) => handleMenuItemHover(e, true)}
                      onMouseLeave={(e) => handleMenuItemHover(e, false)}
                      className="flex items-center space-x-1 px-4 py-2 font-medium text-gray-700 hover:text-[#ed9702] transition-colors rounded-full hover:bg-white/50"
                    >
                      <span>{link.text}</span>
                      <ChevronDown className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-200" />
                    </button>
                    <div className="absolute top-full left-0 w-64 bg-white/95 backdrop-blur-sm shadow-lg rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 transform -translate-y-2 group-hover:translate-y-0">
                      {link.sublinks.map((sublink, subIndex) => (
                        <Link
                          key={subIndex}
                          href={sublink.href}
                          onMouseEnter={(e) => {
                            gsap.to(e.currentTarget, {
                              backgroundColor: "rgba(243, 244, 246, 0.7)",
                              color: "#ed9702",
                              paddingLeft: "24px",
                              duration: 0.2
                            });
                          }}
                          onMouseLeave={(e) => {
                            gsap.to(e.currentTarget, {
                              backgroundColor: "transparent",
                              color: "#374151",
                              paddingLeft: "20px",
                              duration: 0.2
                            });
                          }}
                          className="block px-5 py-2 text-base text-gray-700 hover:bg-gray-50 hover:text-[#ed9702] first:rounded-t-lg last:rounded-b-lg transition-all"
                        >
                          {sublink.text}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    onMouseEnter={(e) => handleMenuItemHover(e, true)}
                    onMouseLeave={(e) => handleMenuItemHover(e, false)}
                    className={`px-4 py-2 font-medium rounded-full transition-all ${
                      pathname === link.href
                        ? "text-[#ed9702] bg-white/50"
                        : "text-gray-700 hover:text-[#ed9702] hover:bg-white/50"
                    }`}
                  >
                    {link.text}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden fixed inset-0 z-50 pointer-events-${isMenuOpen ? "auto" : "none"}`}
        >
          {/* Mobile menu background */}
          <div
            className="mobile-menu-overlay absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"
            style={{ opacity: 0 }}
            onClick={() => toggleMenu()}
          />

          {/* Mobile menu content */}
          <div className="mobile-menu-content absolute right-0 h-full flex flex-col items-start justify-between w-3/4 max-w-sm bg-white shadow-xl overflow-y-auto rounded-l-xl transform translate-x-full">
            {/* Top Section */}
            <div className="pt-6 w-full">
              {/* Close Button */}
              <div className="flex justify-end px-6">
                <button
                  onClick={() => toggleMenu()}
                  className="text-gray-500 hover:text-gray-900 focus:outline-none p-2 rounded-full hover:bg-gray-100 transition-all"
                >
                  <span className="sr-only">Close menu</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <div className="mt-6">
                {navlinks.map((link, index) => (
                  <div key={index}>
                    {link.sublinks ? (
                      <div>
                        <button
                          onClick={() => toggleSubmenu(index)}
                          className="w-full flex items-center justify-between px-6 py-3 text-lg font-medium text-gray-700 hover:bg-gray-50 transition-all"
                        >
                          <span>{link.text}</span>
                          <ChevronDown
                            className={`w-5 h-5 transform transition-transform duration-300 ${
                              activeSubmenu === index ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <div
                          ref={(el) => {
                            submenuRefs.current[index] = el;
                          }}
                          className="overflow-hidden w-auto"
                          style={{ height: 0, opacity: 0 }}
                        >
                          <div className="py-1 bg-gray-50">
                            {link.sublinks.map((sublink, subIndex) => (
                              <Link
                                key={subIndex}
                                href={sublink.href}
                                onClick={() => toggleMenu()}
                                className={`block px-10 py-3 text-base ${
                                  pathname === sublink.href
                                    ? "text-[#ed9702] bg-gray-100"
                                    : "text-gray-600 hover:bg-gray-100 hover:text-[#ed9702]"
                                } transition-all`}
                              >
                                {sublink.text}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => toggleMenu()}
                        className={`block px-6 py-3 text-lg font-medium ${
                          pathname === link.href
                            ? "text-[#ed9702] bg-gray-50"
                            : "text-gray-700 hover:bg-gray-50 hover:text-[#ed9702]"
                        } transition-all`}
                      >
                        {link.text}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Section */}
            <div className="w-full p-6 border-t border-gray-200">
              <div className="flex justify-center space-x-6 my-4">
                <a href="#" className="text-gray-500 hover:text-[#ed9702] transition-colors transform hover:scale-110 duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-[#ed9702] transition-colors transform hover:scale-110 duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-[#ed9702] transition-colors transform hover:scale-110 duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
              <p className="text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} ThinkDesign.Build. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;