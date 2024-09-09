import { Dosis } from "next/font/google";
import { Open_Sans as OpenSans } from "next/font/google";

export const dosis = Dosis({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});
export const openSans = OpenSans({
  subsets: ["latin"],
  display: 'swap',
  adjustFontFallback: false,
  weight: ['300', '400', '500', '600', '700', '800'],
});