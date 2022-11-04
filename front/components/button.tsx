import Link from "next/link";

export interface ButtonProps {
  cta: string;
}

export function Button({ cta }: ButtonProps) {
  return (
    <Link
      href={""}
      className="relative inline-block	 h-12 whitespace-nowrap rounded-full bg-accent-200 py-4 px-8 text-base font-bold leading-none text-primary-800"
    >
      {cta}
    </Link>
  );
}
