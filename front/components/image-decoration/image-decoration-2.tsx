import clsx from "clsx";
import { Squares } from "../svg";
import { ImageDecorationProps } from "./image-decoration";

export function ImageDecoration2({ theme, Image }: ImageDecorationProps) {
  return (
    <div className="relative h-full w-full">
      <Image />
      <Squares
        className={clsx(
          "absolute -top-[68px] right-2 h-[60px] w-[100px]",
          { "text-primary-300": theme === "dark" },
          { "text-primary-800": theme === "light" },
          { "text-primary-800": theme === "gray" },
          { "text-primary-800": theme === "accent" }
        )}
      />
      <Squares
        className={clsx(
          "absolute top-2 right-2 h-[60px] w-[100px] -scale-y-100",
          { "text-primary-800": theme === "dark" },
          { "text-white": theme === "light" },
          { "text-gray-100": theme === "gray" },
          { "text-accent-300": theme === "accent" }
        )}
      />
      <div
        className={clsx(
          "absolute bottom-0 left-0 h-[75px] w-[180px]",
          { "bg-primary-800": theme === "dark" },
          { "bg-white": theme === "light" },
          { "bg-gray-100": theme === "gray" },
          { "bg-accent-300": theme === "accent" }
        )}
      ></div>
      <div
        className={clsx(
          "absolute bottom-0 left-0 h-[180px] w-[65px]",
          { "bg-primary-800": theme === "dark" },
          { "bg-white": theme === "light" },
          { "bg-gray-100": theme === "gray" },
          { "bg-accent-300": theme === "accent" }
        )}
      ></div>
      <div
        className={clsx(
          "absolute bottom-[75px] left-[170px] h-[65px] w-[65px]",
          { "bg-accent-300": theme === "dark" },
          { "bg-accent-300": theme === "light" },
          { "bg-accent-300": theme === "gray" },
          { "bg-primary-400": theme === "accent" }
        )}
      ></div>
    </div>
  );
}
