import clsx from "clsx";

export interface DecorationLineProps {
  color?: "black" | "white";
}

export function DecorationLine({ color = "white" }: DecorationLineProps) {
  return (
    <div
      className={clsx(
        ["h-2 w-full border-t border-l bg-transparent"],
        { "border-white": color === "white" },
        { "border-primary-800": color === "black" }
      )}
    ></div>
  );
}
