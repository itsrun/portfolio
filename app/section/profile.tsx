import Section from "../ui/section";

export default function Profile() {
  return (
    <Section id="profile">
      <img
        src="/profile.jpeg"
        className="mt-4 block h-auto w-full max-w-64 sm:mt-0 sm:max-w-none"
        alt="Profile picture of Run Huang"
      />
    </Section>
  );
}
