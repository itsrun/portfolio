import type { Metadata } from "next";
import { Alegreya, Noto_Serif_SC } from "next/font/google";
import "./globals.css";

const alegreya = Alegreya({
  variable: "--font-alegreya",
  subsets: ["latin"],
});

const notoSerifSC = Noto_Serif_SC({
  variable: "--font-noto-serif-sc",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Run Huang",
  description:
    "Run Huang is a CS Ph.D. student at University of Southern California. His research focuses on Human-AI collaboration. He earned his Bachelor's degree from Fudan University.",
  icons: {
    icon: "/favicon.webp",
  },
  authors: [{ name: "Run Huang" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${alegreya.variable} ${notoSerifSC.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
