export type MultilinkStoryblok =
  | {
      cached_url?: string;
      linktype?: string;
      [k: string]: any;
    }
  | {
      id?: string;
      cached_url?: string;
      linktype?: "story";
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      linktype?: "asset" | "url";
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: "email";
      [k: string]: any;
    };

export interface BlueCardStoryblok {
  title?: string;
  description?: string;
  href?: MultilinkStoryblok;
  icon: string;
  _uid: string;
  component: "blueCard";
  [k: string]: any;
}

export interface ButtonStoryblok {
  cta: string;
  href: string;
  _uid: string;
  component: "button";
  [k: string]: any;
}

export interface AssetStoryblok {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  focus?: string;
  [k: string]: any;
}

export interface DecoratedImageStoryblok {
  image?: AssetStoryblok;
  decoration?: "" | "1" | "2";
  _uid: string;
  component: "decoratedImage";
  [k: string]: any;
}

export interface FeatureCardStoryblok {
  title?: string;
  description?: string;
  icon?: string;
  withBackgroundNumber?: boolean;
  _uid: string;
  component: "featureCard";
  [k: string]: any;
}


export interface IconStoryblok {
  svg?: AssetStoryblok;
  _uid: string;
  component: "icon";
  [k: string]: any;
}



export interface IconCardStoryblok {
  firstLine?: string;
  secondLine?: string;
  href?: MultilinkStoryblok;
  icon: AssetStoryblok;
  _uid: string;
  component: "iconCard";
  [k: string]: any;
}

export interface PageStoryblok {
  title?: string;
  body?: (SectionGridStoryblok | SectionHeroStoryblok | SectionNewsletterStoryblok)[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface SectionGridStoryblok {
  theme: "light" | "gray" | "dark" | "accent";
  layout: "rightImage" | "leftImage" | "fullWidthThreeColumns" | "fullWidthFourColumns";
  title: string;
  subtitle?: string;
  description?: string;
  children: (BlueCardStoryblok | FeatureCardStoryblok | IconCardStoryblok)[];
  illustration?: DecoratedImageStoryblok[];
  _uid: string;
  component: "sectionGrid";
  [k: string]: any;
}

export interface SectionHeroStoryblok {
  theme: string;
  layout: "1" | "2";
  title?: string;
  subtitle?: string;
  description?: string;
  button?: ButtonStoryblok[];
  _uid: string;
  component: "sectionHero";
  [k: string]: any;
}

export interface SectionNewsletterStoryblok {
  _uid: string;
  component: "sectionNewsletter";
  [k: string]: any;
}
