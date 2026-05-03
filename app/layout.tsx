import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const neueMontreal = localFont({
  src: "../public/fonts/PPNeueMontreal-Regular.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-sans",
  display: "swap",
});

const gtAmericaMono = localFont({
  src: "../public/fonts/GTAmericaMono-Regular.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-mono-zero",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Time Zone US — Custom Watches That Mean Business.",
  description:
    "Time Zone US designs, develops, and delivers custom promotional watches for the world's most demanding brands. Since 1991.",
  openGraph: {
    title: "Time Zone US — Custom Watches That Mean Business.",
    description:
      "Custom promotional watches, engineered for brands that take time seriously.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${neueMontreal.variable} ${gtAmericaMono.variable}`}
    >
      <body className="grain">{children}</body>
    </html>
  );
}
