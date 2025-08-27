// "use client";
// import { useEffect, useState } from "react";
import Section from "../ui/section";

export default function Footer() {
  //   const [index, setIndex] = useState(Math.floor(Math.random() * 18) + 1);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setIndex((prevIndex) => (prevIndex % 18) + 1);
  //     }, 10000);
  //     return () => clearInterval(interval);
  //   }, []);

  return (
    <Section id="footer" className="absolute bottom-0 left-0 right-0 -z-10">
      <img
        // src={`/snoopy/s${index}.gif`}
        src="/snoopy.gif"
        alt="Snoopy footer logo"
        className="w-[12rem]"
      />
      <div className="text-xs text-gray-400 leading-[1.12]">
        © 2025 Run Huang. All rights reserved. <br /> 🤍 Snoopy © Peanuts
        Worldwide LLC
      </div>
    </Section>
  );
}
