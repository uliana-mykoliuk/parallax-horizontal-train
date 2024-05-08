import Image from "next/image";
import Sun from "@/public/Sun.png";
import Train from "@/public/Train.png";
import Cloud from "@/public/Cloud.png";
import { useRef } from "react";
import { useParallax } from "react-scroll-parallax";

export default function Home() {
  const target = useRef(null);
  const train = useParallax({
    speed: 500,
    targetElement: target.current,
  });
  const cloud = useParallax({
    speed: 200,
    targetElement: target.current,
  });

  return (
    <div
      ref={target}
      className="bg-cover bg-center w-[3000px] h-screen"
      style={{ backgroundImage: `url('/Scene.png')` }}
    >
      <div className="fixed top-10 left-40 ">
        <Image src={Sun} alt="" height={120} width={120} />
      </div>
      <div ref={train.ref} className="absolute top-[11vh] left-[30vw]">
        <Image src={Train} alt="" height={350} width={1000} />
      </div>
      <div ref={cloud.ref} className="absolute top-10">
        <Image src={Cloud} alt="" height={200} width={1000} />
      </div>
    </div>
  );
}
