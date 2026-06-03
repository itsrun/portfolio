import Image from "next/image";
import Section from "../ui/section";

export default function Profile() {
  return (
    <Section className="mt-1" id="profile">
      <div className="relative w-full h-auto aspect-[9/16] overflow-hidden">
        {/* <div
          aria-hidden
          className="absolute inset-0 bg-zinc-200 animate-pulse"
        /> */}
        {/* <style>
          {`
        .profile-img {
        content: url('/profile5.jpeg');
        transition: content 0.2s;
        }
        .profile-img:hover {
        content: url('/profile.jpeg');
        }
      `}
        </style>
        <img
          className="profile-img z-10 relative"
          alt="Profile picture of Run Huang"
        /> */}
        <Image
          src="/profile3.jpeg"
          alt="Profile picture of Run Huang"
          fill
          className="object-cover"
          placeholder="empty"
          sizes="(max-width: 640px) 100vw, 480px"
          priority
          fetchPriority="high"
        />
      </div>
      <div className="text-sm text-gray-500 px-0.25 pt-1 leading-4">
        Shanghai, May 2026
      </div>
    </Section>
  );
}
