"use client";
import Image from "next/image";
import React from "react";
import ministry from "@/assets/images/ministryofhealth.png";
import musicNepal from "@/assets/images/music-nepal.png";
import can from "@/assets/images/can.png";
import nagarik from "@/assets/images/nagarik.png";
import sitaAir from "@/assets/images/sita-air.png";
import imsgGroup from "@/assets/images/imsgroup.png";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const apps = [
  {
    name: "Ministry of Health",
    icon: ministry,
  },
  {
    name: "CAN",
    icon: can,
  },
  {
    name: "Music Nepal",
    icon: musicNepal,
  },
  {
    name: "Sita Air",
    icon: sitaAir,
  },
  {
    name: "Nagarik",
    icon: nagarik,
  },
  {
    name: "IMSGroup",
    icon: imsgGroup,
  },
];

const TrustedBy = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );
  return (
    <section className="py-20 bg-slate-50">
      <div className=" px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-ba md:text-[24px] font-bold text-slate-900 mb-12 max-w-[474px] mx-auto">
          Trusted by 1000+ Nepali business on their growth journey
        </h2>

        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-1">
            {apps.map((app) => (
              <CarouselItem
                key={app.name}
                className="lg:basis-1/5 basis-1/2 flex items-center justify-center"
              >
                <Image src={app.icon} alt={app.name} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default TrustedBy;
