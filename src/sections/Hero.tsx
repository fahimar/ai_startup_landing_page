import { Button } from "@/components/Button";
import starsBg from "@/assets/stars-bg.png";
import React from "react";

export const Hero = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-black py-16 md:py-24 lg:min-h-[492px] flex items-center justify-center"
      style={{
        backgroundImage: `url(${starsBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_78%,transparent)]"></div>

      {/* Purple glowing orb - responsive sizing */}
      <div className="absolute h-48 w-48 md:h-64 md:w-64 bg-purple-600 border-white/20 rounded-full top-1/4 left-1/2 -translate-x-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>

      {/* Responsive orbit circles */}
      <div className="absolute h-[260px] w-[260px] md:h-[344px] md:w-[344px] border border-white opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute h-2 w-2 top-1/2 left-0 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 top-0 left-1/2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-4 w-4 md:h-5 md:w-5 top-1/2 left-full border border-white rounded-full -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
          <div className="h-1.5 w-1.5 md:h-2 md:w-2 bg-white rounded-full"></div>
        </div>
      </div>

      {/* Dashed circle - hidden on smallest screens */}
      <div className="hidden sm:block absolute h-[320px] w-[320px] md:h-[444px] md:w-[444px] border border-white/20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"></div>

      {/* Largest orbit - responsive sizing */}
      <div className="absolute h-[380px] w-[380px] md:h-[544px] md:w-[544px] border border-white opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute h-2 w-2 top-1/2 left-0 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 top-1/2 left-full bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Content container */}
      <div className="container relative px-4 md:px-8">
        <div className="relative z-10">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-purple-500/50 text-center">
            AI SEO
          </h1>
          <p className="text-base md:text-lg text-white/70 text-center mt-4 md:mt-5 max-w-xs sm:max-w-md md:max-w-2xl mx-auto">
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
