import React from "react";
import Image from "next/image";
import profile from "../../images/profile.png";

export default function ProfileImage({ className } : { className? : string }) {
  return (
    <Image
      src={profile}
      quality={100}
      priority={true}
      alt="Picture of the author"
      className={className}
    />
  );
}
