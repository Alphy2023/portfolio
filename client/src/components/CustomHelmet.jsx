import { Helmet } from "react-helmet-async";

const CustomHelmet = (props) => {
    const {title}=props;
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}

export default CustomHelmet