import React, { Fragment } from "react";
import { ImageDecoration1 } from "./image-decoration-1";
import { ImageDecoration2 } from "./image-decoration-2";

const decorations = {
  "": ({ Image }: { Image: React.FC }) => <Image />,
  "1": ImageDecoration1,
  "2": ImageDecoration2,
};

type DecorationKeys = keyof typeof decorations;

export function resolveImageDecoration(kind: DecorationKeys = "") {
  return decorations[kind];
}
