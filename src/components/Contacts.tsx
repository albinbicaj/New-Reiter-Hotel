import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Contacts() {
  const t = useTranslations('contacts');

  return (
    <div className="relative w-full h-screen bg-[#f8f3ef] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hotel/Vector.png"
          alt={t('backgroundAlt')}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Contact Form Section */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row items-stretch bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Section */}
        <div className="w-full md:w-1/2 bg-[#732339] text-white p-10 flex flex-col justify-start">
          <h2 className="text-[50px] font-normal font-sorts-mill-goudy leading-[60px] text-white">
            {t('title')}
          </h2>
          <p className="mt-4 font-montserrat text-base font-normal leading-6 text-white">
            {t('description')}
          </p>
          <div className="flex-col items-center pt-[32px]">
            {/* Email Section */}
            <div className="flex items-center gap-2">
              <Image src="/contacts/mail.svg" alt={t('emailAlt')} width={32} height={32} />
              <p className="font-montserrat text-base font-normal leading-6 text-white">
                <a 
                  href="mailto:desk@newreiterhotel.com" 
                  className="underline"
                >
                  desk@newreiterhotel.com
                </a>
              </p>
            </div>

            {/* Phone Section */}
            <div className="flex items-center gap-2 pt-[24px]">
              <Image src="/contacts/phone.svg" alt={t('phoneAlt')} width={32} height={32} />
              <p className="font-montserrat text-base font-normal leading-6 text-white">
                <a 
                  href="tel:+390410986260" 
                  className="underline"
                >
                  +39 041 0986260
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="w-full md:w-1/2 p-10">
          <form className="flex flex-col gap-4">
            <div>
              <label className=" text-gray-700 font-medium flex items-center gap-1">
                <span className="text-red-500">*</span> {t('form.name')}
              </label>
              <input 
                type="text" 
                className="w-full border rounded-lg px-4 py-2" 
                placeholder={t('form.namePlaceholder')} 
                required 
              />
            </div>
            <div>
              <label className=" text-gray-700 font-medium flex items-center gap-1">
                <span className="text-red-500">*</span> {t('form.email')}
              </label>
              <input 
                type="email" 
                className="w-full border rounded-lg px-4 py-2" 
                placeholder={t('form.emailPlaceholder')} 
                required 
              />
            </div>
            <div>
              <label className=" text-gray-700 font-medium flex items-center gap-1">
                <span className="text-red-500">*</span> {t('form.phone')}
              </label>
              <input 
                type="tel" 
                className="w-full border rounded-lg px-4 py-2" 
                placeholder={t('form.phonePlaceholder')} 
                required 
              />
            </div>
            <div>
              <label className=" text-gray-700 font-medium flex items-center gap-1">
                <span className="text-red-500">*</span> {t('form.message')}
              </label>
              <textarea 
                className="w-full border rounded-lg px-4 py-2"  
                placeholder={t('form.messagePlaceholder')}
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-center gap-2">
              <button 
                type="submit" 
                className="flex w-[142px] h-11 px-4 py-1 justify-center items-center gap-2 rounded-lg bg-[#451522] shadow-[0px_4px_16px_0px_rgba(19,30,69,0.10)] text-[#F4EBE7] font-public-sans text-base font-medium leading-5 hover:bg-[#3a101b] transition-colors"
              >
                {t('form.submitButton')}
              </button>  
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}