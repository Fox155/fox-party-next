import { useTranslations } from "next-intl";
import React from "react";

export const CenteredFooter = (props: {
  logo: React.ReactNode;
  name: string;
  iconList: React.ReactNode;
  legalLinks: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const t = useTranslations("Footer");

  return (
    <div className="flex flex-col items-center text-center">
      {props.logo}

      <ul className="mt-4 flex gap-x-8 text-lg max-sm:flex-col [&_a:hover]:opacity-100 [&_a]:opacity-60">
        {props.children}
      </ul>

      <div className="mt-6 flex w-full items-center justify-between gap-y-2 border-t pt-3 text-sm text-muted-foreground max-md:flex-col">
        <div>
          {`© Copyright ${new Date().getFullYear()} ${props.name}. `}
          {t.rich("designed_by", {
            author: () => <>Fox</>,
          })}
        </div>
      </div>
    </div>
  );
};
