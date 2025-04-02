"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";
import RoomModal from "./Modals/RoomModal";
import { useTranslations } from "next-intl";

interface RoomImage {
  title: string;
  description: string;
  image: string;
  size: string;
  features: string;
  images: string[];
}

export default function Conveniences() {
  const t = useTranslations('rooms');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3.5);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<RoomImage | null>(null);
  const [modalIndex, setModalIndex] = useState(0);

  const roomImages: RoomImage[] = [
    {
      title: t('roomTypes.singleUse.title'),
      description: t('roomTypes.singleUse.description'),
      image: "/rooms/room-card1.svg",
      size: t('roomTypes.singleUse.size'),
      features: t('roomTypes.singleUse.features'),
      images: ["/rooms/room-card1.svg"],
    },
    {
      title: t('roomTypes.superior.title'),
      description: t('roomTypes.superior.description'),
      image: "/rooms/Room-card2.svg",
      size: t('roomTypes.superior.size'),
      features: t('roomTypes.superior.features'),
      images: ["/rooms/Room-card2.svg"],
    },
    {
      title: t('roomTypes.deluxe.title'),
      description: t('roomTypes.deluxe.description'),
      image: "/rooms/Room-card3.svg",
      size: t('roomTypes.deluxe.size'),
      features: t('roomTypes.deluxe.features'),
      images: ["/rooms/Room-card3.svg"],
    },
    {
      title: t('roomTypes.family.title'),
      description: t('roomTypes.family.description'),
      image: "/rooms/Room-card4.svg",
      size: t('roomTypes.family.size'),
      features: t('roomTypes.family.features'),
      images: ["/rooms/Room-card4.svg"],
    },
    {
      title: t('roomTypes.family.title'),
      description: t('roomTypes.family.description'),
      image: "/rooms/Room-card5.svg",
      size: t('roomTypes.family.size'),
      features: t('roomTypes.family.features'),
      images: ["/rooms/Room-card5.svg"],
    },
    {
      title: t('roomTypes.family.title'),
      description: t('roomTypes.family.description'),
      image: "/rooms/Room-card6.svg",
      size: t('roomTypes.family.size'),
      features: t('roomTypes.family.features'),
      images: ["/rooms/Room-card6.svg"],
    },
    {
      title: t('roomTypes.family.title'),
      description: t('roomTypes.family.description'),
      image: "/rooms/Room-card7.svg",
      size: t('roomTypes.family.size'),
      features: t('roomTypes.family.features'),
      images: ["/rooms/Room-card7.svg"],
    },
  ];

  useEffect(() => {
    const updateVisibleCards = () => {
      setVisibleCards(window.innerWidth < 768 ? 1 : 3.2);
    };
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const totalSlides = Math.ceil(roomImages.length - visibleCards + 1);

  const nextSlide = () => {
    if (currentIndex < totalSlides - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true,
    touchEventOptions: { passive: false },
  });

  const openModal = (room: RoomImage, index: number) => {
    setSelectedRoom(room);
    setModalIndex(index);
    setModalOpen(true);
  };

  return (
    <section className="pb-20 px-4 md:px-8 bg-[#f8f3ef] relative text-center">
      <Image
        src="/rooms/Vector3.svg"
        alt={t('hotelViewAlt')}
        width={500}
        height={500}
        className="w-full max-h-[500px] object-cover mb-16"
      />

      <h2 className="text-[#173B40] text-center font-sorts-mill-goudy text-[40px] md:text-[60px] font-normal leading-[50px] md:leading-[70px] tracking-[2px] md:tracking-[3.6px] mb-6">
        {t('title')}
      </h2>

      <p className="text-[#10282B] text-center font-montserrat text-[16px] md:text-[20px] font-normal leading-[22px] md:leading-[24px] tracking-[0.3px] md:tracking-[0.4px] max-w-3xl mx-auto mb-10 whitespace-pre-line">
        {t('description')}
      </p>

      <button
        onClick={() => window.open("https://www.booking.com/")}
        className="bg-[#27636B] text-white text-center font-montserrat text-[16px] font-medium leading-[20px] rounded-[8px] px-6 py-3 shadow-md shadow-[rgba(19,30,69,0.10)] mb-10">
        {t('checkAvailability')}
      </button>

      <div className="hidden md:flex justify-end gap-2 pt-4">
        <button
          onClick={prevSlide}
          className={`p-2 rounded-full border border-[#173B40] transition-colors ${
            currentIndex === 0
              ? "bg-[#f8f3ef] text-[#173B40]"
              : "bg-[#173B40] text-white"
          }`}
          disabled={currentIndex === 0}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className={`p-2 rounded-full border border-[#173B40] transition-colors ${
            currentIndex >= totalSlides - 1
              ? "bg-[#f8f3ef] text-[#173B40]"
              : "bg-[#173B40] text-white"
          }`}
          disabled={currentIndex >= totalSlides - 1}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div {...handlers} className="relative w-full overflow-hidden mt-10">
        <div
          className="flex transition-transform duration-500 ease-in-out gap-0 md:gap-6"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
        >
          {roomImages.map((room, index) => (
            <motion.div
              key={index}
              className="
                cu w-full min-w-full md:w-[25%] md:min-w-[25%] p-10 
                flex flex-col items-center gap-8 rounded-[0px_24px_24px_24px] 
                bg-cover bg-center relative 
                h-[240px] md:h-[350px] lg:h-[400px] xl:h-[550px]
              "
              onClick={(e) => {
                if (e.clientY > e.currentTarget.clientHeight * 0.67) {
                  openModal(room, 0);
                }
              }}
              style={{
                backgroundImage: `url(${room.image})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-[16px] mt-4">
        {Array.from({ length: totalSlides }, (_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              currentIndex === idx ? "bg-[#732339]" : "bg-[#E3D0BF]"
            }`}
            onClick={() => setCurrentIndex(idx)}
          ></button>
        ))}
      </div>

      <RoomModal 
        room={selectedRoom} 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        currentIndex={modalIndex} 
        setCurrentIndex={setModalIndex} 
      />
    </section>
  );
}