import React from "react";
import Image, { StaticImageData } from "next/image";
import ArrowForward from "./icons/ArrowForward";

export default function CaseStudyItem({
  image,
  alt,
  title,
  caption,
}: {
  image: StaticImageData;
  alt: string;
  title: string;
  caption: string;
}) {
  return (
    <div className=" w-full lg:w-6/12 ">
      <div className="card m-3 bg-neutral text-neutral-content">
        <figure className="">
          <Image src={image} alt={alt}></Image>
        </figure>
        <div className="card-body h-56">
          <h2 className="text-xl font-bold">{title}</h2>
          <p>{caption}</p>
          <div className="card-actions justify-start">
            <button className="btn btn-secondary">
              Read More
              <ArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
