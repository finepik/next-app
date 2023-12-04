import { useCharacterList } from "@/apiRequests/hooks/useCharacterList";
import { useState } from "react";
import Pagination from "../../common/Pagination/Pagination";
import Character from "./Character/Character";
import * as Style from "./index.styled";

const Characters = () => {
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const { CharacterListData, isLoading } = useCharacterList(page);
  const characterList = CharacterListData?.results.map((character) => {
    return <Character key={character.id} {...character}
    ></Character>;
  });

  if (isLoading) {
    return;
  }
  return CharacterListData ? (
    <Style.Characters>
      <Style.Content>
        <Style.Title>About Characters</Style.Title>
        <Style.List>{characterList}</Style.List>
        <Pagination
          totalUsersCount={CharacterListData.info.count}
          currentPage={page}
          pageSize={pageSize}
          onPageChange={(page) => setPage(page)}
        />
      </Style.Content>
    </Style.Characters>
  ) : null;
};

export default Characters;
