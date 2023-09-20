import CaseStudyTemplate from "../components/CaseStudyTemplate";
import genuineJesseShowcase from "./images/Genuine Jesse Showcase.png";

const showcaseImages = [
  {
    id: 0,
    image: genuineJesseShowcase,
    caption: "Landing Page for genuinejesse.com",
  },
];

const header = "Genuine Jesse";

const descriptionText =
  "Jesse, my partner, was on the lookout for the next phase in her career and needed a portfolio. As I was wrapping up my studies, I took on the challenge to craft one for her. Being a gifted and meticulous designer, Jesse produced her own design system and high-fidelity prototypes for me to follow. I opted for Next.js, eager to delve deeper into the framework. Mid-development, I recognized the constraints of Bootstrap and pivoted to Tailwind. Coincidentally, Next.js released its v13 update along with the app directory. While transitioning to these new tools, I crafted a fresh design that, though never launched (as Jesse secured a job), enriched my learning journey. For a behind-the-scenes look, explore the `tailwind-migration` branch. \n \n No additional pictures here, go check out the live site if you would like to see more. 😉";

const tldr = [
  "Partner was tired of pre-canned website builders, so I built her a custom website based on her design created in Sketch/Figma",
];

const techUsed = ["React", "Next.js"];

const links = [
  {
    title: "https://genuinejesse.com",
    href: "https://genuinejesse.com",
  },
  {
    title: "https://github.com/Meyer-and-Moon-Enterprises/moon-portfolio",
    href: "https://github.com/Meyer-and-Moon-Enterprises/moon-portfolio",
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
