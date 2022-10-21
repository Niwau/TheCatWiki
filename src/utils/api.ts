import { useEffect, useState } from "react";
import { Breeds } from "../types/api";

export const API_ENDPOINT = 'https://api.thecatapi.com/v1';

export const useFetch = () => {
    const [breeds, setBreeds] = useState<Breeds | []>([])

    useEffect(() => {
        fetch(`${API_ENDPOINT}/breeds`)
            .then(res => res.json())
            .then(data => setBreeds(data))
    }, [])

    return breeds
}