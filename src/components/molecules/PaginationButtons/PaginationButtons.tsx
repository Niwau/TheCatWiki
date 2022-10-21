import { useParams } from "react-router-dom";
import { PaginationButton } from "../../atoms/PaginationButton/PaginationButton";
import { Wrapper } from "./PaginationButtons.styles"

export const PaginationButtons = () => {

  const PaginationButtonsList : number[] = [];
  const { page } = useParams();
  const pageNumber = parseInt(page!)

  for (let i = 0; i < pageNumber; i++) {
    PaginationButtonsList.push(i);
  }

  return (
    <Wrapper>
      {
        PaginationButtonsList.map((i) => (
          <PaginationButton key={i} path='' children={i.toString()}/>
        ))
      }
    </Wrapper>
  )
}
