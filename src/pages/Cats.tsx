import { useLoaderData, useParams } from "react-router-dom"
import { breedList } from "../utils/breedList"
import { CatsWrapper } from "../components/molecules/CatsWrapper/CatsWrapper"
import { Footer } from "../components/molecules/Footer/Footer"
import { Header } from "../components/molecules/Header/Header"
import { ApiResponse } from "../types/apiTypes"
import { useEffect } from "react"
import { getBreeds } from "../utils/api"

export const Cats = () => {

  const breeds = useLoaderData() as ApiResponse;

  return (
    <>
      <Header/>
        <CatsWrapper>
          {breedList(breeds)}
        </CatsWrapper>
      <Footer/>
    </>
  )
}

