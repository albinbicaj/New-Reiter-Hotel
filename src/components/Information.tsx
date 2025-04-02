import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Information() {
  const t = useTranslations('information');

  const items = [
    { icon: "/information/check-in.svg", text: t('checkIn') },
    { icon: "/information/check-out.svg", text: t('checkOut') },
    { icon: "/information/clock.svg", text: t('earlyLateCheckIn') },
    { icon: "/information/paw-off.svg", text: t('noPets') },
    { icon: "/information/coffe.svg", text: t('breakfastHours') },
    { icon: "/information/soup.svg", text: t('restaurantHours') },
    { icon: "/information/glass-full.svg", text: t('freeWifi') },
  ];

  return (
    <section id="information" className="py-20 px-4 md:px-8 bg-white">
      {/* Header Section */}
      <div className="relative flex flex-col items-center mt-[-165px]">
        <Image 
          src="/ourRestaurant/card.svg" 
          alt={t('locationImageAlt')} 
          className="w-[560px] h-[162px]" 
          width={560} 
          height={162} 
        />
        <Image 
          src="/Information/Header-image.svg" 
          alt={t('headerImageAlt')} 
          className="w-[560px] h-[162px] mt-[-25px] hidden lg:block" 
          width={560} 
          height={162} 
        />
        <h2 className="text-[#6F5338] font-sorts-mill-goudy text-[32px] leading-[40px] tracking-[1.8px]
           sm:text-[40px] sm:leading-[50px] sm:tracking-[2.2px]
           md:text-[50px] md:leading-[60px] md:tracking-[3px]
           lg:text-[60px] lg:leading-[70px] lg:tracking-[3.6px]
           pt-0 sm:pt-0 md:pt-0 lg:pt-[80px] pb-[32px]">
           {t('title')}
        </h2>
      </div>

      {/* Small & Medium Screens - Wrap with Alternating Order */}
      <div className="lg:hidden flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center w-[160px] md:w-[180px] gap-4 rounded-[150px] shadow-md">
            {index % 2 === 0 ? (
              <>
                {/* Image on Top */}
                <div className="flex justify-center items-end h-[178px] px-[10px] pb-[40px] w-full bg-[#B98A5E] rounded-t-[150px]">
                  <Image src={item.icon} alt={t('iconAlt')} width={64} height={64} />
                </div>
                {/* Text on Bottom */}
                <div className="flex justify-center items-center h-[178px] px-[24px] pb-[24px] w-full border border-[#D5B99E] rounded-b-[150px] bg-white">
                  <p className="text-center text-[#6F5338] font-montserrat text-[22px] font-medium leading-[30px]">
                    {item.text}
                  </p>
                </div>
              </>
            ) : (
              <>
                {/* Text on Top */}
                <div className="flex justify-center items-center h-[178px] px-[24px] pb-[24px] w-full border border-[#D5B99E] rounded-t-[150px] bg-white">
                  <p className="text-center text-[#6F5338] font-montserrat text-[22px] font-medium leading-[30px]">
                    {item.text}
                  </p>
                </div>
                {/* Image on Bottom */}
                <div className="flex justify-center items-end h-[178px] px-[10px] pb-[40px] w-full bg-[#B98A5E] rounded-b-[150px]">
                  <Image src={item.icon} alt={t('iconAlt')} width={64} height={64} />
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Large Screens - First Row (Normal Order) */}
      <div className="hidden lg:grid lg:grid-cols-4 lg:gap-6 max-w-5xl mx-auto">
        {items.slice(0, 4).map((item, index) => (
          <div key={index} className="flex flex-col items-center w-[160px] md:w-[180px] gap-4 rounded-[150px] shadow-md">
            {/* Image on Top */}
            <div className="flex justify-center items-end h-[178px] px-[10px] pb-[40px] w-full bg-[#B98A5E] rounded-t-[150px]">
              <Image src={item.icon} alt={t('iconAlt')} width={64} height={64} />
            </div>
            {/* Text on Bottom */}
            <div className="flex justify-center items-center h-[178px] px-[24px] pb-[24px] w-full border border-[#D5B99E] rounded-b-[150px] bg-white">
              <p className="text-center text-[#6F5338] font-montserrat text-[22px] font-medium leading-[30px]">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Large Screens - Second Row (Vice Versa Order & Centered) */}
      <div className="hidden lg:flex lg:justify-center lg:mt-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-3 gap-6 w-[73%]">
          {items.slice(4, 7).map((item, index) => (
            <div key={index} className="flex flex-col items-center w-[160px] md:w-[180px] gap-4 rounded-[150px] shadow-md">
              {/* Text on Top */}
              <div className="flex justify-center items-center h-[178px] px-[24px] pt-[40px] w-full border border-[#D5B99E] rounded-t-[150px] bg-white">
                <p className="text-center text-[#6F5338] font-montserrat text-[22px] font-medium leading-[30px]">
                  {item.text}
                </p>
              </div>
              {/* Image on Bottom */}
              <div className="flex justify-center items-end h-[178px] px-[10px] pb-[70px] w-full bg-[#B98A5E] rounded-b-[150px]">
                <Image src={item.icon} alt={t('iconAlt')} width={64} height={64} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}