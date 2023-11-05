import React, {FC} from "react";
import { AdvertiseList } from "../components/AdvertiseList";
export const HomePage: FC = () => {
    return (
        <>
            <h3 className="text-2xl mb-3">Last advertises</h3>
            <div className="">
                <AdvertiseList/>
            </div>
        </>
    )
}