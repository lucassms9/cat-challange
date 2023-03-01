import { api } from './api';

export type VotingDTO = {
  image_id: string;
  value: number;
};
export type CatItem = {
  id: string;
  name: string;
  affection_level: string;
  image: {
    id: string;
    url: string;
  };
};

export const voting = (data: VotingDTO) => {
  return api.post('/voting', data);
};

export const listCats = () => {
  return api.get<CatItem[]>('/breeds');
};
