export interface Breed {
    id: string
    name: string
    origin: string
    image: {
        url: string
    }
    description: string
    temperament: string
}

export type Breeds = Breed[]