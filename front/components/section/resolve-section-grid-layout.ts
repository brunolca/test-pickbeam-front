import { SectionGridFullWidthThreeColumns } from "./section-grid-full-width-3-columns";
import { SectionGridFullWidthFourColumns } from "./section-grid-full-width-4-columns";
import { SectionGridLeftImage } from "./section-grid-left-image";
import { SectionGridRightImage } from "./section-grid-right-image";

const layouts = {
    rightImage: SectionGridRightImage,
    leftImage: SectionGridLeftImage,
    fullWidthThreeColumns: SectionGridFullWidthThreeColumns,
    fullWidthFourColumns: SectionGridFullWidthFourColumns,
};

type LayoutKeys = keyof typeof layouts

export function resolveSectionGridLayout(kind: LayoutKeys) {
    return layouts[kind]
}