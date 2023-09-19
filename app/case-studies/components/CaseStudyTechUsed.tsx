import React from "react";

export default function CaseStudyTechUsed({ tech }: { tech: string[] }) {
  return (
    <div>
      <h1 className="text-2xl font-bold text-success">Tech Used</h1>
      <ul className="list-inside list-disc">
        {tech.map((techItem, index) => (
          <li>{techItem}</li>
        ))}
      </ul>
    </div>
  );
}
