import React, {FC} from "react";
import { AdvertiseList } from "../components/AdvertiseList";
import { MarkList } from "../components/MarkList";
export const HomePage: FC = () => {
    return (
        <>
            <MarkList/>
            <h3 className="text-2xl mb-3">Last advertises</h3>
            <AdvertiseList/>
        </>
    )
}