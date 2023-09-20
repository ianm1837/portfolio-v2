import Image from "next/image";
import lineWave from "../images/line-wave.svg";

export default function WaveBanner({ direction }: { direction?: boolean }) {
  // const forward = [0, -800];
  // const reverse = [-800, 0];

  return (
    <div
      className={`mt-20 flex h-20 w-screen ${
        direction ? " animate-marquee-slow-reverse " : " animate-marquee-slow "
      }`}
      // animate={{
      //   x: direction? reverse : forward,
      //   transition: {
      //     x: {
      //       repeat: Infinity,
      //       repeatType: "loop",
      //       duration: 40,
      //       ease: "linear",
      //     },
      //   },
      // }}
    >
      <Image
        src={lineWave}
        width={800}
        height={10}
        alt=""
        className="m-0 w-[200px] md:w-[800px]"
      />
      <Image
        src={lineWave}
        width={800}
        height={10}
        alt=""
        className="w-[200px] md:w-[800px]"
      />
      <Image
        src={lineWave}
        width={800}
        height={10}
        alt=""
        className="w-[200px] md:w-[800px]"
      />
      <Image
        src={lineWave}
        width={800}
        height={10}
        alt=""
        className="w-[200px] md:w-[800px]"
      />
      <Image
        src={lineWave}
        width={800}
        height={10}
        alt=""
        className="w-[200px] md:w-[800px]"
      />
      <Image
        src={lineWave}
        width={800}
        height={10}
        alt=""
        className="w-[200px] md:w-[800px]"
      />
      <Image
        src={lineWave}
        width={800}
        height={10}
        alt=""
        className="w-[200px] md:w-[800px]"
      />
      <Image
        src={lineWave}
        width={800}
        height={10}
        alt=""
        className="w-[200px] md:w-[800px]"
      />
      <Image
        src={lineWave}
        width={800}
        height={10}
        alt=""
        className="w-[200px] md:w-[800px]"
      />
    </div>
  );
}
