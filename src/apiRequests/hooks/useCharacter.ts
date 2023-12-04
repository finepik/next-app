import { useQuery, useQueryClient } from "@tanstack/react-query";

import { characterQuery } from "@/apiRequests/api";

export const useCharacter = (id: number) => {
  const queryClient = useQueryClient();

  const myRequest =  useQuery({
    queryKey: ["getCharacter", id],
    queryFn: () => characterQuery(id),
    cacheTime: 1000 * 60 * 60,
    staleTime: 1000 * 60 * 60,
    enabled: id !== 0,
  });

  const {
    data: CharacterData,
    isSuccess,
    isLoading,
    isError,
  } = myRequest

  const receiveCharacter = () => {
    return queryClient.invalidateQueries({
      queryKey: ["getCharacter"],
    });
  };

  return {
    CharacterData,
    receiveCharacter,
    isSuccess,
    isLoading,
    isError,
  };
};
