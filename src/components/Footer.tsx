import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Separator } from "./ui/separator";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative h-20">
      <Separator className="w-full" />
      <MaxWidthWrapper>
        <footer>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <div className="flex justify-center  sm:justify-start">
                <div className="flex  items-center space-x-2">
                  <Link href={"/"} className="flex z-40 text-2xl font-semibold">
                    Case <span className="text-green-600 ">X</span>
                  </Link>
                </div>
              </div>

              <p className="mt-4 font-semibold text-center text-sm  lg:mt-0 lg:text-right">
                Copyright{" "}
                <span className="hover:underline dark:text-yellow-300 text-yellow-600 ">
                  <Link href={"https://github.com/StarDust130"} target="_blank">
                    {" "}
                    StarDust
                  </Link>
                </span>
                🌟&copy; {year}. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </MaxWidthWrapper>
    </footer>
  );
};
export default Footer;
