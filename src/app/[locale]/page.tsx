// "use client";
import Image from "next/image";
import OurRestaurant from "@/components/OurRestaurant";
import Conveniences from "@/components/Conveniences";
import Corporate from "@/components/Corporate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Information from "@/components/Information";
import Location from "@/components/OurLocation";
import Contacts from "@/components/Contacts";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from 'next-intl/server';


export default function Home({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  const t = useTranslations('home');
  const tServices = useTranslations('services');
  const tTransport = useTranslations('transportation');

  const services = [
    { id: 1, name: tServices('freeWifi'), image: "/service-images/free-wifi.png" },
    { id: 2, name: tServices('breakfast'), image: "/service-images/breakfast.png" },
    { id: 3, name: tServices('restaurant'), image: "/service-images/restaurant.png" },
    { id: 4, name: tServices('reception24h'), image: "/service-images/hour-reception.png" },
    { id: 5, name: tServices('bar'), image: "/service-images/bar.png" },
    { id: 6, name: tServices('accessible'), image: "/service-images/people-with-disablities.png" },
    { id: 7, name: tServices('elevator'), image: "/service-images/elevator.png" },
    { id: 8, name: tServices('luggageStorage'), image: "/service-images/free-luggage.png" },
    { id: 9, name: tServices('parking'), image: "/service-images/parking.png" }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen w-full overflow-x-hidden">
        {/* Hero Section */}
        <section id="hero" className="relative h-[100vh] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hotel/Hero.jpg"
              alt="New Reiter Hotel"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="absolute bottom-[80px] z-10 text-white flex flex-col items-center">
            <div className="mb-4">
              <Image src="/hotel/stars.png" alt="Hotel Rating" width={150} height={50} />
            </div>

            <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-montserrat font-normal leading-[28px] sm:leading-[30px] md:leading-[32px] tracking-[0.48px] text-[#F1E8DF] text-center">
              {t('heroSubtitle')}
            </p>

            <p className="text-[40px] sm:text-[50px] md:text-[70px] lg:text-[80px] xl:text-[90px] 2xl:text-[100px] font-sorts-mill-goudy italic font-normal leading-[60px] sm:leading-[70px] md:leading-[90px] lg:leading-[100px] xl:leading-[110px] 2xl:leading-[120px] text-[#F1E8DF] text-center mt-4">
              {t('heroTitle')}
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="relative pt-[120px] md:pt-[160px] px-[40px] md:px-[100px] bg-[#f8f3ef]">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 justify-center relative">
            <div className="flex flex-col justify-center text-center md:text-center">
              <h2 className="text-[40px] sm:text-[45px] md:text-[50px] leading-[50px] sm:leading-[55px] md:leading-[60px] font-[400] text-[#6F5338] font-sorts-mill-goudy">
                {t('welcome')}
              </h2>

              <h2 className="text-[50px] sm:text-[60px] md:text-[70px] leading-[50px] sm:leading-[60px] md:leading-[80px] font-[400] italic text-[#6F5338] font-sorts-mill-goudy">
                {t('hotelName')}
              </h2>

              <p className="pt-[32px] text-[16px] sm:text-[18px] md:text-[20px] leading-[22px] sm:leading-[24px] font-[400] text-[#2C2117] font-montserrat tracking-[0.4px] max-w-3xl mx-auto md:mx-0 whitespace-pre-line">
                {t('description')}
              </p>
            </div>
          </div>

          <div className="mt-[60px] w-screen relative left-1/2 -translate-x-1/2">
            <Image 
              src="/hotel/Vector.png"
              alt="New Reiter Hotel"
              width={1920} 
              height={400} 
              className="w-screen max-w-none object-cover"
              priority
            />

            <div className="absolute bottom-[0px] left-1/2 -translate-x-1/2">
              <Image 
                src="/hotel/mirror-img.png"
                alt="Mirror Reflection"
                width={521} 
                height={581} 
                className="w-[250px] h-auto sm:w-[300px] md:w-[350px] lg:w-[450px] xl:w-[500px] 2xl:w-[600px] drop-shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4 md:px-8 bg-[#732339]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-[40px] sm:text-[50px] md:text-[55px] lg:text-[60px] text-[#E3D0BF] font-sorts-mill-goudy font-normal leading-[50px] sm:leading-[60px] md:leading-[65px] lg:leading-[70px] tracking-[3.6px] text-center">
              {t('servicesTitle')}
            </h2>

            <div className="mt-12 flex flex-wrap justify-center lg:hidden gap-[44px]">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="w-[140px] h-[230px] flex flex-col items-center justify-center gap-2 border-2 border-[#E3D0BF] bg-[rgba(171,123,136,0.12)] rounded-[100px] p-4"
                >
                  <Image
                    src={service.image}
                    alt={service.name}
                    width={80}
                    height={80}
                    className="object-cover rounded-full"
                  />
                  <p className="text-center text-[#E3D0BF] font-medium">{service.name}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 hidden lg:flex flex-wrap justify-center">
              <div className="w-full flex justify-center gap-6 mb-6">
                {services.slice(0, 4).map((service) => (
                  <div
                    key={service.id}
                    className="w-[140px] h-[230px] flex flex-col items-center justify-center gap-2 border-2 border-[#E3D0BF] bg-[rgba(171,123,136,0.12)] rounded-[100px] p-4"
                  >
                    <Image
                      src={service.image}
                      alt={service.name}
                      width={80}
                      height={80}
                      className="object-cover rounded-full"
                    />
                    <p className="text-center text-[#E3D0BF] font-medium">{service.name}</p>
                  </div>
                ))}
              </div>

              <div className="w-full flex justify-center gap-6">
                {services.slice(4, 9).map((service) => (
                  <div
                    key={service.id}
                    className="w-[140px] h-[230px] flex flex-col items-center justify-center gap-2 border-2 border-[#E3D0BF] bg-[rgba(171,123,136,0.12)] rounded-[100px] p-4"
                  >
                    <Image
                      src={service.image}
                      alt={service.name}
                      width={80}
                      height={80}
                      className="object-cover rounded-full"
                    />
                    <p className="text-center text-[#E3D0BF] font-medium">{service.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Other Sections */}
        <section id="rooms">
          <Conveniences />
        </section>

        <section id="our-restaurant">
          <OurRestaurant />
        </section>

        <section id="information">
          <Information />
        </section>

        <section id="corporate">
          <Corporate />
        </section>

        <section id="our-location">
          <Location />
        </section>

        {/* Transportation Section */}
        <section id="how-to-arrive" className="py-12 md:py-20 px-4 md:px-8 bg-teal-900 text-[#A9C1C4]">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-5xl font-normal leading-normal md:leading-extra-loose tracking-wide text-center mb-8 md:mb-[40px] font-sorts-mill-goudy">
              {tTransport('howToArrive')}
            </h2>
            <div className="flex flex-col md:flex-row justify-around items-stretch">
              <div className="flex-1 p-6 md:p-8 text-center md:text-left mb-8 md:mb-0">
                <Image 
                  src="/how-to-arrive/car.svg" 
                  alt={tTransport('byCar')}  
                  width={80} 
                  height={80} 
                  className="mx-auto md:mr-auto mb-4" 
                />
                <div className="flex flex-col gap-4 md:gap-[24px]">
                  <h3 className="text-[#D4E0E1] font-sorts-mill-goudy text-2xl md:text-[30px] font-normal leading-8 md:leading-[44px]">
                    {tTransport('byCar')}
                  </h3>
                  <p className="text-white font-montserrat text-base md:text-[18px] font-normal leading-6 md:leading-[24px] tracking-[0.36px]">
                    {tTransport('byCarDescription')}
                  </p>
                </div>
              </div>
              
              <div className="flex-1 p-6 md:py-4 md:pr-[40px] md:pl-[50px] md:p-8 text-center md:text-left mb-8 md:mb-0 md:border-l-[0.5px] border-[#8C9889] border-solid">
                <Image 
                  src="/how-to-arrive/train.svg" 
                  alt={tTransport('byTrain')}  
                  width={80} 
                  height={80} 
                  className="mx-auto md:mr-auto mb-4" 
                />
                <div className="flex flex-col gap-4 md:gap-[24px]">
                  <h3 className="text-[#D4E0E1] font-sorts-mill-goudy text-2xl md:text-[30px] font-normal leading-8 md:leading-[44px]">
                    {tTransport('byTrain')}
                  </h3>
                  <p className="text-white font-montserrat text-base md:text-[18px] font-normal leading-6 md:leading-[24px] tracking-[0.36px]">
                    {tTransport('byTrainDescription')}
                  </p>
                </div>
              </div>
              
              <div className="flex-1 p-6 md:p-8 text-center md:text-left md:border-l-[0.5px] border-[#8C9889] border-solid">
                <Image 
                  src="/how-to-arrive/airplane.svg" 
                  alt={tTransport('fromAirport')}  
                  width={80} 
                  height={80} 
                  className="mx-auto md:mr-auto sm:mx-auto mb-4" 
                />
                <div className="flex flex-col gap-4 md:gap-[24px]">
                  <h3 className="text-[#D4E0E1] font-sorts-mill-goudy text-2xl md:text-[30px] font-normal leading-8 md:leading-[44px]">
                    {tTransport('fromAirport')}
                  </h3>
                  <p className="text-white font-montserrat text-base md:text-[18px] font-normal leading-6 md:leading-[24px] tracking-[0.36px]">
                    <span className="underline font-bold">{tTransport('waterTaxi')}:</span> {tTransport('waterTaxiDescription')}
                  </p>
                  <p className="text-white font-montserrat text-base md:text-[18px] font-normal leading-6 md:leading-[24px] tracking-[0.36px]">
                    <span className="underline font-bold">{tTransport('alilaguna')}:</span> {tTransport('alilagunaDescription')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contacts">
          <Contacts />
        </section>

        <Footer />
      </main>
    </>
  );
}