import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
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
    <html
      lang="en"
      className="scroll-smooth scroll-pt-[32px] bg-white text-[#161616] scheme-light motion-reduce:scroll-auto"
    >
      <head>
        <Script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "db45a1317af24187b1f85d7450e8c149"}'
        ></Script>
      </head>
      <body
        className={`${inter.className} m-0 text-left antialiased selection:bg-[#161616] selection:text-white [&_a]:decoration-1 [&_a]:underline-offset-[3px] [&_a:hover]:underline [&_a:focus-visible]:outline-1 [&_a:focus-visible]:outline-offset-[5px] [&_a:focus-visible]:outline-[#161616]`}
      >
        {children}
      </body>
    </html>
  );
}
