"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import ArrowForward from "./icons/ArrowForward";

export default function CaseStudyItem({
  image,
  alt,
  title,
  caption,
  link,
}: {
  image: StaticImageData;
  alt: string;
  title: string;
  caption: string;
  link: string;
}) {
  const [loading, setLoading] = useState(true);

  return (
    <div className=" w-full lg:w-6/12 ">
      <div className="card m-3 bg-neutral text-neutral-content">
        <figure className="">
          <Image
            src={image}
            alt={alt}
            onLoadingComplete={() => setLoading(false)}
            className={`transform transition-opacity ${
              loading ? "opacity-0" : "opacity-100"
            }`}
          ></Image>
        </figure>
        <div className="card-body h-56">
          <h2 className="text-xl font-bold">{title}</h2>
          <p>{caption}</p>
          <div className="card-actions justify-start">
            <Link className="btn btn-secondary" href={link}>
              Read More
              <ArrowForward />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
