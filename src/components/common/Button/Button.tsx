import React from "react";
import * as Style from "./index.styled";

type ButtonProps = {
  name: string | JSX.Element;
  action: () => void;
};
const Button: React.FC<ButtonProps> = (props) => {
  return (
    <Style.Button onClick={() => props.action()}>
      <Style.Content>
        <Style.Name>{props.name}</Style.Name>
      </Style.Content>
    </Style.Button>
  );
};
export default Button;
