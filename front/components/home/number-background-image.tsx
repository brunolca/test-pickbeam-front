export interface NumberBackgroundImageProps {
  number: number;
}

export function NumberBackgroundImage({ number }: NumberBackgroundImageProps) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 200 210">
      <linearGradient
        id="gr-white-to-transparent"
        x1="0"
        y1="0"
        x2="100%"
        y2="0"
      >
        <stop stopColor="white" stopOpacity={1} offset="10%" />
        <stop stopColor="white" stopOpacity={0} offset="90%" />
      </linearGradient>
      <text
        x="0"
        y="200"
        fontSize="240"
        fontWeight="bold"
        className="fill-[url(#gr-white-to-transparent)] leading-none"
      >
        {number}
      </text>
    </svg>
  );
}
