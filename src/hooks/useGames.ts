import { useEffect, useState } from "react";
import apiClient from "../sevices/api-client";
import { CanceledError } from "axios";

interface Game {
    id: number;
    name: string;
  }
  
  interface FetchGameResponse {
    count: number;
    results: Game[];
  }


 const useGames = ()=>{
    const [games, SetGames] = useState<Game[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();
    apiClient
        .get<FetchGameResponse>("/games",{signal:controller.signal})
        .then((res) => {
        SetGames(res.data.results);
        })
        .catch((err) =>{
            if(err instanceof CanceledError) return;
             setError(err.message)
            });

        return () => controller.abort();
    },[]);

    return {games,error};
}

export default useGames;
