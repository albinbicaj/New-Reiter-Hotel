'use client'

import Image from 'next/image'
import React from 'react'
import { useTranslations } from 'next-intl'

function OurLocation() {
  const t = useTranslations('location')

  return (
    <section
      id="our-location"
      className="py-[150px] px-4 md:px-8 bg-gray-50 relative bg-cover bg-center"
      style={{ backgroundImage: 'url("/our-location/Section.svg")', backgroundSize:"100%,100%" }} 
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-[80px] items-center">
          {/* Left - Map */}
          <div className="aspect-square w-full rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.6711322931237!2d12.3726758!3d45.4159709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477eafae13c1b9f1%3A0x647ead728e9a2694!2sHotel%20new%20Reiter!5e0!3m2!1sen!2s!4v1742894453790!5m2!1sen!2s"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="transition-all duration-300 w-full sm:w-[540px] sm:h-[553px] h-full"
              title={t('mapTitle')}
            />
          </div>

          {/* Right - Text Section */}
          <div className="space-y-6 text-[#451522]">
            {/* Title */}
            <h1 className="text-[60px] font-[400] leading-[70px] tracking-[3.6px] font-sorts-mill-goudy">
              {t('title')}
            </h1>

            {/* Address */}
            <div className="flex items-center gap-2 text-[20px] italic font-medium leading-[32px] underline decoration-solid text-[#451522] font-montserrat">
              <Image alt={t('locationIconAlt')} src="/our-location/Location-image.svg" width={32} height={32} />
              <span>{t('address')}</span>
            </div>

            {/* Description */}
            <p className="text-[20px] text-[#2C2117] font-montserrat font-normal leading-[24px] tracking-[0.4px]">
              {t('description')}
            </p>

            {/* Distance Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-4 bg-[#73233914] px-[18px] py-[16px] rounded-lg font-montserrat">
                <Image alt={t('waterbusIconAlt')} src="/our-location/ship.svg" width={32} height={32} />
                <span>{t('waterbusDistance')}</span>
              </div>
              <div className="flex items-center gap-4 bg-[#73233914] px-[18px] py-[16px] rounded-lg font-montserrat">
                <Image alt={t('walkingIconAlt')} src="/our-location/walk.svg" width={32} height={32} />
                <span>{t('beachDistance')}</span>
              </div>
              <div className="flex items-center gap-4 bg-[#73233914] px-[18px] py-[16px] rounded-lg font-montserrat">
                <Image alt={t('walkingIconAlt')} src="/our-location/walk.svg" width={32} height={32} />
                <span>{t('filmFestivalDistance')}</span>
              </div>
              <div className="flex items-center gap-4 bg-[#73233914] px-[18px] py-[16px] rounded-lg font-montserrat">
                <Image alt={t('carIconAlt')} src="/our-location/car.svg" width={32} height={32} />
                <span>{t('golfClubDistance')}</span>
              </div>
              <div className="flex items-center gap-4 bg-[#73233914] px-[18px] py-[16px] rounded-lg font-montserrat">
                <Image alt={t('shopIconAlt')} src="/our-location/shop.svg" width={32} height={32} />
                <span>{t('shoppingDescription')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurLocation