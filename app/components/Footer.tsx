import Image from "next/image";
import Launch from "./icons/Launch";
import Github from "./icons/github-mark-white.svg";
import LinkedIn from "./icons/linkedin.svg";

export default function Footer() {
  return (
    <div className="flex h-48 w-full flex-col items-center justify-center">
      <div className="flex w-11/12 items-center justify-center sm:w-9/12">
        <div className="m-2.5 h-fit">
          <a href="https://www.linkedin.com/in/ianm1837/" target="_blank">
            <Image src={LinkedIn} alt="LinkedIn Logo" height={30} />
          </a>
        </div>
        <div className="m-2.5 h-fit">
          <a href="https://github.com/ianm1837" target="_blank">
            <Image src={Github} alt="Github Logo" height={30} />
          </a>
        </div>
      </div>
      <div className="prose">
        <a
          href="https://github.com/ianm1837/portfolio-v2"
          target="_blank"
          className="prose flex items-center text-xs"
        >
          View this page on GitHub
          <Launch />
        </a>
      </div>
      <div className="m-5">©2023 ianwmeyer.com</div>
    </div>
  );
}
