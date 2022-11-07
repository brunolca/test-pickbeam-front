import clsx from "clsx";
import Link from "next/link";

export interface ButtonProps {
  cta: string;
  href: string;
  theme: "dark" | "light" | "gray" | "accent";
}

export function Button({ cta, href, theme, ...props }: ButtonProps) {
  return (
    <Link
      href={""}
      className={clsx(
        "relative inline-block h-12 whitespace-nowrap rounded-full py-4 px-8 text-base font-bold leading-none",
        { "bg-accent-200 text-primary-800": theme === "dark" },
        { "bg-accent-300 text-primary-800": theme === "light" },
        { "bg-accent-300 text-primary-800": theme === "gray" },
        { "bg-primary-400 text-white": theme === "accent" }
      )}
      {...props}
    >
      {cta}
    </Link>
  );
}
