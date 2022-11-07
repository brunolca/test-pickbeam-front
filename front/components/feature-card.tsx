import clsx from "clsx";
import { DecorationLine } from "./decoration-line";

export interface FeatureCardProps {
  Icon?: React.FC<any>;
  Background?: React.FC;
  title: string;
  description: string;
  theme: "dark" | "light" | "gray" | "accent";
}

export function FeatureCard({
  Background,
  Icon,
  description,
  title,
  theme,
  ...props
}: FeatureCardProps) {
  return (
    <li className="relative isolate" {...props}>
      <DecorationLine color={theme === "dark" ? "light" : "dark"} />
      <div className="flex items-end justify-between py-4">
        <h3 className="text-[28px] leading-none">{title}</h3>
        {Icon && (
          <Icon
            className={clsx(
              "flex h-9 w-9 content-center justify-around",
              { "text-white": theme === "dark" },
              { "text-primary-800": theme === "light" },
              { "text-primary-800": theme === "gray" },
              { "text-primary-800": theme === "accent" }
            )}
          />
        )}
      </div>
      <p className="text-sm">{description}</p>
      {Background && (
        <div
          className={clsx(
            "absolute top-2 -z-10 inline-block h-[200px] w-[200px]",
            { "text-primary-500": theme === "dark" },
            { "text-primary-200": theme === "light" },
            { "text-primary-100": theme === "gray" },
            { "text-white": theme === "accent" }
          )}
        >
          <Background />
        </div>
      )}
    </li>
  );
}
