import clsx from "clsx";
import { DecorationLine } from "./decoration-line";

export interface SectionProps {
  theme?: "dark" | "light" | "gray" | "accent";
  size?: "large" | "normal";
  children: React.ReactNode;
}

export function Section({
  children,
  theme: color = "light",
  size = "normal",
}: SectionProps) {
  const sectionClasses = clsx(
    "relative px-4",

    // size variation
    {
      "py-8": size === "normal",
      "pt-24 pb-16": size === "large",
    },

    // color variation
    {
      "bg-primary-800 text-white": color === "dark",
      "bg-white text-primary-800": color === "light",
      "bg-gray-100 text-primary-800": color === "gray",
      "bg-accent-300 text-primary-700": color === "accent",
    }
  );

  const containerClasses = clsx("m-auto max-w-[1278px]", {
    "lg:my-8": size === "large",
  });

  return (
    <section className={sectionClasses}>
      <div className={containerClasses}>
        <DecorationLine color={color} />
        {children}
      </div>
    </section>
  );
}
