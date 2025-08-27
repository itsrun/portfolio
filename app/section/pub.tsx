import Section from "../ui/section";
import data from "../../public/publications.json";
import Separator from "../ui/separator";

interface PubItemProps {
  title: string;
  authors: { name: string; self?: boolean }[];
  link: string;
  venue: string;
  award?: string;
  id?: string;
}

function PubItem(item: PubItemProps) {
  const { title, authors, link, venue, award, id } = item;
  return (
    <a
      className="my-auto px-1 hover:bg-blue-50 transition-all duration-200 max-w-[64rem]"
      href={link}
      target="_blank"
      rel="noreferrer"
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
    </a>
  );
}

export default function Pub() {
  return (
    <Section id="pub">
      <Separator name="Publications" className="mt-6 mb-3" />
      <p className="mb-3">
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
