"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import TransparentBackdrop from "./images/Transparent Backdrop.png";
import ArrowBackward from "../../components/icons/ArrowBackward";
import ArrowForward from "../../components/icons/ArrowForward";

type ImageArray = {
  id: number,
  image: StaticImageData,
  caption: string
}

export default function CaseStudyCarousel({ showcaseImages } : { showcaseImages: ImageArray[] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const radioElements = showcaseImages.map((radio, index) => (
    <button
      type="button"
      name={`imageSelect`}
      id={`radio${index}`}
      key={`radio${radio.id}`}
      onClick={(e) => {
        console.log("onClick called");
        handleImageButtonClick(e);
      }}
      className={`radio radio-sm flex items-center justify-center`}
    >
      <div
        className={`h-[64%] w-[64%] rounded-full scale-0 bg-white transition-all ${
          currentImageIndex == index ? "scale-100" : ""
        }`}
      ></div>
    </button>
  ));

  const captionElements = showcaseImages.map((caption, index) => (
    <div key={`caption${index}`} className={`flex justify-center bg-base-200`}>
      <div className="p-3">{caption.caption}</div>
    </div>
  ));

  const imageElements = showcaseImages.map((image, index) => {

    return (
      <div
        className={`absolute inset-0 transition-opacity ${
          currentImageIndex == index ? "" : "opacity-0"
        } `}
        key={index}
      >
        <Image
          src={image.image}
          height={800}
          alt={image.caption}
          priority={index == 0}
          placeholder="empty"
          loading={index == 0 ? undefined : "lazy"}
        />
      </div>
    );
  });

  function incrementInt(direction: 1 | -1) {
    let nextElement = (currentImageIndex + direction) % showcaseImages.length;
    if (nextElement < 0) nextElement = showcaseImages.length - 1;

    setCurrentImageIndex(nextElement);
  }

  function handleImageButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
    const nextElement = parseInt(
      event.currentTarget.id[event.currentTarget.id.length - 1],
    );

    setCurrentImageIndex(nextElement);
  }

  return (
    <>
      <div>
        <div className="relative flex w-full items-center ">
          <div className="absolute z-10 flex h-full w-full justify-between">
            <button className=" h-full w-6/12" onClick={() => incrementInt(-1)}>
              <span className={`btn btn-circle my-auto ml-3 mr-auto flex`}>
                <ArrowBackward />
              </span>
            </button>
            <button
              className="justify flex h-full w-6/12 "
              onClick={() => incrementInt(1)}
            >
              <span className={`btn btn-circle my-auto ml-auto mr-3`}>
                <ArrowForward />
              </span>
            </button>
          </div>
          <div className="relative inset-0 flex h-full w-full">
            <Image
              src={TransparentBackdrop}
              height={800}
              alt="placeholder image"
              className=""
            />
            {imageElements} 
          </div>
        </div>
        {captionElements[currentImageIndex]}
      </div>
      <div className="mt-1"></div>
      <div className="w-100 preview z-40 flex items-center justify-center gap-4 p-3">
        {radioElements ? radioElements : ""}
      </div>
    </>
  );
}
