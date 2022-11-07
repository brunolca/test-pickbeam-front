import clsx from "clsx";
import { DecorationLine } from "../decoration-line";

export interface SectionContainerProps {
  theme?: "dark" | "light" | "gray" | "accent";
  size?: "large" | "normal";
  children: React.ReactNode;
}

export function SectionContainer({
  children,
  theme = "light",
  size = "normal",
  ...props
}: SectionContainerProps) {
  return (
    <section
      className={clsx(
        "relative px-4",
        // size variation
        {
          "py-8": size === "normal",
          "pt-24 pb-16": size === "large",
        },
        // color variation
        {
          "bg-primary-800 text-white": theme === "dark",
          "bg-white text-primary-800": theme === "light",
          "bg-gray-100 text-primary-800": theme === "gray",
          "bg-accent-300 text-primary-700": theme === "accent",
        }
      )}
      {...props}
    >
      <div
        className={clsx("m-auto max-w-[1278px]", {
          "lg:my-8": size === "large",
        })}
      >
        <DecorationLine color={theme === "dark" ? "light" : "dark"} />
        {children}
      </div>
    </section>
  );
}
