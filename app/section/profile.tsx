import Section from "../ui/section";

export default function Profile() {
  return (
    <Section id="profile">
      <div>
        <div className="relative w-64 mt-4 sm:mt-0 sm:w-full h-auto aspect-[3/5] sm:aspect-[9/16] overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 bg-zinc-200 animate-pulse"
          />
          <img
            src="/profile.jpeg"
            className="absolute inset-0 z-10 h-full w-full object-cover"
            alt="Profile picture of Run Huang"
          />
        </div>
      </div>
    </Section>
  );
}
