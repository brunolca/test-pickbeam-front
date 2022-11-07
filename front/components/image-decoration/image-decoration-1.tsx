import clsx from "clsx";
import { ImageDecorationProps } from "./image-decoration";

export function ImageDecoration1({ theme, Image }: ImageDecorationProps) {
  return (
    <div className="relative h-full w-full">
      <Image />
      <div
        className={clsx(
          "absolute top-0 right-0 h-[180px] w-[75px]",
          { "bg-primary-800": theme === "dark" },
          { "bg-white": theme === "light" },
          { "bg-gray-100": theme === "gray" },
          { "bg-accent-300": theme === "accent" }
        )}
      ></div>
      <div
        className={clsx(
          "absolute bottom-0 right-0 h-[65px] w-[130px]",
          { "bg-primary-800": theme === "dark" },
          { "bg-white": theme === "light" },
          { "bg-gray-100": theme === "gray" },
          { "bg-accent-300": theme === "accent" }
        )}
      ></div>
      <div
        className={clsx(
          "absolute top-[180px] right-[65px] h-[65px] w-[65px]",
          { "bg-accent-300": theme === "dark" },
          { "bg-accent-300": theme === "light" },
          { "bg-accent-300": theme === "gray" },
          { "bg-primary-400": theme === "accent" }
        )}
      ></div>
    </div>
  );
}
