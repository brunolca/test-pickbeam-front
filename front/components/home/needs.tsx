import { Needs1, Needs2, Needs3, Needs4 } from "../svg";
import { Section } from "./section";
import Link from "next/link";

export function Needs() {
  return (
    <Section color="gray">
      <div className="md: py-4 md:flex">
        <span className="text-lg md:basis-1/3">Votre Besoin</span>
        <h2 className="pt-4 text-[2.4rem] font-bold leading-none md:basis-2/3 md:pt-0">
          Qui êtes-vous ?
        </h2>
      </div>
      <ul className="lg: grid gap-8 pt-4 md:grid-cols-2 lg:grid-cols-4">
        <Persona
          ImageComponent={Needs1}
          firstLine="Je suis"
          secondLine="PORTEUR DE PROJET"
        />
        <Persona
          ImageComponent={Needs2}
          firstLine="J'ai une"
          secondLine="STARTUP EN CROISSANCE"
        />
        <Persona
          ImageComponent={Needs3}
          firstLine="Je veux faire décoller les ventes"
          secondLine="DE MA BOUTIQUE EN LIGNE"
        />
        <Persona
          ImageComponent={Needs4}
          firstLine="Je souhaite améliorer les"
          secondLine="PERFORMANCES DE MON SITE"
        />
      </ul>
    </Section>
  );
}

export interface PersonaProps {
  ImageComponent: React.FC;
  firstLine: string;
  secondLine: string;
}

export function Persona({
  ImageComponent,
  firstLine,
  secondLine,
}: PersonaProps) {
  return (
    <Link
      href="/"
      as="li"
      className="relative flex flex-col items-center overflow-hidden p-4 after:absolute after:inset-0 after:block after:transition-colors after:duration-200 after:hover:bg-black/10"
    >
      <div className="mb-4 h-[150px] w-[150px] pb-4">
        <ImageComponent />
      </div>
      <p className="text-center text-sm">{firstLine}</p>
      <p className="text-center text-sm uppercase text-primary-400">
        {secondLine}
      </p>
    </Link>
  );
}
