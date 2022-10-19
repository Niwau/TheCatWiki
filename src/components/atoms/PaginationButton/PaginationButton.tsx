import { Link } from "react-router-dom"
import { Wrapper } from "./PaginationButton.styles"

type PaginationButtonProps = {
    children: string,
    variant?: 'pink',
    path: string
}

export const PaginationButton = ({ children, variant, path } : PaginationButtonProps) => {
  return (
    <Wrapper variant={variant}>
        <Link to={path}>{ children }</Link>
    </Wrapper>
  )
}
