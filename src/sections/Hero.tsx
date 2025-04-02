import { Button } from "@/components/Button";
import starsBg from "@/assets/stars-bg.png";
import React from "react";

export const Hero = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-black py-16 md:h-[800px] flex items-center justify-center [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{
        backgroundImage: `url(${starsBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgba(140,69,255,0.7)_0%,rgba(91,33,182,0.4)_45%,transparent_75%)]"></div>

      {/* Start Planet */}
      <div className="absolute h-64 w-64 md:h-78 md:w-78 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>
      {/* End Planet */}

      {/* Inner orbit circle start ring 1 */}
      <div className="absolute h-[300px] w-[300px] md:h-[350px] md:w-[350px] border border-white/20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute h-2 w-2 top-0 left-1/2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 top-1/2 left-0 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-5 w-5 top-1/2 left-full border border-white rounded-full -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
          <div className="h-2 w-2 bg-white rounded-full"></div>
        </div>
      </div>
      {/* End ring 1 */}
      {/* Start ring 2 Middle dashed circle */}
      <div className="absolute h-[420px] w-[420px] md:h-[580px] md:w-[580px] border border-white/20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"></div>

      {/* Outer orbit */}
      <div className="absolute h-[520px] w-[520px] md:h-[780px] md:w-[780px] border border-white/20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute h-2 w-2 top-1/2 left-0 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 top-1/2 left-full bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      {/* Outer orbit ring 3 */}
      <div className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] border border-white/20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute h-2 w-2 top-1/2 left-0 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 top-1/2 left-full bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Content container */}
      <div className="container relative px-4 md:px-8">
        <div className="relative z-10">
          <h1 className="text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-purple-400/50 text-center">
            AI SEO
          </h1>
          <p className="text-base max-w-xl md:text-xl text-white/80 text-center mt-4 md:mt-5 sm:max-w-md md:max-w-2xl mx-auto">
            Elevate your site's visibility effortlessly with AI, where smart
            technology meets user-friendly SEO tools.
          </p>
          <div className="flex justify-center mt-6 md:mt-8">
            <Button>Join waitlist</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
