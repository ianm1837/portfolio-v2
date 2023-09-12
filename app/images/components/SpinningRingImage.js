import React from "react";
import Image from "next/image";
import profileSpinner from '../portrait-spinner.svg'

export default function SpinningRingImage({ className }) {
  return <Image src={profileSpinner} alt=" " className={className} />;
}
