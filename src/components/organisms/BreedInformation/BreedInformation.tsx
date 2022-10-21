import { StyledBreedInformation } from "./BreedInformation.styles";
import { useBreedInformation } from "./useBreedInformation";

export const BreedInformation = () => {

  const breed = useBreedInformation()

  return (
    <StyledBreedInformation>
      <img src={breed?.image?.url ?? "/CatNotExist.webp"}/>
      <aside>
        <h1>{breed?.name}</h1>
        <label>{breed?.origin}</label>
        <p>{breed?.description}</p>
        <h3>{breed?.temperament}</h3>
      </aside>
      <footer>
      </footer>
    </StyledBreedInformation>
  );
};
