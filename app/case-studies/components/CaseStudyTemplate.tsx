import CaseStudyCarousel from "../components/CaseStudyCarousel";
import CaseStudyDescription from "../components/CaseStudyDescription";
import CaseStudyHeader from "../components/CaseStudyHeader";
import CaseStudyLinks, { LinksArray } from "../components/CaseStudyLinks";
import CaseStudyPageWrapper from "../components/CaseStudyPageWrapper";
import CaseStudyTLDR from "../components/CaseStudyTLDR";
import CaseStudyTechUsed from "../components/CaseStudyTechUsed";
import { ImageArray } from "./CaseStudyCarousel";

export default function CaseStudyTemplate({
  showcaseImages,
  header,
  description,
  tldr,
  techUsed,
  links,
}: {
  showcaseImages: ImageArray[];
  header: string;
  description: string;
  tldr: string[];
  techUsed: string[];
  links: LinksArray[];
}) {
  return (
    <CaseStudyPageWrapper>
      <CaseStudyCarousel showcaseImages={showcaseImages} />
      <article className="prose max-w-none">
        <CaseStudyHeader header={header} />
        <div className="flex">
          <CaseStudyDescription description={description} />
          <CaseStudyTLDR tldr={tldr} />
        </div>
        <CaseStudyTechUsed tech={techUsed} />
        <CaseStudyLinks links={links} />
        <div className="h-20"></div>
      </article>
    </CaseStudyPageWrapper>
  );
}
