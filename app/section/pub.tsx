"use client";

import { useState } from "react";
import Section from "../ui/section";
import data from "../../public/publications.json";
import Separator from "../ui/separator";

interface PubItemProps {
  title: string;
  authors: { name: string; self?: boolean }[];
  link?: string;
  venue: string;
  award?: string;
  id?: string;
  video?: string;
  paper?: string;
  cover?: string;
  note?: string;
}

function VideoPlayer({
  video,
  cover,
  title = "Publication video",
}: {
  video: string;
  cover?: string;
  title?: string;
}) {
  const [playing, setPlaying] = useState(false);

  if (playing || !cover) {
    return (
      <iframe
        className="absolute inset-0 w-full h-full"
        src={`https://www.youtube.com/embed/${video}?loop=1&rel=0${playing ? "&autoplay=1" : ""}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        loading="lazy"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      aria-label={`Play video: ${title}`}
      className="absolute inset-0 w-full h-full cursor-pointer group/play focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-500"
      onClick={() => setPlaying(true)}
    >
      <img
        src={cover}
        alt="Video thumbnail"
        className="w-full h-full object-contain grayscale opacity-75 group-hover/publication:grayscale-0 group-hover/publication:opacity-100 transition-all duration-300"
      />
      <div className="absolute inset-0 bg-black/10 group-hover/play:bg-black/20 transition-colors duration-200" />
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          viewBox="0 0 68 48"
          className="w-16 h-11 opacity-80 group-hover/play:opacity-100 transition-opacity duration-200"
        >
          <path
            d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
            fill="red"
          />
          <path d="M45 24 27 14v20" fill="white" />
        </svg>
      </div>
    </button>
  );
}

import MLink from "../ui/mlink";

function PubItem(item: PubItemProps) {
  const { title, authors, link, venue, award, id, video, paper, cover, note } =
    item;
  return (
    <div className="my-auto px-1 group/publication relative" id={id}>
      <a
        href={link || paper || video}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 opacity-0"
      />
      <h3 className="font-medium leading-tight sm:leading-snug text-lg group-hover/publication:underline underline-offset-2">
        {title}
      </h3>
      {award && <p className="text-amber-700 mt-0.25">{award}</p>}
      <p className="mt-0.75 mb-1.5 text-gray-900 leading-tight font-light">
        {authors.map((a, i) => (
          <span key={i}>
            {a.self ? (
              <u className="underline-offset-2 decoration-1">{a.name}</u>
            ) : (
              a.name
            )}
            {i < authors.length - 1 ? ", " : ""}
          </span>
        ))}
      </p>
      <div className="font-medium gap-5 flex">
        {venue}{" "}
        {link && (
          <MLink className="font-light" href={link} icon preview>
            Website
          </MLink>
        )}
        {paper && (
          <MLink className="font-light" href={paper} icon>
            Paper
          </MLink>
        )}
      </div>
      {video && (
        <div className="relative h-[min(30vw,14.4rem)] w-[min(25.6rem,53.33vw)] -m-[1px] mt-2.5 mb-1.5">
          <VideoPlayer video={video} cover={cover} />
        </div>
      )}
    </div>
  );
}

export default function Pub() {
  return (
    <Section id="pub">
      <Separator name="Publications" className="mt-5 sm:mt-9 mb-1.5" />
      <div className="text-stone-500 text-sm gap-3 flex flex-wrap mb-3">
        <div>*J: Journal</div>
        <div>C: Conference</div>
        <div>E: Extended abstract</div>
      </div>
      <div className="flex flex-col gap-6 cursor-default">
        {data.map((item, index) => (
          <PubItem key={index} {...item} />
        ))}
      </div>
    </Section>
  );
}
