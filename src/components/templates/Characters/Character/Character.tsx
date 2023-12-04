import { Character } from "@/apiRequests/api";
import Link from "next/link";
import React from "react";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import * as Style from "./index.styled";

const Character: React.FC<Character> = (props) => {
  console.log('props', props)
  return (
    <Style.Character>
      <Link href={`/characters/${props.id}`}>
        <Style.Content>
          <Style.Cards>
            <Style.Card1
              src={
                props.image
                  ? props.image
                  : "https://klike.net/uploads/posts/2019-05/1556708032_1.jpg"
              }
              alt={props.image}
            ></Style.Card1>

            <Style.Card2>
              <Style.Status>
                <Style.StatusIcon>
                  <BsFillPatchQuestionFill
                      color={
                        props.status =='Dead' ? 'red' : props.status == 'unknown' ? '#27292D' : 'rgb(106,192,69)'
                      }
                  />
                </Style.StatusIcon>
                <Style.StatusText> status: {props.status} </Style.StatusText>
              </Style.Status>
              <Style.Details>DETAILS</Style.Details>
            </Style.Card2>
          </Style.Cards>

          <Style.Name>{props.name}</Style.Name>

          <Style.Text>
            {props.type} {props.location.name}
          </Style.Text>
        </Style.Content>
      </Link>
    </Style.Character>
  );
};

export default Character;
