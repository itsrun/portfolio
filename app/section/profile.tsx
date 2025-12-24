import Image from "next/image";
import Section from "../ui/section";

export default function Profile() {
  return (
    <Section className="mt-1" id="profile">
      <div className="relative w-full h-auto aspect-[3/5] overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-zinc-200 animate-pulse"
        />
        {/* <style>
          {`
        .profile-img {
        content: url('/profile.jpeg');
        transition: content 0.2s;
        }
        .profile-img:hover {
        content: url('/hallo.gif');
        }
      `}
        </style>
        <img
          className="profile-img z-10 relative"
          alt="Profile picture of Run Huang"
        /> */}
        <Image
          src="/profile.jpeg"
          alt="Profile picture of Run Huang"
          fill
          className="object-cover"
          placeholder="empty"
          sizes="(max-width: 640px) 100vw, 480px"
          priority
          fetchPriority="high"
        />
      </div>
      <div className="text-sm text-gray-500 px-1 pt-1 leading-4">
        Dec 2025, Lake Tahoe
      </div>
    </Section>
  );
}
