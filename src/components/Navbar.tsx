'use client'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useTranslations } from 'next-intl';
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

const navItems = [
    { key: "services", href: "#services" },
    { key: "rooms", href: "#rooms" },
    { key: "ourRestaurant", href: "#our-restaurant" },
    { key: "information", href: "#information" },
    { key: "corporate", href: "#corporate" },
    { key: "ourLocation", href: "#our-location" },
    { key: "contacts", href: "#contacts" },
]

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const t = useTranslations('navbar');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });

            setIsMenuOpen(false);
        }
    };

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/80 backdrop-blur-md shadow-sm"
                    : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-4">
                <nav className="flex items-center justify-between h-20">
                    {/* Title */}
                    <a href="#">
                        <div className="text-center">
                            <span className={cn(
                                "block text-xl font-bold leading-none font-raleway",
                                isScrolled ? "text-gray-900" : "text-white"
                            )}>
                                {t('titleLine1')}
                            </span>
                            <span className={cn(
                                "block text-xl font-bold font-raleway",
                                isScrolled ? "text-gray-900" : "text-white"
                            )}>
                                {t('titleLine2')}
                            </span>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden xl:flex items-center gap-4">
                        {navItems.map((item) => (
                            <Button
                                key={item.key}
                                variant="ghost"
                                className={cn(
                                    "flex items-center gap-2 text-[18px] font-medium font-public-sans",
                                    isScrolled ? "text-gray-600 hover:text-gray-900" : "text-white hover:text-white hover:bg-black"
                                )}
                                onClick={() => scrollToSection(item.href)}
                            >
                                {t(item.key)}
                            </Button>
                        ))}
                        <LanguageSwitcher isScrolled={isScrolled} />
                    </div>

                    {/* Mobile Menu Button */}
                    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className={cn(
                                    "xl:hidden",
                                    isScrolled ? "text-gray-600" : "text-white"
                                )}
                            >
                                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="pt-20 bg-white">
  <div className="flex flex-col gap-4">
    {navItems.map((item) => (
      <Button
        key={item.key}
        variant="ghost"
        className="flex items-center gap-2 w-full justify-start text-lg font-semibold text-gray-800"
        onClick={() => scrollToSection(item.href)}
      >
        {t(item.key)}
      </Button>
    ))}
    <div className="mt-4">
      <LanguageSwitcher isMobileMenu={isMenuOpen} /> {/* Pass isMenuOpen here */}
    </div>
  </div>
</SheetContent>
                    </Sheet>
                </nav>
            </div>
        </header>
    );
}