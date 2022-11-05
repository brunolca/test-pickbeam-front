export interface SectionGridProps {
  title: string;
  subtitle?: string;
  description?: string;
  theme: "dark" | "light" | "gray" | "accent";
  GridComponents: Array<
    React.FC<{ theme: "dark" | "light" | "gray" | "accent"; i: number }>
  >;
  Image?: React.FC<{ theme: "dark" | "light" | "gray" | "accent" }>;
}
