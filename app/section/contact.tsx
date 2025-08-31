import MLink from "../ui/mlink";

export default function Contact({ className }: { className?: string }) {
  return (
    <div className={`flex flex-wrap text-lg gap-y-0 gap-x-2 ${className}`}>
      <MLink
        href="mailto:itsrunhuang@outlook.com"
        className="block underline-offset-3"
      >
        Contact
      </MLink>
      <MLink
        href="https://www.linkedin.com/in/runhuangii/"
        className="block underline-offset-3"
      >
        LinkedIn
      </MLink>
      <MLink
        href="https://scholar.google.com/citations?user=v9vsJ64AAAAJ&hl=en"
        className="block underline-offset-3"
      >
        Google Scholar
      </MLink>
      <MLink href="/cv.pdf" className="block underline-offset-3">
        Curriculum Vitae
      </MLink>
    </div>
  );
}
