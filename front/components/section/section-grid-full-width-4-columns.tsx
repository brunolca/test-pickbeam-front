import clsx from "clsx";
import { SectionContainer } from "./section-container";
import { SectionGridProps } from "./section-grid";

export function SectionGridFullWidthFourColumns({
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
        <h2 className="pt-4 text-[2.4rem] font-bold leading-none md:basis-2/3 md:pt-0">
          {title}
        </h2>
      </div>
      <ul className="grid gap-8 pt-4 md:grid-cols-2 lg:grid-cols-4">
        {GridComponents.map((GridComponent, i) => (
          <GridComponent key={i} i={i} theme={theme} />
        ))}
      </ul>
    </SectionContainer>
  );
}
