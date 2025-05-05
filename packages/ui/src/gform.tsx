import Iframe from "react-iframe";

export interface GFormProps {
  src: string;
}

const GForm = async ({ src }: GFormProps) => {
  return (
    <Iframe
      url={src}
      width="100%"
      height="500px"
      id=""
      className=""
      display="block"
      position="relative"
    />
  );
};

export default GForm;
