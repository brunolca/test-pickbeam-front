import { Button } from "../button";
import { Section } from "../section";

export function Hero2() {
  return (
    <Section theme="dark">
      <div className="pt-4 md:flex md:py-12 md:pr-4">
        <h2 className="text-2xl font-bold md:pr-4">
          La Jamstack au service du produit
        </h2>
        <div>
          <p className="mb-8 text-lg md:w-3/5">
            La Jamstack n’est pas une technologie ou un produit. C’est une façon
            de penser qui fait avancer le Web, le rendant sécurisé, plus rapide
            et plus facile à faire évoluer.
          </p>
          <Button cta="Qu'est-ce que la Jamstack ?" />
        </div>
      </div>
      <div className="absolute bottom-0 right-0 h-[50px] w-[220px] bg-white"></div>
      <div className="absolute bottom-0 right-0 h-40 w-20 bg-white"></div>
      <div className="absolute bottom-40 right-20 h-20 w-20 bg-accent-300"></div>
    </Section>
  );
}
