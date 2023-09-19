import React from "react";

type LinksArray = {
  title: string;
  href: string;
};

export default function CaseStudyLinks({ links }: { links: LinksArray[] }) {
  return (
    <div>
      <h1 className="text-2xl font-bold text-success">Links: </h1>
      <ul className="list-inside list-disc">
        {links.map((linkItem, index) => (
          <li>
            <a href={linkItem.href}>{linkItem.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
