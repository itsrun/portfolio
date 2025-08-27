import Section from "../ui/section";

export default function Profile() {
  return (
    <Section className="mt-5 cursor-pointer" id="profile">
      <style>
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
      <img className="profile-img" alt="Profile picture of Run Huang" />
      <div className="text-sm text-gray-500 px-1 pt-1.5 leading-4">
        Aug 2025 at Los Angeles, CA
      </div>
    </Section>
  );
}
