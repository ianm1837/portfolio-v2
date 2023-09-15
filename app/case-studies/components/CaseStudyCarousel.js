"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TransparentBackdrop from "@/app/case-studies/components/images/Transparent Backdrop.png";

export default function CaseStudyCarousel({ showcaseImages }) {
  const [currentRadioElement, setCurrentRadioElement] = useState();

  const radioElements = showcaseImages.map((radio, index) => (
    <input
      type="radio"
      name={`imageSelect`}
      id={`radio${index + 1}`}
      key={`radio${index + 1}`}
      value={index + 1}
      checked={currentRadioElement == index + 1}
      onChange={handleRadioSelect}
      className="radio radio-sm "
    />
  ));

  const captionElements = showcaseImages.map((caption, index) => (
    <div key={`caption${index}`} className={`flex justify-center bg-base-200`}>
      <div className="p-3">{caption.caption}</div>
    </div>
  ));

  const imageElements = showcaseImages.map((image, index) => (
    <motion.div
      className="absolute inset-0 "
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 100,
      }}
      exit={{
        opacity: 0,
        animationDelay: 2,
      }}
      key={index}
    >
      <Image src={image.image} height={800} alt={image.caption} priority />
    </motion.div>
  ));

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImageElement, setCurrentImageElement] = useState(
    imageElements[0],
  );
  const [currentCaptionElement, setCurrentCaptionElement] = useState(
    captionElements[0],
  );

  function increment(direction) {
    console.log("direction: ", direction);
    if (direction == "up") {
      if (currentImageIndex == showcaseImages.length - 1) {
        const nextElement = 0;

        setCurrentImageIndex(nextElement);
        setCurrentImageElement(imageElements[nextElement]);
        setCurrentCaptionElement(captionElements[nextElement]);
        setCurrentRadioElement(nextElement + 1);
        return;
      }
      const nextElement = currentImageIndex + 1;
      setCurrentImageIndex(nextElement);
      setCurrentImageElement(imageElements[nextElement]);
      setCurrentCaptionElement(captionElements[nextElement]);
      setCurrentRadioElement(nextElement + 1);
    }

    if (direction == "down") {
      if (currentImageIndex == 0) {
        const nextElement = imageElements.length - 1;

        setCurrentImageIndex(nextElement);
        setCurrentImageElement(imageElements[nextElement]);
        setCurrentCaptionElement(captionElements[nextElement]);
        setCurrentRadioElement(nextElement + 1);
        return;
      }
      const nextElement = currentImageIndex - 1;

      setCurrentImageIndex(nextElement);
      setCurrentImageElement(imageElements[nextElement]);
      setCurrentCaptionElement(captionElements[nextElement]);
      setCurrentRadioElement(nextElement + 1);
    }
  }

  function handleRadioSelect(event) {
    const nextElement = event.target.id[event.target.id.length - 1] - 1;

    console.log("nextElement: ", nextElement);

    setCurrentImageIndex(nextElement);
    setCurrentImageElement(imageElements[nextElement]);
    setCurrentCaptionElement(captionElements[nextElement]);
    setCurrentRadioElement(nextElement + 1);
  }

  useEffect(() => {
    async function onMount() {
      setCurrentRadioElement(1);
    }
    onMount();
  }, []);

  return (
    <>
      <div>
        <div className="relative flex w-full items-center ">
          <div className="absolute z-10 flex h-full w-full justify-between">
            <button
              className=" h-full w-6/12"
              onClick={() => increment("down")}
            >
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
              onClick={() => increment("up")}
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
          <AnimatePresence className="relative inset-0 flex h-full w-full">
            <Image
              src={TransparentBackdrop}
              height={800}
              alt="placeholder image"
              className=""
            />
            {currentImageElement ? currentImageElement : ""}
          </AnimatePresence>
        </div>
        {currentCaptionElement ? currentCaptionElement : ""}
      </div>
      <div className="mt-1"></div>
      <div className="w-100 preview z-40 flex items-center justify-center gap-4 p-3">
        {radioElements ? radioElements : ""}
      </div>
    </>
  );
}
