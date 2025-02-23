import "./globals.css";
import {
  ppEditorialNewUltralightItalic,
  inter,
  ibmPlexSansThai,
  koho,
  thasadith,
} from "./fonts";
import type React from "react";

export const metadata = {
  title: "Dynamic Frame Layout",
  description: "A dynamic frame layout with custom fonts",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${ppEditorialNewUltralightItalic.variable} ${inter.variable} ${ibmPlexSansThai.variable} ${koho.variable} ${thasadith.variable}`}
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}

import "./globals.css";
