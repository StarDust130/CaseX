"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { HTMLAttributes } from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc?: string;
  dark?: boolean;
}

const TestimonialsImage = [
  {
    src: "/testimonials/1.jpg",
  },
  {
    src: "/testimonials/2.jpg",
  },
  {
    src: "/testimonials/3.jpg",
  },
  {
    src: "/testimonials/4.jpg",
  },
  {
    src: "/testimonials/5.jpg",
  },
];

const Phone = ({ imgSrc, className, dark = false, ...props }: PhoneProps) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <Image
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        className="pointer-events-none  z-50 select-none"
        alt="phone image"
        width={300}
        height={300}
        style={{ userSelect: "none" }}
      />

      <div className="absolute -z-10 inset-0">
        {imgSrc ? (
          <Image
            className="object-cover w-full h-full"
            src={imgSrc}
            alt="overlaying phone image"
            width={300}
            height={300}
          />
        ) : (
          <Carousel
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {TestimonialsImage.map((item, index) => (
                <CarouselItem key={index} className="relative w-full h-full">
                  <div className="relative w-full z-50 h-full">
                    <Image
                      src={item.src}
                      alt={`testimonial ${index + 1}`}
                      width={300}
                      height={300}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default Phone;
