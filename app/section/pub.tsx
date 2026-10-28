import Section from "../ui/section";
import publications from "../../public/publications.json";

type PubItemProps = {
  title: string;
  authors: { name: string; self?: boolean }[];
  venue: { abbr: string; full: string };
  id?: string;
  cover?: string;
  link?: string;
  paper?: string;
  video?: string;
  award?: string;
};

function PubItem({ item, index }: { item: PubItemProps; index: number }) {
  const videoUrl = item.video
    ? `https://www.youtube.com/watch?v=${item.video}`
    : undefined;
  const primaryUrl = item.link || item.paper || videoUrl;
  const titleId = `publication-title-${index}`;
  const resources = [
    { label: "Paper", href: item.paper },
    { label: "Website", href: item.link },
    { label: "Video", href: videoUrl },
  ].filter((resource) => resource.href);
  return (
    <article className="group min-w-0" id={item.id} aria-labelledby={titleId}>
      {item.cover ? (
        <img
          src={item.cover}
          alt={`Cover for ${item.title}`}
          className="block aspect-video w-[80%] object-contain object-center grayscale group-hover:grayscale-0"
          loading={index === 0 ? "eager" : "lazy"}
          decoding="async"
        />
      ) : (
        <div className="aspect-video bg-transparent" aria-hidden="true" />
      )}
      <p className="w-fit text-sm font-medium mt-2.5 tracking-tight mb-1 group-hover:bg-black group-hover:text-white">
        {item.venue.abbr}
      </p>
      <h3 id={titleId} className="leading-[1.2rem] tracking-[-0.01rem] text-sm">
        {primaryUrl ? (
          <a href={primaryUrl} target="_blank" rel="noopener noreferrer">
            {item.title}
          </a>
        ) : (
          item.title
        )}
      </h3>
      <p className="mt-1.5 text-xs leading-tight text-[#666]">
        {item.authors.map((author, authorIndex) => (
          <span key={author.name}>
            {authorIndex > 0 && ", "}
            {author.self ? (
              <span className="text-neutral-900 underline underline-offset-[2px]">
                {author.name}
              </span>
            ) : (
              author.name
            )}
          </span>
        ))}
      </p>
      {item.award && (
        <p className="mt-2 text-xs text-amber-700 leading-[1.5]">
          {item.award}
        </p>
      )}
      {resources.length > 0 && (
        <nav
          className="mt-2.25 flex flex-wrap justify-start gap-x-4 gap-y-2 text-[10px]"
          aria-label={`Resources for ${item.title}`}
        >
          {resources.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {label} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>
      )}
    </article>
  );
}

export default function Pub() {
  return (
    <Section
      id="pub"
      className="min-w-0 focus-visible:outline-1 focus-visible:outline-offset-[5px] focus-visible:outline-[#161616]"
      aria-labelledby="publications-heading"
      tabIndex={-1}
    >
      <header className="flex min-h-[39px] items-baseline justify-start gap-[12px] text-[11px] leading-[1.4] font-normal">
        <h2 id="publications-heading">Publications</h2>
        <span
          className="text-[#666] tabular-nums"
          aria-label={`${publications.length} publications`}
        >
          ({String(publications.length).padStart(2, "0")})
        </span>
      </header>
      <div className="grid grid-cols-1 gap-x-[20px] gap-y-[38px] min-[560px]:grid-cols-2 min-[560px]:gap-y-[54px] lg:gap-x-[24px]">
        {publications.map((item, index) => (
          <PubItem key={item.title} item={item} index={index} />
        ))}
      </div>
    </Section>
  );
}
