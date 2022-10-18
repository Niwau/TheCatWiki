import { useLoaderData } from "react-router-dom"
import { Breed } from "../components/molecules/Breed/Breed"
import { CatsWrapper } from "../components/molecules/CatsWrapper/CatsWrapper"
import { Footer } from "../components/molecules/Footer/Footer"
import { Header } from "../components/molecules/Header/Header"
import { ApiResponse } from "../types/apiTypes"

export const Cats = () => {

  const breeds = useLoaderData() as ApiResponse;

  return (
    <>
      <Header/>
        <CatsWrapper>
          {breeds.map(breed => (
            <Breed 
              name={breed.name} 
              country={breed.origin} 
              image={breed.image.url}
              key={breed.id}
              pageUrl=''
            />
          ))}
        </CatsWrapper>
      <Footer/>
    </>
  )
}

