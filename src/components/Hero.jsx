import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import gsap from "gsap";
import { useState, useEffect } from "react";
import { useWindowSize } from "@uidotdev/usehooks";

const Hero = () => {
  const { width, height } = useWindowSize();

  const [videoSrc, setvideoSrc] = useState(
    width > 640 ? heroVideo : smallHeroVideo
  );

  useEffect(() => {
    setvideoSrc(width > 640 ? heroVideo : smallHeroVideo);
  }, [width, height]);

  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 1,
    });

    gsap.to("#CTA", {
      y: 0,
      opacity: 1,
      delay: 1.5,
    });
  }, []);

  return (
    <>
      <section className="w-full nav-height bg-black relative">
        <div className="h-5/6 w-full flex-center flex-col">
          <p id="hero" className="hero-title">
            iPhone 15 Pro
          </p>
          <div className="md:w-10/12 w-9/12">
            <video
              autoPlay
              muted
              playsInline={true}
              key={videoSrc}
              className="pointer-events-none"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          </div>

          <div
            id="CTA"
            className="flex flex-col items-center opacity-0 translate-y-20"
          >
            <a href="#highlights" className="btn">
              Buy
            </a>
            <p className="font-normal text-xl">From $199/month or $999</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
