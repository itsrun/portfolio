import Section from "../ui/section";
import MLink from "../ui/mlink";
import Separator from "../ui/separator";

export default function Misc() {
  return (
    <Section id="misc" className="cursor-default">
      <Separator name="Miscellaneous" className="mt-6 mb-3" />
      <div>
        Find me on{" "}
        {
          <MLink href="https://splatoon.nintendo.com/" preview>
            Splatsville
          </MLink>
        }
        ,
        <MLink href="https://zelda.nintendo.com/" preview>
          Hyrule
        </MLink>
        , or{" "}
        <MLink
          href="https://open.spotify.com/embed/playlist/0RkGGBaCE995JF22l5pwqj?utm_source=generator"
          inplace
          preview
        >
          Spotify
        </MLink>{" "}
        when I'm off work. If it's a holiday, I'm most likely visiting a
        National Park or ski resort. Here's my tier ranking of the national
        parks and some other places I have visited so far:
      </div>
      <div className="w-full max-w-2xl mx-auto mt-4 pl-0.5">
        <div className="flex flex-col gap-1.5">
          {[
            {
              tier: "S",
              parks: [
                { name: "Zion", pic: "/pics/zion.jpeg" },
                { name: "Mt. Hood", pic: "/pics/mthood.jpeg" },
              ],
            },
            {
              tier: "A",
              parks: [
                { name: "Deer Valley", pic: "/pics/deervalley.jpeg" },
                { name: "Bryce Canyon", pic: "/pics/bryce.jpeg" },
                { name: "Grand Canyon" },
                {
                  name: "Mt. San Jacinto",
                  pic: "/pics/jacinto.jpeg",
                },
              ],
            },
            {
              tier: "B",
              parks: [
                {
                  name: "Crater Lake",
                  // pic: "/pics/craterlake.jpeg",
                },
                { name: "Arches" },
                { name: "Yosemite" },
              ],
            },
            {
              tier: "C",
              parks: [
                { name: "Cannon Beach", pic: "/pics/cannon.jpeg" },
                { name: "Canyonlands" },
                { name: "Death Valley" },
                { name: "Joshua Tree" },
              ],
            },
            {
              tier: "F",
              parks: [{ name: "Capitol Reef" }],
            },
          ].map(({ tier, parks }) => (
            <div
              key={tier}
              className="flex items-center pb-0.5 border-b border-gray-200"
            >
              <div className={`text-center font-bold text-lg`}>{tier}</div>
              <div className={`flex-1 flex flex-wrap gap-2 px-3 text-sm`}>
                {parks.map((park) =>
                  park.pic ? (
                    <span
                      key={park.name}
                      className={`relative group cursor-pointer underline decoration-wavy decoration-1 underline-offset-2`}
                    >
                      {park.name}
                      <span
                        className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block"
                        style={{
                          width: "auto",
                          minWidth: "0",
                        }}
                      >
                        <img
                          src={park.pic}
                          alt={park.name}
                          className="shadow-lg border border-gray-200 bg-white max-w-xs w-[24rem]"
                          loading="lazy"
                        />
                      </span>
                    </span>
                  ) : (
                    <span key={park.name} className="text-gray-600">
                      {park.name}
                    </span>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <details>
        <summary className="cursor-pointer select-none py-2 text-lg font-semibold text-gray-700 hover:underline">
          (For the sake of your data plan, think twice before clicking)
        </summary>
        <div
          className="
        columns-2
        2xl:columns-3
        gap-1.5
        w-full
        mt-2
          "
        >
          <div
            className="break-inside-avoid bg-[#1f1f1f] p-1 h-fit mb-1.5"
            id="spo"
          >
            <iframe
              data-testid="embed-iframe"
              src="https://open.spotify.com/embed/playlist/0RkGGBaCE995JF22l5pwqj?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          {data.map((item, index) => (
            <div key={index} className="break-inside-avoid">
              <MiscItem {...item} />
            </div>
          ))}
        </div>
      </details> */}
    </Section>
  );
}
