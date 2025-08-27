import Image from "next/image";
import Section from "../ui/section";

export default function Profile() {
  return (
    <section className="mt-5" id="profile">
      <div className="relative w-full h-auto aspect-[480/640] overflow-hidden rounded">
        <div
          aria-hidden
          className="absolute inset-0 bg-zinc-200 animate-pulse"
        />
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
      <div className="text-sm text-gray-500 px-1 pt-1.5 leading-4">
        Aug 2025 at Los Angeles, CA
      </div>
    </section>
  );
}

{
  /* <style>
        {`
        .profile-img {
        content: url('/profile.jpeg');
        transition: content 0.2s;
        }
        .profile-img:hover {
        content: url('/profile.gif');
        }
      `}
      </style>
      <img
        src="/profile.jpeg"
        width={1}
        height={1}
        alt="Profile picture of Run Huang"
        style={{ opacity: 1 }}
      />
      <img
        src="/profile.gif"
        width={1}
        height={1}
        style={{ opacity: 0 }}
        alt="Profile picture of Run Huang"
      />
      <img className="profile-img" alt="Profile picture of Run Huang" /> */
}
