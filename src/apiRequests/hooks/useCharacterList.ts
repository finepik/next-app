import { useQuery, useQueryClient } from "@tanstack/react-query";

import {characterListQuery} from "@/apiRequests/api";

export const useCharacterList = (pageNumber: number) => {
  const queryClient = useQueryClient();

  const {
    data: CharacterListData,
    isSuccess,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["getCharacterList", pageNumber],
    queryFn: () => characterListQuery(pageNumber),
    keepPreviousData: true,
    cacheTime: 1000 * 60 * 60,
    staleTime: 1000 * 60 * 60,
  });

  const receiveCharacterList = () => {
    return queryClient.invalidateQueries({ queryKey: ["getCharacterList"] });
  };

  return {
    CharacterListData,
    receiveCharacterList,
    isSuccess,
    isLoading,
    isError,
  };
};
