export const CenteredHero = (props: {
  title: React.ReactNode;
  description: string;
  buttons?: React.ReactNode;
}) => (
  <>
    <div className="mt-3 text-center text-5xl font-bold tracking-tight text-white">
      {props.title}
    </div>

    <div className="mx-auto mt-5 max-w-screen-md text-center text-xl text-muted-foreground text-gray-400">
      {props.description}
    </div>
  </>
);
