import clsx from "clsx";
import Image from "next/image";
import { SectionContainer } from "./section-container";
import { SectionHeroProps } from "./section-hero";

export function SectionHero1({
  title,
  subtitle,
  description,
  Button,
  theme,
  size,
  ...props
}: SectionHeroProps) {
  return (
    <SectionContainer theme={theme} size={size} {...props}>
      <div className="relative isolate">
        <p
          className={clsx(
            "letter pt-16 pb-4 text-sm uppercase tracking-[5.22px] lg:pt-[100px]",
            { "text-primary-100": theme === "dark" },
            { "text-primary-700": theme === "light" },
            { "text-primary-700": theme === "gray" },
            { "text-primary-800": theme === "accent" }
          )}
        >
          {subtitle}
        </p>
        <div className="lg:w-[70%]">
          <h1 className="pb-8 text-[2.4rem] font-bold leading-none md:text-7xl md:leading-none">
            {title}
          </h1>
          <p className="pb-8 text-xl">{description}</p>
        </div>
        {Button && <Button theme={theme} />}
        <div className="absolute right-0 top-24 bottom-0 -z-10 hidden w-1/2 object-contain md:block">
          <Image
            alt=""
            src="/hero_decoration.png"
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </SectionContainer>
  );
}
