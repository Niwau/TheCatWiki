import { NavLink } from "react-router-dom"
import { Wrapper } from "./PaginationButton.styles"

type PaginationButtonProps = {
    children: string,
    path: string
}

export const PaginationButton = ({ children, path } : PaginationButtonProps) => {
  return (
    <Wrapper>
        <NavLink to={path}>{ children }</NavLink>
    </Wrapper>
  )
}
