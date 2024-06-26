import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { BadgePlus, LogIn, ShieldCheck } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = async() => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const isAdmin = user?.email == process.env.ADMIN_EMAIL;

  return (
    <nav className="sticky z-[100] h-14 insert-x-0 top-0 w-full border-b border-gray-200  backdrop-blur-lg transition-all ">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href={"/"} className="flex z-40 font-semibold">
            Case <span className="text-green-600 ">X</span>
          </Link>

          <div className="h-full flex items-center space-x-4">
            {user ? (
              <>
                <Link
                  href={"/api/auth/logout"}
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Sign out
                </Link>
                {isAdmin ? (
                  <Link
                    href={"/api/auth/logout"}
                    className={buttonVariants({
                      size: "sm",
                      className: "items-center gap-1",
                    })}
                  >
                    <ShieldCheck color="white" size={18} />
                    Dashboard
                  </Link>
                ) : null}
                <div className="h-8 w-px bg-zinc-200 hidden sm:block" />
                <Link
                  href={"/configure/upload"}
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden font-normal sm:flex items-center gap-1",
                    variant: "outline",
                  })}
                >
                  <span className="flex gap-1 justify-center items-center">
                    <BadgePlus color="gray" size={18} />
                    Create case
                  </span>
                </Link>
              </>
            ) : (
              <>
                <Link
                  href={"/api/auth/register"}
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Sign up
                </Link>
                <Link
                  href={"/api/auth/login"}
                  className={buttonVariants({
                    size: "sm",
                    className: "items-center gap-1",
                  })}
                >
                  <LogIn color="white" size={15} />
                  Login in
                </Link>

                <div className="h-8 w-px bg-zinc-200 hidden sm:block" />

                <Link
                  href={"/configure/upload"}
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden font-normal sm:flex items-center gap-1",
                    variant: "outline",
                  })}
                >
                  <span className="flex gap-1 justify-center items-center">
                    <BadgePlus color="gray" size={18} />
                    Create case
                  </span>
                </Link>
              </>
            )}
            <ModeToggle />
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};
export default Navbar;
