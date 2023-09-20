import React from "react";

export type LinksArray = {
  title: string;
  href: string;
};

export default function CaseStudyLinks({ links }: { links: LinksArray[] }) {
  return (
    <div className="w-8/12">
      <h2 className="">Links to Project </h2>
      <ul>
        {links.map((linkItem, index) => (
          <li key={index}>
            <a href={linkItem.href} target="_blank">{linkItem.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
