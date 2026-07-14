import Section from "../ui/section";

export default function Profile() {
  return (
    <Section className="mt-1" id="profile">
      <div className="profile-wrapper">
        <div className="relative w-full h-auto aspect-[9/16] cursor-pointer overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 bg-zinc-200 animate-pulse"
          />
          <img
            src="/profile.jpeg"
            className="profile-img profile-img-default absolute inset-0 z-10 h-full w-full object-cover"
            alt="Profile picture of Run Huang"
          />
          <img
            src="/profile2.jpeg"
            className="profile-img profile-img-hover absolute inset-0 z-10 h-full w-full object-cover"
            alt="Profile picture of Run Huang in Santa Rosa"
          />
        </div>
        <div className="grid overflow-hidden text-sm text-gray-500 px-0.25 pt-1 leading-4">
          <span className="profile-subtitle profile-subtitle-default col-start-1 row-start-1">
            Lassen Volcanic NP, Jul 2026
          </span>
          <span className="profile-subtitle profile-subtitle-hover col-start-1 row-start-1">
            Santa Rosa, Jul 2026
          </span>
        </div>
        <style>
          {`
            .profile-img {
              transition: transform 320ms ease-in-out;
            }
            .profile-img-hover {
              transform: translateX(100%);
            }
            .profile-wrapper:has(.profile-img:hover) .profile-img-default {
              transform: translateX(-100%);
            }
            .profile-wrapper:has(.profile-img:hover) .profile-img-hover {
              transform: translateX(0);
            }
            .profile-subtitle {
              transition: transform 320ms ease-in-out;
            }
            .profile-subtitle-hover {
              transform: translateX(100%);
            }
            .profile-wrapper:has(.profile-img:hover) .profile-subtitle-default {
              transform: translateX(-100%);
            }
            .profile-wrapper:has(.profile-img:hover) .profile-subtitle-hover {
              transform: translateX(0);
            }
          `}
        </style>
      </div>
    </Section>
  );
}
