import { ApiResponse } from "../types/apiTypes";

export const API_ENDPOINT = 'https://api.thecatapi.com/v1';
const API_KEY = 'live_ebLVe1XmoJXWDwSN7nXJrg6NEjDNmfEsU2i2V3jdps81qk71glEDPtuhGhelLqTe'

export async function getBreeds(limit: number, page: number) {
  
    const data = await fetch(`${API_ENDPOINT}/breeds?limit=${limit}&page=${page}&order=desc`)
    return (
        await data.json() as ApiResponse
    )
}
