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
  "My first client, Jesse, came to me with a request to build out a professional portfolio. As I was nearing the completion of my studies and seeking more cross-discipline working experiences, I enthusiastically accepted the challenge. Since this client was a designer, they produced their own design system and high-fidelity prototypes from which we collaborated from. \n \n To implement this project, I initially chose Next.js, driven by my desire to deepen my expertise with the framework. However, during the development process, I recognized the limitations of Bootstrap and made a strategic shift to Tailwind CSS. Coincidentally, Next.js introduced its v13 update, including the app directory, which further enriched the project. Although the new design was never launched (as the client secured a job), it proved to be a valuable learning experience. For a behind-the-scenes look, explore the `<a href='https://github.com/Meyer-and-Moon-Enterprises/moon-portfolio/tree/tailwind-migration' target='_blank'>tailwind-migration</a>` branch.";

const tldr = [
  "Client was tired of pre-canned website builders, so I built a custom website based on their designs created in Figma.",
];

const techUsed = ["React", "Next.js", "Tailwind CSS"];

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
