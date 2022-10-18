import { API_ENDPOINT } from "../utils/api";

export type ApiResponse = [
    {
        id: string,
        name: string,
        origin: string,
        image: {
            url: string
        }
    }
]