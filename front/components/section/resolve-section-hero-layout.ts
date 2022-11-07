import { SectionHero1 } from "./section-hero-1";
import { SectionHero2 } from "./section-hero-2";

const layouts = {
    "1": SectionHero1,
    "2": SectionHero2,
};

type LayoutKeys = keyof typeof layouts

export function resolveSectionHeroLayout(kind: LayoutKeys) {
    return layouts[kind]
}