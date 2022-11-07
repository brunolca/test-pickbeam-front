import clsx from "clsx";
import Link from "next/link";
import { DecorationLine } from "./decoration-line";
import { ExternalLink } from "./svg";

export interface BlueCardProps {
  Icon?: React.FC;
  i: number;
  title: string;
  description: string;
  href: string;
}

export function BlueCard({ i, description, Icon, title, href }: BlueCardProps) {
  return (
    <li
      className={clsx(
        "group relative m-4 h-[380px] overflow-y-hidden p-8 text-white",
        backgroundVarient(i)
      )}
    >
      <DecorationLine color="light" />
      <div className="pt-4">
        <p className="text-sm transition duration-[400ms] md:-translate-y-64 md:group-hover:-translate-y-0">
          {description}
        </p>
      </div>
      <div className="absolute bottom-0 pb-8">
        <h3 className="relative block w-[180px] pb-8 text-[28px] leading-none transition duration-300 md:pb-2 md:group-hover:-translate-y-8">
          {title}
          {Icon && (
            <div className="absolute -top-12 -right-6 h-10 w-10">
              <Icon />
            </div>
          )}
        </h3>
      </div>
      <Link
        href={href}
        className="group/link absolute bottom-0 mb-8 font-semibold tracking-[4px] transition duration-300 md:opacity-0 md:group-hover:opacity-100"
      >
        En savoir plus
        <ExternalLink className="absolute -right-5 -top-1 w-5 transition-all duration-200 group-hover/link:-top-2 group-hover/link:-right-6" />
      </Link>
    </li>
  );
}

function backgroundVarient(i: number) {
  const backgroundVarients = [
    "bg-primary-200",
    "bg-primary-300",
    "bg-primary-400",
    "bg-primary-500",
    "bg-primary-600",
  ];

  return backgroundVarients[i % (backgroundVarients.length - 1)];
}
