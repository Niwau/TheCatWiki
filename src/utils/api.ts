import { ApiResponse } from "../types/apiTypes";

export const API_ENDPOINT = 'https://api.thecatapi.com/v1';

export async function getBreeds(count: number) {
    const data = await fetch(`${API_ENDPOINT}/breeds?limit=${count}`)
    return await data.json() as ApiResponse
}

