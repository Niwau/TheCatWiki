import { useContext } from "react";
import { useParams } from "react-router-dom";
import { APIContext } from "../../../context/APIContext";

export const useBreedInformation = () => {
    const { id } = useParams();
    const breeds = useContext(APIContext);
    
    return (
        breeds.find((breed) => (breed.id == id))
    )
}