import React from "react";

export default function CaseStudyTechUsed({ tech }: { tech: string[] }) {
  return (
    <div>
      <h2 className="">Tech Used</h2>
      <ul className="">
        {tech.map((techItem, index) => (
          <li key={index}>{techItem}</li>
        ))}
      </ul>
    </div>
  );
}
