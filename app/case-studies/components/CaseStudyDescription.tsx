import React from "react";

export default function CaseStudyDescription({
  description,
}: {
  description: string;
}) {
  return (
    <>
      <h1 className="text-2xl font-bold text-warning">Description</h1>
      <div>{description}</div>
    </>
  );
}
