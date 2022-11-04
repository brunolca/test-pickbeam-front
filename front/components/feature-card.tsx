import { DecorationLine } from "./decoration-line";

export interface FeatureCardProps {
  ImageComponent?: React.FC<{ className?: string }>;
  BackgroundImageComponent?: React.FC<{ className?: string }>;
  title: string;
  description: string;
  theme: "dark" | "light" | "gray" | "accent";
}

export function FeatureCard({
  BackgroundImageComponent,
  ImageComponent,
  description,
  title,
  theme,
}: FeatureCardProps) {
  return (
    <li className="relative isolate">
      <DecorationLine theme={theme} />
      <div className="flex justify-between py-4">
        <h3 className="text-[28px] leading-none">{title}</h3>
        {ImageComponent && (
          <ImageComponent className="flex h-9 w-9 content-center justify-around" />
        )}
      </div>
      <p className="text-sm">{description}</p>
      {BackgroundImageComponent && (
        <div className="absolute top-2 -z-10 inline-block h-[200px] w-[200px]">
          <BackgroundImageComponent />
        </div>
      )}
    </li>
  );
}
