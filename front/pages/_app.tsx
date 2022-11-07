import { apiPlugin, storyblokInit } from "@storyblok/react";
import type { AppProps } from "next/app";
import { BlueCardBlok } from "../components/storyblok/blue-card-blok";
import { ButtonBlok } from "../components/storyblok/button-blok";
import { DecoratedImageBlok } from "../components/storyblok/decorated-image-blok";
import { FeatureCardBlok } from "../components/storyblok/feature-card-blok";
import { SectionHeroBlok } from "../components/storyblok/section-hero-blok";
import { IconCardBlok } from "../components/storyblok/icon-card-blok";
import { SectionNewsletterBlok } from "../components/storyblok/section-newsletter-blok";
import { PageStory } from "../components/storyblok/page-story";
import { SectionGridBlok } from "../components/storyblok/section-grid-blok";
import "../styles/globals.css";

storyblokInit({
  accessToken: "rJr4rAGKM6CweqZWfBz35Att",
  use: [apiPlugin],
  components: {
    page: PageStory,
    sectionGrid: SectionGridBlok,
    featureCard: FeatureCardBlok,
    decoratedImage: DecoratedImageBlok,
    button: ButtonBlok,
    sectionHero: SectionHeroBlok,
    iconCard: IconCardBlok,
    blueCard: BlueCardBlok,
    sectionNewsletter: SectionNewsletterBlok,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
