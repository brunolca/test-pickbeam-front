import clsx from "clsx";
import Link from "next/link";
import { Cart, Chip, ExternalLink, Globe } from "../svg";
import { DecorationLine } from "../decoration-line";
import { Section } from "../section";

export function Solutions() {
  return (
    <Section theme="light">
      <div className="pt-4 md:flex">
        <span className="text-lg md:basis-1/3">Nos solutions</span>
        <div className="md:basis-2/3">
          <h2 className="pt-4 text-[2.4rem] font-bold leading-none">
            Des solutions web performantes et innovantes pour les entreprises
            ambitieuses
          </h2>
          <div className="h-2"></div>
          <p className="text-lg">
            Nous proposons différents services sur-mesure qui correspondent à
            vos objectifs. Dans toutes ces opportunités, nous avons à coeur de
            devenir votre partenaire digital privilégié. Notre rôle est d’être
            votre référent digital qui a pour devoir de vous expliquer,
            conseiller concevoir et former, bien au-delà de la durée du projet.
          </p>
        </div>
      </div>

      <ul className="grid gap-8 lg:grid-cols-3">
        <SolutionCard
          backgroundVarient="primary-200"
          ImageComponent={Globe}
          title="Site vitrine Jamstack"
          description="Votre site est le reflet de votre identité et de vos valeurs. Exploitez-les pour garder vos utilisateurs et en gagner de nouveaux grâce à une expérience utilisateur rapide, fluide et un SEO optimisé."
        />
        <SolutionCard
          backgroundVarient="primary-300"
          ImageComponent={Cart}
          title="Headless E-commerce"
          description="Toutes les millisecondes comptent dans le parcours de vente. Aucun compromis doit être fait sur la sécurité, la performance, l’UX ainsi que sur l’identité que vous souhaitez donner à votre e-shop."
        />
        <SolutionCard
          backgroundVarient="primary-400"
          ImageComponent={Chip}
          title="Progressive Web App"
          description="Offrez le meilleur des applications natives et de la technologie Web à portée de main de vos utilisateurs. Une PWA vous aidera à accélérer encore plus votre engagement client."
        />
      </ul>
    </Section>
  );
}

export interface SolutionCardProps {
  ImageComponent?: React.FC<{ className?: string }>;
  backgroundVarient: "primary-200" | "primary-300" | "primary-400";
  title: string;
  description: string;
}

export function SolutionCard({
  backgroundVarient,
  description,
  ImageComponent,
  title,
}: SolutionCardProps) {
  const liClasses = clsx(
    "group relative m-4 h-[380px] overflow-y-hidden p-8 text-white",
    {
      "bg-primary-200": backgroundVarient === "primary-200",
      "bg-primary-300": backgroundVarient === "primary-300",
      "bg-primary-400": backgroundVarient === "primary-400",
    }
  );

  return (
    <li className={liClasses}>
      <DecorationLine />
      <div className="pt-4">
        <p className="text-sm transition duration-[400ms] md:-translate-y-60 md:group-hover:-translate-y-0">
          {description}
        </p>
      </div>
      <div className="absolute bottom-0 pb-8">
        <h3 className="relative block w-[180px] pb-2 text-[28px] leading-none transition duration-300 md:group-hover:-translate-y-8">
          {title}
          {ImageComponent && (
            <ImageComponent className="absolute -top-12 -right-6 h-10 w-10" />
          )}
        </h3>
      </div>
      <Link
        href="/"
        className="group/link absolute bottom-0 mb-8 font-semibold tracking-[4px] transition duration-300 md:opacity-0 md:group-hover:opacity-100"
      >
        En savoir plus{" "}
        <ExternalLink className="absolute -right-5 -top-1 w-5 transition-all duration-200 group-hover/link:-top-2 group-hover/link:-right-6" />
      </Link>
    </li>
  );
}
