import { AnimatedTooltipPreview } from "@/components/AnimatedTooltipPreview";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import { Check, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52 ">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4 ">
            <div className="relative mx-auto text-center lg:text-left flex flex-col item-center lg:item-start   ">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block ">
                <Image
                  src="/snake-1.png"
                  width={100}
                  height={100}
                  alt="snake"
                  className="w-full"
                />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight  text-5xl md:text-6xl lg:text-7xl">
                Your Image on a{" "}
                <Link href={"/configure/upload"}>
                  <span className="bg-green-600 px-2 rounded-3xl text-white  ">
                    Custom
                  </span>
                </Link>
                Phone Case{" "}
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center text-balance md:text-wrap ">
                Capture your favorite moments with your own,{" "}
                <span className="font-semibold">one-of-one</span> phone case.
                <br />
                <span className="font-semibold">Case</span>
                <span className="text-green-600 font-semibold">X</span> allows
                you to protect your memories , not just your phone case.
              </p>
              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600 " />
                    High-quailty, durable material
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600 " />5 year
                    print guarantee 😇
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600 " />
                    Modern iPhone models supported
                  </li>
                </div>
              </ul>
              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <AnimatedTooltipPreview />
                </div>
                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <StarIcon className="h-4 w-4 text-green-600 fill-green-600" />
                    <StarIcon className="h-4 w-4 text-green-600 fill-green-600" />
                    <StarIcon className="h-4 w-4 text-green-600 fill-green-600" />
                    <StarIcon className="h-4 w-4 text-green-600 fill-green-600" />
                    <StarIcon className="h-4 w-4 text-green-600 fill-green-600" />
                  </div>
                  <p>
                    <span className="font-semibold">130k+ </span>Happy Customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-0 h-fit ">
            <div className="relative md:max-w-xl  ">
              <Image
                src={"/your-image.png"}
                alt="Your Image"
                width={100}
                height={100}
                className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block pointer-events-none lg:hidden xl:block "
              />
              <Image
                src={"/line.png"}
                alt="Your Image"
                width={100}
                height={100}
                className="absolute w-20  -left-6 -bottom-6 select-none"
              />
              <Phone className="w-[250px]" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
