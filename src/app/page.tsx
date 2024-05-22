import { AnimatedTooltipPreview } from "@/components/AnimatedTooltipPreview";
import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import Reviews from "@/components/Reviews";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Check, Star, StarIcon } from "lucide-react";
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
                className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block pointer-events-none lg:hidden xl:block  dark:invert"
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

      {/* Value Proposition Section */}

      <section className=" py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt- tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900 dark:text-gray-300">
              What our{" "}
              <span className="relative px-2">
                customer{" "}
                <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500 " />
              </span>{" "}
              say
            </h2>
            <Image
              src={"/snake-2.png"}
              alt="Snake Image"
              width={100}
              height={100}
              className="w-24 order-0 lg:order-2 pointer-events-none"
            />
          </div>

          <div className="mx-auto grid max-w-2xl grid-col-1 px-4 lg:mx-0 lg:max-w-none lg:grid-col-2 gap-y-16">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
              </div>
              <div className="text-lg leading-8">
                <p className="text-center">
                  &quot;I absolutely love my new phone case! It&apos;s not just
                  a case, it&apos;s a{" "}
                  <span className="p-0.5 font-bold bg-green-600 rounded-md text-white">
                    statement piece.
                  </span>
                  The unique design always gets compliments, and it perfectly
                  balances style with protection. CaseX has truly outdone
                  themselves!&quot;
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <Image
                  src={"/users/user-1.png"}
                  alt="user-1"
                  className="rounded-full h-12 w-12  object-cover"
                  width={100}
                  height={100}
                />
                <div className="flex flex-col">
                  <p className="font-semibold">John</p>
                  <div className="flex gap-1.5 items-center ">
                    <Check className="h-5 w-5 stroke-[3px] shrink-0 text-green-600 " />
                    <p className="text-sm">Verifed Purchase</p>
                  </div>
                </div>
              </div>
            </div>

            {/*  Second User Review */}
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
              </div>
              <div className="text-lg leading-8">
                <p className="text-center">
                  &quot; Obsessed with my new phone case! It&apos;s not your
                  average cover—it&apos;s a total{" "}
                  <span className="p-0.5 font-bold bg-green-600 rounded-md text-white">
                    game-changer.
                  </span>{" "}
                  Cool design, durable protection, and major style points.
                  Thanks, CaseX! 📱&quot;
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <Image
                  src={"/users/user-2.png"}
                  alt="user-2 image"
                  className="rounded-full h-12 w-12  object-cover"
                  width={100}
                  height={100}
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Natasha</p>
                  <div className="flex gap-1.5 items-center ">
                    <Check className="h-5 w-5 stroke-[3px] shrink-0 text-green-600 " />
                    <p className="text-sm">Verifed Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>

        <div className="pt-16">
          <Reviews />
        </div>
      </section>

      {/* Upload Now Section */}

      <section>
        <MaxWidthWrapper className="py-24">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="order-1 mt- tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900 dark:text-gray-300">
                Upload your photo & get{" "}
                <span className="relative rounded-3xl bg-green-600 px-2   text-white ">
                  your own case{" "}
                </span>{" "}
                now
              </h2>
            </div>
          </div>

          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
              <Image
                src={"/arrow.png"}
                alt="arrow image"
                width={100}
                height={100}
                className="absolute top-[25rem] md:top-1/2  -translate-y-1/2 z-10  left-1/2 -translate-x-1/2 rotate-90 md:rotate-0 select-none"
              />
              <div className="relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset-900/10 lg:rounded-2xl ">
                <Image
                  src={"/horse.jpg"}
                  alt="horse image"
                  width={300}
                  height={300}
                  className="rounded-xl object-cover shadow-2xl  ring-1 ring-gray-900/10 h-full w-full"
                />
              </div>
              <Phone className="w-60" imgSrc="/horse_phone.jpg" />
            </div>
          </div>

          <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
            <li className="w-fit font-normal">
              <Check className="h-5 w-5 text-green-600 inline mr-1.5" />
              Premium silicone construction
            </li>
            <li className="w-fit font-normal">
              <Check className="h-5 w-5 text-green-600 inline mr-1.5" />
              Scratch- & fingerprint-resistant coating
            </li>
            <li className="w-fit font-normal">
              <Check className="h-5 w-5 text-green-600 inline mr-1.5" />
              Wireless charging compatible
            </li>
            <li className="w-fit font-normal">
              <Check className="h-5 w-5 text-green-600 inline mr-1.5" />
              5-year print warranty included
            </li>

            <div className="flex justify-center">
              <Link
                className={buttonVariants({
                  size: "lg",
                  className: "mx-auto mt-8",
                })}
                href="/configure/upload"
              >
                Create your case now <ArrowRight className="h-4 w-4 ml-1.5" />
              </Link>
            </div>
          </ul>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
