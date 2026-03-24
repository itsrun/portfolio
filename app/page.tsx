import Bio from "./section/bio";
import Profile from "./section/profile";
import Pub from "./section/pub";
import newsData from "../public/news.json";
import teachingData from "../public/teaching.json";
import jobData from "../public/job.json";
import awardData from "../public/award.json";
import List from "./ui/list";
import Section from "./ui/section";
import Separator from "./ui/separator";
import Misc from "./section/misc";
import Footer from "./section/footer";

export default function Home() {
  return (
    <main className="mx-auto px-[6%] max-w-[78rem] my-[4.2vw] grid grid-cols-3 gap-[3.2vw]">
      <div className="col-span-2">
        <Bio />
        <Pub />
        <Section id="teaching">
          <Separator name="Teaching" className="mt-4 mb-3" />
          <List data={teachingData} large />
        </Section>
      </div>
      <div className="col-span-1 relative">
        <Profile />
        <Section id="news">
          <Separator name="News" className="mt-4 mb-3" />
          <List data={newsData} />
        </Section>
        <Section id="industry">
          <Separator name="Industry" className="mt-4 mb-3" />
          <List data={jobData} />
        </Section>
        <Section id="awards">
          <Separator name="Awards" className="mt-4 mb-3" />
          <List data={awardData} />
        </Section>
        <Misc />
        <Footer />
      </div>
    </main>
  );
}
