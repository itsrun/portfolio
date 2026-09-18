import Bio from "./section/bio";
import Profile from "./section/profile";
import Pub from "./section/pub";
import newsData from "../public/news.json";
import teachingData from "../public/teaching.json";
import jobData from "../public/job.json";
import awardData from "../public/award.json";
import servicesData from "../public/services.json";
import List from "./ui/list";
import Section from "./ui/section";
import Separator from "./ui/separator";
import Misc from "./section/misc";
import Footer from "./section/footer";

export default function Home() {
  return (
    <main className="mx-auto px-6 sm:px-8 md:px-10 lg:px-12 max-w-[75rem] py-8 md:py-10 xl:py-12 2xl:py-15 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8">
      <div className="contents sm:block sm:col-span-2 min-w-0">
        <Bio />
        <Pub />
        <Section id="teaching">
          <Separator name="Teaching" className="mt-4 mb-3" />
          <List data={teachingData} large />
        </Section>
      </div>
      <div className="contents sm:block sm:col-span-1 min-w-0 relative">
        <div className="row-start-2 sm:row-auto">
          <Profile />
        </div>
        {/* <Section id="news">
          <Separator name="News" className="mt-4 mb-3" />
          <List data={newsData} />
        </Section> */}
        <Section id="industry">
          <Separator name="Industry" className="mt-4 mb-3" />
          <List data={jobData} />
        </Section>
        <Section id="awards">
          <Separator name="Awards" className="mt-4 mb-3" />
          <List data={awardData} />
        </Section>
        <Section id="services">
          <Separator name="Services" className="mt-4 mb-3" />
          <List data={servicesData} />
        </Section>
        <Misc />
        {/* <Footer /> */}
      </div>
    </main>
  );
}
