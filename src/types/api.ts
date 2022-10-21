interface Breed {
    id: string,
    name: string,
    origin: string,
    image: {
        url: string
    }
}

export type Breeds = Breed[]