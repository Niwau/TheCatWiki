import { PaginationButton } from "../PaginationButton/PaginationButton";
import { Wrapper } from "./PaginationButtons.styles"

export const PaginationButtons = ({ count } : {count: number}) => {

  const PaginationButtonsList : number[] = [];

  for (let i = 0; i < count; i++) {
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
