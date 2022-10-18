import { useEffect, useState } from "react"
import { ApiResponse } from "../types/apiTypes"

export const useFetch = (endpoint : string) => {
    const [data, setData] = useState<ApiResponse | []>([])

    useEffect(() => {
        fetch(endpoint)
            .then(res => res.json())
            .then(json => setData(json))
    }, [])

    return data
}