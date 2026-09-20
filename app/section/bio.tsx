import MLink from "../ui/mlink";
import Section from "../ui/section";
import Contact from "./contact";

export default function Bio() {
  return (
    <Section id="bio">
      <h1 className="text-5xl font-semibold mt-2 tracking-tighter">
        <span className="inline-block underline decoration-2 underline-offset-6 decoration-dotted">
          Run
        </span>{" "}
        Huang
      </h1>{" "}
      <h2 className="text-2xl font-light mt-0.5">&quot;ruen&quot; (/ru:n/)</h2>
      <div className="flex flex-col mt-6 break-words hyphens-auto cursor-default text-neutral-800">
        <div>
          I am a Ph.D. candidate in Computer Science at the University of
          Southern California, supported by an Annenberg Fellowship. I am
          fortunate to be advised by{" "}
          <MLink href="https://aceatusc.github.io" preview>
            Prof. Souti Chattopadhyay
          </MLink>
          . Previously, I received my B.S. in Computer Science from Fudan
          University.
        </div>
        <div className="mt-4 mb-5.5">
          My research focuses on Human-AI Interaction. I design intelligent
          interfaces that help knowledge workers (e.g., researchers, developers)
          make sense of and make use of complex information.
        </div>
        <Contact />
        {/* <div>
          I'm interested in designing <b>intelligent interfaces</b> that make
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
            Siemens NX
          </MLink>{" "}
          and{" "}
          <MLink href="https://en.wikipedia.org/wiki/Tencent" preview>
            Tencent
          </MLink>
          .
        </div> */}

        {/* <iframe
          data-testid="embed-iframe"
          src="https://open.spotify.com/embed/album/6dVCpQ7oGJD1oYs2fv1t5M?utm_source=generator&theme=0"
          width="100%"
          height="80"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe> */}
      </div>
    </Section>
  );
}
