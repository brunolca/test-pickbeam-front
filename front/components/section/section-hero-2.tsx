import clsx from "clsx";
import { SectionContainer } from "./section-container";
import { SectionHeroProps } from "./section-hero";

export function SectionHero2({
  title,
  subtitle,
  description,
  Button,
  theme,
  size,
}: SectionHeroProps) {
  return (
    <SectionContainer theme={theme} size={size}>
      <div className="pt-4 md:flex md:py-12 md:pr-4">
        <h2 className="text-2xl font-bold md:pr-4">{title} </h2>
        <div>
          <p className="mb-8 text-lg md:w-3/5">{description}</p>
          {Button && <Button theme={theme} />}
        </div>
        <div className="hidden md:block">
          <div
            className={clsx(
              "absolute bottom-0 right-0 h-[50px] w-[220px]",
              { "bg-white": theme === "dark" },
              { "bg-primary-800": theme === "light" },
              { "bg-primary-800": theme === "gray" },
              { "bg-white": theme === "accent" }
            )}
          ></div>
          <div
            className={clsx(
              "absolute bottom-0 right-0 h-40 w-20",
              { "bg-white": theme === "dark" },
              { "bg-primary-800": theme === "light" },
              { "bg-primary-800": theme === "gray" },
              { "bg-white": theme === "accent" }
            )}
          ></div>
          <div
            className={clsx(
              "absolute bottom-40 right-20 h-20 w-20",
              { "bg-accent-300": theme === "dark" },
              { "bg-accent-300": theme === "light" },
              { "bg-accent-300": theme === "gray" },
              { "bg-primary-400": theme === "accent" }
            )}
          ></div>
        </div>
      </div>
    </SectionContainer>
  );
}
