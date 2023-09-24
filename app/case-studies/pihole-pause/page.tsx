import CaseStudyTemplate from "../components/CaseStudyTemplate";
import piholePauseShowcase from "./images/Pihole Pause Showcase.png"
import piholePauseDraft from "./images/Pihole Pause Draft.png"
import piholeFirstIteration from "./images/PiHole Pause First Iteration.png"

const showcaseImages = [
  {
    id: 0,
    image: piholePauseShowcase,
    caption: "Final version of PiHole Pause",
  },
  {
    id: 0,
    image: piholePauseDraft,
    caption: "First draft of concept",
  },
  {
    id: 0,
    image: piholeFirstIteration,
    caption: "First iteration of design",
  },
];

const header = "Pihole Pause";

const descriptionText =
  "PiHole Pause emerged from the challenges of running redundant PiHoles. For those unfamiliar, a PiHole is a network-wide ad-blocking DNS server. Running a redundant PiHole isn't a typical or officially supported use case, leading to the problem of guessing which PiHole a device on the network is currently using as its DNS server. At times, I need to temporarily pause the ad-blocking service to use certain apps or software without permanently whitelisting them. PiHole Pause provides a one-stop solution for this.";

const tldr = [
  "Was tired of navigating to two different PiHoles to pause them; built a big pause button to do it for me.",
];

const techUsed = [
  "React",
  "Next.js",
  "Prisma",
  "SQLite",
  "Docker",
];

const links = [
  {
    title: "https://github.com/ianm1837/pihole-pause",
    href: "https://github.com/ianm1837/pihole-pause",
  },
];

export default function page() {
  return (
    <CaseStudyTemplate
      showcaseImages={showcaseImages}
      header={header}
      description={descriptionText}
      tldr={tldr}
      techUsed={techUsed}
      links={links}
    />
  );
}
