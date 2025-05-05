import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

import { Features } from "@/templates/Features";
import { Footer } from "@/templates/Footer";
import { Hero } from "@/templates/Hero";
import StickyPlaylist from "@repo/ui/sticky-playlist";

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: "Index",
  });

  return {
    title: t("meta_title"),
    description: t("meta_description"),
  };
}

const IndexPage = (props: { params: { locale: string } }) => {
  unstable_setRequestLocale(props.params.locale);

  return (
    <>
      <Hero />
      <Features />
      <Footer />
      <StickyPlaylist src="https://open.spotify.com/playlist/5bBvFzW1afmFNCtDMOYdMG?si=8cecae4391a54abc" />
    </>
  );
};

export default IndexPage;
