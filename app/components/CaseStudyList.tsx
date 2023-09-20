import React from "react";
import CaseStudyItem from "./CaseStudyItem";
import spectral from "../images/cards/Spectral Card.png";
import piholePause from "../images/cards/Pihole Pause Card.png";
import genuineJesse from "../images/cards/GJ Card.png";
import overdrive from "../images/cards/Overdrive Card.png";

export default function CaseStudyList() {
  return (
    <div className="container m-auto mt-24">
      <div className="m-auto w-11/12 sm:w-10/12">
        <h1 className="m-3 text-2xl font-semibold">Work</h1>
      </div>

      <div className="mx-auto flex w-11/12 flex-wrap sm:w-10/12 ">
        <CaseStudyItem
          image={spectral}
          title="Spectral"
          caption="A messaging app designed with privacy and self hosting in mind. "
          alt="showing application on desktop and mobile"
          link="/case-studies/spectral"
        />
        <CaseStudyItem
          image={piholePause}
          title="Pi-hole Pause"
          caption="For when you have redundant pi-holes and don't have time to troubleshoot."
          alt="showing desktop application version of pihole pause"
          link="/case-studies/"
        />
        <CaseStudyItem
          image={genuineJesse}
          title="Genuine Jesse"
          caption="A portfolio for an incredibly talented Product Designer"
          alt="image of portfolio site"
          link="/case-studies/"
        />
        <CaseStudyItem
          image={overdrive}
          title="Overdrive"
          caption="To keep me from breaking my car. "
          alt="Circuit diagram"
          link="/case-studies/"
        />
      </div>
    </div>
  );
}
