import CaseStudyTemplate from "../components/CaseStudyTemplate";
import overDriveShowcase from "./images/Overdrive Showcase.png";

const showcaseImages = [
  {
    id: 0,
    image: overDriveShowcase,
    caption: "Circuit diagram of Overdrive",
  },
];

const header = "Overdrive";

const descriptionText =
  "Overdrive is a solution to a niche problem. It's a specialized application designed to control the overdrive and torque converter lockup for a 4R70W in a 2001 Ford Crown Victoria. Recognizing that existing controllers for this situation were both rare and exorbitantly priced, often in the thousands of dollars, I took it upon myself to design one. I utilized an Arduino to monitor vehicle sensors (including the Speedometer, Throttle Position, Brake Pedal Sensor, and Current Gear Selector) to ascertain when it's suitable to activate the overdrive or the lockup clutch. Two push buttons on the shifter allow users to manually request activation of the overdrive or the lockup clutch. However, these are conditionally controlled using external relays to prevent accidental activation—such mishaps could severely damage, if not completely destroy, my transmission. \n \n Check out the TinkerCad link for the code and simulation. This is still a work in progress. Tinkercad has many limitations and my next step is to build it in real life so I can test it further.";

const tldr = [
  "I'm super extra and want to be able to shift my automatic transmission manually. The 4R70W transmission has an electronically controlled overdrive gear and lock up clutch. This device keeps me from breaking things.",
];

const techUsed = [
  "Arduino",
  "C++",
  "TinkerCad",
  "Fusion 360",
  "FDM 3D Printing",
  "Electronics Circuitry design",
];

const links = [
  {
    title:
      "https://www.tinkercad.com/things/jhqlswg4p1x-trans-odlockup-controller",
    href: "https://www.tinkercad.com/things/jhqlswg4p1x-trans-odlockup-controller",
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
