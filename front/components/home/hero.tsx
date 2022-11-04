import Image from "next/image";
import { Button } from "../button";
import { Section } from "../section";

export function Hero() {
  return (
    <Section theme="dark" size="large">
      <div className="relative isolate">
        <p className="letter pt-16 pb-4 text-sm tracking-[5.22px] text-primary-100 lg:pt-[100px]">
          AGENCE JAMSTACK À TOULOUSE
        </p>
        <div className="lg:w-[70%]">
          <h1 className="pb-8 text-[2.4rem] font-bold leading-none md:text-7xl md:leading-none">
            L'excellence du web au service de votre croissance
          </h1>
          <p className="pb-8 text-xl">
            Entourez-vous d’une équipe performante à votre écoute pour vous
            accompagner du design au développement de votre solution digitale.
          </p>
        </div>
        <Button cta="Passer à l'action"></Button>
        <div className="absolute right-0 top-24 bottom-0 -z-10 hidden w-1/2 object-contain md:block">
          <Image
            alt=""
            src="/hero_decoration.png"
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </Section>
  );
}
