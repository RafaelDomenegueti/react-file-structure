import { useContext } from "react";
import { ProfileContext, ProfileProvider } from "./ProfileContext";

function useProfile() {
  const profile = useContext(ProfileContext);

  return profile;
}

export { useProfile, ProfileProvider }
