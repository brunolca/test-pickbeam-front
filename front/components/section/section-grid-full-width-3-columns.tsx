import clsx from "clsx";
import { SectionContainer } from "./section-container";
import { SectionGridProps } from "./section-grid";

export function SectionGridFullWidthThreeColumns({
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
          "py-4 md:flex",
          { "text-white": theme === "dark" },
          { "text-primary-800": theme === "light" },
          { "text-primary-800": theme === "gray" },
          { "text-primary-800": theme === "accent" }
        )}
      >
        <span className="text-lg md:basis-1/3">{subtitle}</span>
        <div className="md:basis-2/3">
          <h2 className="pt-4 text-[2.4rem] font-bold leading-none md:pt-0">
            {title}
          </h2>
          <p className="pt-2 text-lg">{description}</p>
        </div>
      </div>
      <ul className="grid gap-8 lg:grid-cols-3">
        {GridComponents.map((GridComponent, i) => (
          <GridComponent key={i} i={i} theme={theme} />
        ))}
      </ul>
    </SectionContainer>
  );
}
