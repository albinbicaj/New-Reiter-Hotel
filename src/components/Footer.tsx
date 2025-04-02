'use client';

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Footer() {
    const t = useTranslations('footer');

    return (
        <footer className="bg-[#451522] text-[#F4EBE7] py-10">
            <div className="max-w-6xl mx-auto px-6 py-[100px] flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10 lg:gap-0">
                
                {/* Opening Hours */}
                <div className="w-full lg:w-1/3 px-[30px] lg:px-[60px] flex flex-col gap-4 text-center lg:text-left">
                    <h3 className="font-sorts-mill-goudy text-[26px] font-normal leading-8 tracking-[1.56px] text-white">
                        {t('openingHours.title')}
                    </h3>
                    <p className="font-montserrat text-base font-medium leading-6 text-white">
                        <span className="text-[#E3D0BF]">{t('openingHours.checkIn')}:</span> {t('openingHours.checkInTime')}
                    </p>
                    <p className="font-montserrat text-base font-medium leading-6 text-white">
                        <span className="text-[#E3D0BF]">{t('openingHours.checkOut')}:</span> {t('openingHours.checkOutTime')}
                    </p>
                    <p className="font-montserrat text-base font-medium leading-6 text-white">
                        <span className="text-[#E3D0BF]">{t('openingHours.breakfast')}:</span> {t('openingHours.breakfastTime')}
                    </p>
                    <p className="font-montserrat text-base font-medium leading-6 text-white">
                        <span className="text-[#E3D0BF]">{t('openingHours.restaurant')}:</span> {t('openingHours.restaurantTime')}
                    </p>
                    <p className="font-montserrat text-base font-medium leading-6 text-white">
                        <span className="text-[#E3D0BF]">{t('openingHours.bar')}:</span> {t('openingHours.barTime')}
                    </p>
                </div>

                {/* Divider - Only visible on large screens */}
                <div className="hidden lg:flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2" height="280" viewBox="0 0 2 280" fill="none">
                        <path d="M1 0V280" stroke="#732339"/>
                    </svg>
                </div>

                {/* Hotel Info */}
                <div className="w-full lg:w-1/3 px-[30px] lg:px-[60px] text-center">
                    <h2 className="text-white font-raleway text-[35.75px] font-light leading-[38.5px] tracking-[2.145px]">
                        {t('hotelInfo.title')}
                    </h2>
                    <p className="mt-2 max-w-sm mx-auto text-white font-montserrat text-base font-medium leading-6">
                        {t('hotelInfo.description')}
                    </p>
                    {/* Social Icons */}
                    <div className="flex justify-center gap-4 mt-[32px]">
                        <a href="#" className="text-white hover:text-gray-300">
                            <Image src="/footer/facebook.svg" alt={t('socialIcons.facebookAlt')} width={44} height={44} />
                        </a>
                        <a href="#" className="text-white hover:text-gray-300">
                            <Image src="/footer/instagram.svg" alt={t('socialIcons.instagramAlt')} width={44} height={44} />
                        </a>
                    </div>
                </div>

                {/* Divider - Only visible on large screens */}
                <div className="hidden lg:flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2" height="280" viewBox="0 0 2 280" fill="none">
                        <path d="M1 0V280" stroke="#732339"/>
                    </svg>
                </div>

                {/* Contact Info */}
                <div className="w-full lg:w-1/3 px-[30px] lg:px-[60px] flex flex-col gap-[24px] text-center lg:text-left">
                    <h3 className="text-white font-sorts-mill-goudy text-[26px] font-normal leading-8 tracking-[1.56px]">
                        {t('contactInfo.title')}
                    </h3>
                    <p className="font-montserrat text-base font-medium leading-6 text-white">
                        <span className="text-[#E3D0BF]">{t('contactInfo.address')}:</span> <a href="#" className="underline">{t('contactInfo.addressValue')}</a>
                    </p>
                    <p className="font-montserrat text-base font-medium leading-6 text-white">
                        <span className="text-[#E3D0BF]">{t('contactInfo.email')}:</span> <a href="mailto:desk@newreiterhotel.com" className="underline">desk@newreiterhotel.com</a>
                    </p>
                    <p className="font-montserrat text-base font-medium leading-6 text-white">
                        <span className="text-[#E3D0BF]">{t('contactInfo.phone')}:</span> <a href="tel:+390410986260" className="underline">(+39) 041 0986260</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}