import { useTranslations } from "next-intl";

import { Background } from "@/components/Background";
import { Section } from "@/features/landing/Section";
import GForm from "@repo/ui/gform";

export const Features = () => {
  const t = useTranslations("Features");

  return (
    <Background>
      <Section
        subtitle={t("section_subtitle")}
        title={t("section_title")}
        description={t("section_description")}
      >
        <GForm src="https://docs.google.com/forms/d/e/1NsEZsZhMvCW9nJgW4wgRDV_pdJ5v5QUPaIjOuNDsUf8/viewform" />
      </Section>
    </Background>
  );
};
