import Link from "next/link";

export interface IconCardProps {
  Icon: React.FC;
  firstLine: string;
  secondLine: string;
  href: string;
  theme: "dark" | "light" | "gray" | "accent";
}

export function IconCard({
  Icon,
  firstLine,
  href,
  secondLine,
  theme,
  ...props
}: IconCardProps) {
  return (
    <Link
      {...props}
      href={href}
      as="li"
      className="relative flex flex-col items-center overflow-hidden p-4 after:absolute after:inset-0 after:block after:transition-colors after:duration-200 after:hover:bg-black/10"
    >
      <div className="relative mb-4 h-[150px] w-[150px] pb-4">
        <Icon />
      </div>
      <p className="text-center text-sm">{firstLine}</p>
      <p className="text-center text-sm uppercase text-primary-400">
        {secondLine}
      </p>
    </Link>
  );
}
