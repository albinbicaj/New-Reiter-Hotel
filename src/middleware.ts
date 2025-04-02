// src/middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'it'],
  defaultLocale: 'en',
  localePrefix: 'always' // Always show locale (e.g., /en/about)
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};