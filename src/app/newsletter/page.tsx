"use client";

import { useState } from 'react';
import Image from 'next/image';
import { newsletters } from '@/constants';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
interface Newsletter {
  id: string;
  title: string;
  date: string;
  thumbnail: string;
  pdfUrl: string;
  description: string;
}

// Sample data - replace with your actual newsletter data


export default function NewsletterPage() {
  const [selectedNewsletter, setSelectedNewsletter] = useState<Newsletter | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openNewsletter = (newsletter: Newsletter) => {
    setSelectedNewsletter(newsletter);
    setIsModalOpen(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Re-enable body scrolling
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <div className="bg-orange-500 py-16 px-4 sm:px-6 lg:px-8 text-white mt-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Our Newsletters</h1>
          <p className="text-xl max-w-3xl">
            Stay updated with our latest news, events, and initiatives through our regular newsletters.
          </p>
        </div>
      </div>

      {/* Newsletter Grid */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsletters.map((newsletter) => (
            <div 
              key={newsletter.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => openNewsletter(newsletter)}
            >
              <div className="relative h-48 w-full bg-gray-200">
                {/* Replace with actual thumbnails */}
                <div className="absolute inset-0 flex items-center justify-center bg-orange-100 text-orange-500">
                  <p className="text-lg font-medium">
                    {newsletter.title}
                  </p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{newsletter.title}</h3>
                <p className="text-sm text-orange-500 mb-2">{newsletter.date}</p>
                <p className="text-gray-600">{newsletter.description}</p>
                <button 
                  className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors"
                >
                  Read Newsletter
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Modal */}
      {isModalOpen && selectedNewsletter && (
        <div className="fixed inset-0 bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold text-gray-900">{selectedNewsletter.title}</h2>
              <button 
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-grow overflow-auto p-0">
              <iframe 
                src={selectedNewsletter.pdfUrl} 
                className="w-full h-full min-h-[90vh]" 
                title={selectedNewsletter.title}
              />
            </div>
            <div className="p-4 border-t flex justify-end">
              <a 
                href={selectedNewsletter.pdfUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}