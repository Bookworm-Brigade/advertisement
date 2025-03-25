import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { Link } from "react-router";
import logo from "../components/bots.mp4";
const ParallaxComponent = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    if (parallaxRef.current) {
      const triggerElement = parallaxRef.current;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "0% 0%",
          end: "100% 0%",
          scrub: 0,
        },
      });

      const layers = [
        { layer: "1", yPercent: 70 },
        { layer: "2", yPercent: 55 },
        { layer: "3", yPercent: 30 },
        { layer: "4", yPercent: 10 },
      ];

      layers.forEach((layerObj, idx) => {
        tl.to(
          triggerElement.querySelectorAll(
            `[data-parallax-layer="${layerObj.layer}"]`
          ),
          {
            yPercent: layerObj.yPercent,
            ease: "none",
          },
          idx === 0 ? undefined : "<"
        );
      });
    }
  }, []);

  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Play the video when it enters the viewport
            videoElement.play().catch((err) => {
              console.error("Error attempting to play video:", err);
            });

            // Stop observing after the video starts playing
            observer.unobserve(videoElement);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the video is visible
      }
    );

    // Start observing the video element
    if (videoElement) {
      observer.observe(videoElement);
    }

    // Cleanup the observer on component unmount
    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);



  return (
    <div className="relative w-full overflow-hidden" ref={parallaxRef}>
      <section className="flex justify-center items-center min-h-screen overflow-hidden relative">
        <div className="absolute inset-0">
          <div className="absolute w-full h-[2px] bg-black bottom-0" />
          <div data-parallax-layers className="absolute w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1640386355103-83ebf7c6c83e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              data-parallax-layer="1"
              alt="Layer 3"
              className="absolute w-full h-full object-cover "
            />
            {/* <img
              src="https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795b4d5ac529e7d3a562_osmo-parallax-layer-2.webp"
              data-parallax-layer="2"
              alt="Layer 2"
              className="absolute w-full h-full object-cover"
            /> */}
            <div
              data-parallax-layer="3"
              className="absolute flex justify-center items-center w-full h-full"
            >
              <h1 className="text-[14vw] font-extrabold text-white font-[Cookie] ">
                A World of Ads
              </h1>
            </div>
            <img
              src="https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795bb5aceca85011ad83_osmo-parallax-layer-1.webp"
              data-parallax-layer="4"
              alt="Layer 1"
              className="absolute w-full h-full  object-cover"
            />
          </div>
          <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-black to-transparent" />
        </div>
      </section>
      <section className="flex justify-center bg-black items-center min-h-screen">
        <Link to="/signup">
          {/* <video src={logo}  loop></video> */}
          <video src={logo} ref={videoRef} width="640" height="360" muted>
          </video>
        </Link>
      </section>
    </div>
  );
};

export default ParallaxComponent;
