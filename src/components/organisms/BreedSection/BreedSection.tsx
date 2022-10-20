import { ArrowRight } from "phosphor-react";
import { Link, useLoaderData } from "react-router-dom";
import { ApiResponse } from "../../../types/apiTypes";
import { breedList } from "../../../utils/breedList";

export const BreedSection = () => {

  const breeds = useLoaderData() as ApiResponse

  return (
    <section id="breed-section" className="mx-40">
      <h1 className="text-center font-medium text-3xl mb-8">Some cool <span className="text-pink-400">breeds</span></h1>
      <div className="grid grid-cols-4 gap-10">
        {breedList(breeds)}
      </div>
        <Link className="text-pink-400 flex items-center gap-1 hover:text-pink-600 duration-300 justify-end my-4" to="/cats/0">
          See more 
          <ArrowRight className="text-lg"/>
        </Link>
    </section>
  )
}
