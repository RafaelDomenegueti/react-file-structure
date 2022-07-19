import { createContext, useState } from "react";
import { ProfileContextData, ProfileDataResponse, ProfileProviderProps } from "./types";

export const ProfileContext = createContext({} as ProfileContextData);

export function ProfileProvider({ children }: ProfileProviderProps) {
  const [ProfileData, setProfileData] = useState<ProfileDataResponse>({} as ProfileDataResponse)

  function getProfileData(token: string, id: string) {
    const data = {
      id: '738219',
      nome: 'Rafael de Oliveira Domenegueti',
      email: 'rafael@gmail.com',
      cpf: 123123123,
      data_nascimento: 232545,
    }
    setProfileData(data);
  }

  return (
    <ProfileContext.Provider 
      value={{
        ProfileData,
        getProfileData
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};