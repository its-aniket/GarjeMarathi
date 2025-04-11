"use client";

import { useEffect, useState } from "react";
import { Worker, Viewer, SpecialZoomLevel } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface FlipbookProps {
  file: string;
}

const FlipBook: React.FC<FlipbookProps> = ({ file }) => {
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [direction, setDirection] = useState<"left" | "right">("right");

  // Create the default layout plugin
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: () => [], // Hide sidebar
  });

  useEffect(() => {
    // Add keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrev();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentPage, totalPages]);

  const goToPrev = () => {
    if (currentPage > 1) {
      setDirection("left");
      setCurrentPage((prev) => prev - 1);
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      setDirection("right");
      setCurrentPage((prev) => prev + 1);
    }
  };

  // Simple page flip animation variants
  const pageVariants = {
    initial: (direction: string) => ({
      opacity: 0,
      x: direction === "right" ? 300 : -300,
    }),
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (direction: string) => ({
      opacity: 0,
      x: direction === "right" ? -300 : 300,
      transition: {
        opacity: { duration: 0.2 },
      },
    }),
  };

  return (
    <div className="w-full h-full flex flex-col">
      {/* Navigation controls */}
      <div className="w-full flex justify-between items-center mb-4 px-2">
        <button
          onClick={goToPrev}
          disabled={currentPage === 1}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-white bg-orange-500 hover:bg-orange-600 transition ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <ChevronLeft size={18} />
          <span>Prev</span>
        </button>

        <span className="text-sm font-medium bg-gray-100 px-3 py-1 rounded">
          Page {currentPage} of {totalPages || "?"}
        </span>

        <button
          onClick={goToNext}
          disabled={currentPage === totalPages}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-white bg-orange-500 hover:bg-orange-600 transition ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <span>Next</span>
          <ChevronRight size={18} />
        </button>
      </div>

      {/* PDF viewer with page flip animation */}
      <div className="w-full flex-1 overflow-hidden bg-white rounded-lg shadow-lg border">
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.div
            key={currentPage}
            custom={direction}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full h-full"
          >
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js">
              <Viewer
                key={currentPage}
                fileUrl={file}
                defaultScale={SpecialZoomLevel.PageFit}
                initialPage={currentPage - 1}
                
                onDocumentLoad={(e) => setTotalPages(e.doc.numPages)}
                plugins={[defaultLayoutPluginInstance]}
              />
            </Worker>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FlipBook;
