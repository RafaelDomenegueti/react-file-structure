import { useEffect } from "react";
import { useProfile } from "../hooks/useProfile";

export const Routes = () => {
    const { ProfileData, getProfileData } = useProfile()

    useEffect(() => {
        getProfileData('', '')
    }, [])

    return (
        <>
            <h1>{ProfileData?.nome}</h1>
        </>
    );
};