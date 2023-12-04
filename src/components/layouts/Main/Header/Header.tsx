import Button from "@/components/common/Button/Button";
import React from "react";
import logo from "../../../../../public/img.png"
import { BsLamp } from "react-icons/bs";
import * as Style from "./index.styled";

type HeaderProps = {
  switchTheme: () => void;
};
const Header: React.FC<HeaderProps> = (props) => {
  return (
    <Style.Header id="header">
      <Style.Content>
        <Style.Logo>
          <Style.MainImg src="https://www.lavkaigr.ru/media/uploads/R%26M_logo.png"></Style.MainImg>
        </Style.Logo>

        <Style.Buttons>
          <Button
            name={<BsLamp />}
            action={() => props.switchTheme()}
          />
        </Style.Buttons>
      </Style.Content>
    </Style.Header>
  );
};
export default Header;
