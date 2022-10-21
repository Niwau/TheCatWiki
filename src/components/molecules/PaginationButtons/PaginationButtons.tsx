import { PaginationButton } from "../../atoms/PaginationButton/PaginationButton"
import { Wrapper } from "./PaginationButtons.styles"
import { usePaginationButtons } from "./usePaginationButtons"

export const PaginationButtons = () => {

  const buttons = usePaginationButtons()

  return (
    <Wrapper>
      {
        buttons.map(i => <PaginationButton path={`/cats/${i}`} key={i}>{i}</PaginationButton>)
      }
    </Wrapper>
  )
}
