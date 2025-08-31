import Image from "next/image";
import Section from "../ui/section";

export default function Profile() {
  return (
    <Section className="mt-5" id="profile">
      <div className="relative w-full h-auto aspect-[480/640] overflow-hidden">
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
      <div className="text-sm text-gray-500 px-1 pt-1 leading-4">
        Aug 2025 in Los Angeles, CA
      </div>
      {/* <iframe
        data-testid="embed-iframe"
        src="https://open.spotify.com/embed/track/4fsQ0K37TOXa3hEQfjEic1?utm_source=generator&theme=0"
        height="80"
        allowFullScreen={false}
        className="w-[200%] origin-top-left scale-50 mt-1 -mb-[42px] sm:w-[150%] sm:scale-67 sm:-mb-[36px] md:w-[125%] md:scale-80 md:-mb-[24px] lg:w-[100%] lg:scale-100 lg:-mb-[8px]"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe> */}
    </Section>
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
