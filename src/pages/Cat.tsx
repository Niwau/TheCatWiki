import { BreedInformation } from "../components/organisms/BreedInformation/BreedInformation";
import { Footer } from "../components/molecules/Footer/Footer";
import { Header } from "../components/molecules/Header/Header";

export const Cat = () => {

  return (
    <div>
      <Header />
				<BreedInformation/>
      <Footer/>
    </div>
  );
};
