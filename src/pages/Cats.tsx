import { CatsWrapper } from "../components/organisms/CatsWrapper/CatsWrapper"
import { Footer } from "../components/molecules/Footer/Footer"
import { Header } from "../components/molecules/Header/Header"
import { PaginationButtons } from "../components/molecules/PaginationButtons/PaginationButtons"

export const Cats = () => {

  return (
    <div>
      <Header/>
      <CatsWrapper/>
      <PaginationButtons/>
      <Footer/>
    </div>
  )
}

