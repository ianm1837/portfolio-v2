import { IBM_Plex_Mono as Mono } from "next/font/google";
import Image from "next/image";
import profile from "../images/profile.png";
import profileSpinner from "../images/portrait-spinner.svg";

const mono = Mono({
  weight: "400",
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <div className=" flex w-11/12 flex-col items-center justify-center pt-10 sm:w-10/12 sm:pt-20 xl:flex-row">
      <div className="max-w-screen-sm">
        <div className="grid grid-cols-2 grid-rows-2">
          <div className="animate-spin-slow relative bottom-[-5.5%] left-[-2.5%] z-[2] col-[1/3] row-[1/3] flex  items-center justify-center">
            <Image src={profileSpinner} alt="" className="w-[75%]" />
          </div>
          <div className="z-[3] col-[1/3] row-[1/3]">
            <Image
              src={profile}
              quality={100}
              priority={true}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
      <div className="mt-4 flex w-full flex-col justify-center p-5 text-center text-xl sm:mt-0 lg:w-8/12 xl:w-5/12 xl:text-left">
        <h1 className={`text-3xl font-bold`}>Ian Meyer</h1>
        <h3 className={` text-lg ${mono.className} `}>
          Full Stack Web Developer
        </h3>
        <br />
        I&apos;m a guy with an insatiable drive to learn, create, and solve
        challenges using technology.
      </div>
    </div>
  );
}