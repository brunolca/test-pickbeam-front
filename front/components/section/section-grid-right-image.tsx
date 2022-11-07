import { SectionContainer } from "./section-container";
import { SectionGridProps } from "./section-grid";
import clsx from "clsx";

export function SectionGridRightImage({
  description,
  GridComponents,
  Image,
  subtitle,
  theme,
  title,
  ...props
}: SectionGridProps) {
  return (
    <SectionContainer theme={theme} {...props}>
      <div
        className={clsx(
          "pt-4 md:w-2/3",
          { "text-white": theme === "dark" },
          { "text-primary-800": theme === "light" },
          { "text-primary-800": theme === "gray" },
          { "text-primary-800": theme === "accent" }
        )}
      >
        <h2 className="pt-4 text-[2.4rem] font-bold md:pt-0">{subtitle}</h2>
        <div className="h-4"></div>
        <p className="text-lg">{title}</p>
      </div>
      <div className="pt-[68px] md:flex">
        <ul className="grid gap-8 md:mr-8 md:basis-2/3 lg:grid-cols-2">
          {GridComponents.map((GridComponent, i) => (
            <GridComponent key={i} i={i} theme={theme} />
          ))}
        </ul>
        <div className="relative hidden md:block md:basis-1/3">
          {Image && <Image theme={theme} />}
        </div>
      </div>
    </SectionContainer>
  );
}
