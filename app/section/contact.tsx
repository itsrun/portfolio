import MLink from "../ui/mlink";

export default function Contact({ className }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-y-1 gap-x-4 ${className} sm:gap-x-6`}>
      <MLink
        href="https://scholar.google.com/citations?user=v9vsJ64AAAAJ&hl=en"
        className="block underline-offset-3"
      >
        Scholar
      </MLink>
      <MLink
        href="https://www.linkedin.com/in/runhuangii/"
        className="block underline-offset-3"
      >
        LinkedIn
      </MLink>
      <MLink href="/cv.pdf" className="block underline-offset-3">
        Curriculum Vitae
      </MLink>
    </div>
  );
}
