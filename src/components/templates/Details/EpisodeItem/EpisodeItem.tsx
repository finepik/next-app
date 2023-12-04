import React from "react";
import * as Style from "./index.styled";
import {GiFilmProjector} from 'react-icons/gi'
import Link from "next/link";

type EpisodeType = {
  text: string;
};
const EpisodeItem: React.FC<EpisodeType> = (props) => {
    console.log(props.text)
    if (props.text == undefined || props.text.length == 0) return null
    const episodeText = props.text.split('/').pop()
  return (<Link href={'https://rick-i-morty.online/?utm_referrer=https%3A%2F%2Fwww.google.com%2F'} target={'_blank'}>
    <Style.EpisodeItem>
        <Style.Icon>
            <GiFilmProjector size={36}/>
        </Style.Icon>
      <Style.Text>episode #{episodeText}</Style.Text>
    </Style.EpisodeItem>
      </Link>
  );
};

export default EpisodeItem;
