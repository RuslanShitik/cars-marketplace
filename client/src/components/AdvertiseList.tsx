import React, {FC} from "react";
import { getAdvertises } from "../services/advertise.service";
import { IAdvertise } from "../types/adverise";
import Loading from "../components/Loading";
import { AdvertiseListElement } from "./AdvertiseListElement";

interface IAdvertiseListProps {
    searchQuery?: object
}

export const AdvertiseList: FC<IAdvertiseListProps> = ({searchQuery = null}) => {

    const [advertises, setAdvertises] = React.useState<IAdvertise[]>([])
    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    const [isError, setIsError] = React.useState<boolean>(false)
    
    const fetchAdvertiseList = async () => {
        setIsLoading(true)
        try {
            const response = await getAdvertises(searchQuery);
            setAdvertises(response.data.advertises)
        }
        catch {
            setIsError(true)
        }
        finally {
            setIsLoading(false)
        }
    }
    React.useEffect(() => {
        fetchAdvertiseList()
    }, [])

    return (
        <div className="bg-white p-3 rounded-md drop-shadow-md">
            {isLoading && <Loading />}
            {isError ? <p>Error!!!</p> : (
                !isLoading && advertises.length ? (
                    <div className="columns-1">
                        {advertises.map((advertise) => (
                            <AdvertiseListElement key={advertise.id} advertise={advertise}/>
                        ))}
                    </div>
                ) : (
                    <p>no data</p>
                )
            )}
        </div>
    )
}