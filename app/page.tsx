import Bio from "./section/bio";
import Pub from "./section/pub";
import Section from "./ui/section";
import List from "./ui/list";
import jobs from "../public/job.json";
import awards from "../public/award.json";
import services from "../public/services.json";
import teaching from "../public/teaching.json";

const informationSections = [
  { id: "industry", title: "Experience", items: jobs },
  { id: "awards", title: "Awards & Fellowships", items: awards },
  { id: "services", title: "Academic Service", items: services },
  { id: "teaching", title: "Teaching", items: teaching },
];

export default function Home() {
  return (
    <>
      <a
        className="fixed top-[12px] left-[12px] z-10 -translate-y-[160%] bg-[#161616] px-[16px] py-[12px] text-white focus:translate-y-0"
        href="#pub"
      >
        Skip to publications
      </a>
      <main
        className="
          mx-auto grid max-w-[1700px] grid-cols-1 items-start gap-8 xl:gap-12 2xl:gap-16 px-6 py-10 md:px-8
          md:grid-cols-[200px_minmax(0,1fr)]
          lg:grid-cols-[200px_minmax(0,1fr)_200px]
          xl:grid-cols-[240px_minmax(0,1fr)_240px]
          2xl:grid-cols-[280px_minmax(0,1fr)_280px]
        "
      >
        <aside
          className="min-w-0 md:top-10 md:row-span-2 lg:row-span-1 [@media(max-height:700px)]:static"
          aria-label="About Run Huang"
        >
          <Bio />
        </aside>
        <Pub />
        <aside
          className="min-w-0 md:col-start-2 lg:col-start-3"
          aria-label="Information"
        >
          <div className="grid grid-cols-1 gap-[30px] min-[560px]:grid-cols-2 min-[560px]:gap-x-[24px] lg:grid-cols-1">
            {informationSections.map(({ id, title, items }) => (
              <Section key={id} id={id} aria-labelledby={`${id}-heading`}>
                <h3
                  id={`${id}-heading`}
                  className="mb-[17px] border-t border-[#dedede] pt-[10px] text-[11px] leading-[1.4] font-normal"
                >
                  {title}
                </h3>
                <List data={items} />
              </Section>
            ))}
          </div>
        </aside>
      </main>
    </>
  );
}
