import Loader from "@/components/common/Loader";
import * as Style from "@/components/templates/Details/index.styled";
import { useCharacter } from "@/apiRequests/hooks/useCharacter";
import { useRouter } from "next/router";
import EpisodeItem from "./EpisodeItem/EpisodeItem";
import Link from "next/link";
import Comments from "@/components/templates/Details/Comments/Comments";

const Details = () => {
  const router = useRouter();
  const { CharacterData, isLoading } = useCharacter(
    (Number(router.query.id)) || 0
  );
  console.log(CharacterData)

  if (isLoading) {
    return <Loader />;
  }

  const episodesList = CharacterData?.episode.map((value) => {
    return <EpisodeItem key={value} text={value} />;
  });
  return (
    <Style.Details>
      <Style.BackgroundImage
        src={CharacterData?.image}
      ></Style.BackgroundImage>
      <Style.Content>
        <Style.ContentTitle>
          <Link href={"/"}>Back to Characters</Link>
        </Style.ContentTitle>

        <Style.Data>
          <Style.Image>
            <Style.Img
              src={CharacterData?.image}
            ></Style.Img>
          </Style.Image>

          <Style.Description>
            <Style.TitleSpan style={{fontSize: '48px'}}>
              {CharacterData?.name}
            </Style.TitleSpan>
            <Style.Title>
              <Style.TitleSpan>
                {`Race is:  `}
              </Style.TitleSpan>
              {CharacterData?.species}
            </Style.Title>
            {CharacterData?.type != '' && (
                <Style.Title>
                  <Style.TitleSpan>
                    {`Type is: `}
                  </Style.TitleSpan>
                  {CharacterData?.type}
                </Style.Title>
            )}
            <Style.Title>
              <Style.TitleSpan>
                {`Gender is: `}
              </Style.TitleSpan>
              {CharacterData?.gender}
            </Style.Title>
            <Style.Title>
              <Style.TitleSpan>
                {`From: `}
              </Style.TitleSpan>
              {CharacterData?.origin.name}
            </Style.Title>
            <Style.Title>
              <Style.TitleSpan>
                {`Last seen in: `}
              </Style.TitleSpan>
              {CharacterData?.location.name}
            </Style.Title>

            <Style.Genres>{episodesList}</Style.Genres>

          </Style.Description>
        </Style.Data>
        {CharacterData != undefined && (
            <>
              <Style.CommentsTitle>
                Comments
              </Style.CommentsTitle>
              <Comments PersonKey={CharacterData.id}/>
            </>

        )}
      </Style.Content>
    </Style.Details>
  );
};

export default Details;
