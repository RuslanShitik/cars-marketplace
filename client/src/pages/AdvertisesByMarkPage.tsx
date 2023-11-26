import React, {FC} from "react";
import { useRoutes } from "react-router-dom";
import { useParams } from "react-router-dom";
import { AdvertiseList } from "../components/AdvertiseList";

export const AdvertiseByMarkPage: FC = () => {
    
    const { markName } = useParams();

    console.log(markName)


    return (
        <>
            <p>By mark page</p>
            <AdvertiseList searchQuery={{mark: markName}}/>
        </>
    )
}