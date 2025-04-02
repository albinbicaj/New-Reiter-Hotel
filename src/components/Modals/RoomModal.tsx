"use client";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";

interface RoomModalProps {
  room: {
    title: string;
    size: string;
    description: string;
    images: string[];
  } | null;
  isOpen: boolean;
  onClose: () => void;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

export default function RoomModal({
  room,
  isOpen,
  onClose,
  currentIndex,
  setCurrentIndex,
}: RoomModalProps) {
  if (!isOpen || !room) return null;

  const nextSlide = () => {
    if (currentIndex < room.images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[40%] 
                   max-h-[90vh] overflow-y-auto flex flex-col pt-[40px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-[#173B40] hover:text-gray-800 sm:top-3 sm:right-3"
          onClick={onClose}
        >
          <X size={26} />
        </button>

        {/* Modal Header */}
        <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] 
                       leading-[32px] sm:leading-[38px] md:leading-[44px] lg:leading-[48px] xl:leading-[50px] 
                       font-[400] italic text-center text-[#173B40] font-sorts-mill-goudy">
          {room.title}
        </h2>
        <p className="text-[14px] sm:text-[16px] md:text-[18px] 
                      leading-[20px] sm:leading-[22px] md:leading-[24px] 
                      font-semibold text-center text-[#263223] tracking-[0.36px] font-montserrat">
          {room.size}
        </p>

        <p className="text-[14px] sm:text-[16px] 
                      leading-[22px] sm:leading-[24px] 
                      font-normal text-center text-[#10282B] font-montserrat mt-2">
          {room.description}
        </p>

        {/* Carousel */}
        <div className="relative flex items-center justify-center mt-6">
          {/* Prev Button */}
          {currentIndex > 0 && (
            <button
              onClick={prevSlide}
              className="absolute left-4 sm:left-6 md:left-8 p-2 border border-[#173B40] 
                         bg-white text-[#173B40] rounded-full shadow-md hover:bg-[#173B40] hover:text-white 
                         transition-all"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* Image Container */}
          <motion.div className="relative flex-shrink-0 w-full max-w-[500px]">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={room.images[currentIndex]}
                alt={room.title}
                fill
                className="rounded-lg object-contain"
              />
            </div>
          </motion.div>

          {/* Next Button */}
          {currentIndex < room.images.length - 1 && (
            <button
              onClick={nextSlide}
              className="absolute right-4 sm:right-6 md:right-8 p-2 border border-[#173B40] 
                         bg-white text-[#173B40] rounded-full shadow-md hover:bg-[#173B40] hover:text-white 
                         transition-all"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {room.images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === idx ? "bg-[#732339]" : "bg-[#E3D0BF]"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
