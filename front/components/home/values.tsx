import Image from "next/image";
import { Diamond, Flame, ShakeHands, Squares, Target } from "../svg";
import { NumberBackgroundImage } from "../number-background-image";
import { Section } from "../section";
import { FeatureCard } from "../feature-card";

export function Values() {
  return (
    <Section theme="accent">
      <div className="pt-4 text-primary-800 md:w-2/3">
        <h2 className="pt-4 text-[2.4rem] font-bold md:pt-0">Nos valeurs</h2>
        <div className="h-4"></div>
        <p className="text-lg">
          Voici les principes fondamentaux et les comportements qui ont le plus
          d’importance à nos yeux et qui régissent l’approche du travail au sein
          de Pickbeam
        </p>
      </div>
      <div className="pt-[68px] md:flex">
        <ul className="grid gap-8 md:mr-8 md:basis-2/3 lg:grid-cols-2">
          <FeatureCard
            theme="accent"
            BackgroundImageComponent={() => (
              <NumberBackgroundImage number={1} />
            )}
            ImageComponent={ShakeHands}
            title="Confiance"
            description="Nous croyons que la communication basée sur l’écoute, la sincérité et la simplicité est essentielle pour accompagner nos partenaires à dépasser leurs objectifs de croissance. La confiance est pour nous la base de travail essentielle pour une collaboration réussie. De l’implication et du résultat tout simplement."
          />
          <FeatureCard
            theme="accent"
            BackgroundImageComponent={() => (
              <NumberBackgroundImage number={2} />
            )}
            ImageComponent={Flame}
            title="Passion"
            description="Nous sommes avant tout des passionnés par le monde du web. Le digital est une quête sans fin qui appelle toujours plus au dépassement de soi. Chaque difficulté est un challenge qui permet de nous nourrir intellectuellement. On progresse tous ensemble et le partage fait parti de notre ADN pour ce tirer vers le haut tous ensemble."
          />
          <FeatureCard
            theme="accent"
            BackgroundImageComponent={() => (
              <NumberBackgroundImage number={3} />
            )}
            ImageComponent={Target}
            title="Ambition"
            description="Cela implique de prendre des initiatives, d’être créatif, saisir des opportunités, de se faire confiance et aussi d’être mis en confiance. Cela nécessite de se sentir responsable de l’entreprise et aussi de nos clients. Pour s’exprimer ainsi, cet esprit nécessite une organisation décentralisée avec un niveau juste d’autorité et une responsabilisation poussée."
          />
          <FeatureCard
            theme="accent"
            BackgroundImageComponent={() => (
              <NumberBackgroundImage number={4} />
            )}
            ImageComponent={Diamond}
            title="Excellence"
            description="La quête vers l’excellence, une valeur fondamentale pour nous et qui permet de transcender tous nos métiers. Elle se traduit par une recherche permanente de perfection, et d’amélioration continue. Nous trouvons du sens dans notre travail en apprenant toujours et en nous remettons en question pour offrir le meilleur à nos clients."
          />
        </ul>
        <div className="relative hidden md:block md:basis-1/3">
          <Image
            alt=""
            src="/umberto.png"
            fill
            style={{ objectFit: "cover" }}
          />
          <Squares className="absolute -top-[68px] right-2 h-[60px] w-[100px] text-primary-800" />
          <Squares className="absolute top-2 right-2 h-[60px] w-[100px] -scale-y-100 text-accent-300" />
          <div className="absolute bottom-0 left-0 h-[75px] w-[180px] bg-accent-300"></div>
          <div className="absolute bottom-0 left-0 h-[180px] w-[65px] bg-accent-300"></div>
          <div className="absolute bottom-[75px] left-[170px] h-[65px] w-[65px] bg-primary-400"></div>{" "}
        </div>
      </div>
    </Section>
  );
}
