import Image from "next/image";
import { Gauge, Grow, Leaf, LookUp, Server } from "../svg";
import { DecorationLine } from "./decoration-line";
import { Section } from "./section";

export function Benefits() {
  return (
    <Section>
      <div className="py-4 md:flex">
        <span className="text-lg md:basis-1/3">Avantages</span>
        <h2 className="pt-4 text-[2.4rem] font-bold leading-none md:basis-2/3 md:pt-0">
          Comment la Jamstack vous aide à développer votre entreprise ?
        </h2>
      </div>

      <div className="md:flex">
        <div className="mr-8 hidden md:block md:basis-1/3">
          <div className="relative h-full w-full">
            <Image
              alt=""
              src="/umberto.png"
              fill
              style={{ objectFit: "cover" }}
            />
            <div className="absolute top-0 right-0 h-[180px] w-[75px] bg-white"></div>
            <div className="absolute bottom-0 right-0 h-[65px] w-[130px] bg-white"></div>
            <div className="absolute top-[180px] right-[65px] h-[65px] w-[65px] bg-accent-300"></div>{" "}
          </div>
        </div>
        <ul className="grid gap-8 py-4 md:basis-2/3  md:grid-cols-2">
          <BenefitCard
            ImageComponent={Gauge}
            title="Rapide"
            description="Nous n’utilisons pas de bases de données donc, pas de temps de consommation perdus avec des requêtes multiples. Les pages s’affichent en moins d’1 seconde.  
Vos utilisateurs ne sont pas frustrés d’attendre."
          />
          <BenefitCard
            ImageComponent={LookUp}
            title="Meilleur Seo"
            description="Google adore les sites qui se chargent vite ce qui les rends mieux visibles de vos prospects. Utiliser un site Web en Jamstack signifie un contrôle total sur le contenu, la mise en page et le référencement du site."
          />
          <BenefitCard
            ImageComponent={Grow}
            title="Évolutif"
            description="Le site évolue à la même vitesse que votre projet. Il n’y a pas de limite technique et design à vos idées. L’architecture s'adapte automatiquement, sans contraintes techniques bloquantes."
          />
          <BenefitCard
            ImageComponent={Server}
            title="Stable"
            description="Votre site tombe régulièrement à cause d’un traffic élevé ? Avec la Jamstack, et l’utilisation de CDN, plus aucun problème de limitation de traffic"
          />
          <BenefitCard
            ImageComponent={() => null}
            title="Sécurisé"
            description="73% des sites Wordress ont des failles de sécurité à cause des plugs-in. Les sites statiques sont des forteresses ultra-sécurisés qui vous font économiser de l’argent sur la sécurité."
          />
          <BenefitCard
            ImageComponent={Leaf}
            title="Éco-Responsable"
            description="Les pages statiques font parties des pages les moins énergivores du web. Il n’y a pas de bases de données ou d'autres éléments qui sont consommés. L'expérience utilisateur est idéale."
          />
        </ul>
      </div>
    </Section>
  );
}

export interface BenefitCardProps {
  ImageComponent?: React.FC<{ className?: string }>;
  title: string;
  description: string;
}

export function BenefitCard({
  description,
  ImageComponent,
  title,
}: BenefitCardProps) {
  return (
    <li>
      <DecorationLine color="black" />
      <div className="flex justify-between py-4">
        <h3 className="text-[28px]">{title}</h3>
        {ImageComponent && <ImageComponent className="h-9 w-9" />}
      </div>
      <p className="text-sm">{description}</p>
    </li>
  );
}
