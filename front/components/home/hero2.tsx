import { Button } from "../button";
import { SectionContainer } from "../section/section-container";
import { SectionHero2 } from "../section/section-hero-2";

export function Hero2() {
  return (
    <SectionHero2
      title="La Jamstack au service du produit"
      description="La Jamstack n’est pas une technologie ou un produit. C’est une façon de penser qui fait avancer le Web, le rendant sécurisé, plus rapide et plus facile à faire évoluer."
      Button={({ theme }) => (
        <Button cta="Qu'est-ce que la Jamstack ?" theme={theme} />
      )}
      theme="accent"
      size="normal"
    />
  );
}
