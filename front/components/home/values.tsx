import Image from "next/image";
import { FeatureCard } from "../feature-card";
import { ImageDecoration2 } from "../image/image-decoration-2";
import { NumberBackgroundImage } from "../number-background-image";
import { SectionGridProps, SectionGridRightImage } from "../section";
import { Diamond, Flame, ShakeHands, Target } from "../svg";

const ValuesComponents: SectionGridProps["GridComponents"] = [
  ({ theme, i }) => (
    <FeatureCard
      theme={theme}
      BackgroundImageComponent={() => <NumberBackgroundImage number={i + 1} />}
      ImageComponent={ShakeHands}
      title="Confiance"
      description="Nous croyons que la communication basée sur l’écoute, la sincérité et la simplicité est essentielle pour accompagner nos partenaires à dépasser leurs objectifs de croissance. La confiance est pour nous la base de travail essentielle pour une collaboration réussie. De l’implication et du résultat tout simplement."
    />
  ),
  ({ theme, i }) => (
    <FeatureCard
      theme={theme}
      BackgroundImageComponent={() => <NumberBackgroundImage number={i + 1} />}
      ImageComponent={Flame}
      title="Passion"
      description="Nous sommes avant tout des passionnés par le monde du web. Le digital est une quête sans fin qui appelle toujours plus au dépassement de soi. Chaque difficulté est un challenge qui permet de nous nourrir intellectuellement. On progresse tous ensemble et le partage fait parti de notre ADN pour ce tirer vers le haut tous ensemble."
    />
  ),
  ({ theme, i }) => (
    <FeatureCard
      theme={theme}
      BackgroundImageComponent={() => <NumberBackgroundImage number={i + 1} />}
      ImageComponent={Target}
      title="Ambition"
      description="Cela implique de prendre des initiatives, d’être créatif, saisir des opportunités, de se faire confiance et aussi d’être mis en confiance. Cela nécessite de se sentir responsable de l’entreprise et aussi de nos clients. Pour s’exprimer ainsi, cet esprit nécessite une organisation décentralisée avec un niveau juste d’autorité et une responsabilisation poussée."
    />
  ),
  ({ theme, i }) => (
    <FeatureCard
      theme={theme}
      BackgroundImageComponent={() => <NumberBackgroundImage number={i + 1} />}
      ImageComponent={Diamond}
      title="Excellence"
      description="La quête vers l’excellence, une valeur fondamentale pour nous et qui permet de transcender tous nos métiers. Elle se traduit par une recherche permanente de perfection, et d’amélioration continue. Nous trouvons du sens dans notre travail en apprenant toujours et en nous remettons en question pour offrir le meilleur à nos clients."
    />
  ),
];

export function Values() {
  return (
    <SectionGridRightImage
      subtitle="Nos valeurs"
      title="Voici les principes fondamentaux et les comportements qui ont le plus
    d’importance à nos yeux et qui régissent l’approche du travail au sein
    de Pickbeam"
      Image={({ theme }) => (
        <ImageDecoration2
          theme={theme}
          Image={() => (
            <Image
              alt=""
              src="/umberto.png"
              fill
              style={{ objectFit: "cover" }}
            />
          )}
        />
      )}
      GridComponents={ValuesComponents}
      theme="accent"
    />
  );
}
