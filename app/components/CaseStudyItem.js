import React from 'react';
import Image from 'next/image';
import ArrowForward from './icons/ArrowForward';

export default function CaseStudyItem({ image, alt, title, caption }) {
  return (
    <div className="w-6/12 ">
      <div className="card bg-neutral text-neutral-content m-3">
        <figure className="h-64">
          <Image src={image} alt={alt}></Image>
        </figure>
        <div className="card-body h-56">
          <h2 className="text-xl font-bold">{title}</h2>
          <p>{caption}</p>
          <div className="card-actions justify-start">
            <button className="btn btn-primary">
              Read More
              <ArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
