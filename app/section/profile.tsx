import Section from "../ui/section";

export default function Profile() {
  return (
    <Section id="profile">
      <div className="group/profile relative w-64 mt-4 sm:mt-0 sm:w-full h-auto aspect-[3/5] sm:aspect-[9/16] overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-zinc-200 animate-pulse"
        />
        <img
          src="/profile.jpeg"
          className="absolute inset-0 z-10 h-full w-full object-cover grayscale-20 group-hover/profile:grayscale-0 motion-safe:group-hover/profile:-rotate-1 motion-safe:group-hover/profile:scale-[1.03] transition duration-500 ease-out motion-reduce:transition-none"
          alt="Profile picture of Run Huang"
        />
      </div>
    </Section>
  );
}
