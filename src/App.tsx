import { Benefits } from "./components/Benefits/Benefits"
import { BreedSection } from "./components/BreedSection/BreedSection"
import { Header } from "./components/Header/Header"
import { Hero } from "./components/Hero/Hero"

function App() {

  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Benefits/>
      <BreedSection/>
    </div>
  )
}

export default App
