"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TransparentBackdrop from "./images/Transparent Backdrop.png";

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

  useEffect(() => {
    async function onMount() {
    }
    onMount();
  }, []);

  return (
    <>
      <div>
        <div className="relative flex w-full items-center ">
          <div className="absolute z-10 flex h-full w-full justify-between">
            <button className=" h-full w-6/12" onClick={() => incrementInt(-1)}>
              <span className={`btn btn-circle my-auto ml-3 mr-auto flex`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42a.996.996 0 0 0-1.41 0l-6.59 6.59a.996.996 0 0 0 0 1.41l6.59 6.59a.996.996 0 1 0 1.41-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z" />
                </svg>
              </span>
            </button>
            <button
              className="justify flex h-full w-6/12 "
              onClick={() => incrementInt(1)}
            >
              <span className={`btn btn-circle my-auto ml-auto mr-3`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59a.996.996 0 0 0 0-1.41l-6.58-6.6a.996.996 0 1 0-1.41 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z" />
                </svg>
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
            {imageElements ? imageElements : ""} 
          </div>
        </div>
        {captionElements ? captionElements[currentImageIndex] : ""}
      </div>
      <div className="mt-1"></div>
      <div className="w-100 preview z-40 flex items-center justify-center gap-4 p-3">
        {radioElements ? radioElements : ""}
      </div>
    </>
  );
}
