import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#ed9702] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Logo */}
          <div>
            <Image
              src="/images/logo2.png"
              alt="Garje Marathi Global Logo"
              width={200}
              height={100}
              className="mb-6"
            />
            <p className="text-white text-opacity-80 mb-4">
              Empowering the Marathi community globally through connection, support, and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Initiatives', href: '/initiatives' },
                { name: 'About Us', href: '/about' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-white text-opacity-80 hover:text-opacity-100 transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Initiatives */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Our Initiatives</h4>
            <ul className="space-y-3">
              {[
                'Campus to Corporate',
                'Chamber of Commerce',
                'Maha Marketplace',
                'Mentor Connect'
              ].map((initiative) => (
                <li key={initiative}>
                  <Link 
                    href="#" 
                    className="text-white text-opacity-80 hover:text-opacity-100 transition-all"
                  >
                    {initiative}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-white text-opacity-80">
                  Email: info@garjemarathi.org
                </span>
              </li>
              <li>
                <span className="text-white text-opacity-80">
                  Phone: +1 (123) 456-7890
                </span>
              </li>
              <li>
                <span className="text-white text-opacity-80">
                  Address: California, USA & Maharashtra, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white border-opacity-20 text-center">
          <p className="text-white text-opacity-80">
            © {new Date().getFullYear()} Garje Marathi Global. All Rights Reserved.
          </p>
          <div className="mt-4 space-x-4">
            {[
              { name: 'Privacy Policy', href: '/privacy' },
              { name: 'Terms of Service', href: '/terms' }
            ].map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="text-white text-opacity-80 hover:text-opacity-100 transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;