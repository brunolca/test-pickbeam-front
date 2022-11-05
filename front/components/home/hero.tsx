import { Button } from "../button";
import { SectionHero1 } from "../section/section-hero-1";

export function Hero() {
  return (
    <SectionHero1
      title="L'excellence du web au service de votre croissance"
      subtitle="AGENCE JAMSTACK À TOULOUSE"
      description="Entourez-vous d’une équipe performante à votre écoute pour vous accompagner du design au développement de votre solution digitale."
      Button={({ theme }) => <Button cta="Passer à l'action" theme={theme} />}
      theme="dark"
      size="large"
    />
  );
}
