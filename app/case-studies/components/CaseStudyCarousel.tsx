"use client";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import ArrowBackward from "../../components/icons/ArrowBackward";
import ArrowForward from "../../components/icons/ArrowForward";
import TransparentBackdrop from "./images/Transparent Backdrop.png";

export type ImageArray = {
  id: number;
  image: StaticImageData;
  caption: string;
};

export default function CaseStudyCarousel({
  showcaseImages,
}: {
  showcaseImages: ImageArray[];
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadComplete, setLoadComplete] = useState(0);
  const [imageCount, setImageCount] = useState(true);

  const radioElements = showcaseImages.map((radio, index) => (
    <button
      type="button"
      name={`imageSelect`}
      id={`radio${index}`}
      key={`radio${radio.id}`}
      onClick={(e) => {
        handleImageButtonClick(e);
      }}
      className={`radio radio-sm flex items-center justify-center`}
    >
      <div
        className={`h-[64%] w-[64%] scale-0 rounded-full bg-white transition-all ${
          currentImageIndex == index ? "scale-100" : ""
        }`}
      ></div>
    </button>
  ));

  const captionElements = showcaseImages.map((caption, index) => (
    <div key={`caption${index}`} className={`flex justify-center bg-base-200 rounded-b-2xl`}>
      <div className="p-3">{caption.caption}</div>
    </div>
  ));

  const imageElements = showcaseImages.map((image, index) => {
    return (
      <div
        className={`absolute inset-0 transition-opacity ${
          currentImageIndex == index && loadComplete ? "" : "opacity-0"
        } `}
        key={index}
      >
        <Image
          src={image.image}
          alt={image.caption}
          priority={index == 0}
          placeholder="empty"
          className="rounded-t-2xl"
          loading={index == 0 ? undefined : "lazy"}
          onLoadingComplete={
            index == showcaseImages.length - 1
              ? () => setLoadComplete(1)
              : undefined
          }
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

  useEffect(() => {
    //only render radio and arrow buttons if true
    showcaseImages.length == 1 ? setImageCount(false) : setImageCount(true);
  }, [showcaseImages.length]);

  return (
    <>
      <div className="m-auto w-full">
        <div className="relative flex h-full w-full items-center">
          {imageCount ? (
            <div className="absolute z-10 flex h-full w-full justify-between">
              <button
                className={`opacity-0 transition-opacity ${
                  loadComplete ? "opacity-100" : ""
                } h-full w-6/12`}
                onClick={() => incrementInt(-1)}
              >
                <span className={`btn btn-circle my-auto ml-3 mr-auto flex`}>
                  <ArrowBackward />
                </span>
              </button>
              <button
                className={`flex h-full w-6/12 opacity-0 transition-opacity ${
                  loadComplete ? "opacity-100" : ""
                }`}
                onClick={() => incrementInt(1)}
              >
                <span className={`btn btn-circle my-auto ml-auto mr-3`}>
                  <ArrowForward />
                </span>
              </button>
            </div>
          ) : (
            ""
          )}
          <div className="relative inset-0 flex h-full w-full">
            <Image
              src={TransparentBackdrop}
              alt="placeholder image"
              className=""
            />
            <div
              className={`absolute z-50 flex h-full w-full items-center justify-center  ${
                loadComplete ? "hidden" : ""
              }`}
            >
              <span
                className={` loading loading-spinner h-20 w-20 text-secondary`}
              ></span>
            </div>
            {imageElements}
          </div>
        </div>
        {captionElements[currentImageIndex]}
        <div className="mt-1"></div>
        <div className="w-100 preview z-40 flex items-center justify-center gap-4 p-3">
          {imageCount ? radioElements : ""}
        </div>
      </div>
    </>
  );
}
