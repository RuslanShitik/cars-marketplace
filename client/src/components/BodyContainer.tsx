import React, {FC} from "react";
import { Outlet } from "react-router-dom";

export const BodyContainer: FC = () => {
    return (
        <div className="flex-1">
            <div className="container mx-auto px-3">
                <Outlet/>
            </div>
        </div>
        
    )
}