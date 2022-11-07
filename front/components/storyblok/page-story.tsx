import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Head from "next/head";
import { PageStoryblok } from "../../component-types-sb";
import { Footer } from "../footer";
import { Header } from "../header";

export function PageStory({ blok }: { blok: PageStoryblok }) {
  return (
    <>
      <Head>
        <title>{blok.title || "Pickbeam"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main {...storyblokEditable(blok)}>
        {blok.body?.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </main>

      <Footer />
    </>
  );
}
