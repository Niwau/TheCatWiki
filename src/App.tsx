import { Benefits } from "./components/Benefits/Benefits"
import { BreedSection } from "./components/BreedSection/BreedSection"
import { DidYouKnow } from "./components/DidYouKnow/DidYouKnow"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { Hero } from "./components/Hero/Hero"

function App() {

  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Benefits/>
      <BreedSection/>
      <DidYouKnow/>
      <Footer/>
    </div>
  )
}

export default App
