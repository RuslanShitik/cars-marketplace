import React, {FC} from "react";
import { Header } from "../components/Header";
import { BodyContainer } from "../components/BodyContainer";

export const MainLayout: FC = () => {
    return (
        <>
            <Header/>
            <BodyContainer/>
            <div>footer</div>
        </>
    )
}