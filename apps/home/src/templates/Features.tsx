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
        <GForm src="https://docs.google.com/forms/d/e/1FAIpQLSeJr5ehTVDq1T9sXms0lWw_Co3_Off-j2bE1Tt6Fkb1XlbnvA/viewform" />
      </Section>
    </Background>
  );
};
