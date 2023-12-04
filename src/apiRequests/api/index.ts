import axios from "../axios";


export interface Character {
  "id": number,
  "name": string,
  "status": string,
  "species": string,
  "type": string,
  "gender": string,
  "origin": {
    "name": string,
    "url": string
  },
  "location": {
    "name": string,
    "url": string
  },
  "image": string,
  "episode": string[],
  "url": string,
  "created": string
}
export interface CharacterList {
  "info": {
    "count": number,
    "pages": number,
    "next": string | null,
    "prev": string | null
  },
  results: Character[]
}

export const characterListQuery = async (pageNumber: number) => {
  const response = await axios.get<{
    data: CharacterList
  }>(`?page=${pageNumber}`);
  return response.data;
};

export const characterQuery = async (id: number) => {
  const response = await axios.get<{
    data: Character
  }>(`${id}`);
  return response.data;
};
