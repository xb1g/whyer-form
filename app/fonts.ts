import {
  Inter,
  IBM_Plex_Sans_Thai_Looped,
  KoHo,
  Thasadith,
} from "next/font/google";
import type { NextFontWithVariable } from "next/dist/compiled/@next/font";

const ppEditorialNewUltralightItalic: NextFontWithVariable = {
  className: "font-pp-editorial",
  style: {
    fontFamily: "PPEditorialNew-UltralightItalic",
    fontWeight: 200,
    fontStyle: "italic",
  },
  variable: "--font-pp-editorial",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const ibmPlexSansThai = IBM_Plex_Sans_Thai_Looped({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["thai", "latin"],
  display: "swap",
  variable: "--font-ibm-plex-thai",
});

const koho = KoHo({
  weight: ["200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["thai", "latin"],
  display: "swap",
  variable: "--font-koho",
});

const thasadith = Thasadith({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["thai", "latin"],
  display: "swap",
  variable: "--font-thasadith",
});

export {
  ppEditorialNewUltralightItalic,
  inter,
  ibmPlexSansThai,
  koho,
  thasadith,
};
