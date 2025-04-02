import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Corporate() {
    const t = useTranslations('corporate');

    return (
        <section
            id="corporate"
            className="relative bg-gray-50 bg-cover bg-center pb-[80px] !pl-[100px] !pr-[100px] md:px-8
        sm:min-h-screen md:min-h-[60vh] lg:min-h-[60vh] xl:min-h-[60vh]"
            style={{
                backgroundImage: 'url("corporate/Footer-corporate.svg")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center bottom',
            }}
        >
            <div className="flex justify-center mb-16">
                <Image
                    src="/corporate/header-image.svg"
                    alt={t('headerImageAlt')}
                    width={248}
                    height={98}
                    className="w-[248px] max-h-[98px] object-cover"
                />
            </div>

            <h1 className="text-center text-[40px] italic font-sorts-mill-goudy leading-[80px] tracking-[4.2px] text-[#E3D0BF]">
                {t('subtitle')}
            </h1>
            <h1 className="text-center text-[70px] italic font-sorts-mill-goudy leading-[80px] tracking-[4.2px] text-[#E3D0BF]">
                {t('title')}
            </h1>

            <p className="text-center text-[20px] font-montserrat leading-[24px] tracking-[0.4px] mt-4 text-white whitespace-pre-line">
                {t('description')}
            </p>

            <div className="flex justify-center mt-8">
                <button className="flex font-montserrat items-center justify-center h-11 px-4 py-1 gap-2 rounded-lg shadow-md bg-[#B98A5E] text-white text-sm font-medium leading-[20px] shadow-custom">
                    {t('contactButton')}
                </button>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-[70px]">
                <Image
                    src="/corporate/image-1.svg"
                    alt={t('eventImageAlt') + ' 1'}
                    width={260}
                    height={420}
                    className="w-[260px] h-[420px] sm:w-[180px] sm:h-[260px] lg:translate-y-6"
                />
                <Image
                    src="/corporate/image-2.svg"
                    alt={t('eventImageAlt') + ' 2'}
                    width={260}
                    height={420}
                    className="w-[260px] h-[420px] sm:w-[180px] sm:h-[260px] lg:-translate-y-6"
                />
                <Image
                    src="/corporate/image-3.svg"
                    alt={t('eventImageAlt') + ' 3'}
                    width={260}
                    height={420}
                    className="w-[260px] h-[420px] sm:w-[180px] sm:h-[260px] lg:translate-y-6"
                />
                <Image
                    src="/corporate/image-4.svg"
                    alt={t('eventImageAlt') + ' 4'}
                    width={260}
                    height={420}
                    className="w-[260px] h-[420px] sm:w-[180px] sm:h-[260px] lg:-translate-y-6"
                />
            </div>
        </section>
    );
}