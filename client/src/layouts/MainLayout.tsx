import React, {FC} from "react";
import { Header } from "../components/Header";
import { BodyContainer } from "../components/BodyContainer";
import Breadcrumbs from "../components/Breadcrumbs";

export const MainLayout: FC = () => {
    return (
        <>
            <Header/>
            <Breadcrumbs/>
            <BodyContainer/>
            <div>footer</div>
        </>
    )
}