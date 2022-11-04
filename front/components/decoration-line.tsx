import clsx from "clsx";

export interface DecorationLineProps {
  theme?: "dark" | "light" | "gray" | "accent";
}

export function DecorationLine({ theme = "light" }: DecorationLineProps) {
  return (
    <div
      className={clsx("h-2 w-full border-t border-l bg-transparent", {
        "border-white": theme === "dark",
        "border-primary-800": theme !== "dark",
      })}
    ></div>
  );
}
