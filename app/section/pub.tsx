import Section from "../ui/section";
import data from "../../public/publications.json";
import Separator from "../ui/separator";
import MLink from "../ui/mlink";

interface PubItemProps {
  title: string;
  authors: { name: string; self?: boolean }[];
  link: string;
  venue: string;
  award?: string;
  id?: string;
  video?: string;
}

function PubItem(item: PubItemProps) {
  const { title, authors, link, venue, award, id, video } = item;
  return (
    <div
      className="my-auto px-1 hover:bg-blue-50 transition-all duration-200 max-w-[64rem] group cursor-pointer"
      id={id}
    >
      <h3 className="font-semibold leading-6 text-xl">{title}</h3>
      <p className="mt-1 mb-1.5 text-gray-600 leading-5 italic">
        {authors.map((a, i) => (
          <span key={i}>
            {a.self ? <u className="underline-offset-2">{a.name}</u> : a.name}
            {i < authors.length - 1 ? ", " : ""}
          </span>
        ))}
      </p>
      <p className="leading-5">{venue}</p>
      {award && (
        <p className="underline text-secondary underline-offset-2 decoration-dotted leading-5 mt-0.5">
          {award}
        </p>
      )}
      {video && (
        <div
          className="
        h-0
        group-hover:h-[calc(min(31.6vw,16rem)+3rem)]
        overflow-hidden
        transition-all duration-300
      "
        >
          <div className="relative h-[min(32vw,16rem)] w-[min(28.44rem,56.8889vw)] -m-[1px] mt-3 hidden group-hover:block transition-opacity duration-300">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${video}?loop=1&rel=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              loading="lazy"
              allowFullScreen
            />
          </div>

          <MLink href={link} className="leading-8">
            Read the paper
          </MLink>
        </div>
      )}
    </div>
  );
}

{
  /* <div className="max-w-[64rem] group">
  <input id={`toggle-${id}`} type="checkbox" className="peer sr-only" />

  <label
    htmlFor={`toggle-${id}`}
    id={id}
    className="
      my-auto px-1 block cursor-pointer
      hover:bg-blue-50
      peer-checked:bg-blue-50
      transition-colors duration-200
    "
  >
    <h3 className="font-semibold leading-6 text-xl">{title}</h3>
    <p className="mt-1 mb-1.5 text-gray-600 leading-5 italic">
      {authors.map((a, i) => (
        <span key={i}>
          {a.self ? <u className="underline-offset-2">{a.name}</u> : a.name}
          {i < authors.length - 1 ? ", " : ""}
        </span>
      ))}
    </p>
    <p className="leading-5">{venue}</p>
    {award && (
      <p className="underline text-secondary underline-offset-2 decoration-dotted leading-5 mt-0.5">
        {award}
      </p>
    )}
  </label>
  {video && (
    <div
      className="
        h-0 overflow-hidden transition-all duration-400
        group-hover:h-[calc(32vw+2.7rem)]
        peer-checked:h-[calc(32vw+2.7rem)]
        px-0.5 bg-blue-50
      "
    >
      <div className="relative h-[32vw] mt-[0.5rem] mb-1 w-full">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${video}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <MLink href={link} className="text-lg">
        Read the paper
      </MLink>
    </div>
  )}
</div>; */
}

export default function Pub() {
  return (
    <Section id="pub">
      <Separator name="Publications" className="mt-6 mb-3" />
      <p className="mb-3 text-gray-700">
        *C: full conference paper, *E: extended abstract & short paper
      </p>
      <div className="border-gray-300 flex flex-col gap-6 cursor-default">
        {data.map((item, index) => (
          <PubItem key={index} {...item} />
        ))}
      </div>
    </Section>
  );
}
