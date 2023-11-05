import React, {FC} from "react";
import { HeaderNavLink } from "./HeaderNavLink";

export const Header: FC = () => {
    return (
        <div className="text-l drop-shadow-xl font-semibold mb-12 bg-white">
            <div className="container mx-auto flex">
                <HeaderNavLink to='/' text="HomeNew"/>
                <HeaderNavLink to='/cars/sukaa' text="mark"/>
            </div>
        </div>
    )
}