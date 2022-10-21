import { Benefits } from "../components/organisms/Benefits/Benefits"
import { BreedSection } from "../components/organisms/BreedSection/BreedSection"
import { DidYouKnow } from "../components/molecules/DidYouKnow/DidYouKnow"
import { Footer } from "../components/molecules/Footer/Footer"
import { Header } from "../components/molecules/Header/Header"
import { Hero } from "../components/organisms/Hero/Hero"

export const Home = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Benefits/>
      <BreedSection/>
      <DidYouKnow/>
      <Footer/>
    </>
  )
}
