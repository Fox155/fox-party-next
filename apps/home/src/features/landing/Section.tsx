import { cn } from "@/utils/Helpers";

export const Section = (props: {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
}) => (
  <div className={cn("px-3 py-16", props.className)}>
    {(props.title || props.subtitle || props.description) && (
      <div className="mx-auto mb-12 max-w-screen-md text-center">
        {props.subtitle && (
          <div className="bg-gradient-to-r text-gray-800 bg-clip-text text-xl  font-bold">
            {props.subtitle}
          </div>
        )}

        {props.title && (
          <div className="mt-1 text-3xl font-bold">{props.title}</div>
        )}

        {props.description && (
          <div className="mt-2 text-lg text-muted-foreground text-white">
            {props.description}
          </div>
        )}
      </div>
    )}

    <div className="mx-auto max-w-screen-lg">{props.children}</div>
  </div>
);
