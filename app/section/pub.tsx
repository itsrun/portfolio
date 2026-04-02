"use client";

import { useState } from "react";
import Section from "../ui/section";
import data from "../../public/publications.json";
import Separator from "../ui/separator";
import MLink from "../ui/mlink";

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
}

function VideoPlayer({ video, cover }: { video: string; cover?: string }) {
  const [playing, setPlaying] = useState(false);

  if (playing || !cover) {
    return (
      <iframe
        className="absolute inset-0 w-full h-full"
        src={`https://www.youtube.com/embed/${video}?loop=1&rel=0${playing ? "&autoplay=1" : ""}`}
        title="YouTube video player"
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
      className="absolute inset-0 w-full h-full cursor-pointer group/play"
      onClick={() => setPlaying(true)}
    >
      <img
        src={cover}
        alt="Video thumbnail"
        className="w-full h-full object-cover grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
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

function PubItem(item: PubItemProps) {
  const { title, authors, link, venue, award, id, video, paper, cover } = item;
  return (
    <div
      className="my-auto px-1 hover:bg-blue-50 transition-all duration-200 max-w-[64rem] group relative"
      id={id}
    >
      <a
        href={link || paper || video}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 opacity-0"
      />
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
        <div>
          <div className="relative h-[min(30vw,14.4rem)] w-[min(25.6rem,53.33vw)] -m-[1px] mt-3">
            <VideoPlayer video={video} cover={cover} />
          </div>

          {link && (
            <MLink href={link} className="leading-8 mr-3">
              [Website]
            </MLink>
          )}
          {paper && (
            <MLink href={paper} className="leading-8">
              [Paper]
            </MLink>
          )}
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
        *C: conference full paper, *E: short paper & extended abstract
      </p>
      <div className="border-gray-300 flex flex-col gap-6 cursor-default">
        {data.map((item, index) => (
          <PubItem key={index} {...item} />
        ))}
      </div>
    </Section>
  );
}
