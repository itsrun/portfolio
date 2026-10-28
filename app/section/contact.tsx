const links = [
  { label: "Email", href: "mailto:runhuang@usc.edu" },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=v9vsJ64AAAAJ&hl=en",
  },
  { label: "Curriculum Vitae", href: "/cv.pdf" },
];

export default function Contact() {
  return (
    <nav
      className="mt-4 flex flex-wrap items-start gap-x-[22px] gap-y-[12px] text-[11px] leading-[1.4] md:flex-col md:gap-2.75"
      aria-label="Contact and external profiles"
    >
      {links.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
        >
          {label}{" "}
          <span className="ml-[5px] inline-block" aria-hidden="true">
            ↗
          </span>
        </a>
      ))}
    </nav>
  );
}
