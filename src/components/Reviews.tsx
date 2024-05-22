"use client";
import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { HTMLAttributes, useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import Phone from "./Phone";

const PHONES = [
  "/testimonials/phone-1.jpg",
  "/testimonials/phone-2.jpg",
  "/testimonials/phone-3.jpg",
  "/testimonials/phone-4.jpg",
  "/testimonials/phone-5.jpg",
  "/testimonials/phone-6.jpg",
];

//! Split an array into n parts of equal length
function splitArray<T>(array: Array<T>, numPart: number) {
  const result: Array<Array<T>> = [];

  for (let i = 0; i < array.length; i++) {
    const index = i % numPart;
    if (!result[index]) {
      result[index] = [];
    }
    result[index].push(array[i]);
  }
  return result;
}

const ReviewColumn = ({
  reviews,
  className,
  reviewClassName,
  msPerPixel = 0,
}: {
  reviews: string[];
  className?: string;
  reviewClassName?: (reviewIndex: number) => string;
  msPerPixel?: number;
}) => {
  const columnRef = useRef<HTMLDivElement | null>(null);
  const [columnHeight, setColumnHeight] = useState(0);
  const duration = `${columnHeight / msPerPixel}ms`;

  useEffect(() => {
    if (!columnRef.current) return;

    const resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0);
    });

    resizeObserver.observe(columnRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={columnRef}
      className={cn("animate-marquee space-y-8 py-4", className)}
      style={{ "--marquee-duration": duration } as React.CSSProperties}
    >
      {reviews.concat(reviews).map((imgSrc, reviewIndex) => (
        <Review
          key={reviewIndex}
          className={reviewClassName?.(reviewIndex % reviews.length)}
          imgSrc={imgSrc}
        />
      ))}
    </div>
  );
};

interface ReviewProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
}

const Review = ({ imgSrc, className, ...props }: ReviewProps) => {
  const POSSIBLE_ANIMATION_DELAY = [
    "0s",
    "0.1s",
    "0.2s",
    "0.3s",
    "0.4s",
    "0.5s",
  ];

  const animationDelay =
    POSSIBLE_ANIMATION_DELAY[
      Math.floor(Math.random() * POSSIBLE_ANIMATION_DELAY.length)
    ];

  return (
    <div
      className={cn(
        "animate-fade-in rounded-[2.25rem] p-6 opacity-0 shadow-xl shadow-slate-900/5",
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      <Phone imgSrc={imgSrc} />
    </div>
  );
};

const ReviewGrid = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, {
    once: true,
    amount: 0.5,
  });
  const coloums = splitArray(PHONES, 3);
  const coloums1 = coloums[0];
  const coloums2 = coloums[1];
  const coloums3 = splitArray(coloums[2], 2);

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView ? (
        <>
          <ReviewColumn
            reviews={[...coloums1, ...coloums3.flat(), ...coloums2]}
            reviewClassName={(reviewIndex) =>
              cn({
                "md:hidden":
                  reviewIndex >= coloums1.length + coloums3[0].length,
                "lg:hidden": reviewIndex >= coloums1.length,
              })
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...coloums2, ...coloums3[1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= coloums2.length ? "lg:hidden" : ""
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={[...coloums3.flat()]}
            className="hidden md:block"
            msPerPixel={10}
          />
        </>
      ) : null}
    </div>
  );
};

const Reviews = () => {
  return (
    <>
      <MaxWidthWrapper className="relative max-w-5xl ">
        <Image
          aria-hidden="true"
          src={"/what-people-are-buying.png"}
          alt="What-people-are-buying"
          width={100}
          height={100}
          className="absolute select-none hidden xl:block -left-32 top-1/3"
        />

        <ReviewGrid />
      </MaxWidthWrapper>
    </>
  );
};
export default Reviews;
