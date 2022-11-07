import { BlueCard } from "../blue-card";
import { SectionGridFullWidthThreeColumns, SectionGridProps } from "../section";
import { Cart, Chip, Globe } from "../svg";

const SolutionsComponents: SectionGridProps["GridComponents"] = [
  ({ theme, i }) => (
    <BlueCard
      i={i}
      Icon={Globe}
      title="Site vitrine Jamstack"
      href="/"
      description="Votre site est le reflet de votre identité et de vos valeurs. Exploitez-les pour garder vos utilisateurs et en gagner de nouveaux grâce à une expérience utilisateur rapide, fluide et un SEO optimisé."
    />
  ),
  ({ theme, i }) => (
    <BlueCard
      i={i}
      Icon={Cart}
      title="Headless E-commerce"
      href="/"
      description="Toutes les millisecondes comptent dans le parcours de vente. Aucun compromis doit être fait sur la sécurité, la performance, l’UX ainsi que sur l’identité que vous souhaitez donner à votre e-shop."
    />
  ),
  ({ theme, i }) => (
    <BlueCard
      i={i}
      Icon={Chip}
      title="Progressive Web App"
      href="/"
      description="Offrez le meilleur des applications natives et de la technologie Web à portée de main de vos utilisateurs. Une PWA vous aidera à accélérer encore plus votre engagement client."
    />
  ),
];

export function Solutions() {
  return (
    <SectionGridFullWidthThreeColumns
      title="Des solutions web performantes et innovantes pour les entreprises ambitieuses"
      subtitle="Nos solutions"
      description="Nous proposons différents services sur-mesure qui correspondent à vos objectifs. Dans toutes ces opportunités, nous avons à coeur de devenir votre partenaire digital privilégié. Notre rôle est d’être votre référent digital qui a pour devoir de vous expliquer, conseiller concevoir et former, bien au-delà de la durée du projet."
      GridComponents={SolutionsComponents}
      theme="light"
    />
  );
}
