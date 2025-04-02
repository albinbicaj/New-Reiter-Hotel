'use client'

import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

function OurRestaurant() {
  const t = useTranslations('ourRestaurant')

  return (
    <section
      id="our-restaurant"
      className="py-10 px-4 md:px-8 bg-gray-50 relative bg-cover bg-center"
      style={{ backgroundImage: 'url("ourRestaurant/background-image.svg")' }} 
    >
      {/* Positioned Image */}
      <div className="mt-[-75px] flex justify-center">
        <Image
          src="/rooms/star-icon.svg" 
          alt={t('locationImageAlt')}
          className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px]"
          width={70}
          height={70}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 pb-[100px]">
        {/* Main Title */}
        <h2 className="mt-[20px] text-center font-semibold font-sorts-mill-goudy text-[24px] sm:text-[28px] md:text-[32px] lg:text-[50px] leading-[40px] sm:leading-[50px] md:leading-[60px] text-[#F1E8DF]">
          {t('title')}
        </h2>

        {/* Subtitle with the specified styles */}
        <p className="text-center text-[40px] sm:text-[50px] md:text-[60px] italic font-sorts-mill-goudy text-[#F1E8DF] leading-[60px] sm:leading-[70px] md:leading-[80px] tracking-[4.2px]">
          {t('restaurantName')}
        </p>

        {/* Description Text */}
        <p className="text-center text-[16px] sm:text-[18px] md:text-[20px] font-montserrat text-[#FFF] leading-[20px] sm:leading-[22px] md:leading-[24px] tracking-[0.4px] mt-4 sm:mt-6 md:mt-8">
          {t('description')}
        </p>

        {/* First Image Below the Description */}
        <div className="mt-6 sm:mt-8 md:mt-10 flex justify-center">
          <Image
            src="/ourRestaurant/badge.svg" 
            alt={t('badgeAlt')}
            className="w-[300px] sm:w-[350px] md:w-[386px] h-[35px] sm:h-[40px] md:h-[45px] rounded-lg"
            width={386}
            height={40}
          />
        </div>

        {/* Second Image Below the First Image */}
        <div className="mt-6 sm:mt-8 md:mt-10 flex justify-center">
          <Image
            src="/ourRestaurant/Union.svg" 
            alt={t('interiorImageAlt')}
            className="w-full max-w-[600px] sm:max-w-[700px] md:max-w-[800px] rounded-lg"
            width={800}
            height={500}
          />
        </div>
      </div>
    </section>
  )
}

export default OurRestaurant