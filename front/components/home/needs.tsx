import { Needs1, Needs2, Needs3, Needs4 } from "../svg";
import Link from "next/link";
import { SectionGridFullWidthFourColumns, SectionGridProps } from "../section";
import { IconCard } from "../icon-card";

const NeedsComponents: SectionGridProps["GridComponents"] = [
  ({ theme }) => (
    <IconCard
      Icon={Needs1}
      firstLine="Je suis"
      secondLine="PORTEUR DE PROJET"
      href="/"
      theme={theme}
    />
  ),
  ({ theme }) => (
    <IconCard
      Icon={Needs2}
      firstLine="J'ai une"
      secondLine="STARTUP EN CROISSANCE"
      href="/"
      theme={theme}
    />
  ),
  ({ theme }) => (
    <IconCard
      Icon={Needs3}
      firstLine="Je veux faire décoller les ventes"
      secondLine="DE MA BOUTIQUE EN LIGNE"
      href="/"
      theme={theme}
    />
  ),
  ({ theme }) => (
    <IconCard
      Icon={Needs4}
      firstLine="Je souhaite améliorer les"
      secondLine="PERFORMANCES DE MON SITE"
      href="/"
      theme={theme}
    />
  ),
];

export function Needs() {
  return (
    <SectionGridFullWidthFourColumns
      title="Qui êtes-vous ?"
      subtitle="Votre Besoin"
      GridComponents={NeedsComponents}
      theme="gray"
    />
  );
}
