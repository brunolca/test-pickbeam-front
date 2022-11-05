import clsx from "clsx";

export interface DecorationLineProps {
  color?: "dark" | "light";
}

export function DecorationLine({ color = "light" }: DecorationLineProps) {
  return (
    <div
      className={clsx("h-2 w-full border-t border-l bg-transparent", {
        "border-white": color === "light",
        "border-primary-800": color === "dark",
      })}
    ></div>
  );
}
