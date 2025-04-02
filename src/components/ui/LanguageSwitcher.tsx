'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter, usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useLocale } from 'next-intl';
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  isScrolled?: boolean;
  isMobileMenu?: boolean; // New prop to indicate mobile menu context
}

export default function LanguageSwitcher({ 
  isScrolled = false, 
  isMobileMenu = false 
}: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const changeLanguage = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(new RegExp(`^/${locale}`), '');
    router.push(`/${newLocale}${pathWithoutLocale || '/'}`);
  };

  const getDisplayLanguage = () => {
    return locale.toUpperCase();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost"
          className={cn(
            "flex items-center gap-1 text-[18px] font-medium font-public-sans",
            isMobileMenu 
              ? "text-gray-800 hover:bg-gray-100" // Mobile menu style
              : isScrolled 
                ? "text-gray-600 hover:bg-gray-900 hover:text-white" 
                : "text-white hover:bg-black hover:text-white"
          )}
        >
          <span className="uppercase">{getDisplayLanguage()}</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end"
        className={cn(
          isMobileMenu 
            ? "bg-white text-gray-800" // Mobile menu style
            : isScrolled 
              ? "bg-white text-gray-800 border-gray-200" 
              : "bg-white/80 backdrop-blur-md text-gray-800"
        )}
      >
        <DropdownMenuItem 
          onClick={() => changeLanguage('en')}
          className={cn(
            "text-[16px] font-public-sans",
            locale === 'en' ? "font-semibold" : "font-medium",
            "hover:bg-gray-100 focus:bg-gray-100"
          )}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => changeLanguage('it')}
          className={cn(
            "text-[16px] font-public-sans",
            locale === 'it' ? "font-semibold" : "font-medium",
            "hover:bg-gray-100 focus:bg-gray-100"
          )}
        >
          Italiano
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}