import { ReactNode } from 'react';

export interface ProfileContextData {
  getProfileData(token: string, id: string): void,
  ProfileData: ProfileDataResponse,
};

export interface ProfileDataResponse {
  id: string;
  nome: string;
  email: string;
  cpf: number;
  data_nascimento: number;
}

export interface ProfileProviderProps {
  children: ReactNode;
}
