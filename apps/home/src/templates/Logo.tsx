import { AppConfig } from "@/utils/AppConfig";

export const Logo = (props: { isTextHidden?: boolean }) => (
  <div className="flex items-center text-xl font-semibold text-white">
    {!props.isTextHidden && AppConfig.name}
  </div>
);
