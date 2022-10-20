interface BreedProps {
    image: string
    name: string
    country: string
    pageUrl: string
}

export const Breed = (props : BreedProps) => {
  return (
      <a href={props.pageUrl} className="outline outline-1 outline-black hover:shadow-1 duration-300 hover:scale-[101%]">
        <img src={props.image} className="h-[20rem] w-full object-cover"/>
        <blockquote className="p-4">
            <h1 className="font-medium text-xl">{props.name}</h1>
            <p className="text-gray-600">{props.country}</p>
        </blockquote>
    </a>
  )
}
