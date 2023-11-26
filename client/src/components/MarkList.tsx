import React, {FC} from "react";
import { getMarks } from "../services/advertise.service";
import { IMark } from "../types/adverise";
import Loading from "../components/Loading";
import { Link, useLocation  } from "react-router-dom";

export const MarkList: FC = () => {

    const [marks, setMarks] = React.useState<IMark[]>([])
    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    const [isError, setIsError] = React.useState<boolean>(false)
    
    const fetchMarkList = async () => {
        setIsLoading(true)
        try {
            const response = await getMarks();
            setMarks(response.data.marks)
        }
        catch {
            setIsError(true)
        }
        finally {
            setIsLoading(false)
        }
    }
    React.useEffect(() => {
        fetchMarkList()
    }, [])

    return (
        <div className="bg-white p-3 rounded-md drop-shadow-md mb-6">
            {
                isLoading       ? <Loading /> : 
                isError         ? <p>Error!!!</p> :
                !marks.length   ? <p>no data</p> : (
                    <div className="columns-2">
                        {marks.map((mark) => (
                           <div key={mark.id}><Link className="text-blue-500" to={`cars/${mark.name}`}>{mark.name}</Link></div>
                        ))}
                    </div>
                )
            }
        </div>
    )
}