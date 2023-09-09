import React from 'react';
import CaseStudyItem from './CaseStudyItem';
import spectral from '../images/Spectral.png';
import piholePause from '../images/pihole-pause.png'
import genuineJesse from '../images/genuine-jesse.png';
import overdrive from '../images/overdrive.png'

export default function CaseStudyList() {
  return (
    <div className="flex flex-wrap w-11/12 mx-auto mt-32">
      <CaseStudyItem
        image={spectral}
        title="Spectral"
        caption="A messaging app designed with privacy and self hosting in mind. "
        alt="showing application on desktop and mobile"
      />
      <CaseStudyItem
        image={piholePause}
        title="Pi-hole Pause"
        caption="For when you have redundant pi-holes and don't have time to troubleshoot."
        alt="showing desktop application version of pihole pause"
      />
      <CaseStudyItem
        image={genuineJesse}
        title="Genuine Jesse"
        caption="A portfolio for an incredibly talented Product Designer"
        alt="image of portfolio site"
      />
      <CaseStudyItem
        image={overdrive}
        title="Overdrive"
        caption="To keep me from breaking my car. "
        alt="Circuit diagram"
      />
    </div>
  );
}
