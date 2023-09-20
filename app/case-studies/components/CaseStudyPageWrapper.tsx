import React from "react";

export default function CaseStudyPageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto mt-16 w-11/12 md:w-8/12 xl:w-7/12">
      {children}
    </div>
  );
}
