import { useEffect, useState } from "react"

type Response = [
    {
        origin: string,
        name: string,
        id: string,
        image: {
            url: string
        }
    }
]

export const useFetch = (endpoint : string) => {
    const [data, setData] = useState<Response | []>([])

    useEffect(() => {
        fetch(endpoint)
            .then(res => res.json())
            .then(json => setData(json))
    }, [])

    return data
}