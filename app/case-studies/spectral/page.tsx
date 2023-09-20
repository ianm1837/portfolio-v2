import CaseStudyTemplate from "../components/CaseStudyTemplate";
import SpectralShowCase from "./images/Spectral Showcase.png";
import SpectralWireframe1 from "./images/Wireframe-1.png";
import SpectralWireframe2 from "./images/Wireframe-2.png";
import SpectralWireframe3 from "./images/Wireframe-3.png";

const showcaseImages = [
  {
    id: 0,
    image: SpectralShowCase,
    caption: "Spectral running on desktop and mobile",
  },
  {
    id: 1,
    image: SpectralWireframe1,
    caption: "First wireframe of the mobile ui",
  },
  {
    id: 2,
    image: SpectralWireframe2,
    caption: "Communication path ideation",
  },
  {
    id: 3,
    image: SpectralWireframe3,
    caption: "Database mockup",
  },
];

const header = "Spectral";

const descriptionText =
  "Spectral is a real-time messaging client app I conceived, designed, and developed independently. Its aim is to provide secure and private messaging while offering flexibility in hosting choices. My longstanding passion for security and privacy, particularly in communication, fueled this project. When I needed a project for my final grade at the University of Oregon Full Stack Coding Bootcamp, Spectral emerged as the ideal culmination of my studies and passions.";

const tldr = [
  "Last project for Coding Bootcamp",
  "I made a self hosted real time communication chat app",
];

const techUsed = [
  "React",
  "GraphQL with Websockets",
  "MongoDB",
  "Docker/Docker Compose",
];

const links = [
  {
    title: "https://github.com/ianm1837/spectral",
    href: "https://github.com/ianm1837/spectral",
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
