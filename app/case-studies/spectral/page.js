import React from "react";
import Image from "next/image";
import CaseStudyPageWrapper from "../components/CaseStudyPageWrapper";
import CaseStudyCarousel from "../components/CaseStudyCarousel";
import CaseStudyDescription from "../components/CaseStudyDescription";
import CaseStudyHeader from "../components/CaseStudyHeader";
import CaseStudyLinks from "../components/CaseStudyLinks";
import CaseStudyTLDR from "../components/CaseStudyTLDR";
import SpectralShowCase from "./images/Spectral Showcase.png";
import SpectralWireframe1 from "./images/Wireframe-1.png"
import SpectralWireframe2 from "./images/Wireframe-2.png"
import SpectralWireframe3 from "./images/Wireframe-3.png"

const showcaseImages = [
  {
    image: SpectralShowCase,
    caption: "Spectral running on desktop and mobile",
  },
  {
    image: SpectralWireframe1,
    caption: "First wireframe of the mobile ui",
  },
  {
    image: SpectralWireframe2,
    caption: 'Communication path ideation',

  },
  {
    image: SpectralWireframe3,
    caption: 'Database mockup'
  }

];

export default function page() {
  return (
    <CaseStudyPageWrapper>
      <CaseStudyCarousel showcaseImages={showcaseImages} />
      <CaseStudyHeader header="Spectral" />
      <CaseStudyDescription />
      <CaseStudyTLDR />
      <CaseStudyLinks />
    </CaseStudyPageWrapper>
  );
}
