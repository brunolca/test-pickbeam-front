export interface SectionHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  Button?: React.FC<{ theme: "dark" | "light" | "gray" | "accent" }>;
  theme: "dark" | "light" | "gray" | "accent";
  size: "normal" | "large";
}
