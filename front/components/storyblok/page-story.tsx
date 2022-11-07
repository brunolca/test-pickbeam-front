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
      </Head>

      <Header />

      <main {...storyblokEditable(blok)} key={blok._uid}>
        {blok.body?.map((nestedBlok, i) => (
          <StoryblokComponent blok={nestedBlok} i={i} key={nestedBlok._uid} />
        ))}
      </main>

      <Footer />
    </>
  );
}
