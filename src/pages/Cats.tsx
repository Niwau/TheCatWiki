import { CatsWrapper } from "../components/molecules/CatsWrapper/CatsWrapper"
import { Footer } from "../components/molecules/Footer/Footer"
import { Header } from "../components/molecules/Header/Header"
import { PaginationButtons } from "../components/molecules/PaginationButtons/PaginationButtons"

export const Cats = () => {

  return (
    <>
      <Header/>
        <CatsWrapper/>
        <PaginationButtons/>
      <Footer/>
    </>
  )
}

