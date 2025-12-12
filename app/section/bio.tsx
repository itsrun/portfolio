import MLink from "../ui/mlink";
import Section from "../ui/section";
import Contact from "./contact";

export default function Bio() {
  return (
    <Section id="bio">
      <h1 className="text-5xl">Run Huang</h1>
      <h2 className="text-3xl mt-0.5">黄润</h2>
      <h3 className="text-2xl">&quot;ruen&quot; (/ru:n/)</h3>
      <div className="text-lg leading-[1.36] gap-5 flex flex-col mt-6 break-words hyphens-auto cursor-default">
        <div>
          I am a Ph.D. student in Computer Science at the{" "}
          <MLink href="https://www.cs.usc.edu/" preview>
            University of Southern California
          </MLink>
          , supported by an Annenberg Fellowship. I am fortunate to be advised
          by{" "}
          <MLink href="https://aceatusc.github.io" preview>
            Prof. Souti Chattopadhyay
          </MLink>
          . Previously, I earned my Bachelor's degree in Computer Science from{" "}
          <MLink href="https://en.wikipedia.org/wiki/Fudan_University" preview>
            Fudan University
          </MLink>{" "}
          (<span className="text-base">复旦大学</span>).
        </div>
        <div>
          I'm interested in designing <i>intelligent interfaces</i> that make
          dense and complex information more accessible and digestible to users.
          My recent work has explored how peer discussions on social media can
          enrich academic paper reading (
          {
            <MLink href="https://aceatusc.github.io/surf" preview>
              UIST '25
            </MLink>
          }
          ) and how academic knowledge spreads across the software developer
          community (
          <MLink href="https://sciso.vercel.app/" preview>
            WWW '24
          </MLink>
          ). I'm always happy to chat about research or ideas, so feel free to{" "}
          <MLink href="mailto:itsrunhuang@outlook.com">reach out</MLink> :)
        </div>
        <div>
          I'm experienced in full-stack development, having contributed to both
          frontend and backend projects during internships at{" "}
          <MLink href="https://en.wikipedia.org/wiki/siemens" preview>
            Siemens
          </MLink>{" "}
          and{" "}
          <MLink href="https://en.wikipedia.org/wiki/Tencent" preview>
            Tencent
          </MLink>
          . <b>I am currently seeking a Summer 2026 internship.</b>
        </div>
        <Contact className="flex-row sm:gap-x-3 sm:text-base md:text-lg md:gap-x-6" />
      </div>
    </Section>
  );
}
