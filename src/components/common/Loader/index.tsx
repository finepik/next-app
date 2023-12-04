import { BiLoaderCircle } from "react-icons/bi";
import * as Style from "./index.styled";

const Loader = () => {
  return (
    <Style.Loader>
      <Style.Icon>
        <BiLoaderCircle />
      </Style.Icon>
      <Style.Text>Loading...</Style.Text>
    </Style.Loader>
  );
};

export default Loader;
