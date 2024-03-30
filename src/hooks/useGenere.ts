import { useEffect, useState } from "react";
import apiClient from "../sevices/api-client";
import { CanceledError } from "axios";

interface Genere{
    id:number;
    name:string
}

interface FetchGenereResponse{
    count:number;
    results:Genere[];
}


const useGenere = () =>{
    const [generes, SetGenere] = useState<Genere[]>([]);
    const [error, setError] = useState("");
    const [isLoading,setLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true)
    apiClient
        .get<FetchGenereResponse>("/genres",{signal:controller.signal})
        .then((res) => {
        SetGenere(res.data.results);
        console.log(res.data)
        setLoading(false)
        })
        .catch((err) =>{
            if(err instanceof CanceledError) return;
             setError(err.message)
             setLoading(false)
            });

        return () => controller.abort();
    },[]);

    return {generes,error,isLoading};
}

export default useGenere;