import Image from "next/image";
import { Gauge, Grow, Leaf, LookUp, Server } from "../svg";
import { FeatureCard } from "../feature-card";
import { SectionGridLeftImage, SectionGridProps } from "../section";
import { ImageDecoration1 } from "../image-decoration/image-decoration-1";

const BenefitsComponents: SectionGridProps["GridComponents"] = [
  ({ theme }) => (
    <FeatureCard
      theme={theme}
      Icon={Gauge}
      title="Rapide"
      description="Nous n’utilisons pas de bases de données donc, pas de temps de consommation perdus avec des requêtes multiples. Les pages s’affichent en moins d’1 seconde.  
Vos utilisateurs ne sont pas frustrés d’attendre."
    />
  ),
  ({ theme }) => (
    <FeatureCard
      theme={theme}
      Icon={LookUp}
      title="Meilleur Seo"
      description="Google adore les sites qui se chargent vite ce qui les rends mieux visibles de vos prospects. Utiliser un site Web en Jamstack signifie un contrôle total sur le contenu, la mise en page et le référencement du site."
    />
  ),
  ({ theme }) => (
    <FeatureCard
      theme={theme}
      Icon={Grow}
      title="Évolutif"
      description="Le site évolue à la même vitesse que votre projet. Il n’y a pas de limite technique et design à vos idées. L’architecture s'adapte automatiquement, sans contraintes techniques bloquantes."
    />
  ),
  ({ theme }) => (
    <FeatureCard
      theme={theme}
      Icon={Server}
      title="Stable"
      description="Votre site tombe régulièrement à cause d’un traffic élevé ? Avec la Jamstack, et l’utilisation de CDN, plus aucun problème de limitation de traffic"
    />
  ),
  ({ theme }) => (
    <FeatureCard
      theme={theme}
      Icon={() => null}
      title="Sécurisé"
      description="73% des sites Wordress ont des failles de sécurité à cause des plugs-in. Les sites statiques sont des forteresses ultra-sécurisés qui vous font économiser de l’argent sur la sécurité."
    />
  ),
  ({ theme }) => (
    <FeatureCard
      theme={theme}
      Icon={Leaf}
      title="Éco-Responsable"
      description="Les pages statiques font parties des pages les moins énergivores du web. Il n’y a pas de bases de données ou d'autres éléments qui sont consommés. L'expérience utilisateur est idéale."
    />
  ),
];

export function Benefits() {
  return (
    <SectionGridLeftImage
      GridComponents={BenefitsComponents}
      Image={({ theme }) => (
        <ImageDecoration1
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
      title="Comment la Jamstack vous aide à développer votre entreprise ?"
      subtitle="Avantages"
      theme="light"
    />
  );
}
