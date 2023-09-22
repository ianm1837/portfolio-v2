import React from "react";

export default function CaseStudyDescription({
  description,
}: {
  description: string;
}) {
  return (
    <div className="w-8/12 pr-4">
      <h2 className="mt-0">Description</h2>
      <div dangerouslySetInnerHTML={{ __html: description }}></div>
    </div>
  );
}
