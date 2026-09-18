import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Script from "next/script";

export const ss3 = Source_Sans_3({});
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
      <head>
        <Script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "db45a1317af24187b1f85d7450e8c149"}'
        ></Script>
      </head>
      <body className={`${ss3.className} antialiased`}>{children}</body>
    </html>
  );
}
