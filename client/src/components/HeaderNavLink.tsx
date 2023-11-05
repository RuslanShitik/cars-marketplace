import React, {FC} from "react";
import { Link } from "react-router-dom";

interface IHeaderNavLinkProps {
    to: string,
    text: string,
}

export const HeaderNavLink: FC<IHeaderNavLinkProps>  = ({to, text}) => {
    return (
        <Link className="text-blue-500 hover:text-rose-500 p-3" to={to}>{text}</Link>
    )
}