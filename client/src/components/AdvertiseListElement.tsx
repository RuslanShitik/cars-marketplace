import React, {FC} from "react";
import { IAdvertise } from "../types/adverise";
import { Link } from "react-router-dom";

interface IAdvertiseListElementProps {
    advertise: IAdvertise;
}

export const AdvertiseListElement: FC<IAdvertiseListElementProps> = ({ advertise }) => {
    return (
        <div className="py-3 flex flex-col">
            <Link to={`/${advertise.id}`} className="text-xl text-blue-500 font-bold">
            {`
                ${advertise.generation.model?.mark?.name}
                ${advertise.generation.model?.name}
                ${advertise.generation.name}
            `}
            </Link>
            <span className="text-lg font-semibold">{advertise.price}$</span>
            <div className="flex flex-wrap text-sm gap-1">
                <span>{advertise.year} y.,</span>
                <span>{advertise.transmission.name},</span>
                <span>{advertise.fuel.name},</span>
                <span>{advertise.body.name},</span>
                <span>{advertise.mileage} km</span>
            </div>
            
        </div>
    );
}